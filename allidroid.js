////////
//
// written by AnomAllison
// last updated 11/11/2019
//
// I hope Allidroid can bring people some humour and entertainment
//
////////

const Discord = require('discord.js')
const client = new Discord.Client()

var fs = require("fs");

const monster_types = 
{
	FRIEND: "monster friend",
	BOSS: "boss monster",
	MOOK: "monster mook"
}

// pronouns from file
var pronouns = JSON.parse(fs.readFileSync('pronoun_list.json'));

// monster files
var monster_adjectives = JSON.parse(fs.readFileSync('adjective_list.json'));
var monster_actions = JSON.parse(fs.readFileSync('action_list.json'));
var monster_nouns = JSON.parse(fs.readFileSync('monster_list.json'));
var group_types = JSON.parse(fs.readFileSync('group_type_list.json'));

var costume_material = JSON.parse(fs.readFileSync('costume_material_list.json'));

var monster_names = JSON.parse(fs.readFileSync('name_given_list.json'));
var monster_surnames = JSON.parse(fs.readFileSync('name_surname_list.json'));
var title_prefixes = JSON.parse(fs.readFileSync('title_prefix_list.json'));
var title_suffixes = JSON.parse(fs.readFileSync('title_suffix_list.json'));
var monster_classes = JSON.parse(fs.readFileSync('class_list.json'));

//var bossmonster_reputation = fs.readFileSync('boss_reputations.txt').toString().split("\n");
//var bossmonster_fightstyle_ey = fs.readFileSync('boss_fighting_styles_ey.txt').toString().split("\n");
//var bossmonster_fightstyle_im = fs.readFileSync('boss_fighting_styles_im.txt').toString().split("\n");

//artifact files
var item_nouns = JSON.parse(fs.readFileSync('item_list.json'));
var item_suffixes = JSON.parse(fs.readFileSync('item_suffix_list.json'));
var item_prefixes = JSON.parse(fs.readFileSync('item_prefix_list.json'));

//slashfic prompt lists
var au_list = JSON.parse(fs.readFileSync('au_list.json'));
var au_twists = JSON.parse(fs.readFileSync('au_twists.json'));
var character_list = JSON.parse(fs.readFileSync('characters_list.json'));

//
var logintoken = fs.readFileSync('token.txt').toString();

//
//
// extremely important Gay variable
//

var currentgay = 0;

const MAX_DICE_ROLL = 999999999;


//
// finds if an array (typically of roles) has a name value equal to val
//

function hasName(arr, val) 
{
	if (arr == null)
		return false;
	return arr.some(function(arrVal)
	{
		return val == arrVal.name;
	});
}


//
//
// MESSAGE RECEIVED
//
//

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
	
	if (receivedMessage.guild != null && hasName(receivedMessage.guild.members.get(receivedMessage.author.id).roles,'Bot Banned')) { // Don't respond to banned users in channels
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

//
//
// COMMANDS PROCESSED HERE
//
//

function processCommand(receivedMessage) 
{
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
	let normalizedCommand = primaryCommand.toLowerCase();
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

	let output;
	
    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments
	
	currentgay += Math.floor((Math.random() * 100) + 1);

    if (normalizedCommand == "monster") 
	{
		output = generateActiveMonster("monster");
		if (output == null)
		{
			console.log("failed command: monster");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "friend") 
	{
		output = generateActiveMonster("friend");
		if (output == null)
		{
			console.log("failed command: friend");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "sexymonster") 
	{
		output = generateActiveMonster("sexy");
		if (output == null)
		{
			console.log("failed command: sexymonster");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "boss") 
	{
		output = generateBoss();
		if (output == null)
		{
			console.log("failed command: boss");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "roll") 
	{
		receivedMessage.channel.send(dieRoll(arguments[0]));
		return;
    } else if (normalizedCommand == "gay") 
	{
		receivedMessage.channel.send(howgay());
		return;
    } else if (normalizedCommand == "lesbian") 
	{
		output = nounlesbian();
		if (output == null)
		{
			console.log("failed command: lesbian");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "lesbifriend") 
	{
		output = lesbianfriend();
		if (output == null)
		{
			console.log("failed command: lesbifriend");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    }  else if (normalizedCommand == "slash") 
	{
		if (arguments.length > 2)
		{
			receivedMessage.channel.send(slashfic(arguments[0],arguments[1],arguments[2]));
		} else if (arguments.length > 1)
		{
			receivedMessage.channel.send(slashfic(arguments[0],arguments[1]));
		} else if (arguments.length == 1)
		{
			receivedMessage.channel.send(slashfic(arguments[0]));
		}
		else
		{
			receivedMessage.channel.send("I require a character list to do that");
		}
		return;
    } else if (normalizedCommand == "help")
	{
		receivedMessage.channel.send(fs.readFileSync('helpcommand.txt').toString());
		return;
	} else if (normalizedCommand == "feedback")
	{
		receivedMessage.channel.send(fs.readFileSync('feedback_link.txt').toString());
		return;
	}
	else
	{
		let possibleString = nani();
		if (possibleString.length > 0)
			receivedMessage.channel.send(possibleString);
		return;
	}
}


//
//
// GAY
//
//

function howgay()
{
	let randomRoll = Math.floor((Math.random() * 500) + 1);
	let gayresult = "";
	currentgay += randomRoll;
	if (randomRoll > 425)
	{
		gayresult += "critical gay! "
		randomRoll = Math.floor((Math.random() * 500) + 1);
		currentgay += randomRoll;
	}
	if (currentgay > 1000000000)
	{
		gayresult += "gay overflow! ";
		currentgay -= 1000000000;
	}
	gayresult += currentgay + " gay";
	return gayresult;
}

//
// filter the objects by whether 'this' is one of the lists it is on
//

function filterByList(object)
{
	for (let i in object.lists)
	{
		if (this == object.lists[i])
			return true;
	}
	return false;
}

//
// filter the objects by whether any lists in 'this' array is one of the lists it is on
//

function filterByManyList(object)
{
	for (let l in this)
	{
		for (let i in object.lists)
		{
			if (this[l] == object.lists[i])
				return true;
		}
	}
	return false;
}

//
// filter remove by name, where 'this' is the name
//
function removeAntonyms(object)
{
	return object.word != this;
}

//
// filter by priority, where 'this' is the priority
//

function filterByPriority(adjective)
{
	return adjective.priority == this;
}

//
// get a string from an adjective that is the word or a synonym
//

function getAdjectiveString(adjective)
{
	if (adjective.synonyms.length > 0)
		{
			let random_int = Math.floor(Math.random()*(adjective.synonyms.length+1));
			if (random_int < adjective.synonyms.length)
				return adjective.synonyms[random_int];
			else
				return adjective.word;
		}
		return adjective.word;
}

//
// get a string from an item that is its name or a synonym
//

function getItemNoun(item)
{
		if (item.synonyms.length > 0)
		{
			let random_int = Math.floor(Math.random()*(item.synonyms.length+1));
			if (random_int < item.synonyms.length)
				return item.synonyms[random_int];
			else
				return item.name;
		}
		return item.name;
}

//
// get a string from an item suffice is its base or a synonym
//

function getSuffixString(suffix)
{
		if (suffix.synonyms.length > 0)
		{
			let random_int = Math.floor(Math.random()*(suffix.synonyms.length+1));
			if (random_int < suffix.synonyms.length)
				return suffix.synonyms[random_int];
			else
				return suffix.base;
		}
		return suffix.base;
}

//
// lesbian generator
//

function nounlesbian()
{
	let noun = Math.floor(Math.random()*(item_nouns.length+monster_classes.length));
	let lesbian = "";
	
	
	if (noun < item_nouns.length)
	{
		noun = Math.floor(Math.random()*item_nouns.length);
		lesbian = getItemNoun(item_nouns[noun]) + " lesbian";
	} 
	else 
	{
		noun = Math.floor(Math.random()*monster_classes.length);
		lesbian = monster_classes[noun].single + " lesbian";
	}
	return lesbian.toLowerCase();
}

//
// lesbifriend AKA lesbian friend
//

function lesbianfriend()
{
	let tempactionlist = monster_actions.filter(filterByList,"friend");
	if (tempactionlist.length < 1)
	{
		console.log("Lesbifriend error, no valid actions");
		return null;
	}
	
	let action = Math.floor(Math.random()*tempactionlist.length);
	let lesbian = "";
	let lesbianpronouns = pronouns[Math.floor(Math.random()*pronouns.length)];
	
	lesbian = nounlesbian() + " " + tempactionlist[action].single[Math.floor(Math.random()*tempactionlist[action].single.length)];
	let position = lesbian.indexOf("\[");
	let endposition = -1;
	let monstersubstr = "";
	
	while (position != -1)
	{
		endposition = lesbian.indexOf("\]");
		monstersubstr = lesbian.substring(position+1,endposition);
		if (monstersubstr == "possessivesubject")
		{
			lesbian = lesbian.substr(0,position) + lesbianpronouns.possessivesubject + lesbian.substr(endposition+1);
		}
		else if (monstersubstr == "object")
		{
			lesbian = lesbian.substr(0,position) + lesbianpronouns.object + lesbian.substr(endposition+1);
		}
		else if (monstersubstr == "subject")
		{
			lesbian = lesbian.substr(0,position) + lesbianpronouns.subject + lesbian.substr(endposition+1);
		}
		else if (monstersubstr == "objectself")
		{
			lesbian = lesbian.substr(0,position) + lesbianpronouns.objectself + lesbian.substr(endposition+1);
		}
		else if (monstersubstr == "possessiveobject")
		{
			lesbian = lesbian.substr(0,position) + lesbianpronouns.possessiveobject + lesbian.substr(endposition+1);
		}
		else
		{
			lesbian = lesbian.substr(0,position) + lesbian.substr(endposition+1);
		}
		position = lesbian.indexOf("\[");
	}
	
	return lesbian;
}


//
//
// random number inside text
//
//

function randomNumberForText(r)
{
	let position = -1;
	let minimumNumber = parseInt(r);
	let maximumNumber = -1;
	position = r.indexOf("\-");
	
	if (position != -1)
	{
		maximumNumber = parseInt(r.substr(position+1));
	}
	
	if (isNaN(maximumNumber) || isNaN(minimumNumber) || maximumNumber == -1)
	{
		return -1;
	}
	return Math.floor(Math.random()*(maximumNumber-minimumNumber)+minimumNumber);
}

//
// filter function for the character list
//

function filterCharacterList(character)
{
	let list = character.id.substr(0,character.id.indexOf("\-"));
	return list == this;
}

//
// filter remove by id
//
function removeByID(character)
{
	return character.id != this;
}

//
//
// SLASHFIC PROMPT
//
//

function slashfic(charlist = "", pairing = "a/a", sublists = "")
{
	charlist = charlist.toLowerCase();
	let listfilter = charlist.split("\,");
	if (listfilter[0].length < 1)
	{
		return "I need at least one character list";
	}
	
	if(pairing.length > 11)
	{
		return "That is too smutty for me";
	}
	
	if(pairing.length < 3)
	{
		return "I approve of self love";
	}
	let random_int = 0;
	let random_int_start = 0;
	let slashcharacters = pairing.split("\/");
	let tempcharlist = character_list.filter(filterCharacterList,listfilter[0]);
	let tempcharacter;
	
	if (listfilter.length > 1)
	{
		tempcharlist = tempcharlist.concat(character_list.filter(filterCharacterList,listfilter[i]));
		for (let i = 1; i < listfilter.length; i++)
		{
			tempcharlist = tempcharlist.concat(character_list.filter(filterCharacterList,listfilter[i]));
		}
	}
	
	if(sublists.length > 0)
	{
		let sublistfull = sublists.split("\,");
		tempcharlist = tempcharlist.filter(filterByManyList,sublistfull);
	}
	
	
	
	if (tempcharlist.length < 1)
	{
		return "I don't have anyone in that list\/s";
	}
	
	for(let i in slashcharacters) 
	{
		random_int = Math.floor(Math.random()*tempcharlist.length);
		random_int_start = random_int;
		if (tempcharlist[random_int].gender.toString() == slashcharacters[i] || tempcharlist[random_int].gender.toString() == "a" || slashcharacters[i] == "a")
		{
			slashcharacters[i] = tempcharlist[random_int].name;
			tempcharacter = tempcharlist[random_int];
			tempcharlist.splice(random_int,1);
			for (let i = 0; i < tempcharacter.invalidpairs.length; i++)
			{
				tempcharlist = tempcharlist.filter(removeByID,tempcharacter.invalidpairs[i]);
			}
		}
		else
		{
			random_int++;
			if (random_int >= tempcharlist.length)
			{
				random_int = 0;
			}
			while (random_int != random_int_start)
			{
				if (tempcharlist[random_int].gender.toString() == slashcharacters[i] || tempcharlist[random_int].gender.toString() == "a" || slashcharacters[i] == "a")
				{
					slashcharacters[i] = tempcharlist[random_int].name;
					tempcharacter = tempcharlist[random_int];
					tempcharlist.splice(random_int,1);
					for (i = 0; i < tempcharacter.invalidpairs.length; i++)
					{
						tempcharlist = tempcharlist.filter(removeByID,tempcharacter.invalidpairs[i]);
					}
					break;
				}
				else
				{
					random_int++;
					if (random_int >= tempcharlist.length)
					{
						random_int = 0;
					}
				}
			}
			if (random_int == random_int_start)
			{
				return "Not enough suitable characters within list";
			}
		}
	}
	
	random_int = Math.floor(Math.random()*au_twists.length);
	let twist = au_twists[random_int];
	
	let position = twist.indexOf("\[");
	let endposition = -1;
	let twistsubstr = "";
	let substr_number = 0;
	
	while (position != -1)
	{
		endposition = twist.indexOf("\]");
		twistsubstr = twist.substring(position+1,endposition);
		substr_number = randomNumberForText(twistsubstr);
		if(twistsubstr == "name")
		{
			twist = twist.substr(0,position) + slashcharacters[Math.floor(Math.random()*slashcharacters.length)] + twist.substr(endposition+1);
		}
		else if (twistsubstr == "both")
		{
			if (slashcharacters.length > 2)
			{
				twist = twist.substr(0,position) + "all" + twist.substr(endposition+1);
			}
			else
			{
				twist = twist.substr(0,position) + "both" + twist.substr(endposition+1);
			}
		}
		else if (substr_number != -1)
		{
			twist = twist.substr(0,position) + substr_number.toString() + twist.substr(endposition+1);
		}
		else
		{
			twist = twist.substr(0,position) + twist.substr(endposition+1);
		}
		position = twist.indexOf("\[");
	}
	
	let characterroll = "";
	for(i in slashcharacters) 
	{
		characterroll += slashcharacters[i] + "\/";
	}
	characterroll = characterroll.slice(0,-1);
	let universe = Math.floor(Math.random()*au_list.length);
	
	return characterroll + " in " + grammarAorAn(au_list[universe].charAt(0)).toLowerCase() + " " + au_list[universe] + " " + twist;
}


//
//
// ROLL DICE
//
//

function dieRoll(r)
{
	if (r.length == 0)
	{
		return "roll what exactly?";
	}
	let position = 0;
	let totalroll = 0;
	let diceMod = 0;
	let numberOfDice = parseInt(r);
	let diceSides = 0;
	let diceSidesPre;
	let diceroll = 0;
	let stringroll = "";
	let resultString = "(";
	
	if (numberOfDice == "NaN")
	{
		return "Nani?";
	}
	
	position = r.indexOf("d");
	if (position != -1)
	{
		diceSidesPre = r.substr(position+1);
		diceSides = parseInt(r.substr(position+1));
	
		position = diceSidesPre.substr(1).indexOf("+");
		if (position != -1)
		{
			diceMod = parseInt(diceSidesPre.substr(position+1));
		}	
	
		position = diceSidesPre.substr(1).indexOf("-");
		if (position != -1)
		{
			diceMod = parseInt(diceSidesPre.substr(position));
		}
	
		if(!isNaN(diceSides) && ((MAX_DICE_ROLL / diceSides) < numberOfDice))
		{
			return "excuse me, no";
		}
	}
	
	
	for (let i = 0; i < numberOfDice; i++)
	{
		if (isNaN(diceSides))
		{
			diceroll = Math.floor((Math.random() * diceSidesPre.length));
			stringroll += diceSidesPre.charAt(diceroll);
			if (stringroll.length == 99)
				break;
		}
		else
		{
			diceroll = Math.floor((Math.random() * diceSides) + 1);
			totalroll += diceroll;
			if (i+1 < numberOfDice)
				resultString += diceroll + " + ";
			else
			{
				if (diceMod < 0)
					resultString += diceroll +  " *- " + Math.abs(diceMod) + "*)";
				else if (diceMod > 0)
					resultString += diceroll +  " *+ " + Math.abs(diceMod) + "*)";
				else
					resultString += diceroll + ")";
			}
			
		}
	}
	if (stringroll.length > 0)
	{
		return stringroll;
	}
	
	totalroll += diceMod;
	resultString = "**" + totalroll + "** " + resultString;
	if (resultString.length > 2000)
		return totalroll + ", I will not be fielding any questions, thank you."
	if (numberOfDice < 2 && diceMod == 0)
		return totalroll;
	return resultString;
}

//
//
// GRAMMAR FUNCTIONS HERE
//
//

//
// Return whether A or An is necessary, always capitalised

function grammarAorAn(c)
{
	c = c.toLowerCase();
	if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u")
		return "An";
	return "A";
}

//
// capitalise the first letter in the string

function grammarCapitalFirstLetter(c)
{
	c = c.substring(0,1).toUpperCase() + c.substring(1);
	return c;
}

//
//
// GENERATOR BASE FUNCTIONS HERE
//
//

function getRandomMonster(list)
{
	if (list.length < 1)
	{
		console.log("Random Monster error, no list given");
		return null;
	}
	let tempmonsterlist = monster_nouns.filter(filterByList,list)
	
	if (tempmonsterlist.length < 1)
	{
		console.log("Random Monster error, no valid monster list");
		return null;
	}
	
	let random_int = Math.floor(Math.random()*(tempmonsterlist.length));
	return tempmonsterlist[random_int];
}

//
// Hybrids to be revisited
//

//
// Costumed Monsters to be revisited

//
//Generate basic monster
//

function generateMonster(list)
{
	let monster = getRandomMonster(list);
	let tempadjectivelist = monster_adjectives.filter(filterByList,list);
	if (tempadjectivelist.length < 1)
	{
		console.log("Generate Monster error, no valid adjectives");
		return null;
	}
	
	let current_adjectives = [];
	let random_int = Math.floor((Math.random()*tempadjectivelist.length));
	let numberofadjectives = Math.floor((Math.random()*5)+(Math.random()*5))-3;
	let current_action = monster_actions[Math.floor((Math.random()*monster_actions.length))];
	
	for (i = 0; i < numberofadjectives; i++)
	{
		current_adjectives[i] = tempadjectivelist[random_int];
		tempadjectivelist.splice(random_int,1);
		for (a in current_adjectives[i].antonyms)
		{
			tempadjectivelist = tempadjectivelist.filter(removeAntonyms,current_adjectives[i].antonyms[a]);
		}
		random_int = Math.floor((Math.random()*tempadjectivelist.length));
	}
	
	let sorted_adjectives = []
	
	for (i = 0; i < 10 && sorted_adjectives.length < current_adjectives.length; i++)
	{
		sorted_adjectives = sorted_adjectives.concat(current_adjectives.filter(filterByPriority,i));
	}
	
	let monster_string = "";
	for (a in sorted_adjectives)
	{
		monster_string += getAdjectiveString(sorted_adjectives[a]) + " ";
	}
	monster_string += monster.single;
	
	// this will begin and replace all the [special text] in a base monster noun with appropriate text; right now this is only to make undead more descriptive
	let position = monster_string.indexOf("\[");
	let endposition = -1;
	let monstersubstr = "";
	
	while (position != -1)
	{
		endposition = monster_string.indexOf("\]");
		monstersubstr = monster_string.substring(position+1,endposition);
		monster_string = monster_string.substr(0,position) + getRandomMonster(monstersubstr).single + monster_string.substr(endposition+1);
		position = monster_string.indexOf("\[");
	}
	
	
	
	return monster_string;
}

//
// monster doing actions!
//

function generateActiveMonster(list)
{
	let monster_string = generateMonster(list);
	if (monster_string == null)
	{
		console.log("Generate Active Monster error, monster was null");
		return null;
	}
	
	let tempactionlist = monster_actions.filter(filterByList,list);
	if (tempactionlist.length < 1)
	{
		console.log("Generate Monster error, no valid actions");
		return null;
	}
	
	let action = Math.floor(Math.random()*tempactionlist.length);
	
	let monster_pronouns = pronouns[Math.floor(Math.random()*pronouns.length)];
	
	// this will replace all of the [special text] in the monster action with appropriate text; right now this is just pronouns
	monster_string += " " + tempactionlist[action].single[Math.floor(Math.random()*tempactionlist[action].single.length)];
	let position = monster_string.indexOf("\[");
	let endposition = -1;
	let monstersubstr = "";
	
	while (position != -1)
	{
		endposition = monster_string.indexOf("\]");
		monstersubstr = monster_string.substring(position+1,endposition);
		if (monstersubstr == "possessivesubject")
		{
			monster_string = monster_string.substr(0,position) + monster_pronouns.possessivesubject + monster_string.substr(endposition+1);
		}
		else if (monstersubstr == "object")
		{
			monster_string = monster_string.substr(0,position) + monster_pronouns.object + monster_string.substr(endposition+1);
		}
		else if (monstersubstr == "subject")
		{
			monster_string = monster_string.substr(0,position) + monster_pronouns.subject + monster_string.substr(endposition+1);
		}
		else if (monstersubstr == "objectself")
		{
			monster_string = monster_string.substr(0,position) + monster_pronouns.objectself + monster_string.substr(endposition+1);
		}
		else if (monstersubstr == "possessiveobject")
		{
			monster_string = monster_string.substr(0,position) + monster_pronouns.possessiveobject + monster_string.substr(endposition+1);
		}
		else
		{
			monster_string = monster_string.substr(0,position) + monster_string.substr(endposition+1);
		}
		position = monster_string.indexOf("\[");
	}
	
	monster_string = grammarAorAn(monster_string.charAt(0)) + " " + monster_string;
	
	return grammarCapitalFirstLetter(monster_string);;
}

//
// revisit Groups of monsters

//
// Generate an artifact, an item

function generateArtifact()
{
	let random_int = Math.floor((Math.random()*item_nouns.length));
	let baseitem = item_nouns[random_int];
	let tempprefixlist = item_prefixes.filter(filterByList,baseitem.type);
	let tempsuffixlist = item_suffixes.filter(filterByList,baseitem.type);
	let baserand = Math.random();
	let item_string = "";
	
	random_int = Math.floor((Math.random()*tempprefixlist.length));
	
	let prefixstring = tempprefixlist[random_int].word;
	
	random_int = Math.floor((Math.random()*tempsuffixlist.length));
	
	let suffixstring = getSuffixString(tempsuffixlist[random_int]);
	
	if (baserand < 0.67)
	{
		item_string = prefixstring + " " + getItemNoun(baseitem) + " " + suffixstring;
	}
	else if (baserand < 0.835)
	{
		item_string = prefixstring + " " + getItemNoun(baseitem);
	}
	else
	{
		item_string = getItemNoun(baseitem) + " " + suffixstring;
	}
	
	return item_string;
}

//
// Generate a special boss monster

function generateBoss() 
{
	let boss_string = "";
    let monster_string = generateMonster("boss");
	let given_name = monster_names[Math.floor((Math.random()*monster_names.length))];
	let surname = monster_surnames[Math.floor((Math.random()*monster_surnames.length))];
	let monster_titleP = title_prefixes[Math.floor((Math.random()*title_prefixes.length))];
	let monster_titleS = title_suffixes[Math.floor((Math.random()*title_suffixes.length))]; //this is a string
	let baserand = Math.random();
	let monster_pronouns = pronouns[Math.floor(Math.random()*pronouns.length)]; 
	
	let numberofitems = Math.floor((Math.random()*4)+(Math.random()*5))-2;
	let items = [];
	
	for (let i = 0; i < numberofitems; i++)
	{
		items.push(generateArtifact());
	}
	
	if (monster_titleP.singular && baserand < 0.33) // full title
	{
		boss_string +=  monster_titleP.title + " " + given_name + " " + surname + ", " + grammarAorAn(monster_string.charAt(0)).toLowerCase() + " " + monster_string;
	}
	else
	{
		boss_string += given_name + " " + surname + ", the " + monster_titleP.title + " " + monster_titleP.connective + " " + monster_titleS + ", " + grammarAorAn(monster_string.charAt(0)).toLowerCase() + " " + monster_string;
	}
	
	if (items.length > 0)
	{
		boss_string += " with " + monster_pronouns.possessivesubject + " " + items[0];
		for (let i = 1; i < items.length; i++)
		{
			if (i == (items.length -1))
			{
				boss_string += ", and " + items[i];
			}
			else
			{
				boss_string += ", " +  items[i];
			}
		}
	}
	
	return grammarCapitalFirstLetter(boss_string);;
}

//
//
// nani!?
//
//

function nani() {
	let baserand = Math.random();
	if (baserand < 0.89)
		return "";
	else if (baserand < 0.93)
		return "!?";
	else if (baserand < 0.97)
		return "!!??";
	else
		return "!?!?";
}

//
// handle errors??? no

client.on('error', console.error);

//
// engage ALLIDROID

client.login(logintoken); //allidroid logon