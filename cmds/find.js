const Discord = require("discord.js");
const options = require("../guildsshop.js");

module.exports.run = async (bot, message, args) => {

    let gid = message.guild.id;
    let one = options[gid].actionch;
    let two = options[gid].addrole;
    let tree = options[gid].temprole;
    let four = options[gid];
    
    let embed = new Discord.RichEmbed()
    .setTitle(`Опции сервера. [ID: ${four}`)
    .setColor(RANDOM)
    .addField("Канал действий", one, true)
    .addField("Роль прибывшим", two, true)
    .addField("Роль мут", tree, true);
              
    bot.send(embed);

}
 
module.exports.help = {
  name: "options"
}
