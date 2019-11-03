const { Client } = require('discord.js');
const client = new Client();

// Token bot
client.login('NjAzNDQ4MTM4OTUwMjQ2NDEw.Xb89Vw.fablxHuxO4vNK3rqq112Ex22-j8'); // 8 == admin

client.on('ready', () => {
    console.log('Bot is ready'); 
})

client.on('message', msg => {
    if (msg.content === '!ping') {
      msg.reply('Pong!');
    }

    if (msg.content === '!Reglas'){
      msg.reply('#Reglamento')
    }
  });

 