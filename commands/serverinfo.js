const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  let inline = true
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.MessageEmbed() 
  .setColor("RANDOM")
  .setThumbnail(sicon)
  .setAuthor(" === Server Info ===")
  .addField("Name", message.guild.name, inline)
  .addField("ID", message.guild.id, inline)
  .addField("Owner", message.guild.owner, inline)
  .addField("Region", message.guild.region, inline)
  .addField("Members", message.guild.memberCount, inline)
  .addField("Roles", message.guild.roles.cache.size, inline)
  .addField("Channels", message.guild.channels.cache.size, inline)
  .addField("Emojis", message.guild.emojis.cache.size, inline)
  .setFooter('The Admins', 'https://cdn.discordapp.com/emojis/734211956390756354.png')
  .setThumbnail(`https://cdn.discordapp.com/attachments/731358750480531467/735120472919900180/IMG_20200717_222537_524.jpg`)

    message.channel.send(serverembed);
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: "serverinfo",
    category: "System",
    description: "Prints useful information about the server.",
    usage: "serverinfo"
  };
  