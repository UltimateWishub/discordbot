const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix} = require('./config.json');

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
    } else if (message.content.startsWith(`${prefix}suggest`)){
        suggestChannelID = message.channel.id;
        let suggestChannel = message.guild.channels.cache.find(channel => channel.id === suggestChannelID);
        let suggestDesc = message.content.split(" ").slice(1).join(" ")

        let embedsuggest = new Discord.MessageEmbed()
        .setTitle(`New suggestion`)
        .setColor('#23a5cd')
        .setTimestamp()
        .message.author.delete()
        .addFields(
		{ name: 'Suggestion:', value: suggestDesc, inline: true },
		{ name: 'Submitted by:', value: message.author.tag, inline: true },
	)
        .setFooter('If you agree thumbs up. If not then thumbs down.')
        .setThumbnail(message.author.displayAvatarURL())
        suggestChannel.send(embedsuggest).then(msg => {
            const time = 3; //Seconds
            setTimeout(_=> {
              msg.delete();
            }, 1000 * time);
        });
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    } else if (message.content.startsWith(`${prefix}help`)) {
        helpChannelID = message.channel.id;
        let helpChannel = message.guild.channels.cache.find(channel => channel.id === helpChannelID);

        let embedhelp = new Discord.MessageEmbed()
        .setTitle(`Commands`)
        .setColor('#FFA500')
        .addFields(
		{ name: '.hi', value: `I'll say hi back`, inline: true},
        { name: '.me', value: `I'll send you  your tag and user ID`, inline: false},
		{ name: '.suggest <whatever suggestion>', value: `I'll mark your suggestion`, inline: false},
		{ name: '.help', value: `Shows a list of my commands`, inline: false},
	)
        .setFooter('Use the suggestions command in the #suggestions channel and everything else in this channel')
        let msgEmbed = await helpChannel.send(embedhelp);
    } else if (message.content.startsWith(`${prefix}poll`)) {
        pollChannelID = message.channel.id;
        let pollChannel = message.guild.channels.cache.find(channel => channel.id === pollChannelID);
        let pollTitle = message.content.split(" ").slice(1).join(" ")
        let option1 = message.content.split("|").slice(1).join(" ")
        let option2 = message.content.split("|").slice(1).join(" ")
        let option3 = message.content.split("|").slice(1).join(" ")
        let option4 = message.content.split("|").slice(1).join(" ")
        let option5 = message.content.split("|").slice(1).join(" ")
        let option6 = message.content.split("|").slice(1).join(" ")
        let option7 = message.content.split("|").slice(1).join(" ")
        let option8 = message.content.split("|").slice(1).join(" ")
        let option9 = message.content.split("|").slice(1).join(" ")

        let embedpoll = new Discord.MessageEmbed()
        .setTitle(pollTitle)
        .setColor('#6D10CF')
        .setTimestamp
        .setThumbnail()
        .addFields(
        { name: option1 },
        { name: option2 },
        { name: option3 },
        { name: option4 },
        { name: option5 },
        { name: option6 },
        { name: option7 },
        { name: option8 },
        { name: option9 },
        )
        let msgEmbed = await helpChannel.send(embedpoll);
    }
});