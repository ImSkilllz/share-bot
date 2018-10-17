const Discord = require('discord.js');
      client = new Discord.Client();
      ms = require("ms");

client.on('ready', () => {
  console.log("Logged in!")
});

client.on('guildMemberAdd', async event => {

  let message = '**\n`15 invite = 40k credit لحق! \n>> https://discord.gg/CaMm858`**';
  setTimeout(function(){
    event.member.send(message);
  }, ms("10s"));
});

client.login('NDc4NTMxNzAyMjY0OTU0ODgx.DqkR9A.aJnIRUpzWLW-M-d-oMk0lIfVBqI');
