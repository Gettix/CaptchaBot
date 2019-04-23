const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../profile.json");
const devel = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  let Owner = message.author;
  if(Owner.id !== devel.dev) return message.reply("Only the bot owner can use this command!")
   
  
  let ccoins = args.join(" ").slice(22);
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  
  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  coins[pUser.id] = {
    coins: + args[1]
  };

  message.channel.send(`${pUser} + ${args[1]} coffee.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "add"
}
