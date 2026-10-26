
const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require("discord.js");

const got = require('got');
const config = require("../../configs/config.json")
module.exports = {
  name: "amazeme",
	aliases: ["amazeme"],
    category: " Fun Commands",
    description: "IMAGE CMD",
    usage: "amazeme",
    run: async (client, message, args) => {
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
   
    got('https://www.reddit.com/r/interestingasfuck/random.json').then(response => {
      let content = JSON.parse(response.body);
      var title = content[0].data.children[0].data.title;
      var amazeme = content[0].data.children[0].data.url;
      let jokeembed = new MessageEmbed()
      .setDescription(`[\`Click here\`](${amazeme})`)
      .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
      .setTitle(title)
      .setTimestamp()
      .setFooter(client.user.username, config.AVATARURL);
    if(amazeme.toLowerCase().endsWith("png")||amazeme.toLowerCase().endsWith("jpg")||amazeme.toLowerCase().endsWith("jpeg")||amazeme.toLowerCase().endsWith("gif")) jokeembed.setImage(amazeme);
    return message.channel.send(jokeembed);
    }).catch(console.error);
  }

};

