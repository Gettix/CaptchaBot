const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let replies = ["Cat🐱 hp:10 lvl:1", "Dog🐶 hp:15 lvl:1", "Dolphin🐬 hp:40 lvl:4", "Frog🐸 hp:2 lvl:1", "Bird🐦 hp:3 lvl:1", "Crocodile🐊 hp: 60 lvl: 10", "Wolf🐺 hp:100 lvl:7", "Bear🐻 hp:150 lvl:23"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)

    .setColor('#FF9900')

    .addField("Вы поймали", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "hunt"
};
