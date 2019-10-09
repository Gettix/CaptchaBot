const captchagen = require('captchagen');
const Discord = module.require("discord.js");
const profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
   let lol = message.author.id;
   let gol = args.pop();
  if ( args.length === 1 && args[ 0 ] === 'start' ) {
 // optional object arg with keys: height, width, text, font
var captcha = captchagen.create();
 
captcha.text();     // Returns captcha text (randomly generated by default)
captcha.height();   // Returns captcha height (150 by default)
captcha.width();    // Returns captcha width (300 by default)
captcha.generate(); // Draws the image to the canvas
 
/* call `generate()` before running the below */
 
captcha.uri(cb);      // outputs png data-uri. works sync and async (cb is optional)
captcha.buffer(cb);   // outputs png buffer. works sync and async (cb is optional)
captcha.buffer(type); // outputs an image stream. type can be either png or jpeg (png is the default)
 
  profile[lol].code = captcha.text();
 
 bot.send(captcha);
  }
   if ( args.length === 1 && args[ 0 ] === 'enter' ) {
      if(profile[lol].code === gol) {
         bot.send("Капча пройдена! Контент разблокирован");
         profile[lol].code == 0;
      } else {
      profile[lol].code == 0;
      bot.send("Вы неправильно ввели капчу!");
}
   };

module.exports.help = {
    name: "captcha"
};
