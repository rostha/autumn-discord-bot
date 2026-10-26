const { MessageEmbed } = require('discord.js');
const config = require(`../../configs/imagelink.json`)
module.exports = {
    name: "ban",
    cooldown: 2,
    aliases: ["banhim", "banish"],
    description: "Bans the user",
    usage: "[name | nickname | mention | ID] <reason> (optional)",

run: async (client, message, args) => {
    message.channel.startTyping()
await  message.channel.stopTyping()
    
    const e1 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **You Do Not Have Permissions To BAN_MEMBERS**`)
    .setColor("#e61b1b")

    const e2 =  new MessageEmbed()

    .setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **Please Provide a User to Ban**`)
    .setColor("#e61b1b")

    const e3 =  new MessageEmbed()
    .setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **The Provided User is not in guild.**`)
    .setColor("#e61b1b")

    const e4 =  new MessageEmbed()
    .setAuthor(`Error Conditons`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **Sorry, You can't ban yourself**`)
    .setColor("#e61b1b")

    const e5 =  new MessageEmbed()
    .setAuthor(`Error Failure`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **Failed to Can't Ban that User, Reason : User is a Mod/Admin**`)
    .setColor("#e61b1b")

    const e6 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I Don't Have Permissions To BAN_MEMBERS**`)
    .setColor("#e61b1b")

        try {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.lineReply(e1)
                
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(e6);
        if (!args[0]) return message.channel.send(e2)

        let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!banMember) return message.channel.send(e3);
        if (banMember === message.member) return message.channel.send(e4)

        const reason = args[1] ? args.slice(1).join(' ') : 'No reasons provided';

        if (!banMember.bannable) return message.channel.send(e5)
        
            
            const sembed2 = new MessageEmbed()
                .setColor("#dada40")
                .setAuthor(`Report`,`${config.report}`)
                .setTimestamp()
                .setThumbnail(`${config.discordlogo}`)
                .setDescription(`**You were banned From Server : ${message.guild.name}
                Reason - ${reason || "Reason Not mentioned!"}**`)
                .setFooter(`From : ${message.guild.name} | Autumn Moderations`, message.guild.iconURL())
                
                banMember.send(sembed2).then(() =>
                message.guild.members.ban(banMember)).catch(err => {
                    if (err)
                    message.guild.members.ban(banMember)
                    })
        
                    
        if (reason) {
            var sembed = new MessageEmbed()
            .setAuthor(`Successfully Accomplished `,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
                .setColor("#e61b1b")
                .setDescription(`>>> ${client.emotes.success}**__${banMember.user.username} has been banned.__**
                Reason : ${reason}
                `)
            message.channel.send(sembed);
            } else {
                var sembed3 = new MessageEmbed()
                .setAuthor(`Successfully Done `,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
                .setColor("#e61b1b")
                .setDescription(`>>> ${client.emotes.success}**__${banMember.user.username} has been banned.__**
                Reason : ${reason}
                `)
        message.channel.send(sembed3)
        }
                
    } catch (e) {
        return message.channel.send(`**${e.message}**`)
    }
}
};
/**
  * @INFO
  *  Coded by Natasha Missilinx 
  * @INFO
  * Position | Software Developer
  * @INFO
  * Copyright warning
  * @INFO
*/
