const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => {
var prefix = "+";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**f!bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» Server :', `${message.guild.name}`)
            .addField('» اSender : ', `${message.author.username}#${message.author.discriminator}`)
    .setFooter('Super Bot','https://cdn.discordapp.com/avatars/439427357175185408/e757876a5561c2d4682fd664119568f2.jpg?size=128')
            .addField(' » Message : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});









client.login("NTA4MDAzNjExNDc3ODAzMDE5.DskbaQ.7FLoXhRkh3006BhpJ_yMus89wWM")
