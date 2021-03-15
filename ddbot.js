const fs = require('fs');
const Discord = require('discord.js');
const { token, prefix } = require('./ddconfig.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

// if all goes well initially
client.once('ready', () => {
	console.log('Alright, I\'m in the system, chief. Go ahead!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!client.commands.has(commandName)) return;

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	
	// cooldown variable not really implemented
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

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// this was meant to be a welcome message, but had some trouble printing out the account creation date
/*
client.on('guildMemberAdd', member => {
	const guild = client.guilds.cache.get('756902642768150538');

	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;

	console.log(typeof member.joinedAt);
	console.log(typeof member.createdAt);
})
*/

client.on('shardError', error => {
    console.error('A websocket connection encountered an error:', error);
})

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
})

client.login(token);
