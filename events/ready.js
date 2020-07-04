const Discord = require('discord.js')

module.exports = client => {
        console.log('Dn.Bot is online!');
        client.user.setActivity("the deacon server", {type: "WATCHING"});
}