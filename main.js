const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix} = require('./config.json');

client.on("ready", async () => {
    console.log('Dn.Bot is online!');
    client.user.setActivity("the deacon server", {type: "WATCHING"});
})

client.login(process.env.token);

client.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (message.content.startsWith(`${prefix}hi`)) {
	    message.reply('Hello');
    } else if (message.content.startsWith(`${prefix}me`)) {
        message.channel.send(`Username: ${message.author.tag}`);
        message.channel.send(`Your ID: ${message.author.id}`)
    } if (message.content.startsWith(`${prefix}suggest`)){
        pollChannelID = message.channel.id;
        let pollChannel = message.guild.channels.cache.find(channel => channel.id === pollChannelID);
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('#23a5cd')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }
});