const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'giverole',
    cooldown: 2,
    aliases: ["role", "trasferrole"],
    description: "gives role to user",
    usage: "role <user> <role name or id>",
    run: async (client, message, args) => {

    
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
        
        const e1 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **You don't Have Permissions To MANAGE_ROLES**`)
        .setColor("#e61b1b")
        const e2 =  new MessageEmbed()
        .setAuthor(`Error Syntax`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **Incorrect usage, Proper usage : giverole<username  user id> <role name  id>`)
        .setColor("#e61b1b")
    
    
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(e1).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send(e2).then(m => m.delete({ timeout: 10000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('Provided user already has that role.').then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Given Role : ${roleName.name}`)
                 .setColor(`RED`)
                 .setFooter(`Autumn`)
                 .setDescription(`:white_check_mark:  ${message.author.username}  has  the role ${roleName} to ${member.user.username}`)
                                             
                 

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send(':x: Something went wrong please check my perms').then(m => m.delete({ timeout: 5000 }))
        }
    }
}
