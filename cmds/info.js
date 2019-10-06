const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
let bank = require("../bank.json");

module.exports.run = async (bot,message,args) => {

	let uid = message.author.id;
	
 let toto = await message.channel.send("**Информация об Охотник на слова**
				       🅰-Правила игры
				       🅱-Предистория
				       🅿-Команды
				       🅾-Обновления");

	
	toto.react('🅰'); 
	toto.react('🅱');
	toto.react('🅿'); 
	toto.react('🅾');

const filter = (reaction, user) => {
 return [ '🅰', '🅱', '🅿', '🅾' ].includes(reaction.emoji.name) && user.id === message.author.id;
};

toto.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🅰') {
		
			
		toto.edit("Страница 1");
		}

		if (reaction.emoji.name === '🅱') {
		
			
		toto.edit("Страница 2");
		}
	
	if (reaction.emoji.name === '🅿') {
		
			
		toto.edit("Страница 3");
		}
	
	if (reaction.emoji.name === '🅾') {
		
			
		toto.edit("Страница 4");
		}
	});
	
	
};

module.exports.help = {
    name: "page"
};
