const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, config) => {
    const apps = require("../data.json")

    let embed = new Discord.MessageEmbed()
    .setTitle("Apps Page 1")
    .addField(`Social Apps`, `Freddit: ${apps.Freddit.Description}`)
    
    

    message.channel.send(embed)
}