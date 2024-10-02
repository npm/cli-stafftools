import { flow } from 'lodash-es'
import * as pull from './pull.mjs'
import { commit, getPkg } from './_common.mjs'
import { EXIT } from '../worker/thread.mjs'
import semver from 'semver'

export const type = pull.type

export const filter = [
  ...pull.filter,
  (item, _, __, opts) => opts.argv.packages.map(repoFromPkg).includes(item.name),
  (item, _, __, opts) => opts.argv.matches.includes(item.pkg.engines?.node),
]

// Example usage (single package):
// node ./bin/gh.mjs repos replace-engines --matches "^14.17.0 || ^16.13.0 || >=18.0.0" "^16.14.0 || >=18.0.0" --replacement "^18.17.0 || >=20.5.0" --packages "@npmcli/eslint-config" --install --force --dryrun

export const args = {
  desc: 'Replace node engines',
  builder: flow(pull.args.builder, (yargs) =>
    yargs.options({
      title: {
        default: 'Update node engines',
        desc: 'PR title and commit message, without the `<TYPE>:` prefix',
      },
      prBody: {
        default: 'Update node engines',
        desc: 'PR body',
      },
      packages: {
        type: 'array',
        required: true,
        desc: 'packages to check and possibly update',
      },
      matches: {
        type: 'array',
        required: true,
        desc: 'engine version ranges to match - exact match required',
      },
      replacement: {
        type: 'string',
        required: true,
        desc: 'replacement engine version range',
      },
      branchName: {
        type: 'string',
        default: 'stafftools/node-engines',
        desc: 'branch name to use',
      },
      install: {
        type: 'boolean',
        default: false,
        desc: 'install deps',
      },
      force: {
        type: 'boolean',
        default: false,
        desc: 'delete existing branch',
      },
    })
  ),
}

export const success = ({ state }) => state.success

export default [
  ({ argv, run, state }) => {
    const url = run('gh', [
      'pr',
      'list',
      '-L=1',
      `-S="${argv.title}"`,
      '--json=url',
      '-q',
      '.[].url',
    ])
    if (url) {
      state.success = url
      return ['echo', [], { status: () => EXIT }]
    }
  },
  ...pull.default,
  ({ argv }) =>
    argv.install && [
      ['npm', ['i']],
    ],
  ({ argv }) => argv.force && [
    'git',
    ['branch', '-D', argv.branchName],
    {
      status: () => 0,
    }],
  ({ argv }) => ['git', ['checkout', '-b', argv.branchName]],
  ({ argv }) => [
    'npm',
    ['pkg', 'set', `engines.node="${argv.replacement}"`],
  ],
  ({ item, run, argv }) => {
    const pkg = run(...getPkg())
    const isBreaking = !semver.subset(argv.match, argv.replacement)

    const commitType = isBreaking ? 'feat!:' : 'chore:'
    const footer = isBreaking
      ? `\n\nBREAKING CHANGE: ` +
      `\`${pkg.name}\` is now compatible with the ` +
      `following semver range for node: \`${argv.replacement}\``
      : ''

    return commit({
      argv: { message: `${commitType} ${argv.title}${footer}` },
    })
  },
  () => [
    'npx',
    ['template-oss-apply', '--force'],
  ],
  () => {
    return commit({
      argv: { message: 'chore: template-oss-apply' },
    })
  },
  ({ argv }) => !argv.dryrun && [
    'git',
    ['push', argv.remote, argv.branchName, '--force-with-lease'],
  ],
  ({ argv, state }) => !argv.dryrun && [
    'gh',
    [
      'pr',
      'create',
      '--title',
      `"${argv.title}"`,
      '--body',
      `"${argv.prBody}"`,
      '--draft',
      '--head',
      argv.branchName,
      '--base',
      state.defaultBranch,
    ],
  ],
]

function repoFromPkg(pkgName) {
  if (pkgName.startsWith('libnpm')) {
    return "cli"
  }
  return pkgName.replace(/^@npmcli\//, '')
}