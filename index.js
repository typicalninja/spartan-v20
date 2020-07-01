const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fetch = require('node-fetch');
const Canvas = require('canvas');
const currency = new Discord.Collection();
const Sequelize = require('sequelize');
const { Kayn, REGIONS } = require('kayn');
const alexa = require('alexa-bot-api')
const Enmap = require("enmap");
const myEnmap = new Enmap();



var chatbot = new alexa("aw2plm")

const client = new Discord.Client();

client.points = new Enmap({name: "points"});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
  const examplembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('🤖 Bot status 🤖')
    .setDescription(`:white_check_mark: spartan v2.0 was started in |  ${client.guilds.cache.size} | servers\n BOT PREFIX = > `)
    .setTimestamp()
    .setAuthor(`BOT ONLINE`)
    .setFooter(`servers : ${client.guilds.cache.size} `);
  client.channels.cache.get('726759543777918976').send(examplembed);
});
client.once('ready', () => {
client.user.setActivity(`with  >help in || ${client.guilds.cache.size} || servers `);
});
client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.name =="spartan-talks"){
	let content = message.content;
  chatbot.getReply(content).then(r => message.channel.send(r))
  }
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
		message.reply('there was an error trying to execute that command!,maybe you typed the command wrong if not pls report it using >bug <report>');
	}
});

client.login(process.env.CLIENT_TOKEN);