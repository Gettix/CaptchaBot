const Discord = require("discord.js")
let coins = require("../profile.json")
const fs = require("fs")
const crimeRecently = new Set();


module.exports.run = async (bot, message, args) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let amount = args[0];
    if (isNaN(parseInt(amount,10))) {
        NaNEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("ff0000")
        .addField(`:x: '${amount}' is not an integer!`,":x:You idiot...")
        return message.channel.send(NaNEmbed)
    }
    let diceResult = getRandomInt(5) + 1
    if (diceResult % 2 == 0) {
        if (coins[message.author.id].coins >= amount) {
            coins[message.author.id].coins = coins[message.author.id].coins + amount * 2
            console.log("added coins")
            wonEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("00ff00")
            .addField(`:moneybag: ${message.author.username} rolled an even number (${diceResult})`,"Hurray!")
            .addField(`${message.author.username} doubled their bet and won ${amount * 2}`,`${message.author.username} now has ${coins[message.author.id].coins} Coins!`)
            return message.channel.send(wonEmbed)
        } else {
            return message.channel.send("You don't have enough coins!")
        }
    } else {
        coins[message.author.id].coins = coins[message.author.id].coins - amount
        lostEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("ff0000")
        .addField(`:x: ${message.author.username} rolled an odd number (${diceResult})`,"Oh Dear!")
        .addField(`${message.author.username} has lost ${amount}`,`${message.author.username} now has ${coins[message.author.id].coins} Coins!`)
        return message.channel.send(lostEmbed)
    }
}



module.exports.help = {
    name : "roll"
}
