const Discord = require("discord.js");
const profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
  let uid = message.author.id;
  let un = message.author.username;
  bot.send = function (msg){
    message.channel.send(msg);
  }
  if(!
  
  let u = profile[uid];
  u.coins --;
message.channel.send(`${un} Выпил кофе (-1)`)
};

module.exports.help = {
  name:"drink"
}
