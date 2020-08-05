const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fetch = require('node-fetch');
const Canvas = require('canvas');
const currency = new Discord.Collection();
const Sequelize = require('sequelize');
const alexa = require('alexa-bot-api')
const config = require("./config.json");
const chalk = require('chalk');
const winston = require('winston');




const client = new Discord.Client();


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
const cooldowns = new Discord.Collection();

client.once('ready', () => {
  const examplembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('🤖 Bot status 🤖')
    .setDescription(`:white_check_mark: spartan v2.0 was started in |  ${client.guilds.cache.size} | servers\n BOT PREFIX = > `)
    .setTimestamp()
    .setAuthor(`BOT ONLINE`)
    .setFooter(`servers : ${client.guilds.cache.size} `);
  client.channels.cache.get('726759543777918976').send(examplembed);
});
const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'log' }),
	],
	format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
});

client.on('ready', () => logger.log('info', 'The bot is online!'));
client.on('debug', m => logger.log('debug', m));
client.on('warn', m => logger.log('warn', m));
client.on('error', m => logger.log('error', m));

process.on('uncaughtException', error => logger.log('error', error));

client.on('message',  message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
 }})
client.on('messageDelete',  message => {
	console.log(chalk.green('INFO:'), `A message by ${message.author.tag} was deleted, but we don't know by who yet.`)
  const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`💬 message of ${message.author.tag} deleted 💬`)
    .setDescription(`message of ${message.author.tag} with content >> ${message.content} << was deleted `)
    .setTimestamp()
    .setAuthor(`message delted`)
    .setFooter(`logs `);
   const channel = message.guild.channels.cache.find(ch => ch.name === 'logs');
   if (!channel) return;
  channel.send(embed)
});
client.on("disconnected", () => {
    const offlineembed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('🤖 Bot status 🤖')
    .setDescription(`:negative_squared_cross_mark:  spartan v2.0 is offline in |  ${client.guilds.cache.size} | servers\n BOT PREFIX = > `)
    .setTimestamp()
    .setAuthor(`BOT offline`)
    .setFooter(`servers : ${client.guilds.cache.size} `);
  client.channels.cache.get('726759543777918976').send(offlineembed);
});
client.once('ready', () => {
client.user.setActivity(`with >help in || ${client.guilds.cache.size} || servers `);
});
client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(c => c.id === member.guild.systemChannelID);
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server hope you enjoy your stay and plese read all the #rules, ${member}!`, attachment);
});
  client.on('message', message => {
	if (message.content === '!welcome test') {
		client.emit('guildMemberAdd', message.member);
  }
  });
  client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.find(c => c.id === member.guild.systemChannelID);
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./bye.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`bye hope you had a good time, ${member}!`, attachment);
});
client.on('message', message => {
	if (message.content === '!leave test') {
		client.emit('guildMemberRemove', message.member);
  }
});
  client.on('message', message => { 
   if (message.content === 'prefix') {
     message.channel.send("my prefix is `>` use this with `>help to get my commands");
   }
}); 
client.on('guildCreate', guild => {
  const examplembed = new Discord.MessageEmbed()
      .setColor(0x00AE86)
      .setTitle(`LOGS #${client.guilds.cache.size} >> I JOINED THE SERVER >> ${guild.name} <<`)
			.setThumbnail(guild.iconURL)
      .addField(':arrow_right: Name', guild.name, true)
			.addField(':arrow_left: ID', guild.id, true )
      .addField(':arrow_right: Region', guild.region)
      .addField(':arrow_right: Member Count', guild.memberCount)
      .addField(':arrow_left: Owner', guild.owner.user.tag)
      .setTimestamp()
       .setFooter(`SPARTAN V 2.0 LOGS`)
  client.channels.cache.get('726303011147612270').send(examplembed);
}); 
client.on('guildDelete', guild => {
  console.log(chalk.green('INFO:'),`i left a server .server:${guild.name}`)
  const examplembed = new Discord.MessageEmbed()
      .setColor(0x00AE86)
      .setTitle(`LOGS #${client.guilds.cache.size} >> I left THE SERVER >> ${guild.name} <<`)
			.setThumbnail(guild.iconURL)
      .addField(':arrow_right: Name', guild.name, true)
			.addField(':arrow_left: ID', guild.id, true )
      .addField(':arrow_right: Region', guild.region)
      .addField(':arrow_right: Member Count', guild.memberCount)
      .addField(':arrow_left: Owner', guild.owner.user.tag)
      .setTimestamp()
       .setFooter(`SPARTAN V 2.0 LOGS`)
  client.channels.cache.get('726303011147612270').send(examplembed);
}); 
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!,maybe you typed the command wrong');
	}
});

client.login(process.env.CLIENT_TOKEN);