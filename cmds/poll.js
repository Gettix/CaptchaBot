const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let argss = args.join(" ");
	let poolembed = new Discord.RichEmbed()
	.addField("Голосование", argss)
	
	bot.send(poolembed);
	
	var embedSent = await message.channel.send(poolembed);
	embedSent.react("✔️");
	embedSent.react(":negative");
}

module.exports.help = {
	name: "poll"
}
