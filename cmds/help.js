const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let enbed = new Discord.RichEmbed()
    .setDescription("Помощь")
    .setColor('#4B0082')
    .addField("Модерация","kick(w!kick (пинг пользователя)) clear(w!clear (количество сообщений))  warn(w!warn (пинг пользователя))   unwarn(w!unwarn (пинг пользователя))  ban(w!ban (пинг пользователя))  say(w!say (ваше сообщение))  tempmute(w!tempmute (пинг пользователя) (сек./мин./час./дни))  report(w!report (пинг пользователя) (Причина или описание))")
    .addField("Экономика", "money (w!money)  pay (w!pay (имя получателя) (количество монеток))")
    .addField("Развлечения", "8ball (w!8ball (а + вопрос))")
    .addField("Информация","serverinfo,userinfo,help")
    .addField("Пригласить","https://discordapp.com/oauth2/authorize?client_id=551625781818818590&permissions=8&scope=bot")
    .setThumbnail(message.guild.iconURL)
    .setImage('https://cdn.discordapp.com/attachments/565544602665222144/565544669350723590/images.png')

    bot.send(enbed);
};
module.exports.help = {
    name: "help"
};
