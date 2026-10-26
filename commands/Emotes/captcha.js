const Discord = require('discord.js');
const fetch = require('node-fetch');
const { MessageEmbed } = require("discord.js");
module.exports = {
   
        name: "captcha",
        cooldown: 4,
        noalias: [''],
        category: "image",
        description: "Shows Captcha Image Of An User",
        usage: "[username | nickname | mention | ID](optional)",
        accessableby: "everyone",
    
    run: async (bot, message, args) => {

        const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
    .setColor("#e61b1b")

    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${user.user.username}&url=${user.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "captcha.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            console.log(e);
            m.edit("Error, Try Again! Mention Someone");
        }
    }
};
