// owner-only command
// run anything you want in the comfort of your own discord server
// think this code was borrowed from another project

const { inspect } = require("util");
const { ownerID } = require("../ddconfig.json")
// const fetch = require("node-fetch");

/* 
const utils = require("@utils/utils");
const constants = require("@utils/constants");
const responses = require("@utils/responses");
const schema = require("@utils/schema");
*/

const clean = text => {
    if (typeof(text) === "string") {
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    }
}

module.exports = {
    name: "eval",
    description: "I gave up on making a sudo command so here's an eval command instead.",
    execute(message, args, client) {

        if (message.author.id !== ownerID) {
            return;
        }

        if (!args.length) {
            return message.channel.send("Man, you gotta add in some code to run, you blithering fool.")
        }

        try {
            const code = args.join(" ");
            let evaled = eval(code);

            /*
            if (typeof evaled !== "string") {
                evaled = require("util").inspect(evaled);
            }
            */
            
            message.channel.send(clean(evaled), {code:"xl"})

        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``)
        }

    }
}
