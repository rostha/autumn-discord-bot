const { readdirSync } = require("fs");
const config = require("../configs/config.json");
const ascii = require("ascii-table");
let table = new ascii("Commands");
const { id } = require("common-tags");
const { ReactionUserManager } = require("discord.js");
table.setHeading("Command", "Load status");
console.log("Accessing command handler...".brightYellow);
module.exports = client => {
  readdirSync("./commands/").forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file =>
      file.endsWith(".js")
    );
    for (let file of commands) {
      let pull = require(`../commands/${dir}/${file}`);
      if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(file, "Ready & Accessed Succesflly!");
      } else {
        table.addRow(
          file,
          `Error -> missing a cmd.name, or cmd.name is not a string.`
        );
        continue;
      }
      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
  });

  const guildonlycounter = new Map();
  client.on("ready", () => {
    console.log(
      `Bot User ${client.user.username} has been logged in and is ready to use!`
        .brightYellow
    );

    console.log(table.toString().brightCyan);
    console.log("Access granted".brightYellow);
    console.log("Logging into Bot User...".brightGreen);
  });
};

