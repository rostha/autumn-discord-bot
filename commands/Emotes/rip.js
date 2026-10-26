const Canvas = require('canvas');
const { MessageEmbed } = require('discord.js');
const Discord = require(`discord.js`);
const config = require("../../configs/config.json")
const canvacord = require("canvacord");
const path = require("path");
module.exports = {
    name: path.parse(__filename).name,
    category: " Fun Commands",
    cooldown: 4,
    useage: `${path.parse(__filename).name} [@User]`,
  description: "*Image cmd in the style:* " + path.parse(__filename).name ,
    run: async (client, message, args) => {
                  
    const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
       
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(config.colors.yes).setFooter(client.user.username, config.avatarurl).setDescription("<a:Autumn_hmm:862627072345767936> Working on it!"))
        let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.rip(avatar, false);
        let attachment = await new Discord.MessageAttachment(image, "rip.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.avatarurl)
        .setImage("attachment://rip.png")
        .attachFiles(attachment).setFooter(client.user.username, config.avatarurl)
        await message.channel.send(fastembed2);
        await tempmsg.delete();//delete
    }
}
