const Discord = require("discord.js");
const config = require(`../../configs/config.json`)
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "sayembed",
    category: "Chat & Others",
    aliases: ["saye"],
    description: "Says text in embed form",
    usage: "sayembed",
    run: async (client, message, args) => {
        const em2 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **I Don't Have Permissions To EMBED_MESSAGES**`)
.setColor("#e61b1b")
        const e1 =  new MessageEmbed()
        .setAuthor(`Error Occured`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **Please Say Something*`)
        .setColor("#e61b1b")
        if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply(`**${message.author.username}**, you dont have the missing permissions!`)
        if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.lineReply(em2).then(m => m.delete({ timeout: 3000}));
        if(!args[0]) return message.reply("Please say something");
        const text = args.join(" ")
        const em3 = new MessageEmbed()
        .setColor(`${config.colors.yes}`)
        .setDescription(text)
        message.delete();
                message.channel.send(e3) .catch(err => {
            if(err) return message.channel.send("Something went wrong please check my permissions.")
        })
        
             
        }
    }


