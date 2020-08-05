const Discord = require('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch');
const request = require('superagent');

module.exports = {
	name: 'creator',
  aliases: ['cr'],
	description: 'get the bots creator info',
	async execute(message,args) {
  	const { fact } = await fetch('https://catfact.ninja/fact').then(response => response.json());
    const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle('BOT CREATED BY')
      .setAuthor('typicalninja#3717', 'https://discordapp.com/channels/715518142893260971/726106808284086332/727782119828488192')
      .setDescription('This bot was coded by typicalninja hope you like it here is hos youtube https://www.youtube.com/channel/UCdOaWkLvMwc4DeVsCnWZQTA?view_as=subscriber')
      .setThumbnail('https://imgur.com/yBcOiEu')
     .setTimestamp()
     .setFooter(``);
		message.channel.send(embed);
  }
};
