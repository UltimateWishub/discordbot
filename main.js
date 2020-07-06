const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix} = require('./config.json');

client.on("ready", async () => {
    console.log('Dn.Bot is online!');
    client.user.setActivity("the deacon server", {type: "WATCHING"});
})

client.login(process.env.token);

client.on('message', message => {
    if (message.content.startsWith(`${prefix}hi`)) {
	    message.reply('Hello');
    } else if (message.content.startsWith(`${prefix}me`)) {
        message.channel.send(`Username: ${message.author.tag}`);
        message.channel.send(`Your ID: ${message.author.id}`)
    }
});
