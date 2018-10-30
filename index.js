const Discord = require('discord.js');
const bot1 = new Discord.Client();
const prefix = '+'

bot1.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot1.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot1.guilds.size} " ]`);
  console.log(`Users! [ " ${bot1.users.size} " ]`);
  console.log(`channels! [ " ${bot1.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 

 bot1.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot1.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot1.on('message', function(message) {
	const myID = "300559968527187970";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الاسم الذي تريده.');
        bot1.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setGame(args , 'https://twitch.tv/LOP');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "offstatus")) {
                if(message.author.id !== myID) return;
bot1.user.setGame(args , '');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot1.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        bot1.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب رابط الصوره التي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});






bot1.login("NDc0MzA5MDY1MzcyMjA1MDc2.DrY2LA.ZnqHYi-q3xg3nU5wh_Ov86Ld-fI");




const bot2 = new Discord.Client();


bot2.on('ready', () => {
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${bot2.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${bot2.guilds.size} " ]`);
  console.log(`Users! [ " ${bot2.users.size} " ]`);
  console.log(`channels! [ " ${bot2.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 


bot2.on('message', function(message) {
	const myID = "279194403564814336";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الاسم الذي تريده.');
        bot2.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setGame(args , 'https://twitch.tv/LOP');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "offstatus")) {
                if(message.author.id !== myID) return;
bot2.user.setGame(args , '');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        bot2.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        bot2.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب رابط الصوره التي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});



 bot2.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot2.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});


bot2.login("NDc0MzA2OTczNzY0OTQzOTIy.DrY11w.XoqbjOQOkZF0BW1-3f2xbEeQ720");





const bot3 = new Discord.Client();

 bot3.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot3.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot3.login("NDc0MzA4NDk1OTcwMjcxMjM0.DrY1lw.Jy2BWU4UXD_jXqNXLntYMA7THbY");



const bot4 = new Discord.Client();

 bot4.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot4.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot4.login("NDc0NTI1NzIwNzEwODczMDg4.DrYyCA.4IwKxbDRD-Udq4pRgMFvV84wm_0");




const bot5 = new Discord.Client();

 bot5.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot5.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot5.login("NDc0NjA3NTYyNjI1NjQ2NjAz.DrcTjA.tpmpkGOY0S7MuC6Dlf5C4Ru6l64");

const bot6 = new Discord.Client();

 bot6.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot6.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot6.login("NDc0Njc3MDM0NTY4NjQ2Njg0.DrcUKw.mqa3Lb9GXxWmEOQFP4RF2hnvRUU");


const bot7 = new Discord.Client();

 bot7.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot7.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot7.login("NDc0ODgzNzI1MDg0MDY1Nzky.DrcUrw.2c8MtZ7_hqLIhjRcbJgdrAYwqKs");

const bot8 = new Discord.Client();

 bot8.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot8.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot8.login("NDc0ODg1MzMxMzUxNzY0OTkz.DrcXQA.9Tvmq_lxp0ifsDxr0OBP4AhNiOw");

const bot9 = new Discord.Client();

 bot9.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot9.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot9.login("NDc0ODg3MjE5Mzc5ODMwNzk1.DrcX2w.wm39DU3WcdBEPhhlNGbe9qLC_uE");

const bot10 = new Discord.Client();

 bot10.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot10.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot10.login("NDc0MzE3NjY2NTE0MTA4NDM4.DrdTxg.58RfHEvbNIl7-McFV2hcN5dHoQU");

const bot11 = new Discord.Client();

 bot11.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot11.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot11.login("NDc0MzIyNTUwMTM5MTI1NzYw.DrdUaw._aijQvNXCA3QwSucmdThWGSSgy0");

const bot12 = new Discord.Client();

 bot12.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot12.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot12.login("NDc0NTIwOTk0ODYyNzI3MjA4.DrdVGg.tdoAWBIvcrHxrxspCl86PrWyj30");

const bot13 = new Discord.Client();

 bot13.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot13.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot13.login("NDc0NTI1NzIwNzEwODczMDg4.DrdWWQ._KcbamwapXNmxNmpNZLXONns77g");

const bot14 = new Discord.Client();

 bot14.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot14.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot14.login("NDc0NTI3MDExMzU2OTM0MTc2.DrdW7g.zhbMBsL4DVlpKtqbHUU47ZavjBg");

const bot15 = new Discord.Client();

 bot15.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot15.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot15.login("NDc0NTMyNDQ3MDY1OTk3MzEy.DrdX3w.QF52H-raAVfSVsHRA70Du0LB7n0");

const bot16 = new Discord.Client();

 bot16.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot16.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot16.login("NDc0NTM0NDA1MDkyOTMzNjQz.DrdYhQ.XkEfprl4S_VuQ6x1u-3gIJNg9bg");

const bot17 = new Discord.Client();

 bot17.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot17.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot17.login("NDc0NTY5NTIzOTgzNDE3MzU2.DrdY8w.ZPIRYsg8QMxGSy2SALOUTtds8_8");

const bot18 = new Discord.Client();

 bot18.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot18.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot18.login("NDc0NTcwMzc3MjYwMTcxMjk1.DrdaLQ.LIOO0uTDLKTqB2I8jK86I7pbRF0");

const bot19 = new Discord.Client();

 bot19.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot19.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot19.login("NDc4NTMxMDMwNDMzOTIzMTAx.DrphAw.3Tng2BvVEDL1YMWdkDnTokdASU0");

const bot20 = new Discord.Client();

 bot20.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot20.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot20.login("NDc1NzEwMTI4MjI2ODI4Mjk5.DrphhA.Cd2dMqaCm0tDmaGrE_sfNOm6SdY");

const bot21 = new Discord.Client();

 bot21.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot21.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot21.login("NDc1NjMwMTM0MjI1Nzk3MTMx.Drph8Q.iK-rlDN1HW9CvmdKH5Q_L7bw2J8");

const bot22 = new Discord.Client();

 bot22.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot22.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot22.login("NDc1MzAxMjI2NTk1MjIxNTA0.DrpiOQ.ngHWSwnZa0H34mcyyrx3tRBOL-0");

const bot23 = new Discord.Client();

 bot23.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot23.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot23.login("NDc1Mjk3OTM2Mzk0Mjg5MTYy.DrpigQ.HRwaaNMjVj5nSZ4MzMHmFPjc8vI");

const bot24 = new Discord.Client();

 bot24.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot24.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot24.login("NDc1MjUzNDIyODY2ODI1MjI2.Drpjtw.vzqAvcCoMRQi787fjpMUUUnBFQY");

const bot25 = new Discord.Client();

 bot25.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot25.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot25.login("NDc1MjUxMDIzNDQzNzg3ODE2.DrpkCg.n5fbAu6-FOMpHhV5FPWWyzI08W8");

const bot26 = new Discord.Client();

 bot26.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot26.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot26.login("NDc1MjQ5MTE5MjA0NzM3MDI1.Drpmxw.tRFvcKwfCXBSQ2K61-wUrPBoyQM");

const bot27 = new Discord.Client();

 bot27.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot27.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot27.login("NDc1MjQ1NDM5OTU2ODExNzc3.DrpnLw.Q-YxLh--7NKLoOMmjdT6KTa3eUM");

const bot28 = new Discord.Client();

 bot28.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot28.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot28.login("NDc1MjQyODU0MTM5MDM1NjUw.Drpnkg.RnS_CsmOWkoJq39qPVJGNQI0o6E");
const bot29 = new Discord.Client();

 bot29.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot29.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot29.login("NDc1MDI2MjAxMTM2ODU3MDg4.Drpn2g.6WZ4hH4Iul9JeLc1hqPry5v6uUY");

const bot30 = new Discord.Client();

 bot30.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot30.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot30.login("NDc0OTQyNDI4NjcyMTYzODUx.DrpoHg.1aKrh3OCkyQWvvbhcJlIAS7ZzUw");

const bot31 = new Discord.Client();

 bot31.on('message', message => {
  
  if (message.content === 'Do your Daily') {

message.channel.send('#daily')
}
});

 bot31.on('message', message => {
  
  if (message.content === 'do rep') {

message.channel.send('#rep <@300559968527187970>')
}
});

bot31.login("NDc0OTQzNzI3OTM3NTE5NjQ4.DrpoZw.spYY6Kmtdh9hGzUczmNjm-NVcrg");
