// joke reponse command
// just "E"

const Discord = require('discord.js')

module.exports = {
    name: "e",
    description: "e.",
    execute(message, args, client) {
        message.channel.send("e")
    }
}
