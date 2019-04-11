const Discord = require('discord.js')
const client = new Discord.Client()

var fs = require("fs");

var adj1 = fs.readFileSync('../monster_adj1.txt').toString().split("\n");
var adj2 = fs.readFileSync('../monster_adj2.txt').toString().split("\n");
var adj3 = fs.readFileSync('../monster_adj3.txt').toString().split("\n");
var adj4 = fs.readFileSync('../monster_adj4.txt').toString().split("\n");
var adj5 = fs.readFileSync('../monster_adj5.txt').toString().split("\n");
var actionsingle = fs.readFileSync('../monster_actionssingle.txt').toString().split("\n");
var actionplural = fs.readFileSync('../monster_actionsplural.txt').toString().split("\n");
var singular = fs.readFileSync('../monster_singular1.txt').toString().split("\n");
var plural = fs.readFileSync('../monster_plural.txt').toString().split("\n");

for(i in adj1) {
	if (i == (adj1.length-1))
		break;
    adj1[i] = adj1[i].slice(0,-1);
}
for(i in adj2) {
	if (i == (adj1.length-1))
		break;
    adj2[i] = adj2[i].slice(0,-1);
}
for(i in adj3) {
	if (i == (adj1.length-1))
		break;
    adj3[i] = adj3[i].slice(0,-1);
}
for(i in adj4) {
	if (i == (adj1.length-1))
		break;
    adj4[i] = adj4[i].slice(0,-1);
}
for(i in adj5) {
	if (i == (adj1.length-1))
		break;
    adj5[i] = adj5[i].slice(0,-1);
}
for(i in actionsingle) {
	if (i == (adj1.length-1))
		break;
    actionsingle[i] = actionsingle[i].slice(0,-1);
}
for(i in actionplural) {
	if (i == (adj1.length-1))
		break;
    actionplural[i] = actionplural[i].slice(0,-1);
}
for(i in singular) {
	if (i == (adj1.length-1))
		break;
    singular[i] = singular[i].slice(0,-1);
}
for(i in plural) {
	if (i == (adj1.length-1))
		break;
    plural[i] = plural[i].slice(0,-1);
}

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "monster") {
		//receivedMessage.channel.send(adj1.length * Math.random())
		receivedMessage.channel.send(generateMonster())
		return
    }
}

function generateMonster() {
    var baserand = Math.random() * 100
	var monster
	if (baserand < 16)
	{
		monster = adj1[Math.floor(Math.random()*adj1.length)] + " " + singular[Math.floor(Math.random()*singular.length)] + "."
	} else if (baserand < 11) 
	{
		monster =  adj3[Math.floor(Math.random()*adj3.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " " + singular[Math.floor(Math.random()*singular.length)] + "."
	} else if (baserand < 21) 
	{
		monster = "A swarm of " + adj2[Math.floor(Math.random()*adj2.length)] + " " + plural[Math.floor(Math.random()*plural.length)] + "."
	} else if (baserand < 23) 
	{
		monster = adj1[Math.floor(Math.random()*adj1.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + singular[Math.floor(Math.random()*singular.length)] + "."
	} else if (baserand < 25) 
	{
		monster = "A swarm of " + adj4[Math.floor(Math.random()*adj4.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " " + plural[Math.floor(Math.random()*plural.length)] + "."
	} else if (baserand < 28)
	{
		monster = adj3[Math.floor(Math.random()*adj3.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + singular[Math.floor(Math.random()*singular.length)] + "."
	} else if (baserand < 31)
	{
		monster = "A swarm of " + adj2[Math.floor(Math.random()*adj2.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + singular[Math.floor(Math.random()*singular.length)] + "."
	} else if (baserand < 33)
	{
		monster = "A swarm of " + adj4[Math.floor(Math.random()*adj4.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + singular[Math.floor(Math.random()*singular.length)] + "."
	} else if (baserand < 55)
	{
		monster = adj1[Math.floor(Math.random()*adj1.length)] + " " + singular[Math.floor(Math.random()*singular.length)] + " " + actionsingle[Math.floor(Math.random()*actionsingle.length)] + "."
	} else if (baserand < 75) 
	{
		monster =  adj3[Math.floor(Math.random()*adj3.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " " + singular[Math.floor(Math.random()*singular.length)] + " " + actionsingle[Math.floor(Math.random()*actionsingle.length)] + "."
	} else if (baserand < 79) 
	{
		monster = "A swarm of " + adj2[Math.floor(Math.random()*adj2.length)] + " " + plural[Math.floor(Math.random()*plural.length)] + " " + actionplural[Math.floor(Math.random()*actionplural.length)] + "."
	} else if (baserand < 83) 
	{
		monster = adj1[Math.floor(Math.random()*adj1.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + singular[Math.floor(Math.random()*singular.length)] + " " + actionsingle[Math.floor(Math.random()*actionsingle.length)] + "."
	} else if (baserand < 89) 
	{
		monster = "A swarm of " + adj4[Math.floor(Math.random()*adj4.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " " + plural[Math.floor(Math.random()*plural.length)] + " " + actionplural[Math.floor(Math.random()*actionplural.length)] + "."
	} else if (baserand < 95)
	{
		monster = adj3[Math.floor(Math.random()*adj3.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + singular[Math.floor(Math.random()*singular.length)] + " " + actionsingle[Math.floor(Math.random()*actionsingle.length)] + "."
	} else if (baserand < 97)
	{
		monster = "A swarm of " + adj2[Math.floor(Math.random()*adj2.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + singular[Math.floor(Math.random()*singular.length)] + " " + actionplural[Math.floor(Math.random()*actionplural.length)] + "."
	} else
	{
		monster = "A swarm of " + adj4[Math.floor(Math.random()*adj4.length)] + " " + adj5[Math.floor(Math.random()*adj5.length)] + " half\-" + singular[Math.floor(Math.random()*singular.length)] + "\/half\-" + plural[Math.floor(Math.random()*plural.length)] + " " + actionplural[Math.floor(Math.random()*actionplural.length)] + "."
	}
	return monster
}

client.login("NTY1NDg2NTY0OTQwMTg1NjAx.XK3Jew.xIA6ulI3dwz4D8YJOKn7Et9mrns")
