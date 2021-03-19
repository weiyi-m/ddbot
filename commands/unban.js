// unban command, not sure if functional
// description kinda funny though

const Discord = require('discord.js')

module.exports = {
    name: "unban",
    description: "When you've changed your mind and have decided to simp for a user with 42 warns and 11 kicks.",
    execute(message, args, clients) {
        const member = message.mentions.users.first();
        const unbanReason = args.slice(1).join(' ');

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return;
        }

        if (!member) {
            try {
                if (!message.guild.members.get(args.slice(0,1).join(' '))) {
                    throw new Error("Couldn't find a user with this ID.");
                }

                user = message.guild.members.get(args.slive(0, 1).join(' '));
                user = user.user;
    
            } catch (error) {
                return message.channel.send("Couldn't find a user with this ID.")
            }
        }
    }
}
