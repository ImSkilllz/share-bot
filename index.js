const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
10 invite = 40k credit
                               [ https://discord.gg/ZJzXeqD ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login("MzM1Mzg2MDU5MzY0MTA2MjQz.DqEb9g.iyeC1u6mQbmuaAzRiFRvM6bYlN8");
