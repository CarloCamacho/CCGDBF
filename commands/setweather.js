module.exports = {
	name: 'setweather',
	description: 'Sets the weather for the server in the weather Channels!!',
	execute(message, args) {

    const Discord = require('discord.js');
    const axios = require('axios')
    const { testDayChannel, testNightChannel, duskDayChannel, duskNightChannel } = require('../config.json');

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.98&exclude=minutely,hourly&units=metric&appid=daa6a7f969e2e3a145196d552939c173`
            )
            .then(response => {
                let apiData = response;
                let currentTemp = Math.ceil(apiData.data.current.temp)
                let maxTemp = apiData.data.daily[0].temp.max;
                let minTemp = apiData.data.daily[0].temp.min;
                let humidity = apiData.data.current.humidity;
                let wind = apiData.data.current.wind_speed;
                let author = message.author.username
                let profile = message.author.displayAvatarURL
                let icon = apiData.data.current.weather[0].icon
                //let profile = `http://openweathermap.org/img/w/${icon}.png`
                let cityName = args
                let pressure = apiData.data.current.pressure;
                let cloudness = apiData.data.current.weather[0].description;

            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.98&exclude=minutely,hourly&units=imperial&appid=daa6a7f969e2e3a145196d552939c173`
                )
                .then(response => {
                    let apiData = response;
                    let currentTemp = Math.ceil(apiData.data.current.temp)
                    let maxTempF = apiData.data.daily[0].temp.max;
                    let minTempF = apiData.data.daily[0].temp.min;
                    message.guild.channels.cache.find(channel => channel.id === testDayChannel).setName(`Day: ${maxTemp}°C/${maxTempF}°F `);
                    message.guild.channels.cache.find(channel => channel.id === testNightChannel).setName(`Night: ${minTemp}°C/${minTempF}°F`); 
                    message.channel.send(`Updated the Weather Channels!`);
                })
            })

    }
}