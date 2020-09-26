const Discord = require('discord.js');
const axios = require('axios')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send('Testing');
  const openweatherapi = client.config.openweatherapi;
  const forecastEmbed = (
    sunMin,
    sunMax,
    monMin,
    monMax,
    tueMin,
    tueMax,
    wedMin,
    wedMax,
    thuMin,
    thuMax,
    friMin,
    friMax,
    satMin,
    satMax
    
  ) =>
    new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`The seven day forecast for Dusk Ville City is:`)
      .addField(`Monday`, `Min: ${monMin}\u00B0 C`, true)
      .addField(`\u200b`, `Max: ${monMax}\u00B0 C`, true)
      .addField(`\u200b`, `\u200b`, true)
      .addField(`Tuesday`, `Min: ${tueMin}\u00B0 C`, true)
      .addField(`\u200b`, `Max: ${tueMax}\u00B0 C`, true)      
      .addField(`\u200b`, `\u200b`, true)      
      .addField(`Wednesday`, `Min: ${tueMin}\u00B0 C`, true)
      .addField(`\u200b`, `Max: ${tueMax}\u00B0 C`, true)    
      .addField(`\u200b`, `\u200b`, true)       
      .addField(`Thursday`, `Min: ${tueMin}\u00B0 C`, true)
      .addField(`\u200b`, `Max: ${tueMax}\u00B0 C`, true)      
      .addField(`\u200b`, `\u200b`, true)     
      .addField(`Friday`, `Min: ${tueMin}\u00B0 C`, true)
      .addField(`\u200b`, `Max: ${tueMax}\u00B0 C`, true)      
      .addField(`\u200b`, `\u200b`, true)     
      .addField(`Saturday`, `Min: ${tueMin}\u00B0 C`, true)
      .addField(`\u200b`, `Max: ${tueMax}\u00B0 C`, true)      
      .addField(`\u200b`, `\u200b`, true)     
      .addField(`Sundary`, `Min: ${tueMin}\u00B0 C`, true)
      .addField(`\u200b`, `Max: ${tueMax}\u00B0 C`, true)      
      .addField(`\u200b`, `\u200b`, true)     
      .setFooter('The Admins', 'https://cdn.discordapp.com/emojis/734211956390756354.png')
      .setThumbnail(`https://cdn.discordapp.com/attachments/731358750480531467/735120472919900180/IMG_20200717_222537_524.jpg`);

      axios
          .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.98&exclude=minutely,hourly&units=metric&appid=daa6a7f969e2e3a145196d552939c173`
          )
          .then(response => {
              let apiData = response;
              let sunMin = Math.ceil(apiData.data.daily[1].temp.min)
              let sunMax = Math.ceil(apiData.data.daily[1].temp.max)
              let monMin = Math.ceil(apiData.data.daily[2].temp.min)
              let monMax = Math.ceil(apiData.data.daily[2].temp.max)
              let tueMin = Math.ceil(apiData.data.daily[3].temp.min)
              let tueMax = Math.ceil(apiData.data.daily[3].temp.max)
              let wedMin = Math.ceil(apiData.data.daily[4].temp.min)
              let wedMax = Math.ceil(apiData.data.daily[4].temp.max)
              let thuMin = Math.ceil(apiData.data.daily[5].temp.min)
              let thuMax = Math.ceil(apiData.data.daily[5].temp.max)
              let friMin = Math.ceil(apiData.data.daily[6].temp.min)
              let friMax = Math.ceil(apiData.data.daily[6].temp.max)
              let satMin = Math.ceil(apiData.data.daily[7].temp.min)
              let satMax = Math.ceil(apiData.data.daily[7].temp.max)
              message.channel.send(forecastEmbed(sunMin,sunMax,monMin,monMax,tueMin,tueMax,wedMin,wedMax,thuMin,thuMax,friMin,friMax,satMin,satMax));
          })
};
    


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "printembedforecast",
  category: "Miscelaneous",
  description: "Print out a 7 Day forecast for Dusk Ville City.",
  usage: "printembedforecast"
};
