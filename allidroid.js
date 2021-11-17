////////
//
// written by AnomAllison
// last updated 15/11/2021
//
// I hope Allidroid can bring people some humour and entertainment
//
////////

const Discord = require('discord.js')
const client = new Discord.Client()

const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

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
var boss_generator = JSON.parse(fs.readFileSync('bosses2.json'));

//artifact files
var item_artifactnames = JSON.parse(fs.readFileSync('item_artifactnames.json'));
var artifact_gen = JSON.parse(fs.readFileSync('artifactgenerator.json'));

//goblin generator files
var goblin_gen = JSON.parse(fs.readFileSync('goblin_gen/goblin_generator.json'));


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

//tarot files
var tarot_deck = JSON.parse(fs.readFileSync('tarot_deck.json'));
var tarot_readings = JSON.parse(fs.readFileSync('tarot_readings.json'));

//questgen file
//var quest_gen = JSON.parse(fs.readFileSync('questgen.json'));
var quest_gen = JSON.parse(fs.readFileSync('questgenerator.json'));

//roomgen file
var room_gen = JSON.parse(fs.readFileSync('room_generator.json'));

//questgen file
var oneshotrpg_gen = JSON.parse(fs.readFileSync('oneshotrpggenerator.json'));

//sapphichelper file
var sapphichelper = JSON.parse(fs.readFileSync('sapphichelper.json'));

//
var logintoken = fs.readFileSync('token.txt').toString();


//
// the array of reminders, to allow reminders to be removed/destroyed (just in case)
var reminder_array = [];
var reminder_idcounter = 0;

//
//
// extremely important Gay variable
//

var currentgay = 0;

const MAX_DICE_ROLL = 999999999;
const KEYSMASH_DEFAULT_STRING = "qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmewradjtrykf,ghjg,hjkmgx1234567890dfhxgfxnmxfgfhd,sgfn325te.;,!.usgtfjtrlk980;u8ewrtiubhjsgdzdkjfhjgzjtykuliilopytz";
const KEYSMASH_DEFAULT_MAX = 32;
const KEYSMASH_DEFAULT_MIN = 18;


//
//
// MESSAGE RECEIVED
//
//

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
	
	/*
	if (receivedMessage.guild != null) { // Don't respond to banned users in channels
        let tempmember = receivedMessage.guild.members.get(receivedMessage.author.id);
		if (tempmember == null || hasName(tempmember.roles,'Bot Banned'))
		{
			return
		}
    }
	*/
	
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
	
	//currentgay += Math.floor((Math.random() * 100) + 1);

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
		output = generateBoss(arguments);
		if (output == null)
		{
			console.log("failed command: boss");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "room") 
	{
		output = generateRoom(arguments);
		if (output == null)
		{
			console.log("failed command: room");
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
		output = howgay();
		if (output == null)
		{
			console.log("failed command: howgay");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
		return;
    } else if (normalizedCommand == "shake") 
	{
		output = shakethejar();
		if (output == null)
		{
			console.log("failed command: shake");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		}
		receivedMessage.channel.send(output);
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
		//receivedMessage.channel.send(fs.readFileSync('helpcommand.txt').toString());
		receivedMessage.author.send(helpCommand(receivedMessage.author,arguments));
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
			output = setReminder(arguments[1], argumentsbacktostring(arguments,2), receivedMessage.channel.id, receivedMessage.author);
		} else
		{
			output = setReminder(arguments[0], argumentsbacktostring(arguments,1), receivedMessage.channel.id, receivedMessage.author);
		}
		
		if (output == null)
		{
			console.log("failed command: remindme");
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
    } else if (normalizedCommand == "plznoyell") 
	{
		receivedMessage.channel.send("but I was no yell at you ;_;");
		return;
    } else if (normalizedCommand == "keysmash" || normalizedCommand == "ks") 
	{
		output = generateKeysmash(arguments[0]);
		
		if (output == null)
		{
			console.log("failed command: keysmash");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "tarot") 
	{
		output = tarotdraw("major arcana", arguments[0]);
		
		if (output == null)
		{
			console.log("failed command: tarot");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "generateartifact") 
	{
		output = generateArtifact(arguments);
		
		if (output == null)
		{
			console.log("failed command: generateartifact");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "quest") 
	{
		output = generateQuest(arguments[0]);
		
		if (output == null)
		{
			console.log("failed command: quest");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "oneshotrpg") 
	{
		output = generateOneShotRPG(arguments[0]);
		
		if (output == null)
		{
			console.log("failed command: oneshotrpg");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "howtoinitiate") 
	{
		output = helpsapphicinitiate(true);
		
		if (output == null)
		{
			console.log("failed command: howtoinitiate");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "generatemap") 
	{
		generateMap(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "generategoblin") 
	{
		generateGoblin(receivedMessage.channel,arguments);
    } else if (normalizedCommand.substr(0,2) == "!!")
	{
		let possibleString = excited();
		if (possibleString.length > 0)
			receivedMessage.channel.send(possibleString);
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
// Help command
//
//

function helpCommand(user, arguments)
{
	help_string = "";
	if (arguments == null || arguments.length == 0)
	{
		help_string = fs.readFileSync('help_general.txt').toString();
		//user.send({ files: [{ attachment: './help_general.txt', name: 'help_general.txt' }] });
	}
	else if (arguments[0] == "!help" || arguments[0] == "help")
	{
		help_string = fs.readFileSync('help_general.txt').toString();
		//user.send({ files: [{ attachment: './help_general.txt', name: 'help_general.txt' }] });
	}
	else if (arguments[0] == "!monster" || arguments[0] == "monster")
	{
		help_string = fs.readFileSync('help_monsters.txt').toString();
		//user.send({ files: [{ attachment: './help_monsters.txt', name: 'help_monsters.txt' }] });
	}
	else if (arguments[0] == "!friend" || arguments[0] == "friend")
	{
		help_string = fs.readFileSync('help_monsters.txt').toString();
		//user.send({ files: [{ attachment: './help_monsters.txt', name: 'help_monsters.txt' }] });
	}
	else if (arguments[0] == "!boss" || arguments[0] == "boss")
	{
		help_string = fs.readFileSync('help_monsters.txt').toString();
		//user.send({ files: [{ attachment: './help_monsters.txt', name: 'help_monsters.txt' }] });
	}
	else if (arguments[0] == "!sexymonster" || arguments[0] == "sexymonster")
	{
		help_string = fs.readFileSync('help_monsters.txt').toString();
		//user.send({ files: [{ attachment: './help_monsters.txt', name: 'help_monsters.txt' }] });
	}
	else if (arguments[0] == "!roll" || arguments[0] == "roll")
	{
		help_string = fs.readFileSync('help_roll.txt').toString();
		//user.send({ files: [{ attachment: './help_roll.txt', name: 'help_roll.txt' }] });
	}
	else if (arguments[0] == "!gay" || arguments[0] == "gay")
	{
		help_string = fs.readFileSync('help_gay.txt').toString();
		//user.send({ files: [{ attachment: './help_gay.txt', name: 'help_gay.txt' }] });
	}
	else if (arguments[0] == "!shake" || arguments[0] == "shake")
	{
		help_string = fs.readFileSync('help_gay.txt').toString();
		//user.send({ files: [{ attachment: './help_gay.txt', name: 'help_gay.txt' }] });
	}
	else if (arguments[0] == "!lesbian" || arguments[0] == "lesbian")
	{
		help_string = fs.readFileSync('help_gay.txt').toString();
		//user.send({ files: [{ attachment: './help_gay.txt', name: 'help_gay.txt' }] });
	}
	else if (arguments[0] == "!lesbifriend" || arguments[0] == "lesbifriend")
	{
		help_string = fs.readFileSync('help_gay.txt').toString();
		//user.send({ files: [{ attachment: './help_gay.txt', name: 'help_gay.txt' }] });
	}
	else if (arguments[0] == "!slash" || arguments[0] == "slash")
	{
		help_string = fs.readFileSync('help_slash.txt').toString();
		//user.send({ files: [{ attachment: './help_slash.txt', name: 'help_slash.txt' }] });
	}
	else if (arguments[0] == "!generatename" || arguments[0] == "generatename")
	{
		help_string = fs.readFileSync('help_generatename.txt').toString();
		//user.send({ files: [{ attachment: './help_generatename.txt', name: 'help_generatename.txt' }] });
	}
	else if (arguments[0] == "!generateartifact" || arguments[0] == "generateartifact")
	{
		help_string = fs.readFileSync('help_generateartifact.txt').toString();
		//user.send({ files: [{ attachment: './help_generateartifact.txt', name: 'help_generateartifact.txt' }] });
	}
	else if (arguments[0] == "!generatemap" || arguments[0] == "generatemap")
	{
		help_string = fs.readFileSync('help_generatemap.txt').toString();
		//user.send({ files: [{ attachment: './help_generatemap.txt', name: 'help_generatemap.txt' }] });
	}
	else if (arguments[0] == "!how" || arguments[0] == "how")
	{
		help_string = fs.readFileSync('help_how.txt').toString();
		//user.send({ files: [{ attachment: './help_how.txt', name: 'help_how.txt' }] });
	}
	else if (arguments[0] == "!gacha" || arguments[0] == "gacha")
	{
		help_string = fs.readFileSync('help_gacha.txt').toString();
		//user.send({ files: [{ attachment: './help_gacha.txt', name: 'help_gacha.txt' }] });
	}
	else if (arguments[0] == "!princess" || arguments[0] == "princess")
	{
		help_string = fs.readFileSync('help_gacha.txt').toString();
		//user.send({ files: [{ attachment: './help_gacha.txt', name: 'help_gacha.txt' }] });
	}
	else if (arguments[0] == "!remindme" || arguments[0] == "remindme")
	{
		help_string = fs.readFileSync('help_remindme.txt').toString();
		//user.send({ files: [{ attachment: './help_remindme.txt', name: 'help_remindme.txt' }] });
	}
	else if (arguments[0] == "!removereminder" || arguments[0] == "removereminder")
	{
		help_string = fs.readFileSync('help_remindme.txt').toString();
		//user.send({ files: [{ attachment: './help_remindme.txt', name: 'help_remindme.txt' }] });
	}
	else if (arguments[0] == "!feedback" || arguments[0] == "feedback")
	{
		help_string = fs.readFileSync('help_feedback.txt').toString();
		//user.send({ files: [{ attachment: './help_feedback.txt', name: 'help_feedback.txt' }] });
	}
	else if (arguments[0] == "!tarot" || arguments[0] == "tarot")
	{
		help_string = fs.readFileSync('help_tarot.txt').toString();
		//user.send({ files: [{ attachment: './help_tarot.txt', name: 'help_tarot.txt' }] });
	}
	else if (arguments[0] == "!oneshotrpg" || arguments[0] == "oneshotrpg")
	{
		help_string = fs.readFileSync('help_oneshotrpg.txt').toString();
		//user.send({ files: [{ attachment: './help_oneshotrpg.txt', name: 'help_oneshotrpg.txt' }] });
	}
	else if (arguments[0] == "!plznoyell" || arguments[0] == "plznoyell")
	{
		help_string = fs.readFileSync('help_plznoyell.txt').toString();
		//user.send({ files: [{ attachment: './help_plznoyell.txt', name: 'help_plznoyell.txt' }] });
	}
	else if (arguments[0] == "!keysmash" || arguments[0] == "keysmash" || arguments[0] == "!ks" || arguments[0] == "ks")
	{
		help_string = fs.readFileSync('help_keysmash.txt').toString();
		//user.send({ files: [{ attachment: './help_keysmash.txt', name: 'help_keysmash.txt' }] });
	}
	else if (arguments[0] == "!quest" || arguments[0] == "quest")
	{
		help_string = fs.readFileSync('help_quest.txt').toString();
		//user.send({ files: [{ attachment: './help_quest.txt', name: 'help_quest.txt' }] });
	}
	else if (arguments[0] == "!howtoinitiate" || arguments[0] == "howtoinitiate")
	{
		help_string = fs.readFileSync('help_howtoinitiate.txt').toString();
		//user.send({ files: [{ attachment: './help_howtoinitiate.txt', name: 'help_howtoinitiate.txt' }] });
	}
	else if (arguments[0] == "!room" || arguments[0] == "room")
	{
		help_string = fs.readFileSync('help_room.txt').toString();
		//user.send({ files: [{ attachment: './help_room.txt', name: 'help_room.txt' }] });
	}
	return help_string;
}

//
//
// GAY
//
//

function howgay()
{
	currentgay++;
	let gayresult = "You put a coin in the gay jar. There are currently " + currentgay + " coins in the gay jar.";
	if (currentgay == 1)
	{
		gayresult = "You put a coin in the gay jar. There is currently 1 coin in the gay jar.";
	}
	let baserand = Math.random()+(currentgay*0.01)
	
	if (baserand > 0.98)
		gayresult += " :tada:";
	
	return gayresult;
}

//
//
//

function gaygacha(coins)
{
	let baserand = Math.random() - coins*0.1;

	let rarity = getGachaRarity(baserand);
	let hero_base = generateMonster("gaycha",0,0,1);
	let hero_class = boss_generator.classes[Math.floor(Math.random()*boss_generator.classes.length)].class;
	
	let hero_name = generateBossName(false);
	
	let fullreturnstring = "[" + rarity + "] " + hero_name + ", the " + hero_base + " " + hero_class;
	
	return fullreturnstring;
}



//
//
//

var MAX_COIN_PERCENTAGE = 0.20;
var MAX_COINS = 100;

function shakethejar()
{
	if (currentgay == 0)
	{
		return "the gay jar is empty";
	}
	
	let randomcoins = 0
	let shaketime = 0
	
	if (currentgay > 5)
	{
		while (randomcoins == 0)
		{
			randomcoins = Math.floor((Math.random()+Math.random()/2)*MAX_COIN_PERCENTAGE*currentgay);
			shaketime++;
		}
	} 
	else
	{
		randomcoins = 1 + Math.floor(Math.random()*2);
	}
	
	if (randomcoins > currentgay)
		randomcoins = currentgay;
	
	if (randomcoins > MAX_COINS)
		randomcoins = MAX_COINS;
	
	currentgay -= randomcoins;
	
	let hero = gaygacha(randomcoins);
	let artifact = "";
	let baseitemtypes = ["shortblade","largeblade","dagger","throwingknives","ropeweapon","polearm","staff","magestaff","smallhammer","largehammer","wand","magicoffhand","smallarms","longarms","armour","clothes","bow","sling","tool","shield","jewelery","holysymbol"];
	let baseitem = generateItemFromTypes(baseitemtypes);
	
	baserand  = Math.random();
	if (baserand < 0.06) // single first word name
	{
		artifact = "the " + item_artifactnames.gaychafirst[Math.floor((Math.random()*item_artifactnames.gaychafirst.length))];
	}
	else if (baserand < 0.12) // single last word name
	{
		artifact = "the " + item_artifactnames.gaychalast[Math.floor((Math.random()*item_artifactnames.gaychalast.length))];
	}
	else
	{
		artifact = "the " + item_artifactnames.gaychafirst[Math.floor((Math.random()*item_artifactnames.gaychafirst.length))] + " " + item_artifactnames.gaychalast[Math.floor((Math.random()*item_artifactnames.gaychalast.length))];
	}
	
	
	let fullstring = hero + " and their artifact " + artifact + ", the " + item_artifactnames.magic[Math.floor((Math.random()*item_artifactnames.magic.length))] + " " + baseitem.item;
	
	let shakestring = ""
	if (shaketime > 2)
	{
		shakestring = "You give the jar a good shake, getting ";
	}
	else
	{
		shakestring = "You shake ";
	}
		
	fullstring = shakestring + randomcoins + " coins from the jar and spend them on the gaycha! You get: \n" + fullstring;
	
	return fullstring;
}


//
// string to time
//

function stringToTime(inputstring)
{
	if (inputstring == null || inputstring.length == 0)
		return 0;
	
	let front = parseInt(inputstring);
	let isFrontNaN = isNaN(front);
	let amount = 0;
	let units = 0;
	let totalTime = 0;
	
	while (inputstring.length > 0)
	{
		if (isFrontNaN)
		{
			if (inputstring.charAt(0) == 'd')
			{
				units = 86400000;
			} 
			else if (inputstring.charAt(0) == 'h')
			{
				units = 3600000;
			} 
			else if (inputstring.charAt(0) == 'm')
			{
				units = 60000;
			} 
			else if (inputstring.charAt(0) == 's')
			{
				units = 1000;
			} 
			else
			{
				units = 0; //invalid characters given
			}
			
			if (amount > 0)
			{
				totalTime += amount * units;
				amount = 0;
			}
			
			inputstring = inputstring.substr(1);
		} 
		else
		{
			amount = front;
			inputstring = inputstring.substr(amount.toString().length);
		}
		front = parseInt(inputstring);
		isFrontNaN = isNaN(front);
	}
	
	return totalTime;
}

//
// Reminder
//

function setReminder(delay, message, target_channel, sender)
{
	if (delay == null)
	{
		return "I require a delay to do that";
	}
	if (message == null)
	{
		message = "<@" + sender.id + ">";
	}
	
	if (reminder_array.length > 50000)
	{
		return "Sorry, I am at capacity for reminders";
	}
	
	if (delay == null || message == null)
	{
		//console.log("Set Reminder error, delay or message are null");
		return "Invalid arguments, I need a delay (in minutes) and a message";
	}
	
	let parsedDelay = stringToTime(delay)
	
	if (parsedDelay == null)
	{
		//console.log("Invalid delay input given");
		return "Invalid delay input given, you must only give units in the form of d for days, h for hours, m for minutes, and s for seconds, in a format such as 1d3h15m";
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
		when: Date.now()+parsedDelay,
		timer: setTimeout(sendReminder.bind(this,message,target_channel,newid),parsedDelay)
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
// filter the objects by whether 'this' is one of the lists it is on
//

function filterByAtleastOneList(object)
{
	for (let j in this)
	{
		for (let i in object.lists)
		{
			if (this[j] == object.lists[i])
				return true;
		}
	}
	return false;
}


//
// filter the objects by removing where 'this' is one of the lists it is on
//

function removeByList(object)
{
	for (let i in object.lists)
	{
		if (this == object.lists[i])
			return false;
	}
	return true;
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
// filter the objects by removing all where the type of object is equal to the passed type
//

function filterByType(object)
{
	if (object.type == this)
			return true;
	return false;
}

function removeByType(object)
{
	if (object.type == this)
			return false;
	return true;
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
	let noun = Math.floor(Math.random()*(boss_generator.randomkeywords.length+boss_generator.classes.length));
	let lesbian = "";
	let keyword = "";
	
	if (noun < boss_generator.randomkeywords.length)
	{
		keyword = boss_generator.randomkeywords[noun];
		if (keyword == "item")
		{
			noun = Math.floor(Math.random()*boss_generator.items.length);
			lesbian = getObjectName(boss_generator.items[noun]) + " lesbian";
		}
		else
		{
			lesbian = keyword + " lesbian";
		}
	}
	else
	{
		noun = noun % boss_generator.randomkeywords.length;
		keyword = boss_generator.classes[noun].class;
		lesbian = keyword + " lesbian";
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
		substr_number = randomNumberForText(monstersubstr);
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
		else if (substr_number != false)
		{
			lesbian = lesbian.substr(0,position) + substr_number.toString() + lesbian.substr(endposition+1);
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
		return false;
	}
	return Math.floor(Math.random()*(maximumNumber-minimumNumber)+minimumNumber);
}

//
// filter function for the character list
////because I keep forgetting: 'character' is the taken part from the array being filtered, while 'this' is what its being checked against in the argument

function filterCharacterList(character)
{
	let list = character.id.substr(0,character.id.indexOf("\-"));
	return list == this;
}

//
// filter remove by id
////because I keep forgetting: 'character' is the taken part from the array being filtered, while 'this' is what its being checked against in the argument
function removeByID(character)
{
	return character.id != this;
}

//
// given a character, determine if the character is suitable 
//
function isCharacterSuitable(character) //because I keep forgetting: 'character' is the taken part from the array being filtered, while 'this' is what its being checked against in the argument
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
		
		if (desiredcharacter.lists == null || desiredcharacter.lists.length == 0)
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
	charlist = charlist.toLowerCase();
	let listfilter = charlist.split("\,");
	
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
			} else
			{
				desiredcharactersublists = null;
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
		for (let i = 0; i < tempcharacter.invalidpairs.length; i++) // remove all invalid pairs
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
			if (!isNaN(twistsubstrsubnumber))
			{
				twist = twist.substr(0,position) + randomcharacternames[(twistsubstrsubnumber-1)%randomcharacternames.length] + twist.substr(endposition+1);
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
// KEYSMASH
//
//

function generateKeysmash(length = -1)
{
	if (length < 0)
		length = (Math.random()*(KEYSMASH_DEFAULT_MAX-KEYSMASH_DEFAULT_MIN))+KEYSMASH_DEFAULT_MIN;
	
	let keysmashstring = length + "d" + KEYSMASH_DEFAULT_STRING;
	return dieRoll(keysmashstring);
}


//
//
// ROLL DICE
//
//

function dieRoll(r)
{
	if (r == null || r.length == 0)
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
	let diceDropped = 0;
	let stringroll = "";
	let resultString = "(";
	let dieresults = [];
	let droppeddie = [];
	
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
			return "excuse me, no (number too large!)";
		}
	}
	
	position = r.indexOf("d");
	dposition = r.lastIndexOf("d");
	if (dposition != -1 && dposition != position)
	{
		diceDropped = parseInt(r.substr(dposition+1));
	}
	
	if (diceDropped > numberOfDice)
	{
		return "can't drop more dice than you're rolling";
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
			dieresults.push(Math.floor((Math.random() * diceSides) + 1));
		}
	}
	if (stringroll.length > 0)
	{
		return stringroll;
	}
	
	for (let i = 0; i < diceDropped; i++)
	{
		let lowestDie = diceSides+1;
		let lowestDieIndex = -1;
		for (j in dieresults)
		{
			if (dieresults[j] < lowestDie)
			{
				lowestDie = dieresults[j];
				lowestDieIndex = j;
			}
		}
		dieresults.splice(lowestDieIndex,1);
		droppeddie.push(lowestDie);
	}
	
	for (i in dieresults)
	{
		totalroll += dieresults[i];
		resultString += dieresults[i] + " + ";
	}
	
	for (i in droppeddie)
	{
		resultString += "~~" + droppeddie[i] + "~~ + ";
	}
	
	totalroll += diceMod;
	if (diceMod < 0)
	{
		resultString = resultString.substr(0,resultString.length-3) + " - " + Math.abs(diceMod) + ")";
	}
	else if (diceMod > 0)
	{
		resultString = resultString.substr(0,resultString.length-3) + " + " + diceMod + ")";
	}
	else
	{
		resultString = resultString.substr(0,resultString.length-3) + ")";
	}
	
	
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
		return "an";
	return "a";
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
	let baserand = Math.random() - ((amount-1)/160);
	let rarity = getGachaRarity(baserand);
	let hero_base = generateMonster("gacha",2,1,1);
	let hero_class = boss_generator.classes[Math.floor(Math.random()*boss_generator.classes.length)].class;
	
	let hero_name = generateBossName(false);
	//let hero_pronouns = pronouns[Math.floor(Math.random()*pronouns.length)]; 
	
	let fullreturnstring = "[" + rarity + "] " + hero_name + ", the " + hero_base + " " + hero_class;
	
	for (let i = 1; i < amount; i++)
	{
		baserand = Math.random() - ((amount-1)/160);
		rarity = getGachaRarity(baserand);
		hero_base = generateMonster("gacha",2,1,1);
		hero_class = boss_generator.classes[Math.floor(Math.random()*boss_generator.classes.length)].class;
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

function generatePhonemeName(maxsyllables = 8, minimumsyllables = 1)
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
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"consonants"));
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"consonants")); //triple weight for consonsants
			if (last.lists.includes("diphthongs"))
			{
				tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"consonants")); //quadrouple weight for consonsants in this case
			}
		}
		else
		{
			tempphonemelist = phonemes_english.slice();
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"vowels"));
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"vowels"));
			tempphonemelist = tempphonemelist.concat(phonemes_english.filter(filterByList,"vowels")); //quadrouple weight for vowels
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
//  new Boss Generator function
//
//
//


// descriptor is the descriptor from the array calling filter(descriptorIsValid,x)
// this is x from the array calling filter(descriptorIsValid,x)
function descriptorIsValid(descriptor)
{
	let tempkeywordarr = this.slice();
	for (let i in descriptor.keywords)
	{
		let indexOfkeyword = tempkeywordarr.indexOf(descriptor.keywords[i]);
		if (indexOfkeyword != -1)
		{
			tempkeywordarr.splice(indexOfkeyword,1);
		}
		else
			return false;
	}
	return true;
}

//
// remove keywords by descriptors

function removeKeywordsByDescriptor(keyword)
{
	for (let i in this.keywords)
	{
		if (keyword == this.keywords[i])
		{
			return false;
		}
	}
	return true;
}

function findIndexOfDescriptor(list,descriptor)
{
	for (i in list)
	{
		if (list[i].description == descriptor.description)
			return i;
	}
	return -1;
}

//
// generate boss base function

function generateBoss(extrakeywords = null)
{
	let boss_string = "";
	//let basemonster = boss_generator.bases[Math.floor(Math.random()*(boss_generator.bases.length))];
	let basemonster = generateBossBase();
	let tempbossdescriptors = boss_generator.descriptors.slice();
	let bossclass = boss_generator.classes[Math.floor(Math.random()*(boss_generator.classes.length))];
	let bosstitle = boss_generator.titles[Math.floor(Math.random()*(boss_generator.titles.length))];
	let keywords = basemonster.keywords.concat(bosstitle.keywords);
	if (extrakeywords != null && extrakeywords.length > 0)
	{
		keywords = keywords.concat(extrakeywords);
	}
	let bosspronouns = pronouns[Math.floor(Math.random()*(pronouns.length))];
	keywords = keywords.concat(bossclass.keywords);
	let temprandomkeywords = boss_generator.randomkeywords.slice();
	let random_int = Math.floor(Math.random()*(temprandomkeywords.length));
	let RANDOM_EXTRA_KEYWORDS = 1;
	for (let i = 0; i < RANDOM_EXTRA_KEYWORDS; i++)
	{
		keywords.push(temprandomkeywords[random_int]);
		temprandomkeywords.splice(random_int,1);
		random_int = Math.floor(Math.random()*(temprandomkeywords.length));
	}
	
	
	validdescriptors = tempbossdescriptors.filter(descriptorIsValid,keywords);
	
	let descriptors = [];
	random_int = Math.floor(Math.random()*(validdescriptors.length));
	let random_int2 = Math.floor(Math.random()*(validdescriptors.length));
	if (validdescriptors[random_int].keywords.length < validdescriptors[random_int2].keywords.length)
	{
		random_int = random_int2;
	}
	let descriptorattemptcount = 7;
	for (let i = 0; i < descriptorattemptcount; i++)
	{
		descriptors.push(validdescriptors[random_int]);
		for (j in validdescriptors[random_int].keywords)
		{
			let keywordindex = keywords.indexOf(validdescriptors[random_int].keywords[j]);
			if (keywordindex != -1)
			{
				keywords.splice(keywordindex,1);
			}
		}
		let indexOfDescriptor = findIndexOfDescriptor(tempbossdescriptors,validdescriptors[random_int])
		if (indexOfDescriptor != -1)
		{
			tempbossdescriptors.splice(indexOfDescriptor,1);
		}
		// keywords = keywords.filter(removeKeywordsByDescriptor,validdescriptors[random_int]);
		validdescriptors = tempbossdescriptors.filter(descriptorIsValid,keywords);
		
		random_int = Math.floor(Math.random()*(validdescriptors.length));
		random_int2 = Math.floor(Math.random()*(validdescriptors.length));
		if (validdescriptors.length > 0 && validdescriptors[random_int].keywords.length < validdescriptors[random_int2].keywords.length)
		{
			random_int = random_int2;
		}
		if (keywords.length == 0)
			i += descriptorattemptcount;
		if (validdescriptors.length == 0)
			i += descriptorattemptcount;
	}
	
	let sorted_descriptors = []
	
	for (i = 0; i < 10 && sorted_descriptors.length < descriptors.length; i++)
	{
		sorted_descriptors = sorted_descriptors.concat(descriptors.filter(filterByPriority,i));
	}
	
	let descriptors_strings = "";
	
	for (i = 0; i < sorted_descriptors.length; i++)
	{
		descriptors_strings += sorted_descriptors[i].description;
		if (i < sorted_descriptors.length-2)
		{
			descriptors_strings += ", ";
		}
		else if (i == sorted_descriptors.length-2)
		{
			descriptors_strings += " and ";
		}
	}
	
	
	boss_string += generateBossName(false,false) + ", the " + basemonster.base + " " + bossclass.class 
			+ " of " + getNameSynonym(bosstitle) + ".\n";
	
	let position = descriptors_strings.indexOf("\[");
	let endposition = -1;
	let bosssubstr = "";
	
	while (position != -1)
	{
		endposition = descriptors_strings.indexOf("\]");
		bosssubstr = descriptors_strings.substring(position+1,endposition);
		substr_number = randomNumberForText(bosssubstr);
		if (bosssubstr == "subject")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + bosspronouns.subject + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "object")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + bosspronouns.object + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "possessivesubject")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + bosspronouns.possessivesubject + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "possessiveobject")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + bosspronouns.possessiveobject + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "objectself")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + bosspronouns.objectself + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "conjunction")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + bosspronouns.conjunction + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "possessiveconjunction")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + bosspronouns.possessiveconjunction + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "species")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + getRandomMonster("species").single + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "monster")
		{
			let tempmonster = getRandomMonster("monster");
			descriptors_strings = descriptors_strings.substr(0,position) + grammarAorAn(tempmonster.single.charAt(0)) + " " + tempmonster.single + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr == "monstergroup")
		{
			descriptors_strings = descriptors_strings.substr(0,position) + getRandomMonster("monster").plural + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr.substr(0,10) == "pluralnoun")
		{
			let words = bosssubstr.split(" ");
			if (bosspronouns.pluralar)
				descriptors_strings = descriptors_strings.substr(0,position) + words[1] + descriptors_strings.substr(endposition+1);
			else
				descriptors_strings = descriptors_strings.substr(0,position) + words[2] + descriptors_strings.substr(endposition+1);
		}
		else if (bosssubstr.substr(0,5) == "items")
		{
			let lists = bosssubstr.split(" ");
			let type = lists[1];
			let neededlists = [];
			let disallowedlists = [];
			for (let i = 2; i < lists.length; i++)
			{
				if (lists[i].substr(0,1) == "+")
				{
					neededlists.push(lists[i].substr(1));
				}
				else if (lists[i].substr(0,1) == "-")
				{
					disallowedlists.push(lists[i].substr(1));
				}
			}
			let tempitem = generateItemOfType(type,neededlists,disallowedlists);
			if (tempitem != null)
				descriptors_strings = descriptors_strings.substr(0,position) + tempitem.item + descriptors_strings.substr(endposition+1);
			else
			{
				console.log("warning: null item found using substring: " + bosssubstr);
				descriptors_strings = descriptors_strings.substr(0,position) + descriptors_strings.substr(endposition+1);
			}
		}
		else if (bosssubstr.substr(0,4) == "item")
		{
			let lists = bosssubstr.split(" ");
			let type = lists[1];
			let neededlists = [];
			let disallowedlists = [];
			for (let i = 2; i < lists.length; i++)
			{
				if (lists[i].substr(0,1) == "+")
				{
					neededlists.push(lists[i].substr(1));
				}
				else if (lists[i].substr(0,1) == "-")
				{
					disallowedlists.push(lists[i].substr(1));
				}
			}
			let tempitem = generateItemOfType(type,neededlists,disallowedlists);
			if (tempitem != null)
				descriptors_strings = descriptors_strings.substr(0,position) + grammarAorAn(tempitem.item.charAt(0)) + " " + tempitem.item + descriptors_strings.substr(endposition+1);
			else
			{
				console.log("warning: null item found using substring: " + bosssubstr);
				descriptors_strings = descriptors_strings.substr(0,position) + descriptors_strings.substr(endposition+1);
			}
		}
		else if (substr_number != false)
		{
			descriptors_strings = descriptors_strings.substr(0,position) + substr_number.toString() + descriptors_strings.substr(endposition+1);
		}
		else
		{
			descriptors_strings = descriptors_strings.substr(0,position) + descriptors_strings.substr(endposition+1);
		}
		position = descriptors_strings.indexOf("\[");
	}
	
	descriptors_strings += ".";
	
	return boss_string + grammarCapitalFirstLetter(descriptors_strings);
	
	
}

//
// generate an item of a specific type from the boss generator item list

function generateItemOfType(type, musthavelists = null, disallowedlists = null)
{
	let itempool = boss_generator.items.slice();
	let fullpool = [];
	
	itempool = itempool.filter(filterByType,type);
	
	if (musthavelists != null && musthavelists.length > 0)
	{
		itempool = itempool.filter(filterByAtleastOneList,musthavelists);
	}
	
	if (disallowedlists != null && disallowedlists.length > 0)
	{
		for (let i = 0; i < disallowedlists.length; i++)
		{
			itempool = itempool.filter(removeByList,disallowedlists[i]);
		}
	}
	
	for (let i = 0; i < itempool.length; i++)
	{
		fullpool = fullpool.concat(getItemList(itempool[i]));
	}
	
	return fullpool[Math.floor((Math.random()*fullpool.length))];
}

//
// generate an item from a variety of types from the boss generator item list

function generateItemFromTypes(types = null, musthavelists = null, disallowedlists = null)
{
	let itempool;
	let fullpool = [];
	
	if (types != null)
	{
		itempool = [];
		for (i in types)
		{
			itempool = itempool.concat(boss_generator.items.filter(filterByType,types[i]));
		}
	}
	else
	{
		itempool = boss_generator.items.slice();
	}
	
	if (musthavelists != null && musthavelists.length > 0)
	{
		itempool = itempool.filter(filterByAtleastOneList,musthavelists);
	}
	
	if (disallowedlists != null && disallowedlists.length > 0)
	{
		for (let i = 0; i < disallowedlists.length; i++)
		{
			itempool = itempool.filter(removeByList,disallowedlists[i]);
		}
	}
	
	for (let i = 0; i < itempool.length; i++)
	{
		fullpool = fullpool.concat(getItemList(itempool[i]));
	}
	
	return fullpool[Math.floor((Math.random()*fullpool.length))];
}


function generateBossBase()
{
	let boss_base;
	let random_int = Math.floor(Math.random()*(boss_generator.bases.length + boss_generator.specialbases.length));
	if (random_int < boss_generator.bases.length)
	{
		boss_base = boss_generator.bases[random_int];
	}
	else
	{
		random_int = random_int % boss_generator.bases.length;
		let special_base = boss_generator.specialbases[random_int];
		let temp_base = special_base.variations[Math.floor(Math.random()*special_base.variations.length)] + " " + special_base.base;
		boss_base = {base: temp_base, keywords:special_base.keywords};
	}
	
	return boss_base;
}


//
//
// room generator function
//
//

function getRoomSizeName(size)
{
	let roomsizename = null;
	for(i in room_gen.sizenames)
	{
		if (size >= room_gen.sizenames[i].minsize)
		{
			roomsizename = room_gen.sizenames[i];
		}
	}
	return roomsizename;
}

//
// 'this' is the array of keywords
function roomDescriptionIsValid(descriptor)
{
	for (i in descriptor.keywords)
	{
		for (j in this)
		{
			if (descriptor.keywords[i] == this[j])
				return true;
		}
	}
	return false;
}

//
// 'this' is the size remaining
function roomDescriptionSmallEnough(descriptor)
{
	return descriptor.size <= this;
}

function arrayContainsDescriptor(array,descriptor)
{
	for (i in array)
	{
		if (array[i].description == descriptor.description)
			return i;
	}
	
	return -1;
}

function getRoomTypeByKeywords(keywords)
{
	let roomtypes = room_gen.types.slice();
	let roomtypecount = [];
	for (i in roomtypes)
	{
		roomtypecount.push(0);
	}
	
	for (i in keywords)
	{
		for (j in roomtypes)
		{
			if (keywords[i] == roomtypes[j].keywords[0])
			{
				roomtypecount[j]++;
			}
		}
	}
	
	let largest = -1;
	let index = -1;
	for (i in roomtypecount)
	{
		if (largest < roomtypecount[i])
		{
			index = i;
			largest = roomtypecount[i];
		}
	}
	
	return roomtypes[index];
}

function generateRoom(extrakeywords = null)
{
	let roomtype = room_gen.types[Math.floor(Math.random()*room_gen.types.length)];
	let roomsize = randomNumberForText("3-15");
	let roomname;
	let roomsizename = getRoomSizeName(roomsize);
	let roomlevel = roomtype.level + roomsizename.level;
	
	let roomkeywords = [];
	if (extrakeywords != null && extrakeywords.length > 0)
	{
		roomkeywords = roomkeywords.concat(extrakeywords);
	}
	
	let randomkeywordcount = 3;
	let temprandomkeywords = room_gen.randomkeywords.slice();
	let random_int = Math.floor(Math.random()*temprandomkeywords.length);
	for(let i = 0; i < randomkeywordcount; i++)
	{
		roomkeywords.push(temprandomkeywords[random_int]);
		temprandomkeywords.splice(random_int,1);
	}
	
	
	let validdescriptors = room_gen.descriptors.filter(roomDescriptionIsValid,roomkeywords);
	validdescriptors = validdescriptors.filter(roomDescriptionSmallEnough,roomsize);
	let roomdescriptors = [];
	
	random_int = Math.floor(Math.random()*(validdescriptors.length));
	let random_int2 = Math.floor(Math.random()*(validdescriptors.length));
	if (validdescriptors[random_int].size < validdescriptors[random_int2].size)
	{
		random_int = random_int2;
	}
	let sizeused = 0;
	while (sizeused < roomsize && validdescriptors.length > 0)
	{
		if (validdescriptors[random_int].stacks)
		{
			let descriptorindex = arrayContainsDescriptor(roomdescriptors,validdescriptors[random_int]);
			if (descriptorindex != -1)
			{
				roomdescriptors[descriptorindex].size += validdescriptors[random_int].size;
				roomdescriptors[descriptorindex].level += validdescriptors[random_int].level;
			}
			else
			{
				roomdescriptors.push(validdescriptors[random_int]);
			}
		}
		else
		{
			roomdescriptors.push(validdescriptors[random_int]);
		}
		
		sizeused += validdescriptors[random_int].size;
		if (!validdescriptors[random_int].repeats)
		{
			validdescriptors.splice(random_int,1);
		}
		
		validdescriptors = validdescriptors.filter(roomDescriptionSmallEnough,roomsize-sizeused);
		if (validdescriptors.length > 0)
		{
			random_int = Math.floor(Math.random()*(validdescriptors.length));
			random_int2 = Math.floor(Math.random()*(validdescriptors.length));
			if (validdescriptors[random_int].size < validdescriptors[random_int2].size)
			{
				random_int = random_int2;
			}
		}
	}
	
	let roomnamekeywords = [];
	for (i in roomdescriptors)
	{
		for (let j = 0; j < roomdescriptors[i].size; j++)
		{
			roomnamekeywords = roomnamekeywords.concat(roomdescriptors[i].keywords);
		}
	}
	
	roomname = getRoomTypeByKeywords(roomnamekeywords);
	
	
	let room_string = "**" + grammarCapitalFirstLetter(roomname.name) + " " + roomsizename.name + "**\n";
	
	let room_description_string = "";
	
	for (let i = 0; i < roomdescriptors.length; i++)
	{
		room_description_string += roomdescriptors[i].description;
		if (i < roomdescriptors.length-2)
		{
			room_description_string += ", ";
		}
		else if (i == roomdescriptors.length-2)
		{
			room_description_string += " and ";
		}
		
		let position = room_description_string.indexOf("\[");
		let endposition = -1;
		let roomsubstr = "";
		
		while (position != -1)
		{
			endposition = room_description_string.indexOf("\]");
			roomsubstr = room_description_string.substring(position+1,endposition);
			substr_number = randomNumberForText(roomsubstr);
			if (roomsubstr.substr(0,5) == "size>")
			{
				let words = roomsubstr.split(" ");
				let comparison = parseInt(words[0].substr(5));
				if (roomdescriptors[i].size > comparison)
					room_description_string = room_description_string.substr(0,position) + words[1] + room_description_string.substr(endposition+1);
				else
					room_description_string = room_description_string.substr(0,position) + words[2] + room_description_string.substr(endposition+1);
			}
			else if (roomsubstr.substr(0,5) == "size<")
			{
				let words = roomsubstr.split(" ");
				let comparison = parseInt(words[0].substr(5));
				if (roomdescriptors[i].size < comparison)
					room_description_string = room_description_string.substr(0,position) + words[1] + room_description_string.substr(endposition+1);
				else
					room_description_string = room_description_string.substr(0,position) + words[2] + room_description_string.substr(endposition+1);
			}
			else if (roomsubstr == "size")
			{
				room_description_string = room_description_string.substr(0,position) + roomdescriptors[i].size + room_description_string.substr(endposition+1);
			}
			else if (roomsubstr == "monstersingle")
			{
				let tempmonster = getRandomMonster("monster");
				room_description_string = room_description_string.substr(0,position) + grammarAorAn(tempmonster.single.charAt(0)) + " " + tempmonster.single + room_description_string.substr(endposition+1);
			}
			else if (roomsubstr == "monsterplural")
			{
				room_description_string = room_description_string.substr(0,position) + getRandomMonster("monster").plural + room_description_string.substr(endposition+1);
			}
			else if (roomsubstr == "species")
			{
				room_description_string = room_description_string.substr(0,position) + getRandomMonster("species").single + room_description_string.substr(endposition+1);
			}
			else if (roomsubstr.substr(0,4) == "item")
			{
				let lists = roomsubstr.split(" ");
				let types = [];
				let neededlists = [];
				let disallowedlists = [];
				
				for(let i = 1; i < lists.length; i++)
				{
					if (lists[i].substr(0,1) == "+")
					{
						neededlists.push(lists[i].substr(1));
					}
					else if (lists[i].substr(0,1) == "-")
					{
						disallowedlists.push(lists[i].substr(1));
					}
					else
					{
						types.push(lists[i]);
					}
				}
				
				let tempitem = generateItemFromTypes(types,neededlists,disallowedlists);
				if (tempitem != null)
					room_description_string = room_description_string.substr(0,position) + grammarAorAn(tempitem.item.charAt(0)) + " " + tempitem.item + room_description_string.substr(endposition+1);
				else
				{
					console.log("warning: null item found using substring: " + roomsubstr);
					room_description_string = room_description_string.substr(0,position) + room_description_string.substr(endposition+1);
				}
			}
			else if (substr_number != false)
			{
				room_description_string = room_description_string.substr(0,position) + substr_number.toString() + room_description_string.substr(endposition+1);
			}
			else
			{
				room_description_string = room_description_string.substr(0,position) + room_description_string.substr(endposition+1);
			}
			position = room_description_string.indexOf("\[");
		}
		
	}
	room_string += grammarCapitalFirstLetter(room_description_string) + ".\n";
	//doorways
	
	let roomdoorcount = Math.max(Math.floor((Math.random()*5)-2),0)+1;
	let directions = ["north","east","south","west"];
	let room_doorways_strings = "";
	for(let i = 0; i < roomdoorcount; i++)
	{
		random_int = Math.floor(Math.random()*directions.length);
		let currentdirection = directions[random_int];
		directions.splice(random_int,1);
		
		room_doorways_strings += room_gen.doorways[Math.floor(Math.random()*room_gen.doorways.length)];
		if (i < roomdoorcount-2)
		{
			room_doorways_strings += ", ";
		}
		else if (i == roomdoorcount-2)
		{
			room_doorways_strings += " and ";
		}
		
		let position = room_doorways_strings.indexOf("\[");
		let endposition = -1;
		let roomsubstr = "";
		
		while (position != -1)
		{
			endposition = room_doorways_strings.indexOf("\]");
			roomsubstr = room_doorways_strings.substring(position+1,endposition);
			substr_number = randomNumberForText(roomsubstr);
			if (roomsubstr == "direction")
			{
				room_doorways_strings = room_doorways_strings.substr(0,position) + currentdirection + room_doorways_strings.substr(endposition+1);
			}
			else if (substr_number != false)
			{
				room_doorways_strings = room_doorways_strings.substr(0,position) + substr_number.toString() + room_doorways_strings.substr(endposition+1);
			}
			else
			{
				room_doorways_strings = room_doorways_strings.substr(0,position) + room_doorways_strings.substr(endposition+1);
			}
			position = room_doorways_strings.indexOf("\[");
		}
	}
	if (roomdoorcount > 0)
	{
		room_string += grammarCapitalFirstLetter(room_doorways_strings) + ".\n";
	}
	
	return room_string;
}



//
//
//
// allidroid "tarot"
//
//
//

//
// filters

function filterBySuite(card)
{
	return card.suite == this;
} // card is the array entry, this is the argument from filterArray

//
// 

function readingIsValid(reading)
{
	for (let i in reading.cards)
	{
		if (this.includes(reading.cards[i]) == false)
		{
			return false;
		}
	}
	return true;
}

//
// remove cards

function removeCardsByReading(card)
{
	for (let i in this.cards)
	{
		if (card.card == this.cards[i])
		{
			return false;
		}
	}
	return true;
} // card is the array entry, this is the argument from filterArray


function simplifytarothand(hand)
{
	let simplehand = []
	
	for (let i in hand)
	{
		simplehand.push(hand[i].card);
	}
	
	return simplehand;
}

//
// allidroid tarot draw
//

function tarotdraw(suitefilter = null, drawcount = 2)
{
	let temptarotdeck;
	let hand = [];
	let validreadings;
	let readings = [];
	let reading_string = "";
	
	if (drawcount > 21)
	{
		drawcount = 21;
	}
	
	if (suitefilter == null)
		temptarotdeck = tarot_deck.slice();
	else
		temptarotdeck = tarot_deck.filter(filterBySuite,suitefilter);
	let random_int = Math.floor(Math.random()*(temptarotdeck.length));
	for (let i = 0; i < drawcount; i++)
	{
		hand.push(temptarotdeck[random_int]);
		temptarotdeck.splice(random_int,1);
		
		random_int = Math.floor(Math.random()*(temptarotdeck.length));
	}
	
	validreadings = tarot_readings.filter(readingIsValid,simplifytarothand(hand));
	
	
	random_int = Math.floor(Math.random()*(validreadings.length));
	for (let i = 0; i < drawcount; i++)
	{
		readings.push(validreadings[random_int]);
		hand = hand.filter(removeCardsByReading,validreadings[random_int])
		validreadings = tarot_readings.filter(readingIsValid,simplifytarothand(hand));
		
		random_int = Math.floor(Math.random()*(validreadings.length));
		if (hand.length == 0)
			i += drawcount;
	}
	
	
	for (let i in readings)
	{
		reading_string += readings[i].reading + "\n";
	}
	
	return reading_string;
}

//
//
// generateQuest function 
//
//

function getNameSynonym(reward)
{
	if (reward.synonyms.length > 0)
	{
		let random_int = Math.floor(Math.random()*(reward.synonyms.length+1));
		if (random_int < reward.synonyms.length)
			return reward.synonyms[random_int];
		else
			return reward.name;
	}
	return reward.name;
}

function getClosestRewardToLevel(rewards, level)
{
	let difference = 999999;
	let index = -1;
	for(i in rewards)
	{
		if (rewards[i].level == level)
		{
			return i;
		}
		else if (rewards[i].level < level && (level - rewards[i].level) < difference)
		{
			difference = level - rewards[i].level;
			index = i;
		}
		else if (rewards[i].level > level && (rewards[i].level - level) < difference)
		{
			difference = rewards[i].level - level;
			index = i;
		}
	}
	
	return index;
}

function filterByMinLevel(questobjective)
{
	return this >= questobjective.minlevel;
}

function generateQuest(minlevel = -1)
{
	if (minlevel > 18)
	{
		return "minimum level too high";
	}
		
	let questgod = quest_gen.questgods[Math.floor(Math.random()*quest_gen.questgods.length)]
	let questlocation = quest_gen.questlocations[Math.floor(Math.random()*quest_gen.questlocations.length)];
	let tempquestlocmods = quest_gen.questlocationmodifiers.filter(filterByAtleastOneList,questlocation.keywords);
	let random_int = Math.floor(Math.random()*tempquestlocmods.length)
	let questlocationmodifier = tempquestlocmods[random_int];
	
	if (Math.random() < 0.667)
	{
		questlocationmodifier = 
		{
			"name":"",
			"lists":[],
			"keywords":[],
			"level": 0
		};
	}
	
	let questlocationkeywoodsfull = questlocation.keywords.concat(questlocationmodifier.keywords);
	let tempantagonists = quest_gen.questantagonists.filter(filterByAtleastOneList,questlocationkeywoodsfull);
	random_int = Math.floor(Math.random()*tempantagonists.length)
	let questantagonist = tempantagonists[random_int];
	let questkeyword = questantagonist.keywords[Math.floor(Math.random()*questantagonist.keywords.length)];
	let tempquestgivers = quest_gen.questgivers.filter(filterByList,questkeyword);
	random_int = Math.floor(Math.random()*tempquestgivers.length);
	let questgiver = tempquestgivers[random_int];
	let tempquestobjectives = quest_gen.questobjectives.filter(filterByMinLevel,questantagonist.level);
	tempquestobjectives = tempquestobjectives.filter(filterByList,questkeyword);
	random_int = Math.floor(Math.random()*tempquestobjectives.length);
	let questobjective = tempquestobjectives[random_int];
	let tempquestitems = quest_gen.questitems.filter(filterByList,questkeyword);
	random_int = Math.floor(Math.random()*tempquestitems.length)
	let questitem = getNameSynonym(tempquestitems[random_int]);
	
	let questlevel = questlocation.level + questlocationmodifier.level + questantagonist.level + questgiver.level + questobjective.level + Math.floor(Math.random()*5) - 3;
	while (questlevel < minlevel)
	{
		questlocation = quest_gen.questlocations[Math.floor(Math.random()*quest_gen.questlocations.length)];
		tempantagonists = quest_gen.questantagonists.filter(filterByAtleastOneList,questlocation);
		tempquestlocmods = quest_gen.questlocationmodifiers.filter(filterByAtleastOneList,questlocation.keywords);
		random_int = Math.floor(Math.random()*tempquestlocmods.length)
		questlocationmodifier = tempquestlocmods[random_int];
		
		if (Math.random() < 0.667)
		{
			questlocationmodifier = 
			{
				"name":"",
				"lists":[],
				"keywords":[],
				"level": 0
			};
		}
		
		questlocationkeywoodsfull = questlocation.keywords.concat(questlocationmodifier.keywords);
		tempantagonists = quest_gen.questantagonists.filter(filterByAtleastOneList,questlocationkeywoodsfull);
		random_int = Math.floor(Math.random()*tempantagonists.length)
		questantagonist = tempantagonists[random_int];
		questkeyword = questantagonist.keywords[Math.floor(Math.random()*questantagonist.keywords.length)];
		tempquestgivers = quest_gen.questgivers.filter(filterByList,questkeyword);
		random_int = Math.floor(Math.random()*tempquestgivers.length);
		questgiver = tempquestgivers[random_int];
		tempquestobjectives = quest_gen.questobjectives.filter(filterByMinLevel,questantagonist.level);
		tempquestobjectives = tempquestobjectives.filter(filterByList,questkeyword);
		random_int = Math.floor(Math.random()*tempquestobjectives.length);
		questobjective = tempquestobjectives[random_int];
		tempquestitems = quest_gen.questitems.filter(filterByList,questkeyword);
		random_int = Math.floor(Math.random()*tempquestitems.length)
		questitem = getNameSynonym(tempquestitems[random_int]);
		
		questlevel = questlocation.level + questlocationmodifier.level + questantagonist.level + questgiver.level + questobjective.level + Math.floor(Math.random()*5) - 3;
	}
	
	let tempquestrewards = quest_gen.questrewards.filter(filterByList,questkeyword);
	
	let questreward = getClosestRewardToLevel(tempquestrewards,questlevel);
	
	let modifiedquestlocationname = (questlocationmodifier.name + " " + questlocation.name).trim();
	
	let quest_string = "**Quest from " + grammarAorAn(questgiver.name.charAt(0)) + " " + questgiver.name + "**\n" +
		"**Location:** the " + modifiedquestlocationname + "\n**Objective:** " + questobjective.objective + "\n" +
		"**Reward:** " + getNameSynonym(tempquestrewards[questreward]);
	
	let position = quest_string.indexOf("\[");
	let endposition = -1;
	let bosssubstr = "";
	
	while (position != -1)
	{
		endposition = quest_string.indexOf("\]");
		bosssubstr = quest_string.substring(position+1,endposition);
		substr_number = randomNumberForText(bosssubstr);
		if (bosssubstr == "antagonist")
		{
			quest_string = quest_string.substr(0,position) + questantagonist.name + quest_string.substr(endposition+1);
		}
		else if (bosssubstr == "item")
		{
			quest_string = quest_string.substr(0,position) + questitem + quest_string.substr(endposition+1);
		}
		else if (bosssubstr == "god")
		{
			quest_string = quest_string.substr(0,position) + questgod + quest_string.substr(endposition+1);
		}
		else if (substr_number != false)
		{
			quest_string = quest_string.substr(0,position) + substr_number.toString() + quest_string.substr(endposition+1);
		}
		else
		{
			quest_string = quest_string.substr(0,position) + quest_string.substr(endposition+1);
		}
		position = quest_string.indexOf("\[");
	}
	
	return quest_string;
}


//
// new 
// generateArtifact
//
//

function filterByKeyword(artifactproperty)
{
	for (i in artifactproperty.keywords)
	{
		if (this == artifactproperty.keywords[i])
			return true;
	}
	return false;
}

let MAX_CURSES = 7;
let MAX_ENCHANTS = 7;
let MAX_QUIRKS = 7;

function generateArtifact(arguments)
{
	let baseitemtypes = ["shortblade","largeblade","dagger","throwingknives","ropeweapon","polearm","staff","magestaff","smallhammer","largehammer","wand","magicoffhand","smallarms","longarms","armour","clothes","bow","sling","tool","shield","jewelery","holysymbol"];
	let baseitem = generateItemFromTypes(baseitemtypes);
	
	let tempcurselist = artifact_gen.curses.filter(filterByKeyword,baseitem.type);
	let tempenchantlist = artifact_gen.enchantments.filter(filterByKeyword,baseitem.type);
	let tempquirklist = artifact_gen.quirks.filter(filterByKeyword,baseitem.type);
	
	let cursecount = Math.floor(Math.random()*3)-1;
	let enchantcount = Math.floor(Math.random()*7)-3;
	let quirkcount = Math.floor(Math.random()*3)-1;
	let numberofproperties = 0;
	let totalchosenproperties = 0;
	
	if (arguments != null)
	{
		if (arguments.length > 0)
		{
			numberofproperties = randomNumberForText(arguments[0]);
			if (!numberofproperties)
				numberofproperties = parseInt(arguments[0]);
			
			if (numberofproperties > MAX_ENCHANTS)
				numberofproperties = MAX_ENCHANTS;
			
			if (!isNaN(numberofproperties))
			{
				enchantcount = numberofproperties;
				totalchosenproperties += numberofproperties;
			}
		}
		if (arguments.length > 1)
		{
			numberofproperties = randomNumberForText(arguments[1]);
			if (!numberofproperties)
				numberofproperties = parseInt(arguments[1]);
			
			if (numberofproperties > MAX_CURSES)
				numberofproperties = MAX_CURSES;
			
			if (!isNaN(numberofproperties))
			{
				cursecount = numberofproperties;
				totalchosenproperties += numberofproperties;
			}
		}
		if (arguments.length > 2)
		{
			numberofproperties = randomNumberForText(arguments[2]);
			if (!numberofproperties)
				numberofproperties = parseInt(arguments[2]);
			
			if (numberofproperties > MAX_QUIRKS)
				numberofproperties = MAX_QUIRKS;
			
			if (!isNaN(numberofproperties))
			{
				quirkcount = numberofproperties;
				totalchosenproperties += numberofproperties;
			}
		}
	}
	
	while (totalchosenproperties < 1 && Math.max(cursecount,0)+Math.max(enchantcount,0)+Math.max(quirkcount,0) < 2)
	{
		cursecount = Math.floor(Math.random()*3)-1;
		enchantcount = Math.floor(Math.random()*7)-3;
		quirkcount = Math.floor(Math.random()*3)-1;
	}
	
	let effects = [];
	
	let random_int = Math.floor(Math.random()*tempcurselist.length);
	for (let i = 0; i < cursecount; i++)
	{
		effects.push(tempcurselist[random_int]);
		tempcurselist.splice(random_int,1);
		if (tempenchantlist.length == 0)
			i += cursecount;
		else
			random_int = Math.floor(Math.random()*tempcurselist.length);
	}
	
	random_int = Math.floor(Math.random()*tempenchantlist.length);
	for (let i = 0; i < enchantcount; i++)
	{
		effects.push(tempenchantlist[random_int]);
		tempenchantlist.splice(random_int,1);
		if (tempenchantlist.length == 0)
			i += enchantcount;
		else
			random_int = Math.floor(Math.random()*tempenchantlist.length);
	}
	
	random_int = Math.floor(Math.random()*tempquirklist.length);
	for (let i = 0; i < quirkcount; i++)
	{
		effects.push(tempquirklist[random_int]);
		tempquirklist.splice(random_int,1);
		if (tempquirklist.length == 0)
			i += quirkcount;
		else
			random_int = Math.floor(Math.random()*tempquirklist.length);
	}
	
	artifact_string = "";
	
	let baserand  = Math.random();
	if (baserand < 0.1) // single first word name
	{
		artifact_string = "The " + item_artifactnames.first[Math.floor((Math.random()*item_artifactnames.first.length))] + "\n";
	}
	else if (baserand < 0.2) // single last word name
	{
		artifact_string = "The " + item_artifactnames.last[Math.floor((Math.random()*item_artifactnames.last.length))] + "\n";
	}
	else
	{
		artifact_string = "The " + item_artifactnames.first[Math.floor((Math.random()*item_artifactnames.first.length))] + " " + item_artifactnames.last[Math.floor((Math.random()*item_artifactnames.last.length))] + "\n";
	}
	
	let artifact_effects_string = "";
	
	for (let i = 0; i < effects.length; i++)
	{
		artifact_effects_string += effects[i].description;
		if (i < effects.length-2)
		{
			artifact_effects_string += ", ";
		}
		else if (i == effects.length-2)
		{
			artifact_effects_string += " and ";
		}
	}
	
	
	let position = artifact_effects_string.indexOf("\[");
	let endposition = -1;
	let artifactsubstr = "";
	let itnouned = false;
	
	while (position != -1)
	{
		endposition = artifact_effects_string.indexOf("\]");
		artifactsubstr = artifact_effects_string.substring(position+1,endposition);
		substr_number = randomNumberForText(artifactsubstr);
		if (artifactsubstr == "it")
		{
			if (!itnouned)
			{
				artifact_effects_string = artifact_effects_string.substr(0,position) + "this " + baseitem.item + artifact_effects_string.substr(endposition+1);
				itnouned = true;
			}
			else
			{
				artifact_effects_string = artifact_effects_string.substr(0,position) + "it" + artifact_effects_string.substr(endposition+1);
			}
		}
		else if (substr_number != false)
		{
			artifact_effects_string = artifact_effects_string.substr(0,position) + substr_number.toString() + artifact_effects_string.substr(endposition+1);
		}
		else
		{
			artifact_effects_string = artifact_effects_string.substr(0,position) + artifact_effects_string.substr(endposition+1);
		}
		position = artifact_effects_string.indexOf("\[");
	}
	
	
	artifact_string += grammarCapitalFirstLetter(artifact_effects_string) + ".";
	
	return artifact_string;
}

//
//
// base64 to binary file function
//
//

function base64data(uri)
{
	return uri.split(';base64,').pop();
}

// returns a 1D array that is a noise map, height x width size
function noiseMap(height, width)
{
	let map = [];
	let previousx = 0.33;
	let previousy = 0.33;
	let dx = 0;
	let dy = 0;
	let val = 0;
	for (let y = 0; y < height; y++)
	{
		for (let x  = 0; x < width; x++)
		{
			if (Math.random() < 0.5)
				dx = Math.random()*0.25;
			else
				dx = Math.random()*-0.25;
			if (Math.random() < 0.5)
				dy = Math.random()*0.25;
			else
				dy = Math.random()*-0.25;
			val = (previousx + previousy)/2 + (dy + dx)/2;
			if (val < 0)
				val = 0;
			else if (val > 1)
				val = 1;
			
			map.push(val);
			previousx = val;
			if (x+(y-1*width) > -1)
				previousy = map[x+(y-1*width)];
		}
		previousx = 0.33;
	}
	
	return map;
}


//
//
// map generator function
//
//

let LAND_LEVEL = 0.3;
let HILL_LEVEL = 0.45;
let MOUNTAIN_LEVEL = 0.61;

let PLAINS_LEVEL = 0.295;
let GRASS_LEVEL = 0.4875;
let TUNDRA_LEVEL = 0.595;
let SNOW_LEVEL = 0.734;

let FOREST_LEVEL = 0.55;
let JUNGLE_LEVEL = 0.83;

let MAX_MAP_HEIGHT = 100;
let MAX_MAP_WIDTH = 150;

let SMOOTHING_ITERATIONS = 3;
let LAND_EROSION = 0.64;

function generateMap(channel, arguments)
{
	let MAP_HEIGHT = 18;
	let MAP_WIDTH = 32;
	let LANDMASSES = Math.floor(MAP_HEIGHT + MAP_WIDTH / 6.9);
	if (arguments != null)
	{
		if (!isNaN(arguments[1]))
			MAP_HEIGHT = Math.floor(arguments[1]);
		if (!isNaN(arguments[0]))
			MAP_WIDTH = Math.floor(arguments[0]);
		if (!isNaN(arguments[2]))
			LANDMASSES = Math.floor(arguments[2]);
	}
	
	if (MAP_WIDTH < 1)
		return null;
	if (MAP_HEIGHT < 1)
		return null;
	
	MAP_HEIGHT = Math.min(MAP_HEIGHT,MAX_MAP_HEIGHT);
	MAP_WIDTH = Math.min(MAP_WIDTH,MAX_MAP_WIDTH);
	
	let heightmap = noiseMap(MAP_HEIGHT,MAP_WIDTH);
	let terrainmap = noiseMap(MAP_HEIGHT,MAP_WIDTH);
	
	let premapmap = [];
	//initialize the premapmap
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			premapmap.push({ sealevel: "water", terrain: "grass" });
		}
	}
	
	//do landmasses
	
	for (let i = 0; i < LANDMASSES; i++)
	{
		let randomwidth = Math.floor(Math.random()*Math.ceil(MAP_WIDTH*0.58))+8;
		let randomheight = Math.floor(Math.random()*Math.ceil(MAP_HEIGHT*0.58))+8;
		let randomx = Math.floor(Math.random()*(MAP_WIDTH - randomwidth-4))+2;
		let randomy = Math.floor(Math.random()*(MAP_HEIGHT - randomheight-4))+2;
		
		let midpointx = Math.floor(randomwidth/2);
		let midpointy = Math.floor(randomheight/2);
		
		for (let x = randomx; x < randomwidth+randomx; x++)
		{
			for (let y = randomy; y < randomheight+randomy; y++)
			{
				let probx = Math.abs(1 - ((x - randomx) / midpointx));
				let proby = Math.abs(1 - ((y - randomy) / midpointy));
				let probability = probx * proby * LAND_EROSION;
				if (Math.random() < probability)
				{
					if (x+(y*MAP_WIDTH) > -1 && x+(y*MAP_WIDTH) < MAP_HEIGHT*MAP_WIDTH)
						premapmap[x+(y*MAP_WIDTH)].sealevel = "land";
				}
			}
		}
	}
	
	for (let i = 0; i < SMOOTHING_ITERATIONS; i++)
	{
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				let waterCount = 6;
				if (x+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[x+((y+1)*MAP_WIDTH)].sealevel == "land")
					waterCount--;
				if (x+((y-1)*MAP_WIDTH) > -1 && premapmap[x+((y-1)*MAP_WIDTH)].sealevel == "land")
					waterCount--
				if (x%2 == 0)
				{
					if ((x+1)+(y*MAP_WIDTH) < premapmap.length && premapmap[(x+1)+(y*MAP_WIDTH)].sealevel == "land")
						waterCount--;
					if ((x+1)+((y-1)*MAP_WIDTH) > -1 && (x+1)+((y-1)*MAP_WIDTH) < premapmap.length && premapmap[(x+1)+((y-1)*MAP_WIDTH)].sealevel == "land")
						waterCount--;
					if ((x-1)+(y*MAP_WIDTH) > -1 && premapmap[(x-1)+(y*MAP_WIDTH)].sealevel == "land")
						waterCount--;
					if ((x-1)+((y-1)*MAP_WIDTH) > -1 && premapmap[(x-1)+((y-1)*MAP_WIDTH)].sealevel == "land")
						waterCount--;
				}
				else
				{
					if ((x+1)+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[(x+1)+((y+1)*MAP_WIDTH)].sealevel == "land")
						waterCount--;
					if ((x+1)+(y*MAP_WIDTH) < premapmap.length && premapmap[(x+1)+(y*MAP_WIDTH)].sealevel == "land")
						waterCount--;
					if ((x-1)+((y+1)*MAP_WIDTH) > -1 && (x-1)+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[(x-1)+((y+1)*MAP_WIDTH)].sealevel == "land")
						waterCount--;
					if ((x-1)+(y*MAP_WIDTH) > -1 && premapmap[(x-1)+(y*MAP_WIDTH)].sealevel == "land")
						waterCount--;
				}
				
				if (waterCount == 6)
				{
					premapmap[x+(y*MAP_WIDTH)].sealevel = "water";
				}
				else if (waterCount < 3 && premapmap[x+(y*MAP_WIDTH)].sealevel == "water")
				{
					premapmap[x+(y*MAP_WIDTH)].sealevel = "land";
				}
			}
		}
	}
	
	
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			if (premapmap[x+(y*MAP_WIDTH)].sealevel == "land")
			{
				if (heightmap[x+(y*MAP_WIDTH)] > MOUNTAIN_LEVEL)
				{
					if (terrainmap[x+(y*MAP_WIDTH)] > SNOW_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "mountain";
						premapmap[x+(y*MAP_WIDTH)].terrain = "snow";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > TUNDRA_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "mountain";
						premapmap[x+(y*MAP_WIDTH)].terrain = "tundra";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > GRASS_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "mountain";
						premapmap[x+(y*MAP_WIDTH)].terrain = "grass";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > PLAINS_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "mountain";
						premapmap[x+(y*MAP_WIDTH)].terrain = "plains";
					}
					else
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "mountain";
						premapmap[x+(y*MAP_WIDTH)].terrain = "desert";
					}
				}
				else if (heightmap[x+(y*MAP_WIDTH)] > HILL_LEVEL)
				{
					if (terrainmap[x+(y*MAP_WIDTH)] > SNOW_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "hill";
						premapmap[x+(y*MAP_WIDTH)].terrain = "snow";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > TUNDRA_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "hill";
						premapmap[x+(y*MAP_WIDTH)].terrain = "tundra";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > GRASS_LEVEL)
					{
						
						premapmap[x+(y*MAP_WIDTH)].sealevel = "hill";
						premapmap[x+(y*MAP_WIDTH)].terrain = "grass";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > PLAINS_LEVEL)
					{
						
						premapmap[x+(y*MAP_WIDTH)].sealevel = "hill";
						premapmap[x+(y*MAP_WIDTH)].terrain = "plains";
					}
					else
					{
						
						premapmap[x+(y*MAP_WIDTH)].sealevel = "hill";
						premapmap[x+(y*MAP_WIDTH)].terrain = "desert";
					}
				}
				else if (heightmap[x+(y*MAP_WIDTH)] > LAND_LEVEL)
				{
					if (terrainmap[x+(y*MAP_WIDTH)] > SNOW_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].terrain = "snow";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > TUNDRA_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].terrain = "tundra";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > GRASS_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].terrain = "grass";
					}
					else if (terrainmap[x+(y*MAP_WIDTH)] > PLAINS_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].terrain = "plains";
					}
					else
					{
						premapmap[x+(y*MAP_WIDTH)].terrain = "desert";
					}
				}
			}
		}
	}
	
	let mapmap = [];
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			let xpos = (12*x);
			let ypos = (16*y+((x%2)*8));
			let trees = true;
			if (premapmap[x+(y*MAP_WIDTH)].sealevel == "mountain")
			{
				if (premapmap[x+(y*MAP_WIDTH)].terrain == "snow")
				{
					mapmap.push({ src: './terrain_tiles_snow_flat.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "tundra")
				{
					mapmap.push({ src: './terrain_tiles_tundra_flat.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "grass")
				{
					mapmap.push({ src: './terrain_tiles_grass_flat.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "plains")
				{
					mapmap.push({ src: './terrain_tiles_plains_flat.png', x: xpos, y: ypos});
				}
				else
				{
					mapmap.push({ src: './terrain_tiles_desert_flat.png', x: xpos, y: ypos});
				}
				mapmap.push({ src: './terrain_tiles_mountain.png', x: xpos, y: ypos});
			}
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "hill")
			{
				if (premapmap[x+(y*MAP_WIDTH)].terrain == "snow")
				{
					mapmap.push({ src: './terrain_tiles_snow_hills.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "tundra")
				{
					mapmap.push({ src: './terrain_tiles_tundra_hills.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "grass")
				{
					mapmap.push({ src: './terrain_tiles_grass_hills.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "plains")
				{
					mapmap.push({ src: './terrain_tiles_plains_hills.png', x: xpos, y: ypos});
				}
				else
				{
					trees = false;
					mapmap.push({ src: './terrain_tiles_desert_hills.png', x: xpos, y: ypos});
				}
				
				if (trees)
				{
					let baserand = Math.random();
					if (baserand > JUNGLE_LEVEL)
					{
						mapmap.push({ src: './terrain_tiles_jungle.png', x: xpos, y: ypos});
					}
					else if (baserand > FOREST_LEVEL)
					{
						mapmap.push({ src: './terrain_tiles_forest.png', x: xpos, y: ypos});
					}
				}
			}
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "land")
			{
				if (premapmap[x+(y*MAP_WIDTH)].terrain == "snow")
				{
					mapmap.push({ src: './terrain_tiles_snow_flat.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "tundra")
				{
					mapmap.push({ src: './terrain_tiles_tundra_flat.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "grass")
				{
					if (Math.random() < 0.125)
					{
						mapmap.push({ src: './terrain_tiles_marsh.png', x: xpos, y: ypos});
						trees = false;
					}
					else
					{
						mapmap.push({ src: './terrain_tiles_grass_flat.png', x: xpos, y: ypos});
					}
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "plains")
				{
					mapmap.push({ src: './terrain_tiles_plains_flat.png', x: xpos, y: ypos});
				}
				else
				{
					trees = false;
					if (Math.random() < 0.033)
					{
						mapmap.push({ src: './terrain_tiles_oasis.png', x: xpos, y: ypos});
					}
					else
					{
						mapmap.push({ src: './terrain_tiles_desert_flat.png', x: xpos, y: ypos});
					}
				}
				if (trees)
				{
					let baserand = Math.random();
					if (baserand > JUNGLE_LEVEL)
					{
						mapmap.push({ src: './terrain_tiles_jungle.png', x: xpos, y: ypos});
					}
					else if (baserand > FOREST_LEVEL)
					{
						mapmap.push({ src: './terrain_tiles_forest.png', x: xpos, y: ypos});
					}
				}
					
			}
			else
				mapmap.push({ src: './terrain_tiles_water.png', x: xpos, y: ypos});
		}
	}
	
	let file = 'generatedmap.png';
	let path = './' + file;
	
	mergeImages(mapmap, 
	{
		width: (12*MAP_WIDTH + 4),
		height: (16*MAP_HEIGHT + 8),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64,file), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
	/*
	channel.send({
	files: [{
	attachment: path,
	name: file
	}]
	})*/
}

//
//
// goblin generator function
//
//

let GOBLINCOLOURS = 4;

function generateGoblin(channel, arguments)
{
	let goblin_colour = Math.floor(Math.random()*GOBLINCOLOURS);
	let assembledgoblin = [];
	
	let goblin_body = goblin_gen.bodies[Math.floor(Math.random()*goblin_gen.bodies.length)];
	let bodypath = goblin_body.path[goblin_colour%goblin_body.path.length];
	assembledgoblin.push(bodypath);
	
	let random_int = Math.floor(Math.random()*goblin_gen.clothes.length);
	let clothespath = goblin_gen.clothes[random_int].path[goblin_colour%goblin_gen.clothes[random_int].path.length];
	assembledgoblin.push(clothespath);
	
	random_int = Math.floor(Math.random()*goblin_gen.heads.length);
	let headpath = goblin_gen.heads[random_int].path[goblin_colour%goblin_gen.heads[random_int].path.length];
	assembledgoblin.push(headpath);
	
	random_int = Math.floor(Math.random()*goblin_gen.mouths.length);
	let mouthpath = goblin_gen.mouths[random_int].path[goblin_colour%goblin_gen.mouths[random_int].path.length];
	assembledgoblin.push(mouthpath);
	
	random_int = Math.floor(Math.random()*goblin_gen.noses.length);
	let nosepath = goblin_gen.noses[random_int].path[goblin_colour%goblin_gen.noses[random_int].path.length];
	assembledgoblin.push(nosepath);
	
	random_int = Math.floor(Math.random()*goblin_gen.eyes.length);
	let eyespath = goblin_gen.eyes[random_int].path[goblin_colour%goblin_gen.eyes[random_int].path.length];
	assembledgoblin.push(eyespath);
	
	random_int = Math.floor(Math.random()*goblin_gen.earrings.length);
	let earringspath = goblin_gen.earrings[random_int].path[goblin_colour%goblin_gen.earrings[random_int].path.length];
	assembledgoblin.push(earringspath);
	
	random_int = Math.floor(Math.random()*goblin_gen.headstuff.length);
	let headstuffpath = goblin_gen.headstuff[random_int].path[goblin_colour%goblin_gen.headstuff[random_int].path.length];
	assembledgoblin.push(headstuffpath);
	
	if (goblin_body.leftarm)
	{
		random_int = Math.floor(Math.random()*goblin_gen.lefthand.length);
		let lefthandpath = goblin_gen.lefthand[random_int].path[goblin_colour%goblin_gen.lefthand[random_int].path.length];
		assembledgoblin.push(lefthandpath);
	}
	
	if (goblin_body.rightarm)
	{
		random_int = Math.floor(Math.random()*goblin_gen.righthand.length);
		let righthandpath = goblin_gen.righthand[random_int].path[goblin_colour%goblin_gen.righthand[random_int].path.length];
		assembledgoblin.push(righthandpath);
	}
	
	let file = 'goblinoftheminute.png';
	let path = './' + file;
	
	mergeImages(assembledgoblin, 
	{
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64,file), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
}


//
//
// one shot RPG generator
//
//

function generateOneShotRPG(length)
{
	let randomRoll = Math.random();
	let tempadjectivelist = monster_adjectives.filter(filterByList,"monster")
	
	let tempthingstobe = oneshotrpg_gen.thingstobe.slice();
	let random_int = Math.floor(Math.random()*tempthingstobe.length);
	let thing1 = tempthingstobe[random_int];
	tempthingstobe.splice(random_int,1);
	random_int = Math.floor(Math.random()*tempthingstobe.length);
	let thing2 = tempthingstobe[random_int];
	
	let thingthing = "";
	
	if (thing1.priority < thing2.priority)
	{
		thingthing = thing1.name + " " + thing2.name + "s";
	}
	else
	{
		thingthing = thing2.name + " " + thing1.name + "s";
	}
	
	if (randomRoll < 0.45)
	{
		random_int = Math.floor((Math.random()*tempadjectivelist.length));
		thingthing = getAdjectiveString(tempadjectivelist[random_int]) + " " + thingthing;
	}
	
	let thing1stat = thing1.stats[Math.floor(Math.random()*thing1.stats.length)]
	let thing2stat = thing2.stats[Math.floor(Math.random()*thing2.stats.length)]
	
	let thing1mechanic = oneshotrpg_gen.mechanics[Math.floor(Math.random()*oneshotrpg_gen.mechanics.length)]
	let thing2mechanic = oneshotrpg_gen.mechanics[Math.floor(Math.random()*oneshotrpg_gen.mechanics.length)]
	let twist = oneshotrpg_gen.twists[Math.floor(Math.random()*oneshotrpg_gen.twists.length)]
	
	let output = "You are " + thingthing + ".\nYou have two stats: " + thing1stat + " and " + thing2stat + ".";
		
		
	if (length != null)
	{
		output += "\n" + grammarCapitalFirstLetter(thing1stat) + thing1mechanic + ".\n" +
			grammarCapitalFirstLetter(thing2stat) + thing2mechanic + ".\n" +
			grammarCapitalFirstLetter(twist) + ".";
	}
	
	
	let diesize = oneshotrpg_gen.dice[Math.floor(Math.random()*oneshotrpg_gen.dice.length)];
	let diemax = parseInt(diesize.substring(1));
	let beatnum = Math.floor(Math.random()*(diemax-1))+1;
	
	let position = output.indexOf("\[");
	let endposition = -1;
	let output_substring = "";
	let substr_number = "";
	
	while (position != -1)
	{
		endposition = output.indexOf("\]");
		output_substring = output.substring(position+1,endposition);
		substr_number = randomNumberForText(output_substring);
		if (output_substring == "die")
		{
			output = output.substr(0,position) + diesize + output.substr(endposition+1);
		}
		else if (output_substring == "diemaxnumber")
		{
			output = output.substr(0,position) + diemax + output.substr(endposition+1);
		}
		else if (output_substring == "beatnumber")
		{
			output = output.substr(0,position) + beatnum + output.substr(endposition+1);
		}
		else
		{
			output = output.substr(0,position) + output.substr(endposition+1);
		}
		position = output.indexOf("\[");
	}
	
	
	return output;
}


//
//
// sapphic initiating help function
//
//

function helpsapphicinitiate(multi)
{
	let random_int = Math.floor(Math.random()*(sapphichelper.initiatetarget.length+1));
	let noun = "";
	let verb = "";
	let output = "";
	let randval = Math.random();
	if (random_int < sapphichelper.initiatetarget.length)
	{
		noun = sapphichelper.initiatetarget[Math.floor(Math.random()*sapphichelper.initiatetarget.length)]; // is an object, not a string
		verb = noun.lists[Math.floor(Math.random()*noun.lists.length)];
		output = grammarCapitalFirstLetter(verb) + " their " + noun.word;
	}
	else
	{
		verb = sapphichelper.initiatedirect[Math.floor(Math.random()*sapphichelper.initiatedirect.length)];
		randval = randval*0.5;
		output = grammarCapitalFirstLetter(verb) + " them";
	}
	
	if (multi && (randval < 0.14))
	{
		output += " and " + helpsapphicinitiate(false).toLowerCase();
	}
	
	return output + "!";
}

//
// excited allidroid
//

function excited()
{
	let baserand = Math.random();
	if (baserand < 0.89)
		return "";
	else if (baserand < 0.93)
		return "!!";
	else if (baserand < 0.97)
		return "!!!!";
	else
		return "!!!!!!!!";
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