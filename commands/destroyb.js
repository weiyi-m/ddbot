// "self-destruct" command, the b in destroyb stands for bot
// ends client by itself so that it can be restarted easily
// definitely not the most efficient way but hey, it works sometimes

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
