// dank daily carl bot tag

const Discord = require('discord.js')

module.exports = {
    name: "howsuggest",
    description: "Shows a quick introduction to the ?suggest coommand.",
    execute(message, args, client) {
        const suggestEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("***- how to make a suggestion***")
            .setDescription("*suggestions can be made in <#733322131131203594>*\n\n ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎***?suggest (your suggestion here)***\n ‎‏‏‎ ")
            .setFooter("🐢 Carl-bot")

        message.channel.send(suggestEmbed)
    }
}
