const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args, config) => {
    if(message.author.id != "275419902381260802") return message.channel.send("You dont have permission to use this command.");
    var toAdd = args[0]
    var togiveto =  message.mentions.users.first();
  var balance = db.fetch(`money_${message.author.id}`);

    db.add(`money_${togiveto.id}`, toAdd);

  message.channel.send(`You gave $${toAdd} to ${togiveto}  `)
}