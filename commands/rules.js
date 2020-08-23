const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'rules',
	description: 'get a simple rules set for your server',
  aliases: ['r','ru'],
	cooldown: 5,
	execute(message,embed) {
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("you do not have premission **ADMINISTRATOR** to perform this command!");

    message.delete()
    const examplembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`:no_entry_sign: Here are the rules for ${message.guild.name}`)
    .setThumbnail()
    .setDescription(`This rules set was requested by ${message.author.username} for ${message.channel.name}`)
    .addFields(
		{ name: '__Rules__', value: ':no_entry_sign: THIS IS NOT A PLACE FOR:' },
		{ name: ':x: Excessive Cussing', value: '\u200B' },
		{ name: ':x: You must agree to the Discord TOS (https://discord.com/terms) and Guidelines (https://discord.com/guidelines)', value: '\u200B' },
	  { name: ':x:  No advertising Discord Servers, or other programs, websites or services. This includes DM’ing unsolicited invites, or putting an invite as your playing status.', value: '\u200B' },
    { name: ':x: You must be over 13 years old', value: '\u200B' },
    { name: ':x:  You cannot use your voice to annoy others in VC (ex. voice changers/earrape).', value: '\u200B' },
    { name: ':x: Do not spam in channels, this can mean:\n- Typing separate lines very quickly (flooding)\n- Typing out large blocks of text (wall text)\n- Posting the same images multiple times \n(Including if you quickly delete them afterwards)'},
    { name: '\u200B', value: '\u200B' },
    { name: ':warning: If you choose to break these guidelines youll be banned or kicked from the server so be friendly if you break these rule you will find me on your bad side if not well have a great time ', value: 'powered by spartanv20 ' },
	)
    .setTimestamp()
    .setAuthor(`plese follow these rules`)
    .setFooter(`REQUESTED BY : ${message.author.username}`)
     message.channel.send(examplembed);
   },
};