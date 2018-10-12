const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome SPECIAL !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**سلام عليكم
10 invite = 25 credits !!!
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
                               [ https://discord.gg/SqETYQy ] 
الدعوة خاصة لك ي قلبي... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login("NDc0MzI1NTc0NjQ3NTQ1ODg3.DqKsZw.nqXx-BV9lkcYrYg1GTOBf7-C9-s");
