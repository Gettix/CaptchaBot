const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
let bank = require("../bank.json");

module.exports.run = async (bot,message,args) => {

	let uid = message.author.id;
	
 let toto = await message.channel.send("Станица один:3");

	
	toto.react(':one:'); 
	toto.react(':two:');
	toto.react(':three:'); 
	toto.react(':four:');

const filter = (reaction, user) => {
 return [ ':one:', ':two:', ':three:', ':four:' ].includes(reaction.emoji.name) && user.id === message.author.id;
};

toto.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === ':one:') {
		
			
		toto.edit("Страница 1");
		}

		if (reaction.emoji.name === ':two:') {
		
			
		toto.edit("Страница 2");
		}
	
	if (reaction.emoji.name === ':three:') {
		
			
		toto.edit("Страница 3");
		}
	
	if (reaction.emoji.name === ':four:') {
		
			
		toto.edit("Страница 4");
		}
	});
	
	
};

module.exports.help = {
    name: "page"
};
