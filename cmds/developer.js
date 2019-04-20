const Discord = require('discord.js')
let devp = require('./botconfig.json')

module.exports = (client, message, args) => {
    if(!message.author.id === devp.dev) return;
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
