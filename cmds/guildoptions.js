const options = require("../guildsshop.json");
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

let inc = args.pop();
let gid = message.guild.id;

if ( args.length === 1 && args[ 0 ] === 'logs' ) {
    options[gid]. = 
}

}

module.exports.help = {
    name: "guild"
}
