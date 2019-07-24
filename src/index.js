const { Client } = require('discord.js');
const client = new Client();

// Token bot
client.login('NjAzNDQ4MTM4OTUwMjQ2NDEw.XTi5FQ.KNp-J2uy0zQViDMSSKI4TZOfARw');

client.on('ready', () => {
    console.log('Bot is ready'); 
})

client.on('message', msg => {
    if (msg.content === '!ping') {
      msg.reply('Pong!');
    }

    if (msg.content === '!Rules'){
      msg.reply('#Reglamento')
    }
  });

 