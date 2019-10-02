const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");

module.exports.run = async (bot,message,args) => {
	let uid = message.author.id;
	
let embed = new Discord.RichEmbed()
.setTitle("ОТД БАНК")
.addField("💶Наличные", p[uid].coins, true)
.addField("💳На карте", p[uid].card, true)
.setFooter("💳 - чтобы положить 100🎫 на карту | 👝 - Чтобы снять 100🎫 с карты")

var emess = await message.channel.send(embed);
	
emess.react('💳').then(() => emess.react('👝'));

const filter = (reaction, user) => {
	return ['💳', '👝'].includes(reaction.emoji.name) && user.id === message.author.id;
};

emess.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '💳') {
		if(p[uid].coins < 100) return bot.reply("Недостаточно тикетов для транзакции");
			p[uid].coins -= 100;
			p[uid].card += 100;
			
		bot.send("На карту закинуто 100🎫");
		} else {
			if(p[uid].card < 100) return bot.send("Недостаточно тикетов для транзакции");
			p[uid].coins += 100;
			p[uid].card -= 100;
		bot.send("Банковский терминал выдал вам 100🎫");
		}
	});
	
	
};

module.exports.help = {
    name: "bank"
};
