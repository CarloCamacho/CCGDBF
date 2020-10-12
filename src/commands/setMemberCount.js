const axios = require('axios');

exports.run = async (client, message, args, level) => {

let vampChannel = client.config.vampChannel;

let vampCount = count of vampires;

message.guild.channels.cache.find(channel => channel.id === vampChannel).setName(`Vamps: ${vampCount}`);
message.channel.send(`Updated the Species Count!`);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Administrator"
    };
    
    exports.help = {
    name: "setSpeciesCount",
    category: "Miscelaneous",
    description: "Sets the species counts based on the current member list.",
    usage: "setSpeciesCount"
    };
    