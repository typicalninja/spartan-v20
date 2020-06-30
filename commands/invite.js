const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'invite the bot ',
  aliases: ['inv'],
	cooldown: 5,
	execute(message,embed) {
    const examplembed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle('invite me to a another server')
    .setDescription("invite link : https://discord.com/oauth2/authorize?client_id=716502384167223356&permissions=2081422577&scope=bot")
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.channel.send(examplembed);
   },
};