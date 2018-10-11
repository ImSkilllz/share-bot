const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome SPECIAL !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**سلام عليكم
افضل سيرفر عربي ل اكواد بوتات دسكورد
                               [ https://discord.gg/2Tq6HFJ ] 
الدعوة خاصة لك ي قلبي... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**سلام عليكم
افضل سيرفر عربي ل اكواد بوتات دسكورد
                               [ https://discord.gg/SaJUeXu ] 
الدعوة خاصة لك ي قلبي... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NDkwOTU0ODYxNTMwMTg1NzI5.DoTIBA.GkncER0xfW8vCwNL5-ZkJOKek3s');
