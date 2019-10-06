const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
let bank = require("../bank.json");

module.exports.run = async (bot,message,args) => {

	let uid = message.author.id;
	
 let toto = await message.channel.send("Станица один:3");

	
	toto.react('1️⃣'); 
	toto.react('2️⃣');
	toto.react('3️⃣'); 
	toto.react('4️⃣');

const filter = (reaction, user) => {
 return [ '1️⃣', '2️⃣', '3️⃣', '4️⃣' ].includes(reaction.emoji.name) && user.id === message.author.id;
};

toto.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '1️⃣') {
		
			
		toto.edit("Страница 1");
		}

		if (reaction.emoji.name === '2️⃣') {
		
			
		toto.edit("Страница 2");
		}
	
	if (reaction.emoji.name === '3️⃣') {
		
			
		toto.edit("Страница 3");
		}
	
	if (reaction.emoji.name === '4️⃣') {
		
			
		toto.edit("Страница 4");
		}
	});
	
	
};

module.exports.help = {
    name: "page"
};
