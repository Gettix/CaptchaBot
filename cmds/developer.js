const Discord = require("discord.js");
const conf = require("../botconfig.json");
let dev = conf.dev;

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!message.author.id.conf.dev) return message.channel.send("You no developer");

  message.channel.send('Love you, my creator')

};

module.exports.help = {
  name: "infodev"
}
