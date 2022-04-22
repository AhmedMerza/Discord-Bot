module.exports = {
    name: 'race',
    descrpiton: "Sends type racer link!", 
    execute(message, args) {
        // let roleName = 'Racer';
        // let role = message.guild.roles.cache.find(x => x.name === roleName);
        // if (!typeof role === undefined) {

        //     if (message.member.roles.cache.has('837289136552935464')) {
        //         message.channel.send('@racer, you ready to race?');
        //     }  
        //     else {
        //         message.channel.send('You don\'t have the right permission, let me change that ;)');
        //         message.member.roles.add('837289136552935464');
        //         message.channel.send('You have it now');
        //     }
        // }
        message.channel.send('https://play.typeracer.com/');
        message.channel.send('Enjoy');
    }

    
}