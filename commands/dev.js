const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "dev",
    aliases: [],
    description: "Display all commands and descriptions",
    execute(message) {
        message.channel.send("Les developpers sont <@761984865775124491> & <@731627642100645908> bande de skid")
    }
};