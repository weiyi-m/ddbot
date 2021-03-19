// a Command RELOAD command, CRELOAD
// and that's my discord user id below, it only works if the creator of the bot uses the command

module.exports = {
	name: 'creload',
	description: 'Reloads a command',
	args: true,
	execute(message, args) {
		const commandName = args[0];
		const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            
        if (message.author.id != "698216301675544667") {
            return;
		}
		
		if (!args) {
			return message.channel.send("No command, no reload. Go back to elementary school.")
		}

		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${commandName}\`, you stupid fucking cunt.`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.error(error);
			message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
		}
	}
}
