
const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
const config = require("../../configs/config.json")
module.exports = {
    name: "avatar",
    cooldown: 3, 
    category: "Information",
    description: "View a member's pfp in bigger view",
    usage: "av [user]",
      aliases: ["pfp", "av"],

    description: "Gets the avatar of a user or yourself",
    usage: "avatar [@USER]",
    run: async(client, message, args) => {
              
    const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3)
       
        const e1 =  new MessageEmbed()
.setAuthor(`Error Conditions`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **User's Profile Picture Not Found!**`)
.setColor("#e61b1b")
const e2 =  new MessageEmbed()
.setAuthor(`Error Arguments`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Couldn't find the User**`)
.setColor("#e61b1b")

        let user;
        if(!args[0]) user = message.author
        if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
        if(args[0] && !isNaN(args[0])){
            user = client.users.cache.get(args[0])
     
            if(!message.guild.members.cache.has(args[0])) return message.lineReply(e2)
     
        }
     
        if(!user.avatarURL()) return message.lineReply(e1)
        let  Embed = new MessageEmbed()
        .setColor("CYAN")
        .setFooter(`Requested By ${message.author.username}`, config.avatarURL)
         .setImage(user.avatarURL({dynamic: true})+"?size=2048") //Size :D
        .setTimestamp()
        .setAuthor(`${user.username}'s Pfp`,user.avatarURL())
        .setTitle('Here it is!')
     
        message.channel.send(Embed)
    }
};
