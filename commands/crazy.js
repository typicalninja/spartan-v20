const Discord = require('discord.js');

module.exports = {
	name: 'you are crazy',
  aliases: ['yac',],
	description: 'get a no gif',
	execute(message, embed) {
		if (!message.guild) {
     const examplembed = new Discord.MessageEmbed()
     .setColor(0xFF0000)
     .setTimestamp()
     .setAuthor (`${message.author.username}, ${message.author.avatarURL}`)
     .addField ('** Fun commands cannot be used in private messages! **')
     return message.author.sendEmbed(embed); 
  }
     if (message.channel.type !== 'dm') {
      const examplembed = new Discord.MessageEmbed()
     .setAuthor(`${message.author.username} said you are carzy!`)
     .setColor(3447003)
     .setImage('https://media.giphy.com/media/ZaWnSkDS4Ww8gv31jr/giphy.gif')
     return message.channel.send(examplembed);
     }
  }
};