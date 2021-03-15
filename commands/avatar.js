const Discord = require('discord.js')

module.exports = {
    name: "avatar",
    description: "Shows you a picture of your ugly avatar. Change it to something cooler.",
    aliases: ['pfp', 'av'],
    execute(message, args, client) {

        if (!message.mentions.users.size) {
            const member1 = message.author
            const authorImg = new Discord.MessageEmbed() 
                .setColor("RANDOM")
                .setTitle("User Avatar")
                .setImage(member1.displayAvatarURL({ format: 'png', size: 2048 }))
                .setFooter(`Used by ${message.author.username}`)
            message.channel.send(authorImg);
        } 

        const avatarList = message.mentions.users.map(user => {
            const memImg = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("User Avatar")
                .setImage(user.displayAvatarURL({ format: "png", size: 2048 }))
                .setFooter(`Used by ${message.author.username}`)
            return memImg
        })
        message.channel.send(avatarList);
    }
}