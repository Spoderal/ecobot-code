const Discord = require("discord.js");
const db = require("quick.db");
const properties = require("../properties.json");
const crypto = require("../crypto.json");
const cars = require("../cars.json");
module.exports.run = async (client, message, args, config) => {
   const stock = require("../data.json");

    let list = ['DISC', 'NINT', 'GOOGL', 'ASUS', 'RAZR', 'ACR', 'LAYS', 'NASA' ,'FORD', 'SPX', 'CHV', 'NSANY', 'MMTOF', 'COKE', 'MARVL', 'ASM', 'SPDR']
    let list2 = ['Mustang', 'F-150', 'Impala', 'Thunderbird', 'Silverado', 'Nissan240SX', 'Bronco', 'R31', 'Eclipse', 'DB7', 'Cobra']
    let list3 = ['EC', 'BC']
let list4 = ['SmallHouse']
let list5 = ['Zenfone1', 'GoogleNexus']
    let amount = args[1]
    let bought = args[0]
    let balance = db.fetch(`money_${message.author.id}`)

    if(!bought) return message.channel.send("To use this command, specify the stock you want to buy, in all caps. Example: $buy GOOGL")
    if(!amount)
    {amount = 1
    }
   
    if (list.includes(bought)) {
        if (balance < stock[bought].price * amount) return message.channel.send("You dont have enough cash!")
        let items = new Array(parseInt(amount)).fill(bought)
        db.subtract(`money_${message.author.id}`, stock[bought].price * amount);
        for (var i of items) db.push(`ownedStocks_${message.author.id}`, i)
        message.channel.send(`You bought ${amount} shares of ${bought} for $${stock[bought].price * amount}`);
     
    } else if (list2.includes(bought)) {

       if (balance < stock[bought].Price ) return message.channel.send("You dont have enough cash!")
       console.log(stock[bought])
       db.subtract(`money_${message.author.id}`, stock[bought].Price);
       db.push(`cars_${message.author.id}`, stock[bought].Name)
       message.channel.send(`You bought a ${stock[bought].Name} for $${stock[bought].Price}`);
    } else if (list3.includes(bought)) {
        if (balance < stock[bought].price * amount) return message.channel.send()
        let items = new Array(amount).fill(bought)
        db.subtract(`money_${message.author.id}`,stock[bought].price * amount);
        for (var i of items) db.push(`${bought === 'EC' ? 'ecoins' : 'bcoins'}_${message.author.id}`, i)
        message.channel.send(`You bought ${bought} for $${stock[bought].price * amount}`);
     }
     
     else if (list4.includes(bought)) {
        if (balance < stock[bought].price * amount) return message.channel.send()
        let items = new Array(amount).fill(bought)
        db.subtract(`money_${message.author.id}`, stock[bought].price * amount);
        for (var i of items) db.push(`ownedProperties_${message.author.id}`, i)
        message.channel.send(`You bought ${bought} for $${stock[bought].price * amount}`);
     }
     else if (list5.includes(bought)) {
        if (balance < stock[bought].price * amount) return message.channel.send()
        let items = new Array(amount).fill(bought)
        db.subtract(`money_${message.author.id}`, stock[bought].price * amount);
        for (var i of items) db.push(`ownedProperties_${message.author.id}`, i)
        message.channel.send(`You bought ${stock[bought].Name} for $${stock[bought].price * amount}`);
     }
}