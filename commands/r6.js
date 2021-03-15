const Discord = require('discord.js')

module.exports = {
    name: "r6",
    description: "Displays Dank Daily's Rule 6.",
    execute(message, args, client) {
        const r6Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***respect***")
            .setDescription("Respecting the staff is extremely important. Most of the decisions are made by those with the @Mod Memer role. We are able to override any rule, ban, kick, and punish members of the server upon committing offences. If you would like a say in the server, please use the suggestions channel.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')
        
        message.channel.send(r6Embed)
    }
}