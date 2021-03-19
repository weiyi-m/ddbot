// just a dice command, 1/6 chance to get the number you were thinking of

module.exports = {
    name: "dice",
    description: "trash 6-sided dice lol like a coinflip but 3 times more numbery",
    execute(message, args, client) {
        var diceNumber = Math.floor(Math.random() * 6)
        message.channel.send(":game_die: " + diceNumber.toString)
    }
}
