module.exports = {
  name: 'purge',
  description: 'delete a certain number of messages',
  usage: '<number of messages to be deleted>',
  cooldown: 5,
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('There was an error trying to purge messages in this channel!');
    });
    
    const realAmount = parseInt(args[0]);
    message.channel.send(`Purged ${realAmount} messages!`)
      .then(msg => {
        msg.delete({ timeout: 2000});
      })
      .catch(console.error);
	},
};