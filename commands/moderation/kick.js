
const { MessageEmbed } = require("discord.js");
const config = require(`../../configs/imagelink.json`)
module.exports = {

name: "kick",
category: "moderation",
cooldown: 2,
description: "Kicks a user.",
usage: "[name | nickname | mention | ID] <reason> (optional)",
aliases: [],

run: async (client, message, args) => {
message.channel.startTyping()
await  message.channel.stopTyping()
const em1 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You Do Not Have Permissions To Kick Members**`)
.setColor("#e61b1b")

const em2 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **I Do Not Have Permissions To Kick Members!**`)
.setColor("#e61b1b")

const em3 =  new MessageEmbed()

.setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You must mention someone or provide a valid userid**`)
    .setColor("#e61b1b")

const em4 =  new MessageEmbed()
.setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Sorry, The user you provided is not in this guild. Please Makesure that the user is in the guild.**`)
.setColor("#e61b1b")

try {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.lineReply(em1);
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.lineReply(em2);

    if (!args[0]) return message.lineReply(em3)

    var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
    if (!kickMember) return message.lineReply(em4);

    if (kickMember.id === message.member.id) return message.lineReply(`${client.emotes.error} **Are you Mad or Wot? You can't kick yourself**`)
    
    if (!kickMember.kickable) return message.lineReply(`${client.emotes.error} Sorry, I can't kick the member. **Reason** :  Member is  a Mod/Admin.`)
    

    const reason = args[1] ? args.slice(1).join(' ') : 'No reasons provided';
    

    try {
        const sembed2 = new MessageEmbed()
            .setColor("#dada40")
            .setAuthor(`Report`,`${config.report}`)
            .setTimestamp()
            .setThumbnail(`${config.discordlogo}`)
            .setDescription(`**You were Kicked From Server : ${message.guild.name}
            Reason - ${reason || "Reason Not mentioned!"}**`)
            .setFooter(`From : ${message.guild.name} | Autumn Moderations`, message.guild.iconURL())
        kickMember.send(sembed2).then(() =>
            kickMember.kick(reason)).catch(err => {
                if (err)
                    kickMember.kick(reason);
                })
    } catch {
        return;
    }
    if (reason) {
    var sembed = new MessageEmbed()
    .setAuthor(`Successfully Accomplished `,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
        .setColor("#e61b1b")
        .setDescription(`>>> **${client.emotes.success} ${kickMember.user.username}** has been kicked.
        **Reason** : ${reason}
        `)
    message.channel.send(sembed);
    } else {
        var sembed2 = new MessageEmbed()
        .setAuthor(`Successfully Done `,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
        .setColor("#e61b1b")
        .setDescription(`>>> **${client.emotes.success} ${kickMember.user.username}** has been kicked.
        **Reason** : ${reason}
        `)
    message.channel.send(sembed2);
    }
                        
    
} catch (e) {
    return message.channel.send(`**${e.message}**`)
}
}
}

/**
  * @INFO
  *  Coded by Natasha Missilinx 
  * @INFO
  * Position | Software Developer
  * @INFO
  * Copyright warning
  * @INFO
*/
