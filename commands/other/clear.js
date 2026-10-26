const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js");
const config = require("../../configs/config.json")
module.exports = {
  name: "purge",
  category: "Chat & Others",
  cooldown:2,
  aliases:["clear","deletemsgs"],
  description: "Clear Messages",
  usage: "purge",
  run: async (client, message, args) => {

    
    const e1 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **You don't Have Permissions To Purge Messages**`)
    .setColor("#e61b1b")

    
    const em2 =  new MessageEmbed()
    .setAuthor(`Error Argument`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **Please Enter the amount of messages to delete.**`)
    .setColor("#e61b1b")

        const e3 =  new MessageEmbed()
    .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I don't Have Permissions To MANAGE_MESSAGES**`)
    .setColor("#e61b1b")

      
    const em4 =  new MessageEmbed()
    .setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **Please a number between 1 - 100.**`)
    .setColor("#e61b1b")
          
    const em5 =  new MessageEmbed()
    .setAuthor(`Error Occured`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
    .setDescription(`>>> **I am only allowed to delete 100 messages. Please choose a amount below 100**`)
    .setColor("#e61b1b")
    if (!message.guild.me.hasPermission("MANAE_MESSAGES")) return message.lineReply(e3).then(m => m.delete({ timeout: 3000}));
       
    
    { if(!message.member.hasPermission("MANAGE_CHANNEL")) return message.channel.send(e1).then(m => m.delete({ timeout: 3000}));


    if (!args[0]) return message.linereply(em2).then(m => m.delete({ timeout: 3000}));
 
    if(isNaN(args[0])) return message.linereply(em4).then(m => m.delete({ timeout: 3000}))
 
    if(args[0] > 100) return message.linereply(em5).then(m => m.delete({ timeout: 3000}));
    
    if(args[0] < 1) return message.linereply(em4).then(m => m.delete({ timeout: 3000}));
 
    await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages)
 });
 
 }
 
  }
};
