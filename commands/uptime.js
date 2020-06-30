const Discord = require('discord.js');


module.exports = {
	name: 'uptime',
  aliases: ['up', 'sup'],
	description: 'Get bots uptime info',
	cooldown: 5,
	execute(message, embed) {
    var totalsure = (message.client.uptime / 1000)
    var day = Math.floor(totalsure / 86400)
    var hours = Math.floor(totalsure / 3600)
    Math.floor(totalsure %= 3600)
    var minutes = Math.floor(totalsure / 60)
    var seconds = Math.floor(totalsure % 60)
    var activity = `${day} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`

		const examplembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('🤖 Bot Uptime 🤖')
    .setDescription(`${activity}`)
    .setTimestamp()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
    message.channel.send(examplembed);
    }
	};