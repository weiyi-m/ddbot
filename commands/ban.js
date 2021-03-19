// a ban command but this.... doesn't work
// everything is commented out because i meant to continue work on this but bot was discontinued

/*const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "Banishes a Discord user to the depths of hell...at least away from here.",
    execute(message, args, client) {

        const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const banReason = args.slice(1).join(' ');

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return;
        }

        if (!member) {
            return message.channel.send("Try using the command with a user next time.")
        } */

        /* if (!member) {
            try {
                if (!message.guild.members.get(args[0])) {
                    throw new Error("Couldn't find a user with this ID."); 
                }

                user = message.guild.members.get(args[0]);
                user = user.user;

            } catch (error) {
                return message.channel.send("Couldn't find a user with this ID.");
            }

        } */ /*


        if (member.id === "780033596832481365") {
            return message.channel.send("Trying to ban me, I see? Not going to happen.")
        }

        if (member.id === message.author.id) {
            return message.channel.send("Alright, if you want yourself banned, just leave the server and never come back.")
        }

        if (!message.guild.member(member).bannable) {
            return message.reply("you can't ban this user because I don't have the magic to do so.")
        }

        if (!banReason) {
            return message.channel.send("Add a reason for this ban, will you?")
        }

        /* const userr = client.users.cache.get(member.id);
        userr.send(`You have been banned in Dank Daily due to: ${banReason}`).then(function() {
            const guild = client.guilds.cache.get("756902642768150538")
            guild.members.ban(member);
        }).catch(function() {
            const guild = client.guilds.cache.get("756902642768150538")
            guild.members.ban(member);
        }) */
/*
        const guild = client.guilds.cache.get("756902642768150538")
        guild.members.ban(member);

        const banEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**${member.tag}** has been banned. Reason: ${banReason}`);

        message.channel.send(banEmbed)

        const banModlogEmbed = new Discord.MessageEmbed() 
            .setColor("RANDOM")
            .setAuthor(`Banned by ${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' }))
            .setTimestamp()
            .setDescription(`**Action**: Ban\n**User**: ${member.tag} (${member.id})\n**Reason**: ${banReason}`)

        client.channels.cache.get('780464682351460412').send(banModlogEmbed)

    }
}
*/
