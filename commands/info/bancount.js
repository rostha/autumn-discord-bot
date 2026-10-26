const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bancount",
    category: "extra",
    category: " Info Commands",
    aliases: ["bans"],

    description: "Sends how many members are banned in the guild",
    run : async(client, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) return;
        message.guild.fetchBans().then(bans => {
            message.channel.send(` Autumn! Is counting..`).then(m => m.delete({ timeout: 2000 }));
          message.channel.send(`There are ${bans.size} Users Banned in this Guild`)
        })

    }
}
