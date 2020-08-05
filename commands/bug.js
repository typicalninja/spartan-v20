const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');


module.exports = {
	name: 'bugs',
	description: 'bugs reporting',
  aliases: ['bug',],
	cooldown: 5,
	execute(message) {
    const args = message.content.slice(prefix.length).split(/ + /)
    if (!args.length) return message.channel.send("pls mention a bug to report");
    const examplembed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle(`USER >> ${message.author.username} << sent A Bug report`)
    .setDescription(`BUG : > ${args}` )
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
     message.client.channels.cache.get('726107449635110962').send(examplembed);
     const bugembed = new Discord.MessageEmbed()
    .setColor('#0260ff')
    .setTitle(`USER >> ${message.author.username} << sent A Bug report to spartan v20`)
    .setDescription(`THANKS FOR THE SUBMISSION SENT TO https://discord.gg/zAZ4fNu #BUG REPORTS `)
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setFooter(`REQUESTED BY : ${message.author.username}`);
          message.channel.send(bugembed);
   }
};