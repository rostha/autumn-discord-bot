const {readdirSync} = require('fs')
const { MessageEmbed } = require("discord.js");
const config = require('../../configs/config.json')

module.exports = {
    
    name: 'reload',
    description: "Reloads the command",
    accessably: "not you",
    usage: "no",
    category: "owner",
    
    run: async (client, message, args) => {
        
       let array = config.dev
  
       if(!array.includes(message.author.id.toString())) {
         return message.channel.send("Only people who are worthy enough can use it <:xcite:757638739995525211> <:xcite:757638739995525211>")
       }
        let cmdfolder = args[0];
        if(!cmdfolder) return message.channel.send('❌ | Provide a command Folder!')
        let command = args[1];
        if (!command) return message.channel.send('❌ | Provide a command!')
        try{
               require(`../${cmdfolder}/${command}`) 
        } catch(e) {
            return message.channel.send('❌ | No command with that name found.') 
        }
        delete require.cache[require.resolve(`../${cmdfolder}/${command}`)];
        let pull = require(`../${cmdfolder}/${command}`);
        client.commands.set(pull.name, pull);
        console.log(`Reloaded the command!`)
        var sembed2 = new MessageEmbed()
        .setAuthor(`Successfully Done `,`https://cdn.discordapp.com/emojis/801917144237211669.png`)
        .setColor("#e61b1b")
        .setDescription(`>>> **${client.emotes.success} Reloaded the command ${pull.name}**
        `)
        return message.channel.send(sembed2)
    }
}

