/*
This prints the job board ...
*/
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
var fs = require('fs');
const Enmap = require("enmap");

exports.run = async (client, message, args, level) => {

  client.jobs = new Enmap();    
  // Here we load **jobs** into memory, as a collection, so they're accessible
  // here and everywhere else.
  const jobFiles = await readdir("./jobs/");
  client.logger.log(`Loading a total of ${jobFiles.length} jobs.`);
  jobFiles.forEach(f => {
    const response = client.loadJobs(f);
    if (response) console.log(response);
    });

  const myJobs = client.jobs
  const jobNames = myJobs.keyArray();
  const longest = jobNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `= Job List =\n`;
    const sorted = myJobs.array().sort((p, c) => p.info.category > c.info.category ? 1 :  p.info.name > c.info.name && p.info.category === c.info.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.info.category.toProperCase();
      if (currentCategory !== cat) {
        output += `\u200b\n== ${cat} ==\n`;
        currentCategory = cat;
      }
      output += `${c.info.name}${" ".repeat(longest - c.info.name.length)} :: ${c.info.description}\n`;
    });
    message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
};

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "printjobboard",
    category: "Miscelaneous",
    description: "Prints a new version of the jobs board with the current listings.",
    usage: "printjobboard"
  };
  
