const Discord = module.require("discord.js");
const fs = require("fs");
let p = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    let au = message.author.id
    let Owner = p[au]
    if(Owner.vip !== true) return message.reply("Только вип-пользователи могут использовать эту команду!")
    
    if ( args.length === 1 && args[ 0 ] === 'delete' )
{
  let roles = message.member.roles.filter( x => x.name[ 0 ] === '­' ).map( x => x.name );
  if ( roles.length === 0 ) return message.channel.send( "У вас нет личных ролей" );
  try
  {
    roles.forEach( role =>
    {
      role = message.guild.roles.find( 'name', role )
      role.delete( 'REQUESTED TO DELETE BY OWNER' )
      message.channel.send( role.name + ' удалена' )
    } )
  }
  catch ( err )
  {
    message.channel.send( err,
    {
      code: 'js'
    } )
  }
}
else
{
  if ( message.member.roles.filter( x => x.name[ 0 ] === '­' ).map( x => x.name ).length >= 1 ) return message.channel.send( "Вы уже имеете личную роль, чтоб сделать новую, удалите старую через `.setcolor delete`" );
  let color = args.pop();
  let name = args.join( " " );
  if ( !name || !color ) return message.channel.send( "Укажите название и цвет роли `.setcolor name #color`" )
  if ( color[ 0 ] !== '#' ) return message.channel.send( "Цвет роли должен начинаться на `#`" );
  try
  {
    message.guild.createRole(
    {
      name: '­' + name,
      color: color,
      hoist: false,
      permissions: 0,
      mentionable: false
    } ).then( role =>
    {
      message.member.addRole( role ).catch( err => message.channel.send( err,
      {
        code: 'js'
      } ) )
      message.channel.send( "Роль создана." )
    } )
  }
  catch ( err )
  {
    message.channel.send( err,
    {
      code: 'js'
    } );
  }
}

}
module.exports.help = {
name: "setcolor"
}
