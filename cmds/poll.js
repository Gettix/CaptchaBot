const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let argss = args.join(" ");
	let poolembed = new Discord.RichEmbed()
	.addField("Голосование", argss)
	
	bot.send(poolembed);
	poolembed.react("✔️");
	poolembed.react("❌");
}

module.exports.help = {
	name: "poll"
}
