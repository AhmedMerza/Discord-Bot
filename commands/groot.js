module.exports = {
    name: 'groot',
    descrpiton: "sends information about Groot!",
    execute(message, args, discord) {
        const embed = new discord.MessageEmbed()
            .setColor('#304281')
            .setTitle('Groot')
            //https://discord.com/api/oauth2/authorize?client_id=836708966926254150&permissions=502726263&scope=bot
            .setURL('https://github.com/i47med01')
            .setDescription('This is an embed for Groot info')
            .setAuthor('i47med01', 'https://avatars.githubusercontent.com/u/67040497?v=4',
                'https://www.instagram.com/nk1uas/')
            .addFields(
                { name: 'Name:', value: 'Groot' },
                { name: 'Date of creation:', value: '27/4/2021' },
            )
            .setImage('https://images.hdqwalls.com/download/baby-groot-2018-4k-z2-1600x900.jpg')
            .setFooter('Make sure if you have any idea to contact Ahmed to make me better ;)');

            message.channel.send({ embeds: [embed] });
    }
}