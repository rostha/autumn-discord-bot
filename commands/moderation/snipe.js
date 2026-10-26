const { MessageEmbed } = require("discord.js");
const moment = require('moment')

module.exports = {
  name: "snipe",
  category: "moderation",
  cooldown: 5,
  aliases: ["ssn"],
  usage: ">snipe",
  description: "Snipe the recently deleted Message",
  run: async (client, message, args) => {
    const em1 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **You Don't Have Permissions To Snipe Messages**`)
    .setColor("#e61b1b")
    const em2 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")
    const em3 =  new MessageEmbed()
    .setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **There were no recently deleted Messages Found!**`)
    .setColor("#e61b1b")

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply(em1).then(m => m.delete({ timeout: 5000 }));
      if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(em2).then(m => m.delete({ timeout: 5000 }));

    const snipes = client.snipes.get(message.channel.id);
  
    if (!snipes)
      return message.lineReply(em3).then(m => m.delete({ timeout: 5000 }));
const snipe = +args[0] - 1 || 0;
const target = snipes[snipe];
if(!target) return message.lineReply(`There are only ${snipes.length} messages!`)
const { msg, time, image } = target;



    const embed = new MessageEmbed()
      .setAuthor(
        msg.author.username,
        msg.author.avatarURL({ dynamic: true })
      )
    .setDescription(`${msg.content}`)
    .setFooter(`Time : ${moment(time).fromNow()} | ${snipe + 1}/ ${snipes.length}`)
    .setColor("#5ff8f8")
    

    if (msg.image) embed.setImage(msg.image)
    message.channel.send(embed) .catch(err => {
        if(err) return message.channel.send('Something went wrong!!')
    })
  }
};

