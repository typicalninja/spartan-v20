const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'ping the bot',
  aliases: ['p','pin'],
	cooldown: 5,
	execute(message,embed) {
    const examplembed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle('📶 Pinging')
    .setDescription("📶 MY Ping Is 📶 `" + `${Date.now() - message.createdTimestamp}` + " ms`")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.channel.send(examplembed);
   },
};