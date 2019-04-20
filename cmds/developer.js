const Discord = require('discord.js')
const devp = require('./botconfig.json')
let dev = devp.dev
module.exports = (client, message, args) => {
    if(!message.author.id === dev) return message.channel.send("Вы не являетесь разработчиком");
var  embed = new Discord.RichEmbed()
  .setTimestamp()
  .setTitle("**Server List**")
  .setFooter(`Total Servers: ${client.guilds.size.toLocaleString()}`)
  .setDescription(client.guilds.map(g => "**"+g.name+"** \n[Server ID:"+g.id+"]\n") );
  message.delete(10)
  message.channel.send(embed)
}
module.exports.help = {
    name: "serv"
};
