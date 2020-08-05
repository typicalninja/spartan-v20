const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'user is not behaving and kick had no effect ban them',
  aliases: ['ba','ban'],
	cooldown: 5,
	async execute(message,embed,args) {
     if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("you do not have premission **KICK MEMBERS** to perform this command!")

const banMember = message.mentions.members.first() 
     if(!banMember) return message.channel.send("please provide a user to kick" )

const reason = message.content.slice(prefix.length).split("  ")
     if(!reason) reason = "no reason given"

     if(!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("i do not have premission KICK MEMBERS TO PREFORM THIS COMMAND")

     banMember.send(`hello,you have been banned from ${message.guild.name} for: ${reason}`).then(() => 
     banMember.ban()).catch(err => console.log(err))

 const taggedUser = message.mentions.users.first();

      message.channel.send(`**${taggedUser.tag}** has been banned for ${reason}`)

      const kickembed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(`kicked user from ${message.guild.name} successfully`, message.guild.iconUrl)
      .setDescription(`user **${taggedUser.tag}** was kicked from ${message.guild.name} by ${message.author.username} `)
      .setFooter(`kicked log`);
    
    message.channel.send(kickembed);
 }
};