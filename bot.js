const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.login("NTA4MDAzNjExNDc3ODAzMDE5.DskbaQ.7FLoXhRkh3006BhpJ_yMus89wWM")
