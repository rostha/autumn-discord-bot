const { Message } = require('discord.js')
const { MessageEmbed } = require("discord.js")
const config = require('../../configs/config.json')
const Discord = require('discord.js')
const { id } = require('common-tags')
module.exports=  {
    name: "unmute",
    cooldown: 2,
    usage: "unmute <user>",
    description: "unmutes a member",
    category: "moderation",
    run : async(client, message, args) => {
    
        const em1 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **You Don't Have Permissions To unmute Others**`)
        .setColor("#e61b1b")
    const em2 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> ** I don't Have Permissions To MANAGE_ROLES**`)
    .setColor("#e61b1b")
   
const em3 =  new MessageEmbed()
.setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Couldn't find Member. Please Mention a valid user**`)
.setColor("#e61b1b")
    const em4 =  new MessageEmbed()
    .setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **Please mention someone to unmute**`)
    .setColor("#e61b1b")

    const em5 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Sorry, I don't have permission to interact with that user! Reason : User's role is higher than my top role.**`)
.setColor("#e61b1b")

const em6 =  new MessageEmbed()
.setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You can't unmuted someone equal or higher than your top role.!**`)
.setColor("#e61b1b")

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.lineReply(em1).then(m => m.delete({ timeout: 3000 }));
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.lineReply(em2).then(m => m.delete({ timeout: 3000 }));
        if(!args[0]) return message.lineReply(em4).then(m => m.delete({ timeout: 3000 }));
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!target) return message.lineReply(em3).then(m => m.delete({ timeout: 3000 }));
    if (target.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.lineReply(em5).then(m => m.delete({ timeout: 3000 }));
    if (message.member.roles.highest.comparePositionTo(target.roles.highest) <= 0) return message.lineReply(em6).then(m => m.delete({ timeout: 3000 }));
    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
            await target.roles.remove(role)
            // final embed 
       const em7 =  new MessageEmbed()
    .setAuthor(`Successfully Accomplished`,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
    .setDescription(`>>> **${target.displayName} has been unmuted**`)
    .setColor("#e61b1b")
               message.channel.send(em7) .catch(err => {
            if(err) return message.channel.send('>>> Something went wrong... Please check my perms')
        })
    }
}

