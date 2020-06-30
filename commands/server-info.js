const Discord = require('discord.js')
const command = 
module.exports = {
	name: 'server-info',
  aliases: ['si', 's'],
	description: 'server info.',
	execute(message, embed) {
    const examplembed = new Discord.MessageEmbed()
      .setColor(0x00AE86)
      .setTitle('🖥️ SERVER-INFO 🖥️')
			.setThumbnail(message.guild.iconURL)
      .addField(':arrow_right: Name', message.guild.name, true)
			.addField(':arrow_left: ID', message.guild.id, true )
			.addField(':arrow_right: Region', message.guild.region.toUpperCase(), true)
			.addField(':arrow_right: Creation Date', message.guild.createdAt.toDateString(), true)
			.addField(':arrow_left: Owner', message.guild.owner.user.tag, true)
			.addField(':arrow_right: Members', message.guild.memberCount, true)
      .addField(':arrow_right: server available', message.guild.available)
      .addField(':arrow_right: server invite',"https://discord.gg/" + `${message.channel.createinvite}`) 
      .setTimestamp()
      .setFooter(`REQUESTED BY :${message.author.username};`)
    message.channel.send(examplembed);
    }
};