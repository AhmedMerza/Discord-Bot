const discordCars = require('discord-cars') // Of course this variable can be changed to whatever. I suggest using 'cars' instead of discordCars because it will make it much cleaner.

module.exports = {
    name: 'getCar',
    descrpiton: "sends",
    execute(message, args, discord) {
        const embed = new discord.MessageEmbed()
            .setTitle("Random Car")
            .setColor('RANDOM')
            .setImage(discordCars.randomCar());

        message.channel.send({ embeds: [embed] });
    }
}