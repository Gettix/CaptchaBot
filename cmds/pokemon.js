    
const Discord = module.require("discord.js");
const fs = require("fs");
const pokemon = require("pokemon");
const pokemonGif = require("pokemon-gif");
const inv = require("../pokemon.json");
const workedRecently = new Set();

module.exports.run = async (bot,message,args) => {
if (workedRecently.has(message.author.id)) {
        message.channel.send("Подождите 10 секунд и попробуйте заново. - " + message.author.username);
    } else {
        workedRecently.add(message.author.id);
        setTimeout(() => {
            workedRecently.delete(message.author.id);
        }, 10000);
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
};

module.exports.help = {
    name: "poke"
};
