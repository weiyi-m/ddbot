const { faMarsDouble } = require("@fortawesome/free-solid-svg-icons");
const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js')

module.exports = {
    name: "faq",
    description: "Displays frequently asked questions about the bot so the hardworking moderators don't have to.",
    execute(message, args, client) {
        const faqEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Bot Frequently Asked Questions")
            .addField("**Can I invite this bot to my server?**", "No, this bot was made privately for Dank Daily.")
            .addField("**How do I gain coins?**", "Run `//help` for all the commands that you can use.")
            .addField("Why does the existence of the bot...exist?", "Cool servers have cool custom bots, so we wanted to make the server even cooler so that it's the coolest server.")

        message.channel.send(faqEmbed)
    }
}