const Discord = require('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch');
const request = require('superagent');

module.exports = {
	name: 'catfact',
  aliases: ['cf', 'caf'],
	description: 'get a urban dictionary definition',
	async execute(message,args) {
  	const { fact } = await fetch('https://catfact.ninja/fact').then(response => response.json());
    const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle('😸 RANDOM CAT FACT 😸')
			.setURL('https://catfact.ninja/fact')
			.addFields(
				{ name: 'FACT', value: `${fact}` },
			)
    .setThumbnail('https://imgur.com/WraG1Cc.png')
     .setTimestamp()
     .setFooter(`powered by : https://catfact.ninja/fact REQUESTED BY : ${message.author.username}`);
		message.channel.send(embed);
  }
};
