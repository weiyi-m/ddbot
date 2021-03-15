const Discord = require('discord.js')

module.exports = {
    name: "r4",
    description: "Displays Dank Daily's Rule 4.",
    execute(message, args, client) {
        const r4Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***racist language***")
            .setDescription("Any racial slurs, or racist behaviour/comments will **not** be tolerated in this server. This includes racist nicknames and jokes. Swearing is allowed, but refrain to swearing excessively, or swearing **at** a certain Discord user.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r4Embed);
    }
}