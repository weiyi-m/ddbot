const Discord = require('discord.js')

module.exports = {
    name: "r3",
    description: "Displays Dank Daily's Rule 3.",
    execute(message, args, client) {
        const r3Embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(":white_sun_cloud: ***robbing/heisting***")
            .setDescription("Robbing/heisting is disabled on our server, as we want our server to be a safe space for anyone to use the bot without fear of being robbed.")
            .setFooter('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')
        
        message.channel.send(r3Embed);
    }
}