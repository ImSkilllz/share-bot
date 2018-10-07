const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
10 invite = 40k credit
                               [ https://discord.gg/RazjjJs ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login("NDc0MzI1NTc0NjQ3NTQ1ODg3.DpudLA.pI4X7lSLMBuLTg8RuRj2on09EEY");
