const Discord = require('discord.js');
const querystring = require('querystring');
const fetch = require('node-fetch');
const request = require('superagent');
const { stripIndents } = require('common-tags');
const urban = require('urban');


module.exports = {
	name: 'cat',
  aliases: ['ct', 'ca'],
	description: 'get a random cat picture',
	async execute(message,args,kayn,guild,con) {
    message.channel.send('api down try again later');
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
       const examplembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(':smile_cat: RANDOM CAT PICTURE :smile_cat:')
    .setImage(`${file}`)
    .setTimestamp()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`powered by : https://aws.random.cat/meow `);
    message.channel.send('api down try again later');
    console.log('cat api used')
    }
};