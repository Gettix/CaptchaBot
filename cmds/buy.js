const Discord = module.require("discord.js");
const fs = require("fs");
const p = require("../profile.json");
let bank = require("../bank.json");
let g = require("../guildsshop.json");

module.exports.run = async (bot,message,args) => {
	let uid = message.author.id;
  let gid = message.guild.id;
	
	
let embed = new Discord.RichEmbed()
.setTitle("Магазин Ролей")
.addField("👤Роль", g[gid].buyrole, true)
.addField("💶Цена", g[gid].cost, true)
.addField("💳У вас на карте", p[uid].card)
.setFooter("💳 - чтобы купить роль | ❎ - Чтобы отклонить")

var emess = await message.channel.send(embed);
	
emess.react('💳').then(() => emess.react('❎'));

const filter = (reaction, user) => {
	return ['💳', '❎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

emess.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '💳') {
		if(p[uid].card < g[gid].cost) return bot.reply("Недостаточно тикетов для транзакции");
			p[uid].card -= g[gid].cost;
			let roless = g[gid].buyrole;
			let GuildMember = guild.member;
			(async () => {
	// remove manage roles permission from the bot
	// add the role to the member
	await GuildMember.roles.add(roless);
	// have a look at the roles the bot thinks the member has
	console.log(GuildMember.roles.map(roless => roless.name));
})();
			
		bot.send(`Вы купили роль`);
		} else {
		bot.send("Вы отклонили платеж❎");
		}
	});
	
	
};

module.exports.help = {
    name: "buy"
};
