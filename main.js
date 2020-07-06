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
    } else if (message.content.startsWith(`${prefix}test`)) {
        const exampleEmbed = new Discord.MessageEmbed()
	        .setTitle('Some title')
	        .setDescription('Some description here')
	        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
	        .addFields(
		        { name: 'Regular field title', value: 'Some value here' },
		        { name: '\u200B', value: '\u200B' },
		        { name: 'Inline field title', value: 'Some value here', inline: true },
		        { name: 'Inline field title', value: 'Some value here', inline: true },
	        )
	    .addField('Inline field title', 'Some value here', true)
	    .setImage('https://i.imgur.com/wSTFkRM.png')
	    .setTimestamp()
	    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);
            }
});
