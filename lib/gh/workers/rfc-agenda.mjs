const template = `

## Why?
In our ongoing efforts to better listen to & collaborate with the community, we've started an Open RFC call that helps to move conversations & initiatives forward.

## When?

### {{formatted}} EST

**Cadence:**
This meeting is scheduled to take place **weekly**. Previous meeting agendas and notes can be found [here](https://github.com/npm/rfcs/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed+label%3Ameeting)

**Add to your Calendar:**
You follow this & find other **npm** events by using our **public events calendar**

* gCal: [\`https://calendar.google.com/calendar/embed?src=npmjs.com_oonluqt8oftrt0vmgrfbg6q6go%40group.calendar.google.com\`](https://calendar.google.com/calendar/embed?src=npmjs.com_oonluqt8oftrt0vmgrfbg6q6go%40group.calendar.google.com)
* iCal: [\`https://calendar.google.com/calendar/ical/npmjs.com_oonluqt8oftrt0vmgrfbg6q6go%40group.calendar.google.com/public/basic.ics\`](https://calendar.google.com/calendar/ical/npmjs.com_oonluqt8oftrt0vmgrfbg6q6go%40group.calendar.google.com/public/basic.ics)

## What?

All discussions surrounding RFCs are covered by the [npm Code of Conduct](https://www.npmjs.com/policies/conduct). Please keep conversations constructive, civil & be mindful of when others are speaking. As is tradition, "raise your hand" when requesting to comment on a topic or request to comment asynchronously within the chat. The npm team may, at its own discretion, moderate, mute &/or remove a person from an Open RFC call for any reason.

### Agenda

1. **Housekeeping**
	1. Introduction(s)
	1. Code of Conduct Acknowledgement
	1. Outline Intentions & Desired Outcomes
	1. Announcements
{{items}}

## How?

**Join Zoom Meeting**
https://github.zoom.us/j/94543839461?pwd=S0lwYytLd2tlMVBxTlJGbE5QQlhGUT09

**Watch the livestream**
https://www.youtube.com/channel/UCK71Wk0I45SLTSXQA23GdIw/live

**Watch past meetings**
https://www.youtube.com/channel/UCK71Wk0I45SLTSXQA23GdIw/videos

#### Invitees

Please use the following emoji reactions to indicate your availability.

* 👍 - Attending
* 👎 - Not attending
* 😕 - Not sure


`

;(async function () {
  require('dotenv').config()
  const fs = require('fs')
  const path = require('path')
  const { Octokit } = require('@octokit/rest')
  const Handlebars = require('handlebars')
  const source = fs.readFileSync(
    path.resolve(__dirname, 'agenda-template.hbs'),
    'utf8'
  )
  const template = Handlebars.compile(source)
  const fetch = require('node-fetch')
  const octokit = new Octokit({ auth: process.env.AUTH_TOKEN })
  const now = new Date()
  const datetime = `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()}T10:00:00-07:00`
  const calendar =
    'npmjs.com_oonluqt8oftrt0vmgrfbg6q6go%40group.calendar.google.com'
  const force = ~process.argv.indexOf('-f') || ~process.argv.indexOf('--force')
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  function createAgenda(title, formatted) {
    octokit.search
      .issuesAndPullRequests({ q: `label:"Agenda"+org:"npm"` })
      .then((response) => {
        const items = response.data.items
          .map(
            (i) =>
              `1. **${i.pull_request ? 'PR' : 'Issue'}**: [#${i.number} ${
                i.title
              }](${i.html_url}) - @${i.user.login}`
          )
          .join('\n')
        const body = template({ formatted, items })
        console.log('Creating agenda:', formatted, title, body)
        octokit.issues
          .create({
            owner: 'npm',
            repo: 'rfcs',
            title,
            body,
            labels: ['Meeting'],
            assignees: ['darcyclarke'],
          })
          .catch((e) => console.error(e))
      })
      .catch((e) => console.error(e))
  }
  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?key=${process.env.CALENDAR_AUTH_TOKEN}&q="Open RFC"&timeMin=${datetime}&orderBy=starttime&singleEvents=true&maxResults=1`
    )
    const data = await response.json()
    const formatted = new Intl.DateTimeFormat('en-US', options).format(
      new Date(data.items[0].start.dateTime)
    )
    const title = `Open RFC Meeting - ${formatted} EST`
    octokit.search
      .issuesAndPullRequests({
        q: `author:darcyclarke+repo:npm/rfcs+"${title}"+in:title`,
      })
      .then((respone) => {
        if (respone.data.total_count) {
          console.log('Agenda already exists')
        }
        if (force) {
          console.log('Applying force...')
        }
        if (force || !respone.data.total_count) {
          createAgenda(title, formatted)
        }
      })
      .catch((e) => console.error(e))
  } catch (e) {
    console.error(e)
  }
})()
