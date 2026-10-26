const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const { MessageEmbed } = require('discord.js');
const config = require("../../configs/config.json")

module.exports = {
  name: "hug",
  category: "Emotions Commands",
  description: "hugs a mentioned user",
  usage: "hug [@User]",
  run: async (client, message, args) => {
                
    const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
       if(!args[0]) return message.lineReply(`<:Autumn_Ohno:862619572980285450> You must mention someone to hug!`)

      let user = message.mentions.users.first();
      if(!user) return message.lineReply(`<:Autumn_Ohno:862619572980285450> You can't hug yourself. mention somebody!`)
        

        async function work() {
        let owo = (await neko.sfw.hug());

        const hugembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been hugged! ")
        .setDescription((user.toString() + " got hugged by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send(hugembed);

}

      work();
}
                };
