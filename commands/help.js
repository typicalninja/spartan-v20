const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['cmd'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const { commands } = message.client;

		if (!args.length) {
       const examplembed = new Discord.MessageEmbed()
      .setColor('RANDOM')
		  .setTitle('==NEED HELP HERE YOU GO!!==')
      .setFooter(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
		  .setDescription(commands.map(command => command.name).join(' ,  '));

			return message.channel.send(examplembed)
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('here is my command list');
				})
				.catch(error => {
					console.error(`Could not send help  to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t help you!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}
     const help2Embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle(`HELP for ${command.name}`)
		.addField('**Name:**', `${command.name}`)
	  .addField('**Aliases:**',  `${command.aliases}`)
	  .addField('**Description:**', `${command.description}`)
	 .addField('**Usage:**', `${prefix}${command.name} ${command.usage}`)
    .addField('**Cooldown:**', `${command.cooldown || 3} second(s)`)
    .setFooter(`GENARALMIKE HELP`)
		message.channel.send(help2Embed);
	},
};