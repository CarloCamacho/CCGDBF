const axios = require('axios');

exports.run = async (client, message, args, level) => {

const openweatherapi = message.settings.openweatherapi;
const testDayChannel = message.settings.testDayChannel;
const testNightChannel = message.settings.testNightChannel;
// let guildFind = message.guild.channels.cache.find(channel => channel.id === testNightChannel)
  // let output = `${message.settings.welcomeChannel}\n`;

  // message.channel.send(output);
  // message.channel.send(guildFind); 

  axios
  .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.98&exclude=minutely,hourly&units=metric&appid=daa6a7f969e2e3a145196d552939c173`
  )
  .then(response => {
      let apiData = response;
      let currentTemp = Math.ceil(apiData.data.current.temp)
      let maxTemp = apiData.data.daily[0].temp.max;
      let minTemp = apiData.data.daily[0].temp.min;

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


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
    };
    
    exports.help = {
    name: "setweather",
    category: "Miscelaneous",
    description: "Sets the weather on the weather channels to the current temps in Denver.",
    usage: "setweather"
    };
    