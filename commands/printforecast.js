const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const openweatherapi = client.config.openweatherapi;
  message.channel.send(' ',{files: ["https://cdn.discordapp.com/attachments/731358750480531467/735120472919900180/IMG_20200717_222537_524.jpg"]});

      axios
          .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.98&exclude=minutely,hourly&units=metric&appid=daa6a7f969e2e3a145196d552939c173`
          )
          .then(response => {
              let apiData = response;

message.channel.send(`== Weekly Weather for Dusk Ville City ==\n
• Sunday       ::     Min: ${apiData.data.daily[1].temp.min}°C,            Max: ${apiData.data.daily[1].temp.max}°C
• Monday       ::     Min: ${apiData.data.daily[2].temp.min}°C,           Max: ${apiData.data.daily[2].temp.max}°C
• Tuesday      ::     Min: ${apiData.data.daily[3].temp.min}°C,           Max: ${apiData.data.daily[3].temp.max}°C
• Wednesday    ::     Min: ${apiData.data.daily[4].temp.min}°C,           Max: ${apiData.data.daily[4].temp.max}°C
• Thursday     ::     Min: ${apiData.data.daily[5].temp.min}°C,           Max: ${apiData.data.daily[5].temp.max}°C
• Friday       ::     Min: ${apiData.data.daily[6].temp.min}°C,           Max: ${apiData.data.daily[6].temp.max}°C
• Saturday     ::     Min: ${apiData.data.daily[7].temp.min}°C,           Max: ${apiData.data.daily[7].temp.max}°C`, {code: "asciidoc"});
              

})
     
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Administrator"
};

exports.help = {
  name: "printforecast",
  category: "System",
  description: "Print out a 7 Day forecast for Dusk Ville City.",
  usage: "printforecast"
};
