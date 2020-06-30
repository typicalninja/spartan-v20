const Discord = require('discord.js');

module.exports = {
	name: 'bruh',
  aliases: ['bro', 'b'],
	description: 'get a bruh gif',
  cooldown: 100,
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
     .setAuthor(`${message.author.username} said  bruhhhhh!`)
     .setColor(3447003)
     .setImage('https://media.giphy.com/media/Uss9jg5C9REgo/giphy.gif')
     return message.channel.send(examplembed);
     }
  }
};