// don't think this works.
// command triggers a fake member join, so that it triggers the welcome message which also doesn't work

const { faMarsDouble } = require('@fortawesome/free-solid-svg-icons');
const { Channel } = require('discord.js');
const { ownerID } = require('../ddconfig.json')

module.exports = {
    name: "testgreet",
    description: "Test command to simulate a member's join.",
    execute(message, args, client) {
        if (message.author.id !== ownerID) {
            return;
        }

        client.emit('guildMemberAdd', message.member);

        message.channel.send("Member join initiated. Check the specified channel!")
    }
}
