const Discord = require('discord.js')

module.exports = {
    name: "r10",
    description: "Displays Dank Daily's Rule 10.",
    execute(message, args, client) {
        const r10Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***advertisements***")
            .setDescription("Advertising outside the self-advertise or partnerships channel is strictly not allowed. Advertising NSFW content or anything involving real life currency will also be deleted. DM advertising is against Discord ToS and will not be tolerated.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')
        
        message.channel.send(r10Embed)
    }
}