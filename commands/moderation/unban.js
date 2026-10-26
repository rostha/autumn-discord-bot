const Discord = require("discord.js");
const config = require("../../configs/config.json")
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "unban",
    category: " Moderation Commands",
    description: "bans a mentioned user",
    usage: "unban <@USER> [REASON]",
    run: async (client, message, args) => {
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
            const em2 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **You don't have permission to unban members.**`)
        .setColor("#e61b1b")
        const em4 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't have permission to unban members**`)
        .setColor("#e61b1b")
        const em5 =  new MessageEmbed()
        .setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **You must provide a user-id**`)
        .setColor("#e61b1b")
        
            if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
        if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.lineReply(em2).then(m => m.delete({ timeout: 5000 }));
        if (isNaN(args[0])) return message.lineReply(em5).then(m => m.delete({ timeout: 5000 }));
        let bannedMember = await client.users.fetch(args[0])
            if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.lineReply(em4).then(m => m.delete({ timeout: 5000 }));
               let reason = args.slice(1).join(" ")
        if (!reason) reason = "No reason given!"
        try {
            message.guild.members.unban(bannedMember, reason).catch(err => {
                if(err) return message.channel.send(em5)
            })
        let embed = new Discord.MessageEmbed()
            .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
            .setDescription(`✅ **${bannedMember.tag}** successfully unbanned!`)
            
        message.reply(embed)
        }catch (e) {
            message.channel.send("COULD NOT UNBAN HIM/HER, sorry, an error occurred")
        }
        
    }
}

