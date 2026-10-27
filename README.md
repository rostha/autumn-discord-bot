# Autumn

A Discord moderation and utility bot with a modular command structure and MongoDB-backed configuration.

**JavaScript · Discord.js v12 · Historical project (2021)**

## Overview

- Moderation and member-management commands.
- Server and user information commands.
- Command categories, aliases, and cooldown handling.
- MongoDB connection and configurable bot settings.

## Code map

| Path | Responsibility |
| --- | --- |
| `autumn.js` | Application entry point and message routing |
| `commands/` | Moderation, information, and utility modules |
| `handlers/` | Command discovery and initialization |
| `configs/` | Non-secret settings and helper modules |

## Run locally

Install the dependencies:

```sh
npm install
```

Set the required environment variables in your shell or hosting service:

| Variable | Purpose |
| --- | --- |
| `DISCORD_TOKEN` | Token for your own Discord bot |
| `MONGODB_URI` | Connection string for your own MongoDB database |

Start the bot with `npm start`. The blank [`.env.example`](.env.example) lists the required names; this copy does not automatically load a `.env` file. Non-secret bot preferences live in [`configs/`](configs/).

## Project history and current status

The original repository contains development commits from **2021**. This public repository is a sanitized source snapshot published in 2026; it does not import or backdate the private Git history.

This code uses legacy Discord.js APIs. The release preparation checked JavaScript syntax, JSON configuration, environment-variable guards, and embedded credential patterns. It has not been tested as a running bot against the current Discord API. It is presented as historical learning and customization work, rather than a maintained production template.

## Attribution

Existing source credits remain intact. See [ATTRIBUTION.md](ATTRIBUTION.md) and [RELEASE-NOTES.md](RELEASE-NOTES.md) for provenance and license details.
