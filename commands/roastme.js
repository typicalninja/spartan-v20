const Discord = require('discord.js');
module.exports = {
	name: 'roastme',
  aliases: ['rme', 'roast'],
	description: 'get roasted',
	execute(message,embed,args,kayn,REGIONS,client,config,con,guilds) {
		 if(!args =='') {
            message.reply('Please ask me a question.');
          }
          else {
            let eightball = [
            'iam so glad becuse i am not ur friend.',
            'look at this this is a picture of you https://imgur.com/a/KlszXX7.png.',
             'you suck',
            'get yourself a girlfriend.oh but you cant you are bald',
             'You bring everyone so much joy...when you leave the room.',
             'Your secrets are always safe with me. I never even listen when you tell me them.',
              'You’re a grey sprinkle on a rainbow cupcake.',
              'Shut up! Theres too much crap coming out of your mouth. Put some of it into your toilet. I think its getting rather lonely.',
              'oh,iam sorry,i dont understand that.maybe because i dont speak stupid.',
              'oh i found your picture in the internet is this you https://imgur.com/a/XT0zqiD.png.',
              'tip :leave your roast suggestions in my support server i ll add them do >support for the invite.have fun go on type >roastme and get roasted'
            ];
            let index = (Math.floor(Math.random() * Math.floor(eightball.length)));
            message.reply(eightball[index]);
          }
    },
};