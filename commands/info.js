// info command for the bot
// suprery and res. were the initial developers of this bot
// i merely remade the bot in discord.js
// uptime doesn't work so i removed it(?)

const Discord = require('discord.js')

module.exports = {
    name: 'info',
    description: 'Displays information about me.',
    execute(message, args, client) {
        let days = Math.floor(client.uptime / 8640000);
        let hours = Math.floor(client.uptime/ 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const infoEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Bot Information")
            .setDescription(`Bot Prefix: \`/\`\nCreated on 2/11/2020\nThis bot was created by Suprery#9560 and res.#0001 because they sold their soul to Dank Daily.\nBot Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s\nHow cool is the bot: 103%\nHuge thanks to these people for helping in testing and making the bot better:\n**Pontus#2020\ndecc00n#6684\ncone.#1815\nEnewy#5269**\nfrom soup: huge thanks to my mom also`)
            .setFooter("foop was here")
            .setThumbnail("https://media.discordapp.net/attachments/772885814597779476/773138389339734016/image0.png")

        message.channel.send(infoEmbed);
    }
}
