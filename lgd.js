  require('dotenv').config();

  const Discord = require('discord.js');
  const client = new Discord.Client();
  const LIMIT = 20;
  const MY_USER_ID = 'USER-ID-HERE';

  var dict = {};

  var deletedMessages = {};


  client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
  });







  client.on('message', (message) => { //whenever a message is sent
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




  client.login('YOUR-TOKEN-HERE');
