const client = require('nekos.life');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const neko = new client();
const config = require("../../configs/config.json")

module.exports = {
  name: "pat",
  category: " Emotions Commands",
  description: "pats a mentioned user",
  usage: "pat [@User]",
  run: async (client, message, args) => {

    const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));

    let user = message.mentions.users.first() || message.author;
        async function work() {
        let owo = (await neko.sfw.pat());

        const patembed = new Discord.MessageEmbed()
        .setTitle(user.username + " !!! ")
        .setDescription((user.toString() + " got patted by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send(patembed);

}

      work();
}
                };
