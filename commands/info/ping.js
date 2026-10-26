const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "ping",
	aliases: ["latency"],
    category: "🤖 Information Commands",
    description: "Returns latency and API ping",
    usage: "ping",
    run: async (client, message, args) => {
       
        const em2 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(em2)
           
        const e1 =  new MessageEmbed()
.setAuthor(`Latency`,`https://cdn.discordapp.com/attachments/862317612388974642/862319865645498368/3883784.png`)
.setDescription(`>>> **Pong : ${client.ws.ping}**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/804045673645342743/862320526201454592/2102a19ea556e1d1c54f40a3eda0d775.gif`)
.setColor("#e61b1b")
  
        return message.lineReply(e1)
        
    }
}

