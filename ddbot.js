const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./ddconfig.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

// startup message
client.once('ready', () => {
	console.log('Alright, I\'m in the system, chief. Go ahead!');
});

client.on('message', message => {
	
	// return if message doesn't start with prefix OR message is sent by a bot
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	
	// get command from the commands folder
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	
	// if there's no commandName found in the commands folder, return
	if (!client.commands.has(commandName)) return;
	
	// cooldowns (not sure if it properly functions currently
	// TODO: make this work
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 2) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	}
	
	// execute command, return error message if present
	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('something went wrong, code must be broken or something.');
	}
});

// the entirety of this chunk is still in progress
// it's to send a welcome message whenever a member joins the guild
// something went wrong with the member.createdAt so i'm excluding this bit out so that i can work on it
/*
client.on('guildMemberAdd', member => {
	const guild = client.guilds.cache.get('756902642768150538');

	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;

	console.log(typeof member.joinedAt);
	console.log(typeof member.createdAt);
})
*/

// basic error logging, nothing much to see
client.on('shardError', error => {
    console.error('A websocket connection encountered an error:', error);
})

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
})

// if all goes well,
client.login(token);
