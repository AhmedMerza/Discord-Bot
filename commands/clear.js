module.exports = {
    name: 'clear',
    description: 'Clear messages!',
    async execute(message, args) {
        if (message.author.id !== "451764425230385153" && message.author.id !== "937369672477708318") {
            return message.channel.send("You need authority, ask Ahmed for it if you need it");
        }
        else {
            if (!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
            if (isNaN(args[0])) return message.reply('Please enter a number!');
            if (args[0] > 100) return message.reply('You cannot delete more than 100 messages!');
            if (args[0] < 1) return message.reply('You must delete at least one message!');

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });
        }
    }
}