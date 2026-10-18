# Detailed Setup Guide

## Creating Discord Bot

1. Go to https://discord.com/developers/applications
2. Click "New Application"
3. Name it (e.g. Base Guild Bot)
4. Go to Bot section → Add Bot
5. Copy the token into .env
6. Enable Message Content Intent if needed
7. Generate OAuth2 URL with bot scopes and permissions (Send Messages, Embed Links, etc.)
8. Invite to your server

## Running locally

```bash
npm install
cp .env.example .env
# edit .env
npm start
```

## Deployment ideas

- Railway
- Render
- VPS with PM2
- Docker
