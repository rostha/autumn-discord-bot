const Discord = require("discord.js")
const config = require("../../configs/config.json")
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "uptime",
	aliases: ["uptime"],
    category: "🤖 Information Commands",
    description: "Returns latency and API ping",
    usage: "uptime",
    run: async (client, message, args) => {
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const uptime = new Discord.MessageEmbed()
    .setTitle(`**Uptime**`)
    .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
    .setTimestamp()
    .setFooter(client.user.username, config.AVATARURL) 
    .setDescription(`:clock1: \`${days}days\` \`${hours}hours\` \`${minutes}minutes\` \`${seconds}seconds\``);			
    return message.channel.send(uptime);
    }
}

