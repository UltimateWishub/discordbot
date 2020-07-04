const Discord = require('discord.js');
const client = new Discord.Client();
const botsettings = require("./botsettings.json");

client.login(process.env.token);

client.once('ready', () => {
    console.log('Dn.Bot is online!');
    client.user.setActivity("the deacon server", {type: "WATCHING"});
})



client.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hi`){
        return message.channel.reply("Hello")
    }
    
})
