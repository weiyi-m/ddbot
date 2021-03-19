// joke ban command, doesn't actually ban anyone
// should've renamed command to "bon", seems more mainstream these days

module.exports = {
    name: "bam",
    description: "Oops haha my finger slipped uh oh banned haha lololol",
    execute(message, args, client) {
        const member = message.mentions.users.first();
        if (!member) {
            return message.channel.send("lol at least mention a user that you're gonna fake ban")
        }

        const reason = args.slice(1).join(' ');

        message.channel.send(`**${member.tag}** has been banned. Reason: ${reason}`)
    }
}
