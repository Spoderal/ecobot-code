const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
let messages = require("./messages.json")
const { Client, Intents } = require('discord.js');

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MESSAGES)
myIntents.add(Intents.FLAGS.GUILDS)

client.on('ready', () => {
    client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: 'WATCHING' });
})

client.on('message', message => {


    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase(); 
    if (message.content.indexOf(config.prefix) !== 0) return;

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config)
    } catch (err) {
        console.log(err)

        return;
    }

  
    if(message.content == client.user){
        message.channel.send("My prefix is $ thanks for asking!")
    }

    
})

client.on("guildCreate", guild => {
    client.channels.cache.get('789699643746943008').send('Joined guild: ' + `${guild.name} : ${guild.memberCount}`);
})






client.login(config.token)
console.log("Bot Online!")