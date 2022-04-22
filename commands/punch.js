const discord = require("discord.js");
const random = require("something-random-on-discord").Random

module.exports = {
    name: "punch",
    category: "fun",
    description: "Punch someone",
    run: async (client, message, args) => {

        let target = message.mentions.members.first()

        if (target == null) return message.channel.send("Choose someone to punch");

        let data = await random.getAnimeImgURL("punch");

        let embed = new discord.MessageEmbed()
            .setImage(data)
            .setColor("RANDOM")
            .setFooter(`${message.author.username} punches ${target.user.username}`)
            .setTimestamp()

            message.channel.send({ embeds: [embed] });
    }
};