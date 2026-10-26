const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
    name: "feedback",
  cooldown: 1000,
    description: "feedback command (embed style)",

    async run (client, message, args) {
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));

        if(!args[0]) return message.reply('Please add a reason to feedback!')

        message.reply(`✉ | ${message.author.username}, Thanks for the feedback! :)`)

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Feedback:`)
        .setDescription(`${args}`)
        .addField("On the server:", `${message.guild.name}`)
        .addField("Server ID:", `${message.guild.id}`)

        
        client.channels.cache.get(`863744480020398101`).send(embed)
    }
}
