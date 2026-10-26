const { MessageEmbed }= require("discord.js")

const config = require("../../configs/config.json")
module.exports = {
    name: "invite",
    category: "⛔️ Moderation Commands",
    cooldown: 4, 
      aliases: ["inv","iwantyou"],
    description: "Sends you the bot's invite link!!",
    usage: "invite",
         run: async (client, message, args) => {
     
       
    const e1 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e1)
       
 let embed = new  MessageEmbed()
 .setAuthor(`Thanks for inviting me`,config.avatarurl)
.setDescription(`[click Me](https://discord.com/oauth2/authorize?client_id=855771153036738590&scope=bot&permissions=1477831806) `)
.setColor(`RED`)
        message.channel.send(embed)
      
           }  
        }
                                        
    
