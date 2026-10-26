const { MessageEmbed } = require('discord.js');

module.exports = {
    
        name: "channelinfo",
        aliases: ['ci', 'channeli', 'cinfo'],
        category: "info",
        description: "Shows Channel Info",
        usage: "[ channel mention | channel name | ID] (optional)",
        accessableby: "everyone",
   
    run: async (client, message, args) => {
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
        let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");

        let channelembed = new MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**Channel Name**", channel.name)
            .addField("**NSFW**", channel.nsfw)
            .addField("**Channel ID**", channel.id)
            .addField("**Channel Type**", channel.type)
            .addField("**Channel Description**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", channel.createdAt)
            .setColor("#dcf104")
        message.channel.send(channelembed);
    }
}
