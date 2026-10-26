const { MessageEmbed } = require("discord.js");

module.exports = {
name: "voicekick",
aliases: ["vckick"],
cooldown: 5,
description: "kick a member from the vc ",
usage: ">!vckick [mention]"
,
run: async (client, message, args) => {
const em1 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You Don't Have Permissions To Disconnect Members.**`)
.setColor("#e61b1b")

const em2 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **I Don't Have Permissions To Disconnect Members**`)
.setColor("#e61b1b")

const em4 =  new MessageEmbed()
.setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Please mention someone to disconnect!**`)
.setColor("#e61b1b")


if (!message.member.hasPermission(["ADMINISTRATOR"]))
return message.lineReply(em1)


if (!message.guild.me.hasPermission(["MOVE_MEMBERS"]))
return message.lineReply(em2)

if (!message.mentions.members.first())
    return message.lineReply(em4);
const reason = args[1] ? args.slice(1).join(' ') : 'No reasons provided';
const member = message.mentions.members.first()
const em3 =  new MessageEmbed()
.setAuthor(`Member Disconnected`,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
.setDescription(`>>> **${message.mentions.members.first()} was disconnected**`)
.setColor("#e61b1b")
let { channel } = member.voice;

if (!channel)
return message.lineReply(`>>> The user is not in any voice channels.`);

message.mentions.members.first().voice.kick(reason).catch(err => {
if(err) return message.channel.send('>>> Something went wrong! Please check my channel permissions in that vc')
})
message.channel.send(em3)
}
};


