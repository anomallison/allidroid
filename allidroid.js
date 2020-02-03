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
//var group_types = JSON.parse(fs.readFileSync('group_type_list.json'));

//var costume_material = JSON.parse(fs.readFileSync('costume_material_list.json'));

var monster_names = JSON.parse(fs.readFileSync('name_given_list.json'));
var monster_surnames = JSON.parse(fs.readFileSync('name_surname_list.json'));
var title_prefixes = JSON.parse(fs.readFileSync('title_prefix_list.json'));
var title_suffixes = JSON.parse(fs.readFileSync('title_suffix_list.json'));
var monster_classes = JSON.parse(fs.readFileSync('class_list.json'));
var monster_descriptors = JSON.parse(fs.readFileSync('boss_descriptors.json'));

//artifact files
var item_nouns = JSON.parse(fs.readFileSync('item_list.json'));
var item_suffixes = JSON.parse(fs.readFileSync('item_suffix_list.json'));
var item_prefixes = JSON.parse(fs.readFileSync('item_prefix_list.json'));
var item_sorting = JSON.parse(fs.readFileSync('item_sorting.json'));
var item_slotlimits = JSON.parse(fs.readFileSync('item_slotlimits.json'));

//slashfic prompt lists
var au_list = JSON.parse(fs.readFileSync('au_list.json'));
var au_twists = JSON.parse(fs.readFileSync('au_twists.json'));
var character_list = JSON.parse(fs.readFileSync('characters_list.json'));

//weird princess files
var weirdprincess_types = JSON.parse(fs.readFileSync('weirdprincess_types.json'));
var weirdprincess_colours = JSON.parse(fs.readFileSync('weirdprincess_colours.json'));
var weirdprincess_appearances = JSON.parse(fs.readFileSync('weirdprincess_appearances.json'));
var weirdprincess_clothings = JSON.parse(fs.readFileSync('weirdprincess_clothings.json'));
var weirdprincess_desires = JSON.parse(fs.readFileSync('weirdprincess_desires.json'));
var weirdprincess_vulnerabilities = JSON.parse(fs.readFileSync('weirdprincess_vulnerabilities.json'));
var weirdprincess_authority = JSON.parse(fs.readFileSync('weirdprincess_authority.json'));
var weirdprincess_carriages = JSON.parse(fs.readFileSync('weirdprincess_carriages.json'));
var weirdprincess_retinues = JSON.parse(fs.readFileSync('weirdprincess_retinues.json'));
var weirdprincess_retinuetraits = JSON.parse(fs.readFileSync('weirdprincess_retinuetraits.json'));

//phoneme files
var phonemes_english = JSON.parse(fs.readFileSync('phonemes_english.json'));

//gacha file
var gacha_reveals = JSON.parse(fs.readFileSync('gacha_reveals.json'));
var gacha_comments = JSON.parse(fs.readFileSync('gacha_comments.json'));

//how files
var how_levels = JSON.parse(fs.readFileSync('how_levels.json'));
var how_prefixes = JSON.parse(fs.readFileSync('how_prefixes.json'));
var how_suffixes = JSON.parse(fs.readFileSync('how_suffixes.json'));

//yellatpeople fileSize
var yell_at_messages = JSON.parse(fs.readFileSync('yellat_messages.json'));

//
var logintoken = fs.readFileSync('token.txt').toString();


//
// the array of reminders, to allow reminders to be removed/destroyed (just in case)
var reminder_array = [];
var reminder_idcounter = 0;

//
//
var yell_at_people_ids = [];
var yell_at_people_timers = [];

//
//
// extremely important Gay variable
//

var currentgay = 0;

const MAX_DICE_ROLL = 999999999;



//
//
// MESSAGE RECEIVED
//
//

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
	
	if (receivedMessage.guild != null) { // Don't respond to banned users in channels
        let tempmember = receivedMessage.guild.members.get(receivedMessage.author.id);
		if (tempmember == null || hasName(tempmember.roles,'Bot Banned'))
		{
			return
		}
    }
	
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
	
	if (yell_at_people_ids.includes(receivedMessage.author.id)) // yell at the people who asked for it
	{
		goawayscram(receivedMessage)
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
    } else if (normalizedCommand == "slash") 
	{
		output = slashfic(arguments[0],arguments[1],arguments[2]);
		if (output == null)
		{
			console.log("failed command: slash");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "help")
	{
		receivedMessage.channel.send(fs.readFileSync('helpcommand.txt').toString());
		return;
	} else if (normalizedCommand == "feedback")
	{
		receivedMessage.channel.send(fs.readFileSync('feedback_link.txt').toString());
		return;
	} else if (normalizedCommand == "princess") 
	{
		output = generateWeirdPrincess();
		if (output == null)
		{
			console.log("failed command: princess");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "generatename") 
	{
		if (arguments.length > 1)
		{
			output = generatePhonemeName(parseInt(arguments[0]), parseInt(arguments[1]));
		} else if (arguments.length == 1)
		{
			output = generatePhonemeName(parseInt(arguments[0]));
		} else
		{
			output = generatePhonemeName();
		}
		
		if (output == null)
		{
			console.log("failed command: generatename");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "gacha") 
	{
		output = playGacha(arguments[0]);
		
		if (output == null)
		{
			console.log("failed command: gacha");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "how") 
	{
		if (arguments[0] == "much")
		{
			output = howMuch(arguments);
		} else
		{
			output = howRating(arguments);
		}
		
		
		if (output == null)
		{
			console.log("failed command: how");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "remindme") 
	{
		if (arguments[0] != null && arguments[0].toLowerCase() == "in")
		{
			output = setReminder(arguments[1], arguments[2], argumentsbacktostring(arguments,3), receivedMessage.channel.id, receivedMessage.author);
		} else
		{
			output = setReminder(arguments[0], arguments[1], argumentsbacktostring(arguments,2), receivedMessage.channel.id, receivedMessage.author);
		}
		
		if (output == null)
		{
			console.log("failed command: setreminder");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "removereminder") 
	{
		output = removeReminder(arguments[0]);
		
		if (output == null)
		{
			console.log("failed command: removereminder");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else if (output == true)
		{
			receivedMessage.channel.send("The reminder has been removed!");
			return;
		} else if (output == false)
		{
			receivedMessage.channel.send("No reminder with that id was found");
			return;
		}
    } else if (normalizedCommand == "remindercount") 
	{
		receivedMessage.channel.send("There are " + reminder_array.length + " reminders currently");
		return;
		
    } else if (normalizedCommand == "yellatme") 
	{
		if (arguments[0] != null && arguments[0].toLowerCase() == "for")
		{
			output = yellatperson(receivedMessage.author.id, arguments[1]);
		} else
		{
			output = yellatperson(receivedMessage.author.id, arguments[0]);
		}
		
		if (output == null)
		{
			console.log("failed command: yellatme");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "plznoyell") 
	{
		output = stopyellingatperson(receivedMessage.author.id);
		
		if (output == null)
		{
			console.log("failed command: plznoyell");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		if (output == true)
		{
			receivedMessage.channel.send("okay, I no yell at you now");
		} 
		else
		{
			receivedMessage.channel.send("but I was no yell at you ;_;");
		}
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
	let randomRoll = Math.floor((Math.random() * 475) + 26);
	let gayresult = "";
	currentgay += randomRoll;
	if (randomRoll > 421)
	{
		gayresult += "critical gay! "
		randomRoll = Math.floor((Math.random() * 4000) + 1001);
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
// yell at person
//

function goawayscram(message)
{
	let goawaymessage = yell_at_messages[Math.floor(Math.random()*yell_at_messages.length)];
	while (goawaymessage.includes("[user]"))
	{
		goawaymessage = goawaymessage.replace("[user]", "<@" + message.author.id + ">");
	}
	
	message.channel.send(goawaymessage);
}

//
// add person to yell at
//

function yellatperson(personid,delay)
{
	if (yell_at_people_ids.includes(personid))
	{
		return "You\'re already being yelled at. Rah! Why you talking! Bad!";
	}
	
	if (yell_at_people_ids.length > 9999)
	{
		return "I CAN\'T YELL AT ANY MORE PEOPLE, AAAHH!";
	}
	
	let millisecondstounit = 60000; // it only uses minutes to Minutes
	
	if (delay == null)
	{
		//console.log("Set Reminder error, delay or message are null");
		return "Invalid arguments, I need a delay (in minutes) and a message";
	}
	
	let parsedDelay = parseInt(delay);
	
	if ( isNaN(parsedDelay) )
	{
		return "Invalid arguments, the delay must be a number";
	}
	
	if (parsedDelay < 1 || parsedDelay > 1440)
	{
		//console.log("Set Reminder error, delay too short or too long");
		return "Invalid delay, it must be between 1 and 1440 (24 hours)";
	}
	
	yell_at_people_ids.push(personid);
	yell_at_people_timers.push(setTimeout(stopyellingatperson.bind(this,personid),parsedDelay*millisecondstounit));
	return "You will now be yelled at when I see you message in discord in the next " + delay + " minutes.";
}

//
// remove person to yell at
//

function stopyellingatperson(personid)
{
	for (let i = 0; i < yell_at_people_ids.length; i++)
	{
		if (yell_at_people_ids[i] == personid)
		{
			clearTimeout(yell_at_people_timers[i]);
			yell_at_people_ids.splice(i,1);
			yell_at_people_timers.splice(i,1);
			return true; //yelling at stopped
		}
	}
	return false; //yelling will continue
}

//
// Reminder
//

function setReminder(delay, units, message, target_channel, sender)
{
	if (delay == null)
	{
		return "I require a delay to do that";
	}
	if (units == null)
	{
		return "I require a unit of measurement for the delay to do that";
	}
	if (message == null)
	{
		message = "<@" + sender.id + ">";
	}
	
	if (reminder_array.length > 50000)
	{
		return "Sorry, I am at capacity for reminders";
	}
	
	units = units.toLowerCase();
	let millisecondstounit = 60000; // default to Minutes
	
	if (units.charAt(0) == 'h')
	{
		millisecondstounit = 3600000;
	} else if (units.charAt(0) == 'm')
	{
		millisecondstounit = 60000;
	} else if (units.charAt(0) == 's')
	{
		millisecondstounit = 1000;
		
	} else
	{
		//console.log("Set Reminder error, units invalid");
		return "Invalid arguments, the units must be seconds, minutes, or hours, or acceptable shorthand for those";
	}
	
	if (delay == null || message == null)
	{
		//console.log("Set Reminder error, delay or message are null");
		return "Invalid arguments, I need a delay (in minutes) and a message";
	}
	
	let parsedDelay = parseInt(delay);
	
	if ( isNaN(parsedDelay) )
	{
		return "Invalid arguments, the delay must be a number";
	}
	
	if (parsedDelay < 1 || parsedDelay > 2,520,000)
	{
		//console.log("Set Reminder error, delay too short or too long");
		return "Invalid delay, it must be more than 0, and 7 days";
	}
	
	if (message.length < 1)
	{
		//console.log("Set Reminder error, message empty");
		return "Invalid message, a reminder needs a message of at least 1 character";
	}
	if (target_channel == null)
	{
		console.log("Set Reminder error, target_channel is null");
		return null;
	}
	if (sender == null)
	{
		console.log("Set Reminder error, sender is null");
		return null;
	}
	
	let timeridstuff = Date.now().toString();
	if (reminder_idcounter < 10)
	{
		newid = "" + sender.username + timeridstuff.substr(-4) + "0" + reminder_idcounter.toString();
	}
	else
	{
		newid = "" + sender.username + timeridstuff.substr(-4) + reminder_idcounter.toString();
	}
	reminder_idcounter++;
	if (reminder_idcounter > 99)
	{
		reminder_idcounter = 0;
	}
	
	reminder_array.push({
		id: newid,
		when: Date.now()+parsedDelay*millisecondstounit,
		timer: setTimeout(sendReminder.bind(this,message,target_channel,newid),parsedDelay*millisecondstounit)
	});
	return "Reminder set! The reminderid for this reminder is " + newid;
}

function sendReminder(message, target_channel, reminderid)
{
	//client.channels.get(target_channel).send(message);
	if (target_channel == null)
	{
		console.log("sendReminder failure: target_channel is null")
		return;
	}
	client.channels.get(target_channel).send(message);
	//target_channel.send(message);
	if (reminderid != null) //remove reminder only if its an actual reminder
	{
		console.log("Reminder \"" + reminderid + "\" sent");
		removeReminder(reminderid);
	}
}

function removeReminder(reminderid)
{
	for (let i = 0; i < reminder_array.length; i++)
	{
		if (reminder_array[i].id == reminderid)
		{
			clearTimeout(reminder_array[i].timer);
			reminder_array.splice(i,1);
			console.log("Reminder \"" + reminderid + "\" removed");
			return true; //reminder removed
		}
	}
	return false; //nothing removed
}

//
// Reconstitute arguments to string
//

function argumentsbacktostring(target, start, end = -1)
{
	if (end == -1)
	{
		end = target.length;
	}
	if (start > end)
	{
		console.log("argumentsbacktostring error, start greater than end");
		return null;
	}
	let target_string = target[start];
	for (let i = start+1; i < end; i++)
	{
		target_string += " " + target[i];
	}
	
	return target_string;
}

//
// Fomerly How good is, now is many things
//

function howRating(sentence)
{
	let conjunctionloc = -1;
	let adjective = "";
	let target = "";
	let conjunction = "";
	for (let i = 0; i < sentence.length; i++)
	{
		if (sentence[i] == "is" || sentence[i] == "are")
		{
			conjunctionloc = i;
		}
	}
	
	adjective = argumentsbacktostring(sentence,0,conjunctionloc);
	target = argumentsbacktostring(sentence,conjunctionloc+1);
	conjunction = sentence[conjunctionloc];
	
	if (adjective == null || adjective.length < 1)
	{
		return "how what?";
	}
	if (conjunction == null || conjunction.length < 1)
	{
		return "how " + adjective + " what?";
	}
	if (target == null || target.length < 1)
	{
		return "how " + adjective + " " + conjunction + " what?";
	}
	let baserand = Math.random();
	let random_level = how_levels[Math.floor(Math.random()*how_levels.length)];
	let suffix = how_suffixes[Math.floor(Math.random()*how_suffixes.length)];
	
	let temp_prefix_arr = how_prefixes.slice();
	
	let random_prefix = Math.floor(Math.random()*temp_prefix_arr.length);
	let prefix_count = Math.floor(Math.random()*3)+1;
	let prefix = temp_prefix_arr[random_prefix];
	
	for (let i = 1; i < prefix_count && temp_prefix_arr.length > 1; i++)
	{
		temp_prefix_arr.splice(random_prefix,1);
		random_prefix = Math.floor(Math.random()*temp_prefix_arr.length);
		prefix += " " + temp_prefix_arr[random_prefix];
	}
	
	let endchar = target.charAt(target.length-1);
	let slicedchar = 0;
	while ((isAlphaNumericChar(endchar)) && slicedchar < target.length)
	{
		slicedchar++;
		endchar = target.charAt(target.length-(1+slicedchar));
	}
	if (slicedchar > 0)
	{
		target = target.slice(0,target.length-slicedchar);
	}
	
	let how_full = target + " " + conjunction + " " + prefix + " " + random_level + ". " + grammarCapitalFirstLetter(suffix) + ".";
	
	let position = how_full.indexOf("\[");
	let endposition = -1;
	let howsubstr = "";
	
	while (position != -1)
	{
		endposition = how_full.indexOf("\]");
		howsubstr = how_full.substring(position+1,endposition);
		substr_number = randomNumberForText(howsubstr);
		if (howsubstr == "adjective")
		{
			how_full = how_full.substr(0,position) + adjective + how_full.substr(endposition+1);
		}
		else if (howsubstr == "conjunction")
		{
			how_full = how_full.substr(0,position) + conjunction + how_full.substr(endposition+1);
		}
		else if (howsubstr == "target")
		{
			how_full = how_full.substr(0,position) + target + how_full.substr(endposition+1);
		}
		else if (substr_number != false)
		{
			how_full = how_full.substr(0,position) + substr_number.toString() + how_full.substr(endposition+1);
		}
		else
		{
			how_full = how_full.substr(0,position) + how_full.substr(endposition+1);
		}
		position = how_full.indexOf("\[");
	}
	
	return how_full;
}

function howMuch(sentence)
{
	let random_level = how_levels[Math.floor(Math.random()*how_levels.length)];
	
	let temp_prefix_arr = how_prefixes.slice();
	
	let random_prefix = Math.floor(Math.random()*temp_prefix_arr.length);
	let prefix_count = Math.floor(Math.random()*4)+1;
	let prefix = temp_prefix_arr[random_prefix];
	
	for (let i = 1; i < prefix_count && temp_prefix_arr.length > 1; i++)
	{
		temp_prefix_arr.splice(random_prefix,1);
		random_prefix = Math.floor(Math.random()*temp_prefix_arr.length);
		prefix += " " + temp_prefix_arr[random_prefix];
	}
	
	let how_full = prefix + " " + random_level + ".";
	
	let position = how_full.indexOf("\[");
	let endposition = -1;
	let howsubstr = "";
	
	while (position != -1)
	{
		endposition = how_full.indexOf("\]");
		howsubstr = how_full.substring(position+1,endposition);
		substr_number = randomNumberForText(howsubstr);
		if (howsubstr == "adjective")
		{
			how_full = how_full.substr(0,position) + "much" + how_full.substr(endposition+1);
		}
		else
		{
			how_full = how_full.substr(0,position) + how_full.substr(endposition+1);
		}
		position = how_full.indexOf("\[");
	}
	
	return how_full;
}

//
// finds first instance of a string in an array of strings
//

function hasString(s)
{
	return s == this;
}

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
// filter the objects by whether 'this' is one of the slots on this object
//

function filterBySlot(object)
{
	for (let i in object.slots)
	{
		if (this == object.slots[i])
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
// filter remove strings, where 'this' is the string
//
function removeAllStringFromArray(object)
{
	return object != this;
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
// get a string from an object that is its name or a synonym
//

function getObjectName(item)
{
	if (item == null)
	{
		return null;
	}
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
		lesbian = getObjectName(item_nouns[noun]) + " lesbian";
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
		return false;omNum
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
// given a character, determine if the character is suitable 
//
function isCharacterSuitable(character)
{
	desiredcharacter = {
		gender: this.gender,
		id: this.id,
		lists: this.lists };
		
	if (this.gender == null)
	{
		desiredcharacter.gender = a;
	}
	if (this.id == null)
	{
		desiredcharacter.id = "any";
	}
	if (this.lists == null)
	{
		lists = [];
	}
	
	characterlist = character.id.substr(0,character.id.indexOf("\-"));
	//console.log("compared character [id:" + character.id + "; name: " + character.name + "; gender: " + character.gender);
	if ((desiredcharacter.gender == character.gender || desiredcharacter.gender == "a" || character.gender == "a") && (desiredcharacter.id == "any" || characterlist == desiredcharacter.id))
	{
		
		if (desiredcharacter.lists.length == 0)
		{
			return true;
		}
		else
		{
			for (let i in desiredcharacter.lists)
			{
				if (character.lists.includes(desiredcharacter.lists[i]))
				{
					return true;
				}
			}
		}
	}
	return false;
}

//
//
// SLASHFIC PROMPT
//
//

function slashfic(pairing = "a/a", charlist = "any", sublists = "")
{
	if (charlist == null)
	{
		return "I require at least one character list, or 'any' as a keyword"
	}
	charlist = charlist.toLowerCase();
	let listfilter = charlist.split("\,");
	if (listfilter[0].length < 1)
	{
		return "I need at least one character list";
	}
	
	let random_int = 0;
	let random_int_start = 0;
	let slashcharacters = pairing.split("\/");
	let tempcharlist = [];
	let tempcharacter;
	
	if (charlist == "any")
	{
		tempcharlist = character_list.slice();
	}
	else
	{
		tempcharlist = character_list.filter(filterCharacterList,listfilter[0]);
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
	
	let desiredcharacterlist = "";
	let desiredcharactersublists = [];
	let desiredcharactergender = "a";
	let desiredcharacterdeconstructed = [];
	
	let subtemplist;
	
	for(let i in slashcharacters) 
	{
		desiredcharacterdeconstructed = slashcharacters[i].split(";");
		if (desiredcharacterdeconstructed.length == 0)
		{
			console.log("slashfic error, invalid character specification");
			return null;
		}
		else
		{
			desiredcharactergender = desiredcharacterdeconstructed[0];
			desiredcharacterlist = desiredcharacterdeconstructed[1];
			if (desiredcharacterdeconstructed[2] != null)
			{
				desiredcharactersublists = desiredcharacterdeconstructed[2].split(",");
			}
		}
		
		subtemplist = tempcharlist.filter(isCharacterSuitable,{gender: desiredcharactergender,id: desiredcharacterlist, lists: desiredcharactersublists})
		
		if (subtemplist.length == 0)
		{
			return "Not enough suitable characters within list";
		}
		
		random_int = Math.floor(Math.random()*subtemplist.length);
		random_int_start = random_int;
		if (charlist == "any")
		{
			slashcharacters[i] = subtemplist[random_int].name + " (" + subtemplist[random_int].id.substr(0,subtemplist[random_int].id.indexOf("\-")).toUpperCase() + ")";
		}
		else
		{
			slashcharacters[i] = subtemplist[random_int].name;
		}
		tempcharacter = subtemplist[random_int];
		tempcharlist = tempcharlist.filter(removeByID,tempcharacter.id);
		for (let i = 0; i < tempcharacter.invalidpairs.length; i++)
		{
			tempcharlist = tempcharlist.filter(removeByID,tempcharacter.invalidpairs[i]);
		}
	}
	
	random_int = Math.floor(Math.random()*au_twists.length);
	let twist = au_twists[random_int];
	
	let position = twist.indexOf("\[");
	let endposition = -1;
	let twistsubstr = "";
	let twistsubstrsubnumber = -1;
	let substr_number = 0;
	let randomcharacternames = [];
	let tempcharnames = slashcharacters.slice();
	
	for (let i in slashcharacters)
	{
		random_int = Math.floor(Math.random()*tempcharnames.length);
		randomcharacternames.push(tempcharnames[random_int]);
		tempcharnames.splice(random_int,1);
	}
	
	while (position != -1)
	{
		endposition = twist.indexOf("\]");
		twistsubstr = twist.substring(position+1,endposition);
		substr_number = randomNumberForText(twistsubstr);
		if(twistsubstr == "name")
		{
			twist = twist.substr(0,position) + slashcharacters[Math.floor(Math.random()*slashcharacters.length)] + twist.substr(endposition+1);
		}
		else if (twistsubstr.substr(0,4) == "name")
		{
			twistsubstrsubnumber = parseInt(twistsubstr.substr(4));
			if (!isNaN(twistsubstrsubnumber) && twistsubstrsubnumber < randomcharacternames.length)
			{
				twist = twist.substr(0,position) + randomcharacternames[twistsubstrsubnumber%randomcharacternames.length] + twist.substr(endposition+1);
			}
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
		else if (substr_number != false)
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
	
	let fullprompt = characterroll + " in " + grammarAorAn(au_list[universe].charAt(0)).toLowerCase() + " " + au_list[universe] + twist;
	
	if (fullprompt.length > 2000)
	{
		return "that is too smutty for me";
	}
	
	return fullprompt;
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

function isAlphaNumericChar(c)
{
	return /[^a-zA-Z0-9]/.test(c);
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

function generateMonster(list, diesidesA = 5, diesidesB = 5, diemodifier = -3)
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
	let numberofadjectives = Math.floor((Math.random()*diesidesA)+(Math.random()*diesidesB))+diemodifier;
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
// Gacha rarity

function getGachaRarity(randomRoll)
{
	let rarity = "Common";
	if (randomRoll < 0.02)
	{
		rarity = "Super Hyper Ultra Legendary";
	}
	else if (randomRoll < 0.06)
	{
		rarity = "Hyper Legendary";
	}
	else if (randomRoll < 0.11)
	{
		rarity = "Legendary";
	}
	else if (randomRoll < 0.17)
	{
		rarity = "Super Rare";
	}
	else if (randomRoll < 0.24)
	{
		rarity = "Rare";
	}
	else if (randomRoll < 0.32)
	{
		rarity = "Less Common";
	}
	else if (randomRoll < 0.41)
	{
		rarity = "Crappy Common";
	}
	else if (randomRoll < 0.51)
	{
		rarity = "Uncommon";
	}
	else if (randomRoll < 0.62)
	{
		rarity = "Worse Than Trash";
	}
	else if (randomRoll < 0.74)
	{
		rarity = "Less Common";
	}
	else if (randomRoll < 0.87)
	{
		rarity = "Trash";
	}
	return rarity;
}

//
//
// Gacha command

function playGacha(amount)
{
	if (amount == null || amount < 1)
	{
		amount = 1;
	}
	if (amount > 12)
	{
		amount = 12;
	}
	let baserand = Math.random();
	let rarity = getGachaRarity(baserand);
	let hero_base = generateMonster("gacha",2,1,1);
	let hero_class = monster_classes[Math.floor(Math.random()*monster_classes.length)].single; 
	
	let hero_name = generateBossName(false);
	//let hero_pronouns = pronouns[Math.floor(Math.random()*pronouns.length)]; 
	
	let fullreturnstring = "[" + rarity + "] " + hero_name + ", the " + hero_base + " " + hero_class;
	
	for (let i = 1; i < amount; i++)
	{
		baserand = Math.random();
		rarity = getGachaRarity(baserand);
		hero_base = generateMonster("gacha",2,1,1);
		hero_class = monster_classes[Math.floor(Math.random()*monster_classes.length)].single;
		hero_name = generateBossName(false);
		fullreturnstring += "\n[" + rarity + "] " + hero_name + ", the " + hero_base + " " + hero_class;
	}
	
	return fullreturnstring;
}

//
// Generate boss name

function generateBossName(with_title = true, short_title = false)
{
	let given_name = monster_names[Math.floor((Math.random()*monster_names.length))];
	let surname = monster_surnames[Math.floor((Math.random()*monster_surnames.length))];
	
	if (!with_title)
	{
		return given_name + " " + surname;
	}
	
	let monster_titleS = title_suffixes[Math.floor((Math.random()*title_suffixes.length))]; 
	let monster_titleP = title_prefixes[Math.floor((Math.random()*title_prefixes.length))];
	while (short_title && !monster_titleP.singular)
	{
		monster_titleP = title_prefixes[Math.floor((Math.random()*title_prefixes.length))];
	}
	
	let name_string = "";
	
	let baserand = Math.random();
	if (short_title || (monster_titleP.singular && baserand < 0.33)) // full title
	{
		name_string +=  monster_titleP.title + " " + given_name + " " + surname;
	}
	else
	{
		name_string += given_name + " " + surname + ", the " + monster_titleP.title + " " + monster_titleP.connective + " " + monster_titleS;
	}
	
	return name_string;
}

//
// Gets the full list of items from an item, ie the name and the synonyms
//

function getActualList(object)
{
	if (object == null)
	{
		return null;
	}
	let temparr = [];
	
	for (let i = 0; i < object.synonyms.length; i++)
	{
		temparr.push(object.synonyms[i]);
	}
	
	temparr.push(object.name);
	
	return temparr;
}

//
// Gets the full list of items from an item, ie the name and the synonyms
//

function getItemList(object)
{
	if (object == null)
	{
		return null;
	}
	let temparr = [];
	
	for (let i = 0; i < object.synonyms.length; i++)
	{
		temparr.push({item:object.synonyms[i], type:object.type});
	}
	
	temparr.push({item:object.name, type:object.type});
	
	return temparr;
}

//
// Generate an artifact, an item

function generateArtifact(slot,favoureditems)
{
	let itempool = item_nouns.slice();
	let fullpool = [];
	
	if (favoureditems != null && favoureditems.length > 0)
	{
		for (let i = 0; i < favoureditems.length; i++)
		{
			itempool = itempool.concat(item_nouns.filter(filterByList,favoureditems[i]));
		}
	}
	itempool = itempool.filter(filterBySlot,slot);
	
	for (let i = 0; i < itempool.length; i++)
	{
		fullpool = fullpool.concat(getItemList(itempool[i]));
	}
	
	return fullpool[Math.floor((Math.random()*fullpool.length))];
}

//
// get a random part description for a part
//

function getPartDesciptor(part)
{
	descriptorlist = monster_descriptors.filter(filterByList,part);
	if (descriptorlist.length < 1)
	{
		return null;
	}
	descriptor = descriptorlist[Math.floor(Math.random()*(descriptorlist.length))];
	
	return descriptor.text;
}

//
// takes a type and an affix and finds an appropriate affixture
//

var AFFIX_PREFIX = 0;
var AFFIX_SUFFIX = 1;

function getItemAffix(itemtype,affix = AFFIX_PREFIX)
{
	if (itemtype == null)
	{
		return null;
	}
	let tempaffixlist = [];
	
	if (affix == AFFIX_PREFIX)
	{
		tempaffixlist = item_prefixes.filter(filterByList,itemtype);
	} 
	else if (affix == AFFIX_SUFFIX)
	{
		tempaffixlist = item_suffixes.filter(filterByList,itemtype);
	} 
	
	if (tempaffixlist.length < 1)
	{
		console.log("no " + affix + " for itemtype: " + itemtype);
		return null;
	}
	let fullaffixlist = [];
	for (let i = 0; i < tempaffixlist.length; i++)
	{
		fullaffixlist = fullaffixlist.concat(getActualList(tempaffixlist[i]));
	}
	
	return fullaffixlist[Math.floor(Math.random()*(fullaffixlist.length))];
}

//
// sort an array of items by type
//

function sortItemArray(arr)
{
	let temparr = arr.slice();
	let sortedarr = [];
	
	for (let itemtype in item_sorting)
	{
		for (let i = 0; i < temparr.length; i++)
		{
			if (temparr[i].type == item_sorting[itemtype])
			{
				sortedarr.push(temparr[i]);
				temparr.splice(i,1);
				i--;
			}
		}
	}
	
	if (temparr.length > 0)
	{
		let debugstring = "";
		for (let i = 0; i < temparr.length; i++)
		{
			debugstring += temparr[i].type + ", ";
		}
		console.log("WARNING: remaining types after sorting: " + debugstring)
		sortedarr = sortedarr.concat(temparr);
	}
	
	return sortedarr;
}

//
// Generate a special boss monster

function generateBoss() 
{
	let boss_string = "";
    let monster_base = getRandomMonster("boss");
	let boss_class = monster_classes[Math.floor(Math.random()*monster_classes.length)];
	let baserand = Math.random();
	let monster_pronouns = pronouns[Math.floor(Math.random()*pronouns.length)]; 
	let boss_parts = monster_base.parts.slice();
	let is_animal = monster_base.lists.includes("animal");
	let boss_item_slots = monster_base.slots.slice();
	let tempslotcount = item_slotlimits.slice();
	
	if (!is_animal)
	{
		boss_item_slots = boss_item_slots.concat(boss_class.slots);
	}

	
	let randomfriendpotential = Math.floor(Math.random()*5); // EVERYONE CAN HAVE FRIENDS
	for (let i = 0; i < randomfriendpotential; i++)
	{
		boss_item_slots.push("friend");
	}
	
	
	let numberofuniqueparts = Math.floor((Math.random()*monster_base.parts.length)/3+(Math.random()*monster_base.parts.length)/3);
	let numberofitems = Math.floor((boss_item_slots.length/9) + (Math.random()*(boss_item_slots.length + 2))/6);
	
	while ((numberofitems + numberofuniqueparts) < 1) // never have 0 of both
	{
		numberofuniqueparts = Math.floor((Math.random()*monster_base.parts.length)/3+(Math.random()*monster_base.parts.length)/3);
		numberofitems = Math.floor((boss_item_slots.length/9) + (Math.random()*(boss_item_slots.length + 2))/6);
	}
	
	let items = [];
	let tempitem = "";
	let tempslot = "";
	let tempint = -1;
	let tempprefix = "";
	let tempsuffix = "";
	
	for (let i = 0; i < numberofitems; i++)
	{
		tempslot = boss_item_slots[Math.floor(Math.random()*boss_item_slots.length)]
		tempitem = generateArtifact(tempslot,boss_class.favitems);
		tempprefix = getItemAffix(tempitem.type,AFFIX_PREFIX);
		tempsuffix = getItemAffix(tempitem.type,AFFIX_SUFFIX);
		if (tempitem == null)
		{
			console.log("failed to generate item for slot: " + tempslot);
			//return null;
			i--;
			numberofitems--;
		}
		else
		{
			items.push({
				item:tempitem.item,
				prefix:tempprefix,
				suffix:tempsuffix,
				type:tempitem.type
			});
		}
		for (let i = 0; i < tempslotcount.length; i++)
		{
			if (tempslotcount[i].slot == tempslot)
			{
				tempslotcount[i].limit--;
				if (tempslotcount[i].limit == 0)
				{
					boss_item_slots = boss_item_slots.filter(removeAllStringFromArray,tempslot);
				}
				break;
			}
		}
		tempint = boss_item_slots.findIndex(hasString,tempslot);
		if (tempint > -1)
		{
			boss_item_slots.splice(tempint,1);
		}
		tempslot = boss_item_slots[Math.floor(Math.random()*boss_item_slots.length)]
	}
	
	if (is_animal)
	{
		boss_string += generateBossName(false,false) + ", the " + monster_base.single 
			+ " of " + title_suffixes[Math.floor((Math.random()*title_suffixes.length))] + ".\n";
	}
	else
	{
		boss_string += generateBossName(false,false) + ", the " + boss_class.single 
			+ " of " + title_suffixes[Math.floor((Math.random()*title_suffixes.length))] + ".\n";
	}
	
	
	let position = -1;
	let endposition = -1;
	let bosssubstr = "";
	
	boss_string += grammarCapitalFirstLetter(monster_pronouns.subject) + " " + monster_pronouns.conjunction
		+ " " + grammarAorAn(monster_base.single.charAt(0)).toLowerCase() + " " + monster_base.single;
	
	if (numberofuniqueparts > 0)
	{
		boss_string += ",";
	}
	
	for (let i = 0; i < numberofuniqueparts; i++)
	{
		
		if (numberofuniqueparts > 1 && (i+1) == numberofuniqueparts)
		{
			boss_string += " and ";
		}
		else if (i > 0)
		{
			boss_string += ", ";
		}
		else
		{
			boss_string += " ";
		}
		
		temppart = Math.floor(Math.random()*boss_parts.length);
		boss_string += getPartDesciptor(boss_parts[temppart]);
		
		if (boss_string == null)
		{
			console.log("failed to generate item for slot: " + temppart)
		}
		
		while (boss_string.includes("[part]"))
		{
			boss_string = boss_string.replace("[part]", boss_parts[temppart]);
		}
		boss_parts.splice(temppart,1);
	}
	
	boss_string += ".\n";
	
	items = sortItemArray(items);
	let prefix = null;
	let suffix = null;
	
	let items_string = "";
	for (let i = 0; i < numberofitems; i++)
	{
		if (numberofitems > 1 && (i+1) == numberofitems)
		{
			if (numberofitems == 2)
			{
				items_string += " and "; //+  monster_pronouns.possessivesubject + " ";
			}
			else
			{
				items_string += ", and "; //+  monster_pronouns.possessivesubject + " ";
			}
		}
		else if (i > 0)
		{
			items_string += ", "; //+  monster_pronouns.possessivesubject + " ";
		}
		baserand = Math.random();
		
		if (baserand < 0.08 && items[i].suffix != null && items[i].prefix != null) // 0.08
		{
			items_string += items[i].prefix + " " + items[i].item + " " + items[i].suffix;
		}
		else if (baserand < 0.22 && items[i].suffix != null ) // 0.22
		{
			items_string += items[i].item + " " + items[i].suffix;
		}
		else if (baserand < 0.36 && items[i].prefix != null) // 0.36
		{
			items_string += items[i].prefix + " " + items[i].item;
		}
		else
		{
			items_string += items[i].item;
		}
	}
	if (numberofitems > 0)
	{
		boss_string += grammarCapitalFirstLetter(monster_pronouns.subject) + " " + monster_pronouns.conjunction + " outfitted with " + monster_pronouns.possessivesubject + " " + items_string + ".";
	}
	
	position = boss_string.indexOf("\[");
	endposition = -1;
	bosssubstr = "";
	
	while (position != -1)
	{
		endposition = boss_string.indexOf("\]");
		bosssubstr = boss_string.substring(position+1,endposition);
		substr_number = randomNumberForText(bosssubstr);
		if (bosssubstr == "subject")
		{
			boss_string = boss_string.substr(0,position) + monster_pronouns.subject + boss_string.substr(endposition+1);
		}
		else if (bosssubstr == "object")
		{
			boss_string = boss_string.substr(0,position) + monster_pronouns.object + boss_string.substr(endposition+1);
		}
		else if (bosssubstr == "possessivesubject")
		{
			boss_string = boss_string.substr(0,position) + monster_pronouns.possessivesubject + boss_string.substr(endposition+1);
		}
		else if (bosssubstr == "possessiveobject")
		{
			boss_string = boss_string.substr(0,position) + monster_pronouns.possessiveobject + boss_string.substr(endposition+1);
		}
		else if (bosssubstr == "objectself")
		{
			boss_string = boss_string.substr(0,position) + monster_pronouns.objectself + boss_string.substr(endposition+1);
		}
		else if (bosssubstr == "conjunction")
		{
			boss_string = boss_string.substr(0,position) + monster_pronouns.conjunction + boss_string.substr(endposition+1);
		}
		else if (bosssubstr == "possessiveconjunction")
		{
			boss_string = boss_string.substr(0,position) + monster_pronouns.possessiveconjunction + boss_string.substr(endposition+1);
		}
		else if (bosssubstr == "species")
		{
			boss_string = boss_string.substr(0,position) + getRandomMonster("species").single + boss_string.substr(endposition+1);
		}
		else if (substr_number != false)
		{
			boss_string = boss_string.substr(0,position) + substr_number.toString() + boss_string.substr(endposition+1);
		}
		else
		{
			boss_string = boss_string.substr(0,position) + boss_string.substr(endposition+1);
		}
		position = boss_string.indexOf("\[");
	}

	return grammarCapitalFirstLetter(boss_string);
}


function getPrincessObjectString(object)
{
	if (object.synonyms.length == 0)
	{
		return object.base;
	}
	let tempstringlist = object.synonyms.slice();
	tempstringlist.push(object.base);
	
	let random_int = Math.floor(Math.random()*(tempstringlist.length));
	return tempstringlist[random_int];
}

//
// returns a weird princess type, filtered by a list, if one is provided

function getPrincessType(list = "")
{
	let temptypelist = []
	if (list == "")
	{
		temptypelist = weirdprincess_types.slice();
	}
	else
	{
		//arraylist = [list];
		temptypelist = weirdprincess_types.filter(filterByList,list);
	}
	
	if (temptypelist.length < 1)
	{
		console.log("get Princess Type error, no valid princess type list");
		return null;
	}
	
	let random_int = Math.floor(Math.random()*(temptypelist.length));
	return getPrincessObjectString(temptypelist[random_int]);
}

//
// generate a weird princess, based on ??? from polyamorousQ

function generateWeirdPrincess()
{
	let type = getPrincessType();
	let subtype;
	
	let position = type.indexOf("\[");
	let endposition = -1;
	let twistsubstr = "";
	let substr_number = 0;
	
	//subtype stuff for the type string
	while (position != -1)
	{
		endposition = type.indexOf("\]");
		if (endposition == -1)
		{
			console.log("generate Weird Princess error, subtring replacement error, missing \'\]\' character");
			return null;
		}
		typesubstr = type.substring(position+1,endposition);
		subtype = getPrincessType(typesubstr);
		if (subtype == null)
		{
			console.log("generate Weird Princess error, sub type failure");
			return null;
		}
		type = type.substr(0,position) + subtype + type.substr(endposition+1);
		position = type.indexOf("\[");
	}
	
	let random_int = Math.floor(Math.random()*(weirdprincess_colours.length));
	let colour = weirdprincess_colours[random_int];
	
	//let arraylist = [colour]; // because the filterByList actally takes an array
	let tempobjectarray = weirdprincess_appearances.filter(filterByList,colour); // temp array I will overwrite repeatedly...
	
	random_int = Math.floor(Math.random()*(tempobjectarray.length));
	let appearance = getPrincessObjectString(tempobjectarray[random_int]);
	
	tempobjectarray = weirdprincess_clothings.filter(filterByList,colour);
	
	random_int = Math.floor(Math.random()*(tempobjectarray.length));
	let clothing = getPrincessObjectString(tempobjectarray[random_int]);
	
	random_int = Math.floor(Math.random()*(weirdprincess_desires.length));
	let desire = weirdprincess_desires[random_int]
	
	random_int = Math.floor(Math.random()*(weirdprincess_vulnerabilities.length));
	let vulnerability = weirdprincess_vulnerabilities[random_int]
	
	random_int = Math.floor(Math.random()*(weirdprincess_authority.length));
	let authority = weirdprincess_authority[random_int]
	
	random_int = Math.floor(Math.random()*(weirdprincess_carriages.length));
	let carriage = weirdprincess_carriages[random_int]
	
	random_int = Math.floor(Math.random()*(weirdprincess_retinues.length));
	let retinue = weirdprincess_retinues[random_int]
	
	random_int = Math.floor(Math.random()*(weirdprincess_retinuetraits.length));
	let retinuetrait = weirdprincess_retinuetraits[random_int]
	
	let princessFinal = "The princess is " + grammarAorAn(type.charAt(0)).toLowerCase() + " " +
		type + ", she stands " + colour + " with " + appearance + " wearing " +
		clothing + ", she desires " + desire + ", " +
		"the princess can only be permanent killed " + vulnerability +
		", she signals her authority with " + authority + " and holds court with " +
		retinue + " marked by " + retinuetrait;
		
	return princessFinal;
}

//
// gets the spelling possibilities of a phoneme

function getPhonemeSpelling(object)
{
	if (object.spellings.length == 0)
	{
		console.log("Get Phoneme Spelling error; no spellings in this phoneme");
	}
	
	let random_int = Math.floor(Math.random()*(object.spellings.length));
	return object.spellings[random_int];
}

//
// garbage name generator

function generatePhonemeName(maxsyllables = 9, minimumsyllables = 1)
{
	if (maxsyllables < minimumsyllables)
	{
		console.log("maxsyllables: " + maxsyllables + ", minimumsyllables: " + minimumsyllables);
		return "when using !name, maximum syllables must not be lower than minimum syllables";
	}
	if (isNaN(maxsyllables) || isNaN(minimumsyllables) || maxsyllables < 1 || minimumsyllables < 1 || maxsyllables > 99 || minimumsyllables > 99)
	{
		return "the !name command only accepts numbers between 0 and 100"
	}
	
	let name = [];
	let random_int = Math.floor(Math.random()*(phonemes_english.length));
	let last = phonemes_english[random_int];
	let syllablecount = Math.floor((Math.random()*(maxsyllables-minimumsyllables+1))+minimumsyllables);
	
	name.push(last);
	
	let tempphonemelist;
	let tempmultilist;
	
	for (i = 1; i < syllablecount; i++)
	{
		if (last.lists.includes("vowels"))
		{
			if (last.lists.includes("close"))
			{
				tempphonemelist = phonemes_english.filter(filterByList,"vowels");
				tempmultilist = ["mid","open"];
				tempphonemelist = tempphonemelist.filter(filterByManyList,tempmultilist);
			}
			else if (last.lists.includes("mid"))
			{
				tempphonemelist = phonemes_english.filter(filterByList,"vowels");
				tempmultilist = ["close","open"];
				tempphonemelist = tempphonemelist.filter(filterByManyList,tempmultilist);
			}
			else
			{
				tempphonemelist = phonemes_english.filter(filterByList,"vowels");
				tempmultilist = ["close","mid"];
				tempphonemelist = tempphonemelist.filter(filterByManyList,tempmultilist);
			}
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"consonants"));
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"consonants")); //double weight for consonsants
			if (last.lists.includes("diphthongs"))
			{
				tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"consonants")); //triple weight for consonsants in this case
			}
		}
		else
		{
			tempphonemelist = phonemes_english.slice();
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"vowels"));
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"vowels")); //triple weight for vowels
		}
	
		random_int = Math.floor(Math.random()*(tempphonemelist.length));
		last = tempphonemelist[random_int];
		name.push(last);
	}
	
	let pronounciation = "";
	let spelling = "";
	
	for (i = 0; i < name.length; i++)
	{
		pronounciation += name[i].phoneme;
		spelling += getPhonemeSpelling(name[i]);
	}
	
	return "\[" + pronounciation + "\] " + grammarCapitalFirstLetter(spelling); 
}


//
//
//
// nani!?
//
//
//

function nani() 
{
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