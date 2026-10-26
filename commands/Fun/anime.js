const Discord = require('discord.js');
const Scraper = require('mal-scraper')
const { MessageEmbed } = require("discord.js");

module.exports = {
   
        name: 'anime',
        description: 'Shows information about anime',
        aliases: ["anime"],
        usage: '<query/name>',
        accessableby: "",
    
    run: async (client, message, args) => {
        const e3 =  new MessageEmbed()
        .setAuthor(`Error Permission`,`https://cdn.discordapp.com/emojis/801917320728543275.png`)
        .setDescription(`>>> **I don't Have Permissions To EMBED_LINKS**`)
        .setColor("#e61b1b")
    
        if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.lineReply(e3).then(m => m.delete({ timeout: 5000 }));
        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);
      
        if (Text.length > 200) return message.channel.send(`Text Limit - 200`);
      
        let Msg = await message.channel.send(`**Searching It For You **`);
      
        let Replaced = Text.replace(/ /g, " ");
      
        await Msg.delete();
      
        let Anime;
      
        let Embed;
      
        try {
      
        Anime = await Scraper.getInfoFromName(Replaced);
      
        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";
      
        Embed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription(Anime.synopsis)
        .addField(`Type`, Anime.type, true)
        .addField(`Status`, Anime.status, true)
        .addField(`Premiered`, Anime.premiered, true)
        .addField(`Episodes`, Anime.episodes, true)
        .addField(`Duration`, Anime.duration, true)
        .addField(`Popularity`, Anime.popularity, true)
        .addField(`Genres`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`Ratings - ${Anime.score}`)
        .setTimestamp();
      
        } catch (error) {
          console.log(error)
          return message.channel.send(`No Anime Found!`)
         
        };
      
        return message.channel.send(Embed);
    }
}


