const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const {prefix} = require('./config.json');
const got = require('got');

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

    if (message.content === `${prefix}hi`) {
	    message.reply('Hello');
    } else if (message.content === `${prefix}me`) {
        message.channel.send(`Username: ${message.author.tag}`);
        message.channel.send(`Your ID: ${message.author.id}`)
    }  else if (message.content === `${prefix}ping`) {
        message.channel.send(m.createdTimestamp-message.createdTimestamp);
    } else if (message.content === `${prefix}suggest`){
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
    } else if (message.content === `${prefix}help`) {
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
		{ name: '.meme', value: `Shows a random meme from r/memes subreddit`, inline: false},
	)
        .setFooter('Use the suggestions command in the #suggestions channel and everything else in this channel')
        let msgEmbed = await helpChannel.send(embedhelp);
    } else if (message.content === `${prefix}reactions`) {
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setTitle(`Reaction Roles`)
        .setDescription(`React to the church you go to`)
        .setColor(`#9900FF`)
        .addFields(
            { name: '1️⃣ = ተክለሃይማኖት', value: `ተክለሃይማኖት role`, inline: false },
            { name: '2️⃣ = ሥላሴ', value: `ሥላሴ role`, inline: false },
            { name: '3️⃣ = ሚካኤል', value: `ሚካኤል role`, inline: false },
            { name: '4️⃣ = ጊዮርጊስ', value: `ጊዮርጊስ role`, inline: false },
        )
        let msgEmbed = await message.channel.send(embed)
        await msgEmbed.react('1️⃣')
        await msgEmbed.react('2️⃣')
        await msgEmbed.react('3️⃣')
        await msgEmbed.react('4️⃣')
    } else if (message.content === `${prefix}meme`) {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
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
            await reaction.message.guild.members.cache.get(user.id).roles.remove("731625527894605915")
        }
    }
})
