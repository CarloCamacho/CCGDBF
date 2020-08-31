module.exports = {
	name: 'setfull',
	description: 'Set the status of the moon as full!',
    execute(message, args) {
        const { prefix, token, testMoonChannel, duskMoonChannel } = require('../config.json');
        const Discord = require('discord.js');
        const client = new Discord.Client()
        client.commands = new Discord.Collection();
        client.login(token);
        message.guild.channels.cache.find(channel => channel.id === testMoonChannel).setName('Full Moon: 🌕');
        message.channel.send(`The full moon has risen!  You better watch your back...`);
	},
};
