const Discord = module.require("discord.js");
const profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
   let lol = message.author.id;
   let gol = args.pop();
  if ( args.length === 1 && args[ 0 ] === 'start' ) {
 // optional object arg with keys: height, width, text, font

 
 bot.send(enbed);
  };
   if ( args.length === 1 && args[ 0 ] === 'enter' ) {
      if(profile[lol].code === gol) {
         bot.send("Капча пройдена! Контент разблокирован");
         profile[lol].code == 0;
      } else {
      profile[lol].code == 0;
      bot.send("Вы неправильно ввели капчу!");
      };
};
   };

module.exports.help = {
    name: "captcha"
};
