const { faMarsDouble } = require("@fortawesome/free-solid-svg-icons");
const Discord = require('discord.js')

module.exports = {
    name: "tyboost",
    description: "Thanks the rich people for boosting. Thank you, boosters!",
    execute(message, args, client) {
        if (!message.mentions.users.first()) {
            return message.channel.send("Sorry, please mention the booster along with the command. We're bots, not magicians, and can't automatically figure out who's the one to thank.")
        }

        const booster = message.mentions.users.first();

        const tyboostEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Thank you so much for boosting!")
        .setDescription(`**Thank you for boosting, ${booster}!**\n We appreciate it!\n\nDM or ping a head moderator or an admin in **<#718856931501932594>** for your booster perks. Not sure what booster perks you'll be getting? No worries, you can find the list of booster perks here in <#717364617222815806>.\nDM a moderator for any queries you may have.`)
        .setFooter("Dank Daily", 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')
        .setThumbnail("https://cdn.discordapp.com/emojis/767521337505742880.png?v=1")

        message.channel.send(tyboostEmbed)
    }
}