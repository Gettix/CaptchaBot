const options = require("../guildsshop.json");
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

let inc = args[1];


let gid = message.guild.id;

if ( args.length === 1 && args[ 0 ] === 'logs' ) {
    if(!inc) return bot.send("Укажите канал действий");
        
    options[gid].actionch = inc;
bot.send(`Успешно! Канал действий сменён на ${inc}`);
};
    if ( args.length === 1 && args[ 0 ] === 'memberrole') {
        if(!inc) return bot.send("Укажите роль для новеньких");

 
    options[gid].roleadd = inc;
        bot.send(`Успешно!Роль добавлена`);
};
}

module.exports.help = {
    name: "guild"
}
