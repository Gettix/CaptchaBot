const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let uid = message.author.id;
    let a = message.author;
    let uCoins = profile[message.author.id].coins;
    if(profile[uid].vip == true) {
    let enbed = new Discord.RichEmbed()
    .setTitle(`💙💙**ВИП ПРОФИЛЬ**💙💙 || *All Commands Unlocked 🔓*`)
    .setColor('#F0A300')
    .addField(`Имя`,a.username,true)
    .addField(`Тег`,a.tag,true)
    .addField(`Статус`, profile[message.author.id].status,true)
    .addField(`:coffee: Ваш баланс`, uCoins,true)
    .addField(`🆔`,a.id,true)
    .addField("Нарушения", profile[message.author.id].warns,true)
    .addField(`Вы бот?`,a.bot,true)
    .setThumbnail(a.avatarURL)
    .setFooter("YOUR 👑 | K I N G | 👑 RUOY")

    bot.send(enbed);
    } else {
    let enbed = new Discord.RichEmbed()
    .setTitle("Обычный профиль")
    .setColor('#10c7e2')
    .addField("Имя",a.username)
    .addField("Тег",a.tag)
    .addField(":coffee: Ваш баланс", uCoins)
    .addField("👤 Дискриминатор",a.discriminator)
    .addField("🔑 Создание аккаунта",a.createdAt)
    .addField("🆔",a.id)
    .addField("Нарушения", profile[message.author.id].warns)
    .addField("Вы бот?",a.bot)
    .addField("👇👇КЛИК👇👇", "https://discord.gg/36xFsUm")
    .setThumbnail(a.avatarURL)

    bot.send(enbed);
    }
        
};
module.exports.help = {
    name: "me"
};
