const Discord = require('discord.js');
      client = new Discord.Client();
      ms = require("ms");

client.on('ready', () => {
  console.log("Logged in!")
});

client.on('guildMemberAdd', async event => {

  let message = '**\n`15 invite = 40k credit لحق! \n>> https://discord.gg/CaMm858`**';
  let message2 = 'discord.gg/testt';
  let message3 = 'discord.gg/test5';
  setTimeout(function(){
    event.send(message);
  }, ms("10s"));
  setTimeout(function(){
    event.send(message2);
  }, ms("20s"));
  setTimeout(function(){
    event.send(message3);
  }, ms("30s"));
});

client.login("NDc0MzA3NzgzMjk0OTc2MDAw.DqfjwA.TbCWSHjSWScI3HL0canNeAT07EE");
