const ytdl = require("ytdl-core");
const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
 if(!message.member.voiceChannel) return bot.send("Вы не подключены к голосовому каналу! Подключитесь и слушайте любимую музыку сколько угодно :з");
 if(message.guild.me.voiceChannel) return bot.send("Извини, печенька, но я не могу подключиться к этому голосовому каналу");
 if(!args[0]) return bot.send("Пожалуйста, укажи URL);
                              
 let validate = await ytdl.validateURL(args[0]);
 
 if(!validate) return bot.send("Извините, укажите **действительный** URL");
 
 let info = await ytdl.getInfo(args[0]);
 
 let connection = await message.member.voiceChannel.join();
 
 let dispatcher = await connection.play(ytdl(args[0]), { filter: 'audionly' }));
 
 //The dispathcer variable will be used in a later episode
  
  //now playing
  bot.send(`Сейчас играет: ${info.title}`);
};

module.exports.help = {
    name: "play"
};
