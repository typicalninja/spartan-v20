const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'chat',
	description: 'our chat place  ',
  aliases: ['cha'],
	cooldown: 5,
	execute(message,embed) {
    const examplembed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle('Looking to chat join here ')
    .setDescription("https://spartan-chat--typicalninja.repl.co/")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.channel.send(examplembed);
   },
   };