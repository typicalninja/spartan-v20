const Discord = require("discord.js");
const ms = require("ms");

module.exports = {
    name: 'permmute',
    description: 'mute a specific user permenatly (can evade if user leave and rejoin the server)',
    usage: '[tagged user] [mute time]',
    async execute(message,args) {
    const tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let logchannel = message.guild.channels.cache.find(channel => channel.name === "logs");
  if (!logchannel) return message.reply('I cannot find a logs channel create a channel name \n`logs\n`');
  let reason = args.slice(1).join(' ');
  if(tomute.bot) return message.channel.send("I can't mute  because he is a bot");
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.cache.find(muterole => muterole.name === "muted");
  

  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
       data: {
        name: "spartan mute",
        color: "#000000",
        permissions:[]
         },
  reason: 'we needed a role for idiots,spammers',
    })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(muterole,{
         SEND_MESSAGES: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
if (tomute.roles.cache.has(muterole.id)) {
            return message.channel.send('This user is already muted!');
        }

  await(tomute.roles.add(muterole.id));
  message.reply(`<@${tomute.id}> has been muted `);

const embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .addField('Action:', 'mute')
  .addField('User:', `${tomute.username} (${tomute.id})`)
  .addField('Moderator:', 
  `${message.author.tag}`)
  .addField('Reason', reason);
  message.channel.send(`:hammer: Bippity boppity **MUTED** - ${tomute.username}!.`)
  return  logchannel.send(embed);


//end of module
 }
}