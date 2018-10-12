const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
افضل سيرفر عربي لأكواد بوتات الدسكورد
[ https://discord.gg/SaJUeXu ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login("NDc0MzI1NTc0NjQ3NTQ1ODg3.DqKsZw.nqXx-BV9lkcYrYg1GTOBf7-C9-s");
