const config = require("../configs/config.json")
console.log("Loading Setups".brightCyan)
module.exports = (client) => {
   
   let stateswitch = false;
    client.on("ready", () => {
        client.user.setActivity(`>help | Autumn`).then(() =>
       client.user.setStatus(`idle`))
       
            });

    client.on("guildCreate", guild => {
        console.log("Hey, I got invited to a Server".yellow)
                 })
  
      
        }    
    console.log("Setups Loaded".brightGreen)


