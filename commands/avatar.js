const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
  aliases: ['av', 'a'],
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	execute(message) {
		if (!message.mentions.users.size) {
      const examplembed = new Discord.MessageEmbed()
      .setColor('#00700ff')
	    .setTitle(`${message.author.username}'s AVATAR`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
      .setImage(message.author.displayAvatarURL())
      .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.channel.send(examplembed);
      
    } if (message.mentions.users.map){
     const taggedUser = message.mentions.users.first();
			const examplembed = new Discord.MessageEmbed()
      .setColor('#010ff')
	    .setTitle(`${taggedUser.username}'s AVATAR`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
      .setImage(taggedUser.displayAvatarURL())
      .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.channel.send(examplembed);
    }
	},
};