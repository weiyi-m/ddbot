const Discord = require('discord.js')

module.exports = {
    name: "howmodmail",
    description: "Displays a brief explanation about how ModMail works.",
    execute(message, args, client) {
        const modmailEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("***- how do i mail the mods?***")
            .setDescription("*just private message modmail in the format:*\n\n‎‎‎‎‎‎‎‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎***=send 708621589800943656 (your message here)***\n\n*708621589800943656 is our server id, if you want to use modmail on other servers, make sure you copy their server id instead!*\n ‎‏‏‎")
            .setFooter('💌 ModMail')

        message.channel.send(modmailEmbed);
    }
}