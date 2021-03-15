const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js')

module.exports = {
    name: "8ball",
    description: "A simulation of an 8ball to let your questions be answered by randomness.",
    aliases: ['8ball'],
    execute(message, args, client) {
        if (!args.length) {
            return message.channel.send("No output can occur with no input. Ask a question, dummy.")
        } 
        

        const answers = ["Yes.", "No.", "Not sure.", "You know it!", "What? Absolutely not.", "That's definitely a yes.", "Hmm, can't tell", "Sure, go for it.", "Mmm, I have no idea.", "No, not at all!", "Yep.", "Nope.", "Maybe.","Maybe I shouldn't tell you.", "Sorry? That's too hard to answer.", "Most likely."]

        const random = Math.floor(Math.random() * answers.length);

        const ballEmbed = new Discord.MessageEmbed()
            .setTitle("Magic 8-Ball")
            .setColor("RANDOM")
            .setDescription(answers[random])
            .setFooter("The answers are random.")

        message.channel.send(ballEmbed);
    }
}