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
message.channel.send("f!bc <message>");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» Server :', ${message.guild.name})
            .addField('» اSender : ', ${message.author.username}#${message.author.discriminator})
    .setFooter('PoWeR MC Bot','https://cdn.discordapp.com/avatars/439427357175185408/e757876a5561c2d4682fd664119568f2.jpg?size=128%27)
            .addField(' » Message : ', args)
            .setColor('#ff0000')
            // m.send([${m}]);
            m.send(${m},{embed: bc});
        });
    }
    } else {
        return;
    }
});




client.on('message', function(msg) {
         var prefix = "+"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(Showing Details Of  **${msg.guild.name}*)
      .addField(':globe_with_meridians: نوع السيرفر',[** __${msg.guild.region}__ **],true)
      .addField(':medal: الرتب',[** __${msg.guild.roles.size}__ **],true)
      .addField(':red_circle: عدد الاعضاء',[** __${msg.guild.memberCount}__ **],true)
      .addField(':large_blue_circle: عدد الاعضاء الاونلاين',[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **],true)
      .addField(':pencil: الرومات الكتابية',[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ],true)
      .addField(':microphone: رومات الصوت',[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **],true)
      .addField(':crown: الأونـر',**${msg.guild.owner}**,true)
      .addField(':id: ايدي السيرفر',**${msg.guild.id}**,true)
      .addField(':date: تم عمل السيرفر في',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });





client.login(process.env.BOT_TOKEN);
