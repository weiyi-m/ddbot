const Discord = require('discord.js')

module.exports = {
    name: "r14",
    description: "Displays Dank Daily's Rule 14.",
    execute(message, args, client) {
        const r14Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***common sense***")
            .setDescription("We cannot include everything in a short rules list like this one, but using your common sense is required. Exploiting loopholes is disallowed and you can still be punished if you didn't explicitly break a rule.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r14Embed)
    }
}