module.exports = {
    name: 'ping',
    description: "Sends your ping in milliseconds so that you can either flex or cry about your internet.",
    cooldown: 5,
    execute(message, args, client) {
        message.channel.send("pOnG..").then((msg) => {
            msg.edit(`Pong :ping_pong: | \`${Date.now() - message.createdTimestamp}\`ms.`)
        });
    }
}