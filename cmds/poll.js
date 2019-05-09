const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let argss = args.join(" ");
	let poolembed = new Discord.RichEmbed()
	.addField("Голосование", argss)
	
	bot.send(poolembed);
	
	var embedSent = await message.channel.send(poolembed);
	embedSent.react(":white_check_mark:");
	embedSent.react(":negative_squared_cross_mark:");
}

module.exports.help = {
	name: "poll"
}
