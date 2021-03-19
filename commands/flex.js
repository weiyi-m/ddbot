// only certain people can use this command
// is this elitism?

const { faMarsDouble } = require("@fortawesome/free-solid-svg-icons");

module.exports = {
    name: "flex",
    description: "Only the elites can use this command.",
    execute(message, args, client) {
        const eliteIDs = ["385636891430486017", "278608551067516928", "698216301675544667", "693761984268861481", "636575525422497828", "552509974027304991", "460728803711385611"]

        if (eliteIDs.includes(message.author.id)) {
            message.channel.send("Woah, you can use this command. What a flex!")
        } else {
            return;
        }
    }
}
