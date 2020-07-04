const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, bot_info} = require('./config.json');
client.once('ready', () => {
    console.log(prefix);
    console.log(bot_info.version);
});

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'join-leave')
    welcomeChannel.send (`Welcome ${member}`)
})

bot.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'join-leave')
    welcomeChannel.send (`Goodbye ${member}`)
})

client.login(process.env.token);

client.once('ready', () => {
    console.log('Dn.Bot is online!');
    client.user.setActivity("the deacon server", {type: "WATCHING"});
})

client.on('message', message => {
   if(message.content === `${prefix}ching`){
       message.channel.send('chong');
   } else if (message.content === `${prefix}youtube`){
    message.channel.send('https://www.youtube.com/channel/UCihuEZb13hnq2ZR-yKOjE-Q/');
   } else if (message.content === `${prefix}robux`){
    message.channel.send('lmao you wish');
   } 
    if (message.content === `${prefix}servername`){
    message.channel.send(message.guild.name);
   } else if (message.content === `${prefix}me`){
    message.channel.send(`Username: ${message.author.tag}`);
    message.channel.send(`Your ID: ${message.author.id}`);
   }

});

