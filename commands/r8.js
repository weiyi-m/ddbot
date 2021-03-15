const Discord = require('discord.js')

module.exports = {
    name: "r8",
    description: "Displays Dank Daily's Rule 8.",
    execute(message, args, client) {
        const r8Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***voice channels***")
            .setDescription("Earraping, playing unreasonable sounds and inappropriate music in VCs is against our rules. Voice chat hopping is also not allowed.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r8Embed)
    }
}