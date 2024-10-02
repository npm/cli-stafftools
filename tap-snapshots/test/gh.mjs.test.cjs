/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/gh.mjs TAP all commands > all commands 1`] = `
gh 
gh closed-pending-release
gh closed-pending-release remove-label
gh dependabot
gh dependabot comment
gh dependabot merge
gh dependabot pr-engines
gh dependabot remove-label
gh dependabot rerun-failed-workflows
gh dependabot review
gh graphql
gh graphql add-template-oss
gh graphql clone
gh graphql comment
gh graphql delete-branches
gh graphql enable-lint-feature
gh graphql merge
gh graphql metrics
gh graphql pr-engines
gh graphql publish-release
gh graphql publish-repo
gh graphql pull
gh graphql remove-label
gh graphql repo-settings
gh graphql rerun-failed-workflows
gh graphql review
gh graphql set-secret
gh graphql template-oss-fix
gh labels
gh pending-release
gh pending-release comment
gh pending-release merge
gh pending-release pr-engines
gh pending-release publish-release
gh pending-release remove-label
gh pending-release rerun-failed-workflows
gh pending-release review
gh pull-requests
gh pull-requests comment
gh pull-requests merge
gh pull-requests pr-engines
gh pull-requests remove-label
gh pull-requests rerun-failed-workflows
gh pull-requests review
gh repos
gh repos add-template-oss
gh repos clone
gh repos delete-branches
gh repos enable-lint-feature
gh repos metrics
gh repos publish-repo
gh repos pull
gh repos repo-settings
gh repos set-secret
gh template-oss
gh template-oss comment
gh template-oss merge
gh template-oss pr-engines
gh template-oss remove-label
gh template-oss rerun-failed-workflows
gh template-oss review
gh template-oss template-oss-fix
`

exports[`test/gh.mjs TAP all commands help > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh <command>

Commands:
  npx -p @npmcli/stafftools gh closed-pending-release  Fetch closed pending release pull requests
  npx -p @npmcli/stafftools gh dependabot              Fetch dependabot pull requests
  npx -p @npmcli/stafftools gh graphql                 Fetch a graphql query
  npx -p @npmcli/stafftools gh labels                  Fetch pull requests
  npx -p @npmcli/stafftools gh pending-release         Fetch pending release pull requests
  npx -p @npmcli/stafftools gh pull-requests           Fetch pull requests
  npx -p @npmcli/stafftools gh repos                   Fetch repos
  npx -p @npmcli/stafftools gh template-oss            Fetch template-oss pull requests
  npx -p @npmcli/stafftools gh publish-release         Merge pending release PRs and publish the resulting release
  npx -p @npmcli/stafftools gh template-oss-fix        Fix failing template-oss pull requests

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent"] [default: "json"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help closed-pending-release > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh closed-pending-release

Fetch closed pending release pull requests

Commands:
  npx -p @npmcli/stafftools gh closed-pending-release remove-label  Remove a label from pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps   Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs  Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm"] [default: "table"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help closed-pending-release remove-label > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh closed-pending-release remove-label

Remove a label from pull requests

Command Options:
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --repos         query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps        Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs       Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table         shorthand for --template=table  [boolean] [default: false]
      --confirm       shorthand for --template=confirm  [boolean] [default: false]
      --report        shorthand for --template=report  [boolean] [default: false]
      --remove-label  label to remove from pull requests  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help dependabot > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh dependabot

Fetch dependabot pull requests

Commands:
  npx -p @npmcli/stafftools gh dependabot comment                 Comment on pull requests
  npx -p @npmcli/stafftools gh dependabot merge                   Merge pull requests
  npx -p @npmcli/stafftools gh dependabot pr-engines              Get engine changes in a pull request
  npx -p @npmcli/stafftools gh dependabot remove-label            Remove a label from pull requests
  npx -p @npmcli/stafftools gh dependabot rerun-failed-workflows  Get engine changes in a pull request
  npx -p @npmcli/stafftools gh dependabot review                  Review pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm"] [default: "table"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help dependabot comment > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh dependabot comment

Comment on pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --body     the body to post  [string] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help dependabot merge > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh dependabot merge

Merge pull requests

Command Options:
      --cache           how long for gh to cache the query  [string] [default: "1m"]
      --repos           query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table           shorthand for --template=table  [boolean] [default: false]
      --confirm         shorthand for --template=confirm  [boolean] [default: false]
      --report          shorthand for --template=report  [boolean] [default: false]
      --merge-strategy  strategy to use when merging the pull request  [required] [choices: "squash", "rebase"]
      --remote          name of the remote  [required] [default: "origin"]
      --approve         whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help dependabot pr-engines > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh dependabot pr-engines

Get engine changes in a pull request

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help dependabot remove-label > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh dependabot remove-label

Remove a label from pull requests

Command Options:
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --repos         query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table         shorthand for --template=table  [boolean] [default: false]
      --confirm       shorthand for --template=confirm  [boolean] [default: false]
      --report        shorthand for --template=report  [boolean] [default: false]
      --remove-label  label to remove from pull requests  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help dependabot rerun-failed-workflows > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh dependabot rerun-failed-workflows

Get engine changes in a pull request

Command Options:
      --cache     how long for gh to cache the query  [string] [default: "1m"]
      --repos     query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table     shorthand for --template=table  [boolean] [default: false]
      --confirm   shorthand for --template=confirm  [boolean] [default: false]
      --report    shorthand for --template=report  [boolean] [default: false]
      --workflow  Name of the workflow to rerun  [required] [default: "CI"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help dependabot review > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh dependabot review

Review pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --approve  whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql

Fetch a graphql query

Commands:
  npx -p @npmcli/stafftools gh graphql add-template-oss        Add template-oss to a repo
  npx -p @npmcli/stafftools gh graphql clone                   Clone repos into a directory
  npx -p @npmcli/stafftools gh graphql comment                 Comment on pull requests
  npx -p @npmcli/stafftools gh graphql delete-branches         Delete branches of repos with no remote counterpart
  npx -p @npmcli/stafftools gh graphql enable-lint-feature     Enable lint feature like prettier
  npx -p @npmcli/stafftools gh graphql merge                   Merge pull requests
  npx -p @npmcli/stafftools gh graphql pr-engines              Get engine changes in a pull request
  npx -p @npmcli/stafftools gh graphql publish-release         Merge pending release PRs and publish the resulting release
  npx -p @npmcli/stafftools gh graphql publish-repo            Publish repos from their default branch
  npx -p @npmcli/stafftools gh graphql pull                    Checkout and pull default branch of repos
  npx -p @npmcli/stafftools gh graphql remove-label            Remove a label from pull requests
  npx -p @npmcli/stafftools gh graphql repo-settings           Set common settings on all repos
  npx -p @npmcli/stafftools gh graphql rerun-failed-workflows  Get engine changes in a pull request
  npx -p @npmcli/stafftools gh graphql review                  Review pull requests
  npx -p @npmcli/stafftools gh graphql set-secret              Set Publish Tokens
  npx -p @npmcli/stafftools gh graphql template-oss-fix        Fix failing template-oss pull requests

Command Options:
      --query  path to a query file passed directly to gh api graphql  [string] [required]
      --cache  how long for gh to cache the query  [string] [default: "1m"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent"] [default: "json"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql add-template-oss > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql add-template-oss

Add template-oss to a repo

Command Options:
      --query    path to a query file passed directly to gh api graphql  [string] [required]
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --report   shorthand for --template=report  [boolean] [default: false]
      --remote   name of the remote  [required] [default: "origin"]
      --force    force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync     whether to sync the repo  [boolean] [default: true]
      --install  install deps  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql clone > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql clone

Clone repos into a directory

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]
      --remote  name of the remote  [required] [default: "origin"]
      --force   force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync    whether to sync the repo  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql comment > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql comment

Comment on pull requests

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]
      --body    the body to post  [string] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql delete-branches > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql delete-branches

Delete branches of repos with no remote counterpart

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]
      --remote  name of the remote  [required] [default: "origin"]
      --force   force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync    whether to sync the repo  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql enable-lint-feature > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql enable-lint-feature

Enable lint feature like prettier

Command Options:
      --query                 path to a query file passed directly to gh api graphql  [string] [required]
      --cache                 how long for gh to cache the query  [string] [default: "1m"]
      --report                shorthand for --template=report  [boolean] [default: false]
      --remote                name of the remote  [required] [default: "origin"]
      --force                 delete existing branch  [boolean] [default: false]
      --sync                  whether to sync the repo  [boolean] [default: true]
      --configName            template-oss config setting name  [string] [default: "prettier"]
      --templateOSSRange      required template-oss version range  [string] [default: ">=4.23.0"]
      --lintFixCommitMessage  lintfix commit message  [string] [default: "chore: run prettier"]
      --prBody                PR body  [string] [default: "Enable and run prettier"]
      --branchName            branch name to use  [string] [default: "stafftools/enable-prettier"]
      --devDependencies       devDependencies to install  [array] [default: ["prettier@*","eslint-config-prettier@*"]]
      --exactDevDependencies  devDependencies to install with --save-exact  [array] [default: ["@github/prettier-config@0.0.6"]]
      --install               install deps  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql merge > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql merge

Merge pull requests

Command Options:
      --query           path to a query file passed directly to gh api graphql  [string] [required]
      --cache           how long for gh to cache the query  [string] [default: "1m"]
      --report          shorthand for --template=report  [boolean] [default: false]
      --merge-strategy  strategy to use when merging the pull request  [required] [choices: "squash", "rebase"]
      --remote          name of the remote  [required] [default: "origin"]
      --approve         whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql metrics > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql metrics

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]
  -d, --date    the end date  [required] [default: ""]
  -a, --ago     how many days back to go  [required] [default: "7"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql pr-engines > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql pr-engines

Get engine changes in a pull request

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql publish-release > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql publish-release

Merge pending release PRs and publish the resulting release

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]
      --otp     otp to be used for publish  [string] [required]
      --remote  name of the remote  [required] [default: "origin"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql publish-repo > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql publish-repo

Publish repos from their default branch

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]
      --remote  name of the remote  [required] [default: "origin"]
      --force   force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync    whether to sync the repo  [boolean] [default: true]
      --otp     otp to be used for publish  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql pull > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql pull

Checkout and pull default branch of repos

Command Options:
      --query   path to a query file passed directly to gh api graphql  [string] [required]
      --cache   how long for gh to cache the query  [string] [default: "1m"]
      --report  shorthand for --template=report  [boolean] [default: false]
      --remote  name of the remote  [required] [default: "origin"]
      --force   force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync    whether to sync the repo  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql remove-label > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql remove-label

Remove a label from pull requests

Command Options:
      --query         path to a query file passed directly to gh api graphql  [string] [required]
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --report        shorthand for --template=report  [boolean] [default: false]
      --remove-label  label to remove from pull requests  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql repo-settings > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql repo-settings

Set common settings on all repos

Command Options:
      --query              path to a query file passed directly to gh api graphql  [string] [required]
      --cache              how long for gh to cache the query  [string] [default: "1m"]
      --report             shorthand for --template=report  [boolean] [default: false]
      --branch-protection  Whether to apply branch protection rules  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql rerun-failed-workflows > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql rerun-failed-workflows

Get engine changes in a pull request

Command Options:
      --query     path to a query file passed directly to gh api graphql  [string] [required]
      --cache     how long for gh to cache the query  [string] [default: "1m"]
      --report    shorthand for --template=report  [boolean] [default: false]
      --workflow  Name of the workflow to rerun  [required] [default: "CI"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql review > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql review

Review pull requests

Command Options:
      --query    path to a query file passed directly to gh api graphql  [string] [required]
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --report   shorthand for --template=report  [boolean] [default: false]
      --approve  whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql set-secret > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql set-secret

Set Publish Tokens

Command Options:
      --query        path to a query file passed directly to gh api graphql  [string] [required]
      --cache        how long for gh to cache the query  [string] [default: "1m"]
      --report       shorthand for --template=report  [boolean] [default: false]
      --op-account   1Password Account  [string] [required] [default: "github.1password.com"]
      --op-item      1Password item  [string] [required] [default: "npm cli ops (npm)"]
      --secret-name  name of the repo secret to create  [string] [required] [default: "PUBLISH_TOKEN"]
      --npm-token    the npm token to use, can also be set via stdin  [string] [required] [default: null]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help graphql template-oss-fix > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh graphql template-oss-fix

Fix failing template-oss pull requests

Command Options:
      --query         path to a query file passed directly to gh api graphql  [string] [required]
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --report        shorthand for --template=report  [boolean] [default: false]
      --message       Commit message to be used for template oss changes, with out the \`<TYPE>:\` prefix  [required] [default: "postinstall for dependabot template-oss PR"]
      --author        Only fix PRs if the latest commit is this author  [array] [default: ["npm-cli-bot","dependabot[bot]"]]
      --statusIgnore  Skip PRs if the latest commit has this status  [array] [default: ["SUCCESS","PENDING"]]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help labels > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh labels

Fetch pull requests

Command Options:
      --cache     how long for gh to cache the query  [string] [default: "1h"]
      --repos     query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table     shorthand for --template=table  [boolean] [default: false]
      --markdown  shorthand for --template=markdown  [boolean] [default: false]
      --confirm   shorthand for --template=confirm  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "markdown", "confirm"] [default: "table"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release

Fetch pending release pull requests

Commands:
  npx -p @npmcli/stafftools gh pending-release comment                 Comment on pull requests
  npx -p @npmcli/stafftools gh pending-release merge                   Merge pull requests
  npx -p @npmcli/stafftools gh pending-release pr-engines              Get engine changes in a pull request
  npx -p @npmcli/stafftools gh pending-release publish-release         Merge pending release PRs and publish the resulting release
  npx -p @npmcli/stafftools gh pending-release remove-label            Remove a label from pull requests
  npx -p @npmcli/stafftools gh pending-release rerun-failed-workflows  Get engine changes in a pull request
  npx -p @npmcli/stafftools gh pending-release review                  Review pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps   Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs  Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm"] [default: "table"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release comment > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release comment

Comment on pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps   Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs  Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --body     the body to post  [string] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release merge > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release merge

Merge pull requests

Command Options:
      --cache           how long for gh to cache the query  [string] [default: "1m"]
      --repos           query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps          Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs         Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table           shorthand for --template=table  [boolean] [default: false]
      --confirm         shorthand for --template=confirm  [boolean] [default: false]
      --report          shorthand for --template=report  [boolean] [default: false]
      --merge-strategy  strategy to use when merging the pull request  [required] [choices: "squash", "rebase"]
      --remote          name of the remote  [required] [default: "origin"]
      --approve         whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release pr-engines > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release pr-engines

Get engine changes in a pull request

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps   Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs  Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release publish-release > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release publish-release

Merge pending release PRs and publish the resulting release

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps   Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs  Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --otp      otp to be used for publish  [string] [required]
      --remote   name of the remote  [required] [default: "origin"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release remove-label > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release remove-label

Remove a label from pull requests

Command Options:
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --repos         query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps        Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs       Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table         shorthand for --template=table  [boolean] [default: false]
      --confirm       shorthand for --template=confirm  [boolean] [default: false]
      --report        shorthand for --template=report  [boolean] [default: false]
      --remove-label  label to remove from pull requests  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release rerun-failed-workflows > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release rerun-failed-workflows

Get engine changes in a pull request

Command Options:
      --cache     how long for gh to cache the query  [string] [default: "1m"]
      --repos     query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps    Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs   Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table     shorthand for --template=table  [boolean] [default: false]
      --confirm   shorthand for --template=confirm  [boolean] [default: false]
      --report    shorthand for --template=report  [boolean] [default: false]
      --workflow  Name of the workflow to rerun  [required] [default: "CI"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pending-release review > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pending-release review

Review pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --noDeps   Only return items that do not depend on any other items returned  [boolean] [default: false]
      --depsPrs  Only return items that have no open deps PRs  [string] [choices: "", "none", "any"] [default: ""]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --approve  whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pull-requests > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pull-requests

Fetch pull requests

Commands:
  npx -p @npmcli/stafftools gh pull-requests comment                 Comment on pull requests
  npx -p @npmcli/stafftools gh pull-requests merge                   Merge pull requests
  npx -p @npmcli/stafftools gh pull-requests pr-engines              Get engine changes in a pull request
  npx -p @npmcli/stafftools gh pull-requests remove-label            Remove a label from pull requests
  npx -p @npmcli/stafftools gh pull-requests rerun-failed-workflows  Get engine changes in a pull request
  npx -p @npmcli/stafftools gh pull-requests review                  Review pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --label    label to filter pull requests  [string]
      --state    state to filter pull requests  [string] [choices: "CLOSED", "MERGED", "OPEN"] [default: "OPEN"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm"] [default: "table"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pull-requests comment > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pull-requests comment

Comment on pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --label    label to filter pull requests  [string]
      --state    state to filter pull requests  [string] [choices: "CLOSED", "MERGED", "OPEN"] [default: "OPEN"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --body     the body to post  [string] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pull-requests merge > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pull-requests merge

Merge pull requests

Command Options:
      --cache           how long for gh to cache the query  [string] [default: "1m"]
      --repos           query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --label           label to filter pull requests  [string]
      --state           state to filter pull requests  [string] [choices: "CLOSED", "MERGED", "OPEN"] [default: "OPEN"]
      --table           shorthand for --template=table  [boolean] [default: false]
      --confirm         shorthand for --template=confirm  [boolean] [default: false]
      --report          shorthand for --template=report  [boolean] [default: false]
      --merge-strategy  strategy to use when merging the pull request  [required] [choices: "squash", "rebase"]
      --remote          name of the remote  [required] [default: "origin"]
      --approve         whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pull-requests pr-engines > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pull-requests pr-engines

Get engine changes in a pull request

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --label    label to filter pull requests  [string]
      --state    state to filter pull requests  [string] [choices: "CLOSED", "MERGED", "OPEN"] [default: "OPEN"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pull-requests remove-label > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pull-requests remove-label

Remove a label from pull requests

Command Options:
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --repos         query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --label         label to filter pull requests  [string]
      --state         state to filter pull requests  [string] [choices: "CLOSED", "MERGED", "OPEN"] [default: "OPEN"]
      --table         shorthand for --template=table  [boolean] [default: false]
      --confirm       shorthand for --template=confirm  [boolean] [default: false]
      --report        shorthand for --template=report  [boolean] [default: false]
      --remove-label  label to remove from pull requests  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pull-requests rerun-failed-workflows > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pull-requests rerun-failed-workflows

Get engine changes in a pull request

Command Options:
      --cache     how long for gh to cache the query  [string] [default: "1m"]
      --repos     query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --label     label to filter pull requests  [string]
      --state     state to filter pull requests  [string] [choices: "CLOSED", "MERGED", "OPEN"] [default: "OPEN"]
      --table     shorthand for --template=table  [boolean] [default: false]
      --confirm   shorthand for --template=confirm  [boolean] [default: false]
      --report    shorthand for --template=report  [boolean] [default: false]
      --workflow  Name of the workflow to rerun  [required] [default: "CI"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help pull-requests review > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh pull-requests review

Review pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --label    label to filter pull requests  [string]
      --state    state to filter pull requests  [string] [choices: "CLOSED", "MERGED", "OPEN"] [default: "OPEN"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --approve  whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos

Fetch repos

Commands:
  npx -p @npmcli/stafftools gh repos add-template-oss     Add template-oss to a repo
  npx -p @npmcli/stafftools gh repos clone                Clone repos into a directory
  npx -p @npmcli/stafftools gh repos delete-branches      Delete branches of repos with no remote counterpart
  npx -p @npmcli/stafftools gh repos enable-lint-feature  Enable lint feature like prettier
  npx -p @npmcli/stafftools gh repos publish-repo         Publish repos from their default branch
  npx -p @npmcli/stafftools gh repos pull                 Checkout and pull default branch of repos
  npx -p @npmcli/stafftools gh repos repo-settings        Set common settings on all repos
  npx -p @npmcli/stafftools gh repos set-secret           Set Publish Tokens

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1h"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm"] [default: "table"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos add-template-oss > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos add-template-oss

Add template-oss to a repo

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1h"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --remote   name of the remote  [required] [default: "origin"]
      --force    force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync     whether to sync the repo  [boolean] [default: true]
      --install  install deps  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos clone > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos clone

Clone repos into a directory

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1h"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --remote   name of the remote  [required] [default: "origin"]
      --force    force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync     whether to sync the repo  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos delete-branches > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos delete-branches

Delete branches of repos with no remote counterpart

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1h"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --remote   name of the remote  [required] [default: "origin"]
      --force    force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync     whether to sync the repo  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos enable-lint-feature > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos enable-lint-feature

Enable lint feature like prettier

Command Options:
      --cache                 how long for gh to cache the query  [string] [default: "1h"]
      --repos                 query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table                 shorthand for --template=table  [boolean] [default: false]
      --confirm               shorthand for --template=confirm  [boolean] [default: false]
      --report                shorthand for --template=report  [boolean] [default: false]
      --remote                name of the remote  [required] [default: "origin"]
      --force                 delete existing branch  [boolean] [default: false]
      --sync                  whether to sync the repo  [boolean] [default: true]
      --configName            template-oss config setting name  [string] [default: "prettier"]
      --templateOSSRange      required template-oss version range  [string] [default: ">=4.23.0"]
      --lintFixCommitMessage  lintfix commit message  [string] [default: "chore: run prettier"]
      --prBody                PR body  [string] [default: "Enable and run prettier"]
      --branchName            branch name to use  [string] [default: "stafftools/enable-prettier"]
      --devDependencies       devDependencies to install  [array] [default: ["prettier@*","eslint-config-prettier@*"]]
      --exactDevDependencies  devDependencies to install with --save-exact  [array] [default: ["@github/prettier-config@0.0.6"]]
      --install               install deps  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos metrics > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos metrics

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1h"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
  -d, --date     the end date  [required] [default: ""]
  -a, --ago      how many days back to go  [required] [default: "7"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos publish-repo > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos publish-repo

Publish repos from their default branch

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1h"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --remote   name of the remote  [required] [default: "origin"]
      --force    force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync     whether to sync the repo  [boolean] [default: true]
      --otp      otp to be used for publish  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos pull > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos pull

Checkout and pull default branch of repos

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1h"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --remote   name of the remote  [required] [default: "origin"]
      --force    force sync the repo, this will overwrite any local changes!  [boolean] [default: false]
      --sync     whether to sync the repo  [boolean] [default: true]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos repo-settings > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos repo-settings

Set common settings on all repos

Command Options:
      --cache              how long for gh to cache the query  [string] [default: "1h"]
      --repos              query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table              shorthand for --template=table  [boolean] [default: false]
      --confirm            shorthand for --template=confirm  [boolean] [default: false]
      --report             shorthand for --template=report  [boolean] [default: false]
      --branch-protection  Whether to apply branch protection rules  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help repos set-secret > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh repos set-secret

Set Publish Tokens

Command Options:
      --cache        how long for gh to cache the query  [string] [default: "1h"]
      --repos        query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table        shorthand for --template=table  [boolean] [default: false]
      --confirm      shorthand for --template=confirm  [boolean] [default: false]
      --report       shorthand for --template=report  [boolean] [default: false]
      --op-account   1Password Account  [string] [required] [default: "github.1password.com"]
      --op-item      1Password item  [string] [required] [default: "npm cli ops (npm)"]
      --secret-name  name of the repo secret to create  [string] [required] [default: "PUBLISH_TOKEN"]
      --npm-token    the npm token to use, can also be set via stdin  [string] [required] [default: null]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss

Fetch template-oss pull requests

Commands:
  npx -p @npmcli/stafftools gh template-oss comment                 Comment on pull requests
  npx -p @npmcli/stafftools gh template-oss merge                   Merge pull requests
  npx -p @npmcli/stafftools gh template-oss pr-engines              Get engine changes in a pull request
  npx -p @npmcli/stafftools gh template-oss remove-label            Remove a label from pull requests
  npx -p @npmcli/stafftools gh template-oss rerun-failed-workflows  Get engine changes in a pull request
  npx -p @npmcli/stafftools gh template-oss review                  Review pull requests
  npx -p @npmcli/stafftools gh template-oss template-oss-fix        Fix failing template-oss pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm"] [default: "table"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss comment > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss comment

Comment on pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --body     the body to post  [string] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss merge > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss merge

Merge pull requests

Command Options:
      --cache           how long for gh to cache the query  [string] [default: "1m"]
      --repos           query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table           shorthand for --template=table  [boolean] [default: false]
      --confirm         shorthand for --template=confirm  [boolean] [default: false]
      --report          shorthand for --template=report  [boolean] [default: false]
      --merge-strategy  strategy to use when merging the pull request  [required] [choices: "squash", "rebase"]
      --remote          name of the remote  [required] [default: "origin"]
      --approve         whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss pr-engines > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss pr-engines

Get engine changes in a pull request

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss remove-label > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss remove-label

Remove a label from pull requests

Command Options:
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --repos         query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table         shorthand for --template=table  [boolean] [default: false]
      --confirm       shorthand for --template=confirm  [boolean] [default: false]
      --report        shorthand for --template=report  [boolean] [default: false]
      --remove-label  label to remove from pull requests  [string] [required]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss rerun-failed-workflows > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss rerun-failed-workflows

Get engine changes in a pull request

Command Options:
      --cache     how long for gh to cache the query  [string] [default: "1m"]
      --repos     query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table     shorthand for --template=table  [boolean] [default: false]
      --confirm   shorthand for --template=confirm  [boolean] [default: false]
      --report    shorthand for --template=report  [boolean] [default: false]
      --workflow  Name of the workflow to rerun  [required] [default: "CI"]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss review > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss review

Review pull requests

Command Options:
      --cache    how long for gh to cache the query  [string] [default: "1m"]
      --repos    query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table    shorthand for --template=table  [boolean] [default: false]
      --confirm  shorthand for --template=confirm  [boolean] [default: false]
      --report   shorthand for --template=report  [boolean] [default: false]
      --approve  whether to approve the pr  [boolean] [default: false]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: null]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`

exports[`test/gh.mjs TAP all commands help template-oss template-oss-fix > must match snapshot 1`] = `
npx -p @npmcli/stafftools gh template-oss template-oss-fix

Fix failing template-oss pull requests

Command Options:
      --cache         how long for gh to cache the query  [string] [default: "1m"]
      --repos         query to filter repos  [string] [required] [default: "org:npm topic:npm-cli fork:true archived:false"]
      --table         shorthand for --template=table  [boolean] [default: false]
      --confirm       shorthand for --template=confirm  [boolean] [default: false]
      --report        shorthand for --template=report  [boolean] [default: false]
      --message       Commit message to be used for template oss changes, with out the \`<TYPE>:\` prefix  [required] [default: "postinstall for dependabot template-oss PR"]
      --author        Only fix PRs if the latest commit is this author  [array] [default: ["npm-cli-bot","dependabot[bot]"]]
      --statusIgnore  Skip PRs if the latest commit has this status  [array] [default: ["SUCCESS","PENDING"]]

Global Options:
  -c, --cwd       base directory to run filesystem related commands  [string] [default: "$HOME/projects"]
  -l, --limit     number of worker threads to spawn  [number] [default: $NUM_CORES]
  -f, --filter    filters to be parsed as relaxed json and applied to the data  [array]
  -r, --reject    rejectors to be parsed as relaxed json and applied to the data  [array]
      --clean     whether to rimraf the cwd first  [boolean] [default: false]
      --template  how to format the final output  [string] [required] [choices: "json", "silent", "table", "confirm", "report"] [default: "report"]
      --sort      key to sort results by  [string] [default: "id"]
      --json      shorthand for --template=json  [boolean] [default: false]
      --silent    shorthand for --template=silent  [boolean] [default: false]

Other Options:
      --help     Show help  [boolean]
      --version  Show version number  [boolean]
      --config   Path to JSON config file
`
