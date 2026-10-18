# Base Guild Bot

A simple Discord bot for Base chain and Guild.xyz related communities.

## Features

- `!ping` - Check bot status
- `!base` - Information about Base L2
- `!guild` - Information about Guild.xyz
- `!help` - List of commands

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a Discord application at https://discord.com/developers/applications
4. Create a bot and copy the token
5. Copy `.env.example` to `.env` and fill in your values
6. Invite the bot to your server with necessary permissions
7. Run the bot:
   ```bash
   npm start
   ```

## Environment Variables

- `DISCORD_TOKEN` - Your Discord bot token
- `CLIENT_ID` - Application client ID (for slash commands if extended)
- `GUILD_ID` - Optional test guild ID

## License

MIT
