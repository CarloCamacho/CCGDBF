const Discord = require('discord.js');
const axios = require('axios')

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const openweatherapi = client.config.openweatherapi;
  
  const exampleEmbed = (
    temp,
    maxTemp,
    minTemp,
    pressure,
    humidity,
    wind,
    cloudness,
    icon,
    author,
    profile,
    cityName,
    country
  ) =>
    new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setAuthor(`Hello, ${author}`, profile)
      .setTitle(`It is currently ${temp}\u00B0 C in Dusk Ville City.`)
      .addField(`Max Temp:`, `${maxTemp}\u00B0 C`, true)
      .addField(`Min Temp:`, `${minTemp}\u00B0 C`, true)
      .addField(`Humidity:`, `${humidity} %`, true)
      .addField(`Wind Speed:`, `${wind} m/s`, true)
      .addField(`Pressure:`, `${pressure} hpa`, true)
      .addField(`Cloudiness:`, `${cloudness}`, true)
      //.setThumbnail(`http://openweathermap.org/img/w/${icon}.png`)
      .setFooter('The Admins', 'https://cdn.discordapp.com/emojis/734211956390756354.png')
          .setThumbnail(`https://cdn.discordapp.com/attachments/731358750480531467/735120472919900180/IMG_20200717_222537_524.jpg`);
  
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
              message.channel.send(exampleEmbed(currentTemp, maxTemp, minTemp, pressure, humidity, wind, cloudness, icon, author, profile, cityName));
          })
     
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "weather",
  category: "Miscelaneous",
  description: "Displays a custom embed with the current weather in Dusk Ville City.",
  usage: "weather"
};
