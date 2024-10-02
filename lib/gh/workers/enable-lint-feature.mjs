import { flow } from 'lodash-es'
import * as pull from './pull.mjs'
import { commit } from './_common.mjs'
import { EXIT } from '../worker/thread.mjs'
import { satisfies } from 'semver'

export const type = pull.type

export const filter = [
  ...pull.filter,
  (item) => item.name !== 'cli',
  (item) => {
    return (
      item.pkg &&
      Object.hasOwn(item.pkg.devDependencies || {}, '@npmcli/template-oss')
    )
  },
  (item, _, __, opts) =>
    item.pkg.templateOSS[opts.argv.configName] === 'true',
]

// Example usage (single repo):
// node ./bin/gh.mjs repos enable-lint-feature --filter "name:statusboard" --install --force --dryrun

// The defaults below are all for prettier, but you should be able to use this for linting features like no-unused-vars.
export const args = {
  desc: 'Enable lint feature like prettier',
  builder: flow(pull.args.builder, (yargs) =>
    yargs.options({
      configName: {
        type: 'string',
        default: 'prettier',
        desc: 'template-oss config setting name',
      },
      templateOSSRange: {
        type: 'string',
        default: '>=4.23.0',
        desc: 'required template-oss version range',
      },
      lintFixCommitMessage: {
        type: 'string',
        default: 'chore: run prettier',
        desc: 'lintfix commit message',
      },
      prBody: {
        type: 'string',
        default: 'Enable and run prettier',
        desc: 'PR body',
      },
      branchName: {
        type: 'string',
        default: 'stafftools/enable-prettier',
        desc: 'branch name to use',
      },
      devDependencies: {
        type: 'array',
        // based on npm run postlint's output
        default: ['prettier@*', 'eslint-config-prettier@*'],
        desc: 'devDependencies to install',
      },
      exactDevDependencies: {
        type: 'array',
        // Todo: Add this to exactSpecs in template-oss as well
        default: ['@github/prettier-config@0.0.6'],
        desc: 'devDependencies to install with --save-exact',
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
      '-l=Dependencies',
      `-S=templateOSS.${argv.configName}`,
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
  ({ argv }) => [
    'npm',
    ['pkg', 'get', `templateOSS.${argv.configName}`],
    {
      status: ({ status, output }) => output.includes('true') ? EXIT : status,
    },
  ],
  ({ argv }) => [
    'npm',
    ['pkg', 'get', 'templateOSS.version'],
    {
      status: ({ status, output }) => {
        if (status !== 0) {
          return status
        }
        const version = output.replaceAll('"', '')
        if (!satisfies(version, argv.templateOSSRange)) {
          throw new Error(`template-oss version (${version}) doesn't satisfy the required range` +
            ` (${argv.templateOSSRange})`)
        }
        return 0
      },
    },
  ],
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
    // Note: npm pkg set assigns a string value, not a boolean value
    // We'll settle for truthy, instead of jumping through a lot of hoops
    'npm',
    ['pkg', 'set', `templateOSS.${argv.configName}=true`],
  ],
  () => [
    'npx',
    ['template-oss-apply', '--force'],
  ],
  ({ argv }) => argv.devDependencies.length && [
    // Q: Why aren't these required devDependencies installed by template-oss-apply --force?
    'npm',
    ['i', ...argv.devDependencies, '--save-dev'],
  ],
  ({ argv }) => argv.exactDevDependencies.length && [
    'npm',
    ['i', ...argv.exactDevDependencies, '--save-dev', '--save-exact'],
  ],
  ({ argv }) => {
    return commit({
      argv: { message: `chore: enable templateOSS.${argv.configName}` },
    })
  },
  () => [
    'npm',
    ['run', 'lintfix'],
  ],
  ({ argv }) => {
    return commit({
      argv: { message: argv.lintFixCommitMessage },
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
      `"chore: Enable templateOSS.${argv.configName}"`,
      '--body',
      `"${argv.prBody}"`,
      // '--draft',
      '--label',
      'Dependencies',
      '--head',
      argv.branchName,
      '--base',
      state.defaultBranch,
    ],
  ],
]
