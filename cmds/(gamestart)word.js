const Discord = module.require("discord.js");
const fs = require("fs");
const g = require("../game.js");
module.exports.run = async (bot,message,args) => {
    if(g.start !== true) return bot.send("Игра не началась. Начните игру (.whstart)");
    let set = args.join(" ");
    let wordd = arps.pop("");
    
    if(set == "set") {
    if(g.word == "none") return bot.send("Слово уже выбранно");
    g.word == wordd;
    bot.send(`Слово выбрано. Ведущий ${message.author}. Введите .word is <word> для отгадки слова.`);
    }
    
    if(set == "is") {
    if(wordd !== g.word) return bot.send(`${message.author}, Вы не угадали слово, попробуйте еще раз`);
    if(wordd == g.word) {
    g.starts = false;
    bot.send(`${message.author} отгадал слово! Игра окончена:3`);
   };
  };
};

module.exports.help = {
    name: "word"
};
