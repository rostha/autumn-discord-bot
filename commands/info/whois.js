const Discord = require("discord.js")
const config = require("../../configs/config.json")
const moment = require('moment')
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "whois",
	aliases: ["userinfo","user"],
    category: "Info",
    description: "Returns latency and API ping",
    usage: "whois @mention or Userid",
    run: async (client, message, args) => {
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
     

        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        
    const roles = user.roles.cache // getting the roles of the person
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString())
    .slice(0, -1);
    let displayRoles;

    // if he have less then 20 role, display it
    if(roles.length < 20) {
        displayRoles = roles.join(' ')
        if(roles.length < 1) displayRoles = "None" // if no roles say None

    } else {

        // if he have more then 20 just display 20 roles
        displayRoles = roles.slice(20).join(' ')
    }
        const embed = new MessageEmbed()
                        .setAuthor(`${user.user.tag}`,user.user.displayAvatarURL())
            .setColor(`${config.colors.yes}`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addField(`ID ${user.user.id}`,`<@!${user.user.id}>`)  
            .setFooter(`Requested By ${message.author.username}`)
            .setTimestamp()
            .addFields(
                {
                    name: 'Joined ',
                    value: moment(user.user.joinedAt).format("LLLL"),
                    inline: true
                },
                  
                               {
                    name: 'Registered',
                    value: moment(user.user.createdAt).format("LLLL"),
                    inline: true
                },
                           
                        )
                                                .addField(`**Roles [${roles.length}]**`, `${displayRoles}`)  // display his roles
                                                .addField(`Avatar`, `[Click here to view Avatar](${user.user.displayAvatarURL({ dynamic: true})})`) // show the person avatar in a link

        await message.channel.send(embed)
    }
}

