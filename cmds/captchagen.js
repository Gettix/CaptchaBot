const Discord = module.require("discord.js");
const profile = require("../profile.json");
var generator = require('generate-password');
const g = require('../guildsshop.json');

module.exports.run = async (bot,message,args) => {
   let lol = message.author.id;
   let gol = args.pop();
	  let gid = message.guild.id;
		let argh = g[gid].roleadd;
	let wq = g[gid].temprole;
	 let muterole = message.guild.roles.find(`name`, wq);
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: wq,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    };
  if ( args.length === 1 && args[ 0 ] === 'start' ) {
 // optional object arg with keys: height, width, text, font
var password = generator.generate({
    length: 6,
    numbers: true
});
 let pass = new Discord.RichEmbed()
 .setTitle("Капча")
 .addField(`Введи =captcha enter ${password}`)
 .setFooter(`Заранее спасибо ^^`)
 bot.send(pass);
    
     profile[lol].code = password;
  };
   if ( args.length === 1 && args[ 0 ] === 'enter' ) {
      if(profile[lol].code === gol) {
         bot.send("Капча пройдена! Контент разблокирован");
          await(lol.addRole(muterole.id));
	  lol.removeRole(argh.id);
         profile[lol].code = 0;
      } else {
      profile[lol].code = 0;
      bot.send("Вы неправильно ввели капчу!");
      };
};
   };

module.exports.help = {
    name: "captcha"
};
