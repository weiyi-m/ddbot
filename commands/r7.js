const Discord = require('discord.js')

module.exports = {
    name: "r7",
    description: "Displays Dank Daily's Rule 7.",
    execute(message, args, client) {
        const r7Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***nsfw***")
            .setDescription("NSFW content is against the rules in our server. This includes gore, porn, and violent videos/images.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r7Embed)
    }
}