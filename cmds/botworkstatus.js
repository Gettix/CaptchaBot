const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  let news = args.pop();
    if ( args.length === 1 && args[ 0 ] === 'stable' ) {
        let good = new Discord.RichEmbed()
        .SetTitle("Сейчас Бот работает стабильно")
        .setColor('#33EF00')
        .addField("Интересное", news)
        
        bot.send(good);
    }
if ( args.length === 1 && args[ 0 ] === 'unstable' ) {
        let nogood = new Discord.RichEmbed()
        .SetTitle("Сейчас Бот работает не стабильно")
        .setColor('#DF9F00')
        .addField("Интересное", news)
        
        bot.send(nogood);
    }
    if ( args.length === 1 && args[ 0 ] === 'rework' ) {
        let nogood = new Discord.RichEmbed()
        .SetTitle("Сейчас идет работа над ботом/Восстановление бота")
        .setColor('#D60000')
        .addField("Интересное", news)
        
        bot.send(nogood);
    }
};

module.exports.help = {
    name: "botwork"
};
