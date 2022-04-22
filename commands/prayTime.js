const discord = require('discord.js')
const fetch = require('node-fetch');
// var XMLHttpRequest = require('xhr2');
//  var xhr = new XMLHttpRequest();

module.exports = {
    name: "prayTime",
    category: "Religious",
    aliases: [''],
    description: "Not implemented yet",
    usage: "[command]",
    run: async (client) => {
        // const response = await fetch('http://api.aladhan.com/v1/timings/1398332113?latitude=26.0667&longitude=50.5577&method=0');
        // const body = await response.json();
        // console.log(body.data.timings)
        // console.log(body.data);

        const response = await fetch('https://prayertimes.api.abdus.dev/api/diyanet/prayertimes?location_id=11667');
        const body = await response.json();
        console.log(body)
        var prayTime = body[0].fajr
        var datetime = new Date()
        datetime.toLocaleTimeString('en-BH')
        datetime = datetime.toISOString().split("T")[1].split(":");
        var time = datetime[0] + ":" + datetime[1];
        var prayTime = "2:06"
        setInterval(() => {
            if (time != prayTime)
                console.log(time)
            console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
            // console.log(body[0].fajr)
        }, 1000);
    }
};
