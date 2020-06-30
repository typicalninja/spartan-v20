const Discord = require('discord.js');
module.exports = {
	name: 'king',
  aliases: ['ki', 'k'],
	description: 'Get info on yourself',
	execute(message, embed) {
		if (!message.guild) {
     const examplembed = new Discord.MessageEmbed()
     .setColor(0xFF0000)
     .setTimestamp()
     .setAuthor (message.author.username, message.author.avatarURL)
     .addField ('** Fun commands cannot be used in private messages! **')
     return message.author.sendEmbed(embed); 
  }
     if (message.channel.type !== 'dm') {
      const examplembed = new Discord.MessageEmbed()
     .setAuthor(`${message.author.username} You are king !`)
     .setColor(3447003)
     .setImage('https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif')
     return message.channel.send(examplembed);
     }
  }
};