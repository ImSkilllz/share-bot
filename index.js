const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
10 invite = 40k credit
                               [ https://discord.gg/NUkfJyv ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login("NDk4NDg4Nzc5ODQ2MTg5MDU2.DpvLig.x1tsWahvMiGbgReZtzouUppB6ko");
