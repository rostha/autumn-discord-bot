# autumn-discord-bot

A Discord.js v12 moderation and utility bot with configurable prefixes and MongoDB-backed settings.

This is a sanitized release candidate of the historical project at https://github.com/rostha/autumn. It contains the latest selected source snapshot, without the original Git history. The release preparation does not claim that all included code was originally authored by the maintainer.

## Setup

This project uses legacy Discord.js APIs. The dependency stack has not been modernized or tested against a live Discord server.

Install dependencies with `npm install`. Supply `DISCORD_TOKEN` and `MONGODB_URI` through your hosting environment or shell, then run `npm start`. `.env.example` lists the variable names; these prepared copies do not automatically load a `.env` file.

PowerShell example:

```powershell
$env:DISCORD_TOKEN = '<your-bot-token>'
$env:MONGODB_URI = '<your-database-uri>'
npm start
```

Use the Discord Developer Portal to configure any intents and permissions required by the selected commands. Configure non-secret prefixes and server options in the existing configuration files.

## Attribution and license

All existing source comments, attribution notices, and license files have been retained. The existing package metadata declares ISC, but the repository has no standalone root license text. Confirm authorship and the applicable upstream licenses before public redistribution.

## Release status

Credentials have been removed from this snapshot. Rotate previously committed credentials separately. No live credential validity tests or dependency installation scripts were run. Review the accompanying validation report before publishing.

