const Discord = require('discord.js')

module.exports = {
    name: "r5",
    description: "Displays Dank Daily's Rule 5.",
    execute(message, args, client) {
        const r5Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***channel appropriacy***")
            .setDescription("Please try to keep messages in the right channels! For example, use Dank Memer commands in the Dank Memer channels. No bot commands in the general chat as well!")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r5Embed)
    }
}