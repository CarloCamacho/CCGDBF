exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  //let guild = await message.guild.members.fetch();
    message.guild.members.fetch().then(fetchedMembers => {
    const totalOnline = fetchedMembers.filter(member => member.roles.has === '732797399814111371');
    // We now have a collection with all online member objects in the totalOnline variable
    message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
  });
 
 
  // var roleID = 754894109453582368
 // let membersWithRole = message.guild.roles.get(roleID).members;
 // console.log(`Got ${membersWithRole.size} members with that role.`);
    // message.reply(`Your permission level is: ${level} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "mylevel",
  category: "Miscelaneous",
  description: "Tells you your permission level for the current message location.",
  usage: "mylevel"
};
