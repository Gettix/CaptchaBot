    
const Discord = module.require("discord.js");
const fs = require("fs");
const pokemon = require("pokemon");
const pokemonGif = require("pokemon-gif");
const inv = require("../pokemon.json");

module.exports.run = async (bot,message,args) => {

let uid = message.author.id;
var poke = await pokemon.random();
var pokegif = pokemonGif(poke);
inv[uid].names += "," + poke;
inv[uid].num += 1

let pokemed = new Discord.RichEmbed()
.setTitle(`Вы поймали ${poke}`)
.setImage(pokegif)
bot.send(pokemed);

};

module.exports.help = {
    name: "poke"
};
