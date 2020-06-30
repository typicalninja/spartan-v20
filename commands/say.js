const Discord = require('discord.js');
module.exports = {
	name: 'annouce',
  aliases: ['say', 'an'],
	description: 'say something as dpartanv20',
  cooldown: 10,
	execute(message,args) {
       message.channel.send(args);
  }
};
