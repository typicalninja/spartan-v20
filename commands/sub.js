const Discord = require('discord.js');
module.exports = {
	name: 'substract',
  aliases: ['sub', 'su','-'],
	description: 'add 2 numbers',
	execute(message, args) {
   if (args.length < 2) {
      return message.reply("Please provide at least 2 numbers");
    }
    
    var val = `${Number(args[0]) - Number(args[1])}`;
    message.reply(val)
  }
};
