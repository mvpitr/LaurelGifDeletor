  require('dotenv').config();

  const Discord = require('discord.js');
  const client = new Discord.Client();
  const LIMIT = 20;
  const MY_USER_ID = '219887155315474432';

  var dict = {};

  var deletedMessages = {};


  client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
  });


  /* client.on('message', (message) => { //whenever a message is sent
    if (message.content.includes('tenor.com/') || message.content.includes('https://media.discordapp.net/attachments/696535474461736971/809618300233187338/strip.gif')) { //if it contains a link from tenor.com
      var userId = message.author.id;
      if(userId === '219887155315474432') {
        message.delete() //delete the message
        .then(message.author.send("Shut up!!!!"))
      }
    }
  })

  */




  client.on('message', (message) => { //whenever a message is sent
   /* const exampleEmbed = new Discord.MessageEmbed()
     .setColor('#0099ff')
     .setTitle('Some title')
     .setURL('https://discord.js.org/')
     .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
     .setDescription('Some description here')
     .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addField('Inline field title', 'Some value here', true)
    .setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
      
    if (message.content === '!help') {
      //client.channels.cache.find('539195804766830605').send(exampleEmbed);
      message.reply(exampleEmbed);
    }
  */

    var userId = message.author.id;
    console.log(`User identified as ${userId}.`);
    if(userId === MY_USER_ID) {
      console.log("User identified.");
    
     if (message.content.includes('tenor.com/')) {

       console.log("Got a GIF");

       
       if (message.content.includes('https://tenor.com/view/kermit-stripper-kms-die-sad-gif-16728871')) {
           message.delete() 
         } else {

       if(dict[message.content]) // do we already have this URL saved?
       {
         dict[message.content]++;
          
          if ((LIMIT - dict[message.content]) > 0) {
        
          message.reply('You can use this gif ' + (LIMIT - dict[message.content]) + ' more time(s)');

         }

         else  {
          message.reply('You have reached your limit on this gif');
         
         }

       }
       
       else
       {
         dict[message.content] = 1;
         
          message.reply('You can use this gif ' + (LIMIT - dict[message.content]) + ' more time(s)');

        
       }



       if (dict[message.content] > LIMIT)
       {
         message.delete() //delete the message

        }


     for(var key in dict) {
       console.log(key + " : " + dict[key]);
     }
    }
   }
  }
  });




  client.login('ODEyMzYzNDI5NzEyNjI1Njk2.YC_qZg.e1aY_ftZ4Q22OiCiOY0ycg6PRgo');