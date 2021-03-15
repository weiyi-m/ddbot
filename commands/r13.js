const Discord = require('discord.js')

module.exports = {
    name: "r13",
    description: "Displays Dank Daily's Rule 13",
    execute(message, args, client) {
        const r13Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***respecting other users***")
            .setDescription("Respecting other server members is important. Do not harass anyone, repeatedly send friend requests, insult members, or **beg** for coins/items.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')

        message.channel.send(r13Embed);
    }
}