const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
   aliases: ['h', 'cmd'],
    description: 'start a poll, and count votes at the end',
    usage: '[poll topic]',
    execute(message, args) {
      const data = [];
		  const { commands } = message.client;
 if (!args.length) {
     const examplembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://imgur.com/n76Dgrp.png')
    .setTitle('==NEED HELP HERE YOU GO!!==')
    .setFooter(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
    .setDescription(commands.map(command => command.name).join(` , `));
    message.channel.send(examplembed)
   }
	 if(!command) {
			return message.reply('that\'s not a valid command!');
		}
    const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
   const help2eEmbed = new Discord.MessageEmbed()
		.setColor('RANDOM')
    .setTitle(`HELP for ${command.name}`)
   	.setThumbnail('https://imgur.com/n76Dgrp.png')
    .addFields(
		{ name: '**Name:**  ', value:`${command.name}` },
		{ name: '**Aliases:**', value: `${command.aliases}` },
		{ name: '**Description:**', value: `${command.description}` },
		{ name: '**Usage:**', value: `${prefix}${command.name} ${command.usage}`},
    { name: '**Cooldown:**', value: `${command.cooldown || 3} second(s)` },
	)
    .setTimestamp()
		message.channel.send(help2eEmbed);
	},
};