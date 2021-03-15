const Discord = require('discord.js')

module.exports = {
    name: "flip",
    description: "Flips a virtual coin for you because you're too broke to even have a coin near you.",
    execute(message, args, client) {
        const rand = ["Heads!", "Tails!"]

        const coinflipfin = rand[Math.floor(Math.random()*2)]

        const cfEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(coinflipfin)
            .setTitle("Here's the coinflip result!")

        message.channel.send(cfEmbed);
    }
}