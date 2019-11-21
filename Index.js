const Discord = require('discord.js')
const bot = new Discord.Client();
const token = 'NjQ1NTI0MDE5ODgxMzEyMjk2.XdD1HQ.xvQQ8b6YVBZusaN7C6Y7l0Q1ZNE'



bot.on('message', msg => {
  if (msg.content.startsWith("/say")) {
    msg.delete(1000);
    msg.channel.send(msg.content.slice(5, msg.content.length));
  }
});



bot.on('ready', () => {
  console.log('Achtung !!! Der Bot ist gestartet !!!');
  bot.user.setActivity('mit euren Infos', {type: 'STREAMING'});
  })

 
bot.login(token)
