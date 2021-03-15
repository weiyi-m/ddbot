const Discord = require('discord.js')

module.exports = {
    name: "r1",
    description: "Displays Dank Daily's Rule 1.",
    execute(message, args, client) {
        const r1Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***discord TOS and community guidelines***")
            .setDescription("Please follow the terms of service and community guidelines! This includes raiding, not being under 13, DDoSing, doxxing, and using IP grabbers.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r1Embed);
    }
}