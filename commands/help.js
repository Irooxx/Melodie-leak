const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["h"],
    description: "Display all commands and descriptions",
    execute(message) {

        let helpEmbed = new MessageEmbed()
            .setAuthor(`Commandes`, `https://cdn.discordapp.com/emojis/837640583807107095.png?v=1`)
            .addField(`:Tcouronnejaune: Musique`, `\`play\`, \`stop\`, \`skip\`, \`volume\`, \`pause\`, \`loop\`, \`queue\`, \`search\`, \`skipto\`, \`nowplaying\`, \`pruning\`, \`shuffle\`, \`lyrics\`, \`resume\``, false)
            .addField(`:settings2: Général`, `\`help\`, \`invite\`, \`bot-info\`, \`ping\`, \`dev\``, false)
            .addField( `:support: Serveur d'assistance` , `[\`Clique ici\`](https://discord.gg/iroo&irox)`)
            .addField( `:staff: Site internet` , `[\`Clique ici\`](https://sitedeskid.io)`)
            .setColor("BLACK")
            .setFooter("&help | by Irox#0012 & ***#0002")

        return message.channel.send(helpEmbed).catch(console.error);
    }
};