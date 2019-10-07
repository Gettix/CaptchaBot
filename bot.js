const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
const token = process.env.BOT_TOKEN;
let config = require('./botconfig.json');
const pokemon = require('./pokemon.json');

let g = require('./game.json');
let prefix = config.prefix;
let profile = require('./profile.json');
let guildd = require('./guildsshop.json');

fs.readdir('./cmds',(err,files)=>{
  if(err) console.log(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
  console.log(`Загружено ${jsfiles.lenght} комманд`);
  jsfiles.forEach((f,i) =>{
    let props = require(`./cmds/${f}`);
    console.log(`${i+1}.${f} Загружен!`);
    bot.commands.set(props.help.name,props);
  })
})


bot.on('ready', () => {
  console.log(`Запустился бот ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
  })
});

bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  let gid = message.guild.id;
  let uid = message.author.id;
  bot.send = function (msg){
    message.channel.send(msg);
  }
  if(!profile[uid]) {
    profile[uid] ={
      coins: 10,
      warns:0,
      xp:0,
      lvl:0,
      vip:false,
      status: "none set",
      card:0,
      copy: "none"
    };
  };
    if(!pokemon[uid]) {
    pokemon[uid] ={
      num: 0,
      names: " "
    };
  };
    if(!guildd[gid]) {
    guildd[gid] ={
    buyrole: "none",
    cost:0,
    namerole: "none",
    actionch: "none",
    roleadd: "none",
   temprole: "muted"
    };
  };
  
  let u = profile[uid];
  
  u.coins ++;
  u.xp++;
  if(u.xp>= (u.lvl * 5)){
    u.coins += u.lvl * 3;
    u.xp = 0;
    u.lvl += 1;
    bot.send(`${message.author} ты заработал повышение уровня и ${u.lvl*3} тикетов! Теперь ты ${u.lvl} лвла`);
  }
  fs.writeFile('./profile.json',JSON.stringify(profile),(err) =>{
    if(err) console.log(err);
  });
  fs.writeFile('./game.json',JSON.stringify(g),(err) =>{
    if(err) console.log(err);
  });
  let user = message.author.username;
  let userid = message.author.id;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;
  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot,message,args);
});

/*bot.on('messageUpdate', async (oldmsg, newmsg) => {
  let embed = new Discord.RichEmbed()
    .setAuthor('Сообщение изменено', newmsg.guild.iconURL)
    .addField('Отправитель', oldmsg.member, true)
    .addField('Канал', oldmsg.channel, true)
    .addField('Раньше', oldmsg.content)
    .addField('Сейчас', newmsg.content)
    .setColor('#FF8000')
    .setTimestamp()
  await oldmsg.channel.send(embed);
})*/

bot.on('guildMemberAdd', async member => {
  let dodo = guildd[gid].roleadd;
  let odod = guildd[gid].actionch;
  let role = member.guild.roles.find(r => r.name == dodo);
  let channel = member.guild.channels.find(c => c.name == odod);

  let embed = new Discord.RichEmbed()
      .setAuthor('Пользователь присоеденился', member.user.avatarURL)
      .setDescription(`${member.user.username}#${member.user.discriminator} (${member})`)
      .setColor('#F7FE2E')
      .setFooter(`ID: ${member.id}`)
      .setTimestamp()
await channel.send(embed);
await member.addRole(role.id);
})

bot.on('guildMemberRemove', async member => {
  let embed = new Discord.RichEmbed()
      .setAuthor('Пользователь вышел', member.user.avatarURL)
      .setDescription(`${member.user.username}#${member.user.discriminator} (${member})`)
      .setColor('#6A696A')
      .setFooter(`ID: ${member.id}`)
      .setTimestamp()
  let channel = member.guild.channels.find(c => c.name == guildd[gid].actionch)
  await channels.send(embed)
}) 

var timer;
var i = 0;
  timer = bot.setInterval(function () {
    var gamePresence = [
      `Спасибо за пользование мной)`,
      `Используй c!help чтобы узнать комманды`,
      `Всего каналов: ${bot.channels.size}`,
      `Пользователей: ${bot.users.size}`,
      `WX-78 | Bot`,
      `Рп`,
      `Фан`
    ];
    bot.user.setPresence({ game: { name: gamePresence[i%gamePresence.length], type: 3 } });
    i++;
  },660000);

bot.login(token);
