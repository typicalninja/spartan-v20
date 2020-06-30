const Discord = require('discord.js');
module.exports = {
	name: 'user-info',
  aliases: ['ui', 'u'],
	description: 'Get info on yourself or tagged user',
  usage: 'ui @<username>',
	execute(message, embed) {
    if (!message.mentions.users.size) {
		const examplembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('😀 User Info 😀')
    .addFields(
		{ name: 'Username', value: `${message.author.username}` },
		{ name: 'User id', value: `${message.author.id}`},
    { name: 'discriminator', value:`${message.author.discriminator} `},
		{ name: 'Rgistered at', value:`${message.author.createdAt} `},
		{ name: 'server', value: `${message.guild.name} ` },
	)
    
    .setTimestamp()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
    message.channel.send(examplembed);
    

} if (message.mentions.users.map){
     const taggedUser = message.mentions.users.first();
			const examplembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('😀 User Info 😀')
    .addFields(
		{ name: 'Username', value: `${taggedUser.username}` },
		{ name: 'User id', value: `${taggedUser.id}`},
    { name: 'discriminator', value: `${taggedUser.discriminator} ` },
		{ name: 'Rgistered at', value:`${taggedUser.createdAt} `},
		{ name: 'server', value: `${message.guild.name} ` },
	)
    .setTimestamp()
    .setAuthor(taggedUser.tag, taggedUser.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
    message.channel.send(examplembed);
    }
	},
};