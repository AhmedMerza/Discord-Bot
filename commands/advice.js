const random = require("something-random-on-discord").Random

module.exports = {
    name: "advice",
    aliases: ['motivation'],
    category: "",
    usage: "advice",
    description: "Gives you advice",
    run: async (discord, message) => {

        let data = await random.getAdvice()
        message.channel.send({ embeds: [data.embed] });

    }
}
