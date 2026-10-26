  
const Discord = require("discord.js")
const config = require('../../configs/config.json');
const { TicTacToe } = require("weky")

module.exports = {
   
        name: 'ttt',
        cooldown: 3, 
        description: '',
        aliases: ["tictactoe"],
        usage: 'ttt [mention player]',
       
   
    run: async (client, message, args) => {
        
        if(!args[0]) return message.channel.send("Please Provide someone to battle with.")
        const opponent = message.mentions.users.first()
        const game = new TicTacToe({
            message: message,
            opponent: opponent,
            xColor: 'red',
            oColor: 'blurple',
            xEmoji: '❌',
            oEmoji: '0️⃣',
        })

        game.start()
    }
}
