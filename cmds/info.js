const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
let bank = require("../bank.json");

module.exports.run = async (bot,message,args) => {
{"page": 1};

	let uid = message.author.id;
	
  message.channel.send("Станица один:3");

	
message.react('▶').then(() => emess.react('◀'));

const filter = (reaction, user) => {
	return ['▶', '◀'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '▶') {
		
			
		message.edit("Страница 2");
		} else {
			if(p[uid].card < 100) return bot.send("Недостаточно тикетов для транзакции");
			p[uid].coins += 100;
			p[uid].card -= 100;
		bot.send("Банковский терминал выдал вам 100🎫");
		}
	});
	
	
};

module.exports.help = {
    name: "page"
};
