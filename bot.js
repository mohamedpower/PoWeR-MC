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
    var prefix = '+'; // هنا تقدر تغير البرفكس
var command = message.content.split(" ")[0];
if(command == prefix + 'bc') { // الكوماند !bc
    var args = message.content.split(' ').slice(1).join(' ');
    if(message.author.bot) return;
    if(!args) return message.channel.send(**➥ Useage:** ${prefix}bc كلامك);

    let bcSure = new Discord.RichEmbed()
    .setTitle(📬 **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**)
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setDescription(**\n✉ ➥ رسالتك**\n\n${args})
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL)

    message.channel.send(bcSure).then(msg => {
        msg.react(':white_check_mark:').then(() => msg.react(':negative_squared_cross_mark:'));
        message.delete();


        let yesEmoji = (reaction, user) => reaction.emoji.name === ':white_check_mark:'  && user.id === message.author.id;
        let noEmoji = (reaction, user) => reaction.emoji.name === ':negative_squared_cross_mark:' && user.id === message.author.id;

        let sendBC = msg.createReactionCollector(yesEmoji);
        let dontSendBC = msg.createReactionCollector(noEmoji);

        sendBC.on('collect', r => {
            message.guild.members.forEach(member => {
                member.send(args.replace([user], member)).catch();
                if(message.attachments.first()){
                    member.sendFile(message.attachments.first().url).catch();
                }
            })
            message.channel.send(⏲ **يتم الان الارسال الى** \`${message.guild.memberCount}`` عضو`).then(msg => msg.delete(5000));
            msg.delete();
        })
        dontSendBC.on('collect', r => {
            msg.delete();
            message.reply(':white_check_mark: تم الغاء ارسال رسالتك بنجاح').then(msg => msg.delete(5000));
        });
    })
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
    .setFooter('Super Bot','https://cdn.discordapp.com/avatars/439427357175185408/e757876a5561c2d4682fd664119568f2.jpg?size=128%27)
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





client.login(process.env.BOT_TOKEN);
