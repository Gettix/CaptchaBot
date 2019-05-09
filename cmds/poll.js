const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let args = args.join(" ");
	let poolembed = new Discord.RichEmbed()
	.addField("Голосование", args)
	
	bot.send(poolembed);
	poolembed.react(":white_check_mark:");
	poolembed.react(":negative_squared_cross_mark:");
}

module.exports.help = {
	name: "poll"
}
