const runtimeEnv = require("./environment");
// Autumn Packages : ReYMee
const Discord = require('discord.js');

var colors = require('colors');
const fs = require('fs');

const config = require('./configs/config.json');
config.token = runtimeEnv.DISCORD_TOKEN;
config.database = runtimeEnv.MONGODB_URI;
const mongoose = require('mongoose');
mongoose.connect(`${config.database}`, {
  useUnifiedTopology : true,
  useNewUrlParser: true,
  }).then(console.log(' Mongo Connection Successful'))
const lineReply = require('discord-reply'); // Special Package! RemZ!



const http = require("http");
const path = require("path");
const express = require("express");

const Jimp = require("jimp");

// Handlers And Client Zone   // Made By RemY
const client = new Discord.Client();
const { Collection } = require("discord.js");
const disbut = require("discord-buttons")(client)
client.emotes = require('./configs/emotes.json');
const { MessageEmbed } = require("discord.js");
client.commands = new Collection();
client.queue = new Map();
client.aliases = new Collection();

const cooldowns = new Collection();
client.setMaxListeners(100);
require('events').defaultMaxListeners = 0;

client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
require(`./handlers/${handler}`)(client);
});


const setups = require("./handlers/setups");
  setups(client);

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.guild) return;
    let prefix = `!`;
  if (prefix === null) prefix = config.prefix;           //if not prefix set it to standard prefix in the config.json file

  if (!message.content.startsWith(prefix) && message.content.includes(client.user.id))
      message.lineReply(`<:Autumn_yeah:862615550974361601> Yeah? I am awake! Forgot Prefix? Nvm Itz : ${prefix}`).then(m => m.delete({ timeout: 3000 }));
  if(!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);

if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) 
      {            if (!cooldowns.has(command.name)) {
              cooldowns.set(command.name, new Collection());
          }
                      const now = Date.now();
          const timestamps = cooldowns.get(command.name);
          const cooldownAmount = (command.cooldown || 2) * 1000;
        
          if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
            if (now < expirationTime) {
              const timeLeft = (expirationTime - now) / 1000;
              return message.lineReply(
                `${message.author}, A little too quick there.`
              ).then(m => m.delete({ timeout: 2000 }));
            }
          }
                    timestamps.set(message.author.id, now);
          setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
                      try{

  command.run(client, message, args, prefix);
} 
 catch (error){
              console.log(error.toString().red)
            return;
      
          }
      }
  else
      return message.lineReply(`Unknown Command!. Please try looking at Help panel. using >help`).then(m => m.delete({ timeout: 2000 }));
});
// EVENTS
// Snipe Command Essentials

client.snipes = new Collection();

client.on("messageDelete",(message) => {
  let snipes = client.snipes.get(message.channel.id) || [];
  if (snipes.length > 5) snipes = snipes.slice(0, 4);
  snipes.unshift({
    msg: message,
    author: message.author,
    
    image: message.attachments.first()
    ? message.attachments.first().proxyURL
    : null,
    time: Date.now(),
  })

client.snipes.set(message.channel.id, snipes);

});

client.login(config.token)

