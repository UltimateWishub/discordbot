const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", async () => {
    console.log('Dn.Bot is online!');
    client.user.setActivity("the deacon server", {type: "WATCHING"});
})

client.login(process.env.token);

if (message.content.startsWith(`${prefix}hi`)) {
	message.channel.send('Hello');
} else if (message.content.startsWith(`${prefix}me`)) {
    message.channel.send(`Username: ${messsage.author.tag}`);
    message.channel.send(`Your ID: ${messsage.author.id}`)
}
