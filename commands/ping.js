const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "ping",
    aliases: [],
    description: "Display all commands and descriptions",
    execute(message) {
        message.channel.send("Irox & Wassim dépasse l'api 0 ms")
    }
};