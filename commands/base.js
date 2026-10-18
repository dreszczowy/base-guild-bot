// Example modular command structure
module.exports = {
  name: 'base',
  description: 'Shows Base chain information',
  async execute(message) {
    // Implementation can be expanded here
    await message.reply('Base is Coinbase\'s L2. Chain ID: 8453');
  },
};
