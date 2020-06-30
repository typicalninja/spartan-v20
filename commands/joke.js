const Discord = require('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch');
const request = require('superagent');

module.exports = {
	name: 'joke',
  aliases: ['df', 'dof'],
	description: 'get a urban dictionary definition',
	async execute(message,args) {
  	const { response } = await fetch('http://www.official-joke-api.appspot.com/random_joke').then(response => response.json());
    const joke = response
    const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle('')
			.setURL('https://dog-api.kinduff.com/api/facts')
			.addFields(
				{ name: 'joke', value: `${joke}` },
			)
    .setThumbnail('')
     .setTimestamp()
     .setFooter(`powered by : https://dog-api.kinduff.com/api/facts REQUESTED BY : ${message.author.username}`);
		message.channel.send(embed);
  }
};