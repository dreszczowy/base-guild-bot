const { Client, GatewayIntentBits, Events, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!ping') {
    await message.reply('Pong! Base Guild Bot is online.');
  }

  if (message.content.toLowerCase() === '!base') {
    const embed = new EmbedBuilder()
      .setTitle('Base Chain')
      .setDescription('Base is an Ethereum L2 built by Coinbase on the OP Stack.')
      .addFields(
        { name: 'Chain ID', value: '8453', inline: true },
        { name: 'Explorer', value: 'https://basescan.org', inline: true },
        { name: 'Docs', value: 'https://docs.base.org', inline: true }
      )
      .setColor(0x0052FF)
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }

  if (message.content.toLowerCase() === '!guild') {
    const embed = new EmbedBuilder()
      .setTitle('Guild.xyz')
      .setDescription('Guild.xyz is the membership layer for Web3 communities.')
      .addFields(
        { name: 'Website', value: 'https://guild.xyz', inline: true },
        { name: 'Docs', value: 'https://docs.guild.xyz', inline: true }
      )
      .setColor(0x7B3FE4)
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }

  if (message.content.toLowerCase().startsWith('!help')) {
    const embed = new EmbedBuilder()
      .setTitle('Base Guild Bot Commands')
      .setDescription('Available commands:')
      .addFields(
        { name: '!ping', value: 'Check if the bot is online' },
        { name: '!base', value: 'Info about Base chain' },
        { name: '!guild', value: 'Info about Guild.xyz' },
        { name: '!help', value: 'Show this message' }
      )
      .setColor(0x00FF00)
      .setTimestamp();

    await message.reply({ embeds: [embed] });
  }
});

client.login(process.env.DISCORD_TOKEN);
