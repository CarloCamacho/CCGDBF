const axios = require('axios');

exports.run = async (client, message, args, level) => {

let vampChannel = client.config.vampChannel;
let vampRole = client.config.vampRole;

//let guild = await message.guild.fetchMembers();

let vampCount = message.guild.roles.cache.get(vampRole).members.size;

message.guild.channels.cache.find(channel => channel.id === vampChannel).setName(`Vamps: ${vampCount}`);
message.channel.send(vampCount + " members with the vamp role!");

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
    