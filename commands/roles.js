// quick important dank daily role list

const Discord = require('discord.js')

module.exports = {
    name: "roles",
    description: 'Displays the list of main roles that we have in this server.',
    execute(message, args, client) {
        const rolesEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor('Dank Daily', 'https://media.discordapp.net/attachments/772885814597779476/773240530641354772/image0.png')
            .setTitle("***- main roles***")
            .setDescription("*our roles are based on amaribot levels, run `:?rank` in <#708625160651014174> to see your level. AmariBot levels are based on your chat activity, so if you want a higher role, just be active!*")
            .addFields(
        
                { name: "Roles:", value: "@Normie\n@Reposter\n@Memer\n@Good Memer\n@Original Memer\n@Total Memer\n@Epic Memer\n@Dank Memer\n@Literally Dank Memer\n@Cute Memer\n@Amazing Cute Memer\n@Wow Memer\n@Kek Lord\n@Dank Lord\n@Literal God", inline: true },

                { name: "Levels", value: "verification\nlevel three\nlevel six\nlevel nine\nlevel twelve\nlevel fifteen\nlevel eighteen\nlevel twenty-one\nlevel twenty-five\nlevel thirty\nlevel forty\nlevel fifty\nlevel sixty\nlevel seventy\nlevel eighty-five", inline: true },

                { name: "_ _", value: "_ _", inline: false }
                
            )
            .addFields(

                { name: "our staff roles are:", value: "@Mod Memer\n@Manager Memer\n@Goddess Memer\n@God Memer\n@Dank God", inline: true },

                { name: "_ _", value: "mods\nspecific managers\nadmin (female)\n admin (male)\nowner", inline: true }

            )
        
        message.channel.send(rolesEmbed);
    }
}
