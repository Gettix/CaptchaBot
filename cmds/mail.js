const Discord = require("discord.js");
const workedRecently = new Set();
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
    let ma = message.author;
  let rep = ma + ", Сообщение отправлено на почту разработчику✅";
  if (workedRecently.has(message.author.id)) return {
        message.channel.send("Подождите 24 часа и попробуйте заново. - " + message.author.username);
    } else {
        workedRecently.add(message.author.id);
        setTimeout(() => {
            workedRecently.delete(message.author.id);
        }, 86400000);
      };
    send({
  text:    us + ": " + rmsg,  
}, (error, result, fullResult) => {
  if (error) console.error(error);
  console.log(result);
})

    bot.send(rep);
    message.delete().catch(O_o=>{});

}
 
module.exports.help = {
  name: "mail"
}
