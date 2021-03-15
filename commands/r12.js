const Discord = require('discord.js')

module.exports = {
    name: "r12",
    description: "Displays Dank Daily's Rule 12.",
    execute(message, args, client) {
        const r12Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***usernames and profile pictures***")
            .setDescription("Invisible usernames, usernames containg racist slurs or NSFW profile pictures are not allowed. Mass nickname trends are also not allowed as it will be difficult for staff to moderate.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r12Embed)
    }
}