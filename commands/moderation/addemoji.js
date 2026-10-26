const Discord = require("discord.js");
const config = require(`../../configs/imagelink.json`)
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
module.exports = {
name: "addemoji",
category: "Other",
cooldown: 1,
description: "Adds a emoji",
usage: ">addemoji [emoji] [emoji-name](optional)",
aliases: ["stealemoji", "emoteadd"],
run: async (client, message, args) => {
  // again embed collections lel
const e1 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **You Do Not Have Permissions To Add Emojis**`)
.setColor("#e61b1b")
  
const e2 =  new MessageEmbed()
.setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **I Do Not Have Permissions To Add Emojis**`)
.setColor("#e61b1b")
const e3 =  new MessageEmbed()
.setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Please Provide a emoji to add!**`)
.setColor("#e61b1b")


const things =  new MessageEmbed()
.setAuthor(`Error Occured`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Possition Reasons:
- Server has reached it's maxium emoji limit
- I don't have permission to add emojis.
- You tried to add default Emoji.
- I may have added 50 emojis which is the limit by discord api. You can try after 2 hours until it resets.
- The Provided Emoji size is too big which is above 256KB. (Note : Emoji size must be below 256KB) 
    **`)
.setColor("#e61b1b")

const replied =  new MessageEmbed()
.setAuthor(`Error Occured`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
.setDescription(`>>> **Please provide a valid emoji! Not a Random letter/number or symbol**`)
.setColor("#e61b1b")


if (!message.guild.me.hasPermission("ADD_EMOJIS")) return message.lineReply(e1).then(m => m.delete({ timeout: 3000 }));
      if (!message.guild.me.hasPermission("ADD_EMOJIS")) return message.lineReply(e2).then(m => m.delete({ timeout: 3000 }));

const emoji = args[0];
if (!emoji) return message.lineReply(e3).catch(err => {
    if(err) return;
})

let customemoji = Discord.Util.parseEmoji(emoji);
if (customemoji.id) {
  const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
    customemoji.animated ? "gif" : "png"
  }`;
  const name = args.slice(1).join(" ");
  try {
    const Added = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Emote Added`,config.approved)
      .setFooter(`${client.user.username}`,config.avatarurl)
      .setThumbnail(`${Link}`)
      .setDescription(
        `   **Emote Added | with name : **${name || `${customemoji.name}`}**
Preview : [Click Me](${Link}) || Autumn **`
      );
    

    await message.guild.emojis.create(
      `${Link}`,
      `${name || `${customemoji.name}`}`
    );
    
    return message.channel.send(Added);
  } catch (err) {
    console.log(err);
    return message.channel.send(things)
  }
} else {
  let CheckEmoji = parse(emoji, { assetType: "png" });
  if (!CheckEmoji[0])
    return message.reply(replied);
}
}
};

