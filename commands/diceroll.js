 const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'diceroll',
	description: 'roll the dice',
  aliases: ['dr','dir'],
	cooldown: 5,
	execute(message,embed,args) {
     if('!args' == '0') {
            message.reply('Please ask me a question.');
        } 
        else {
            let eightball = [
            'I ROLLED : 1',
            'I ROLLED : 2',
            'I ROLLED : 3',
            'I ROLLED : 4',
            'I ROLLED : 5',
            'I ROLLED : 6',
            'DICE BROKE TRY AGAIN',
            'DICE FELL INTO A VOLCANO TRY AGAIN',
            'YOU DIED AND RESAPWANED IN ANTARCTICA',
            ];
            let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
    let result = (eightball[index]);
    const examplembed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle('🎲 DICEROLL 🎲')
    .setDescription(`${result}!`)
    .setAuthor(message.author.tag,)
    .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.channel.send(examplembed);
   }
},
};