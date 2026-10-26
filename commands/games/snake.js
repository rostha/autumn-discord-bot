const Discord = require("discord.js")
const config = require('../../configs/config.json');
const { Snake }  = require("weky")

module.exports = {
 
        name: 'snake',
        description: '',
        cooldown: 3, 
        aliases: ["snakegame"],
        usage: 'snake ',
     
   
    run: async (client, message, args) => {

        const game = new Snake({
            message: message,
                  embed: {
                           title: 'Autumn Snake Game', 
                           color: config.embedcolor, 
                           gameOverTitle: "Game Over", 
                  },
                 emojis: {
                          empty: '⬛', 
                          snakeBody: '🐍', 
                          food: '🍎 ', 
                         //controls
                           up: '⬆️', 
                           right: '⬅️',
                           down: '⬇️',
                           left: '➡️'
                 }
                        })
        game.start()
    }
}
