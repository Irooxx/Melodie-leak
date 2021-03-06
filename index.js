const { Client, Collection, Discord } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./util/LeakedLol")

const client = new Client({
  ws : ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS",'GUILD_EMOJIS','GUILD_INTEGRATIONS',"GUILD_WEBHOOKS","GUILD_INVITES","GUILD_VOICE_STATES","GUILD_PRESENCES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGES"],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'], 
  disableMentions: "everyone",
  restTimeOffset: 0
});

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`By Irox [&invite]`, {
    type: "LISTENING",
  });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);


const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
});