const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "bot-info",
    aliases: ["botinfo"],
    description: "Display all commands and descriptions",
    execute(message) {
        message.channel.send("Jsp flm de le faire sa sert a quoi meme ?")
    }
};