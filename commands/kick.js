const cilent = require('discord.js');
const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'kick',
	description: 'ping the bot',
  aliases: ['=','kin'],
	cooldown: 5,
	async execute(message,embed,args) {
     if(!message.member.hasPermission(["KICK_MEMBERS"])) return message.channel.send("you do not have premission  to perform this command!")

     let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
     if(!kickMember) return message.channel.send("please provide a user to kick" )

     let reason = args.slice(1).join(" ")
     if(!reason) reason = "no reason given"

     if(!message.guild.me.hasPermission(["KICK_MEMBERS"])) return message.channel.send("i do not have premission KICK MEMBERS TO PREFORM THIS COMMAND")

     kickMember.send(`hello,you have been kicked from ${message.guild.name} for: ${reason}`).then(() => 
     kickMember.kick()).catch(err => console.log(err))

      message.channel.send(`**${kickmember.user.tag}** has been kicked`).then(m => m.delete(5000))

      let kickembed = new Discord.RichEmbed()
      .setColor('#0260ff')
      .setTitle(`${message.guild.name} modlogs`, message.guild.iconUrl)
      .addField("moderation", "kick",)
      .addField("kicked", kickMember.user.username,)
      .addField("moderator", message.author.username,)
      .addField("reason", reason,)

    .setFooter(`kicked log`);
    let channel = message.guild.channels.find(c => c.name === "modlogs") 
     channel.send(kickembed);
 }
};