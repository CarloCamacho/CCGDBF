module.exports = {
	name: 'sethalf',
	description: 'Set the status of the moon as half!',
    execute(message, args) {
        const { prefix, token, testMoonChannel, duskMoonChannel } = require('../config.json');
        const Discord = require('discord.js');
        const client = new Discord.Client()
        client.commands = new Discord.Collection();
        client.login(token);
        message.guild.channels.cache.find(channel => channel.id === testMoonChannel).setName('Half Moon: 🌗');
        message.channel.send(`The moon is half full. You are probably safe.`);
	},
};
