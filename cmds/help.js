const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)

    .setColor('#FF9900')

    .addField("Captcha", "=captcha start");
    .addField("Set role if captcha complete", "=setrole roleid");
    .addField("Where send captcha message?", "=channel logs chname");

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "help"
};
