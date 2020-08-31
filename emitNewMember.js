const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
        // Simulate the user joining a server
        client.guilds.get('270021009380212736').fetchMember('188973868617170944').then(member => {
                client.emit('guildMemberAdd', member);
        });
});