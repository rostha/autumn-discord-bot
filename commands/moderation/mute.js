
const { MessageEmbed } = require("discord.js");
const config = require('../../configs/config.json')
const Discord = require('discord.js')
module.exports = {
name: "mute",
usage: "mute <user>",
cooldown: 2,
description: "Mutes a member",
category: "moderation",
run : async(client, message, args) => {

//embeds again eee
const em1 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You Don't Have Permissions To Mute Others**`)
.setColor("#e61b1b")
const em2 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **I Don't Have Permissions To Mute Others**`)
.setColor("#e61b1b")
const em3 =  new MessageEmbed()
.setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Couldn't find Member. Please Mention or Provide an valid ID.**`)
.setColor("#e61b1b")
// More embeds
const em4 =  new MessageEmbed()
.setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> Couldn't find Muted role Trying to create one. Please wait ${client.emotes.loading}`)
.setColor("#e61b1b")
const em5 =  new MessageEmbed()
.setAuthor(`Successfully Accomplished`,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
.setDescription(`>>> Muted role setup was successful`)
.setColor("#e61b1b")
const em8 =  new MessageEmbed()
.setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **That User has Administrative Perms. That User can't be muted!**`)
.setColor("#e61b1b")
const em9 =  new MessageEmbed()
.setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You can't muted someone equal or higher than your top role.!**`)
.setColor("#e61b1b")
const em10 =  new MessageEmbed()
.setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You need to mention someone to mute!**`)
.setColor("#e61b1b")
const em11 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Sorry, I don't have permission to interact with that user! Reason : User's role is higher than my top role.**`)
.setColor("#e61b1b")

if(!message.member.hasPermission('MANAGE_ROLES')) return message.lineReply(em1).then(m => m.delete({ timeout: 3000}));
if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.lineReply(em2).then(m => m.delete({ timeout: 3000}));
if (!args[0]) return message.lineReply(em10).then(m => m.delete({ timeout: 3000}));
const target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!target) return message.lineReply(em3).then(m => m.delete({ timeout: 3000}));
    if (target.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.lineReply(em11)
if (message.member.roles.highest.comparePositionTo(target.roles.highest) <= 0) return message.lineReply(em9)
if(!target.hasPermission('ADMINISTRATOR')) return message.lineReply(em8).then(m => m.delete({ timeout: 3000}));
const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
if(!role) {
try {
        message.channel.send(em4).then(m => m.delete({ timeout: 3000}));

    let Muterole = await message.guild.roles.create({
        data : {
            name : 'Muted',
            color : '#4f4f52',
            permissions: []
        }
    });
            message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
        await channel.createOverwrite(Muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
        })
    });
    message.guild.channels.cache.filter(c => c.type === 'voice').forEach(async (channel, id) => {
    await channel.createOverwrite(Muterole, {
        SPEAK: false,
        VIDEO: false
    })
});
    await message.channel.send(em5).then(m => m.delete({ timeout: 2000}));
    }  catch (e) {
    return message.channel.send(`**${e.message}**`)
}
};      const em6 =  new MessageEmbed()
.setAuthor(`Successfully Accomplished`,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
.setDescription(`>>> **${target.displayName} has been Muted**`)
.setColor("#e61b1b")

const em7 =  new MessageEmbed()
.setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **${target.displayName} is already Muted**`)
.setColor("#e61b1b")
let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
if(target.roles.cache.has(role2.id)) return message.channel.send(em7)
await target.roles.add(role2)
message.channel.send(em6).catch(err => {
if(err) return message.channel.send('>>> Something went wrong! Please check my permissions with Muted Role')
})
}
}

