const { MessageEmbed } = require("discord.js");
const config = require("../../configs/config.json")
module.exports = {
    name: "help",
    aliases: ["h"],
    cooldown: 3, 
    category: "Information",
    description: "Returns all commands, or one specific command info",
    usage: "help [Command]",
    run: async (client, message, args) => {    
     let prefix = config.prefix
 if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
 async function getAll(client, message) {
    
    const embed = new MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setFooter(`To see command descriptions and usage type   ${prefix}help [CMD Name]`, config.AVATARURL)
        .setTitle(`Hey there, here is the menu of my commands!\n\nPrefix: \`${prefix}\``)
       message.lineReply("<:Autumn_coffee:862623097521045505> Trying to DM you.")
       await message.author.send(embed).catch(err => {
            if(err)   return message.lineReply(`<:Autumn_Ohno:862619572980285450>  I tried but looks like your DMs are closed! Please enable it so i can send you help!`).then(m => m.delete({ timeout: 3000 }));
            }) 
        
            const oembed = new MessageEmbed() 
            .setColor(config.colors.yes)
            .addFields(
             
                {name: '🔨 Moderation', value:'Mute, Unmute, Kick, Ban, Setnick, Voicekick, Unban, Giverole' },
             {name: '💬 Chat & others', value: 'Snipe, Slowmode, Say, Sayembed, Purge, Clyde, Addemoji, Anime, Amazeme'},
                              {name: '🎮 Games', value: 'Snake, Tictactoe, 8ball, Wouldyourather'},
                              {name: '<a:Autumn_jogging:869504551730946088> Action', value: 'Affect, Bed, Blur, Captcha, Hitler, Hug, Invert, Jail, ohno, Pat, Poke, Rip, Shit, Slap, Smug, Tickle, Trash, Wanted, Wasted, Burn'},
                {name: '<:Autumn_info:869503506036445185> Info ', value: 'Userinfo, Serverinfo, Avatar, Channelinfo, Botinfo, Ping, Uptime, Bancount'},
                  {name: '⚙️ Utilities', value: 'Feedback, Report, Invite, Vote'}
              )
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(`${client.user.username} Command Menu.`,config.avatarurl)
                        .setFooter(`Found any command not responding? Try reporting..`, client.user.displayAvatarURL())
         
            message.author.send(oembed).catch(err => {
                return;
              })
   
}
function getCMD(client, message, input) {
    const embed = new MessageEmbed() 

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase())) //getting the command by name/alias
    if(!cmd){
        return message.channel.send(embed.setColor("RED").setDescription(`Sorry. No Information found for command **${input.toLowerCase()}**`));
    }
    if(cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``)
    if(cmd.name) embed.setTitle(`Information: \`${cmd.name}\``)
    if(cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);

    if(cmd.aliases) embed.addField("**Aliases**", `\`${cmd.aliases.map(a => `${a}`).join("\`, \`")}\``)
    if(cmd.cooldown) embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``)
        else embed.addField("**Cooldown**", `\`2 Seconds\``)
    if(cmd.useage){
        embed.addField("**Useage**", `\`${config.prefix}${cmd.useage}\``);
        embed.setFooter("Autumn Moderations",config.AVATARURL); 
    }
    
    return message.channel.send(embed.setColor("GREEN"));
}
}
}
