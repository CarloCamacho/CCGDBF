module.exports = {
	name: 'duskhelper',
	description: 'Helper Bot for Dusk to help with Admin and RP',
	execute(message, args) {

    const Discord = require('discord.js');
    const axios = require('axios')
    const { prefix, token, mapquestapi, darkskyapi, openweatherapi } = require('../config.json');
    let author = message.author.username
    let profile = message.author.displayAvatarURL

    const helpEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(`Hello, ${author}`, profile)
        .setTitle(`The following commands are available!`)
        .addField(`!weather`, `Display a summary of the current weather on the server! This information is taken from the current conditions in Denver, Colorado.`)
        .addField(`!setweather`, `Set the current Min/Max temperatures on the weather channels.`)
        .addField(`!setfull`, `Sets the moon status to a Full Moon!`)
        .addField(`!sethalf`, `Sets the moon status to a Half Moon!`)
        .addField(`Note:`, `Commands have a cooldown so don't overuse them! :) If you run !setweather and it doesn't look like anything changed, just be patient :)`)
        .setFooter('The Admins', 'https://cdn.discordapp.com/emojis/734211956390756354.png')
        .setThumbnail(`https://cdn.discordapp.com/attachments/731358750480531467/735120472919900180/IMG_20200717_222537_524.jpg`);


    message.channel.send(helpEmbed);

     }
    
}