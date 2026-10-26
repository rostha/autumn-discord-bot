const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "say",
    category: "Moderation",
    description: "Says text",
    usage: ",say TEXT",
    run: async (client, message, args) => {
        const e1 =  new MessageEmbed()
        .setAuthor(`Error Occured`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **Something went Wrong!**`)
        .setColor("#e61b1b")
        if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply(`**${message.author.username}**, you dont have the missing permissions!`)
        if(!args[0]) return message.reply("Please say something");
        message.delete();
        message.channel.send(args.join(" ")) .catch(err => {
            if(err) return message.channel.send(e1)
        })
        
             
        }
    }


