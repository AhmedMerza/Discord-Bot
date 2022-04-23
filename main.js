const discord = require("discord.js");
// const client = new discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '.';
const fs = require('fs');

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('guildMemberAdd', guildMember => {
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

  try {
    guildMember.roles.add(welcomeRole);
  } catch (err) {
    console.log(err);
  }

  guildMember.guild.channels.cache.get('786176176015671306').send(`Welcome <@${guildMember.user.id}> to the server!`);
});
client.on("ready", () => {
  console.log("Groot is online!");
  // client.commands.get('prayTime').run(client);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/); ``
  const command = args.shift().toLowerCase();

  if (command === 'help')
    client.commands.get('help').execute(message, args, discord);
  else if (command === 'clear')
    client.commands.get('clear').execute(message, args);
  // else if (command === 'play')
  //   client.commands.get('play').execute(message, args);
  // else if (command === 'leave')
  //   client.commands.get('leave').execute(message, args);
  else if (command === 'groot')
    client.commands.get('groot').execute(message, args, discord);
  else if (command === 'race')
    client.commands.get('race').execute(message, args);
  else if (command === 'reactionrole') {
    client.commands.get('reactionrole').execute(message, args, discord, client);
  }
  // else if (command === 'mute') {
  //   client.commands.get('mute').run(client, message, args);
  // }
  else if (command === 'advice') {
    client.commands.get('advice').run(discord, message);
  }
  else if (command === 'cry') {
    client.commands.get('cry').run(client, message, args);
  }
  else if (command === 'punch') {
    client.commands.get('punch').run(client, message, args);
  }
  else if (command === 'slap') {
    client.commands.get('slap').run(client, message, args);
  }
  else if (command === 'anime') {
    client.commands.get('anime').run(client, message, args);
  }
  else if (command === 'cat') {
    client.commands.get('cat').run(client, message, args);
  }
  else if (command === 'dog') {
    client.commands.get('dog').run(client, message, args);
  }
  else if (command === 'car') {
    client.commands.get('getCar').execute(message, args, discord);
  }
});


client.login(/*Bot token*/)
