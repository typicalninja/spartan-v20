const Discord = require('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch');
const request = require('superagent');

module.exports = {
	name: 'dogfact',
  aliases: ['df', 'dof'],
	description: 'get a urban dictionary definition',
	async execute(message,args) {
  	const { facts } = await fetch('https://dog-api.kinduff.com/api/facts').then(response => response.json());
    const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle('🐕 RANDOM DOG FACT 🐕')
			.setURL('https://dog-api.kinduff.com/api/facts')
			.addFields(
				{ name: 'FACT', value: `${facts}` },
			)
    .setThumbnail('https://imgur.com/hbgQ0lJ.png')
     .setTimestamp()
     .setFooter(`powered by : https://dog-api.kinduff.com/api/facts REQUESTED BY : ${message.author.username}`);
		message.channel.send(embed);
  }
};