const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let back = ["https://cdn.discordapp.com/attachments/566235609882951681/570516908302925834/maxresdefault.jpg", "https://cdn.discordapp.com/attachments/566235609882951681/570516905874685962/gifki-dlya-strima026-min.gif", "https://cdn.discordapp.com/attachments/566235609882951681/570516907527110656/-.jpg"];
    let result = Math.floor((Math.random() * back.length));
    let enbed = new Discord.RichEmbed()
    .setDescription("Магазин")
    .setColor('#4B0082')
    .addField("💰 Валюта","1000:coffee: - 10 rub. 🔴 1500:coffee: - 20 rub 🔴 2300:coffee: - 30(🎁sale -9%)   **🔴 VIP: 10rub or 3000co (.buyvip)**")
    .addField("🎍 Способы оплаты", "🔸Qiwi - *8 913 001-59-97* (Указать что вы покупаете, а также ваш дискриминатор(Например: #9999) и айди в Discord. **Обязательно вступить в официальную группу бота: https://discord.gg/SZYUZEY (Иначе донат не прийдет)**")
    .setFooter("CacaoBot 2019 | Все права защищены")
    .setThumbnail(message.guild.iconURL)
    .setImage(back[result])

    bot.send(enbed);
};
module.exports.help = {
    name: "shop"
};
