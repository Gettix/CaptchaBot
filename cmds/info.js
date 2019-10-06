const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
let bank = require("../bank.json");

module.exports.run = async (bot,message,args) => {

	let uid = message.author.id;
	
 let toto = await message.channel.send("**Информация об Охотник на слова**               🅰-Правила игры               🅱-Предистория                   🅿-Команды                       🅾-Обновления");

	
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
		
			
		toto.edit("Тут будут правила");
		}

		if (reaction.emoji.name === '🅱') {
		
			
		toto.edit("Предистория");
		}
	
	if (reaction.emoji.name === '🅿') {
		
			
		toto.edit("Команды");
		}
	
	if (reaction.emoji.name === '🅾') {
		
			
		toto.edit("Обновление");
		}
	});
	
	
};

module.exports.help = {
    name: "page"
};
