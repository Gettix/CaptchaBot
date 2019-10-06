const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
let bank = require("../bank.json");

module.exports.run = async (bot,message,args) => {

	let uid = message.author.id;
	
 let toto = await message.channel.send("Станица один:3");

	
toto.react('▶').then(() => toto.react('◀'));

const filter = (reaction, user) => {
 return ['▶', '◀'].includes(reaction.emoji.name) && user.id === message.author.id;
};

toto.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '▶') {
		
			
		toto.edit("Страница 2");
		} else {
		toto.edit("Страница 3");
		}
	});
	
	
};

module.exports.help = {
    name: "page"
};
