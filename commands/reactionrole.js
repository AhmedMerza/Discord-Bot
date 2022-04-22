module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, discord, client) {
        const channel = '846736483473817671';
        const moew = message.guild.roles.cache.find(role => role.name === "Moew");
        const woof = message.guild.roles.cache.find(role => role.name === "Woof");

        const moewEmo = '<:kitty:846738863933489163>:';
        const woofEmo = '<:dog:846738864231546890>';

        let embed = new discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose ur fav animal')
        .setDescription('Choose one:\n\n'
        + `${moew} for cats\n`
        + `${woof} for dogs`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(moewEmo);
        messageEmbed.react(woofEmo);

        client.on('messageReactionAdd', async (reaction, user) => {
            console.log('add')
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.message.channel.id == channel) {
                console.log(reaction.emoji.name)
                if (reaction.emoji.name === 'kitty') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(moew);
                }
                if (reaction.emoji.name === 'dog') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(woof);
                }
            }
            else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            console.log('remove')
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === 'kitty') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(moew);
                }
                if (reaction.emoji.name === 'dog') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(woof);
                }
            }
            else {
                return;
            }
        });


    }
}