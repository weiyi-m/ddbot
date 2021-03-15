const Discord = require('discord.js')

module.exports = {
    name: 'r2',
    description: 'Displays Dank Daily\'s Rule 2.',
    execute(message, args, client) {
        const r2Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***dank memer rules***")
            .setDescription("As a Dank Memer server, we **will** enforce Dank Memer rules. If Dank Memer ToS is violated in our server, this server may be blacklisted from the bot.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r2Embed);
    }
}