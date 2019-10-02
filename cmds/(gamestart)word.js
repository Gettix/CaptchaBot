const Discord = module.require("discord.js");
const fs = require("fs");
const g = require("../game.json");
module.exports.run = async (bot,message,args) => {
    if(g.starts !== true) return bot.send("Игра не началась. Начните игру (.whstart)");
    let wordd = args.pop();
    
    if ( args.length === 1 && args[ 0 ] === 'set' ) {
    if(g.word !== 'none') return bot.send("Слово уже выбранно");
    message.delete().catch();
    g.word = wordd;
    
    bot.send(`Слово выбрано. Ведущий ${message.author}. Введите .word is <word> для отгадки слова.`);
    }
    
    if ( args.length === 1 && args[ 0 ] === 'is' ) {
    if(wordd !== g.word) return bot.send(`${message.author}, Вы не угадали слово, попробуйте еще раз`);
    if(wordd == g.word) {
    g.starts = false;
    g.word = "none";
    bot.send(`${message.author} отгадал слово! Игра окончена:3`);
   };
  };
};

module.exports.help = {
    name: "word"
};
