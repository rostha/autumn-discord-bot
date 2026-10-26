
const { MessageEmbed } = require('discord.js');
const ms = require('ms')
module.exports = {
  name: "slowmode",
  usage: "slowmode <time>",
  cooldown: 5,
  description: "Adds slowmode",
  category: "moderation",
  aliases: ["setsm"],
  run: (client, message, args) => {

    const em1 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **You Do Not Have Permissions To Kick Members**`)
    .setColor("#e61b1b")
    const em2 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I Do Not Have Permissions To Kick Members**`)
    .setColor("#e61b1b")
    const em3 =  new MessageEmbed()
    .setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **You didn't specify a time. Makesure to use : s/m/h after adding the value.**`)
    .setColor("#e61b1b")
    const em4 =  new MessageEmbed()
    .setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **That slowmode limit is too high, please enter anything lower than 6 hours.**`)
    .setColor("#e61b1b")
    const em5 =  new MessageEmbed()
    .setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **Not a valid time given. Please try again!**`)
    .setColor("#e61b1b")



    

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.lineReply(em1).then(m => m.delete({ timeout: 5000 }));
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.lineReply(em2).then(m => m.delete({ timeout: 5000 }));
    if (!args[0]) return message.lineReply(em3).then(m => m.delete({ timeout: 5000}));

    const currentCooldown = message.channel.rateLimitPerUser;

    const reason = args[1] ? args.slice(1).join(' ') : 'No reasons given';

    const embed = new MessageEmbed()
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

    if (args[0] === 'off') {

        if (currentCooldown === 0) return message.channel.send('>>> Channel cooldown is already off').then(m => m.delete({ timeout: 5000 })); else{}

        embed.setTitle('The slowmode for this channel was set to `0`')
        .setAuthor(`Slowmode Disabled`,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
            .setColor('#e61b1b')
        return message.channel.setRateLimitPerUser(0, reason)

    }

    const time = ms(args[0]) / 1000;

    if (isNaN(time)) return  message.lineReply(em5).then(m => m.delete({ timeout: 5000 }));

    if (time >= 21600) return  message.lineReply(em4).then(m => m.delete({ timeout: 5000 }));

    if (currentCooldown === time) return message.channel.send(`>>> Slowmode is already set to ${args[0]}`);

   
        

    message.channel.setRateLimitPerUser(time, reason).then(m => m.send(`>>> Slowmode Enabled of ${args[0]} | ${reason}`));


  }
}


