const { MessageEmbed } = require('discord.js');


module.exports = {
        name: "setnick",
    aliases: ["sn", 'nick'],
    category: "moderation",
    cooldown: 5,
    description: "Sets Or Changes Nickname Of An User",
    usage: "[mention | name | nickname | ID] <nickname>",
    run: async (client, message, args) => {
        const em1 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You Do Not Have Permissions To Manage Nicknames**`)
.setColor("#e61b1b")
const em2 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **I Do Not Have Permissions To Manage Nicknames**`)
.setColor("#e61b1b")
const em3 =  new MessageEmbed()
.setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Please Provide a user!**`)
.setColor("#e61b1b")
const em4 =  new MessageEmbed()
.setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Please provide a valid user!**`)
.setColor("#e61b1b")
const em5 =  new MessageEmbed()
.setAuthor(`Error Arguments `,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Please provide a New Nick!**`)
.setColor("#e61b1b")
const em6 =  new MessageEmbed()
.setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Sorry, I can't change nick of members equal to my role or higher than my top role.**`)
.setColor("#e61b1b")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.lineReply(em1);
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.lineReply(em2);
            if (!args[0]) return message.channel.send(em3)
    
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) 
    if (!member) return message.channel.send(em4);

    if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send(em6)

    if (!args[1]) return message.channel.send(em5);

    let nick = args.slice(1).join(' ');

    try {
    member.setNickname(nick)
    const em7 = new MessageEmbed()
    .setAuthor(`Successfully Accomplished `,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
    .setColor("#e61b1b")
        .setDescription(`>>> **Changed Nickname of ${member.displayName} to ${nick}**`)
    message.channel.send(em7)
    } catch {
        return message.channel.send(">>> Something went wrong!!")
    }

    
}
}
