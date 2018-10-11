const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
10 invite = 40k credit
                               [ https://discord.gg/xybcgv ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login("NDk5OTg4MzQ0MzcwMTAyMjgy.DqEUrg.Idxt-L5PeX3ZGm8_miPZRoRdy1Y");
