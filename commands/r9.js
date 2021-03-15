const Discord = require('discord.js')

module.exports = {
    name: "r9",
    description: "Displays Dank Daily's Rule 9",
    execute(message, args, client) {
        const r9Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***spamming***")
            .setDescription("Spamming is not allowed. If you spam, you will most likely be muted by auto-moderation bots. This includes spamming walls of text.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r9Embed)
    }
}