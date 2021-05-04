const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    let helpEmbed = new MessageEmbed()
  .setAuthor(`Invite Skider`, `https://cdn.discordapp.com/emojis/837640583807107095.png?v=1`)
  .setColor(("BLACK"))
  .addField(`:Tcouronnejaune: __**Lien d'invitations**__`, `[\`Cliquez ici\`](https://discord.com/IroxLeBest)`)
  .addField(`__**:support: Serveur d'assistance**__`, `[\`Clique ici\`](https://skider.ski)`)
message.channel.send(helpEmbed)
  }
};