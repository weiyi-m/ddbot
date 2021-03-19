// joke kick command

module.exports = {
    name: "kik",
    description: "kik. kik. kik.",
    execute(message, args, client) {
        const member = message.mentions.users.first();
        if (!member) {
            return message.channel.send("lol no mention no fake kick")
        }

        const reason = args.slice(1).join(' ');

        message.channel.send(`**${member.tag}** has been kicked. Reason: ${reason}`)
    }
}
