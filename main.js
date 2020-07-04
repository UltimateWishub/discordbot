const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, bot_info} = require('./config.json');
client.once('ready', () => {
    console.log(prefix);
    console.log(bot_info.version);
});

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

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('this is a test embed')
}

module.exports.config = {
    name: "hi",
    description: "example of an embed.",
    usage: ".embed",
    accessableby: "Members",
    aliases: []
}