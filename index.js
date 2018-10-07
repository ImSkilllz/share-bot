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
A7MD.login("NDc0Mjk5OTE0NDg3MDcwNzIx.Dpu8wg.k5T9tqGU4_cXLw4BFbM9QgnOMU4");
