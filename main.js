const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, bot_info} = require('./config.json');

client.login(process.env.token);

client.once('ready', () => {
    console.log('Dn.Bot is online!');
    client.user.setActivity("the deacon server", {type: "WATCHING"});
})

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

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

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})