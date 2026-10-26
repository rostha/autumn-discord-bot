const client = require('nekos.life');
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const neko = new client();
const config = require("../../configs/config.json")
module.exports = {
  name: "smug",
  category: " Emotions Commands",
  description: "shows that you are smug",
  usage: "smug [@USER]",
  run: async (client, message, args) => {
    const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));

        async function work() {
        let owo = (await neko.sfw.smug());

        const smug = new Discord.MessageEmbed()
        .setTitle("Someone is smug")
        .setDescription(( message.author.toString() + " is smug "))
        .setImage(owo.url)
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setURL(owo.url);
        message.channel.send(smug);

}

      work();
}
                };
