const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
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
        message.delete();
        suggestChannelID = message.channel.id;
        let suggestChannel = message.guild.channels.cache.find(channel => channel.id === suggestChannelID);
        let suggestDesc = message.content.split(" ").slice(1).join(" ")

        let embedsuggest = new Discord.MessageEmbed()
        .setTitle(`New suggestion`)
        .setColor('#23a5cd')
        .setTimestamp()
        .addFields(
		{ name: 'Suggestion:', value: suggestDesc, inline: true },
		{ name: 'Submitted by:', value: message.author.tag, inline: true },
	)
        .setFooter('If you agree thumbs up. If not then thumbs down.')
        .setThumbnail(message.author.displayAvatarURL())
        let msgEmbed = await suggestChannel.send(embedsuggest);
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
    } else if (message.content.startsWith(`${prefix}reactions`)) {
        message.delete
        let embed = new Discord.MessageEmbed()
        .setTitle(`Reaction Roles`)
        .setDescription(`React to the church you go to`)
        .setColor(`#9900FF`)
        .addFields(
            { name: '1️⃣ = ተክለሃይማኖት', value: ``, inline: false },
            { name: '2️⃣ = ሥላሴ', value: ``, inline: false },
            { name: '3️⃣ = ሚካኤል', value: ``, inline: false },
        )
        let msgEmbed = await message.channel.send(embed)
        await msgEmbed.react('1️⃣')
        await msgEmbed.react('2️⃣')
        await msgEmbed.react('3️⃣')
        await msgEmbed.react('4️⃣')
    }
});

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '1️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("709138749904125963")
        }
    }
})

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '1️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("709138749904125963")
        }
    }
})

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '2️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("731278403340337183")
        }
    }
})

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '2️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("731278403340337183")
        }
    }
})

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '3️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("731307193470812190")
        }
    }
})

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '3️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove("731307193470812190")
        }
    }
})

client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '4️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("731625527894605915")
        }
    }
})

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "731628304242835496") {
        if (reaction.emoji.name === '4️⃣'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("731625527894605915")
        }
    }
})
