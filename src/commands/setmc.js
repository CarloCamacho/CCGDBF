const axios = require('axios');

exports.run = async (client, message, args, level) => {

let vampChannel = client.config.vampChannel;
let vampRole = client.config.vampRole;
let wolfChannel = client.config.wolfChannel;
let wolfRole = client.config.wolfRole;
let hybridChannel = client.config.hybridChannel;
let hybridRole = client.config.hybridRole;
let humanChannel = client.config.humanChannel;
let humanRole = client.config.humanRole;

let vampCount = message.guild.roles.cache.get(vampRole).members.size;
let wolfCount = message.guild.roles.cache.get(wolfRole).members.size;
let hybridCount = message.guild.roles.cache.get(hybridRole).members.size;
let humanCount = message.guild.roles.cache.get(humanRole).members.size;

message.guild.channels.cache.find(channel => channel.id === vampChannel).setName(`Vamps: ${vampCount}`);
message.guild.channels.cache.find(channel => channel.id === wolfChannel).setName(`Vamps: ${wolfCount}`);
message.guild.channels.cache.find(channel => channel.id === hybridChannel).setName(`Vamps: ${hybridCount}`);
message.guild.channels.cache.find(channel => channel.id === humanChannel).setName(`Vamps: ${humanCount}`);

message.channel.send("Setting...");
message.channel.send(vampCount + " members with the vamp role.");
message.channel.send(wolfCount + " members with the wolf role.");
message.channel.send(hybridCount + " members with the hybrid role.");
message.channel.send(humanCount + " members with the human role.");

}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
    };
    
    exports.help = {
    name: "setmc",
    category: "Miscelaneous",
    description: "Sets the species counts based on the current member list.",
    usage: "setmc"
    };
    