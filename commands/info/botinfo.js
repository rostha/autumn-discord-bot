
const { MessageEmbed } = require('discord.js');
const config = require(`../../configs/config.json`)
module.exports = {
name: 'botinfo',
category: "Information",
  cooldown: 10,
description: "Get the info of Autumn",
usage: "info",
aliases: ["info", "details"],

run: async (client, message, args) => {
    const em2 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(em2)
       
    const embed = new MessageEmbed()
    .setAuthor("Autumn Details! ",config.avatarurl)
                    
        .addFields({ name: 'Library :bookmark_tabs: ', value: 'Java Programming language', inline: true})
    .addFields({ name: `Developer :desktop:`, value: `${config.developer} `, inline: true})
    .addFields({ name: 'Hosting  ', value: 'Hyperlayer  ', inline: true})
        .addFields({ name: 'Version :robot: ', value: '1.02    ', inline: true})
        .setColor("GREEN")
        .addFields({ name: 'Ping :ping_pong:  ', value: `${client.ws.ping}  `, inline: true})
      .addField("API Latency", `\`${(client.ws.ping)}ms\``, true)
      
        .addFields({ name: 'Total Commands :ping_pong:  ', value:`**\`${client.commands.map(cmd => cmd.name).length}\`**`, inline: true})
        .addFields({ name: 'Invite', value: `<a:Autumn_Okay:862618918186123304> [Click Me](${config.invite})`, inline: true})
        
        .setImage(config.avatarurl)
    
        .addFields({ name: 'Requested by', value: `${message.author}`, inline: true})
    .setFooter('Autumn', config.avatarurl)
    
    .setTimestamp()
message.channel.send(embed)

}  
}

    
