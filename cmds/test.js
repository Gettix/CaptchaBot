const {Pagination} = require('discord-interface');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args)
let items = ['Banana', 'Apple'];
 
function getPage(item, pageNumber) {
    return new RichEmbed()
        .setColor('RANDOM')
        .setDescription(item)
        .setFooter(`Page ${pageNumber}/${items.length}`)
}
 
let pagination = Pagination.create(message, {time: 60000, userID: message.author.id, items: items, getPage: getPage, removeReactions: true});
/* 
If you want to customize the Paginations Reactions add the property "reactions" to the options
Example:
 
"reactions": {
    "nextPage": "▶",
    "previousPage": "◀",
    "skipToFinal": "⏩",
    "backToStart": "⏪",
    "cancel": "🚫"
}
*/
 
// Pagination Events
pagination.on('over', timeOver => {
    if (timeOver) {
        // The time is over
    } else {
        // User stopped the collector
    }
});
