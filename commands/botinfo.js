const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');
const config = require('../config.json')



module.exports = {
	name: 'bot info',
	description: 'get info on the bot',
  aliases: ['info','bi'],
	cooldown: 5,
	execute(message,embed) {
    const examplembed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle('🤖 BOT INFO 🤖')
    .addFields(
		{ name: 'BOT owned by ', value: 'typicalninja-#3717' },
		{ name: 'BOT prefix', value: `${config.prefix}` },
		{ name: 'BOT username', value: 'spartan v2.0™'},
    { name: 'Bot invite', value: 'https://discord.com/oauth2/authorize?client_id=716502384167223356&permissions=2081422577&scope=bot'},
    { name: 'website', value: `https://typicalninja20.bitrix24.site/discordbot/`},
    { name: 'Number of servers', value: `${message.client.guilds.cache.size}`},
	)
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setURL('https://typicalninja20.bitrix24.site/discordbot/')
    .setFooter('powered repl it: https://repl.it/~');
     message.channel.send(examplembed);
   },
};