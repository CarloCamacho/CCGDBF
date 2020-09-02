exports.run = async (client, message, args, level) => {
  const openweatherapi = client.config.openweatherapi;
  const testDayChannel = client.config.testDayChannel;
  const testNightChannel = client.config.testNightChannel;
  const dayChanID = client.config.welcomeChannel
  const guildFind = message.guild.channels.cache.find(channel => channel.id === testNightChannel)


  message.channel.send(`= TestChannelIDinConfig = ${dayChanID}\n`);
  message.channel.send(`= TestChannelIDSearch = ${guildFind}\n`); 
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
    