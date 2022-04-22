module.exports = {
    name: 'help',
    descrpiton: "sends commands of GRoot!",
    execute(message, args, discord) {
        const embed = new discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Groot')
            .setURL('https://github.com/i47med01')
            .setDescription('All commands:')
            .setAuthor('i47med01', 'https://avatars.githubusercontent.com/u/67040497?v=4',
                'https://www.instagram.com/nk1aus/')
            .addFields(
                { name: 'groot:', value: 'Sends information about Groot!' },
                { name: 'race:', value: 'Sends type racer link' },
                { name: 'clear:', value: 'Clears messages!' },
                { name: 'advice:', value: 'Sends a random advice' },
                { name: 'cry:', value: 'Not sure what to write' },
                { name: 'punch:', value: 'Sends a pic of someon punching somone' },
                { name: 'slap:', value: 'Give someone a slap' },
                { name: 'anime:', value: 'Sends information about anime' },
                { name: 'cat:', value: 'Sends a random image of a cat' },
                { name: 'dog:', value: 'Sends a random image of a dog' },
                // { name: 'play:', value: 'Plays an audio from youtube!' },
                // { name: 'leave:', value: 'Stops the audio and leave the channel' },
                { name: 'car:', value: 'Sends a random car' },
            )
            .setImage('https://images.hdqwalls.com/download/baby-groot-2018-4k-z2-1600x900.jpg')
            .setFooter('Don\'t forget to use the prefix(.)');

        message.channel.send({ embeds: [embed] });
    }
}