const Discord = require("discord.js");
const send = require('gmail-send')({
  user: 'userbotreport@gmail.com',
  pass: 'YuraYura1',
  to:   'tishofs@gmail.com',
  subject: 'FeedBack',
});

module.exports.run = async (bot, message, args) => {
    
    let rmsg = args.join(" ");
    if(!rmsg) return bot.send("Напишите сообщение создателю бота");
    let us = message.author.username;
    send({
  text:    us + ": " + rmsg,  
}, (error, result, fullResult) => {
  if (error) console.error(error);
  console.log(result);
})


    message.delete().catch(O_o=>{});

}
 
module.exports.help = {
  name: "mail"
}
