const { Channel } = require("discord.js")

module.exports = {
    name: 'destroyb',
    description: 'Shuts down the bot',
    execute(message, args, client) {
        if (message.author.id != "698216301675544667") {
            return;
        }
    
        message.channel.send("Destroying client... goodbye!")
        .then(m => client.destroy())
    }
}