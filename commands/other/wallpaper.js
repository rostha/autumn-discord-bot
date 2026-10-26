const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const { MessageEmbed } = require("discord.js");
const config = require("../../configs/config.json")
module.exports = {
  name: "wallpaper",
  category: "SFW Commands",
  cooldown:2,
  description: "sends random wallpaper",
  usage: "wallpaper",
  run: async (client, message, args) => {

    
        const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3)
       

    let owo = (await neko.sfw.wallpaper());

    const wallpaper = new MessageEmbed()
      .setDescription(`**Random Wallpaper For You | Download : [Click Me](${owo.url})**`)
      .setFooter(`Autumn Requested by ${message.setAuthor}`,config.avatarurl)
      .setImage(owo.url)
      .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
      
    message.channel.send(wallpaper);
  }
};
