const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let argss = args.join(" ");
	let poolembed = new Discord.RichEmbed()
	.setTitle("Привет!")
	.addField("Голосование", argss);
	
	
	var embedSent = await message.channel.send(poolembed);
	embedSent.react('✅');
	embedSent.react('❎');
}

module.exports.help = {
	name: "poll"
}
