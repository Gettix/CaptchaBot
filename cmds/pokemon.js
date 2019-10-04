    
const Discord = module.require("discord.js");
const fs = require("fs");
const pokemon = require("pokemon");
const pokegif = require("pokemon-gif");

module.exports.run = async (bot,message,args) => {

var poke = await pokemon.random();
var pokegif = await pokegif(poke);

let pokemed = new Discord.RichEmbed()
.setTitle(`Вы поймали ${poke}`)
.setImage(pokegif)
bot.send(pokembed);

};

module.exports.help = {
    name: "poke"
};
