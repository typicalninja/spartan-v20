const Discord = require('discord.js');
module.exports = {
	name: 'support',
  aliases: ['su', 'sup'],
	description: 'Get support server info',
	cooldown: 5,
	execute(message, embed) {
    if (!message.mentions.users.size) {
		const examplembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('😀 support 😀')
    .setDescription(`'here you go :support server :  https://discord.gg/Q2YNZrC'\nbot owner:TYPICALNINJA`)
    .setTimestamp()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
    message.channel.send(examplembed);
    }
	},
};