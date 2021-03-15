const Discord = require('discord.js')

module.exports = {
    name: "r11",
    description: "Displays Dank Daily's Rule 11.",
    execute(message, args, client) {
        const r11Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***trading and scams***")
            .setDescription("Scamming is strictly forbidden in our server. Read the channel rules in the trading-area channels for more information on scam preventions, and how to be compensated. Trade sniping is also against our rules.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r11Embed);
    }
}