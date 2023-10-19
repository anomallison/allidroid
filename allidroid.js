////////
//
// written by AnomAllison
// last updated 27/05/2023
//
// I hope Allidroid can bring people some humour and entertainment
//
////////

//const Discord = require('discord.js')
//const client = new Discord.Client()

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [ "GUILDS", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS", "DIRECT_MESSAGES" ] });


const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

const paper = require('paper-jsdom-canvas');

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

//bird generator files
var bird_gen = JSON.parse(fs.readFileSync('bird_gen/bird_generator.json'));

//goblin generator files
var goblin_gen = JSON.parse(fs.readFileSync('goblin_gen/goblin_generator.json'));

//fren generator files
var fren_gen = JSON.parse(fs.readFileSync('friend_gen/fren_gen.json'));

//slime generator files
var slime_gen = JSON.parse(fs.readFileSync('slime_gen/slime_gen.json'));

//familiar generator files
var familiar_gen = JSON.parse(fs.readFileSync('familiar_gen/familiar_gen.json'));

//psyduck generator files
var psyduck_gen = JSON.parse(fs.readFileSync('psyduck_gen/psyduck_gen.json'));

//city generator files
var city_gen = JSON.parse(fs.readFileSync('city_gen/city_generator.json'));
var hexcity_gen = JSON.parse(fs.readFileSync('hexcity_gen/hexcitygenerator.json'));

//adventure simulator files
var adventure_sim = JSON.parse(fs.readFileSync('adventuresim.json'));

//alien language files
var alien_alphabet = JSON.parse(fs.readFileSync('alienlanguage/alienalphabet.json'));

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

client.on('messageCreate', (receivedMessage) => {
	try
	{
		if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
		   return
		}

		if (receivedMessage.guild != null)
		{
			receivedMessage.guild.members.fetch(receivedMessage.author.id)
			.then( member => {
				roles = member.roles.cache;
				if (!hasName(roles, "bot banned")) // warning: hasName always checks against lowercase names
				{;
					if (receivedMessage.content.startsWith("!")) {
						processCommand(receivedMessage)
					}
				}
				else
				{
					console.log("Command ignored, due to ban");
				}
			})
			.catch(console.error);
		}
		else if (receivedMessage.content.startsWith("!")) 
		{
			processCommand(receivedMessage);
			/*
			try
			{
				
			}
			catch (err)
			{
				
			}
			*/
		}
	}
	catch (err)
	{
		console.log(Date.now() + ", error: " + err.message);
	}
})

//
//
// COMMANDS PROCESSED HERE
//
//

function processCommand(receivedMessage) 
{
    let fullCommand = receivedMessage.content.substr(1); // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
	let normalizedCommand = primaryCommand.toLowerCase();
    let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

	let output;
	
    console.log("Command received: " + primaryCommand);
    console.log("Arguments: " + arguments); // There may not be any arguments
	
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
		receivedMessage.channel.send(rollManyDice(arguments[0], arguments[1]));
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
    } else if (normalizedCommand == "legacygeneratename") 
	{
		if (arguments.length > 2)
		{
			output = generatePhonemeNameList(parseInt(arguments[0]), parseInt(arguments[1]), parseInt(arguments[2]));
		} else if (arguments.length == 2)
		{
			output = generatePhonemeNameList(parseInt(arguments[0]), parseInt(arguments[1]));
		}  else if (arguments.length == 1)
		{
			output = generatePhonemeNameList(parseInt(arguments[0]));
		} else
		{
			output = generatePhonemeNameList();
		}
		
		if (output == null)
		{
			console.log("failed command: legacygeneratename");
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
    } else if (normalizedCommand == "makeparty") 
	{
		output = makeParty(arguments);
		
		if (output == null)
		{
			console.log("failed command: makeparty");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "adventure") 
	{
		output = startAdventure(arguments[0],parseInt(arguments[1]));
		
		if (output == null)
		{
			console.log("failed command: adventure");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "partysummary") 
	{
		output = outputPartySummary(arguments);
		
		if (output == null)
		{
			console.log("failed command: partysummary");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "partymember") 
	{
		output = outputPartyMemberSummary(arguments);
		
		if (output == null)
		{
			console.log("failed command: partymember");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "disbandparty") 
	{
		output = disbandParty(arguments);
		
		if (output == null)
		{
			console.log("failed command: disbandparty");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "retirepartymember") 
	{
		output = retirePartyMember(arguments);
		
		if (output == null)
		{
			console.log("failed command: retirepartymember");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "recruitpartymember") 
	{
		output = recruitPartyMembers(arguments);
		
		if (output == null)
		{
			console.log("failed command: recruitpartymember");
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
    } else if (normalizedCommand == "psyduck") 
	{
		generatePsyduck(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "frog") 
	{
		generateFren(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "slime") 
	{
		generateSlime(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "familiar") 
	{
		generateFamiliar(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "bird") 
	{
		generateBird(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "outputadventureworldmap") 
	{
		outputAdventureWorldMap(receivedMessage.channel,arguments);
    }else if (normalizedCommand == "generatecity") 
	{
		generateCityMap(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "generatevillage") 
	{
		generateHexCity(receivedMessage.channel,arguments);
    } 
	else if (normalizedCommand == "noisemap") 
	{
		noisemaptopng(receivedMessage.channel,arguments);
    }  
	else if (normalizedCommand == "alienlanguage") 
	{
		encodeToAlienLanguage(receivedMessage.channel,arguments);
    }
	else if (normalizedCommand == "generatename") 
	{
		output = MarkovPhonemeNameGen(arguments);
		
		if (output == null)
		{
			console.log("failed command: generatename");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    }
	else if (normalizedCommand == "rendertownmap")
	{
		DrawTownMap(receivedMessage.channel,arguments);
	}
	else if (normalizedCommand == "renderhexworldmap")
	{
		DrawHexWorldMap(receivedMessage.channel,arguments);
	}
	else if (normalizedCommand.substr(0,2) == "!!")
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
	help_string = fs.readFileSync('help_general.txt').toString();
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
	else if (arguments[0] == "!generatecity" || arguments[0] == "generatecity")
	{
		help_string = fs.readFileSync('help_generatecity.txt').toString();
		//user.send({ files: [{ attachment: './help_generatecity.txt', name: 'help_generatecity.txt' }] });
	}
	else if (arguments[0] == "!generatevillage" || arguments[0] == "generatevillage")
	{
		help_string = fs.readFileSync('help_generatevillage.txt').toString();
		//user.send({ files: [{ attachment: './help_generatevillage.txt', name: 'help_generatevillage.txt' }] });
	}
	else if (arguments[0] == "!alienlanguage" || arguments[0] == "alienlanguage")
	{
		help_string = fs.readFileSync('help_alienlanguage.txt').toString();
		//user.send({ files: [{ attachment: './help_alienlanguage.txt', name: 'help_alienlanguage.txt' }] });
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
	else if (arguments[0] == "!adventure" || arguments[0] == "adventure")
	{
		help_string = fs.readFileSync('help_adventure.txt').toString();
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
	client.channels.cache.get(target_channel).send(message);
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

function argumentsbacktostring(target, start, end = -99999)
{
	if (end == -99999)
	{
		end = target.length;
	}
	if (start >= end)
	{
		return "";
	}
	let target_string = target[start];
	for (let i = start+1; i < end && i < target.length; i++)
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
		return val == arrVal.name.toLowerCase();
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

function rollManyDice(r, advDisadv = "")
{
	let fulldicestring = r;
	let dice = []
	let positionu43 = fulldicestring.indexOf("+");
	let positionu45 = fulldicestring.indexOf("-");
	let position = -1;
	let disadvantage = false;
	let advantage = false;
	
	if (advDisadv == "disadvantage")
		disadvantage = true;
	else if (advDisadv == "advantage")
		advantage = true;
	
	if (positionu43 == -1)
	{
		position = positionu45;
	}
	else if (positionu45 == -1)
	{
		position = positionu43;
	}
	else
	{
		position = Math.min(positionu43, positionu45);
	}
	
	if (position != -1)
	{
		dice.push({ die: fulldicestring.substr(0,position), operation: "+"});
		fulldicestring = fulldicestring.substring(position);
	}
	else
	{
		dice.push({ die: fulldicestring, operation: "+" });
		fulldicestring = "";
	}
	
	let charat = fulldicestring.charAt(0);
	while (charat != "")
	{
		let positionu43 = fulldicestring.substr(1).indexOf("+");
		let positionu45 = fulldicestring.substr(1).indexOf("-");
		let end = -1;
		if (positionu43 == -1)
		{
			end = positionu45;
		}
		else if (positionu45 == -1)
		{
			end = positionu43;
		}
		else
		{
			end = Math.min(positionu43, positionu45);
		}
		
		if (end == -1)
			end = fulldicestring.length-1;
		
		
		if (charat == "+")
			dice.push({ die: fulldicestring.substr(1,end), operation: "+"});
		else if (charat == "-")
			dice.push({ die: fulldicestring.substr(1,end), operation: "-" });
		
		if (end != -1)
			fulldicestring = fulldicestring.substring(end+1);
		else
			fulldicestring = "";
		console.log(fulldicestring);
		charat = fulldicestring.charAt(0);
	}
	
	total = 0;
	resultstring = "(";
	let current;
	for (let i= 0; i < dice.length; i++)
	{
		current = dieRoll(dice[i].die, advantage, disadvantage);
		if (current.result !== undefined)
		{
			if (dice[i].operation == "+")
			{
				total += current.result;
				if (i == 0)
					resultstring += current.details;
				else
					resultstring += " + " + current.details;
			}
			else if (dice[i].operation == "-")
			{
				total -= current.result;
				if (i == 0)
					resultstring += current.details;
				else
					resultstring += " - " + current.details;
			}
		}
	}
	
	resultstring += ")";
	
	if (dice.length == 1)
		return "**" + current.result + "** " + current.details;
	
	return "**" + total + "** " + resultstring;
}

function dieRoll(r, advantage = false, disadvantage = false)
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
	let highDropped = 0;
	let stringroll = "";
	let resultString = "(";
	let dieresults = [];
	let droppeddie = [];
	let multiplierPre;
	let multiplier = 1;
	
	if (isNaN(numberOfDice))
	{
		numberOfDice = 1;
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
	
	position = r.indexOf("*");
	if (position != -1)
	{
		multiplierPre = r.substr(position+1);
		multiplier = parseInt(r.substr(position+1));
	}
	
	position = r.indexOf("d");
	dposition = r.lastIndexOf("d");
	if (dposition != -1 && dposition != position)
	{
		diceDropped = parseInt(r.substr(dposition+1));
	}
	
	if (diceDropped > numberOfDice)
	{
		return "can't drop (" + diceDropped.toString() +" low) more dice than you're rolling";
	}
	
	let hposition = r.lastIndexOf("h");
	if (hposition != -1)
	{
		highDropped = parseInt(r.substr(hposition+1));
	}
	
	if (highDropped > numberOfDice)
	{
		return "can't drop (" + highdropped.toString() +" high) more dice than you're rolling";
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
			if (disadvantage == advantage)
			{
				dieresults.push(Math.floor((Math.random() * diceSides) + 1));
			}
			else if (disadvantage)
			{
				let resulta = (Math.floor((Math.random() * diceSides) + 1));
				let resultb = (Math.floor((Math.random() * diceSides) + 1));
				dieresults.push(Math.min(resulta,resultb));
				droppeddie.push(Math.max(resulta,resultb));
			}
			else if (advantage)
			{
				let resulta = (Math.floor((Math.random() * diceSides) + 1));
				let resultb = (Math.floor((Math.random() * diceSides) + 1));
				dieresults.push(Math.max(resulta,resultb));
				droppeddie.push(Math.min(resulta,resultb));
			}
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
	
	for (let i = 0; i < highDropped; i++)
	{
		let highestDie = 0;
		let highestDieIndex = -1;
		for (j in dieresults)
		{
			if (dieresults[j] > highestDie)
			{
				highestDie = dieresults[j];
				highestDieIndex = j;
			}
		}
		dieresults.splice(highestDieIndex,1);
		droppeddie.push(highestDie);
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
	totalroll *= multiplier;
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
	
	if (multiplier != 1)
	{
		resultString += " * " + multiplier;
	}
	
	if (diceSides == 0)
	{
		return { result: totalroll, details: totalroll };
	}
	
	
	
	//resultString = "**" + totalroll + "** " + resultString;
	//if (resultString.length > 2000)
	//	return totalroll + ", I will not be fielding any questions, thank you."
	//if (numberOfDice < 2 && diceMod == 0)
	//	return totalroll;
	return { result: totalroll, details: resultString };
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

function generatePhonemeNameList(amount = 1, maxsyllables = 5, minimumsyllables = 1)
{
	let names = [];
	
	names.push(generatePhonemeName(maxsyllables, minimumsyllables));
	for(let i = 1; i < amount; i++)
	{
		names.push(generatePhonemeName(maxsyllables, minimumsyllables));
	}
	
	let textoutput = names[0];
	
	for(let i = 1; i < names.length; i++)
	{
		textoutput += "\n" + names[i];
	}
	
	return textoutput;
}

//
// garbage name generator

function generatePhonemeName(maxsyllables = 8, minimumsyllables = 1)
{
	if (maxsyllables < minimumsyllables)
	{
		//console.log("maxsyllables: " + maxsyllables + ", minimumsyllables: " + minimumsyllables);
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


//
//
//
// Noise Functions
//
//
//

function interpolateBetween(a0, a1, w)
{
	if (w <= 0)
		return a0;
	if (w >= 1)
		return a1;
	
	return (a1 - a0) * w + a0;
}

function randomGradient()
{
	let randomv = Math.random() * 2 * 3.14;
	return { x: Math.sin(randomv), y: Math.sin(randomv) };
}

function gradientOfTwo(x, y)
{
	let gradient = randomGradient();
	
	let v = x*gradient.x + y*gradient.y;
	return (v);
}

function noiseMap2D(height, width, noisevariance, edgevalue = 0.33)
{
	let map0 = noiseMap(height, width, noisevariance, edgevalue);
	let map1 = noiseMap(height, width, noisevariance, edgevalue);
	let lowest = 0;
	let highest = 0;
	let combinedmap = [];
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			let v = gradientOfTwo(map0[x+(y*width)],map1[((width-1)-x)+(((height-1)-y)*width)]);
			//let v = gradientOfTwo(map0[x+(y*width)],map1[x+(y*height)]);
			if (v < lowest)
				lowest = v;
			if (v > highest)
				highest = v;
			
			combinedmap.push(v);
		}
	}
	
	//normlaize the combined map
	for (i in combinedmap)
	{
		combinedmap[i] = (combinedmap[i]+Math.abs(lowest))/((Math.abs(lowest)+highest));
	}
	
	return combinedmap;
}

// returns a 1D array that is a noise map, height x width size
function noiseMap(height, width, noisevariance, edgevalue = 0.33)
{
	let map = [];
	let previousx = edgevalue;
	let previousy = edgevalue;
	let dx = 0;
	let dy = 0;
	let val = 0;
	
	for (let y = 0; y < height; y++)
	{
		for (let x  = 0; x < width; x++)
		{
			map.push(0);
		}
	}
	for (let y = 0; y < height; y++)
	{
		for (let x  = 0; x < width; x++)
		{
			
			if (Math.random() < 0.5)
				dx = Math.random()*noisevariance;
			else
				dx = Math.random()*noisevariance*-1;
			if (Math.random() < 0.5)
				dy = Math.random()*noisevariance;
			else
				dy = Math.random()*noisevariance*-1;
			val = (previousx + dx)/2 + (previousy + dy )/2;
			if (val < 0)
				val = 0;
			else if (val > 1)
				val = 1;
			
			map[x+(y*width)] = val;
			previousx = val;
			if ((y-1) > -1)
			{
				previousy = map[x+((y-1)*width)];
			}
			else
			{
				previousy = edgevalue;
			}
		}
		previousx = edgevalue;
	}
	
	return map;
}

function NormalizeMap(map, max, min)
{
	let highest = -1;
	let lowest = 999999999;
	for (i in map)
	{
		if (map[i] > highest)
			highest = map[i];
		if (map[i] < lowest)
			lowest = map[i];
	}
	
	for (i in map)
	{
		map[i] = (map[i]+Math.abs(lowest))/((Math.abs(lowest)+highest))*max + min;
	}
	
	return map;
}

function blurMap(map, height, width, amount)
{
	let currentsquare = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	let total = 0;
	let count = 0;
	let average = 0;
	let newmap = [];
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			total = 0;
			count = 1;
			if (x-2 > -1 && y-2 > -1)
			{
				total += map[(x-2)+(y-2)*width];
				count++;
			}
			if (x-1 > -1 && y-2 > -1)
			{
				total += map[(x-1)+(y-2)*width];
				count++;
			}
			if (y-2 > -1)
			{
				total += map[x+(y-2)*width];
				count++
			}
			if (x+1 < width && y-2 > -1)
			{
				total += map[(x+1)+(y-2)*width];
				count++;
			}
			if (x+2 < width && y-2 > -1)
			{
				total += map[(x+2)+(y-2)*width];
				count++;
			}
			if (x-2 > -1 && y-1 > -1)
			{
				total += map[(x-2)+(y-1)*width];
				count++;
			}
			if (x-1 > -1 && y-1 > -1)
			{
				total += map[(x-1)+(y-1)*width];
				count++;
			}
			if (y-1 > -1)
			{
				total += map[x+(y-1)*width];
				count++;
			}
			if (x+1 < width && y-1 > -1)
			{
				total += map[(x+1)+(y-1)*width];
				count++;
			}
			if (x+2 < width && y-1 > -1)
			{
				total += map[(x+2)+(y-1)*width];
				count++;
			}
			if (x-2 > -1)
			{
				total += map[(x-2)+y*width];
				count++;
			}
			if (x-1 > -1)
			{
				total += map[(x-1)+y*width];
				count++;
			}
			
			total += map[x+y*width];
			
			if (x+1 < width)
			{
				total += map[(x+1)+y*width];
				count++;
			}
			if (x+2 < width)
			{
				total += map[(x+2)+y*width];
				count++;
			}
			if (x-2 > -1 && y+1 < height)
			{
				total += map[(x-2)+(y+1)*width];
				count++;
			}
			if (x-1 > -1 && y+1 < height)
			{
				total += map[(x-1)+(y+1)*width];
				count++;
			}
			if (y+1 < height)
			{
				total += map[x+(y+1)*width];
				count++;
			}
			if (x+1 < width && y+1 < height)
			{
				total += map[(x+1)+(y+1)*width];
				count++;
			}
			if (x+2 < width && y+1 < height)
			{
				total += map[(x+2)+(y+1)*width];
				count++;
			}
			if (x-2 > -1 && y+2 < height)
			{
				total += map[(x-2)+(y+2)*width];
				count++;
			}
			if (x-1 > -1 && y+2 < height)
			{
				total += map[(x-1)+(y+2)*width];
				count++;
			}
			if (y+2 < height)
			{
				total += map[x+(y+2)*width];
				count++;
			}
			if (x+1 < width && y+2 < height)
			{
				total += map[(x+1)+(y+2)*width];
				count++;
			}
			if (x+2 < width && y+2 < height)
			{
				total += map[(x+2)+(y+2)*width];
				count++;
			}
			
			average = total / count;
			
			newmap.push(interpolateBetween(map[x+y*width],average,amount));
		}
	}
	return newmap;
}

function sharpenMap(map, height, width, amount)
{
	let currentsquare = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	let highest = 0;
	let newmap = [];
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			if (x-2 > -1 && y-2 > -1)
			{
				if (map[(x-2)+(y-2)*width] > highest);
					highest = map[(x-2)+(y-2)*width];
			}
			if (x-1 > -1 && y-2 > -1)
			{
				if (map[(x-1)+(y-2)*width] > highest);
					highest = map[(x-1)+(y-2)*width];
			}
			if (y-2 > -1)
			{
				if (map[x+(y-2)*width] > highest);
					highest = map[x+(y-2)*width];
			}
			if (x+1 < width && y-2 > -1)
			{
				if (map[(x+1)+(y-2)*width] > highest);
					highest = map[(x+1)+(y-2)*width];
			}
			if (x+2 < width && y-2 > -1)
			{
				if (map[(x+2)+(y-2)*width] > highest);
					highest = map[(x+2)+(y-2)*width];
			}
			if (x-2 > -1 && y-1 > -1)
			{
				if (map[(x-2)+(y-1)*width] > highest);
					highest = map[(x-2)+(y-1)*width];
			}
			if (x-1 > -1 && y-1 > -1)
			{
				if (map[(x-1)+(y-1)*width] > highest);
					highest = map[(x-1)+(y-1)*width];
			}
			if (y-1 > -1)
			{
				if (map[x+(y-1)*width] > highest);
					highest = map[x+(y-1)*width];
			}
			if (x+1 < width && y-1 > -1)
			{
				if (map[(x+1)+(y-1)*width] > highest);
					highest = map[(x+1)+(y-1)*width];
			}
			if (x+2 < width && y-1 > -1)
			{
				if (map[(x+2)+(y-1)*width] > highest);
					highest = map[(x+2)+(y-1)*width];
			}
			if (x-2 > -1)
			{
				if (map[(x-2)+(y-2)*width] > highest);
					highest = map[(x-2)+y*width];
			}
			if (x-1 > -1)
			{
				if (map[(x-1)+(y-2)*width] > highest);
					highest = map[(x-1)+y*width];
			}
			if (map[x+(y-2)*width] > highest);
				highest = map[x+y*width];
			if (x+1 < width)
			{
				if (map[(x+1)+(y-2)*width] > highest);
					highest = map[(x+1)+y*width];
			}
			if (x+2 < width)
			{
				if (map[(x+2)+(y-2)*width] > highest);
					highest = map[(x+2)+y*width];
			}
			if (x-2 > -1 && y+1 < height)
			{
				if (map[(x-2)+(y+1)*width] > highest);
					highest = map[(x-2)+(y+1)*width];
			}
			if (x-1 > -1 && y+1 < height)
			{
				if (map[(x-1)+(y+1)*width] > highest);
					highest = map[(x-1)+(y+1)*width];
			}
			if (y+1 < height)
			{
				if (map[x+(y+1)*width] > highest);
					highest = map[x+(y+1)*width];
			}
			if (x+1 < width && y+1 < height)
			{
				if (map[(x+1)+(y+1)*width] > highest);
					highest = map[(x+1)+(y+1)*width];
			}
			if (x+2 < width && y+1 < height)
			{
				if (map[(x+2)+(y-2)*width] > highest);
					highest = map[(x+2)+(y+1)*width];
			}
			if (x-2 > -1 && y+2 < height)
			{
				if (map[(x-2)+(y+2)*width] > highest);
					highest = map[(x-2)+(y+2)*width];
			}
			if (x-1 > -1 && y+2 < height)
			{
				if (map[(x-1)+(y+2)*width] > highest);
					highest = map[(x-1)+(y+2)*width];
			}
			if (y+2 < height)
			{
				if (map[x+(y+2)*width] > highest);
					highest = map[x+(y+2)*width];
			}
			if (x+1 < width && y+2 < height)
			{
				if (map[(x+1)+(y+2)*width] > highest);
					highest = map[(x+1)+(y+2)*width];
			}
			if (x+2 < width && y+2 < height)
			{
				if (map[(x+2)+(y+2)*width] > highest);
					highest = map[(x+2)+(y+2)*width];
			}
			
			if (highest > 0.5)
				newmap.push(interpolateBetween(map[x+y*width],map[x+y*width]/highest,amount));
			else
				newmap.push(interpolateBetween(map[x+y*width],1-map[x+y*width]/highest,amount));
		}
	}
	return newmap;
}

function sumOfArray(array)
{
	let total = 0;
	for(i in array)
	{
		total += array[i];
	}
	return total;
}

function decreaseContrast(map, height, width, amount)
{
	let target = 0.5;
	let newmap = [];
	let highest = 0;
	let lowest = 1;
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			if (map[x+y*width] < lowest)
				lowest = map[x+y*width];
			
			if (map[x+y*width] > highest)
				highest = map[x+y*width];
		}
	}
	
	target = (highest + lowest)/2;
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			newmap.push(interpolateBetween(map[x+y*width],target,amount));
		}
	}
	return newmap;
}

function increaseContrast(map, height, width, amount)
{
	let target = 0;
	let newmap = [];
	let midpoint = 0.5
	let highest = 0;
	let lowest = 1;
	let total = 0;
	let count = 0;
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			if (map[x+y*width] < lowest)
				lowest = map[x+y*width];
			
			if (map[x+y*width] > highest)
				highest = map[x+y*width];
			total += map[x+y*width];
			count++;
		}
	}
	
	midpoint = (highest + lowest)/2;
	average = total / count;
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			target = map[x+y*width] > midpoint ? 1 : 0;
			
			newmap.push(interpolateBetween(map[x+y*width],target,amount));
		}
	}
	return newmap;
}

function smoothenMap(map, height, width, amount)
{
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			if (x-1 > -1 && y-1 > -1)
			{
				map[(x-1)+(y-1)*width] = interpolateBetween(map[(x-1)+(y-1)*width],map[x+y*width],amount);
			}
			if (y-1 > -1)
			{
				map[x+(y-1)*width] = interpolateBetween(map[x+(y-1)*width],map[x+y*width],amount);
			}
			if (x+1 < width && y-1 > -1)
			{
				map[(x+1)+(y-1)*width] = interpolateBetween(map[(x+1)+(y-1)*width],map[x+y*width],amount);
			}
			if (x-1 > -1)
			{
				map[(x-1)+y*width] = interpolateBetween(map[(x-1)+y*width],map[x+y*width],amount);
			}
			//map[x+y*width] = interpolateBetween(map[x+y*width],average,amount);
			if (x+1 < width)
			{
				map[(x+1)+y*width] = interpolateBetween(map[(x+1)+y*width],map[x+y*width],amount);
			}
			if (x-1 > -1 && y+1 < height)
			{
				map[(x-1)+(y+1)*width] = interpolateBetween(map[(x-1)+(y+1)*width],map[x+y*width],amount);
				
			}
			if (y+1 < height)
			{
				map[x+(y+1)*width] = interpolateBetween(map[x+(y+1)*width],map[x+y*width],amount);
				
			}
			if (x+1 < width && y+1 < height)
			{
				map[(x+1)+(y+1)*width] = interpolateBetween(map[(x+1)+(y+1)*width],map[x+y*width],amount);
			}
		}
	}
	return map;
}

//
//
// map generator functions
//
//


function AdjacentMapHexContiguous(contiguitymap, pointx, pointy, map_width, map_height, contiguityvalue = true)
{
	if (pointx%2 == 1)
	{
		if (pointy-1 > -1 && contiguitymap[pointx+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx+1 < map_width && contiguitymap[pointx+1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx+1 < map_width && pointy+1 < map_height && contiguitymap[pointx+1+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointy+1 < map_height && contiguitymap[pointx+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx-1 > -1 && pointy+1 < map_height && contiguitymap[pointx-1+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx-1 > -1 && contiguitymap[pointx-1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
	} 
	else
	{
		if (pointy-1 > -1 && contiguitymap[pointx+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx+1 < map_width && pointy-1 > -1 && contiguitymap[pointx+1+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx+1 < map_width && contiguitymap[pointx+1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointy+1 < map_height && contiguitymap[pointx+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx-1 > -1 && contiguitymap[pointx-1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx-1 > -1 && pointy-1 > -1 && contiguitymap[pointx-1+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
	}
	
	return false;
}

function OnlyWaterAdjacent(sealevelmap, pointx, pointy, map_width, map_height)
{
	if (pointx%2 == 1)
	{
		if (pointy-1 > -1 && sealevelmap[pointx+(pointy-1)*map_width].sealevel != "water" && sealevelmap[pointx+(pointy-1)*map_width].sealevel != "deepwater" && sealevelmap[pointx+(pointy-1)*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx+1 < map_width && sealevelmap[pointx+1+pointy*map_width].sealevel != "water" && sealevelmap[pointx+1+pointy*map_width].sealevel != "deepwater" && sealevelmap[pointx+1+pointy*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx+1 < map_width && pointy+1 < map_height && sealevelmap[pointx+1+(pointy+1)*map_width].sealevel != "water" && sealevelmap[pointx+1+(pointy+1)*map_width].sealevel != "deepwater" && sealevelmap[pointx+1+(pointy+1)*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointy+1 < map_height && sealevelmap[pointx+(pointy+1)*map_width].sealevel != "water" && sealevelmap[pointx+(pointy+1)*map_width].sealevel != "deepwater" && sealevelmap[pointx+(pointy+1)*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx-1 > -1 && pointy+1 < map_height && sealevelmap[pointx-1+(pointy+1)*map_width].sealevel != "water" && sealevelmap[pointx-1+(pointy+1)*map_width].sealevel != "deepwater" && sealevelmap[pointx-1+(pointy+1)*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx-1 > -1 && sealevelmap[pointx-1+pointy*map_width].sealevel != "water" && sealevelmap[pointx-1+pointy*map_width].sealevel != "deepwater" && sealevelmap[pointx-1+pointy*map_width].sealevel != "lake")
		{
			return false;
		}
	} 
	else
	{
		if (pointy-1 > -1 && sealevelmap[pointx+(pointy-1)*map_width].sealevel != "water" && sealevelmap[pointx+(pointy-1)*map_width].sealevel != "deepwater" && sealevelmap[pointx+(pointy-1)*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx+1 < map_width && pointy-1 > -1 && sealevelmap[pointx+1+(pointy-1)*map_width].sealevel != "water" && sealevelmap[pointx+1+(pointy-1)*map_width].sealevel != "deepwater" && sealevelmap[pointx+1+(pointy-1)*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx+1 < map_width && sealevelmap[pointx+1+pointy*map_width].sealevel != "water" && sealevelmap[pointx+1+pointy*map_width].sealevel != "deepwater" && sealevelmap[pointx+1+pointy*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointy+1 < map_height && sealevelmap[pointx+(pointy+1)*map_width].sealevel != "water" && sealevelmap[pointx+(pointy+1)*map_width].sealevel != "deepwater" && sealevelmap[pointx+(pointy+1)*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx-1 > -1 && sealevelmap[pointx-1+pointy*map_width].sealevel != "water" && sealevelmap[pointx-1+pointy*map_width].sealevel != "deepwater" && sealevelmap[pointx-1+pointy*map_width].sealevel != "lake")
		{
			return false;
		}
		if (pointx-1 > -1 && pointy-1 > -1 && sealevelmap[pointx-1+(pointy-1)*map_width].sealevel != "water" && sealevelmap[pointx-1+(pointy-1)*map_width].sealevel != "deepwater" && sealevelmap[pointx-1+(pointy-1)*map_width].sealevel != "lake")
		{
			return false;
		}
	}
	return true;
}

function IsConnectedToEdge(contiguitymap, pointx, pointy, map_width, map_height, contiguityvalue)
{
	if (pointx%2 == 1)
	{
		if (pointy-1 <= -1 || contiguitymap[pointx+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx+1 >= map_width || contiguitymap[pointx+1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
		if ((pointx+1 >= map_width && pointy+1 >= map_height) || contiguitymap[pointx+1+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointy+1 >= map_height || contiguitymap[pointx+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if ((pointx-1 >= -1 && pointy+1 >= map_height) || contiguitymap[pointx-1+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx-1 <= -1 || contiguitymap[pointx-1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
	} 
	else
	{
		if (pointy-1 <= -1 || contiguitymap[pointx+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if ((pointx+1 >= map_width && pointy-1 <= -1) || contiguitymap[pointx+1+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx+1 >= map_width || contiguitymap[pointx+1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointy+1 >= map_height || contiguitymap[pointx+(pointy+1)*map_width] == contiguityvalue)
		{
			return true;
		}
		if (pointx-1 <= -1 || contiguitymap[pointx-1+pointy*map_width] == contiguityvalue)
		{
			return true;
		}
		if ((pointx-1 <= -1 && pointy-1 <= -1) || contiguitymap[pointx-1+(pointy-1)*map_width] == contiguityvalue)
		{
			return true;
		}
	}
	return false;
}

function SeaLevelContiguousToPoint(sealevelmap, pointx, pointy, map_width, map_height, size)
{
	let contiguitymap = []
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			contiguitymap.push( false );
		}
	}
	
	contiguitymap[pointx+(pointy*map_width)] = true;
	
	let newcontigoushexes = 1;
	
	while (newcontigoushexes > 0)
	{
		newcontigoushexes = 0;
		
		let totalloops = 1;
		let sizecovered = 7;

		while (size > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: pointx, y: pointy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < size; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < size; k++)
			{
				if (currenthex.x < map_width && currenthex.y < map_height && currenthex.x > -1 && currenthex.y > -1)
				{
					position = currenthex.x+currenthex.y*map_width;
					if (!contiguitymap[position] && sealevelmap[position].sealevel == "land")
					{
						contiguitymap[position] = AdjacentMapHexContiguous(contiguitymap, currenthex.x, currenthex.y, map_width, map_height);
						if (contiguitymap[position])
							newcontigoushexes++;
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		//console.log(newcontigoushexes);
	}
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			if (!contiguitymap[x+(y*map_width)])
				sealevelmap[x+(y*map_width)].sealevel = "water";
		}
	}
	
	return sealevelmap;
}

function LandmassCalculation(sealevelmap, landmassmap, landmassno, pointx, pointy, map_width, map_height, size)
{
	let contiguitymap = []
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			contiguitymap.push( false );
		}
	}
	
	contiguitymap[pointx+(pointy*map_width)] = true;
	
	let newcontigoushexes = 1;
	
	while (newcontigoushexes > 0)
	{
		newcontigoushexes = 0;
		
		let totalloops = 1;
		let sizecovered = 7;

		while (size > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: pointx, y: pointy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < size; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < size; k++)
			{
				if (currenthex.x < map_width && currenthex.y < map_height && currenthex.x > -1 && currenthex.y > -1)
				{
					position = currenthex.x+currenthex.y*map_width;
					if (!contiguitymap[position] && sealevelmap[position].sealevel == "land")
					{
						contiguitymap[position] = AdjacentMapHexContiguous(contiguitymap, currenthex.x, currenthex.y, map_width, map_height);
						if (contiguitymap[position])
							newcontigoushexes++;
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		//console.log(newcontigoushexes);
	}
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			if (!contiguitymap[x+(y*map_width)])
				landmassmap[x+(y*map_width)] = landmassno;
		}
	}
	
	return landmassmap;
}

function LakeWaterDetection(sealevelmap, map_width, map_height)
{
	let contiguitymap = []
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			contiguitymap.push( false );
		}
	}
	
	let newcontigoushexes = 1;

	
	while (newcontigoushexes > 0)
	{
		newcontigoushexes = 0;
		
		for (let y = 0; y < map_height; y++)
		{
			for (let x  = 0; x < map_width; x++)
			{
				if (x < map_width && y < map_height && x > -1 && y > -1)
				{
					position = x+y*map_width;
					if (!contiguitymap[position] && sealevelmap[position].sealevel == "water")
					{
						contiguitymap[position] = IsConnectedToEdge(contiguitymap, x, y, map_width, map_height, true);
						if (contiguitymap[position])
							newcontigoushexes++;
					}
				}
			}
		}
		
		for (let y = map_height-1; y > -1; y--)
		{
			for (let x  = map_width-1; x > -1; x--)
			{
				if (x < map_width && y < map_height && x > -1 && y > -1)
				{
					position = x+y*map_width;
					if (!contiguitymap[position] && sealevelmap[position].sealevel == "water")
					{
						contiguitymap[position] = IsConnectedToEdge(contiguitymap, x, y, map_width, map_height);
						if (contiguitymap[position])
							newcontigoushexes++;
					}
				}
			}
		}
	}
	
	
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			if (!contiguitymap[x+(y*map_width)] && sealevelmap[x+(y*map_width)].sealevel == "water" )
				sealevelmap[x+(y*map_width)].sealevel = "lake";
		}
	}
	
	return sealevelmap;
}

function NearestWaterbodyToPoint(map, pointx, pointy, map_width, map_height, maxsearch = -1)
{
	let returnval = { x: 0, y: 0 };
	
	let totalloops = 1;
	let sizecovered = 7;

	while (map_width*map_height > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	
	let startpos = { x: pointx, y: pointy };
	let currenthex = { x:0, y:0 };
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 1;
	if (maxsearch == -1)
		maxsearch = map_width*map_height;
	for(let j = 0; j < totalloops && sizereached < maxsearch; j++)
	{
		let direction = 3;
		if (startpos.x  % 2 == 1)
		{
			startpos.x = startpos.x+1;
		}
		else
		{
			startpos.x = startpos.x+1;
			startpos.y = startpos.y-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let k = 0; k < loopend && sizereached < maxsearch; k++)
		{
			if (currenthex.x < map_width && currenthex.y < map_height && currenthex.x > -1 && currenthex.y > -1)
			{
				position = currenthex.x+currenthex.y*map_width;
				if (map[position].sealevel == "water")
				{
					returnval.x = currenthex.x;
					returnval.y = currenthex.y;
					return returnval;
				}
			}
			
			MoveHex(currenthex, direction);
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
				if (direction == 6)
					direction = 0;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	//console.log(newcontigoushexes);
	
	return null;
}

function NearestGrasslandsToPoint(map, point, map_width, map_height, maxsearch = -1)
{
	let returnval = { x: 0, y: 0 };
	
	let totalloops = 1;
	let sizecovered = 7;

	while (map_width*map_height > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	
	let startpos = { x: point.x, y: point.y };
	let currenthex = { x:0, y:0 };
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 1;
	if (maxsearch == -1)
		maxsearch = map_width*map_height;
	for(let j = 0; j < totalloops && sizereached < maxsearch; j++)
	{
		let direction = 3;
		if (startpos.x  % 2 == 1)
		{
			startpos.x = startpos.x+1;
		}
		else
		{
			startpos.x = startpos.x+1;
			startpos.y = startpos.y-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let k = 0; k < loopend && sizereached < maxsearch; k++)
		{
			if (currenthex.x < map_width && currenthex.y < map_height && currenthex.x > -1 && currenthex.y > -1)
			{
				position = currenthex.x+currenthex.y*map_width;
				if (map[position].sealevel == "land" && map[position].terrain == "grass" && map[position].trees != "forest" && map[position].trees != "jungle")
				{
					returnval.x = currenthex.x
					returnval.y = currenthex.y
					return returnval;
				}
			}
			
			MoveHex(currenthex, direction);
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
				if (direction == 6)
					direction = 0;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	//console.log(newcontigoushexes);
	
	return null;
}

function MapCoordinationsToVector(from, to)
{
	cfrom = { x: from.x*12, y: from.y*14+(from.x%2)*7 };
	cto = { x: to.x*12, y: to.y*14+(to.x%2)*7 };
	
	return { x: cfrom.x - cto.x, y: cfrom.y - cto.y };
}

function VectorToDirection(vector)
{
	let radians = Math.atan2(vector.x,vector.y);
	
	
	if (radians > 0)
	{
		if (radians < Math.PI/6)
			return 3;
		else if (radians < Math.PI*3/6)
			return 2;
		else if (radians < Math.PI*5/6)
			return 1;
		else if (radians < Math.PI*7/6)
			return 0;
		else if (radians < Math.PI*9/6)
			return 5;
		else if (radians < Math.PI*11/6)
			return 4;
		else
			return 3;
	}
	else
	{
		if (radians > -Math.PI/6)
			return 3;
		else if (radians > -Math.PI*3/6)
			return 4;
		else if (radians > -Math.PI*5/6)
			return 5;
		else if (radians > -Math.PI*7/6)
			return 0;
		else if (radians > -Math.PI*9/6)
			return 1;
		else if (radians > -Math.PI*11/6)
			return 2;
		else
			return 3;
	}
	
}

function DirectionFromHexToHex(hexFrom, hexTo)
{
	hex = { x: hexFrom.x - hexTo.x, y: hexFrom.y - hexTo.y };
	direction = -1;
	if (hexFrom.x%2 == 1)
	{
		if (hex.x == 1 && hex.y == 0)
		{
			direction = 5;
		}
		else if (hex.x == 1 && hex.y == -1)
		{
			direction = 4;
		}
		else if (hex.x == 0 && hex.y == -1)
		{
			direction = 3;
		}
		else if (hex.x == -1 && hex.y == -1)
		{
			direction = 2;
		}
		else if (hex.x == -1 && hex.y == 0)
		{
			direction = 1
		}
		else if (hex.x == 0 && hex.y == 1)
		{
			direction = 0;
		}
	} 
	else
	{
		if (hex.x == 1 && hex.y == 1)
		{
			direction = 5;
		}
		else if (hex.x == 1 && hex.y == 0)
		{
			direction = 4;
		}
		else if (hex.x == 0 && hex.y == -1)
		{
			direction = 3;
		}
		else if (hex.x == -1 && hex.y == 0)
		{
			direction = 2;
		}
		else if (hex.x == -1 && hex.y == 1)
		{
			direction = 1;
		}
		else if (hex.x == 0 && hex.y == 1)
		{
			direction = 0;
		}
	}
	
	return direction;
}

function TreesContiguousToPoint(treesmap, value, pointx, pointy, map_width, map_height, size)
{
	let contiguitymap = []
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			contiguitymap.push( false );
		}
	}
	
	contiguitymap[pointx+(pointy*map_width)] = true;
	
	let newcontigoushexes = 1;
	
	while (newcontigoushexes > 0)
	{
		newcontigoushexes = 0;
		
		let totalloops = 1;
		let sizecovered = 7;

		while (size > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: pointx, y: pointy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < size; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < size; k++)
			{
				if (currenthex.x < map_width && currenthex.y < map_height && currenthex.x > -1 && currenthex.y > -1)
				{
					position = currenthex.x+currenthex.y*map_width;
					if (!contiguitymap[position] && treesmap[position] == value)
					{
						contiguitymap[position] = AdjacentMapHexContiguous(contiguitymap, currenthex.x, currenthex.y, map_width, map_height);
						if (contiguitymap[position])
							newcontigoushexes++;
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		//console.log(newcontigoushexes);
	}
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x  = 0; x < map_width; x++)
		{
			if (!contiguitymap[x+(y*map_width)])
				treesmap[x+(y*map_width)] = "none";
		}
	}
	
	return treesmap;
}


function GetNearestCity(cities, point)
{
	let closestdistance = 9999999999;
	let closestCity;
	for (let i = 0; i < cities.length; i++)
	{
		let distance = LengthBetweenPoints(cities[i], point);
		if (distance < closestdistance)
		{
			closestdistance = distance;
			closestCity = cities[i];
		}
	}
	return closestCity;
}

function CityLocationValid(point, cities, map, map_width)
{
	if (map[point.x+point.y*map_width].sealevel == "water" || map[point.x+point.y*map_width].sealevel == "lake" || map[point.x+point.y*map_width].sealevel == "deepwater")
	{
		return false;
	}
	
	if (cities.length > 0)
	{
		nearestcity = GetNearestCity(cities, point);
		
		if (LengthBetweenPoints(nearestcity, point) < 3.6)
		{
			return false
		}
	}
	
	return true;
}

function CountTerrainAroundHex(map, pointx, pointy, terrain, map_width, map_height)
{
	let count = 0;
	if (pointx%2 == 1)
	{
		if (pointy-1 > -1 && map[pointx+(pointy-1)*map_width].terrain == terrain)
		{
			count++;
		}
		if (pointx+1 < map_width && map[pointx+1+pointy*map_width].terrain == terrain)
		{
			count++;
		}
		if ((pointx+1 < map_width && pointy+1 < map_height) && map[pointx+1+(pointy+1)*map_width].terrain == terrain)
		{
			count++;
		}
		if (pointy+1 < map_height && map[pointx+(pointy+1)*map_width].terrain == terrain)
		{
			count++;
		}
		if ((pointx-1 > -1 && pointy+1 < map_height) && map[pointx-1+(pointy+1)*map_width].terrain == terrain)
		{
			count++;
		}
		if (pointx-1 > -1 && map[pointx-1+pointy*map_width].terrain == terrain)
		{
			count++;
		}
	} 
	else
	{
		if (pointy-1 > -1 && map[pointx+(pointy-1)*map_width].terrain == terrain)
		{
			count++;
		}
		if ((pointx+1 < map_width && pointy-1 > -1) && map[pointx+1+(pointy-1)*map_width].terrain == terrain)
		{
			count++;
		}
		if (pointx+1 < map_width && map[pointx+1+pointy*map_width].terrain == terrain)
		{
			count++;
		}
		if (pointy+1 < map_height && map[pointx+(pointy+1)*map_width].terrain == terrain)
		{
			count++;
		}
		if (pointx-1 > -1 && map[pointx-1+pointy*map_width].terrain == terrain)
		{
			count++;
		}
		if ((pointx-1 > -1 && pointy-1 > -1) && map[pointx-1+(pointy-1)*map_width].terrain == terrain)
		{
			count++;
		}
	}
	return count;
}

function CountRiversAroundHex(riverarray, pointx, pointy, map_width, map_height)
{
	let count = 0;
	let hex;
	if (pointx%2 == 1)
	{
		if (pointy-1 > -1)
		{
			hex = { x: pointx, y: pointy-1 };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx+1 < map_width)
		{
			hex = { x: pointx+1, y: pointy };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx+1 < map_width && pointy+1 < map_height)
		{
			hex = { x: pointx+1, y: pointy+1};
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointy+1 < map_height)
		{
			hex = { x: pointx, y: pointy+1 };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx-1 > -1 && pointy+1 < map_height)
		{
			hex = { x: pointx-1, y: pointy+1 };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx-1 > -1)
		{
			hex = { x: pointx-1, y: pointy };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
	} 
	else
	{
		if (pointy-1 > -1)
		{
			hex = { x: pointx, y: pointy-1 };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx+1 < map_width && pointy-1 > -1)
		{
			hex = { x: pointx+1, y: pointy-1 };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx+1 < map_width)
		{
			hex = { x: pointx+1, y: pointy };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointy+1 < map_height)
		{
			hex = { x: pointx, y: pointy+1 };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx-1 > -1)
		{
			hex = { x: pointx-1, y: pointy };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
		if (pointx-1 > -1 && pointy-1 > -1)
		{
			hex = { x: pointx-1, y: pointy-1 };
			count += ContainsIdenticalXY(riverarray, hex) ? 1 : 0;
		}
	}
	return count;
}

function CountSealevelAroundHex(map, pointx, pointy, sealevel, map_width, map_height)
{
	let count = 0;
	if (pointx%2 == 1)
	{
		if (pointy-1 > -1 && map[pointx+(pointy-1)*map_width].sealevel == sealevel)
		{
			count++;
		}
		if (pointx+1 < map_width && map[pointx+1+pointy*map_width].sealevel == sealevel)
		{
			count++;
		}
		if ((pointx+1 < map_width && pointy+1 < map_height) && map[pointx+1+(pointy+1)*map_width].sealevel == sealevel)
		{
			count++;
		}
		if (pointy+1 < map_height && map[pointx+(pointy+1)*map_width].sealevel == sealevel)
		{
			count++;
		}
		if ((pointx-1 > -1 && pointy+1 < map_height) && map[pointx-1+(pointy+1)*map_width].sealevel == sealevel)
		{
			count++;
		}
		if (pointx-1 > -1 && map[pointx-1+pointy*map_width].sealevel == sealevel)
		{
			count++;
		}
	} 
	else
	{
		if (pointy-1 > -1 && map[pointx+(pointy-1)*map_width].sealevel == sealevel)
		{
			count++;
		}
		if ((pointx+1 < map_width && pointy-1 > -1) && map[pointx+1+(pointy-1)*map_width].sealevel == sealevel)
		{
			count++;
		}
		if (pointx+1 < map_width && map[pointx+1+pointy*map_width].sealevel == sealevel)
		{
			count++;
		}
		if (pointy+1 < map_height && map[pointx+(pointy+1)*map_width].sealevel == sealevel)
		{
			count++;
		}
		if (pointx-1 > -1 && map[pointx-1+pointy*map_width].sealevel == sealevel)
		{
			count++;
		}
		if ((pointx-1 > -1 && pointy-1 > -1) && map[pointx-1+(pointy-1)*map_width].sealevel == sealevel)
		{
			count++;
		}
	}
	return count;
}

function MapTerrainAutomataPass(map, terrainFrom, terrainTo, map_width, map_height, passes = 1)
{
	for (let a = 0; a < passes; a++)
	{
		let tentativemap = [];
		for (let y = 0; y < map_height; y++)
		{
			for (let x = 0; x < map_width; x++)
			{
				position = (x+y*map_width);
				let climateCount = CountTerrainAroundHex(map, x, y, terrainFrom, map_width, map_height);
				if (map[position].terrain == terrainFrom)
				{
					if (climateCount > 2)
					{
						tentativemap.push(terrainFrom);
					}
					else if (climateCount == 2)
					{
						tentativemap.push(map[position].terrain);
					}
					else
					{
						tentativemap.push(terrainTo);
					}
				}
				else
				{
					tentativemap.push(map[position].terrain);
				}
			}
		}
		//tentativemap done, make changes
		for (let y = 0; y < map_height; y++)
		{
			for (let x = 0; x < map_width; x++)
			{
				position = (x+y*map_width);
				if (map[position].terrain == terrainFrom || tentativemap[position] == terrainTo)
				{
					map[position].terrain = tentativemap[position];
				}
			}
		}
	}
}

function MapSealevelAutomataPass(map, sealevelFrom, sealevelTo, map_width, map_height, passes = 1)
{
	for (let a = 0; a < passes; a++)
	{
		let tentativemap = [];
		for (let y = 0; y < map_height; y++)
		{
			for (let x = 0; x < map_width; x++)
			{
				position = (x+y*map_width);
				let climateCount = CountSealevelAroundHex(map, x, y, sealevelFrom, map_width, map_height);
				if (climateCount > 2)
				{
					tentativemap.push(sealevelFrom);
				}
				else if (climateCount == 2)
				{
					tentativemap.push(map[position].sealevel);
				}
				else
				{
					tentativemap.push(sealevelTo);
				}
			}
		}
		//tentativemap done, make changes
		for (let y = 0; y < map_height; y++)
		{
			for (let x = 0; x < map_width; x++)
			{
				position = (x+y*map_width);
				if (map[position].sealevel == sealevelFrom)
				{
					map[position].sealevel = tentativemap[position];
				}
			}
		}
	}
}



function mapPathToPosition(start, end, map, map_width, map_height)
{
	let frontierQueue = [{ x: start.x, y: start.y, priority: 0 }];
	let dictionaryCameFrom = [];
	let dictionaryCostSoFar = [];
	let closest = { x: start.x, y: start.y };
	let closestHexHeuristic = 99999999;
	let newcost = 0;
	let oldcost;
	let priority;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		current = frontierQueue[nextinqueue];
		frontierQueue.splice(nextinqueue,1);
		if (current.x == end.x && current.y == end.y)
		{
			//console.log("path found");
			//console.log(dictionaryCameFrom);
			return dictionaryToDirection(dictionaryCameFrom, end, start);
		}
		
		let tempcost = getFromDictionary(dictionaryCostSoFar, current)
		if (tempcost != null)
		{
			newcost = tempcost;
			//newcost += 1;
		}
		let connection = { x: current.x, y: current.y };
		for (let i = 0; i < 6; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveHex(connection,i);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height && map[connection.x+(connection.y*map_width)].sealevel != "water" && map[connection.x+(connection.y*map_width)].sealevel != "lake" && map[connection.x+(connection.y*map_width)].sealevel != "deepwater")
			{
				let connectioncost = newcost + map[connection.x+(connection.y*map_width)].movecost;
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (connectioncost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, connectioncost);
						priority = connectioncost + pathHeuristic(connection, end);
						if (priority - connectioncost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - connectioncost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, connectioncost);
					priority = connectioncost + pathHeuristic(connection, end);
					if (priority - connectioncost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - connectioncost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
		}
	}
	//console.log("full path not found");
	return dictionaryToDirection(dictionaryCameFrom, closest, start)
}

function XNearestPointsWithPathing(points, point, x, map, landmassmap, map_width, map_height)
{
	let temppoints = points.slice();
	let nearestpoints = [];
	for (let i = 0; i < x; i++)
	{
		let nearesty = -1;
		let nearestdist = 99999999;
		for (let y = 0; y < temppoints.length; y++)
		{
			if (point != temppoints[y])
			{
				let posA = point.x + point.y * map_width;
				let posB = temppoints[y].x + temppoints[y].y * map_width;
				let distance;
				if (landmassmap[posA] == landmassmap[posB])
				{
					let path = mapPathToPosition(point, temppoints[y], map, map_width, map_height);
					if (path[path.length-1] == temppoints[y])
					{
						distance = path.length;
						if (distance < nearestdist)
						{
							nearesty = y;
							nearestdist = distance;
						}
					}
				}
			}
		}
		if (nearesty > -1)
		{
			nearestpoints.push(temppoints[nearesty]);
			temppoints.splice(nearesty,1);
		}
		else
		{
			i += x;
		}
	}
	
	return nearestpoints;
}

function XNearestPoints(points, point, x)
{
	let temppoints = points.slice();
	let nearestpoints = [];
	for (let i = 0; i < x; i++)
	{
		let nearesty = -1;
		let nearestdist = 99999999;
		for (let y = 0; y = temppoints.length; y++)
		{
			let distance = LengthBetweenPoints(temppoints[y],point);
			if (distance < nearestdist && distance > 0)
			{
				nearesty = y;
				nearestdist = distance;
			}
		}
		if (nearesty > -1)
		{
			nearestpoints.push(temppoints[nearesty]);
			temppoints.splice(nearesty,1);
		}
		else
		{
			i += x;
		}
	}
	
	return nearestpoints;
}

function ExpandTerritoryByOne(territorymap, point, territoryvalue, map_width, map_height)
{
	if (point.x%2 == 1)
	{
		if (point.y-1 > -1 && territorymap[point.x+(point.y-1)*map_width] == -1)
		{
			territorymap[point.x+(point.y-1)*map_width] = territoryvalue;
		}
		if (point.x+1 < map_width && territorymap[point.x+1+point.y*map_width] == -1)
		{
			territorymap[point.x+1+point.y*map_width] = territoryvalue;
		}
		if ((point.x+1 < map_width && point.y+1 < map_height) && territorymap[point.x+1+(point.y+1)*map_width] == -1)
		{
			territorymap[point.x+1+(point.y+1)*map_width] = territoryvalue;
		}
		if (point.y+1 < map_height && territorymap[point.x+(point.y+1)*map_width] == -1)
		{
			territorymap[point.x+(point.y+1)*map_width] = territoryvalue;
		}
		if ((point.x-1 > -1 && point.y+1 < map_height) && territorymap[point.x-1+(point.y+1)*map_width] == -1)
		{
			territorymap[point.x-1+(point.y+1)*map_width] = territoryvalue;
		}
		if (point.x-1 > -1 && territorymap[point.x-1+point.y*map_width] == -1)
		{
			territorymap[point.x-1+point.y*map_width] = territoryvalue;
		}
	} 
	else
	{
		if (point.y-1 > -1 && territorymap[point.x+(point.y-1)*map_width] == -1)
		{
			territorymap[point.x+(point.y-1)*map_width] = territoryvalue;
		}
		if ((point.x+1 < map_width && point.y-1 > -1) && territorymap[point.x+1+(point.y-1)*map_width] == -1)
		{
			territorymap[point.x+1+(point.y-1)*map_width] = territoryvalue;
		}
		if (point.x+1 < map_width && territorymap[point.x+1+point.y*map_width] == -1)
		{
			territorymap[point.x+1+point.y*map_width] = territoryvalue;
		}
		if (point.y+1 < map_height && territorymap[point.x+(point.y+1)*map_width] == -1)
		{
			territorymap[point.x+(point.y+1)*map_width] = territoryvalue;
		}
		if (point.x-1 > -1 && territorymap[point.x-1+point.y*map_width] == -1)
		{
			territorymap[point.x-1+point.y*map_width] = territoryvalue;
		}
		if ((point.x-1 > -1 && point.y-1 > -1) && territorymap[point.x-1+(point.y-1)*map_width] == -1)
		{
			territorymap[point.x-1+(point.y-1)*map_width] = territoryvalue;
		}
	}
	return territorymap;
}

function TerritoryBorders(territorymap, point, territoryvalue, map_width, map_height)
{
	let borders = 0;
	if (point.x%2 == 1)
	{
		if (point.y-1 > -1 && territorymap[point.x+(point.y-1)*map_width] != territoryvalue)
		{
			borders += 8;
		}
		if (point.x+1 < map_width && territorymap[point.x+1+point.y*map_width] != territoryvalue)
		{
			borders += 4;
		}
		if ((point.x+1 < map_width && point.y+1 < map_height) && territorymap[point.x+1+(point.y+1)*map_width] != territoryvalue)
		{
			borders += 2;
		}
		if (point.y+1 < map_height && territorymap[point.x+(point.y+1)*map_width] != territoryvalue)
		{
			borders += 1;
		}
		if ((point.x-1 > -1 && point.y+1 < map_height) && territorymap[point.x-1+(point.y+1)*map_width] != territoryvalue)
		{
			borders += 32;
		}
		if (point.x-1 > -1 && territorymap[point.x-1+point.y*map_width] != territoryvalue)
		{
			borders += 16;
		}
	} 
	else
	{
		if (point.y-1 > -1 && territorymap[point.x+(point.y-1)*map_width] != territoryvalue)
		{
			borders += 8;
		}
		if ((point.x+1 < map_width && point.y-1 > -1) && territorymap[point.x+1+(point.y-1)*map_width] != territoryvalue)
		{
			borders += 4;
		}
		if (point.x+1 < map_width && territorymap[point.x+1+point.y*map_width] != territoryvalue)
		{
			borders += 2;
		}
		if (point.y+1 < map_height && territorymap[point.x+(point.y+1)*map_width] != territoryvalue)
		{
			borders += 1;
		}
		if (point.x-1 > -1 && territorymap[point.x-1+point.y*map_width] != territoryvalue)
		{
			borders += 32;
		}
		if ((point.x-1 > -1 && point.y-1 > -1) && territorymap[point.x-1+(point.y-1)*map_width] != territoryvalue)
		{
			borders += 16;
		}
	}
	return borders;
}

function addToBasicDictionary(dictionary, key, value)
{
	for(let i = 0; i < dictionary.length; i++)
	{
		if (dictionary[i].key == key)
		{
			dictionary[i].value += value;
			return;
		}
	}
	
	dictionary.push({ key: key, value: value });
}

function getFromBasicDictionary(dictionary, key)
{
	for(let i = 0; i < dictionary.length; i++)
	{
		if (dictionary[i].key == key)
		{
			return dictionary[i].value;
		}
	}
	
	return null;
}

function MostNumerousSurroundingTerritory(territorymap, pointx, pointy, map_width, map_height)
{
	let counts = [];
	if (pointx%2 == 1)
	{
		if (pointy-1 > -1)
		{
			addToBasicDictionary(counts,territorymap[pointx+(pointy-1)*map_width],1);
		}
		if (pointx+1 < map_width)
		{
			addToBasicDictionary(counts,territorymap[pointx+1+pointy*map_width],1);
		}
		if (pointx+1 < map_width && pointy+1 < map_height)
		{
			addToBasicDictionary(counts,territorymap[pointx+1+(pointy+1)*map_width],1);
		}
		if (pointy+1 < map_height)
		{
			addToBasicDictionary(counts,territorymap[pointx+(pointy+1)*map_width],1);
		}
		if (pointx-1 > -1 && pointy+1 < map_height)
		{
			addToBasicDictionary(counts,territorymap[pointx-1+(pointy+1)*map_width],1);
		}
		if (pointx-1 > -1)
		{
			addToBasicDictionary(counts,territorymap[pointx-1+pointy*map_width],1);
		}
	} 
	else
	{
		if (pointy-1 > -1)
		{
			addToBasicDictionary(counts,territorymap[pointx+(pointy-1)*map_width],1);
		}
		if (pointx+1 < map_width && pointy-1 > -1)
		{
			addToBasicDictionary(counts,territorymap[pointx+1+(pointy-1)*map_width],1);
		}
		if (pointx+1 < map_width)
		{
			addToBasicDictionary(counts,territorymap[pointx+1+pointy*map_width],1);
		}
		if (pointy+1 < map_height)
		{
			addToBasicDictionary(counts,territorymap[pointx+(pointy+1)*map_width],1);
		}
		if (pointx-1 > -1)
		{
			addToBasicDictionary(counts,territorymap[pointx-1+pointy*map_width],1);
		}
		if (pointx-1 > -1 && pointy-1 > -1)
		{
			addToBasicDictionary(counts,territorymap[pointx-1+(pointy-1)*map_width],1);
		}
	}
	
	let highestTerritory = -1;
	let highestCount = -1;
	for (let i = 0; i < counts.length; i++)
	{
		if (counts[i].value > highestCount)
		{
			highestTerritory = counts[i].key;
			highestCount = counts[i].value;
		}
	}
	
	return { territory: highestTerritory, count: highestCount };
}

function TerritoriesAutomataPass(territorymap, map_width, map_height, passes = 1)
{
	for (let a = 0; a < passes; a++)
	{
		let tentativemap = [];
		for (let y = 0; y < map_height; y++)
		{
			for (let x = 0; x < map_width; x++)
			{
				position = (x+y*map_width);
				let surroundingTerritory = MostNumerousSurroundingTerritory(territorymap, x, y, map_width, map_height);
				
				if (surroundingTerritory.count > 3 && surroundingTerritory.territory != -1)
				{
					tentativemap.push(surroundingTerritory.territory);
				}
				else
				{
					tentativemap.push(territorymap[position]);
				}
			}
		}
		//tentativemap done, make changes
		for (let y = 0; y < map_height; y++)
		{
			for (let x = 0; x < map_width; x++)
			{
				position = (x+y*map_width);
				territorymap[position] = tentativemap[position];
			}
		}
	}
}


let MAX_MAP_HEIGHT = 160;
let MAX_MAP_WIDTH = 240;

let SMOOTHING_ITERATIONS = 2;
let LAND_EROSION = 0.0133;
let MOUNTAIN_EROSION = 0.0033;

function generateMap(channel, arguments)
{
	let LAND_LEVEL = 0.37;
	let HILL_LEVEL = 0.721;
	let MOUNTAIN_LEVEL = 0.908;
	let SNOW_MOUNTAIN_LEVEL = 0.931; 

	let PLAINS_LEVEL = 0.16;
	let GRASS_LEVEL = 0.32;
	let TUNDRA_LEVEL = 0.794;
	let SNOW_LEVEL = 0.825;

	let FOREST_LEVEL = 0.0052;
	let JUNGLE_LEVEL = 0.0031;

	let MAP_HEIGHT = 24;
	let MAP_WIDTH = 36;
	let ColdBalance = 25;
	let HotBalance = 25;
	let grid_opacity = 0;
	
	let LANDMASSES = 1;
	let Map_Size = MAP_HEIGHT+MAP_WIDTH;
	
	let citiesCheck = true;
	let roadsCheck = false;
	let townsCheck = true;
	let territoriesCheck = false;
	
	let city_density = 0.5;
	let city_connectedness = 2;
	
	if (arguments != null)
	{
		let argumentpos = arguments.indexOf("-h");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			MAP_HEIGHT = Math.floor(parseInt(arguments[argumentpos+1]));
			if (MAP_HEIGHT > 128)
				MAP_HEIGHT = 128;
		}
		argumentpos = arguments.indexOf("-w");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			MAP_WIDTH = Math.floor(parseInt(arguments[argumentpos+1]));
			if (MAP_WIDTH > 128)
				MAP_WIDTH = 128;
		}
		Map_Size = MAP_HEIGHT+MAP_WIDTH;
		argumentpos = arguments.indexOf("-l");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			LANDMASSES = Math.floor(parseInt(arguments[argumentpos+1]));
		}
		else
		{
			LANDMASSES = Math.ceil(Math.log2(Map_Size)*Math.log2(Map_Size)/2);
		}
		argumentpos = arguments.indexOf("-cold");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			ColdBalance = parseFloat(arguments[argumentpos+1]);
		}
		argumentpos = arguments.indexOf("-hot");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			HotBalance = parseFloat(arguments[argumentpos+1]);
		}
		argumentpos = arguments.indexOf("-g");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			grid_opacity =  parseFloat(arguments[argumentpos+1]);
		}
		argumentpos = arguments.indexOf("-city");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			city_density =  parseFloat(arguments[argumentpos+1]);
		}
		argumentpos = arguments.indexOf("-cityconnectedness");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			city_connectedness = Math.floor(parseInt(arguments[argumentpos+1]));
		}
		argumentpos = arguments.indexOf("-nocities");
		if (argumentpos > -1)
		{
			citiesCheck = false;
		}
		argumentpos = arguments.indexOf("-notowns");
		if (argumentpos > -1)
		{
			townsCheck = false;
		}
		/*
		argumentpos = arguments.indexOf("-roads");
		if (argumentpos > -1)
		{
			roadsCheck = true;
		}
		argumentpos = arguments.indexOf("-territories");
		if (argumentpos > -1)
		{
			territoriesCheck = true;
		}
		*/
	}
	
	
	
	PLAINS_LEVEL *= ((HotBalance/50));
	PLAINS_LEVEL *= ((100-ColdBalance)/50);
	
	GRASS_LEVEL *= ((HotBalance/50)+(Math.abs(50-HotBalance)/50)*0.25);
	GRASS_LEVEL *= ((100-ColdBalance)/50)+(Math.abs(50-ColdBalance)/50*0.25);
	
	TUNDRA_LEVEL *= ((95-ColdBalance)/50);
	TUNDRA_LEVEL *= ((350+HotBalance)/400);
	
	SNOW_LEVEL *= ((100-ColdBalance)/50);
	SNOW_LEVEL *= ((450+HotBalance)/500);
	
	if (MAP_WIDTH < 1)
		return null;
	if (MAP_HEIGHT < 1)
		return null;
	
	grid_opacity = Math.min(grid_opacity,1);
	grid_opacity = Math.max(grid_opacity,0);
	
	
	MAP_HEIGHT = Math.min(MAP_HEIGHT,MAX_MAP_HEIGHT);
	MAP_WIDTH = Math.min(MAP_WIDTH,MAX_MAP_WIDTH);
	
	let heightmap = noiseMap2D(MAP_HEIGHT,MAP_WIDTH, 0.67);
		heightmap = increaseContrast(heightmap, MAP_HEIGHT, MAP_WIDTH, 0.4);
		heightmap = smoothenMap(heightmap, MAP_HEIGHT, MAP_WIDTH, 0.175);
		heightmap = increaseContrast(heightmap, MAP_HEIGHT, MAP_WIDTH, 0.25);
	//heightmap = sharpenMap(heightmap, MAP_HEIGHT, MAP_WIDTH, 1);
	let terrainmap = noiseMap2D(MAP_HEIGHT,MAP_WIDTH, 0.23, 0.45);
		terrainmap = increaseContrast(terrainmap, MAP_HEIGHT, MAP_WIDTH, 0.4);
		terrainmap = smoothenMap(terrainmap, MAP_HEIGHT, MAP_WIDTH, 0.175);
		terrainmap = increaseContrast(terrainmap, MAP_HEIGHT, MAP_WIDTH, 0.25);
	//terrainmap = sharpenMap(terrainmap, MAP_HEIGHT, MAP_WIDTH, 1);
	
	let landmap = [];
	//initialize landmap
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			landmap.push(0);
		}
	}
	
	// landmass map
	
	let landmassmap = [];
	let landmassstarts = [];
	
	for (let x = 0; x < MAP_WIDTH; x++)
	{
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			landmassmap.push(-1);
		}
	}
	
	let premapmap = [];
	//initialize the premapmap
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			premapmap.push({ sealevel: "water", terrain: "grass", trees: "none", movecost: 2 });
		}
	}
	
	//do Landmasses
	
	for (let i = 0; i < LANDMASSES; i++)
	{
		let tempcontigmap = [];
		//initialize the tempcontigmap
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				tempcontigmap.push(false);
			}
		}
		
		let temppremap = [];
		//initialize the temppremap
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				temppremap.push({ sealevel: "water", terrain: "grass" });
			}
		}
		
		let randomsize = Math.floor(Math.random()*(MAP_HEIGHT*MAP_WIDTH/6)+Map_Size);
		let randomx = Math.floor(Math.random()*(MAP_WIDTH*3/4)+(MAP_WIDTH/8));
		let randomy = Math.floor(Math.random()*(MAP_HEIGHT*3/4)+(MAP_HEIGHT/8));
		
		temppremap[randomx+(randomy*MAP_WIDTH)].sealevel = "land";
		tempcontigmap[randomx+(randomy*MAP_WIDTH)] = true;
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		landmassstarts.push({ x: randomx, y: randomy });
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < MAP_WIDTH && currenthex.y < MAP_HEIGHT && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*MAP_WIDTH);
					let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
					let probability = LAND_EROSION * Math.log2(Map_Size) * Math.sqrt(randomsize);
					
					if (Math.random()*distance < probability)
					{
						if (AdjacentMapHexContiguous(tempcontigmap, currenthex.x, currenthex.y, MAP_WIDTH, MAP_HEIGHT, true))
						{
							tempcontigmap[position] = true;
							temppremap[position].sealevel = "land";
						}
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				if (temppremap[x+(y*MAP_WIDTH)].sealevel == "land")
				{
					landmassmap[x+(y*MAP_WIDTH)] = i+1;
					landmap[x+(y*MAP_WIDTH)] += LAND_LEVEL;
				}
			}
		}
	}
	
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			if (landmap[x+(y*MAP_WIDTH)] == 0)
				heightmap[x+(y*MAP_WIDTH)] = 0;
			else if (heightmap[x+(y*MAP_WIDTH)] < LAND_LEVEL)
				heightmap[x+(y*MAP_WIDTH)] = LAND_LEVEL;
		}
	}
	
	
	//do mountains
	
	let mountain_count = Math.floor(LANDMASSES*9/13);
	
	for (let i = 0; i < mountain_count; i++)
	{
		let tempcontigmap = [];
		//initialize the tempcontigmap
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				tempcontigmap.push(false);
			}
		}
		
		let temppremap = [];
		//initialize the temppremap
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				temppremap.push(0);
			}
		}
		
		let randomsize = Math.floor(Math.random()*(MAP_HEIGHT*MAP_WIDTH/2)+(MAP_HEIGHT*MAP_WIDTH/4));
		let randomx = Math.floor(Math.random()*(MAP_WIDTH*5/6)+(MAP_WIDTH/12));
		let randomy = Math.floor(Math.random()*(MAP_HEIGHT*5/6)+(MAP_HEIGHT/12));
		
		while (heightmap[randomx+(randomy*MAP_WIDTH)] < LAND_LEVEL)
		{
			randomx = Math.floor(Math.random()*(MAP_WIDTH*5/6)+(MAP_WIDTH/12));
			randomy = Math.floor(Math.random()*(MAP_HEIGHT*5/6)+(MAP_HEIGHT/12));
		}
		
		let randomheight = (Math.random()*0.345)+0.486;
		let lastdistance = 0;
		let lastheight = randomheight;
		
		temppremap[randomx+(randomy*MAP_WIDTH)] = randomheight;
		tempcontigmap[randomx+(randomy*MAP_WIDTH)] = true;
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < MAP_WIDTH && currenthex.y < MAP_HEIGHT && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*MAP_WIDTH);
					let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
					let probability = MOUNTAIN_EROSION * Math.log2(Map_Size) * Math.sqrt(randomsize);
					let ddh = 0.028;
					let dh = Math.random()*(0.0901-ddh);
					let nextheight = 0;
					
					if (Math.random()*distance < probability)
					{
						dh = Math.random()*(0.0901-ddh);
						if (Math.random() < 0.333)
							dh -= Math.random()*(0.0199+ddh);
						
						nextheight = Math.min(Math.max(lastheight-dh,0),1);
					}
					
					ddh -= 0.003;
					
					if (!tempcontigmap[position] && nextheight >= LAND_LEVEL)
					{
						if (AdjacentMapHexContiguous(tempcontigmap, currenthex.x, currenthex.y, MAP_WIDTH, MAP_HEIGHT, true))
						{
							tempcontigmap[position] = true;
							temppremap[position] = nextheight;
						}
						lastheight = nextheight;
					}
					
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
			lastdistance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
		}
		
		//temppremap = NormalizeMap(temppremap, 1, 0);
		
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
					heightmap[x+(y*MAP_WIDTH)] += temppremap[x+(y*MAP_WIDTH)];
			}
		}
		
	}
	
	//heightmap = NormalizeMap(heightmap, 3, 0);
	
	for (let x = 0; x < MAP_WIDTH; x++)
	{
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			if (heightmap[x+(y*MAP_WIDTH)] >= LAND_LEVEL)
			{
				premapmap[x+(y*MAP_WIDTH)].sealevel = "land";
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
				/*if (heightmap[x+(y*MAP_WIDTH)] > SNOW_MOUNTAIN_LEVEL)
				{
					premapmap[x+(y*MAP_WIDTH)].sealevel = "mountain";
					premapmap[x+(y*MAP_WIDTH)].terrain = "snow";
					
				}
				else*/ if (heightmap[x+(y*MAP_WIDTH)] > MOUNTAIN_LEVEL)
				{
					premapmap[x+(y*MAP_WIDTH)].movecost = 6;
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
						premapmap[x+(y*MAP_WIDTH)].terrain = "tundra";
					}
					else
					{
						premapmap[x+(y*MAP_WIDTH)].sealevel = "mountain";
						premapmap[x+(y*MAP_WIDTH)].terrain = "desert";
					}
				}
				else if (heightmap[x+(y*MAP_WIDTH)] > HILL_LEVEL)
				{
					premapmap[x+(y*MAP_WIDTH)].movecost = 3;
					if (terrainmap[x+(y*MAP_WIDTH)] > SNOW_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].movecost = 4;
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
						premapmap[x+(y*MAP_WIDTH)].terrain = "tundra";
					}
					else
					{
						premapmap[x+(y*MAP_WIDTH)].movecost = 4;
						premapmap[x+(y*MAP_WIDTH)].sealevel = "hill";
						premapmap[x+(y*MAP_WIDTH)].terrain = "desert";
					}
				}
				else //if (heightmap[x+(y*MAP_WIDTH)] > LAND_LEVEL)
				{
					if (terrainmap[x+(y*MAP_WIDTH)] > SNOW_LEVEL)
					{
						premapmap[x+(y*MAP_WIDTH)].movecost = 3;
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
						premapmap[x+(y*MAP_WIDTH)].terrain = "tundra";
					}
					else
					{
						premapmap[x+(y*MAP_WIDTH)].movecost = 3;
						premapmap[x+(y*MAP_WIDTH)].terrain = "desert";
					}
				}
			}
		}
	}
	
	// do water border
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		position = (y*MAP_WIDTH);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
		
		position = (MAP_WIDTH-1+y*MAP_WIDTH);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
	}
	for (let x = 0; x < MAP_WIDTH; x++)
	{
		position = (x);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
		
		position = (x+(MAP_HEIGHT-1)*MAP_WIDTH);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
	}
	
	
	//do automata
	MapTerrainAutomataPass(premapmap, "desert", "tundra", MAP_WIDTH, MAP_HEIGHT, 2);
	MapTerrainAutomataPass(premapmap, "snow", "tundra", MAP_WIDTH, MAP_HEIGHT, 2);
	
	// do landmass map
	for (let i = 0; i < landmassstarts.length; i++)
	{
		let position = landmassstarts[i].x + landmassstarts[i].y * MAP_WIDTH; 
		landmassmap = LandmassCalculation(premapmap, landmassmap, landmassmap[position], landmassstarts[i].x, landmassstarts[i].y, MAP_WIDTH, MAP_HEIGHT, Map_Size);
	}
	
	//do jungles
	let jungle_count = Math.floor(Math.random()* LANDMASSES * (Math.sqrt(Map_Size)/11 +1)) +1;
	for (let i = 0; i < jungle_count; i++)
	{
		let temptreemap = [];
		//initialize the tempmap
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				temptreemap.push("none");
			}
		}
		
		let randomsize = Math.floor((Math.random()*(MAP_HEIGHT*MAP_WIDTH/6)+MAP_HEIGHT+MAP_WIDTH)*2/3);
		let randomx = Math.floor(Math.random()*(MAP_WIDTH*5/6)+(MAP_WIDTH/12));
		let randomy = Math.floor(Math.random()*(MAP_HEIGHT*5/6)+(MAP_HEIGHT/12));
		while (premapmap[randomx+randomy*MAP_WIDTH].sealevel == "water" || premapmap[randomx+randomy*MAP_WIDTH].sealevel == "mountain" || premapmap[randomx+randomy*MAP_WIDTH].terrain == "desert")
		{
			randomx = Math.floor(Math.random()*(MAP_WIDTH*5/6)+(MAP_WIDTH/12));
			randomy = Math.floor(Math.random()*(MAP_HEIGHT*5/6)+(MAP_HEIGHT/12));
		}
		
		temptreemap[randomx+(randomy*MAP_WIDTH)] = "jungle";
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < MAP_WIDTH && currenthex.y < MAP_HEIGHT && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*MAP_WIDTH);
					if ((premapmap[position].sealevel == "land" || premapmap[position].sealevel == "hill") && premapmap[position].terrain != "desert")
					{
						let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
						let probability = JUNGLE_LEVEL * Math.log2(Map_Size) * Math.sqrt(randomsize);
						
						if (Math.random()*distance < probability)
						{
							temptreemap[position] = "jungle";
						}
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		
		temptreemap = TreesContiguousToPoint(temptreemap, "jungle", randomx, randomy, MAP_WIDTH, MAP_HEIGHT, randomsize);
		
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				if (temptreemap[x+(y*MAP_WIDTH)] == "jungle")
				{
					premapmap[x+(y*MAP_WIDTH)].trees = "jungle";
					premapmap[x+(y*MAP_WIDTH)].movecost += 1;
				}
			}
		}
		
	}
	
	//do forests
	let forest_count = Math.floor(Math.random()* LANDMASSES * (Math.sqrt(Map_Size)/9 +1)) +1;
	for (let i = 0; i < forest_count; i++)
	{
		let temptreemap = [];
		//initialize the tempmap
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				temptreemap.push("none");
			}
		}
		
		let randomsize = Math.floor((Math.random()*(MAP_HEIGHT*MAP_WIDTH/6)+MAP_HEIGHT+MAP_WIDTH)*3/4);
		let randomx = Math.floor(Math.random()*(MAP_WIDTH*5/6)+(MAP_WIDTH/12));
		let randomy = Math.floor(Math.random()*(MAP_HEIGHT*5/6)+(MAP_HEIGHT/12));
		while (premapmap[randomx+randomy*MAP_WIDTH].sealevel == "water" || premapmap[randomx+randomy*MAP_WIDTH].sealevel == "mountain" || premapmap[randomx+randomy*MAP_WIDTH].terrain == "desert")
		{
			randomx = Math.floor(Math.random()*(MAP_WIDTH*5/6)+(MAP_WIDTH/12));
			randomy = Math.floor(Math.random()*(MAP_HEIGHT*5/6)+(MAP_HEIGHT/12));
		}
		
		temptreemap[randomx+(randomy*MAP_WIDTH)] = "forest";
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < MAP_WIDTH && currenthex.y < MAP_HEIGHT && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*MAP_WIDTH);
					if ((premapmap[position].sealevel == "land" || premapmap[position].sealevel == "hill") && premapmap[position].terrain != "desert")
					{
						let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
						let probability = FOREST_LEVEL * Math.log2(Map_Size) * Math.sqrt(randomsize);
						
						if (Math.random()*distance < probability)
						{
							temptreemap[position] = "forest";
						}
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		
		temptreemap = TreesContiguousToPoint(temptreemap, "forest", randomx, randomy, MAP_WIDTH, MAP_HEIGHT, randomsize);
		
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			for (let x  = 0; x < MAP_WIDTH; x++)
			{
				if (temptreemap[x+(y*MAP_WIDTH)] == "forest")
				{
					premapmap[x+(y*MAP_WIDTH)].trees = "forest";
					premapmap[x+(y*MAP_WIDTH)].movecost += 1;
				}
			}
		}
		
	}
	
	
	//do land Rivers
	let rivers = [];
	
	let river_count = Math.ceil(Math.sqrt(mountain_count)*Math.sqrt(LANDMASSES)*3/2);
	
	//let river_count = 1

	//console.log(river_count);
	
	for (let i = 0; i < river_count; i++)
	{
		//river starting point
		let randomx = Math.floor(Math.random()*MAP_WIDTH);
		let randomy = Math.floor(Math.random()*MAP_HEIGHT);
		while (premapmap[randomx+randomy*MAP_WIDTH].sealevel != "mountain" && premapmap[randomx+randomy*MAP_WIDTH].sealevel != "hill")
		{
			randomx = Math.floor(Math.random()*MAP_WIDTH);
			randomy = Math.floor(Math.random()*MAP_HEIGHT);
		}
		
		let nearestWaterBody = NearestWaterbodyToPoint(premapmap, randomx, randomy, MAP_WIDTH, MAP_HEIGHT);
		
		if (nearestWaterBody == null)
			break;
		
		let vectorToWaterBody = { x: nearestWaterBody.x - randomx, y: nearestWaterBody.y - randomy };
		
		
		//console.log(nearestWaterBody);
		
		let river_direction = VectorToDirection(MapCoordinationsToVector(nearestWaterBody, { x: randomx, y: randomy }));
		
		if (river_direction == -1)
			console.log("river error");
		else
			rivers.push({ direction: river_direction, x: randomx, y: randomy });
		
		let currenthex = { x: randomx, y:randomy };
		let continueRiver = true;
		while (currenthex.x > -1 && currenthex.x < MAP_WIDTH && currenthex.y > -1 && currenthex.y < MAP_HEIGHT && premapmap[currenthex.x+currenthex.y*MAP_WIDTH].sealevel != "water"&& premapmap[currenthex.x+currenthex.y*MAP_WIDTH].sealevel != "water" && continueRiver)
		{
			MoveHex(currenthex, river_direction);
			
			river_direction = VectorToDirection(MapCoordinationsToVector(nearestWaterBody, currenthex));
			
			if (Math.random() < 0.33)
				river_direction += Math.floor(Math.random()*3)-1;
			
			//river_direction = river_direction%6;
			
			if (river_direction < 0)
				river_direction += 6;
			else if (river_direction > 5)
				river_direction -= 6;
			
			if (currenthex.x > -1 && currenthex.x < MAP_WIDTH && currenthex.y > -1 && currenthex.y < MAP_HEIGHT)
			{
				if (ContainsIdenticalXY(rivers,currenthex))
				{
					continueRiver = false;
				}
				rivers.push({ direction: river_direction, x: currenthex.x, y: currenthex.y });
			}
		}
	}
	
	//console.log(rivers);
	
	
	// do lakes
	
	premapmap = LakeWaterDetection(premapmap, MAP_WIDTH, MAP_HEIGHT);
	let lake_tile_count = 0;
	//do deep water
	
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			if ((premapmap[x+(y*MAP_WIDTH)].sealevel == "water" || premapmap[x+(y*MAP_WIDTH)].sealevel == "lake") && OnlyWaterAdjacent(premapmap,x,y,MAP_WIDTH, MAP_HEIGHT))
			{
				premapmap[x+(y*MAP_WIDTH)].sealevel = "deepwater";
			}
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "lake")
			{
				lake_tile_count++;
			}
		}
	}
	
	// do lake rivers
	
	river_count = Math.ceil(river_count/3);
	
	//let river_count = 1

	//console.log("lake river counter: " + river_count);
	
	if (lake_tile_count > 0)
	{
		for (let i = 0; i < river_count; i++)
		{
			//river starting point
			let randomx = Math.floor(Math.random()*MAP_WIDTH);
			let randomy = Math.floor(Math.random()*MAP_HEIGHT);
			//let placeattempts = 0;
			while (premapmap[randomx+randomy*MAP_WIDTH].sealevel != "lake" || OnlyWaterAdjacent(premapmap,randomx,randomy,MAP_WIDTH,MAP_HEIGHT))
			{
				randomx = Math.floor(Math.random()*MAP_WIDTH);
				randomy = Math.floor(Math.random()*MAP_HEIGHT);
				//placeattempts++
				//console.log("river placement attempts: " + placeattempts + ", " + premapmap[randomx+randomy*MAP_WIDTH].sealevel + ", " + OnlyWaterAdjacent(premapmap,randomx,randomy,MAP_WIDTH,MAP_HEIGHT));
			}
			
			let nearestWaterBody = NearestWaterbodyToPoint(premapmap, randomx, randomy, MAP_WIDTH, MAP_HEIGHT);
			
			if (nearestWaterBody == null)
				break;
			
			let vectorToWaterBody = { x: nearestWaterBody.x - randomx, y: nearestWaterBody.y - randomy };
			
			
			//console.log(nearestWaterBody);
			
			let river_direction = VectorToDirection(MapCoordinationsToVector(nearestWaterBody, { x: randomx, y: randomy }));
			
			if (river_direction == -1)
				console.log("river error");
			else
				rivers.push({ direction: river_direction, x: randomx, y: randomy });
			
			let currenthex = { x: randomx, y:randomy };
			
			while (currenthex.x > -1 && currenthex.x < MAP_WIDTH && currenthex.y > -1 && currenthex.y < MAP_HEIGHT && premapmap[currenthex.x+currenthex.y*MAP_WIDTH].sealevel != "water")
			{
				MoveHex(currenthex, river_direction);
				
				river_direction = VectorToDirection(MapCoordinationsToVector(nearestWaterBody, currenthex));
				
				if (Math.random() < 0.33)
					river_direction += Math.floor(Math.random()*3)-1;
				
				//river_direction = river_direction%6;
				
				if (river_direction < 0)
					river_direction += 6;
				else if (river_direction > 5)
					river_direction -= 6;
				
				if (currenthex.x > -1 && currenthex.x < MAP_WIDTH && currenthex.y > -1 && currenthex.y < MAP_HEIGHT)
				{
					if (premapmap[currenthex.x+currenthex.y*MAP_WIDTH].sealevel != "water")
					{
						if (ContainsIdenticalXY(rivers,currenthex))
						{
							continueRiver = false;
						}
						rivers.push({ direction: river_direction, x: currenthex.x, y: currenthex.y });
					}
				}
			}
		}
	}
	
	// do marshes
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			if (premapmap[x+(y*MAP_WIDTH)].terrain == "grass" && premapmap[x+(y*MAP_WIDTH)].sealevel == "land")
			{
				let riveradj = CountRiversAroundHex(rivers, x, y, MAP_WIDTH, MAP_HEIGHT)+1;
				let marshchance = riveradj*riveradj*0.00667;
				if (Math.random() < marshchance)
				{
					premapmap[x+(y*MAP_WIDTH)].terrain = "marsh";
					premapmap[x+(y*MAP_WIDTH)].movecost = 4;
				}
			}
		}
	}
	
	// do oasis
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			if (premapmap[x+(y*MAP_WIDTH)].terrain == "desert" && premapmap[x+(y*MAP_WIDTH)].sealevel == "land")
			{
				let riveradj = CountRiversAroundHex(rivers, x, y, MAP_WIDTH, MAP_HEIGHT)+1;
				let oasischance = riveradj*0.01667;
				if (Math.random() < oasischance)
					premapmap[x+(y*MAP_WIDTH)].terrain = "oasis";
			}
		}
	}
	
	
	// do city locations
	let cities = [];
	let citycount = 0;
	let citylandmass = Math.ceil(Map_Size);
	for (let i = 0; i < citylandmass; i++)
	{
		let citiesroll = Math.max(Math.floor(Math.random()*4+Math.random()*4)-3,0);
		citycount += citiesroll;
	}
	
	citycount = Math.ceil(citycount*city_density);
	
	for (let i = 0; i < citycount && citiesCheck; i++)
	{
		let currenthex;
		//ideal location random placement attempts
		let cityvalid = true;
		
		for (let j = 0; j < 255 && cityvalid; j++)
		{
			let placeattempts = 0;
			currenthex = { x: Math.floor(Math.random()*(MAP_WIDTH-1)+1), y: Math.floor(Math.random()*(MAP_HEIGHT-1)+1), capitalcity: i };
			while (!CityLocationValid(currenthex, cities, premapmap, MAP_WIDTH) && placeattempts <= 255)
			{
				currenthex = { x: Math.floor(Math.random()*(MAP_WIDTH-1)+1), y: Math.floor(Math.random()*(MAP_HEIGHT-1)+1), capitalcity: i };
				placeattempts++;
				if (placeattempts > 255)
				{
					console.log("stopping placing cities, " + i + " cities placed");
					cityvalid = false;
					citycount = i;
					i += citycount;
				}
			}
			
			if (cityvalid)
			{
				let position = currenthex.x + currenthex.y*MAP_WIDTH;
				let hasFreshWater = ContainsIdenticalXY(rivers, currenthex) || CountRiversAroundHex(rivers, currenthex.x, currenthex.y, MAP_WIDTH, MAP_HEIGHT) > 0 || premapmap[position].terrain == "oasis";
				let hasShore = (NearestWaterbodyToPoint(premapmap, currenthex.x, currenthex.y, MAP_WIDTH, MAP_HEIGHT, 7) != null);
				let hasGrasslands = (NearestGrasslandsToPoint(premapmap, currenthex, MAP_WIDTH, MAP_HEIGHT, 7) != null);
				let chanceToStay = 0.1;
				let factorsToStay = 0;
				if (hasFreshWater)
				{
					factorsToStay++;
				}
				if (hasShore)
				{
					factorsToStay++;
				}
				if (hasGrasslands)
				{
					factorsToStay++;
				}
				chanceToStay += factorsToStay*factorsToStay*0.1;
				if (Math.random() < chanceToStay)
					j += 255;
				else
					j++;
			}
		}
		if (cityvalid)
			cities.push(currenthex);
	}
	
	// do towns
	
	let maxdistancefromcity = 6;
	
	let towns = [];
	let roads = [];
	
	for (let i = 0; i < cities.length && townsCheck; i++)
	{
		let towncount = Math.floor((Math.random()*5 + Math.random()*5 - 1))
		for (let a = 0; a < towncount; a++)
		{
			let currenthex = { x: cities[i].x, y: cities[i].y };
			let nexthex = { x: currenthex.x, y: currenthex.y };
			let randommovedir = Math.floor(Math.random()*6);
			for (let b = 0; b < maxdistancefromcity; b++)
			{
				MoveHex(nexthex, randommovedir);
				let position = nexthex.x + nexthex.y*MAP_WIDTH;
				if (nexthex.x > -1 && nexthex.x < MAP_WIDTH && nexthex.y > -1 && nexthex.y < MAP_HEIGHT)
				{
					if (premapmap[position].sealevel != "water" && premapmap[position].sealevel != "lake"&& premapmap[position].sealevel != "deepwater")
					{
						currenthex.x = nexthex.x;
						currenthex.y = nexthex.y;
					}
				}
				randommovedir = Math.floor(Math.random()*6);
			}
			if (!ContainsIdenticalXY(cities,currenthex) && !ContainsIdenticalXY(towns,currenthex))
			{
				let townbp = 
						{
							x: currenthex.x,
							y: currenthex.y,
							city: cities[i]
						};
				towns.push(townbp);
			}
		}
	}
	
	let territoriesmap = [];
	let capitalcities = [];
	
	for (let x = 0; x < MAP_WIDTH; x++)
	{
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			territoriesmap.push(-1);
		}
	}
	
	if (territoriesCheck)
	{
		let tempcities = cities.slice();
		let numcapitalcities = Math.min(Math.ceil(Math.sqrt(citycount)+Math.random()*5),citycount);
		for (let i = 0; i < numcapitalcities; i++)
		{
			let currentcity = Math.floor(Math.random()*tempcities.length);
			capitalcities.push(tempcities[currentcity]);
			tempcities.splice(currentcity, 1);
		}
		
		for (let i = 0; i < capitalcities.length; i++)
		{
			let nearestCities = XNearestPointsWithPathing(tempcities, capitalcities[i], city_connectedness, premapmap, landmassmap, MAP_WIDTH, MAP_HEIGHT);
			for (let j = 0; j < nearestCities.length; j++)
			{
				nearestCities[j].capitalcity = capitalcities[i].capitalcity;
			}
		}
	}
	
	if (roadsCheck)
	{
		// do roads from towns to cities
		
		for (let i = 0; i < towns.length; i++)
		{
			let hexesFromTownToCity = mapPathToPosition(towns[i], towns[i].city, premapmap, MAP_WIDTH, MAP_HEIGHT);
			if (hexesFromTownToCity[hexesFromTownToCity.length-1] == towns[i].city)
			{
				for (let a = 0; a < hexesFromTownToCity.length; a++)
				{
					let position = a;
					if (position < hexesFromTownToCity.length-1)
					{
						let road_dir = DirectionFromHexToHex(hexesFromTownToCity[position], hexesFromTownToCity[position+1]);
						if (ContainsIdenticalXY(roads, hexesFromTownToCity[position]))
							a += hexesFromTownToCity.length;
						
						roads.push({ direction: road_dir, x: hexesFromTownToCity[position].x, y: hexesFromTownToCity[position].y });
					}
					let mappos = hexesFromTownToCity[position].x + hexesFromTownToCity[position].y*MAP_WIDTH;
					premapmap[mappos].movecost = 1;
					if (territoriesCheck)
					{
						territoriesmap[mappos] = towns[i].city.capitalcity;
						if (a == 0 || a == hexesFromTownToCity.length-1)
							territoriesmap = ExpandTerritoryByOne(territoriesmap, hexesFromTownToCity[position], towns[i].city.capitalcity, MAP_WIDTH, MAP_HEIGHT);
					}
				}
			}
		}
		
		// do roads from city to city
		
		for (let i = 0; i < cities.length; i++)
		{
			let nearestCities = XNearestPointsWithPathing(cities, cities[i], city_connectedness, premapmap, landmassmap, MAP_WIDTH, MAP_HEIGHT);
			for (let a = 0; a < nearestCities.length; a++)
			{
				let hexesFromTownToCity = mapPathToPosition(cities[i], nearestCities[a], premapmap, MAP_WIDTH, MAP_HEIGHT);
				if (hexesFromTownToCity[hexesFromTownToCity.length-1] == nearestCities[a])
				{
					for (let b = 0; b < hexesFromTownToCity.length; b++)
					{
						if (b < hexesFromTownToCity.length-1)
						{
							let road_dir = DirectionFromHexToHex(hexesFromTownToCity[b], hexesFromTownToCity[b+1]);

							roads.push({ direction: road_dir, x: hexesFromTownToCity[b].x, y: hexesFromTownToCity[b].y });
						}
						let mappos = hexesFromTownToCity[b].x + hexesFromTownToCity[b].y*MAP_WIDTH;
						premapmap[mappos].movecost = 1;
						if (territoriesCheck && cities[i].capitalcity == nearestCities[a].capitalcity)
						{
							territoriesmap[mappos] = cities[i].capitalcity;
							if (b == 0 || b == hexesFromTownToCity.length-1)
								territoriesmap = ExpandTerritoryByOne(territoriesmap, hexesFromTownToCity[b], cities[i].capitalcity, MAP_WIDTH, MAP_HEIGHT);
						}
					}
				}
			}
		}
	}
	
	if (territoriesCheck)
	{
		TerritoriesAutomataPass(territoriesmap, MAP_WIDTH, MAP_HEIGHT, 4);
	}
	
	let mapmap = [];
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			let xpos = (12*x);
			let ypos = (14*y+((x%2)*7));
			let trees = true;
			if (premapmap[x+(y*MAP_WIDTH)].sealevel == "mountain")
			{
				let snowless = (Math.random() < 0.55);
				if (premapmap[x+(y*MAP_WIDTH)].terrain == "snow")
				{
					mapmap.push({ src: './terrain_tiles_snow_flat.png', x: xpos, y: ypos});
					snowless = false;
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
					snowless = true;
				}
				
				if (snowless)
				{
					mapmap.push({ src: './terrain_tiles_mountain_snowless.png', x: xpos, y: ypos});
				}
				else
				{
					mapmap.push({ src: './terrain_tiles_mountain.png', x: xpos, y: ypos});
				}
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
					mapmap.push({ src: './terrain_tiles_grass_flat.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "marsh")
				{
					mapmap.push({ src: './terrain_tiles_marsh.png', x: xpos, y: ypos});
					trees = false;
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "plains")
				{
					mapmap.push({ src: './terrain_tiles_plains_flat.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].terrain == "oasis")
				{
					trees = false;
					mapmap.push({ src: './terrain_tiles_oasis.png', x: xpos, y: ypos});
				}
				else
				{
					trees = false;
					mapmap.push({ src: './terrain_tiles_desert_flat.png', x: xpos, y: ypos});
				}
					
			}
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "lake")
				mapmap.push({ src: './terrain_tiles_lake.png', x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "water")
				mapmap.push({ src: './terrain_tiles_water.png', x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "deepwater")
				mapmap.push({ src: './terrain_tiles_deepwater.png', x: xpos, y: ypos});
			
			if (trees)
			{
				if (premapmap[x+(y*MAP_WIDTH)].trees == "forest")
				{
					mapmap.push({ src: './terrain_tiles_forest.png', x: xpos, y: ypos});
				}
				else if (premapmap[x+(y*MAP_WIDTH)].trees == "jungle")
				{
					mapmap.push({ src: './terrain_tiles_jungle.png', x: xpos, y: ypos});
				}
			}
		}
	}
	
	for (i in rivers)
	{
		let xpos = (12*rivers[i].x);
		let ypos = (14*rivers[i].y+((rivers[i].x%2)*7));
		let tile = '';
		
		if (rivers[i].direction == 0)
		{
			ypos -= 14;
			tile =  Math.random() < 0.5 ? './terrain_river_vertical_0.png' : './terrain_river_vertical_1.png';
		}
		else if (rivers[i].direction == 1)
		{
			ypos -= 7;
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalA_0.png' : './terrain_river_horizontalA_1.png';
		}
		else if (rivers[i].direction == 2)
		{
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalB_0.png' : './terrain_river_horizontalB_1.png';
		}
		else if (rivers[i].direction == 3)
		{
			tile =  Math.random() < 0.5 ? './terrain_river_vertical_0.png' : './terrain_river_vertical_1.png';
		}
		else if (rivers[i].direction == 4)
		{
			xpos -= 12;
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalA_0.png' : './terrain_river_horizontalA_1.png';
		}
		else if (rivers[i].direction == 5)
		{
			ypos -= 7;
			xpos -= 12;
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalB_0.png' : './terrain_river_horizontalB_1.png';
		}
		
		mapmap.push({ src: tile, x: xpos, y: ypos });
	}
	
	
	for (i in roads)
	{
		let xpos = (12*roads[i].x);
		let ypos = (14*roads[i].y+((roads[i].x%2)*7));
		let tile = './terrain_roads_horizontalA.png';
		
		if (roads[i].direction == 0)
		{
			ypos -= 14;
			tile = './terrain_roads_vertical.png';
		}
		else if (roads[i].direction == 1)
		{
			ypos -= 7;
			tile = './terrain_roads_horizontalA.png';
		}
		else if (roads[i].direction == 2)
		{
			tile = './terrain_roads_horizontalB.png';
		}
		else if (roads[i].direction == 3)
		{
			tile = './terrain_roads_vertical.png';
		}
		else if (roads[i].direction == 4)
		{
			xpos -= 12;
			tile = './terrain_roads_horizontalA.png';
		}
		else if (roads[i].direction == 5)
		{
			ypos -= 7;
			xpos -= 12;
			tile = './terrain_roads_horizontalB.png';
		}
		
		mapmap.push({ src: tile, x: xpos, y: ypos });
	}
	
	for (i in cities)
	{
		let xpos = (12*cities[i].x);
		let ypos = (14*cities[i].y+((cities[i].x%2)*7));
		
		mapmap.push({ src: './terrain_tiles_city.png', x: xpos, y: ypos });
	}
	
	for (i in towns)
	{
		let xpos = (12*towns[i].x);
		let ypos = (14*towns[i].y+((towns[i].x%2)*7));
		
		mapmap.push({ src: './terrain_tiles_town.png', x: xpos, y: ypos });
	}
	
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			let xpos = (12*x);
			let ypos = (14*y+((x%2)*7));
			
			if (premapmap[x+(y*MAP_WIDTH)].sealevel == "lake")
				mapmap.push({ src: './terrain_tiles_lake.png', x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "water")
				mapmap.push({ src: './terrain_tiles_water.png', x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].sealevel == "deepwater")
				mapmap.push({ src: './terrain_tiles_deepwater.png', x: xpos, y: ypos});
			
			if (grid_opacity > 0)
			{
				mapmap.push({ src: './terrain_tiles_whitegrid.png', x: xpos, y: ypos, opacity: grid_opacity });
			}
			
			if (territoriesCheck && territoriesmap[x+(y*MAP_WIDTH)] > -1)
			{
				//mapmap.push({ src: './terrain_tiles_whitegrid.png', x: xpos, y: ypos});
				
				let mappoint = { x: x, y: y };
				let borders = TerritoryBorders(territoriesmap, mappoint, territoriesmap[x+(y*MAP_WIDTH)], MAP_WIDTH, MAP_HEIGHT);
				if (borders >= 32)
				{
					mapmap.push({ src: './terrain_tiles_border_4.png', x: xpos, y: ypos});
					borders -= 32;
				}
				if (borders >= 16)
				{
					mapmap.push({ src: './terrain_tiles_border_5.png', x: xpos, y: ypos});
					borders -= 16;
				}
				if (borders >= 8)
				{
					mapmap.push({ src: './terrain_tiles_border_0.png', x: xpos, y: ypos});
					borders -= 8;
				}
				if (borders >= 4)
				{
					mapmap.push({ src: './terrain_tiles_border_1.png', x: xpos, y: ypos});
					borders -= 4;
				}
				if (borders >= 2)
				{
					mapmap.push({ src: './terrain_tiles_border_2.png', x: xpos, y: ypos});
					borders -= 2;
				}
				if (borders >= 1)
				{
					mapmap.push({ src: './terrain_tiles_border_3.png', x: xpos, y: ypos});
					borders -= 1;
				}
				
			}
		}
	}
	
	let file = 'generatedmap.png';
	let path = './' + file;
	
	mergeImages(mapmap, 
	{
		width: (12*MAP_WIDTH + 4),
		height: (14*MAP_HEIGHT + 7),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
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

function outputAdventureWorldMap(channel, arguments)
{
	
	let mapmap = [];
	for (let y = 0; y < asworld_height; y++)
	{
		for (let x  = 0; x < asworld_width; x++)
		{
			let xpos = (12*x);
			let ypos = (14*y+((x%2)*7));
			let trees = true;
			if (asworldmap[x+(y*asworld_width)].sealevel > 10)
			{
				let snowless = (Math.random() < 0.55);
				if (asworldmap[x+(y*asworld_width)].climate == "extremely cold")
				{
					mapmap.push({ src: './terrain_tiles_snow_flat.png', x: xpos, y: ypos});
					snowless = false;
				}
				else if (asworldmap[x+(y*asworld_width)].climate == "cold")
				{
					mapmap.push({ src: './terrain_tiles_tundra_flat.png', x: xpos, y: ypos});
				}
				else if (asworldmap[x+(y*asworld_width)].climate == "temperate")
				{
					mapmap.push({ src: './terrain_tiles_grass_flat.png', x: xpos, y: ypos});
				}
				else
				{
					mapmap.push({ src: './terrain_tiles_desert_flat.png', x: xpos, y: ypos});
					snowless = true;
				}
				
				if (snowless)
				{
					mapmap.push({ src: './terrain_tiles_mountain_snowless.png', x: xpos, y: ypos});
				}
				else
				{
					mapmap.push({ src: './terrain_tiles_mountain.png', x: xpos, y: ypos});
				}
			}
			else if (asworldmap[x+(y*asworld_width)].sealevel <= 10 && asworldmap[x+(y*asworld_width)].sealevel > 5)
			{
				if (asworldmap[x+(y*asworld_width)].climate == "extremely cold")
				{
					mapmap.push({ src: './terrain_tiles_snow_hills.png', x: xpos, y: ypos});
				}
				else if (asworldmap[x+(y*asworld_width)].climate == "cold")
				{
					mapmap.push({ src: './terrain_tiles_tundra_hills.png', x: xpos, y: ypos});
				}
				else if (asworldmap[x+(y*asworld_width)].climate == "temperate")
				{
					mapmap.push({ src: './terrain_tiles_grass_hills.png', x: xpos, y: ypos});
				}
				else
				{
					trees = false;
					mapmap.push({ src: './terrain_tiles_desert_hills.png', x: xpos, y: ypos});
				}
			}
			else if (asworldmap[x+(y*asworld_width)].sealevel <= 5 && asworldmap[x+(y*asworld_width)].sealevel > 0)
			{
				if (asworldmap[x+(y*asworld_width)].climate == "extremely cold")
				{
					mapmap.push({ src: './terrain_tiles_snow_flat.png', x: xpos, y: ypos});
				}
				else if (asworldmap[x+(y*asworld_width)].climate == "cold")
				{
					mapmap.push({ src: './terrain_tiles_tundra_flat.png', x: xpos, y: ypos});
				}
				else if (asworldmap[x+(y*asworld_width)].climate == "temperate")
				{
					mapmap.push({ src: './terrain_tiles_grass_flat.png', x: xpos, y: ypos});
				}
				else
				{
					trees = false;
					mapmap.push({ src: './terrain_tiles_desert_flat.png', x: xpos, y: ypos});
				}
					
			}
			else if (asworldmap[x+(y*asworld_width)].sealevel <= 0)
			{
				trees = false;
				mapmap.push({ src: './terrain_tiles_water.png', x: xpos, y: ypos});
			}
			
			if (trees)
			{
				if (asworldmap[x+(y*asworld_width)].biome == "forest")
				{
					mapmap.push({ src: './terrain_tiles_forest.png', x: xpos, y: ypos});
				}
				else if (asworldmap[x+(y*asworld_width)].biome == "jungle")
				{
					mapmap.push({ src: './terrain_tiles_jungle.png', x: xpos, y: ypos});
				}
			}
		}
	}
	
	/*
	for (i in rivers)
	{
		let xpos = (12*rivers[i].x);
		let ypos = (14*rivers[i].y+((rivers[i].x%2)*7));
		let tile = '';
		
		if (rivers[i].direction == 0)
		{
			ypos -= 14;
			tile =  Math.random() < 0.5 ? './terrain_river_vertical_0.png' : './terrain_river_vertical_1.png';
		}
		else if (rivers[i].direction == 1)
		{
			ypos -= 7;
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalA_0.png' : './terrain_river_horizontalA_1.png';
		}
		else if (rivers[i].direction == 2)
		{
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalB_0.png' : './terrain_river_horizontalB_1.png';
		}
		else if (rivers[i].direction == 3)
		{
			tile =  Math.random() < 0.5 ? './terrain_river_vertical_0.png' : './terrain_river_vertical_1.png';
		}
		else if (rivers[i].direction == 4)
		{
			xpos -= 12;
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalA_0.png' : './terrain_river_horizontalA_1.png';
		}
		else if (rivers[i].direction == 5)
		{
			ypos -= 7;
			xpos -= 12;
			tile =  Math.random() < 0.5 ? './terrain_river_horizontalB_0.png' : './terrain_river_horizontalB_1.png';
		}
		
		mapmap.push({ src: tile, x: xpos, y: ypos });
	}
	*/
	
	/*
	for (i in roads)
	{
		let xpos = (12*roads[i].x);
		let ypos = (14*roads[i].y+((roads[i].x%2)*7));
		let tile = './terrain_roads_horizontalA.png';
		
		if (roads[i].direction == 0)
		{
			ypos -= 14;
			tile = './terrain_roads_vertical.png';
		}
		else if (roads[i].direction == 1)
		{
			ypos -= 7;
			tile = './terrain_roads_horizontalA.png';
		}
		else if (roads[i].direction == 2)
		{
			tile = './terrain_roads_horizontalB.png';
		}
		else if (roads[i].direction == 3)
		{
			tile = './terrain_roads_vertical.png';
		}
		else if (roads[i].direction == 4)
		{
			xpos -= 12;
			tile = './terrain_roads_horizontalA.png';
		}
		else if (roads[i].direction == 5)
		{
			ypos -= 7;
			xpos -= 12;
			tile = './terrain_roads_horizontalB.png';
		}
		
		mapmap.push({ src: tile, x: xpos, y: ypos });
	}
	*/
	
	for (let y = 0; y < asworld_height; y++)
	{
		for (let x  = 0; x < asworld_width; x++)
		{
			let xpos = (12*x);
			let ypos = (14*y+((x%2)*7));
			if (asworldmap[x+(y*asworld_width)].landmark == "city")
			{
				mapmap.push({ src: './terrain_tiles_city.png', x: xpos, y: ypos});
			}
			else if (asworldmap[x+(y*asworld_width)].landmark == "town")
			{
				mapmap.push({ src: './terrain_tiles_town.png', x: xpos, y: ypos});
			}
		}
	}
	
	let file = 'generatedmap.png';
	let path = './' + file;
	
	mergeImages(mapmap, 
	{
		width: (12*asworld_width + 4),
		height: (14*asworld_height + 7),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
	
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
	
	let random_int = Math.floor(Math.random()*goblin_gen.bodies.length);
	let rerolls = 0;
	while (random_int > 3 && rerolls < 3)
	{
		random_int = Math.floor(Math.random()*goblin_gen.bodies.length);
		rerolls++;
	}
	let goblin_body = goblin_gen.bodies[random_int];
	let bodypath = goblin_body.path[goblin_colour%goblin_body.path.length];
	assembledgoblin.push(bodypath);
	
	random_int = Math.floor(Math.random()*goblin_gen.clothes.length);
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
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
}

function generatePsyduck(channel, arguments)
{
	let assembledpsyduck = [];
	
	let random_int = Math.floor(Math.random()*psyduck_gen.rightarms.length);
	let rightarm = psyduck_gen.rightarms[random_int];
	let partpath = rightarm.path;
	assembledpsyduck.push(partpath);
	
	random_int = Math.floor(Math.random()*psyduck_gen.bodies.length);
	let bodypart = psyduck_gen.bodies[random_int];
	partpath = bodypart.path;
	assembledpsyduck.push(partpath);
	
	random_int = Math.floor(Math.random()*psyduck_gen.heads.length);
	let head = psyduck_gen.heads[random_int];
	partpath = head.path;
	assembledpsyduck.push(partpath);
	
	random_int = Math.floor(Math.random()*psyduck_gen.eyes.length);
	let eyes = psyduck_gen.eyes[random_int];
	partpath = eyes.path;
	assembledpsyduck.push(partpath);
	
	random_int = Math.floor(Math.random()*psyduck_gen.hairs.length);
	let hair = psyduck_gen.hairs[random_int];
	partpath = hair.path;
	assembledpsyduck.push(partpath);
	
	random_int = Math.floor(Math.random()*psyduck_gen.leftarms.length);
	let leftarm = psyduck_gen.leftarms[random_int];
	partpath = leftarm.path;
	assembledpsyduck.push(partpath);
	
	let file = 'psyduck.png';
	let path = './' + file;
	
	mergeImages(assembledpsyduck, 
	{
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
}

function generateFren(channel, arguments)
{
	let fullfren = [];
	
	let random_int = Math.floor(Math.random()*fren_gen.bodies.length);
	let fren_body = fren_gen.bodies[random_int];
	let bodypath = fren_body.path;
	fullfren.push(bodypath);
	
	random_int = Math.floor(Math.random()*fren_gen.accessories.length);
	let accessory = fren_gen.accessories[random_int].path;
	fullfren.push(accessory);
	
	
	let file = 'newestfren.png';
	let path = './' + file;
	
	mergeImages(fullfren, 
	{
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
		
}

function generateFamiliar(channel, arguments)
{
	let fullFamiliar = [];
	
	let random_int = Math.floor(Math.random()*familiar_gen.bodies.length);
	let fam_body = familiar_gen.bodies[random_int];
	let bodypath = fam_body.path;
	fullFamiliar.push(bodypath);
	
	random_int = Math.floor(Math.random()*familiar_gen.hats.length);
	let famhat = familiar_gen.hats[random_int].path;
	fullFamiliar.push(famhat);
	
	random_int = Math.floor(Math.random()*familiar_gen.heads.length);
	let famhead = familiar_gen.heads[random_int].path;
	fullFamiliar.push(famhead);
	
	random_int = Math.floor(Math.random()*familiar_gen.eyes.length);
	let fameye = familiar_gen.eyes[random_int].path;
	fullFamiliar.push(fameye);
	
	
	let file = 'newestfamiliar.png';
	let path = './' + file;
	
	mergeImages(fullFamiliar, 
	{
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
		
}

function generateBird(channel, arguments)
{
	let fullBird = [];
	
	let random_int = Math.floor(Math.random()*bird_gen.feet.length);
	let birdfeet = bird_gen.feet[random_int].path;
	fullBird.push(birdfeet);
	
	random_int = Math.floor(Math.random()*bird_gen.frontwings.length);
	let birdfrontwing = bird_gen.frontwings[random_int].path;
	fullBird.push(birdfrontwing);
	
	random_int = Math.floor(Math.random()*bird_gen.bodies.length);
	let birdbody = bird_gen.bodies[random_int].path;
	fullBird.push(birdbody);
	
	random_int = Math.floor(Math.random()*bird_gen.backwings.length);
	let birdbackwing = bird_gen.backwings[random_int].path;
	fullBird.push(birdbackwing);
	
	random_int = Math.floor(Math.random()*bird_gen.heads.length);
	let birdhead = bird_gen.heads[random_int].path;
	fullBird.push(birdhead);
	
	random_int = Math.floor(Math.random()*bird_gen.eyes.length);
	let birdeyes = bird_gen.eyes[random_int].path;
	fullBird.push(birdeyes);
	
	if (Math.random() < 0.2)
	{
		random_int = Math.floor(Math.random()*bird_gen.accessories.length);
		let birdaccessory = bird_gen.accessories[random_int].path;
		fullBird.push(birdaccessory);
	}
	
	random_int = Math.floor(Math.random()*bird_gen.beaks.length);
	let birdbeak = bird_gen.beaks[random_int].path;
	fullBird.push(birdbeak);
	
	let file = 'newestbird.png';
	let path = './' + file;
	
	mergeImages(fullBird, 
	{
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
		
}

function generateSlime(channel, arguments)
{
	let fullslime = [];
	let inneritems = [];
	let outeritems = [];
	let hasexpression = false;
	let expression;
	
	let random_int = Math.floor(Math.random()*slime_gen.bodies.length);
	let slimebody = slime_gen.bodies[random_int];
	
	for (let i = 0; i < slime_gen.items.length; i++)
	{
		let randomf = Math.random();
		if (randomf < slime_gen.items[i].chance)
		{
			inneritems.push(slime_gen.items[i].path[0]);
			if (slime_gen.items[i].path.length > 1)
				outeritems.push(slime_gen.items[i].path[1]);
		}
	}
	
	if (Math.random() < 0.25)
	{
		hasexpression = true;
		random_int = Math.floor(Math.random()*slime_gen.expressions.length);
		expression = slime_gen.expressions[random_int];
	}
	
	fullslime.push(slimebody.path);
	for (let i = 0; i < inneritems.length; i++)
	{
		fullslime.push(inneritems[i]);
	}
	fullslime.push(slimebody.path);
	if (hasexpression)
		fullslime.push(expression.path);
	for (let i = 0; i < outeritems.length; i++)
	{
		fullslime.push(outeritems[i]);
	}
	
	//console.log(fullslime);
	
	let file = 'newestslime.png';
	let path = './' + file;
	
	
	mergeImages(fullslime, 
	{
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
}

//
//
//
// city map generator
//
//

function fillMapSpace(map, mapwidth, mapheight, width, height, xpos, ypos)
{
	for (let y = ypos; y < ypos+height; y++)
	{
		for (let x = xpos; x < xpos+width; x++)
		{
			if (y < mapheight && x < mapwidth)
				map[x+y*mapwidth] = "b";
		}
	}
	return map;
}

function mapSpaceOpen(map, mapwidth, mapheight, width, height, xpos, ypos)
{
	for (let y = ypos; y < ypos+height; y++)
	{
		for (let x = xpos; x < xpos+width; x++)
		{
			if (y < 0 || x < 0 || y >= mapheight || x >= mapwidth || map[x+y*mapwidth] != "")
				return false;
		}
	}
	return true;
}

function mapHasSpace(map, mapwidth, mapheight, width, height, xpos, ypos)
{
	for (let y = ypos; y > ypos - height; y--)
	{
		for (let x = xpos; x > xpos - width; x--)
		{
			if (mapSpaceOpen(map, mapwidth, mapheight, width, height, x, y))
				return { x: x, y: y };
		}
	}
	return false;
}

function tryPlaceBuilding(map, mapwidth, mapheight, buildings, xpos, ypos)
{
	let buildingslooped = 0;
	for (let i = Math.floor(Math.random()*buildings.length); buildingslooped < buildings.length; buildingslooped++)
	{
		
		let buildingplacement = mapHasSpace(map, mapwidth, mapheight, buildings[i].width, buildings[i].height, xpos, ypos);
		if (buildingplacement != false)
		{
			return { path: buildings[i].path, width: buildings[i].width, height: buildings[i].height, x: buildingplacement.x, y: buildingplacement.y };
		}
		i++;
		if (i == buildings.length)
			i = 0;
	}
	return false;
}

function isRoadAdjacent(map, mapwidth, mapheight, xpos, ypos)
{
	if (xpos-1 > -1 && map[xpos-1+ypos*mapwidth] == "r")
	{
		return true;
	}
	else if (xpos+1 < mapwidth && map[xpos+1+ypos*mapwidth] == "r")
	{
		return true;
	}
	else if (ypos-1 > -1 && map[xpos+(ypos-1)*mapwidth] == "r")
	{
		return true;
	}
	else if (ypos+1 < mapheight && map[xpos+(ypos+1)*mapwidth] == "r")
	{
		return true;
	}
	return false;
}

let MAX_CITY_HEIGHT = 200;
let MAX_CITY_WIDTH = 150;

function generateCityMap(channel, arguments)
{
	let premapmap = []
	
	let map_height = 60;
	let map_width = 80;
	
	let main_road_count = 3;
	
	if (arguments != null)
	{
		if (!isNaN(arguments[1]))
			map_height = Math.floor(arguments[1]);
		if (!isNaN(arguments[0]))
			map_width = Math.floor(arguments[0]);
		if (!isNaN(arguments[2]))
			main_road_count = Math.floor(arguments[2]);
		else
			main_road_count = Math.floor(Math.random()*(map_height+map_width)/50)+2;
	}
	
	if (map_width < 1)
		return null;
	if (map_height < 1)
		return null;
	if (main_road_count < 1)
		return null;
	
	map_height = Math.min(map_height,MAX_CITY_HEIGHT);
	map_width = Math.min(map_width,MAX_CITY_WIDTH);
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x = 0; x < map_width; x++)
		{
			premapmap.push("");
		}
	}
	
	let town_centre = { x: Math.floor(map_width/2+Math.random()*6)-3, y: Math.floor(map_height/2+Math.random()*6)-3};
	
	//spremapmap[town_centre.x+town_centre.y*map_width] = { path: "./city_gen/centerpoint.png", width: 1, height: 1, x: town_centre.x, y: town_centre.y };
	
	let map_hypotenuse = Math.sqrt(map_height*map_height+map_width*map_width);
	let offshootroadpoints = [];
	let initialdirections = [0,2,1,3];
	
	for (let i = 0; i < main_road_count; i++)
	{
		let next_offshootroadpoint = Math.floor(Math.random()*8)+4;
		let road_length = Math.floor(Math.random()*(map_hypotenuse)/2+Math.random()*(map_hypotenuse)/2)+map_hypotenuse/3;
		let initial_direction = initialdirections[i%initialdirections.length];
		initial_direction += (Math.random()*2)-1;
		
		if (initial_direction < 0)
			initial_direction = initial_direction+4;
		if (initial_direction > 3)
			initial_direction = initial_direction-4;
			
		let current_road_position = { x: town_centre.x, y: town_centre.y };
		let directionchange = 0;
		
		while (road_length > 0)
		{
			let direction = Math.floor(initial_direction);
			directionchange += initial_direction - Math.floor(initial_direction);
			
			if (directionchange <= -1)
			{
				direction--;
				directionchange++;
			}
			else if (directionchange >= 1)
			{
				direction++;
				directionchange--;
			}
			
			if (direction < 0)
				direction = direction+4;
			if (direction > 3)
				direction = direction-4;
			
			if (direction == 3)
			{
				current_road_position.y++;
			}
			else if (direction == 2)
			{
				current_road_position.x++;
			}
			else if (direction == 1)
			{
				current_road_position.y--;
			}
			else if (direction == 0)
			{
				current_road_position.x--;
			}
			if (current_road_position.y < map_height && current_road_position.y > -1 && current_road_position.x < map_width && current_road_position.x > -1)
			{
				premapmap[current_road_position.x + (current_road_position.y*map_width)] = "r";
			}
			else
			{
				road_length = 0;
			}
			next_offshootroadpoint--;
			if (next_offshootroadpoint == 0)
			{
				let offshootdirection = initial_direction;
				if (Math.random() < 0.5)
					offshootdirection++;
				else
					offshootdirection--;
				
				if (offshootdirection < 0)
					offshootdirection = offshootdirection+4;
				if (offshootdirection > 3)
					offshootdirection = offshootdirection-4;
				
				offshootroadpoints.push( { x: current_road_position.x, y: current_road_position.y, initialdirection: offshootdirection, nested: 0 } );
				next_offshootroadpoint = Math.floor(Math.random()*8)+4;
			}
			road_length--;
		}
	}
	
	let max_nesting = 4;
	
	for(let i = 0; i < offshootroadpoints.length; i++)
	{
		let next_offshootroadpoint = Math.floor(Math.random()*24)+5;
		let road_length = Math.floor(Math.random()*27)+4;
		let initial_direction = offshootroadpoints[i].initialdirection;
		let current_road_position = { x: offshootroadpoints[i].x, y: offshootroadpoints[i].y };
		let directionchange = 0;
		let nesting = offshootroadpoints[i].nested;
		while (road_length > 0)
		{
			let direction = Math.floor(initial_direction);
			directionchange += initial_direction - Math.floor(initial_direction);
			
			if (directionchange <= -1)
			{
				direction--;
				directionchange++;
			}
			else if (directionchange >= 1)
			{
				direction++;
				directionchange--;
			}
			
			if (direction < 0)
				direction = direction+4;
			if (direction > 3)
				direction = direction-4;
			
			if (direction == 0)
			{
				current_road_position.y++;
			}
			else if (direction == 1)
			{
				current_road_position.x++;
			}
			else if (direction == 2)
			{
				current_road_position.y--;
			}
			else if (direction == 3)
			{
				current_road_position.x--;
			}
			if (current_road_position.y < map_height && current_road_position.y > -1 && current_road_position.x < map_width && current_road_position.x > -1)
			{
				premapmap[current_road_position.x + (current_road_position.y*map_width)] = "r";
			}
			else
			{
				road_length = 0;
			}
			next_offshootroadpoint--;
			if (next_offshootroadpoint == 0 && nesting < max_nesting)
			{
				let offshootdirection = initial_direction;
				if (Math.random() < 0.5)
					offshootdirection++;
				else
					offshootdirection--;
				
				if (offshootdirection < 0)
					offshootdirection = offshootdirection+4;
				if (offshootdirection > 3)
					offshootdirection = offshootdirection-4;
				
				offshootroadpoints.push( { x: current_road_position.x, y: current_road_position.y, initialdirection: offshootdirection, nested:nesting+1 } );
				next_offshootroadpoint = Math.floor(Math.random()*12)+7;
			}
			road_length--;
		}
	}
	
	let churchcount = 0;
	let inncount = 0;
	let taverncount = 0;
	let wellcount = 0;
	let shrinecount = 0;
	let statuecount = 0;
	
	
	let buildingloops = 1;
	
	for (let i = 0; i < buildingloops; i++)
	{
		let posxy = { x: town_centre.x, y: town_centre.y };
		let position = town_centre.x + town_centre.y*map_width;
		let lastxmovement = 1;
		let lastymovement = 1;
		let xmovement = 1;
		let ymovement = 1;
		let currentlyXaxis = true;
		while (lastxmovement < map_width || lastymovement < map_height)
		{
			if(currentlyXaxis)
			{
				if (lastxmovement%2 == 1)
				{
					posxy.x++;
				}
				else
				{
					posxy.x--;
				}
			}
			else
			{
				if (lastymovement%2 == 1)
				{
					posxy.y++;
				}
				else
				{
					posxy.y--;
				}
			}
			
			position = posxy.x + posxy.y*map_width;
			
			if (isRoadAdjacent(premapmap,map_width,map_height,posxy.x,posxy.y))
			{
				let buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.house, posxy.x, posxy.y);
				let baserand = Math.random();
				
				if (baserand < 0.16 && churchcount < Math.floor((map_height+map_width)/45)+1)
				{
					buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.church, posxy.x, posxy.y);
					churchcount++;
				}
				else if (baserand < 0.24 && inncount < Math.floor((map_height+map_width)/40)+1)
				{
					buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.inn, posxy.x, posxy.y);
					inncount++;
				}
				else if (baserand < 0.29 && taverncount < Math.floor((map_height+map_width)/35)+2)
				{
					buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.tavern, posxy.x, posxy.y);
					taverncount++;
				}
				else if (baserand < 0.42 && shrinecount < Math.floor((map_height+map_width)/25)+1)
				{
					buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.shrine, posxy.x, posxy.y);
					shrinecount++;
				}
				else if (baserand < 0.46 && statuecount < Math.floor((map_height+map_width)/25)+1)
				{
					buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.statue, posxy.x, posxy.y);
					statuecount++;
				}
				
				
				if (buildingplacement != false)
				{
					premapmap = fillMapSpace(premapmap, map_width, map_height, buildingplacement.width, buildingplacement.height, buildingplacement.x, buildingplacement.y);
					premapmap[posxy.x+posxy.y*map_width] = buildingplacement;
				}
				else if (wellcount < Math.floor((map_height+map_width)/75))
				{
					premapmap[posxy.x+posxy.y*map_width] = { path: city_gen.features.well, width: 1, height: 1, x: posxy.x, y: posxy.y };
					wellcount++;
				}
			}
			
			if(currentlyXaxis)
			{
				xmovement--;
				if (xmovement == 0)
				{
					lastxmovement++;
					xmovement = lastxmovement;
					currentlyXaxis = false;
				}
			}
			else
			{
				ymovement--;
				if (ymovement == 0)
				{
					lastymovement++;
					ymovement = lastymovement;
					currentlyXaxis = true;
				}
			}
			
		}
	}
	
	buildingloops = 1;
	
	for (let i = 0; i < buildingloops; i++)
	{
		let posxy = { x: town_centre.x, y: town_centre.y };
		let position = town_centre.x + town_centre.y*map_width;
		let lastxmovement = 1;
		let lastymovement = 1;
		let xmovement = 1;
		let ymovement = 1;
		let currentlyXaxis = true;
		while (lastxmovement < map_width || lastymovement < map_height)
		{
			if(currentlyXaxis)
			{
				if (lastxmovement%2 == 1)
				{
					posxy.x++;
				}
				else
				{
					posxy.x--;
				}
			}
			else
			{
				if (lastymovement%2 == 1)
				{
					posxy.y++;
				}
				else
				{
					posxy.y--;
				}
			}
			
			position = posxy.x + posxy.y*map_width;
			
			if (position > -1 && position < map_width*map_height && premapmap[position] == "")
			{
				if (Math.random() < 0.003)
				{
					let buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.house, posxy.x, posxy.y);
					let baserand = Math.random();
					if (baserand < 0.125 && churchcount < Math.floor((map_height+map_width)/45)+1)
					{
						buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.church, posxy.x, posxy.y);
						churchcount++;
					}
					else if (baserand < 0.275 && inncount < Math.floor((map_height+map_width)/40)+1)
					{
						buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.inn, posxy.x, posxy.y);
						inncount++;
					}
					else if (baserand < 0.485 && taverncount < Math.floor((map_height+map_width)/35)+2)
					{
						buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.tavern, posxy.x, posxy.y);
						taverncount++;
					}
					else if (baserand < 0.7 && shrinecount < Math.floor((map_height+map_width)/25)+1)
					{
						buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.shrine, posxy.x, posxy.y);
						shrinecount++;
					}
					else if (baserand < 0.9 && statuecount < Math.floor((map_height+map_width)/25)+1)
					{
						buildingplacement = tryPlaceBuilding(premapmap, map_width, map_height, city_gen.buildings.statue, posxy.x, posxy.y);
						statuecount++;
					}
					
					
					if (buildingplacement != false)
					{
						premapmap = fillMapSpace(premapmap, map_width, map_height, buildingplacement.width, buildingplacement.height, buildingplacement.x, buildingplacement.y);
						premapmap[position] = buildingplacement;
					}
				}
				
				if (Math.random() < 0.11)
				{
					premapmap[position] = { path: city_gen.features.tree, width: 1, height: 1, x: posxy.x, y: posxy.y };
				}
			}
			
			if(currentlyXaxis)
			{
				xmovement--;
				if (xmovement == 0)
				{
					lastxmovement++;
					xmovement = lastxmovement;
					currentlyXaxis = false;
				}
			}
			else
			{
				ymovement--;
				if (ymovement == 0)
				{
					lastymovement++;
					ymovement = lastymovement;
					currentlyXaxis = true;
				}
			}
			
		}
	}
	
	
	let imagemap = []
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x = 0; x < map_width; x++)
		{
			let xpos = x*10;
			let ypos = y*10;
			imagemap.push({ src: "./city_gen/Grass_Texture.png", x: xpos, y: ypos});
		}
	}
	
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x = 0; x < map_width; x++)
		{
			let xpos = x*10;
			let ypos = y*10;
			if (premapmap[x+y*map_width] == "r")
			{
				let roadgraphic = 0;
				if (x+1+y*map_width < map_width*map_height && premapmap[x+1+y*map_width] == "r")
					roadgraphic += 1;
				if (x+(y+1)*map_width < map_width*map_height && premapmap[x+(y+1)*map_width] == "r")
					roadgraphic += 2;
				if (x-1+y*map_width > 0 && premapmap[x-1+y*map_width] == "r")
					roadgraphic += 4;
				if (x+(y-1)*map_width > 0 && premapmap[x+(y-1)*map_width] == "r")
					roadgraphic += 8;
				
				switch (roadgraphic)
				{
					case 1:
						imagemap.push({ src: city_gen.roads.end.E, x: xpos, y: ypos})
						break;
					case 2:
						imagemap.push({ src: city_gen.roads.end.S, x: xpos, y: ypos})
						break;
					case 3:
						imagemap.push({ src: city_gen.roads.corner.ES, x: xpos, y: ypos})
						break;
					case 4:
						imagemap.push({ src: city_gen.roads.end.W, x: xpos, y: ypos})
						break;
					case 5:
						imagemap.push({ src: city_gen.roads.straight.EW, x: xpos, y: ypos})
						break;
					case 6:
						imagemap.push({ src: city_gen.roads.corner.SW, x: xpos, y: ypos})
						break;
					case 7:
						imagemap.push({ src: city_gen.roads.threeway.ESW, x: xpos, y: ypos})
						break;
					case 8:
						imagemap.push({ src: city_gen.roads.end.N, x: xpos, y: ypos})
						break;
					case 9:
						imagemap.push({ src: city_gen.roads.corner.NE, x: xpos, y: ypos})
						break;
					case 10:
						imagemap.push({ src: city_gen.roads.straight.NS, x: xpos, y: ypos})
						break;
					case 11:
						imagemap.push({ src: city_gen.roads.threeway.NES, x: xpos, y: ypos})
						break;
					case 12:
						imagemap.push({ src: city_gen.roads.corner.NW, x: xpos, y: ypos})
						break;
					case 13:
						imagemap.push({ src: city_gen.roads.threeway.NEW, x: xpos, y: ypos})
						break;
					case 14:
						imagemap.push({ src: city_gen.roads.threeway.NSW, x: xpos, y: ypos})
						break;
					case 15:
						imagemap.push({ src: city_gen.roads.fourway, x: xpos, y: ypos})
						break;
				}
			}
			else if (premapmap[x+y*map_width] != "" && premapmap[x+y*map_width] != "b")
			{
				imagemap.push({ src: premapmap[x+y*map_width].path, x: premapmap[x+y*map_width].x*10+1, y: premapmap[x+y*map_width].y*10+1});
			}
		}
	}
	
	let file = 'generatedhabitat.png';
	let path = './' + file;
	
	mergeImages(imagemap, 
	{
		width: (10*map_width),
		height: (10*map_height),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
}


//
//
// generate hex city map
//
//


function drawCirclesIntoMap(map, mapwidth, mapheight, size, xpos, ypos)
{
	let totalloops = 1;
	let sizecovered = 7;
	
	while (size > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	let opacity = 1;
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 0;
	let startpos = { x: xpos, y: ypos };
	let currenthex = { x:0, y:0 };
	for(let j = 0; j < totalloops && sizereached < size; j++)
	{
		let direction = 3;
		if (startpos.x  % 2 == 1)
		{
			startpos.x = startpos.x+1;
		}
		else
		{
			startpos.x = startpos.x+1;
			startpos.y = startpos.y-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < size; i++)
		{
			if (currenthex.x > -1 && currenthex.x < mapwidth && currenthex.y > -1 && currenthex.y < mapheight)
			{
				
				map.push({ src: "./hexcity_gen/WhiteGrid.png", x: currenthex.x*25, y: currenthex.y*32+(currenthex.x%2)*16, opacity: opacity});
				opacity -= 0.01;
			}
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
				if (direction == 6)
					direction = 0;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	return map;
}



function fillHexMapSpace(map, mapwidth, mapheight, size, xpos, ypos)
{
	map[xpos+ypos*mapwidth] = "b";
	
	let totalloops = 1;
	let sizecovered = 7;
	
	while (size > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 1;
	let startpos = { x: xpos, y: ypos };
	let currenthex = { x:0, y:0 };
	for(let j = 0; j < totalloops && sizereached < size; j++)
	{
		let direction = 3;
		if (startpos.x  % 2 == 1)
		{
			startpos.x = startpos.x+1;
		}
		else
		{
			startpos.x = startpos.x+1;
			startpos.y = startpos.y-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < size; i++)
		{
			if (currenthex.x > -1 && currenthex.x < mapwidth && currenthex.y > -1 && currenthex.y < mapheight)
				map[currenthex.x+currenthex.y*mapwidth] = "b";
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
				if (direction == 6)
					direction = 0;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	return map;
}

function hexMapSpaceOpen(map, mapwidth, mapheight, size, xpos, ypos)
{
	if (map[xpos+ypos*mapwidth] != "")
	{
		return false;
	}
	let totalloops = 1;
	let sizecovered = 7;
	
	while (size > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	
	let startpos = { x: xpos, y: ypos };
	let currenthex = { x:0, y:0 };
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 1;
	for(let j = 0; j < totalloops && sizereached < size; j++)
	{
		let direction = 3;
		if (startpos.x  % 2 == 1)
		{
			startpos.x = startpos.x+1;
		}
		else
		{
			startpos.x = startpos.x+1;
			startpos.y = startpos.y-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < size; i++)
		{
			if (currenthex.x < 0 || currenthex.x >= mapwidth || currenthex.y < 0 || currenthex.y >= mapheight || map[currenthex.x+currenthex.y*mapwidth] != "")
			{
				return false;
			}
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
				if (direction == 6)
					direction = 0;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	return true;
}

function hexMapHasSpace(map, mapwidth, mapheight, size, xpos, ypos)
{
	if (hexMapSpaceOpen(map, mapwidth, mapheight, size, xpos, ypos))
	{
		return { x: xpos, y: ypos };
	}
	
	let totalloops = 1;
	let sizecovered = 7;
	
	while (size > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	
	let startpos = { x: xpos, y: ypos };
	let currenthex = { x:0, y:0 };
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 1;
	for(let j = 0; j < totalloops && sizereached < size; j++)
	{
		let direction = 3;
		if (startpos.x  % 2 == 1)
		{
			startpos.x = startpos.x+1;
		}
		else
		{
			startpos.x = startpos.x+1;
			startpos.y = startpos.y-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < size; i++)
		{
			if (hexMapSpaceOpen(map, mapwidth, mapheight, size, currenthex.x, currenthex.y))
			{
				return { x: currenthex.x, y: currenthex.y };
			}
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
				if (direction == 6)
					direction = 0;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	return false;
}

function hexMapIsRoadAdjacent(map, mapwidth, mapheight, xpos, ypos)
{
	let roadcode = 0;
	if (xpos%2 == 1)
	{
		if (ypos-1 > -1 && map[xpos+(ypos-1)*mapwidth] == "r")
		{
			roadcode += 1;
		}
		if (xpos+1 < mapwidth && map[xpos+1+ypos*mapwidth] == "r")
		{
			roadcode += 2;
		}
		if (xpos+1 < mapwidth && ypos+1 < mapheight && map[xpos+1+(ypos+1)*mapwidth] == "r")
		{
			roadcode += 4;
		}
		if (ypos+1 < mapheight && map[xpos+(ypos+1)*mapwidth] == "r")
		{
			roadcode += 8;
		}
		if (xpos-1 > -1 && ypos+1 < mapheight && map[xpos-1+(ypos+1)*mapwidth] == "r")
		{
			roadcode += 16;
		}
		if (xpos-1 > -1 && map[xpos-1+ypos*mapwidth] == "r")
		{
			roadcode += 32;
		}
	} 
	else
	{
		if (ypos-1 > -1 && map[xpos+(ypos-1)*mapwidth] == "r")
		{
			roadcode += 1;
		}
		if (xpos+1 < mapwidth && ypos-1 > -1 && map[xpos+1+(ypos-1)*mapwidth] == "r")
		{
			roadcode += 2;
		}
		if (xpos+1 < mapwidth && map[xpos+1+ypos*mapwidth] == "r")
		{
			roadcode += 4;
		}
		if (ypos+1 < mapheight && map[xpos+(ypos+1)*mapwidth] == "r")
		{
			roadcode += 8;
		}
		if (xpos-1 > -1 && map[xpos-1+ypos*mapwidth] == "r")
		{
			roadcode += 16;
		}
		if (xpos-1 > -1 && ypos-1 > -1 && map[xpos-1+(ypos-1)*mapwidth] == "r")
		{
			roadcode += 32;
		}
	}
	return roadcode;
}

function hexMapIsBuildingAdjacent(map, mapwidth, mapheight, xpos, ypos)
{
	if (xpos%2 == 1)
	{
		if (ypos-1 > -1 && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (xpos+1 < mapwidth && map[xpos+1+ypos*mapwidth] == "b")
		{
			return true;
		}
		if (xpos+1 < mapwidth && ypos+1 < mapheight && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (ypos+1 < mapheight && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (xpos-1 > -1 && ypos+1 < mapheight && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (xpos-1 > -1 && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
	} 
	else
	{
		if (ypos-1 > -1 && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (xpos+1 < mapwidth && ypos-1 > -1 && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (xpos+1 < mapwidth && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (ypos+1 < mapheight && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (xpos-1 > -1 && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
		if (xpos-1 > -1 && ypos-1 > -1 && (map[xpos+(ypos-1)*mapwidth] == "b" || (map[xpos+(ypos-1)*mapwidth] != "" && map[xpos+(ypos-1)*mapwidth] != "r" && map[xpos+(ypos-1)*mapwidth] != "c")))
		{
			return true;
		}
	}
	return false;
}

function hexMapTryPlaceBuilding(map, mapwidth, mapheight, buildings, xpos, ypos)
{
	let buildingslooped = 0;
	for (let i = Math.floor(Math.random()*buildings.path.length); buildingslooped < buildings.path.length; buildingslooped++)
	{
		
		let buildingplacement = hexMapHasSpace(map, mapwidth, mapheight, buildings.size, xpos, ypos);
		if (buildingplacement != false)
		{
			return { path: buildings.path[i], size: buildings.size, x: buildingplacement.x, y: buildingplacement.y };
		}
		i++;
		if (i == buildings.length)
			i = 0;
	}
	return false;
}

//
// main generate hex city function
//

MAX_VILLAGE_HEIGHT = 30;
MAX_VILLAGE_WIDTH = 50;

function generateHexCity(channel, arguments)
{
	let premapmap = [];
	let imagemap = [];
	let terrainmap = [];
	
	let map_height = 12;
	let map_width = 20;
	
	let main_road_count = Math.floor(Math.random()*(map_height+map_width)/50)+3;
	
	if (arguments != null)
	{
		if (!isNaN(arguments[1]))
			map_height = Math.floor(arguments[1]);
		if (!isNaN(arguments[0]))
			map_width = Math.floor(arguments[0]);
		if (!isNaN(arguments[2]))
			main_road_count = Math.floor(arguments[2]);
	}
	
	if (map_width < 1)
		return null;
	if (map_height < 1)
		return null;
	if (main_road_count < 1)
		return null;
	
	map_height = Math.min(map_height,MAX_VILLAGE_HEIGHT);
	map_width = Math.min(map_width,MAX_VILLAGE_WIDTH);
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x = 0; x < map_width; x++)
		{
			premapmap.push("");
		}
	}
	
	let town_centre = { x: Math.floor(map_width/2+Math.random()*3)-1, y: Math.floor(map_height/2+Math.random()*3)-1};
	
	let map_hypotenuse = Math.sqrt(map_height*map_height+map_width*map_width);
	let offshootroadpoints = [];
	let initialdirections = [0,3,1,4,2,5];
	
	let next_offshootroadrandom = Math.floor((map_width+map_height)/6);
	let next_offshootroadconst = Math.floor((map_width+map_height)/16);
	
	let townsquareplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.townsquare, town_centre.x, town_centre.y);
	if (townsquareplacement != false)
	{
		premapmap = fillHexMapSpace(premapmap, map_width, map_height, townsquareplacement.size, townsquareplacement.x, townsquareplacement.y);
		premapmap[town_centre.x+town_centre.y*map_width] = townsquareplacement;
	}
	
	for (let i = 0; i < main_road_count; i++)
	{
		let next_offshootroadpoint = Math.floor(Math.random()*next_offshootroadrandom)+next_offshootroadconst;
		let road_length = Math.floor(Math.random()*(map_hypotenuse)/2+Math.random()*(map_hypotenuse)/2)+map_hypotenuse/3;
		let initial_direction = initialdirections[i%initialdirections.length];
		initial_direction += (Math.random()-0.5);
		
		if (initial_direction < 0)
			initial_direction = initial_direction+6;
		if (initial_direction > 5)
			initial_direction = initial_direction-6;
			
		let current_road_position = { x: town_centre.x, y: town_centre.y };
		let directionchange = 0;
		
		while (road_length > 0)
		{
			let direction = Math.floor(initial_direction);
			directionchange += initial_direction - Math.floor(initial_direction);
			
			if (directionchange <= -1)
			{
				direction--;
				directionchange++;
			}
			else if (directionchange >= 1)
			{
				direction++;
				directionchange--;
			}
			
			if (direction < 0)
				direction = direction+6;
			if (direction > 5)
				direction = direction-6;
			
			if (current_road_position.x%2 == 1)
			{
				if (direction == 5)
				{
					current_road_position.x--;
				}
				else if (direction == 4)
				{
					current_road_position.x--;
					current_road_position.y++;
				}
				else if (direction == 3)
				{
					current_road_position.y++;
				}
				else if (direction == 2)
				{
					current_road_position.x++;
					current_road_position.y++;
				}
				else if (direction == 1)
				{
					current_road_position.x++;
				}
				else if (direction == 0)
				{
					current_road_position.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					current_road_position.x--;
					current_road_position.y--;
				}
				else if (direction == 4)
				{
					current_road_position.x--;
				}
				else if (direction == 3)
				{
					current_road_position.y++;
				}
				else if (direction == 2)
				{
					current_road_position.x++;
				}
				else if (direction == 1)
				{
					current_road_position.x++;
					current_road_position.y--;
				}
				else if (direction == 0)
				{
					current_road_position.y--;
				}
			}
			
			if (current_road_position.y < map_height && current_road_position.y > -1 && current_road_position.x < map_width && current_road_position.x > -1)
			{
				if (premapmap[current_road_position.x + (current_road_position.y*map_width)] == "")
				{
					premapmap[current_road_position.x + (current_road_position.y*map_width)] = "r";
				}
			}
			else
			{
				road_length = 0;
			}
			next_offshootroadpoint--;
			if (next_offshootroadpoint == 0)
			{
				let offshootdirection = initial_direction;
				if (Math.random() < 0.5)
					offshootdirection += 1;
				else
					offshootdirection -= 1;
				
				if (offshootdirection < 0)
					offshootdirection = offshootdirection+6;
				if (offshootdirection > 5)
					offshootdirection = offshootdirection-6;
				
				offshootroadpoints.push( { x: current_road_position.x, y: current_road_position.y, initialdirection: offshootdirection, nested: 0 } );
				next_offshootroadpoint = Math.floor(Math.random()*next_offshootroadrandom)+next_offshootroadconst;
			}
			road_length--;
		}
	}
	
	let max_nesting = 4;
	
	next_offshootroadrandom = Math.floor((map_width+map_height)/3);
	next_offshootroadconst = Math.floor((map_width+map_height)/8);
	
	for(let i = 0; i < offshootroadpoints.length; i++)
	{
		let next_offshootroadpoint = Math.floor(Math.random()*next_offshootroadrandom)+next_offshootroadconst;
		let road_length = Math.floor(Math.random()*27)+4;
		let initial_direction = offshootroadpoints[i].initialdirection;
		let current_road_position = { x: offshootroadpoints[i].x, y: offshootroadpoints[i].y };
		let directionchange = 0;
		let nesting = offshootroadpoints[i].nested;
		while (road_length > 0)
		{
			let direction = Math.floor(initial_direction);
			directionchange += initial_direction - Math.floor(initial_direction);
			
			if (directionchange <= -1)
			{
				direction--;
				directionchange++;
			}
			else if (directionchange >= 1)
			{
				direction++;
				directionchange--;
			}
			
			if (direction < 0)
				direction = direction+6;
			if (direction > 5)
				direction = direction-6;
			
			if (current_road_position.x%2 == 1)
			{
				if (direction == 5)
				{
					current_road_position.x--;
				}
				else if (direction == 4)
				{
					current_road_position.x--;
					current_road_position.y++;
				}
				else if (direction == 3)
				{
					current_road_position.y++;
				}
				else if (direction == 2)
				{
					current_road_position.x++;
					current_road_position.y++;
				}
				else if (direction == 1)
				{
					current_road_position.x++;
				}
				else if (direction == 0)
				{
					current_road_position.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					current_road_position.x--;
					current_road_position.y--;
				}
				else if (direction == 4)
				{
					current_road_position.x--;
				}
				else if (direction == 3)
				{
					current_road_position.y++;
				}
				else if (direction == 2)
				{
					current_road_position.x++;
				}
				else if (direction == 1)
				{
					current_road_position.x++;
					current_road_position.y--;
				}
				else if (direction == 0)
				{
					current_road_position.y--;
				}
			}
			
			
			
			if (current_road_position.y < map_height && current_road_position.y > -1 && current_road_position.x < map_width && current_road_position.x > -1)
			{
				if (premapmap[current_road_position.x + (current_road_position.y*map_width)] == "")
				{
					premapmap[current_road_position.x + (current_road_position.y*map_width)] = "r";
				}
			}
			else
			{
				road_length = 0;
			}
			next_offshootroadpoint--;
			if (next_offshootroadpoint == 0 && nesting < max_nesting)
			{
				let offshootdirection = initial_direction;
				if (Math.random() < 0.5)
					offshootdirection += 1;
				else
					offshootdirection -= 1;
				
				if (offshootdirection < 0)
					offshootdirection = offshootdirection+6;
				if (offshootdirection > 5)
					offshootdirection = offshootdirection-6;
				
				offshootroadpoints.push( { x: current_road_position.x, y: current_road_position.y, initialdirection: offshootdirection, nested:nesting+1 } );
				next_offshootroadpoint = Math.floor(Math.random()*next_offshootroadrandom)+next_offshootroadconst;
			}
			road_length--;
		}
	}
	
	let churchcount = 0;
	let inncount = 0;
	let taverncount = 0;
	let wellcount = 0;
	let shrinecount = 0;
	let barrackscount = 0;
	
	// populate with buildings
	
	let totalloops = 1;
	let sizecovered = 7;
	let mapsize = map_width*map_height;
	
	while (mapsize > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 1;
	let startpos = { x: town_centre.x, y: town_centre.y };
	let currenthex = { x:0, y:0 };
	for(let j = 0; j < totalloops && sizereached < mapsize; j++)
	{
		let direction = 0;
		if (startpos.x  % 2 == 0)
		{
			startpos.x = startpos.x-1;
			startpos.y = startpos.y+1;
		}
		else
		{
			startpos.x = startpos.x-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < mapsize; i++)
		{
			if (currenthex.x > -1 && currenthex.x < map_width && currenthex.y > -1 && currenthex.y < map_height && hexMapIsRoadAdjacent(premapmap, map_width, map_height, currenthex.x, currenthex.y) > 0)
			{
				let buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.houses, currenthex.x, currenthex.y);
					let baserand = Math.random();
					
					if (baserand < 0.16 && churchcount < Math.floor((map_height+map_width)/45)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.churches, currenthex.x, currenthex.y);
						churchcount++;
					}
					else if (baserand < 0.24 && inncount < Math.floor((map_height+map_width)/40)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.inns, currenthex.x, currenthex.y);
						inncount++;
					}
					else if (baserand < 0.29 && taverncount < Math.floor((map_height+map_width)/35)+2)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.taverns, currenthex.x, currenthex.y);
						taverncount++;
					}
					else if (baserand < 0.42 && shrinecount < Math.floor((map_height+map_width)/25)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.shrines, currenthex.x, currenthex.y);
						shrinecount++;
					}
					else if (baserand < 0.42 && barrackscount < Math.floor((map_height+map_width)/75)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.barracks, currenthex.x, currenthex.y);
						barrackscount++;
					}
					
					if (buildingplacement != false)
					{
						premapmap = fillHexMapSpace(premapmap, map_width, map_height, buildingplacement.size, buildingplacement.x, buildingplacement.y);
						premapmap[buildingplacement.x+buildingplacement.y*map_width] = buildingplacement;
					}
			}
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	
	curdirdur = 0;
	dirduration = 1;
	loopend = 6;
	sizereached = 1;
	startpos = { x: town_centre.x, y: town_centre.y };
	currenthex = { x:0, y:0 };
	for(let j = 0; j < totalloops && sizereached < mapsize; j++)
	{
		let direction = 0;
		if (startpos.x  % 2 == 0)
		{
			startpos.x = startpos.x-1;
			startpos.y = startpos.y+1;
		}
		else
		{
			startpos.x = startpos.x-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < mapsize; i++)
		{
			if (currenthex.x > -1 && currenthex.x < map_width && currenthex.y > -1 && currenthex.y < map_height && premapmap[currenthex.x+currenthex.y*map_width] == "")
			{
				if (hexMapIsBuildingAdjacent(premapmap, map_width, map_height, currenthex.x, currenthex.y))
				{
					let randomcrop = Math.floor(Math.random()*hexcity_gen.terrain.crops.length);
					terrainmap.push({ src: hexcity_gen.terrain.crops[randomcrop], x: currenthex.x*25, y: currenthex.y*32+(currenthex.x%2)*16});
					premapmap[currenthex.x+currenthex.y*map_width] = "c";
				}
			}
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	
	curdirdur = 0;
	dirduration = 1;
	loopend = 6;
	sizereached = 1;
	startpos = { x: town_centre.x, y: town_centre.y };
	currenthex = { x:0, y:0 };
	for(let j = 0; j < totalloops && sizereached < mapsize; j++)
	{
		let direction = 0;
		if (startpos.x  % 2 == 0)
		{
			startpos.x = startpos.x-1;
			startpos.y = startpos.y+1;
		}
		else
		{
			startpos.x = startpos.x-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < mapsize; i++)
		{
			if (currenthex.x > -1 && currenthex.x < map_width && currenthex.y > -1 && currenthex.y < map_height && premapmap[currenthex.x+currenthex.y*map_width] == "")
			{
				if (Math.random() < 0.003)
				{
					let buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.houses, currenthex.x, currenthex.y);
					let baserand = Math.random();
					
					if (baserand < 0.16 && churchcount < Math.floor((map_height+map_width)/45)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.churches, currenthex.x, currenthex.y);
						churchcount++;
					}
					else if (baserand < 0.24 && inncount < Math.floor((map_height+map_width)/40)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.inns, currenthex.x, currenthex.y);
						inncount++;
					}
					else if (baserand < 0.29 && taverncount < Math.floor((map_height+map_width)/35)+2)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.taverns, currenthex.x, currenthex.y);
						taverncount++;
					}
					else if (baserand < 0.42 && shrinecount < Math.floor((map_height+map_width)/25)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.shrines, currenthex.x, currenthex.y);
						shrinecount++;
					}
					else if (baserand < 0.42 && barrackscount < Math.floor((map_height+map_width)/75)+1)
					{
						buildingplacement = hexMapTryPlaceBuilding(premapmap, map_width, map_height, hexcity_gen.buildings.barracks, currenthex.x, currenthex.y);
						barrackscount++;
					}
					
					if (buildingplacement != false)
					{
						premapmap = fillHexMapSpace(premapmap, map_width, map_height, buildingplacement.size, buildingplacement.x, buildingplacement.y);
						premapmap[buildingplacement.x+buildingplacement.y*map_width] = buildingplacement;
					}
				}
				
				if (Math.random() < 0.11)
				{
					let randomtree = Math.floor(Math.random()*hexcity_gen.features.trees.length);
					premapmap[currenthex.x+currenthex.y*map_width] = { path: hexcity_gen.features.trees[randomtree], size: 1, x: currenthex.x, y: currenthex.y };
				}
			}
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x = 0; x < map_width; x++)
		{
			let xpos = x*25;
			let ypos = y*32 + (x%2)*16;
			if (premapmap[x+y*map_width] != "c")
				terrainmap.push({ src: hexcity_gen.terrain.grass[0], x: xpos, y: ypos});
		}
	}
	
	imagemap = terrainmap.concat(imagemap);
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x = 0; x < map_width; x++)
		{
			let xpos = x*25;
			let ypos = y*32+(x%2)*16;
			if (premapmap[x+y*map_width] == "r")
			{
				let roadgraphic = hexMapIsRoadAdjacent(premapmap, map_width, map_height, x, y);
				if (roadgraphic > 0)
				{
					imagemap.push({ src: hexcity_gen.roads[roadgraphic-1], x: xpos, y: ypos})
				}
				
			}
			else if (premapmap[x+y*map_width] != "" && premapmap[x+y*map_width] != "b" && premapmap[x+y*map_width] != "c")
			{
				if (premapmap[x+y*map_width].size == 1)
					imagemap.push({ src: premapmap[x+y*map_width].path, x: xpos, y: ypos});
				else
				{
					let initialoffset = 0;
					let initialoffsetsize = 1;
					while (premapmap[x+y*map_width].size >= initialoffsetsize)
					{
						initialoffset++;
						initialoffsetsize += 6*initialoffset;
					}
					let xoffset = Math.floor(initialoffset/2)*25;
					let yoffset = Math.floor(initialoffset/2)*32+(initialoffset%2)*16;
					imagemap.push({ src: premapmap[x+y*map_width].path, x: xpos-xoffset, y: ypos-yoffset });
				}
			}
		}
	}
	
	//imagemap = drawCirclesIntoMap(imagemap, map_width, map_height, 3, town_centre.x, town_centre.y)
	let file = 'generatedhabitat.png';
	let path = './' + file;
	
	
	mergeImages(imagemap, 
	{
		width: (25*map_width + 7),
		height: (32*map_height + 16),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
	
}



//
//
// visualize noiseMap
//
//

function noisemaptopng(channel, arguments)
{
	let map_width = 100;
	let map_height = 100;
	let noise_variance = 0.25;
	let edge_value = 0.5;
	let smoothing_val = 0.24;
	let smoothing_loops = 1;
	
	if (arguments != null)
	{
		if (!isNaN(arguments[0]))
			map_width = parseInt(arguments[0]);
		if (!isNaN(arguments[1]))
			map_height = parseInt(arguments[1]);
		if (!isNaN(arguments[2]))
			noise_variance = parseFloat(arguments[2]);
		if (!isNaN(arguments[3]))
			edge_value = parseFloat(arguments[3]);
		if (!isNaN(arguments[4]))
			smoothing_val = parseFloat(arguments[4]);
		if (!isNaN(arguments[5]))
			smoothing_loops = parseInt(arguments[5]);
	}
	
	let imagemap = [];
	let noisemap = noiseMap2D(map_height, map_width, 0.23, 045);
	noisemap = increaseContrast(noisemap, map_height, map_width, 0.8);
	//noisemap = smoothenMap(noisemap, map_height, map_width, 0.175);
	//noisemap = increaseContrast(noisemap, map_height, map_width, 0.25);
	
	for (let y = 0; y < map_height; y++)
	{
		for (let x = 0; x < map_width; x++)
		{
			imagemap.push({ src: "./blackdot.png", x: x, y: y });
			imagemap.push({ src: "./whitedot.png", x: x, y: y, opacity: noisemap[x+y*map_width]});
		}
	}
	
	let file = 'generatedmap.png';
	let path = './' + file;
	
	mergeImages(imagemap, 
	{
		width: (map_width),
		height: (map_height),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
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
//
// alien language encoder
//
//

function encodeToAlienLanguage(channel, arguments)
{
	if (arguments == null || arguments.length == 0)
	{
		channel.send("I need words or numbers to transcode into alien words and numbers");
		return;
	}
	
	for (let a in arguments)
	{
		if (arguments[a].match(/[^A-Za-z0-9]+/) != null)
		{
			channel.send("I can only transcode numbers or words without punctuation into aliens words and numbers right now");
			return;
		}
	}
	
	shuffledwords = [];
	
	for (let a in arguments)
	{
		shuffledwords.push("");
		if (arguments[a].match(/[^A-Za-z]+/) == null)
		{
			let position = 0;
			let half = Math.floor(arguments[a].length/2);
			while (position+half < (arguments[a].length - (arguments[a].length%2)))
			{
				shuffledwords[a] += arguments[a].charAt(position);
				shuffledwords[a] += arguments[a].charAt(position+half);
				position++;
			}
			if (shuffledwords[a].length < arguments[a].length)
			{
				shuffledwords[a] += arguments[a].charAt(arguments[a].length-1);
			}
		}
		else
		{
			let baseval = parseInt(arguments[a]);
			let digit = 0;
			let currentpower = 0;
			
			if (baseval == 0)
			{
				shuffledwords[a] += digit.toString();
			}
			
			while (baseval/Math.pow(7,currentpower) >= 1)
			{
				digit = Math.floor((baseval % Math.pow(7,currentpower+1)) / Math.pow(7,currentpower));
				shuffledwords[a] += digit.toString();
				currentpower++;
			}
		}
	}
	
	for (let i = 0; i < shuffledwords.length; i++)
	{
		if (shuffledwords[i].length == 0)
		{
			shuffledwords.splice(i,1);
			i--;
		}
	}
	
	let imgheight = 34; //alter this if largest heigh changes in alien alphabet
	let spacewidth = 24; // space character width;
	let maxlinewidth = 500; // do a line break!;
	let imagemap = [];
	let totalwidth = 0;
	let currentxpos = 0;
	let currentypos = 0;
	for (let s = 0; s < shuffledwords.length; s++)
	{
		shuffledwords[s] = shuffledwords[s].toLowerCase();
		for (let i = 0; i < shuffledwords[s].length; i++)
		{
			let alienletter;
			let characterat = shuffledwords[s].charCodeAt(i)-97;
			if (shuffledwords[s].match(/[0-9]+/) != null)
			{
				characterat += 49;
				alienletter = alien_alphabet.number[characterat];
			}
			else if (i == shuffledwords[s].length-1)
			{
				alienletter = alien_alphabet.single[characterat];
			}
			else if (i%2 == 0)
			{
				alienletter = alien_alphabet.even[characterat];
			}
			else
			{
				alienletter = alien_alphabet.odd[characterat];
			}
			let ypos = currentypos + Math.floor((imgheight - alienletter.height)/2);
			
			imagemap.push({ src: alienletter.path, x: currentxpos, y: ypos });
			currentxpos += alienletter.width;
			if (currentxpos > totalwidth)
			{
				totalwidth = currentxpos;
			}
		}
		
		if (s < shuffledwords.length-1)
		{
			currentxpos += spacewidth;
			if (currentxpos > totalwidth)
			{
				totalwidth = currentxpos;
			}
			
			if (currentxpos > maxlinewidth)
			{
			currentxpos = 0;
			currentypos += imgheight+2;
			}
		}
		
		
	}
	
	let file = 'alienwords.png';
	let path = './' + file;
	
	mergeImages(imagemap, 
	{
		width: (totalwidth),
		height: (currentypos + imgheight),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
}

//
//
// adventuring party simulator
//
//
//
//

var adventuringparties = [];
var asworld_width = 128;
var asworld_height = 72;
var asworldmap = [];

var adventure_sim_max_lines = 24;

function outputAdventureSimLog(partyid)
{
	let party = getPartyById(partyid)
	if (party == null)
		return null;
	
	let output = "";
	for (let i = 0; i < party.log.length && output.length < 1800; i++)
	{
		output += party.log[i] + "\n";
	}
	if (output.length < 2000) //just to double check
		return output.trim();
}

function addToAdventureSimLog(party, logtext)
{
	if (party.log.length == 0 || logtext != party.log[party.log.length-1])
	{
		party.log.push(logtext);
		return true;
	}
	return false;
	//while(party.log.length >= adventure_sim_max_lines)
	//	party.log.shift();
}

//
// sim world generation
//

function initializeSimWorldMap()
{
	for (let y = 0; y < asworld_height; y++)
	{
		for (let x = 0; x < asworld_width; x++)
		{
			asworldmap.push({ biome: "", sealevel: 1, climate: "", landmark: "none"});
		}
	}
}

function generateSimWorldMap()
{
	let LAND_LEVEL = 0.37;
	let HILL_LEVEL = 0.721;
	let MOUNTAIN_LEVEL = 0.908;
	let SNOW_MOUNTAIN_LEVEL = 0.931; 

	let PLAINS_LEVEL = 0.16;
	let GRASS_LEVEL = 0.32;
	let TUNDRA_LEVEL = 0.794;
	let SNOW_LEVEL = 0.825;

	let FOREST_LEVEL = 0.0052;
	let JUNGLE_LEVEL = 0.0031;

	let ColdBalance = 25;
	let HotBalance = 25;
	
	let Map_Size = asworld_height+asworld_width;
	
	let city_density = 0.25;
	
	initializeSimWorldMap();
	let noisemapsealevel = noiseMap2D(asworld_height,asworld_width, 0.08);
	noisemapsealevel = increaseContrast(noisemapsealevel, asworld_height, asworld_width, 0.4);
	noisemapsealevel = smoothenMap(noisemapsealevel, asworld_height, asworld_width, 0.175);
	noisemapsealevel = increaseContrast(noisemapsealevel, asworld_height, asworld_width, 0.25)
	let noisemapbiome = noiseMap2D(asworld_height,asworld_width, 0.05);
	noisemapbiome = increaseContrast(noisemapbiome, asworld_height, asworld_width, 0.4);
	noisemapbiome = smoothenMap(noisemapbiome, asworld_height, asworld_width, 0.175);
	noisemapbiome = increaseContrast(noisemapbiome, asworld_height, asworld_width, 0.25);
	let noisemapclimate = noiseMap2D(asworld_height,asworld_width, 0.07);
	noisemapclimate = increaseContrast(noisemapclimate, asworld_height, asworld_width, 0.4);
	noisemapclimate = smoothenMap(noisemapclimate, asworld_height, asworld_width, 0.175);
	noisemapclimate = increaseContrast(noisemapclimate, asworld_height, asworld_width, 0.25);
	let noisemaplandmarks = noiseMap2D(asworld_height,asworld_width, 0.04);
	noisemaplandmarks = increaseContrast(noisemaplandmarks, asworld_height, asworld_width, 0.6);
	noisemaplandmarks = smoothenMap(noisemaplandmarks, asworld_height, asworld_width, 0.175);
	noisemaplandmarks = increaseContrast(noisemaplandmarks, asworld_height, asworld_width, 0.333);
	
	//do landmasses
	let landmasses = 27;
	
	let landmap = [];
	//initialize landmap
	for (let y = 0; y < asworld_height; y++)
	{
		for (let x  = 0; x < asworld_width; x++)
		{
			landmap.push(0);
		}
	}
	
	// landmass map
	
	let landmassmap = [];
	let landmassstarts = [];
	
	for (let x = 0; x < asworld_width; x++)
	{
		for (let y = 0; y < asworld_height; y++)
		{
			landmassmap.push(-1);
		}
	}
	
	let premapmap = [];
	//initialize the premapmap
	for (let y = 0; y < asworld_height; y++)
	{
		for (let x  = 0; x < asworld_width; x++)
		{
			premapmap.push({ sealevel: "water", terrain: "grass", trees: "none"});
		}
	}
	
	//do Landmasses
	
	for (let i = 0; i < landmasses; i++)
	{
		let tempcontigmap = [];
		//initialize the tempcontigmap
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				tempcontigmap.push(false);
			}
		}
		
		let temppremap = [];
		//initialize the temppremap
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				temppremap.push({ sealevel: "water", terrain: "grass" });
			}
		}
		
		let randomsize = Math.floor(Math.random()*(asworld_height*asworld_width/6)+Map_Size);
		let randomx = Math.floor(Math.random()*(asworld_width*3/4)+(asworld_width/8));
		let randomy = Math.floor(Math.random()*(asworld_height*3/4)+(asworld_height/8));
		
		temppremap[randomx+(randomy*asworld_width)].sealevel = "land";
		tempcontigmap[randomx+(randomy*asworld_width)] = true;
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		landmassstarts.push({ x: randomx, y: randomy });
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < asworld_width && currenthex.y < asworld_height && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*asworld_width);
					let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
					let probability = LAND_EROSION * Math.log2(Map_Size) * Math.sqrt(randomsize);
					
					if (Math.random()*distance < probability)
					{
						if (AdjacentMapHexContiguous(tempcontigmap, currenthex.x, currenthex.y, asworld_width, asworld_height, true))
						{
							tempcontigmap[position] = true;
							temppremap[position].sealevel = "land";
						}
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				if (temppremap[x+(y*asworld_width)].sealevel == "land")
				{
					landmassmap[x+(y*asworld_width)] = i+1;
					landmap[x+(y*asworld_width)] += LAND_LEVEL;
				}
			}
		}
	}
	
	for (let y = 0; y < asworld_width; y++)
	{
		for (let x  = 0; x < asworld_width; x++)
		{
			if (landmap[x+(y*asworld_width)] == 0)
				noisemapsealevel[x+(y*asworld_width)] = 0;
			else if (noisemapsealevel[x+(y*asworld_width)] < LAND_LEVEL)
				noisemapsealevel[x+(y*asworld_width)] = LAND_LEVEL;
		}
	}
	
	//do mountains
	
	let mountain_count = Math.floor(landmasses*landmasses/13);
	
	for (let i = 0; i < mountain_count; i++)
	{
		let tempcontigmap = [];
		//initialize the tempcontigmap
		for (let y = 0; y < asworld_width; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				tempcontigmap.push(false);
			}
		}
		
		let temppremap = [];
		//initialize the temppremap
		for (let y = 0; y < asworld_width; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				temppremap.push(0);
			}
		}
		
		let randomsize = Math.floor(Math.random()*(asworld_width*asworld_width/2)+(asworld_width*asworld_width/4));
		let randomx = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
		let randomy = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
		
		while (noisemapsealevel[randomx+(randomy*asworld_width)] < LAND_LEVEL)
		{
			randomx = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
			randomy = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
		}
		
		let randomheight = (Math.random()*0.345)+0.486;
		let lastdistance = 0;
		let lastheight = randomheight;
		
		temppremap[randomx+(randomy*asworld_width)] = randomheight;
		tempcontigmap[randomx+(randomy*asworld_width)] = true;
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < asworld_width && currenthex.y < asworld_height && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*asworld_width);
					let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
					let probability = MOUNTAIN_EROSION * Math.log2(Map_Size) * Math.sqrt(randomsize);
					let ddh = 0.028;
					let dh = Math.random()*(0.0901-ddh);
					let nextheight = 0;
					
					if (Math.random()*distance < probability)
					{
						dh = Math.random()*(0.0901-ddh);
						if (Math.random() < 0.333)
							dh -= Math.random()*(0.0199+ddh);
						
						nextheight = Math.min(Math.max(lastheight-dh,0),1);
					}
					
					ddh -= 0.003;
					
					if (!tempcontigmap[position] && nextheight >= LAND_LEVEL)
					{
						if (AdjacentMapHexContiguous(tempcontigmap, currenthex.x, currenthex.y, asworld_width, asworld_height, true))
						{
							tempcontigmap[position] = true;
							temppremap[position] = nextheight;
						}
						lastheight = nextheight;
					}
					
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
			lastdistance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
		}
		
		//temppremap = NormalizeMap(temppremap, 1, 0);
		
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
					noisemapsealevel[x+(y*asworld_width)] += temppremap[x+(y*asworld_width)];
			}
		}
		
	}
	
	for (let x = 0; x < asworld_width; x++)
	{
		for (let y = 0; y < asworld_height; y++)
		{
			if (noisemapsealevel[x+(y*asworld_width)] >= LAND_LEVEL)
			{
				premapmap[x+(y*asworld_width)].sealevel = "land";
			}
		}
	}
	
	for (let i = 0; i < SMOOTHING_ITERATIONS; i++)
	{
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				let waterCount = 6;
				if (x+((y+1)*asworld_width) < premapmap.length && premapmap[x+((y+1)*asworld_width)].sealevel == "land")
					waterCount--;
				if (x+((y-1)*asworld_width) > -1 && premapmap[x+((y-1)*asworld_width)].sealevel == "land")
					waterCount--
				if (x%2 == 0)
				{
					if ((x+1)+(y*asworld_width) < premapmap.length && premapmap[(x+1)+(y*asworld_width)].sealevel == "land")
						waterCount--;
					if ((x+1)+((y-1)*asworld_width) > -1 && (x+1)+((y-1)*asworld_width) < premapmap.length && premapmap[(x+1)+((y-1)*asworld_width)].sealevel == "land")
						waterCount--;
					if ((x-1)+(y*asworld_width) > -1 && premapmap[(x-1)+(y*asworld_width)].sealevel == "land")
						waterCount--;
					if ((x-1)+((y-1)*asworld_width) > -1 && premapmap[(x-1)+((y-1)*asworld_width)].sealevel == "land")
						waterCount--;
				}
				else
				{
					if ((x+1)+((y+1)*asworld_width) < premapmap.length && premapmap[(x+1)+((y+1)*asworld_width)].sealevel == "land")
						waterCount--;
					if ((x+1)+(y*asworld_width) < premapmap.length && premapmap[(x+1)+(y*asworld_width)].sealevel == "land")
						waterCount--;
					if ((x-1)+((y+1)*asworld_width) > -1 && (x-1)+((y+1)*asworld_width) < premapmap.length && premapmap[(x-1)+((y+1)*asworld_width)].sealevel == "land")
						waterCount--;
					if ((x-1)+(y*asworld_width) > -1 && premapmap[(x-1)+(y*asworld_width)].sealevel == "land")
						waterCount--;
				}
				
				if (waterCount == 6)
				{
					premapmap[x+(y*asworld_width)].sealevel = "water";
				}
				else if (waterCount < 3 && premapmap[x+(y*asworld_width)].sealevel == "water")
				{
					premapmap[x+(y*asworld_width)].sealevel = "land";
				}
			}
		}
	}
	
	for (let y = 0; y < asworld_height; y++)
	{
		for (let x  = 0; x < asworld_width; x++)
		{
			if (premapmap[x+(y*asworld_width)].sealevel == "land")
			{
				if (noisemapsealevel[x+(y*asworld_width)] > MOUNTAIN_LEVEL)
				{
					if (noisemapbiome[x+(y*asworld_width)] > SNOW_LEVEL)
					{
						premapmap[x+(y*asworld_width)].sealevel = "mountain";
						premapmap[x+(y*asworld_width)].terrain = "snow";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > TUNDRA_LEVEL)
					{
						premapmap[x+(y*asworld_width)].sealevel = "mountain";
						premapmap[x+(y*asworld_width)].terrain = "tundra";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > GRASS_LEVEL)
					{
						premapmap[x+(y*asworld_width)].sealevel = "mountain";
						premapmap[x+(y*asworld_width)].terrain = "grass";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > PLAINS_LEVEL)
					{
						premapmap[x+(y*asworld_width)].sealevel = "mountain";
						premapmap[x+(y*asworld_width)].terrain = "tundra";
					}
					else
					{
						premapmap[x+(y*asworld_width)].sealevel = "mountain";
						premapmap[x+(y*asworld_width)].terrain = "desert";
					}
				}
				else if (noisemapsealevel[x+(y*asworld_width)] > HILL_LEVEL)
				{
					if (noisemapbiome[x+(y*asworld_width)] > SNOW_LEVEL)
					{
						premapmap[x+(y*asworld_width)].sealevel = "hill";
						premapmap[x+(y*asworld_width)].terrain = "snow";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > TUNDRA_LEVEL)
					{
						premapmap[x+(y*asworld_width)].sealevel = "hill";
						premapmap[x+(y*asworld_width)].terrain = "tundra";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > GRASS_LEVEL)
					{
						
						premapmap[x+(y*asworld_width)].sealevel = "hill";
						premapmap[x+(y*asworld_width)].terrain = "grass";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > PLAINS_LEVEL)
					{
						
						premapmap[x+(y*asworld_width)].sealevel = "hill";
						premapmap[x+(y*asworld_width)].terrain = "tundra";
					}
					else
					{
						premapmap[x+(y*asworld_width)].sealevel = "hill";
						premapmap[x+(y*asworld_width)].terrain = "desert";
					}
				}
				else //if (heightmap[x+(y*asworld_width)] > LAND_LEVEL)
				{
					if (noisemapbiome[x+(y*asworld_width)] > SNOW_LEVEL)
					{
						premapmap[x+(y*asworld_width)].terrain = "snow";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > TUNDRA_LEVEL)
					{
						premapmap[x+(y*asworld_width)].terrain = "tundra";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > GRASS_LEVEL)
					{
						premapmap[x+(y*asworld_width)].terrain = "grass";
					}
					else if (noisemapbiome[x+(y*asworld_width)] > PLAINS_LEVEL)
					{
						premapmap[x+(y*asworld_width)].terrain = "plains";
					}
					else
					{
						premapmap[x+(y*asworld_width)].terrain = "desert";
					}
				}
			}
		}
	}
	
	// do water border
	for (let y = 0; y < asworld_height; y++)
	{
		position = (y*asworld_width);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
		
		position = (asworld_width-1+y*asworld_width);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
	}
	for (let x = 0; x < asworld_width; x++)
	{
		position = (x);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
		
		position = (x+(asworld_height-1)*asworld_width);
		premapmap[position].terrain = "grass";
		premapmap[position].sealevel = "water";
	}
	
	//do automata
	MapTerrainAutomataPass(premapmap, "desert", "tundra", asworld_width, asworld_height, 2);
	MapTerrainAutomataPass(premapmap, "snow", "tundra", asworld_width, asworld_height, 2);
	
	// do landmass map
	for (let i = 0; i < landmassstarts.length; i++)
	{
		let position = landmassstarts[i].x + landmassstarts[i].y * asworld_width; 
		landmassmap = LandmassCalculation(premapmap, landmassmap, landmassmap[position], landmassstarts[i].x, landmassstarts[i].y, asworld_width, asworld_height, Map_Size);
	}
	
	//do jungles
	let jungle_count = Math.floor(Math.random()* landmasses * (Math.sqrt(Map_Size)/11 +1)) +1;
	for (let i = 0; i < jungle_count; i++)
	{
		let temptreemap = [];
		//initialize the tempmap
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				temptreemap.push("none");
			}
		}
		
		let randomsize = Math.floor((Math.random()*(asworld_height*asworld_width/6)+asworld_height+asworld_width)*2/3);
		let randomx = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
		let randomy = Math.floor(Math.random()*(asworld_height*5/6)+(asworld_height/12));
		while (premapmap[randomx+randomy*asworld_width].sealevel == "water" || premapmap[randomx+randomy*asworld_width].sealevel == "mountain" || premapmap[randomx+randomy*asworld_width].terrain == "desert")
		{
			randomx = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
			randomy = Math.floor(Math.random()*(asworld_height*5/6)+(asworld_height/12));
		}
		
		temptreemap[randomx+(randomy*asworld_width)] = "jungle";
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < asworld_width && currenthex.y < asworld_height && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*asworld_width);
					if ((premapmap[position].sealevel == "land" || premapmap[position].sealevel == "hill") && premapmap[position].terrain != "desert")
					{
						let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
						let probability = JUNGLE_LEVEL * Math.log2(Map_Size) * Math.sqrt(randomsize);
						
						if (Math.random()*distance < probability)
						{
							temptreemap[position] = "jungle";
						}
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		
		temptreemap = TreesContiguousToPoint(temptreemap, "jungle", randomx, randomy, asworld_width, asworld_height, randomsize);
		
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				if (temptreemap[x+(y*asworld_width)] == "jungle")
				{
					premapmap[x+(y*asworld_width)].trees = "jungle";
				}
			}
		}
	}
	
	//do forests
	let forest_count = Math.floor(Math.random()* landmasses * (Math.sqrt(Map_Size)/9 +1)) +1;
	for (let i = 0; i < forest_count; i++)
	{
		let temptreemap = [];
		//initialize the tempmap
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				temptreemap.push("none");
			}
		}
		
		let randomsize = Math.floor((Math.random()*(asworld_height*asworld_width/6)+asworld_height+asworld_width)*3/4);
		let randomx = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
		let randomy = Math.floor(Math.random()*(asworld_height*5/6)+(asworld_height/12));
		while (premapmap[randomx+randomy*asworld_width].sealevel == "water" || premapmap[randomx+randomy*asworld_width].sealevel == "mountain" || premapmap[randomx+randomy*asworld_width].terrain == "desert")
		{
			randomx = Math.floor(Math.random()*(asworld_width*5/6)+(asworld_width/12));
			randomy = Math.floor(Math.random()*(asworld_height*5/6)+(asworld_height/12));
		}
		
		temptreemap[randomx+(randomy*asworld_width)] = "forest";
		
		let totalloops = 1;
		let sizecovered = 7;

		while (randomsize > sizecovered)
		{
			totalloops++;
			sizecovered += totalloops*6;
		}
		
		let startpos = { x: randomx, y: randomy };
		let currenthex = { x:0, y:0 };
		let curdirdur = 0;
		let dirduration = 1;
		let loopend = 6;
		let sizereached = 1;
		for(let j = 0; j < totalloops && sizereached < randomsize; j++)
		{
			let direction = 3;
			if (startpos.x  % 2 == 1)
			{
				startpos.x = startpos.x+1;
			}
			else
			{
				startpos.x = startpos.x+1;
				startpos.y = startpos.y-1;
			}
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < asworld_width && currenthex.y < asworld_height && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*asworld_width);
					if ((premapmap[position].sealevel == "land" || premapmap[position].sealevel == "hill") && premapmap[position].terrain != "desert")
					{
						let distance = Math.sqrt((currenthex.x - randomx)*(currenthex.x - randomx) + (currenthex.y - randomy)*(currenthex.y - randomy));
						let probability = FOREST_LEVEL * Math.log2(Map_Size) * Math.sqrt(randomsize);
						
						if (Math.random()*distance < probability)
						{
							temptreemap[position] = "forest";
						}
					}
				}
				
				MoveHex(currenthex, direction);
				curdirdur++;
				if (curdirdur == dirduration)
				{
					curdirdur = 0;
					direction++;
					if (direction == 6)
						direction = 0;
				}
				sizereached++;
			}
			
			loopend += 6;
			dirduration++;
		}
		
		temptreemap = TreesContiguousToPoint(temptreemap, "forest", randomx, randomy, asworld_width, asworld_height, randomsize);
		
		for (let y = 0; y < asworld_height; y++)
		{
			for (let x  = 0; x < asworld_width; x++)
			{
				if (temptreemap[x+(y*asworld_width)] == "forest")
				{
					premapmap[x+(y*asworld_width)].trees = "forest";
				}
			}
		}
	}
	
	
	// do landmarks
	let landmarks = [];
	let citycount = 4;
	let landmarkcount = 1;
	let landmarklandmass = Math.ceil(Map_Size);
	for (let i = 0; i < landmarklandmass; i++)
	{
		let landmarksroll = Math.max(Math.floor(Math.random()*4+Math.random()*4)-3,1);
		landmarkcount += landmarksroll;
	}
	for (let i = 0; i < landmarklandmass; i++)
	{
		let landmarksroll = Math.max(Math.floor(Math.random()*4+Math.random()*4)-3,0);
		citycount += landmarksroll;
	}
	
	citycount = Math.ceil(citycount*city_density);
	
	
	//cities
	for (let i = 0; i < citycount; i++)
	{
		let currenthex;
		//ideal location random placement attempts
		let landmarkvalid = true;
		
		for (let j = 0; j < 255 && landmarkvalid; j++)
		{
			let placeattempts = 0;
			currenthex = { x: Math.floor(Math.random()*(asworld_width-1)+1), y: Math.floor(Math.random()*(asworld_height-1)+1), capitalcity: i };
			while (!CityLocationValid(currenthex, landmarks, premapmap, asworld_width) && placeattempts <= 255)
			{
				currenthex = { x: Math.floor(Math.random()*(asworld_width-1)+1), y: Math.floor(Math.random()*(asworld_height-1)+1), capitalcity: i };
				placeattempts++;
				if (placeattempts > 255)
				{
					console.log("stopping placing cities, " + i + " cities placed");
					landmarkvalid = false;
					citycount = i;
					i += citycount;
				}
			}
			
			if (landmarkvalid)
			{
				let position = currenthex.x + currenthex.y*asworld_width;
				let hasShore = (NearestWaterbodyToPoint(premapmap, currenthex.x, currenthex.y, asworld_width, asworld_height, 7) != null);
				let hasGrasslands = (NearestGrasslandsToPoint(premapmap, currenthex, asworld_width, asworld_height, 7) != null);
				let chanceToStay = 0.1;
				let factorsToStay = 0.16;
				if (hasShore)
				{
					factorsToStay++;
				}
				if (hasGrasslands)
				{
					factorsToStay++;
				}
				chanceToStay += factorsToStay*factorsToStay*0.1;
				if (Math.random() < chanceToStay)
					j += 255;
				else
					j++;
			}
		}
		if (landmarkvalid)
		{
			landmarks.push(currenthex);
			asworldmap[currenthex.x+(currenthex.y*asworld_width)].landmark = "city";
		}
	}
	
	//other landmarks
	for (let i = 0; i < landmarkcount; i++)
	{
		let currenthex;
		//ideal location random placement attempts
		let landmarkvalid = true;
		
		for (let j = 0; j < 255 && landmarkvalid; j++)
		{
			let placeattempts = 0;
			currenthex = { x: Math.floor(Math.random()*(asworld_width-1)+1), y: Math.floor(Math.random()*(asworld_height-1)+1), capitalcity: i };
			while (!CityLocationValid(currenthex, landmarks, premapmap, asworld_width) && placeattempts <= 255)
			{
				currenthex = { x: Math.floor(Math.random()*(asworld_width-1)+1), y: Math.floor(Math.random()*(asworld_height-1)+1), capitalcity: i };
				placeattempts++;
				if (placeattempts > 255)
				{
					console.log("stopping placing landmarks, " + i + " landmarks placed");
					landmarkvalid = false;
					landmarkcount = i;
					i += landmarkcount;
				}
			}
			
			if (landmarkvalid)
			{
				let position = currenthex.x + currenthex.y*asworld_width;
				let hasShore = (NearestWaterbodyToPoint(premapmap, currenthex.x, currenthex.y, asworld_width, asworld_height, 7) != null);
				let hasGrasslands = (NearestGrasslandsToPoint(premapmap, currenthex, asworld_width, asworld_height, 7) != null);
				let chanceToStay = 0.1;
				let factorsToStay = 0.16;
				if (hasShore)
				{
					factorsToStay++;
				}
				if (hasGrasslands)
				{
					factorsToStay++;
				}
				chanceToStay += factorsToStay*factorsToStay*0.1;
				if (Math.random() < chanceToStay)
					j += 255;
				else
					j++;
			}
		}
		if (landmarkvalid)
		{
			landmarks.push(currenthex);
			let randomroll = Math.random();
			if (randomroll < 0.5)
				asworldmap[currenthex.x+(currenthex.y*asworld_width)].landmark = "monster lair";
			else if (randomroll < 0.8)
				asworldmap[currenthex.x+(currenthex.y*asworld_width)].landmark = "quest site";
			else
				asworldmap[currenthex.x+(currenthex.y*asworld_width)].landmark = "evil castle";
		}
	}
	
	
	for (let x = 0; x < asworld_width; x++)
	{
		for (let y = 0; y < asworld_height; y++)
		{
			//asworldmap[x+(y*asworld_width)].sealevel = noisemapsealevel[x+(y*asworld_width)]*1;
			if (premapmap[x+(y*asworld_width)].sealevel == "mountain")
				asworldmap[x+(y*asworld_width)].sealevel = 12.5;
			else if (premapmap[x+(y*asworld_width)].sealevel == "hill")
				asworldmap[x+(y*asworld_width)].sealevel = 7.5;
			else if (premapmap[x+(y*asworld_width)].sealevel == "land")
				asworldmap[x+(y*asworld_width)].sealevel = 1;
			else
				asworldmap[x+(y*asworld_width)].sealevel = -1;
			if (premapmap[x+(y*asworld_width)].terrain == "snow")
				asworldmap[x+(y*asworld_width)].climate = "extremely cold";
			else if (premapmap[x+(y*asworld_width)].terrain == "tundra")
				asworldmap[x+(y*asworld_width)].climate = "cold";
			else if (premapmap[x+(y*asworld_width)].terrain == "grass")
				asworldmap[x+(y*asworld_width)].climate = "temperate";
			else if (premapmap[x+(y*asworld_width)].terrain == "plains")
				asworldmap[x+(y*asworld_width)].climate = "hot";
			else
				asworldmap[x+(y*asworld_width)].climate = "extremely hot";
			if (premapmap[x+(y*asworld_width)].trees == "jungle")
				asworldmap[x+(y*asworld_width)].biome = "jungle";
			else if (premapmap[x+(y*asworld_width)].trees == "forest")
				asworldmap[x+(y*asworld_width)].biome = "forest";
			else if (premapmap[x+(y*asworld_width)].climate == "temperate")
				asworldmap[x+(y*asworld_width)].biome = "grasslands";
			else if (premapmap[x+(y*asworld_width)].terrain == "plains")
				asworldmap[x+(y*asworld_width)].biome = "plains";
			else if (premapmap[x+(y*asworld_width)].terrain == "snow")
				asworldmap[x+(y*asworld_width)].biome = "desolate";
			else
				asworldmap[x+(y*asworld_width)].biome = "desolate";
		}
	}
	
	console.log("adventuresim world generated");
	saveSimWorldMap();
}

function findClassByName(classname)
{
	for(let i = 0; i < adventure_sim.adventurers.classes.length; i++)
	{
		if (adventure_sim.adventurers.classes[i].name == classname)
			return adventure_sim.adventurers.classes[i];
	}
	return null;
}

function makeAdventurer(classname)
{
	let species = adventure_sim.adventurers.species[Math.floor(Math.random()*adventure_sim.adventurers.species.length)];
	let adventurerclass = adventure_sim.adventurers.classes[Math.floor(Math.random()*adventure_sim.adventurers.classes.length)];
	
	classname = classname.toLowerCase();
	
	if (classname != null && classname != "")
	{
		let tempclass = findClassByName(classname);
		if (tempclass != null)
			adventurerclass = tempclass;
	}
	
	let firstname = monster_names[Math.floor(Math.random()*monster_names.length)];
	let surname = monster_surnames[Math.floor(Math.random()*monster_surnames.length)];
	let heightadj = adventure_sim.adventurers.heightAdjectives[Math.floor(Math.random()*adventure_sim.adventurers.heightAdjectives.length)]
	let weightadj = adventure_sim.adventurers.weightAdjectives[Math.floor(Math.random()*adventure_sim.adventurers.weightAdjectives.length)];
	let adventurer = {
		name: firstname + " " + surname, 
		species: species.name, 
		classname: adventurerclass.name,
		cstatus: "good",
		stats: {
			level: 1,
			exp: 0,
			woundLevelUp: 0,
			woundMax: species.stats.wounds + adventurerclass.stats.wounds,
			wounds: [],
			woundThreshold: species.stats.woundThreshold + adventurerclass.stats.woundThreshold,
			healRate: species.stats.healRate,
			initiative: species.stats.initiative + adventurerclass.stats.initiative,
			skills: {
				acrobatics: species.stats.skills.acrobatics + adventurerclass.stats.skills.acrobatics,
				animalHandling: species.stats.skills.animalHandling + adventurerclass.stats.skills.animalHandling,
				arcana: species.stats.skills.arcana + adventurerclass.stats.skills.arcana,
				athletics: species.stats.skills.athletics + adventurerclass.stats.skills.athletics,
				deception: species.stats.skills.deception + adventurerclass.stats.skills.deception,
				insight: species.stats.skills.insight + adventurerclass.stats.skills.insight,
				intimidation: species.stats.skills.intimidation + adventurerclass.stats.skills.intimidation,
				investigation: species.stats.skills.investigation + adventurerclass.stats.skills.investigation,
				medicine: species.stats.skills.medicine + adventurerclass.stats.skills.medicine,
				nature: species.stats.skills.nature + adventurerclass.stats.skills.nature,
				perception: species.stats.skills.perception + adventurerclass.stats.skills.perception,
				performance: species.stats.skills.performance + adventurerclass.stats.skills.performance,
				persuasion: species.stats.skills.persuasion + adventurerclass.stats.skills.persuasion,
				religion: species.stats.skills.religion + adventurerclass.stats.skills.religion,
				sleightOfHand: species.stats.skills.sleightOfHand + adventurerclass.stats.skills.sleightOfHand,
				stealth: species.stats.skills.stealth + adventurerclass.stats.skills.stealth,
				survival: species.stats.skills.survival + adventurerclass.stats.skills.survival
			},
			damageModLevelUp: 0,
			damageMod: adventurerclass.stats.damageMod,
			damagetype: adventurerclass.stats.damagetype,
			damagedienum: adventurerclass.stats.damagedienum,
			damagediesides: adventurerclass.stats.damagediesides,
			resistances: [],
			weaknesses: []
		},
		side: 0,
		magicitems: {
			mainHand: null,
			offHand: null,
			clothes: null,
			armour: null,
			accessories: [ null, null, null, null ]
		},
		scars: [],
		heightAdjective: heightadj,
		weightAdjective: weightadj,
		personallog: []
	}
	
	return adventurer;
}

function addToPersonalLog(adventurer, logtext)
{
	if (adventurer.personallog !== undefined)
	{
		if (adventurer.personallog.length == 0 || adventurer.personallog[adventurer.personallog.length-1] != logtext)
		{
			adventurer.personallog.push(logtext);
			return true;
		}
	}
	return false;
}

function getPartyMemberStat(partymember, stat)
{
	if (stat == "woundMax")
	{
		let statvalue = partymember.stats.woundMax;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.woundMaxMod;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.woundMaxMod;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.woundMaxMod;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.woundMaxMod;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.woundMaxMod;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.woundMaxMod;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.woundMaxMod;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.woundMaxMod;
		
		return statvalue;
	}
	
	if (stat == "woundThreshold")
	{
		let statvalue = partymember.stats.woundThreshold;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.woundThresholdMod;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.woundThresholdMod;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.woundThresholdMod;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.woundThresholdMod;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.woundThresholdMod;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.woundThresholdMod;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.woundThresholdMod;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.woundThresholdMod;
		
		return statvalue;
	}
	
	if (stat == "healRate")
	{
		let statvalue = partymember.stats.healRate;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.healRateMod;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.healRateMod;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.healRateMod;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.healRateMod;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.healRateMod;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.healRateMod;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.healRateMod;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.healRateMod;
		
		return statvalue;
	}
	
	if (stat == "initiative")
	{
		let statvalue = partymember.stats.initiative;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.initiativeMod;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.initiativeMod;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.initiativeMod;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.initiativeMod;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.initiativeMod;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.initiativeMod;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.initiativeMod;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.initiativeMod;
		
		return statvalue;
	}
	
	if (stat == "acrobatics")
	{
		let statvalue = partymember.stats.skills.acrobatics;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.acrobatics;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.acrobatics;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.acrobatics;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.acrobatics;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.acrobatics;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.acrobatics;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.acrobatics;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.acrobatics;
		
		return statvalue;
	}
	
	if (stat == "animalHandling")
	{
		let statvalue = partymember.stats.skills.animalHandling;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.animalHandling;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.animalHandling;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.animalHandling;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.animalHandling;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.animalHandling;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.animalHandling;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.animalHandling;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.animalHandling;
		
		return statvalue;
	}
	
	if (stat == "arcana")
	{
		let statvalue = partymember.stats.skills.arcana;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.arcana;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.arcana;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.arcana;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.arcana;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.arcana;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.arcana;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.arcana;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.arcana;
		
		return statvalue;
	}
	
	if (stat == "athletics")
	{
		let statvalue = partymember.stats.skills.athletics;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.athletics;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.athletics;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.athletics;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.athletics;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.athletics;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.athletics;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.athletics;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.athletics;
		
		return statvalue;
	}
	
	if (stat == "deception")
	{
		let statvalue = partymember.stats.skills.deception;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.deception;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.deception;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.deception;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.deception;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.deception;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.deception;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.deception;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.deception;
		
		return statvalue;
	}
	
	if (stat == "insight")
	{
		let statvalue = partymember.stats.skills.insight;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.insight;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.insight;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.insight;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.insight;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.insight;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.insight;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.insight;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.insight;
		
		return statvalue;
	}
	
	if (stat == "intimidation")
	{
		let statvalue = partymember.stats.skills.intimidation;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.intimidation;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.intimidation;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.intimidation;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.intimidation;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.intimidation;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.intimidation;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.intimidation;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.intimidation;
		
		return statvalue;
	}
	
	if (stat == "investigation")
	{
		let statvalue = partymember.stats.skills.investigation;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.investigation;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.investigation;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.investigation;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.investigation;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.investigation;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.investigation;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.investigation;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.investigation;
		
		return statvalue;
	}
	
	if (stat == "medicine")
	{
		let statvalue = partymember.stats.skills.medicine;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.medicine;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.medicine;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.medicine;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.medicine;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.medicine;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.medicine;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.medicine;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.medicine;
		
		return statvalue;
	}
	
	if (stat == "nature")
	{
		let statvalue = partymember.stats.skills.nature;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.nature;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.nature;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.nature;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.nature;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.nature;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.nature;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.nature;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.nature;
		
		return statvalue;
	}
	
	if (stat == "perception")
	{
		let statvalue = partymember.stats.skills.perception;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.perception;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.perception;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.perception;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.perception;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.perception;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.perception;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.perception;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.perception;
		
		return statvalue;
	}
	
	if (stat == "performance")
	{
		let statvalue = partymember.stats.skills.performance;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.performance;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.performance;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.performance;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.performance;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.performance;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.performance;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.performance;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.performance;
		
		return statvalue;
	}
	
	if (stat == "persuasion")
	{
		let statvalue = partymember.stats.skills.persuasion;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.persuasion;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.persuasion;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.persuasion;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.persuasion;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.persuasion;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.persuasion;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.persuasion;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.persuasion;
		
		return statvalue;
	}
	
	if (stat == "religion")
	{
		let statvalue = partymember.stats.skills.religion;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.religion;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.religion;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.religion;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.religion;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.religion;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.religion;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.religion;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.religion;
		
		return statvalue;
	}
	
	if (stat == "sleightOfHand")
	{
		let statvalue = partymember.stats.skills.sleightOfHand;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.sleightOfHand;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.sleightOfHand;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.sleightOfHand;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.sleightOfHand;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.sleightOfHand;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.sleightOfHand;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.sleightOfHand;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.sleightOfHand;
		
		return statvalue;
	}
	
	if (stat == "stealth")
	{
		let statvalue = partymember.stats.skills.stealth;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.stealth;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.stealth;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.stealth;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.stealth;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.stealth;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.stealth;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.stealth;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.stealth;
		
		return statvalue;
	}
	
	if (stat == "survival")
	{
		let statvalue = partymember.stats.skills.survival;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.skillMod.survival;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.skillMod.survival;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.skillMod.survival;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.skillMod.survival;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.skillMod.survival;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.skillMod.survival;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.skillMod.survival;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.skillMod.survival;
		
		return statvalue;
	}
	
	if (stat == "damageMod")
	{
		let statvalue = partymember.stats.damageMod;
		
		if (partymember.magicitems.mainHand != null)
			statvalue += partymember.magicitems.mainHand.effects.damageMod;
		if (partymember.magicitems.offHand != null)
			statvalue += partymember.magicitems.offHand.effects.damageMod;
		if (partymember.magicitems.clothes != null)
			statvalue += partymember.magicitems.clothes.effects.damageMod;
		if (partymember.magicitems.armour != null)
			statvalue += partymember.magicitems.armour.effects.damageMod;
		if (partymember.magicitems.accessories[0] != null)
			statvalue += partymember.magicitems.accessories[0].effects.damageMod;
		if (partymember.magicitems.accessories[1] != null)
			statvalue += partymember.magicitems.accessories[1].effects.damageMod;
		if (partymember.magicitems.accessories[2] != null)
			statvalue += partymember.magicitems.accessories[2].effects.damageMod;
		if (partymember.magicitems.accessories[3] != null)
			statvalue += partymember.magicitems.accessories[3].effects.damageMod;
		
		return statvalue;
	}
	
	if (stat == "damagedienum")
	{
		let statvalue = partymember.stats.damagedienum;
		
		return statvalue;
	}
	
	if (stat == "damagediesides")
	{
		let statvalue = partymember.stats.damagedienum;
		
		return statvalue;
	}
	
	if (stat == "damagediesides")
	{
		let statvalue = partymember.stats.damagedienum;
		
		return statvalue;
	}
}

function getPartyMemberByName(party, name)
{
	for (let i = 0; i < party.members.length; i++)
	{
		if (party.members[i].name == name)
			return party.members[i];
	}
	return null;
}

function getPartyById(id)
{
	for (let i = 0; i < adventuringparties.length; i++)
	{
		if (adventuringparties[i].id == id)
			return adventuringparties[i];
	}
	return null;
}

function recruitPartyMembers(arguments)
{
	if (arguments == null || arguments.length == 0)
		return "You must provide a party id for this command";
	
	let party = getPartyById(arguments[0]);
	if (party == null)
		return "There is no party with that id currently";
	
	if (arguments.length < 1)
		return "you must specify at least one class, or put \"any\" for any class";
	
	if (party.members.length >= MAX_PARTY_MEMBERS)
	{
		return party.name + " are full";
	}
	
	let output = "";
	for (let i = 1; i < arguments.length && party.members.length < MAX_PARTY_MEMBERS; i++)
	{
		let adventurer = makeAdventurer(arguments[i]);
		party.members.push(adventurer);
		output += "Recruited " + adventurer.name + ", the " + adventurer.species + " " + adventurer.classname + "\n";
	}
	output = output.trim();
	
	saveAdventuringParties();
	
	return output;
}

function retirePartyMember(arguments)
{
	if (arguments == null || arguments.length == 0)
		return "You must provide a party id for this command";
	
	let party = getPartyById(arguments[0]);
	if (party == null)
		return "There is no party with that id currently";
	
	let partymembername = argumentsbacktostring(arguments, 1);
	let partymember = -1
	for (let i = 0; i < party.members.length; i++)
	{
		if (party.members[i].name == partymembername)
			partymember = i;
	}
	if (partymember == -1)
		return "there is no party member with that name in this party";
	
	party.members.splice(partymember, 1);
	
	if (party.members.length == 0)
	{
		output = partymembername + " has been retired";
		output += "\n" + disbandParty(arguments);
		return output;
	}
	
	
	saveAdventuringParties();
	
	return partymembername + " has been retired";
}

function outputAdventurerWounds(adventurer)
{
	if (adventurer.stats.wounds.length == 0)
	{
		return "none";
	}
	
	let output = "";
	for (let i = 0; i < adventurer.stats.wounds.length; i++)
	{
		output += adventurer.stats.wounds[i] + "wound";
		if (i+1 < adventurer.stats.wounds.length)
			output += ", ";
	}
	
	return output;
}

function outputPartyMemberSummary(arguments)
{
	if (arguments == null || arguments.length == 0)
		return "You must provide a party id for this command";
	
	let party = getPartyById(arguments[0]);
	if (party == null)
		return "There is no party with that id currently";
	
	let partymember = getPartyMemberByName(party, argumentsbacktostring(arguments, 1));
	if (partymember == null)
		return "there is no party member with that name in this party";
	
	let output = partymember.name + " the " + partymember.species + " " + partymember.classname + "\n"
		+ "Level: " + partymember.stats.level + ", Status: " + partymember.cstatus + ", Experience: " + partymember.stats.exp + "\n"
		+ "Max Wounds: " + getPartyMemberStat(partymember, "woundMax") + ", Wound Threshold: " + getPartyMemberStat(partymember, "woundThreshold") + ", Heal Rate: " + getPartyMemberStat(partymember, "healRate") + "\n"
		+ "Attack: " + partymember.stats.damagedienum + "d" + partymember.stats.damagediesides + " +" + getPartyMemberStat(partymember, "damageMod") + " " + partymember.stats.damagetype + "\n"
		+ "Skills: ";
	
	let skillscount = 0;
	
	if (partymember.stats.skills.acrobatics > 0)
	{
		skillscount++;
		output += "acrobatics +" + getPartyMemberStat(partymember, "acrobatics");
	}

	if (partymember.stats.skills.animalHandling > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "animal handling +" + getPartyMemberStat(partymember, "animalHandling");
	}
	
	if (partymember.stats.skills.arcana > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "arcana +" + getPartyMemberStat(partymember, "arcana");
	}
	
	if (partymember.stats.skills.athletics > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "athletics +" + getPartyMemberStat(partymember, "athletics");
	}
	
	if (partymember.stats.skills.deception > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "deception +" + getPartyMemberStat(partymember, "deception");
	}
	
	if (partymember.stats.skills.insight > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "insight +" + getPartyMemberStat(partymember, "insight");
	}
	
	if (partymember.stats.skills.intimidation > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "intimidation +" + getPartyMemberStat(partymember, "intimidation");
	}
	
	if (partymember.stats.skills.investigation > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "investigation +" + getPartyMemberStat(partymember, "investigation");
	}
	
	if (partymember.stats.skills.medicine > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "medicine +" + getPartyMemberStat(partymember, "medicine");
	}
	
	if (partymember.stats.skills.nature > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "nature +" + getPartyMemberStat(partymember, "nature");
	}
	
	if (partymember.stats.skills.perception > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "perception +" + getPartyMemberStat(partymember, "perception");
	}
	
	if (partymember.stats.skills.performance > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "performance +" + getPartyMemberStat(partymember, "performance");
	}
	
	if (partymember.stats.skills.persuasion > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "persuasion +" + getPartyMemberStat(partymember, "persuasion");
	}
	
	if (partymember.stats.skills.religion > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "religion +" + getPartyMemberStat(partymember, "religion");
	}
	
	if (partymember.stats.skills.sleightOfHand > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "sleight of hand +" + getPartyMemberStat(partymember, "sleightOfHand");
	}
	
	if (partymember.stats.skills.stealth > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "stealth +" + getPartyMemberStat(partymember, "stealth");
	}
	
	if (partymember.stats.skills.survival > 0)
	{
		if (skillscount > 0)
			output += ", ";
		skillscount++;
		output += "survival +" + getPartyMemberStat(partymember, "survival");
	}
	
	output += "\nEquipment\n";
	
	let itemcount = 0;
	
	if (partymember.magicitems.mainHand != null)
	{
		itemcount++;
		output += partymember.magicitems.mainHand.name + " (level " + partymember.magicitems.mainHand.itlvl + ") in main hand";
	}
	
	if (partymember.magicitems.offHand != null)
	{
		if (itemcount > 0)
			output += ", ";
		itemcount++;
		output += partymember.magicitems.offHand.name + " (level " + partymember.magicitems.offHand.itlvl + ") in off hand";
	}
	
	if (partymember.magicitems.clothes != null)
	{
		if (itemcount > 0)
			output += ", ";
		itemcount++;
		output += partymember.magicitems.clothes.name + " (level " + partymember.magicitems.clothes.itlvl + ") as clothes";
	}
	
	if (partymember.magicitems.armour != null)
	{
		if (itemcount > 0)
			output += ", ";
		itemcount++;
		output += partymember.magicitems.armour.name + " (level " + partymember.magicitems.armour.itlvl + ") as armour";
	}
	
	if (partymember.magicitems.accessories[0] != null)
	{
		if (itemcount > 0)
			output += ", ";
		itemcount++;
		output += partymember.magicitems.accessories[0].name + " (level " + partymember.magicitems.accessories[0].itlvl + ") as an accessory";
	}
	
	if (partymember.magicitems.accessories[1] != null)
	{
		if (itemcount > 0)
			output += ", ";
		itemcount++;
		output += partymember.magicitems.accessories[1].name + " (level " + partymember.magicitems.accessories[1].itlvl + ") as an accessory";
	}
	
	if (partymember.magicitems.accessories[2] != null)
	{
		if (itemcount > 0)
			output += ", ";
		itemcount++;
		output += partymember.magicitems.accessories[2].name + " (level " + partymember.magicitems.accessories[2].itlvl + ") as an accessory";
	}
	
	if (partymember.magicitems.accessories[3] != null)
	{
		if (itemcount > 0)
			output += ", ";
		itemcount++;
		output += partymember.magicitems.accessories[3].name + " (level " + partymember.magicitems.accessories[3].itlvl + ") as an accessory";
	}
	output += "\nDescription:\n" + grammarCapitalFirstLetter(partymember.heightAdjective) + " and " + partymember.weightAdjective;
	
	for (let i = 0; i < partymember.scars.length; i++)
	{
		output += ", " + partymember.scars[i];
	}
	
	output += "\nPersonal Log:\n";
	
	for (let i = 0; i < partymember.personallog.length; i++)
	{
		output += partymember.personallog[i];
		if (i < partymember.personallog.length-1)
			output += "\n";
	}
	
	if (output.length > 2000)
		return "sorry, party summary too long to display";
	
	return output;
}

function outputPartySummary(arguments)
{
	if (arguments == null || arguments.length == 0)
		return "You must provide a party id for this command";
	
	let party = getPartyById(arguments[0]);
	if (party == null)
		return "There is no party with that id currently";
	
	let output = "id: " + party.id + ", name: " + party.name + "\n"
		+ "members: " + party.members.length + "\;\n";
	for (let i = 0; i < party.members.length; i++)
	{
		output += party.members[i].name + " the level " + party.members[i].stats.level + " " + party.members[i].species + " " + party.members[i].classname + " (" + party.members[i].cstatus + ")\n";
	}
	output += "Silverpieces: " + party.silverpieces;
	
	if (output.length > 2000)
		return "sorry, party summary too long to display";
	
	return output;
}

function checkIdIsUnique(id)
{
	for (let i = 0; i < adventuringparties.length; i++)
	{
		if (adventuringparties[i].id == id)
			return false;
	}
	return true;
}

var MAX_PARTY_MEMBERS = 12;

function makeParty(arguments)
{
	if (arguments == null || arguments.length == 0)
		return "You must provide arguments for this command";
	
	if (!checkIdIsUnique(arguments[0]))
		return "Sorry, that party id is already in use!";
	
	let partyname = arguments[0];
	let partymemberclass = [];
	
	for (let i = 1; i < arguments.length; i++)
	{
		if (arguments[i] == "-n")
		{
			let end = i+1;
			for (let j = i+1; j < arguments.length; j++)
			{
				end = j;
				if (arguments[j].charAt(0) == "-")
				{
					j += arguments.length;
				}
			}
			partyname = argumentsbacktostring(arguments, i+1, end);
		}
		else if (arguments[i] == "-c")
		{
			for (let j = i+1; j < arguments.length; j++)
			{
				if (arguments[j].charAt(0) == "-")
				{
					j += arguments.length;
				}
				else
				{
					partymemberclass.push(arguments[j]);
				}
			}
		}
	}
	
	if (partymemberclass.length < 1)
		return "You must provide at least one class specification or \"any\" for this command";
	
	let nearestCity = findNearestLandmark(64, 36, "city", 0.667);
	while (nearestCity != null && nearestCity == false)
	{
		nearestCity = findNearestLandmark(64, 36, "city", 0.667);
	}
	if (nearestCity == null)
		throw "no city found";
	
	adventuringparty = {
		id: arguments[0],
		name: partyname,
		members: [], 
		xpos: nearestCity.x, 
		ypos: nearestCity.y, 
		cstamina: 1,
		cstatus: "intown",
		cactionduration: 0,
		silverpieces: 200, 
		inventory: [],
		priorities: [{name: "adventure", count: 1}],
		currentlyinencounter: false,
		encounterinitiative: [],
		encounterengagements: [],
		currentinitiative: 0,
		currentpartymember: 0,
		encounterenemies: [],
		encounterexp: 0,
		encountersummary: "",
		currentenemy: 0,
		questfight: false,
		questpath: [],
		questlocation: 0,
		questcomplete: false,
		questsucceed: false,
		dungeon: [],
		dungeonexplore: false,
		dungeonroomnum: 0,
		dungeoncomplete: false,
		log: []
	};
	
	for (let i = 0; i < partymemberclass.length && i < MAX_PARTY_MEMBERS; i++)
	{
		adventuringparty.members.push(makeAdventurer(partymemberclass[i]));
	}
	adventuringparties.push(adventuringparty);
	
	saveAdventuringParties();
	
	return "Adventuring party \"" + adventuringparty.name +"\" successfully created";
}

function disbandParty(arguments)
{
	if (arguments == null || arguments.length == 0)
		return "You must provide a party id for this command";
	
	
	let party = -1;
	let partyname = "";
	for (let i = 0; i < adventuringparties.length; i++)
	{
		if (adventuringparties[i].id == arguments[0])
		{
			party = i;
			partyname = adventuringparties[i].name;
		}
	}
	if (party == -1)
		return "There is no party with that id currently";
	
	
	
	adventuringparties.splice(party,1);
	
	saveAdventuringParties();
	
	return partyname + " has disbanded";
}

function addPriority(priorities, priority)
{
	for (let i = 0; i < priorities.length; i++)
	{
		if (priorities[i].name == priority)
		{
			priorities[i].count++;
			return;
		}
	}
	priorities.push({name:priority, count: 1});
}

function minusPriority(priorities, priority)
{
	for (let i = 0; i < priorities.length; i++)
	{
		if (priorities[i].name == priority)
		{
			if (priorities[i].count > 0)
				priorities[i].count--;
			return;
		}
	}
}

function clearPriority(prioritylist, priority)
{
	for (let i = 0; i < prioritylist.length; i++)
	{
		if (prioritylist[i].name == priority)
		{
			prioritylist[i].count = 0;
			return;
		}
	}
}

function inventoryContainsItem(itemname)
{
	let itemcount = 0;
	for(let i = 0; i < adventuringparty.inventory.length; i++)
	{
		if (adventuringparty.inventory[i].name == itemname)
		{
			itemcount++;
		}
	}
	return itemcount;
}

function getHighestPriority(priorities)
{
	let currenthighest = 0;
	let currentpos = -1;
	for(let i = 0; i < priorities.length; i++)
	{
		if (priorities[i].count > currenthighest)
		{
			currenthighest = priorities[i].count;
			currentpos = i;
		}
	}
	if (currentpos == -1)
		return null;
	return priorities[currentpos].name;
}

function copyPrioritiesList(priorities)
{
	newlist = [];
	for (let i = 0; i < priorities.length; i++)
	{
		newlist.push({ name: priorities[i].name, count: priorities[i].count });
	}
	
	return newlist;
}

function getLandmarkKeywords(xpos, ypos)
{
	for (let i = 0; i < adventure_sim.landmarks.length; i++)
	{
		if (asworldmap[xpos+(ypos*asworld_width)].landmark == adventure_sim.landmarks[i].name)
		{
			return adventure_sim.landmarks[i].keywords;
		}
	}
	return null;
}

function getAdventurerItemByName(itemname)
{
	for (let i = 0; i < adventure_sim.itemblueprints.length; i++)
	{
		if (adventure_sim.itemblueprints[i].name == itemname)
		{
			return adventure_sim.itemblueprints[i];
		}
	}
	
	return null;
}

function getEncounterTableByName(tablename)
{
	for (let i = 0; i < adventure_sim.encounters.length; i++)
	{
		if (adventure_sim.encounters[i].name == tablename)
			return adventure_sim.encounters[i];
	}
	return null;
}

function getCreatureByBlueprintID(creatureid)
{
	for (let i = 0; i < adventure_sim.enemyblueprints.length; i++)
	{
		if (adventure_sim.enemyblueprints[i].id == creatureid)
		{
			let creature = {
				id: adventure_sim.enemyblueprints[i].id,
				name: adventure_sim.enemyblueprints[i].name,
				plural: adventure_sim.enemyblueprints[i].plural,
				cstatus: "good",
				experience: adventure_sim.enemyblueprints[i].experience,
				stats:
				{
					level: adventure_sim.enemyblueprints[i].stats.level,
					woundMax: adventure_sim.enemyblueprints[i].stats.wounds,
					wounds: [],
					woundThreshold: adventure_sim.enemyblueprints[i].stats.woundThreshold,
					initiative: adventure_sim.enemyblueprints[i].stats.initiative,
					damagetype: adventure_sim.enemyblueprints[i].stats.damagetype,
					damagedienum: adventure_sim.enemyblueprints[i].stats.damagedienum,
					damagediesides: adventure_sim.enemyblueprints[i].stats.damagediesides,
					resistances: [],
					weaknesses: []
				},
				side: 1,
			};
			
			// give enemies resistance/weakness
			
			return creature;
		}
	}
	return null;
}

function scarTarget(target, damagetype)
{
	let scarloc = adventure_sim.adventurers.scarlocations[Math.floor(Math.random()*adventure_sim.adventurers.scarlocations.length)]
	let scartypes = adventure_sim.adventurers.scardescriptions.filter(filterByList,damagetype);
	let randomscartype = Math.floor(Math.random()*scartypes.length);
	let scar = scartypes[randomscartype].desc[Math.floor(Math.random()*scartypes[randomscartype].desc.length)];
	target.scars.push(scar + " on their " + scarloc);
	if (target.scars.length > 12)
		target.scars.splice(Math.floor(Math.random()*12), 1);
}

function woundTarget(party, target, woundlevel, attacker)
{
	let maxWounds = target.stats.woundMax;
	if (target.sides == 0)
	{
		if (target.magicitems.mainHand != null)
			maxWounds += target.magicitems.mainHand.effects.woundMax;
		if (target.magicitems.offHand != null)
			maxWounds += target.magicitems.offHand.effects.woundMax;
		if (target.magicitems.clothes != null)
			maxWounds += target.magicitems.clothes.effects.woundMax;
		if (target.magicitems.armour != null)
			maxWounds += target.magicitems.armour.effects.woundMax;
		if (target.magicitems.accessories[0] != null)
			maxWounds += target.magicitems.accessories[0].effects.woundMax;
		if (target.magicitems.accessories[1] != null)
			maxWounds += target.magicitems.accessories[1].effects.woundMax;
		if (target.magicitems.accessories[2] != null)
			maxWounds += target.magicitems.accessories[2].effects.woundMax;
		if (target.magicitems.accessories[3] != null)
			maxWounds += target.magicitems.accessories[3].effects.woundMax;
	}
	
	if (target.stats.wounds.length < maxWounds)
		target.stats.wounds.push(woundlevel)
	else
	{
		let woundapplied = false;
		for (let i = 0; i < target.stats.wounds.length; i++)
		{
			if (target.stats.wounds[i] < woundlevel)
			{
				woundapplied = true;
				target.stats.wounds[i] = woundlevel;
			}
		}
		if (!woundapplied)
		{
			for (let i = 0; i < target.stats.wounds.length; i++)
			{
				if (target.stats.wounds[i] == woundlevel)
				{
					woundapplied = true;
					woundlevel++;
					target.stats.wounds[i] = woundlevel;
				}
			}
		}
	}
	
	if (woundlevel >= 2 && target.side == 0 && Math.random() < 0.12)
	{
		scarTarget(target, attacker.stats.damagetype);
	}
	
	
	if (woundlevel == 0 && target.side == 0 && Math.random() < 0.15)
	{
		scarTarget(target, attacker.stats.damagetype);
	}
	
	if (target.stats.wounds.length >= maxWounds)
	{
		let criticalwoundcount = 0;
		for (let i = 0; i < target.stats.wounds.length; i++)
		{
			if (target.stats.wounds[i] >= 1)
			{
				criticalwoundcount++;
			}
		}
		
		if (criticalwoundcount >= maxWounds)
		{
			if (target.side == 0)
			{
				target.cstatus = "dead";
				addToAdventureSimLog(party,target.name + " killed by " + attacker.name);
				addToPersonalLog(target, "Killed by " + attacker.name);
				removeFromEngagements(party, target);
			}
			else
			{
				for (let i = 0; i < party.encounterenemies.length; i++)
				{
					if (party.encounterenemies[i] == target)
					{
						party.encounterenemies.splice(i, 1);
						i--;
					}
				}
				
				removeFromEngagements(party, target);
				party.encounterexp += target.experience;
			}
		}
	}
}

function getResistances(target)
{
	let resistances = target.stats.resistances.slice();
	if (target.side == 0)
	{
		if (target.magicitems.mainHand != null)
		{
			for (let i = 0; i < target.magicitems.mainHand.effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.mainHand.effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.mainHand.effects.resistances[i]);
				}
			}
		}
		if (target.magicitems.offHand != null)
		{
			for (let i = 0; i < target.magicitems.offHand.effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.offHand.effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.offHand.effects.resistances[i]);
				}
			}
		}
		if (target.magicitems.clothes != null)
		{
			for (let i = 0; i < target.magicitems.clothes.effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.clothes.effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.clothes.effects.resistances[i]);
				}
			}
		}
		if (target.magicitems.armour != null)
		{
			for (let i = 0; i < target.magicitems.armour.effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.armour.effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.armour.effects.resistances[i]);
				}
			}
		}
		if (target.magicitems.accessories[0] != null)
		{
			for (let i = 0; i < target.magicitems.accessories[0].effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.accessories[0].effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.accessories[0].effects.resistances[i]);
				}
			}
		}
		if (target.magicitems.accessories[1] != null)
		{
			for (let i = 0; i < target.magicitems.accessories[1].effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.accessories[1].effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.accessories[1].effects.resistances[i]);
				}
			}
		}
		if (target.magicitems.accessories[2] != null)
		{
			for (let i = 0; i < target.magicitems.accessories[2].effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.accessories[2].effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.accessories[2].effects.resistances[i]);
				}
			}
		}
		if (target.magicitems.accessories[3] != null)
		{
			for (let i = 0; i < target.magicitems.accessories[3].effects.resistances.length; i++)
			{
				if (resistances.indexOf(target.magicitems.accessories[3].effects.resistances[i]) == -1)
				{
					resistances.push(target.magicitems.accessories[3].effects.resistances[i]);
				}
			}
		}
	}
	
	return resistances;
}

function getWeaknesses(target)
{
	let weaknesses = target.stats.weaknesses.slice();
	
	return weaknesses;
}

function attackTarget(party, attacker, target)
{
	let attackroll = 0;
	if (attacker.side == 0)
		attackroll = getPartyMemberStat(attacker, "damageMod");
	for (let i = 0; i < Math.floor(attacker.stats.damagedienum); i++)
	{
		attackroll += Math.floor(Math.random()*Math.floor(attacker.stats.damagediesides))+1;
	}
	
	let totalWoundThreshold = target.stats.woundThreshold;
	if (target.side == 0)
	{
		totalWoundThreshold = getPartyMemberStat(target, "woundThreshold");
	}
	
	targetresistances = getResistances(target);
	targetweaknesses = getWeaknesses(target);
	
	for (let i = 0; i < targetresistances.length; i++)
	{
		if (attacker.stats.damagetype == targetresistances[i])
		{
			totalWoundThreshold = totalWoundThreshold * 2;
			i += targetresistances.length;
		}
	}
	
	for (let i = 0; i < targetweaknesses.length; i++)
	{
		if (attacker.stats.damagetype == targetweaknesses[i])
		{
			totalWoundThreshold = Math.floor(totalWoundThreshold / 2);
			i += targetweaknesses.length;
		}
	}
	
	if (attackroll > (totalWoundThreshold * 2))
	{
		woundTarget(party, target, 2, attacker)
	}
	else if (attackroll > totalWoundThreshold)
	{
		woundTarget(party, target, 1, attacker)
	}
	else if (attackroll > (totalWoundThreshold / 2))
	{
		woundTarget(party, target, 0, attacker)
	}
}

function filterByCreatureLevel(creature)
{
	if (creature.stats.level <= this)
			return true;
	return false;
}

function getRandomCreatureOfLevel(creaturelevel)
{
	let tempcreaturelist = adventure_sim.enemyblueprints.filter(filterByCreatureLevel,creaturelevel);
	
	let creature = getCreatureByBlueprintID(tempcreaturelist[Math.floor(Math.random()*tempcreaturelist.length)].id);
	
	return creature;
}

function addToInitiativeList(party, creature, side)
{
	if (side == 0)
	{
		party.encounterallies.push(creature);
		party.encounterinitiative.push({ combatant: creature, initiative: 0 });
	}
	else
	{
		party.encounterenemies.push(creature);
		party.encounterinitiative.push({ combatant: creature, initiative: 0 });
	}
}

function getEngagedTarget(party, combatant)
{
	for (let i = 0; i < party.encounterengagements.length; i++)
	{
		if (party.encounterengagements[i].attacker == combatant)
			return party.encounterengagements[i].defender;
	}
	
	if (combatant.side == 0)
	{
		tempenemylist = party.encounterenemies.slice();
	
		for (let i = 0; i < tempenemylist.length; i++)
		{
			for (let j = 0; j < party.encounterengagements.length; j++)
			{
				if (tempenemylist[i] == party.encounterengagements[j].attacker)
				{
					tempenemylist.splice(i, 1);
					i--;
					j += party.encounterengagements.length;
				}
			}
		}
		
		if (tempenemylist.length > 0)
		{
			let randomtarget = tempenemylist[Math.floor(Math.random()*tempenemylist.length)];
			party.encounterengagements.push({ attacker: combatant, defender: randomtarget});
			party.encounterengagements.push({ attacker: randomtarget, defender: combatant});
			
			return randomtarget;
		}
		else
		{
			let randomtarget = party.encounterenemies[Math.floor(Math.random()*party.encounterenemies.length)];
			party.encounterengagements.push({ attacker: combatant, defender: randomtarget});
			
			return randomtarget;
		}
	}
	else
	{
		tempenemylist = party.members.slice();
	
		for (let i = 0; i < tempenemylist.length; i++)
		{
			if (tempenemylist[i].cstatus == "dead")
			{
				tempenemylist.splice(i, 1);
				i--;
			}				
			else
			{
				for (let j = 0; j < party.encounterengagements.length; j++)
				{
					if (tempenemylist[i] == party.encounterengagements[j].attacker)
					{
						tempenemylist.splice(i, 1);
						i--;
						j += party.encounterengagements.length;
					}
				}
			}
		}
		
		if (tempenemylist.length > 0)
		{
			let randomtarget = tempenemylist[Math.floor(Math.random()*tempenemylist.length)];
			party.encounterengagements.push({ attacker: combatant, defender: randomtarget});
			party.encounterengagements.push({ attacker: randomtarget, defender: combatant});
			
			return randomtarget;
		}
		else
		{
			let randomtarget = party.members[Math.floor(Math.random()*party.members.length)];
			while (randomtarget.cstatus == "dead")
			{
				randomtarget = party.members[Math.floor(Math.random()*party.members.length)];
			}
			party.encounterengagements.push({ attacker: combatant, defender: randomtarget});
			
			return randomtarget;
		}
	}
}

function removeFromEngagements(party, combatant)
{
	for (let i = 0; i < party.encounterengagements.length; i++)
	{
		if (party.encounterengagements[i].attacker == combatant || party.encounterengagements[i].defender == combatant)
		{
			party.encounterengagements.splice(i, 1);
			i--;
		}
	}
}

function doCombatTurn(party, combatant)
{
	/*
	if (side == 0 && party.encounterlevel > partyTotalLevel(party))
	{
		addStatusTo(combatant,"fled");
	}
	*/
	let target = getEngagedTarget(party, combatant);
	
	attackTarget(party, combatant, target);
	
}

function givePartyMemberExp(party, partymember, experience)
{
	partymember.stats.exp += experience;
	let levelup = false;
	let charclass = findClassByName(partymember.classname);
	while (partymember.stats.exp >= expLevelUpRequirement(partymember.stats.level))
	{
		levelup = true;
		partymember.stats.level++;
		partymember.stats.woundLevelUp += charclass.stats.levelup.wounds;
		while (partymember.stats.woundLevelUp > 1)
		{
			partymember.stats.woundLevelUp--;
			partymember.stats.woundMax++;
		}
		partymember.stats.damageModLevelUp += charclass.stats.levelup.damageMod;
		while (partymember.stats.damageModLevelUp > 1)
		{
			partymember.stats.damageModLevelUp--;
			partymember.stats.damageMod++;
		}
	}
	if (levelup)
		addToAdventureSimLog(party, partymember.name + " levels up to level " + partymember.stats.level);
}

function expLevelUpRequirement(characterlevel)
{
	return (375*characterlevel*(characterlevel+1));
}


function removeStatusFrom(p, statustoremove)
{
	let currentstatus = p.cstatus.split(" ");
	let position = -1;
	for (let i = 0; i < currentstatus.length; i++)
	{
		if (currentstatus[i] == statustoremove)
			position = i;
	}
	if (isNaN(parseInt(currentstatus[position+1])))
	{
		p.cstatus = argumentsbacktostring(currentstatus,0,position) + " " + argumentsbacktostring(currentstatus,position+1);
	}
	else
	{
		p.cstatus = argumentsbacktostring(currentstatus,0,position) + " " + argumentsbacktostring(currentstatus,position+2);
	}
	p.cstatus = p.cstatus.trim();
}

function changeStatusAmountOn(p, statustodecrease, change)
{
	let currentstatus = p.cstatus.split(" ");
	let position = -1;
	for (let i = 0; i < currentstatus.length; i++)
	{
		if (currentstatus[i] == statustodecrease)
			position = i;
	}
	
	amount = parseInt(currentstatus[position+1]);
	
	if (isNaN(amount))
	{
		return null;
	}
	
	amount += change;
	
	if (amount < 1)
	{
		p.cstatus = argumentsbacktostring(currentstatus,0,position) + " " + argumentsbacktostring(currentstatus,position+2);
	}
	else
	{
		p.cstatus = argumentsbacktostring(currentstatus,0,position) + " " + statustodecrease + " " + amount + " " + argumentsbacktostring(currentstatus,position+2);
	}
	p.cstatus = p.cstatus.trim();
}

function addStatusTo(p, statustoadd, amount = -1)
{
	let currentstatus = p.cstatus.split(" ");
	for (let i = 0; i < currentstatus.length; i++)
	{
		if (currentstatus[i] == statustoadd)
		{
			if (amount > 0 && amount > currentstatus[i+1])
			{
				currentstatus[i+1] = amount;
				return true;
			}
			else
			{
				return false;
			}
		}
	}
	p.cstatus += " " + statustoadd;
	if (amount > 0)
		p.cstatus += " " + amount;
	return true;
}

function removeWorstWound(partymember)
{
	let highestwoundval = -1;
	let highestwoundind = -1;
	
	for (let i = 0; i < partymember.stats.wounds.length; i++)
	{
		if (partymember.stats.wounds[i] > highestwoundval)
		{
			highestwoundval = partymember.stats.wounds[i];
			highestwoundind = i;
		}
	}
	
	if (highestwoundind > -1)
		partymember.stats.wounds.splice(highestwoundind, 1);
}

function partyRest(party)
{
	for (let i = 0; i < party.members.length; i++)
	{
		for (let j = 0; j < party.members[i].stats.healRate; j++)
		{
			removeWorstWound(party.members[i]);
		}
	}
}

function combatRound(party)
{
	if (party.currentinitiative >= party.encounterinitiative.length)
		party.currentinitiative = 0;
	
	//console.log("combat " + party.currentinitiative);
	
	let combatant = party.encounterinitiative[party.currentinitiative].combatant;
	
	if (combatant.cstatus != "dead")
	{
		doCombatTurn(party, combatant);
	}
	
	party.currentinitiative++;
	
	if (party.encounterenemies.length == 0)
	{
		addToAdventureSimLog(party,party.name + " defeat the " + party.encountersummary);
		if (party.questfight)
		{
			party.questsucceed = true;
		}
		
		let livingpartycount = 0;
		for (let i = 0; i < party.members.length; i++)
		{
			if (party.members[i].cstatus != "dead")
				livingpartycount++;
		}
		
		for (let i = 0; i < party.members.length; i++)
		{
			if (party.members[i].cstatus != "dead")
				givePartyMemberExp(party, party.members[i], Math.ceil(party.encounterexp / livingpartycount));
		}
		party.encounterexp = 0;
		party.currentlyinencounter = false;
		partyRest(party);
	}
	else if (isPartyDead(party))
	{
		addToAdventureSimLog(party,party.name + " have been defeated by the " + party.encountersummary);
		party.currentlyinencounter = false;
		saveAdventuringParties();
	}
}

function isPartyDead(party)
{
	for (let i = 0; i < party.members.length; i++)
	{
		if (party.members[i].cstatus != "dead")
			return false;
	}
	
	return true;
}

function randomLivingPartyMember(party)
{
	let character;
	do {
		character = party.members[Math.floor(Math.random()*party.members.length)];
	}
	while (character.cstatus == "dead");
	
	return character;
}

function filterByRoomLevel(room)
{
	if (room.level <= this)
		return true;
	return false;
}

function generateQuestDungeon(rooms, questlevel)
{
	let dungeonrooms = [];
	
	let potentialrooms = adventure_sim.dungeonrooms.filter(filterByRoomLevel, questlevel);
	let hasfinalroom = false;
	
	for (let i = 0; i < rooms; i++)
	{
		let randomroom = Math.floor(Math.random()*potentialrooms.length);
		let newroom = potentialrooms[randomroom];
		let rerolls = 0;
		while (newroom.id == "questfight" && rerolls < 3)
		{
			rerolls++;
			randomroom = Math.floor(Math.random()*potentialrooms.length);
			newroom = potentialrooms[randomroom];
		}
		
		if (newroom.id == "questfight")
		{
			i += rooms;
			hasfinalroom = true;
		}
		
		dungeonrooms.push(newroom);
	}
	
	if (!hasfinalroom)
	{
		dungeonrooms.push({ id: "questfight", trap: { name: "", experience: 0, damagetype: "", damagedienum: 0, damagediesides: 0} });
	}
	
	let dungeon = [];
	
	for (let i = 0; i < dungeonrooms.length; i++)
	{
		let room = 
		{
			id: dungeonrooms[i].id,
			experience: dungeonrooms[i].experience,
			solutions: [],
			fight: [],
			trap: 
			{
				name: dungeonrooms[i].trap.name,
				damagetype: dungeonrooms[i].trap.damagetype,
				damagedienum: dungeonrooms[i].trap.damagedienum,
				damagediesides: dungeonrooms[i].trap.damagediesides
			}
		};
		
		if (room.id != "questfight")
		{
			for (let j = 0; j < dungeonrooms[i].solutions.length; j++)
			{
				let solutiondc = Math.floor(Math.random() * (dungeonrooms[i].solutions[j].dcmax - dungeonrooms[i].solutions[j].dcmin)) + dungeonrooms[i].solutions[j].dcmin;
				let solution =
				{
					type: dungeonrooms[i].solutions[j].type,
					bypasstext: dungeonrooms[i].solutions[j].bypasstext,
					skill: dungeonrooms[i].solutions[j].skill,
					dc: solutiondc,
					failure: dungeonrooms[i].solutions[j].failure,
					success: dungeonrooms[i].solutions[j].success
				}
				
				room.solutions.push(solution);
			}
			
			let randomenemycount = Math.floor(Math.random() * (dungeonrooms[i].fight.enemymax - dungeonrooms[i].fight.enemymin) + dungeonrooms[i].fight.enemymin);
			
			for (let j = 0; j < randomenemycount; j++)
			{
				let randomenemy = Math.floor(Math.random() * dungeonrooms[i].fight.enemylist.length);
				
				room.fight.push(dungeonrooms[i].fight.enemylist[randomenemy]);
			}
			
			for (let j = 0; j < dungeonrooms[i].fight.mandatoryenemies.length; j++)
			{
				room.fight.push(dungeonrooms[i].fight.mandatoryenemies[j]);
			}
		}
		
		dungeon.push(room);
	}
	
	return dungeon;
}

function initiateDungeonExplore(party)
{
	party.dungeonexplore = true;
	party.dungeonroomnum = 0;
	party.dungeon = generateQuestDungeon(Math.floor(Math.random()*2*party.quest.level)+1, party.quest.level);
}

function initiateRoomEncounter(party, room)
{
	for (let i = 0; i < room.fight.length; i++)
	{
		let enemy = getCreatureByBlueprintID(room.fight[i]);
		if (enemy != null)
			party.encounterenemies.push(enemy);
	}
	
	tempinitlist = [];
	party.encounterinitiative = [];
	for (let i = 0; i < party.members.length; i++)
	{
		tempinitlist.push({ combatant: party.members[i], initiative: party.members[i].stats.initiative + Math.random()*10+1 });
	}
	for (let i = 0; i < party.encounterenemies.length; i++)
	{
		tempinitlist.push({ combatant: party.encounterenemies[i], initiative: party.encounterenemies[i].stats.initiative + Math.random()*10+1 });
	}
	while (tempinitlist.length > 0)
	{
		let highest = 0;
		let selected = -1;
		for (let i = 0; i < tempinitlist.length; i++)
		{
			if (tempinitlist[i].initiative > highest)
				selected = i;
		}
		party.encounterinitiative.push(tempinitlist[selected]);
		tempinitlist.splice(selected,1);
	}
	
	party.encountersummary = getEnemySummary(party.encounterenemies);
	party.currentlyinencounter = true;
}

function initiateQuestEncounter(party, encounter)
{
	let parsedencounter = encounter.split(" ");
	for (let i = 0; i < parsedencounter.length; i++)
	{
		let enemy = getCreatureByBlueprintID(parsedencounter[i]);
		if (enemy != null)
			party.encounterenemies.push(enemy);
	}
	
	tempinitlist = [];
	party.encounterinitiative = [];
	for (let i = 0; i < party.members.length; i++)
	{
		tempinitlist.push({ combatant: party.members[i], initiative: party.members[i].stats.initiative + Math.random()*10+1 });
	}
	for (let i = 0; i < party.encounterenemies.length; i++)
	{
		tempinitlist.push({ combatant: party.encounterenemies[i], initiative: party.encounterenemies[i].stats.initiative + Math.random()*10+1 });
	}
	while (tempinitlist.length > 0)
	{
		let highest = 0;
		let selected = -1;
		for (let i = 0; i < tempinitlist.length; i++)
		{
			if (tempinitlist[i].initiative > highest)
				selected = i;
		}
		party.encounterinitiative.push(tempinitlist[selected]);
		tempinitlist.splice(selected,1);
	}
	
	party.encountersummary = getEnemySummary(party.encounterenemies);
	party.questfight = true;
	party.currentlyinencounter = true;
}

function initiateCombatEncounter(party, biome, climate)
{
	let encountertable;
	if (biome == "jungle")
	{
		if (climate == "extremely hot" || climate == "hot")
			encountertable = getEncounterTableByName("hot jungle");
		else if (climate == "temperate")
			encountertable = getEncounterTableByName("temperate jungle");
		else if (climate == "extremely cold" || climate == "cold")
			encountertable = getEncounterTableByName("cold jungle");
	}
	else if (biome == "forest")
	{
		if (climate == "extremely hot" || climate == "hot")
			encountertable = getEncounterTableByName("hot forest");
		else if (climate == "temperate")
			encountertable = getEncounterTableByName("temperate forest");
		else if (climate == "extremely cold" || climate == "cold")
			encountertable = getEncounterTableByName("cold forest");
	}
	else if (biome == "grasslands")
	{
		if (climate == "extremely hot" || climate == "hot")
			encountertable = getEncounterTableByName("hot grasslands");
		else if (climate == "temperate")
			encountertable = getEncounterTableByName("temperate grasslands");
		else if (climate == "extremely cold" || climate == "cold")
			encountertable = getEncounterTableByName("cold grasslands");
	}
	else if (biome == "plains")
	{
		if (climate == "extremely hot" || climate == "hot")
			encountertable = getEncounterTableByName("hot plains");
		else if (climate == "temperate")
			encountertable = getEncounterTableByName("temperate plains");
		else if (climate == "extremely cold" || climate == "cold")
			encountertable = getEncounterTableByName("cold plains");
	}
	else if (biome == "desolate")
	{
		if (climate == "extremely hot" || climate == "hot")
			encountertable = getEncounterTableByName("hot desolate");
		else if (climate == "temperate")
			encountertable = getEncounterTableByName("temperate desolate");
		else if (climate == "extremely cold" || climate == "cold")
			encountertable = getEncounterTableByName("cold desolate");
	}
	
	let encounter = encountertable.encounters[Math.floor(Math.random()*encountertable.encounters.length)].split(" ");
	for (let i = 0; i < encounter.length; i++)
	{
		let enemy = getCreatureByBlueprintID(encounter[i]);
		if (enemy != null)
			party.encounterenemies.push(enemy);
	}
	
	
	tempinitlist = [];
	party.encounterinitiative = [];
	for (let i = 0; i < party.members.length; i++)
	{
		tempinitlist.push({ combatant: party.members[i], initiative: party.members[i].stats.initiative + Math.random()*10+1 });
	}
	for (let i = 0; i < party.encounterenemies.length; i++)
	{
		tempinitlist.push({ combatant: party.encounterenemies[i], initiative: party.encounterenemies[i].stats.initiative + Math.random()*10+1 });
	}
	while (tempinitlist.length > 0)
	{
		let highest = 0;
		let selected = -1;
		for (let i = 0; i < tempinitlist.length; i++)
		{
			if (tempinitlist[i].initiative > highest)
				selected = i;
		}
		party.encounterinitiative.push(tempinitlist[selected]);
		tempinitlist.splice(selected,1);
	}
	party.encountersummary = getEnemySummary(party.encounterenemies);
	party.questfight = false;
	party.currentlyinencounter = true;
}

function getNextInQueue(queue)
{
	let lowest = 9999999;
	let found = -1;
	for(let i = 0; i < queue.length; i++)
	{
		if (queue[i].priority < lowest)
		{
			lowest = queue[i].priority;
			found = i;
		}
	}
	
	return found;
}

function arrayContainsPosition(array, position)
{
	for(let i = 0; i < array.length; i++)
	{
		if (array[i].x == position.x && array[i].y == position.y)
		{
			return true;
		}
	}
	return false;
}

function addToDictionary(dictionary, key, value)
{
	for(let i = 0; i < dictionary.length; i++)
	{
		if (dictionary[i].key.x == key.x && dictionary[i].key.y == key.y)
		{
			dictionary[i].value = value;
			return;
		}
	}
	
	dictionary.push({ key: key, value: value });
}

function getFromDictionary(dictionary, key)
{
	for(let i = 0; i < dictionary.length; i++)
	{
		if (dictionary[i].key.x == key.x && dictionary[i].key.y == key.y)
		{
			return dictionary[i].value;
		}
	}
	
	return null;
}

function dictionaryToDirection(dictionary, end, start)
{
	let backwards = [];
	let forwards = [];
	let current = end;
	backwards.push(end)
	while (current.x != start.x || current.y != start.y)
	{
		current = getFromDictionary(dictionary, current);
		backwards.push(current);
	}
	
	for (let i = backwards.length-1; i >= 0; i--)
	{
		forwards.push(backwards[i]);
	}
	
	return forwards;
}

function pathHeuristic(a, b)
{
	return Math.ceil(Math.abs(a.x - b.x) + Math.abs(a.y - b.y));
}

function pathToPosition(start, end)
{
	let frontierQueue = [{ x: start.x, y: start.y, priority: 0 }];
	let dictionaryCameFrom = [];
	let dictionaryCostSoFar = [];
	let closest = { x: start.x, y: start.y };
	let closestHexHeuristic = 99999999;
	let newcost = 0;
	let oldcost;
	let priority;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		current = frontierQueue[nextinqueue];
		frontierQueue.splice(nextinqueue,1);
		
		if (current.x == end.x && current.y == end.y)
		{
			console.log("path found");
			//console.log(dictionaryCameFrom);
			return dictionaryToDirection(dictionaryCameFrom, end, start);
		}
		
		let tempcost = getFromDictionary(dictionaryCostSoFar, current)
		if (tempcost != null)
		{
			newcost = tempcost;
			newcost += 1;
		}
		let connection = { x: current.x, y: current.y+1 };
		if (connection.y < asworld_height && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
		{
			tempcost = getFromDictionary(dictionaryCostSoFar, connection)
			if (tempcost != null)
			{
				oldcost = tempcost;
				if (newcost < oldcost)
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			else
			{
				addToDictionary(dictionaryCostSoFar, connection, newcost);
				priority = newcost + pathHeuristic(connection, end);
				if (priority - newcost < closestHexHeuristic)
				{
					closest = connection;
					closestHexHeuristic = priority - newcost;
				}
				frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
				addToDictionary(dictionaryCameFrom, connection, current);
			}
		}
		connection = { x: current.x, y: current.y-1 };
		if (connection.y > -1 && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
		{
			tempcost = getFromDictionary(dictionaryCostSoFar, connection)
			if (tempcost != null)
			{
				oldcost = tempcost;
				if (newcost < oldcost)
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			else
			{
				addToDictionary(dictionaryCostSoFar, connection, newcost);
				priority = newcost + pathHeuristic(connection, end);
				if (priority - newcost < closestHexHeuristic)
				{
					closest = connection;
					closestHexHeuristic = priority - newcost;
				}
				frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
				addToDictionary(dictionaryCameFrom, connection, current);
			}
		}
		if (current.x%2 == 0)
		{
			connection = { x: current.x+1, y: current.y };
			if (connection.x < asworld_width && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			connection = { x: current.x+1, y: current.y-1 };
			if (connection.x < asworld_width && connection.y > -1 && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			connection = { x: current.x-1, y: current.y };
			if (connection.x > -1 && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			connection = { x: current.x-1, y: current.y-1 };
			if (connection.x > -1 && connection.y > -1 && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
		}
		else
		{
			connection = { x: current.x+1, y: current.y+1 };
			if (connection.x < asworld_width && connection.y < asworld_height && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			connection = { x: current.x+1, y: current.y };
			if (connection.x < asworld_width && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			connection = { x: current.x-1, y: current.y+1 };
			if (connection.x > -1 && connection.y < asworld_height && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
			connection = { x: current.x-1, y: current.y };
			if (connection.x > -1 && asworldmap[connection.x+(connection.y*asworld_width)].sealevel > 0)
			{
				tempcost = getFromDictionary(dictionaryCostSoFar, connection)
				if (tempcost != null)
				{
					oldcost = tempcost;
					if (newcost < oldcost)
					{
						addToDictionary(dictionaryCostSoFar, connection, newcost);
						priority = newcost + pathHeuristic(connection, end);
						if (priority - newcost < closestHexHeuristic)
						{
							closest = connection;
							closestHexHeuristic = priority - newcost;
						}
						frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
						addToDictionary(dictionaryCameFrom, connection, current);
					}
				}
				else
				{
					addToDictionary(dictionaryCostSoFar, connection, newcost);
					priority = newcost + pathHeuristic(connection, end);
					if (priority - newcost < closestHexHeuristic)
					{
						closest = connection;
						closestHexHeuristic = priority - newcost;
					}
					frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
					addToDictionary(dictionaryCameFrom, connection, current);
				}
			}
		}
	}
	console.log("full path not found");
	return dictionaryToDirection(dictionaryCameFrom, closest, start)
}


function findNearestLandmark(xpos, ypos, landmark, probability = 1)
{
	let size = 1951; // radius 24
	let totalloops = 1;
	let sizecovered = 7;
	
	while (size > sizecovered)
	{
		totalloops++;
		sizecovered += totalloops*6;
	}
	
	let startpos = { x: xpos, y: ypos };
	let currenthex = { x:0, y:0 };
	let curdirdur = 0;
	let dirduration = 1;
	let loopend = 6;
	let sizereached = 1;
	let landmarkfound = false;
	for(let j = 0; j < totalloops && sizereached < size; j++)
	{
		let direction = 3;
		if (startpos.x  % 2 == 1)
		{
			startpos.x = startpos.x+1;
		}
		else
		{
			startpos.x = startpos.x+1;
			startpos.y = startpos.y-1;
		}
		currenthex.x = startpos.x;
		currenthex.y = startpos.y;
		
		for(let i = 0; i < loopend && sizereached < size; i++)
		{
			if (currenthex.x < asworld_width && currenthex.y < asworld_height && currenthex.x > -1 && currenthex.y > -1 && asworldmap[currenthex.x + (currenthex.y*asworld_width)].landmark == landmark)
			{
				landmarkfound = true;
				if (Math.random() < probability)
				{
					let start = { x: xpos, y: ypos };
					let end = { x: currenthex.x, y: currenthex.y };
					let pathToTown = pathToPosition(start, end);
					
					if (pathToTown[pathToTown.length-1].x == end.x && pathToTown[pathToTown.length-1].y == end.y)
						return { x: currenthex.x, y: currenthex.y };
				}
			}
			
			if (currenthex.x%2 == 1)
			{
				if (direction == 5)
				{
					currenthex.x--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
					currenthex.y++;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
					currenthex.y++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			} 
			else
			{
				if (direction == 5)
				{
					currenthex.x--;
					currenthex.y--;
				}
				else if (direction == 4)
				{
					currenthex.x--;
				}
				else if (direction == 3)
				{
					currenthex.y++;
				}
				else if (direction == 2)
				{
					currenthex.x++;
				}
				else if (direction == 1)
				{
					currenthex.x++;
					currenthex.y--;
				}
				else if (direction == 0)
				{
					currenthex.y--;
				}
			}
			curdirdur++;
			if (curdirdur == dirduration)
			{
				curdirdur = 0;
				direction++;
				if (direction == 6)
					direction = 0;
			}
			sizereached++;
		}
		
		loopend += 6;
		dirduration++;
	}
	if (landmarkfound)
		return false;
	return null;
}

function getEnemySummary(enemies)
{
	let enemycounts = []
	let found = false;
	for (let i = 0; i < enemies.length; i++)
	{
		for (let j = 0; j < enemycounts.length; j++)
		{
			if (enemies[i].id == enemycounts[j].id)
			{
				found = true;
				enemycounts[j].count++;
				j += enemycounts.length;
			}
		}
		if (!found)
		{
			enemycounts.push({ id: enemies[i].id, count: 1 });
		}
	}
	
	let summary = "";
	for (let i = 0; i < enemycounts.length; i++)
	{
		let enemy = getCreatureByBlueprintID(enemycounts[i].id);
		if (enemycounts[i].count > 1)
			summary += enemy.plural;
		else
			summary += enemy.name;
		
		if (i < enemycounts.length-2)
			summary += ", ";
		else if (i == enemycounts.length-2)
			summary += " and ";
	}
	
	return summary;
}

function partyActionAdventure(party)
{
	if (party.questlocation < party.questpath.length-1)
	{
		party.questlocation++;
		party.xpos = party.questpath[party.questlocation].x;
		party.ypos = party.questpath[party.questlocation].y;
	}
	
	let positionbiome = asworldmap[party.xpos+(party.ypos*asworld_width)].biome;
	let positionclimate = asworldmap[party.xpos+(party.ypos*asworld_width)].climate;
	let positionlandmark = asworldmap[party.xpos+(party.ypos*asworld_width)].landmark;
	
	// encounter logic
	if (party.questlocation > 0 && Math.random() < 0.12)
	{
		if (positionlandmark != "town" && positionlandmark != "city" && positionlandmark != "village")
		{
			party.questfight = false;
			initiateCombatEncounter(party, positionbiome, positionclimate);
		}
	}
	else if (party.questlocation == party.questpath.length-1)
	{
		addToAdventureSimLog(party, party.name + " make it to the " + positionlandmark);
		clearPriority(party.priorities,"adventure");
		addPriority(party.priorities,"dungeon");
		initiateDungeonExplore(party);
	}
}

function skillCheckOdds(partymember, skill, dc)
{
	let skillvalue = getPartyMemberStat(partymember, skill);
	let successneeds = dc - skillvalue;
	let odds = Math.max(Math.min((21 - successneeds) / 20, 1), 0);
	
	return odds;
}

function roomResolutionOddCalc(party, solution)
{
	let livingpartycount = 0;
	for (let i = 0; i < party.members.length; i++)
	{
		if (party.members[i].cstatus != "dead")
			livingpartycount++;
	}
	
	if (solution.type == "skillone")
	{
		let bestmemberodds = 0;
		let bestmemberi = -1;
		for (let i = 0; i < party.members.length; i++)
		{
			if (party.members[i].cstatus != "dead")
			{
				let odds = skillCheckOdds(party.members[i], solution.skill, solution.dc);
				if (odds > bestmemberodds)
				{
					bestmemberodds = odds;
					bestmemberi = i;
				}
			}
		}
		return { odds: bestmemberodds, member: bestmemberi };
	}
	
	if (solution.type == "skillall")
	{
		let totalodds = 1;
		for (let i = 0; i < party.members.length; i++)
		{
			if (party.members[i].cstatus != "dead")
			{
				let odds = skillCheckOdds(party.members[i], solution.skill, solution.dc);
				totalodds *= odds;
			}
		}
		return { odds: totalodds, member: -1 };
	}
	
	if (solution.type == "fight")
	{
		//don't do odds, just do as 25% ?
		
		return { odds: 0.25, member: -1 };
	}
}

function resolveRoomViaSolution(party, room, solution, resolver)
{
	if (solution.type == "fight")
	{
		initiateRoomEncounter(party, room);
	}
	else
	{
		let resolveOdds = roomResolutionOddCalc(party, solution);
		let randomroll = Math.random();
		
		if (randomroll < resolveOdds.odds)
		{
			if (solution.type == "skillone")
			{
				addToAdventureSimLog(party,party.members[resolver].name + " " + solution.bypasstext + " " + party.dungeon[party.dungeonroomnum].trap.name);
			}
			else if (solution.type == "skillall")
			{
				addToAdventureSimLog(party,party.name + " " + solution.bypasstext + " " + party.dungeon[party.dungeonroomnum].trap.name);
			}
			
			let livingpartycount = 0;
			for (let i = 0; i < party.members.length; i++)
			{
				if (party.members[i].cstatus != "dead")
					livingpartycount++;
			}
			
			for (let i = 0; i < party.members.length; i++)
			{
				if (party.members[i].cstatus != "dead")
					givePartyMemberExp(party, party.members[i], Math.ceil(party.dungeon[party.dungeonroomnum].experience / livingpartycount));
			}
		}
		else
		{
			if (solution.failure == "fight")
			{
				initiateRoomEncounter(party, room)
			}
			else if (solution.failure == "hurtone")
			{
				let attacker = 
				{
					name: party.dungeon[party.dungeonroomnum].trap.name,
					stats: 
					{
						damagetype: party.dungeon[party.dungeonroomnum].trap.damagetype,
						damagedienum: party.dungeon[party.dungeonroomnum].trap.damagedienum,
						damagediesides: party.dungeon[party.dungeonroomnum].trap.damagediesides,
					}
				}
				
				attackTarget(party, attacker, party.members[resolver]);
				addToAdventureSimLog(party,party.members[resolver].name + " sets off " + party.dungeon[party.dungeonroomnum].trap.name);
				
			}
			else if (solution.failure == "hurtall")
			{
				let attacker = 
				{
					name: party.dungeon[party.dungeonroomnum].trap.name,
					stats: 
					{
						damagetype: party.dungeon[party.dungeonroomnum].trap.damagetype,
						damagedienum: party.dungeon[party.dungeonroomnum].trap.damagedienum,
						damagediesides: party.dungeon[party.dungeonroomnum].trap.damagediesides,
					}
				}
				
				for (let i = 0; i < party.members.length; i++)
				{
					if (party.members[i].cstatus != "dead")
						attackTarget(party, attacker, party.members[i]);
				}
				
				addToAdventureSimLog(party,"Someone sets off " + party.dungeon[party.dungeonroomnum].trap.name);
			}
		}
	}
	
	
	
	party.dungeonroomnum++;
}

function partyActionDungeon(party)
{
	if (party.dungeon[party.dungeonroomnum].id == "questfight")
	{
		addToAdventureSimLog(party, party.name + " find the targets!");
		clearPriority(party.priorities,"dungeon");
		addPriority(party.priorities,"town");
		initiateQuestEncounter(party, party.quest.encounters[Math.floor(Math.random()*party.quest.encounters.length)]);
		party.dungeonexplore = false;
		party.dungeoncomplete = true;
		party.dungeon = [];
		
		return;
	}
	
	let roomsolutionodds = [];
	let totalsolutionodds = 0;
	let avgsolutionodds = 0;
	let highestsolutionodds = 0;
	
	for (let i = 0; i < party.dungeon[party.dungeonroomnum].solutions.length; i++)
	{
		let roomodds = roomResolutionOddCalc(party, party.dungeon[party.dungeonroomnum].solutions[i]);
		roomsolutionodds.push(roomodds);
		totalsolutionodds += roomodds.odds;
		if (roomodds.odds > highestsolutionodds)
			highestsolutionodds = roomodds.odds;
	}
	
	avgsolutionodds = totalsolutionodds / party.dungeon[party.dungeonroomnum].solutions.length;
	
	let consideredsolutions = [];
	
	for (let i = 0; i < roomsolutionodds.length; i++)
	{
		if (roomsolutionodds[i].odds > (highestsolutionodds - (avgsolutionodds / 3)))
		{
			consideredsolutions.push({ index: i, resolver: roomsolutionodds[i].member });
		}
	}
	
	let chosensolution = Math.floor(Math.random()*consideredsolutions.length);
	
	resolveRoomViaSolution(party, party.dungeon[party.dungeonroomnum], party.dungeon[party.dungeonroomnum].solutions[consideredsolutions[chosensolution].index], consideredsolutions[chosensolution].resolver);
	
}

function partyActionGoToTown(party)
{
	
	if (party.questlocation > 0)
	{
		party.questlocation--;
		party.xpos = party.questpath[party.questlocation].x;
		party.ypos = party.questpath[party.questlocation].y;
	}
	
	
	let positionbiome = asworldmap[party.xpos+(party.ypos*asworld_width)].biome;
	let positionclimate = asworldmap[party.xpos+(party.ypos*asworld_width)].climate;
	let positionlandmark = asworldmap[party.xpos+(party.ypos*asworld_width)].landmark;
	
	// encounter logic
	if (party.questlocation > 0 && Math.random() < 0.1)
	{
		if (positionlandmark != "town" && positionlandmark != "city" && positionlandmark != "village")
		{
			party.questfight = false;
			initiateCombatEncounter(party, positionbiome, positionclimate);
		}
	}
	else if (party.questlocation == 0)
	{
		// in town stuff TO DO
		addToAdventureSimLog(party, party.name + " return to the " + positionlandmark);
		onReturnToTown(party);
		party.cstatus = "intown";
	}
}

function partyGetAction(party)
{
	if (party.questsucceed)
	{
		partyActionGoToTown(party);
	}
	else if (party.dungeonexplore)
	{
		partyActionDungeon(party);
	}
	else
	{
		partyActionAdventure(party);
	}
}

function simulateAdventuring(party)
{
	if (!party.currentlyinencounter && !isPartyDead(party))
	{
		partyGetAction(party);
	}
	
	while (party.currentlyinencounter)
	{
		combatRound(party);
	}
}

function filterByItLvl(itemproperty)
{
	if (itemproperty.itlvl == this)
			return true;
	return false;
}

function getItemPropertyById(itempropertyid)
{
	for (let i = 0; i < adventure_sim.itemproperties.length; i++)
	{
		if (adventure_sim.itemproperties[i].id == itempropertyid)
			return adventure_sim.itemproperties[i];
	}
	return null;
}

function createAdventureSimItem(itemlevel)
{
	let tempitemproperties = adventure_sim.itemproperties.filter(filterByItLvl,itemlevel);
	
	if (tempitemproperties.length == 0)
	{
		console.log("no properties found of level: " + itemlevel);
		return null;
	}
	
	let randomproperty = tempitemproperties[Math.floor((Math.random()*tempitemproperties.length))];
	let itemslot = randomproperty.ittypes[Math.floor((Math.random()*randomproperty.ittypes.length))];
	let itemname;
	
	if (itemslot == "mainhand")
		itemname = adventure_sim.itemnames.mainhand[Math.floor(Math.random()*adventure_sim.itemnames.mainhand.length)];
	else if (itemslot == "offhand")
		itemname = adventure_sim.itemnames.offhand[Math.floor(Math.random()*adventure_sim.itemnames.offhand.length)];
	else if (itemslot == "clothes")
		itemname = adventure_sim.itemnames.clothes[Math.floor(Math.random()*adventure_sim.itemnames.clothes.length)];
	else if (itemslot == "armour")
		itemname = adventure_sim.itemnames.armour[Math.floor(Math.random()*adventure_sim.itemnames.armour.length)];
	else if (itemslot == "accessory")
		itemname = adventure_sim.itemnames.accessory[Math.floor(Math.random()*adventure_sim.itemnames.accessory.length)];
	
	itemname += " " + randomproperty.name;
	
	let item = { 
		itlvl: itemlevel,
		name: itemname,
		slot: itemslot,
		effects: {
			damageMod: randomproperty.effects.damageMod,
			woundMaxMod: randomproperty.effects.woundMaxMod,
			woundThresholdMod: randomproperty.effects.woundThresholdMod,
			healRateMod: randomproperty.effects.healRateMod,
			initiativeMod: randomproperty.effects.initiativeMod,
			skillMod: {
				acrobatics: randomproperty.effects.skillMod.acrobatics,
				animalHandling: randomproperty.effects.skillMod.animalHandling,
				arcana: randomproperty.effects.skillMod.arcana,
				athletics: randomproperty.effects.skillMod.athletics,
				deception: randomproperty.effects.skillMod.deception,
				insight: randomproperty.effects.skillMod.insight,
				intimidation: randomproperty.effects.skillMod.intimidation,
				investigation: randomproperty.effects.skillMod.investigation,
				medicine: randomproperty.effects.skillMod.medicine,
				nature: randomproperty.effects.skillMod.nature,
				perception: randomproperty.effects.skillMod.perception,
				performance: randomproperty.effects.skillMod.performance,
				persuasion: randomproperty.effects.skillMod.persuasion,
				religion: randomproperty.effects.skillMod.religion,
				sleightOfHand: randomproperty.effects.skillMod.sleightOfHand,
				stealth: randomproperty.effects.skillMod.stealth,
				survival: randomproperty.effects.skillMod.survival
				},
			resistances: []
			}
		};
	
	for (let i = 0; i < randomproperty.effects.resistances.length; i++)
	{
		item.effects.resistances.push(randomproperty.effects.resistances[i]);
	}
	
	return item;
}

function unequipAdventurerWithItem(adventurer, item)
{
	if (item.slot == "mainhand")
	{
		adventurer.magicitems.mainhand = null;
	}
	else if (item.slot == "offhand")
	{
		adventurer.magicitems.offHand = null;
	}
	else if (item.slot == "clothes")
	{
		adventurer.magicitems.clothes = null;
	}
	else if (item.slot == "armour")
	{
		adventurer.magicitems.armour = null;
	}
	else if (item.slot == "accessory")
	{
		if (adventurer.magicitems.accessories[0] != null && adventurer.magicitems.accessories[0] == item)
			adventurer.magicitems.accessories[0] = null;
		else if (adventurer.magicitems.accessories[1] != null && adventurer.magicitems.accessories[1] == item)
			adventurer.magicitems.accessories[1] = null;
		else if (adventurer.magicitems.accessories[2] != null && adventurer.magicitems.accessories[2] == item)
			adventurer.magicitems.accessories[2] = null;
		else if (adventurer.magicitems.accessories[3] != null && adventurer.magicitems.accessories[3] == item)
			adventurer.magicitems.accessories[3] = null;
	}
}

function equipAdventurerWithItem(adventurer, item)
{
	if (item.slot == "mainhand")
	{
		adventurer.magicitems.mainHand = item;
	}
	else if (item.slot == "offhand")
	{
		adventurer.magicitems.offHand = item;
	}
	else if (item.slot == "clothes")
	{
		adventurer.magicitems.clothes = item;
	}
	else if (item.slot == "armour")
	{
		adventurer.magicitems.armour = item;
	}
	else if (item.slot == "accessory")
	{
		if (adventurer.magicitems.accessories[0] == null)
			adventurer.magicitems.accessories[0] = item;
		else if (adventurer.magicitems.accessories[1] == null)
			adventurer.magicitems.accessories[1] = item;
		else if (adventurer.magicitems.accessories[2] == null)
			adventurer.magicitems.accessories[2] = item;
		else if (adventurer.magicitems.accessories[3] == null)
			adventurer.magicitems.accessories[3] = item;
	}
}

function smartEquipUnequipAdventurer(adventurer, item)
{
	if (item.slot == "mainhand")
	{
		if (adventurer.magicitems.mainHand == null)
		{
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " equipped " + item.name + " in their main hand";
			return null;
		}
		else if (adventurer.magicitems.mainHand.itlvl < item.itlvl)
		{
			let lostitem = adventurer.magicitems.mainhand;
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " swapped " + lostitem.name + " for " + item.name + " in their main hand";
			return lostitem;
		}
		else
		{
			//return adventurer.name + " discarded " + item.name;
			return item;
		}
	}
	else if (item.slot == "offhand")
	{
		if (adventurer.magicitems.offHand == null)
		{
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " equipped " + item.name + " in their off hand";
			return null;
		}
		else if (adventurer.magicitems.offHand.itlvl < item.itlvl)
		{
			let lostitem = adventurer.magicitems.offHand;
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " swapped " + lostitem.name + " for " + item.name + " in their off hand";
			return lostitem;
		}
		else
		{
			//return adventurer.name + " discarded " + item.name;
			return item;
		}
	}
	else if (item.slot == "clothes")
	{
		if (adventurer.magicitems.clothes == null)
		{
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " equipped " + item.name + " as clothes";
			return null;
		}
		else if (adventurer.magicitems.clothes.itlvl < item.itlvl)
		{
			let lostitem = adventurer.magicitems.clothes;
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " swapped " + lostitem.name + " for " + item.name + " as clothes";
			return lostitem;
		}
		else
		{
			//return adventurer.name + " discarded " + item.name;
			return item;
		}
	}
	else if (item.slot == "armour")
	{
		if (adventurer.magicitems.armour == null)
		{
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " equipped " + item.name + " as armour";
			return null;
		}
		else if (adventurer.magicitems.armour.itlvl < item.itlvl)
		{
			let lostitem = adventurer.magicitems.armour;
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " swapped " + lostitem.name + " for " + item.name + " as armour";
			return lostitem;
		}
		else
		{
			//return adventurer.name + " discarded " + item.name;
			return item;
		}
	}
	else if (item.slot == "accessory")
	{
		if (adventurer.magicitems.accessories[0] == null || adventurer.magicitems.accessories[1] == null || adventurer.magicitems.accessories[2] == null || adventurer.magicitems.accessories[3] == null)
		{
			equipAdventurerWithItem(adventurer, item);
			//return adventurer.name + " equipped " + item.name + " as an accessory";
			return null;
		}
		else
		{
			lowestitlvl = 999;
			lowestiti = -1;
			for (let i = 0; i < 4; i++)
			{
				if (adventurer.magicitems.accessories[i].itlvl < lowestitlvl)
				{
					lowestitlvl = adventurer.magicitems.accessories[i].itlvl;
					lowestiti = i;
				}
			}
			
			if (lowestiti > -1)
			{
				let lostitem = adventurer.magicitems.accessories[lowestiti];
				unequipAdventurerWithItem(adventurer, adventurer.magicitems.accessories[lowestiti]);
				equipAdventurerWithItem(adventurer, item);
				//return adventurer.name + " swapped " + lostitem.name + " for " + item.name + " as an accessory";
				return lostitem;
			}
			else
			{
				//return adventurer.name + " discarded " + item.name;
				return item;
			}
		}
	}
}

function getPartyMemberWithLeastItems(party)
{
	let lowestitemcount = 999;
	let lowestitemmember = -1;
	for(let i = 0; i < party.length; i++)
	{
		let itemcount = 0;
		if (party[i].magicitems.mainHand != null)
			itemcount++;
		if (party[i].magicitems.offHand != null)
			itemcount++;
		if (party[i].magicitems.clothes != null)
			itemcount++;
		if (party[i].magicitems.armour != null)
			itemcount++;
		if (party[i].magicitems.accessories[0] != null)
			itemcount++;
		if (party[i].magicitems.accessories[1] != null)
			itemcount++;
		if (party[i].magicitems.accessories[2] != null)
			itemcount++;
		if (party[i].magicitems.accessories[3] != null)
			itemcount++;
		
		if (itemcount < lowestitemcount)
		{
			lowestitemcount = itemcount;
			lowestitemmember = i;
		}
	}
	
	return party[lowestitemmember];
}

function equipPartyWithItems(party, items)
{
	for(let i = 0; i < items.length; i++)
	{
		let tempmemberlist = party.members.slice();
		
		let itemallocated = false;
		
		while (tempmemberlist.length > 0 && !itemallocated)
		{
			let partymember = getPartyMemberWithLeastItems(tempmemberlist);
			let potentialdiscard = smartEquipUnequipAdventurer(partymember, items[i]);
			
			if (potentialdiscard == items[i])
			{
				tempmemberlist.splice(tempmemberlist.indexOf(partymember), 1);
			}
			else if (potentialdiscard != null)
			{
				addToAdventureSimLog(party, partymember.name + " took " +  items[i].name);
				itemallocated = true;
				items.push(potentialdiscard);
			}
			else
			{
				addToAdventureSimLog(party, partymember.name + " took " +  items[i].name);
				itemallocated = true;
			}
		}
		
		if (!itemallocated)
		{
			addToAdventureSimLog(party, items[i].name + " was discarded");
		}
	}
}

function getItemBlueprintFromId(id)
{
	for (let i = 0; i < adventure_sim.items.length; i++)
	{
		if (adventure_sim.items[i].id == id)
			return adventure_sim.items[i];
	}
	return null;
}

function questComplete(party)
{
	party.silverpieces += party.quest.reward.silverpieces;
	addToAdventureSimLog(party, party.name + " are awarded " +  party.quest.reward.silverpieces + " silver pieces");
	let itemcount = Math.floor(Math.random()*(party.quest.reward.itemrandom+1))+party.quest.reward.itemmin;
	let itemstobe = [];
	for (let i = 0; i < itemcount; i++)
	{
		itemstobe.push(getItemBlueprintFromId(party.quest.reward.items[Math.floor(Math.random()*party.quest.reward.items.length)]));
	}
	let items = [];
	for (let i = 0; i < itemstobe.length; i++)
	{
		let itlvl = itemstobe[i].itlvlmin + Math.floor(Math.random()*(itemstobe[i].itlvlrandom));
		let newitem = createAdventureSimItem(itlvl);
		if (newitem != null)
			items.push(newitem);
	}
	if (items.length > 0)
		equipPartyWithItems(party, items);
}

var MAX_QUEST_LEVEL = 9;

//filter where a quests level is equal to the passed 'this' variable
function filterQuestsByLevel(quest)
{
	if (quest.level == this)
			return true;
	return false;
}

function getRandomQuestOfLevel(level = -1)
{
	if (level == -1)
		level = Math.floor(Math.random()*MAX_QUEST_LEVEL)+1;
	if (level > MAX_QUEST_LEVEL)
		level = MAX_QUEST_LEVEL;
	
	availableQuests = adventure_sim.quests.filter(filterQuestsByLevel,level);
	
	return availableQuests[Math.floor(Math.random()*availableQuests.length)];
}

var REVIVE_COST = 750;

function onReturnToTown(party)
{
	if (party.questsucceed)
	{
		questComplete(party);
	}
	
	for (let i = 0; i < party.members.length; i++)
	{
		if (party.members[i].cstatus == "dead" && party.silverpieces >= REVIVE_COST)
		{
			party.members[i].cstatus = "good";
			party.silverpieces -= REVIVE_COST;
			addToAdventureSimLog(party, party.members[i].name + " was revived");
			addToPersonalLog(party.members[i], "Revived");
		}
	}
	
	saveAdventuringParties();
}

function startAdventure(partyid, questlevel)
{
	party = getPartyById(partyid);
	
	if (party == null)
		return "invalid party id";
	
	if (isPartyDead(party))
		return party.name + " are all dead";
	
	let partytotallevel = 0;
	let partymembercount = 0;
	for (let i = 0; i < party.members.length; i++)
	{
		if (party.members[i].cstatus != "dead")
		{
			partytotallevel += party.members[i].stats.level;
			partymembercount++;
		}
	}
	
	if (questlevel == null || isNaN(questlevel))
		questlevel = Math.max(Math.floor(partytotallevel / partymembercount), 1);
	
	party.cstatus = "good";
	party.quest = getRandomQuestOfLevel(questlevel);
	party.questcomplete = false;
	party.questsucceed = false;
	party.questlocation = 0;
	party.log = [];
	for (let i = 0; i < party.members.length; i++)
	{
		party.members[i].stats.wounds = [];
	}
	clearPriority(party.priorities,"town");
	addPriority(party.priorities,"adventure");
	let nearestquestsite = findNearestLandmark(party.xpos, party.ypos, party.quest.landmark, 0.667);
	while (nearestquestsite != null && nearestquestsite == false)
	{
		nearestquestsite = findNearestLandmark(party.xpos, party.ypos, party.quest.landmark, 0.667);
	}
	if (nearestquestsite == null)
		throw "no quest site found";
	let start = { x: party.xpos, y: party.ypos };
	party.questpath = pathToPosition(start, nearestquestsite);
	
	while (party.cstatus != "intown" && !isPartyDead(party))
	{
		simulateAdventuring(party);
	}
	let arguments = [];
	arguments.push(partyid);
	return outputAdventureSimLog(arguments); //output to discord
}

function verifyAdventuringPartiesExperience()
{
	for (let i = 0; i < adventuringparties.length; i++)
	{
		for (let j = 0; j < adventuringparties[i].members.length; j++)
		{
			if (!isNaN(adventuringparties[i].members[j].stats.exp))
			{
				adventuringparties[i].members[j].stats.backupexp = adventuringparties[i].members[j].stats.exp;
			}
			else if (isNaN(adventuringparties[i].members[j].stats.exp) || adventuringparties[i].members[j].stats.exp == null)
			{
				adventuringparties[i].members[j].stats.exp = adventuringparties[i].members[j].stats.backupexp;
			}
		}
	}
}

function setAdventuringPartiesBackupExperience()
{
	for (let i = 0; i < adventuringparties.length; i++)
	{
		for (let j = 0; j < adventuringparties[i].members.length; j++)
		{
			if (!isNaN(adventuringparties[i].members[j].stats.exp))
			{
				adventuringparties[i].members[j].stats.backupexp = adventuringparties[i].members[j].stats.exp;
			}
			else 
			{
				adventuringparties[i].members[j].stats.backupexp = 0;
			}
		}
	}
}

function saveAdventuringParties()
{
	verifyAdventuringPartiesExperience();
	let file = 'savedadventuringparties.json';
	let path = './' + file;
	let data = JSON.stringify(adventuringparties);
	
	fs.writeFile(path, data, (err) => {
		if (err) throw err;
		console.log('adventuring parties saved');
		});
}

function loadAdventuringParties()
{
	try
	{
		adventuringparties = JSON.parse(fs.readFileSync('savedadventuringparties.json'));
		console.log('adventuring parties loaded');
		setAdventuringPartiesBackupExperience();
	}
	catch (err)
	{
		console.log('no adventuring parties to load');
	}
}

function saveSimWorldMap()
{
	let file = 'savedadventureworldmap.json';
	let path = './' + file;
	let data = JSON.stringify(asworldmap);
	
	fs.writeFile(path, data, (err) => {
		if (err) throw err;
		console.log('adventure world map saved');
		});
}

function loadSimWorldMap()
{
	try
	{
		asworldmap = JSON.parse(fs.readFileSync('savedadventureworldmap.json'));
		console.log('adventure world map loaded');
	}
	catch (err)
	{
		generateSimWorldMap();
		console.log('no adventure world map to load');
		for (let i = 0; i < adventuringparties.length; i++)
		{
			let nearestCity = findNearestLandmark(64, 36, "city", 0.667);
			while (nearestCity != null && nearestCity == false)
			{
				nearestCity = findNearestLandmark(64, 36, "city", 0.667);
			}
			if (nearestCity == null)
				throw "no city found";
			adventuringparties[i].xpos = nearestCity.x;
			adventuringparties[i].ypos = nearestCity.y;
		}
	}
}


function initializeAndStartAdventureSim()
{
	loadAdventuringParties();
	loadSimWorldMap();
}

function GetPhonemeByCharacter(character)
{
	for(let i = 0; i < phonemes_english.length; i++)
	{
		if (phonemes_english[i].phoneme == character)
			return phonemes_english[i];
	}
	
	return null;
}

const markovmaxnamesize = 24;

var markovphonemes = [];

function MarkovPhonemeNameGen(arguments)
{
	let minlength = 3;
	let maxlength = 6
	let numberOfNames = 1;
	let argumentpos = arguments.indexOf("-min");
	if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0 && arguments[argumentpos+1] < 25)
		minlength = arguments[argumentpos+1];
	argumentpos = arguments.indexOf("-max")
	if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0 && arguments[argumentpos+1] < 25 && arguments[argumentpos+1] > minlength)
		maxlength = arguments[argumentpos+1];
	else if (minlength > 6)
		maxlength = minlength;
	argumentpos = arguments.indexOf("-n")
	if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0 && arguments[argumentpos+1] < 21)
		numberOfNames = arguments[argumentpos+1];
	
	let names = [];
	
	do
	{
		let nextname = MarkovPhonemeGenerateName();
		if (nextname.length <= maxlength && nextname.length >= minlength)
		{
			let ipaname = "";
			for (let i = 0; i < nextname.length; i++)
			{
				ipaname += nextname[i];
			}
			let spelledname = "";
			for (let i = 0; i < nextname.length; i++)
			{
				let phonemechar = GetPhonemeByCharacter(nextname[i]);
				spelledname += getPhonemeSpelling(phonemechar);
			}
			names.push("\[" + ipaname + "\] " + grammarCapitalFirstLetter(spelledname));
		}
	} while (names.length < numberOfNames);
	
	let output = names[0];
	for (i = 1; i < names.length; i++)
	{
		output += "\n" + names[i];	
	}
	
	return output;
}

function MarkovPhonemeGenerateName()
{
	let name = [];
	let diceroll = Math.floor((Math.random() * markovphonemes["START"].length));
	let nextChar = markovphonemes["START"][diceroll];
	
	for (let i = 0; i < markovmaxnamesize; i++)
	{
		if (nextChar === "E")
		{
			return name;
		}
		else
		{
			name.push(nextChar);
			diceroll = Math.floor((Math.random() * markovphonemes[nextChar].length));
			nextChar = markovphonemes[nextChar][diceroll];
		}
	}
	return name;
}

function MarkovPhonemeNameTrain()
{
	let trainingnames = JSON.parse(fs.readFileSync('phoneticnames.json'));
	let currentchar = "START";
	markovphonemes["START"] = [];
	markovphonemes["iː"] = [];
	markovphonemes["ɪ"] = [];
	markovphonemes["ʊ"] = [];
	markovphonemes["uː"] = [];
	markovphonemes["e-"] = [];
	markovphonemes["e"] = [];
	markovphonemes["ə"] = [];
	markovphonemes["ɜː"] = [];
	markovphonemes["ɔː"] = [];
	markovphonemes["æ-"] = [];
	markovphonemes["æ"] = [];
	markovphonemes["ʌ"] = [];
	markovphonemes["ɑː"] = [];
	markovphonemes["ɒ"] = [];
	markovphonemes["ɪə"] = [];
	markovphonemes["eɪ"] = [];
	markovphonemes["ʊə"] = [];
	markovphonemes["ɔɪ"] = [];
	markovphonemes["əʊ"] = [];
	markovphonemes["eə"] = [];
	markovphonemes["aɪ"] = [];
	markovphonemes["aʊ"] = [];
	markovphonemes["p"] = [];
	markovphonemes["p-"] = [];
	markovphonemes["b"] = [];
	markovphonemes["t"] = [];
	markovphonemes["d-"] = [];
	markovphonemes["d"] = [];
	markovphonemes["tʃ"] = [];
	markovphonemes["dʒ-"] = [];
	markovphonemes["dʒ"] = [];
	markovphonemes["k-"] = [];
	markovphonemes["k"] = [];
	markovphonemes["g-"] = [];
	markovphonemes["g"] = [];
	markovphonemes["f-"] = [];
	markovphonemes["f"] = [];
	markovphonemes["v"] = [];
	markovphonemes["θ"] = [];
	markovphonemes["ð"] = [];
	markovphonemes["s-"] = [];
	markovphonemes["s"] = [];
	markovphonemes["z-"] = [];
	markovphonemes["z"] = [];
	markovphonemes["ʃ"] = [];
	markovphonemes["ʒ"] = [];
	markovphonemes["m"] = [];
	markovphonemes["n-"] = [];
	markovphonemes["n"] = [];
	markovphonemes["ŋ"] = [];
	markovphonemes["h"] = [];
	markovphonemes["l-"] = [];
	markovphonemes["l"] = [];
	markovphonemes["r-"] = [];
	markovphonemes["r"] = [];
	markovphonemes["w"] = [];
	markovphonemes["j"] = [];
	markovphonemes["ks"] = [];
	
	for (let i = 0; i < trainingnames.length; i++)
	{
		let temptrainingname = trainingnames[i].split(" ");
		markovphonemes[currentchar].push(temptrainingname[0]);
	}
	
	for (let j = 0; j < trainingnames.length; j++)
	{
		let temptrainingname = trainingnames[j].split(" ");
		for (let k = 0; k < temptrainingname.length; k++)
		{
			if (k+1 < temptrainingname.length)
			{
				//console.log(temptrainingname[k]);
				markovphonemes[temptrainingname[k]].push(temptrainingname[k+1]);
			}
			else
			{
				//console.log(temptrainingname[k]);
				markovphonemes[temptrainingname[k]].push("E");
			}
		}
	}
	
	console.log('markov phoneme gen training list read');
	
}

function DrawSquares(channel ,arguments)
{
	var tempcanvas = new Canvas();
	tempcanvas.width = 100;
	tempcanvas.height = 100;
	if (tempcanvas.getContext)
	{
		var ctx = tempcanvas.getContext('2d');

		ctx.fillStyle = 'rgb(200, 0, 0)';
		ctx.fillRect(10, 10, 50, 50);

		ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
		ctx.fillRect(30, 30, 50, 50);
		
		
		let file = 'drawnsquares.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
			channel.send({ files: [{ attachment: path, name: file }] });
		})
	}
	else
	{
		console.log("getContext failed");
	}
	
}

var riverthickness = 180;
var wallcapradius = 35;
var wallthickness = 28;
var roadthickness = 24;
var sroadthickness = 12;

function DrawTownMap(channel, arguments)
{
	let wallvisibility = true;
	if (arguments.includes("-nowalls"))
		wallvisibility = false;
	let tempcanvas = new Canvas();
	tempcanvas.width = 2000;
	tempcanvas.height = 2000;
	
	let town = GenerateTown(arguments);
	
	if (tempcanvas.getContext)
	{
		let ctx = tempcanvas.getContext('2d');
		
		ctx.fillStyle = "#DDCC99";
		ctx.fillRect(0,0,2000,2000);
		
		// draw river
		ctx.fillStyle = "#0088FF";
		ctx.strokeStyle = "#0044AA";
		
		
		if (town.river.length > 0)
		{
			let startdir = DirectionVector(town.river[0].start, town.river[0].end);
			startdir = NintyDegreeTurn(startdir);
			
			ctx.beginPath();
			ctx.moveTo(town.river[0].start.x, town.river[0].start.y);
			ctx.lineTo(town.river[0].start.x + startdir.x*riverthickness/2, town.river[0].start.y + startdir.y*riverthickness/2);
			for (let i = 0; i < town.river.length; i++)
			{
				let dir = { x: town.river[i].end.x - town.river[i].start.x, y: town.river[i].end.y - town.river[i].start.y };
				dir = NormalizeVector(NintyDegreeTurn(dir));
				
				ctx.lineTo(town.river[i].end.x + dir.x*riverthickness/2, town.river[i].end.y + dir.y*riverthickness/2);
				
			}
			for (let i = town.river.length-1; i > -1; i--)
			{
				let dir = { x: town.river[i].end.x - town.river[i].start.x, y: town.river[i].end.y - town.river[i].start.y };
				dir = NormalizeVector(NintyDegreeTurn(dir));
				
				ctx.lineTo(town.river[i].start.x + dir.x*riverthickness*-1/2, town.river[i].start.y + dir.y*riverthickness*-1/2);
				
			}
			startdir = DirectionVector(town.river[town.river.length-1].start, town.river[town.river.length-1].end);
			startdir = NintyDegreeTurn(startdir);
			ctx.lineTo(town.river[0].start.x + startdir.x*riverthickness*-1/2, town.river[0].start.y + startdir.y*riverthickness*-1/2);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill()
		}
		
		// draw roads
		ctx.fillStyle = "#FFFFFF";
		ctx.strokeStyle = "#FFFFFF"
		
		for (let i = 0; i < town.roads.length-1; i++)
		{
			ctx.beginPath();
			ctx.moveTo(town.roads[i].start.x, town.roads[i].start.y);
			let dir = { x: town.roads[i].end.x - town.roads[i].start.x, y: town.roads[i].end.y - town.roads[i].start.y };
			dir = NormalizeVector(NintyDegreeTurn(dir));
			
			ctx.lineTo(town.roads[i].start.x + dir.x*roadthickness/2, town.roads[i].start.y + dir.y*roadthickness/2);
			ctx.lineTo(town.roads[i].end.x + dir.x*roadthickness/2, town.roads[i].end.y + dir.y*roadthickness/2);
			ctx.lineTo(town.roads[i].end.x + dir.x*roadthickness*-1/2, town.roads[i].end.y + dir.y*roadthickness*-1/2);
			ctx.lineTo(town.roads[i].start.x + dir.x*roadthickness*-1/2, town.roads[i].start.y + dir.y*roadthickness*-1/2);
			
			ctx.closePath();
			//ctx.stroke();
			ctx.fill()
		}
		
		for (let i = 0; i < town.smallroads.length; i++)
		{
			ctx.beginPath();
			ctx.moveTo(town.smallroads[i].start.x, town.smallroads[i].start.y);
			let dir = { x: town.smallroads[i].end.x - town.smallroads[i].start.x, y: town.smallroads[i].end.y - town.smallroads[i].start.y };
			dir = NormalizeVector(NintyDegreeTurn(dir));
			
			ctx.lineTo(town.smallroads[i].start.x + dir.x*sroadthickness/2, town.smallroads[i].start.y + dir.y*sroadthickness/2);
			ctx.lineTo(town.smallroads[i].end.x + dir.x*sroadthickness/2, town.smallroads[i].end.y + dir.y*sroadthickness/2);
			ctx.lineTo(town.smallroads[i].end.x + dir.x*sroadthickness*-1/2, town.smallroads[i].end.y + dir.y*sroadthickness*-1/2);
			ctx.lineTo(town.smallroads[i].start.x + dir.x*sroadthickness*-1/2, town.smallroads[i].start.y + dir.y*sroadthickness*-1/2);
			
			ctx.closePath();
			//ctx.stroke();
			ctx.fill()
		}
		
		
		ctx.fillStyle = "#776633";
		ctx.strokeStyle = "#000000"
		
		for (let i = 0; i < town.buildings.length; i++)
		{
			/*
			ctx.beginPath();
			ctx.moveTo(town.buildings[i].position.x, town.buildings[i].position.y);
			ctx.arc(town.buildings[i].position.x, town.buildings[i].position.y, 6, 0, 2 * Math.PI);
			ctx.closePath();
			//ctx.stroke();
			ctx.fill();
			*/
			
			//building
			
			ctx.beginPath();
			
			for (let j = 0; j < town.buildings[i].sides.length; j++)
			{
				let temproad = GetBuildingWall(town.buildings[i], j);
				if (j == 0)
				{
					ctx.moveTo(temproad.start.x, temproad.start.y)
					//ctx.lineTo(temproad.start.x, temproad.start.y);
				}
				ctx.lineTo(temproad.end.x, temproad.end.y);
			}
			//ctx.closePath();
			ctx.fill()
			ctx.stroke();
			
		}
		
		
		if (wallvisibility)
		{
			// draw walls
			ctx.fillStyle = "#000000";
			
			for (let i = 0; i < town.walls.length; i++)
			{
				//wall segment
				ctx.beginPath();
				ctx.moveTo(town.walls[i].start.x, town.walls[i].start.y);
				let dir = { x: town.walls[i].end.x - town.walls[i].start.x, y: town.walls[i].end.y - town.walls[i].start.y };
				dir = NormalizeVector(NintyDegreeTurn(dir));
				ctx.lineTo(town.walls[i].start.x + dir.x*wallthickness/2, town.walls[i].start.y + dir.y*wallthickness/2);
				ctx.lineTo(town.walls[i].end.x + dir.x*wallthickness/2, town.walls[i].end.y + dir.y*wallthickness/2);
				ctx.lineTo(town.walls[i].end.x + dir.x*wallthickness*-1/2, town.walls[i].end.y + dir.y*wallthickness*-1/2);
				ctx.lineTo(town.walls[i].start.x + dir.x*wallthickness*-1/2, town.walls[i].start.y + dir.y*wallthickness*-1/2);
				ctx.closePath();
				//ctx.stroke();
				ctx.fill()
			}
			
			for (let i = 0; i < town.towers.length; i++)
			{
				//wall corner/tower
				ctx.beginPath();
				if (town.towers[i].type == "circle")
				{
					ctx.moveTo(town.towers[i].x, town.towers[i].y);
					ctx.arc(town.towers[i].x, town.towers[i].y, wallcapradius, 0, 2 * Math.PI);
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();
				}
				else if (town.towers[i].type == "entry")
				{
					let dir = town.towers[i].facing;
					let rightangledir = NintyDegreeTurn(dir);
					ctx.moveTo(town.towers[i].x + dir.x*wallcapradius*2, town.towers[i].y + dir.y*wallcapradius*2);
					
					ctx.lineTo(town.towers[i].x + dir.x*wallcapradius*2, town.towers[i].y + dir.y*wallcapradius*2);
					ctx.lineTo(town.towers[i].x + rightangledir.x*wallcapradius*2, town.towers[i].y + rightangledir.y*wallcapradius*2);
					ctx.lineTo(town.towers[i].x + dir.x*wallcapradius*-2, town.towers[i].y + dir.y*wallcapradius*-2);
					ctx.lineTo(town.towers[i].x + rightangledir.x*wallcapradius*-2, town.towers[i].y + rightangledir.y*wallcapradius*-2);
					
					ctx.closePath();
					//ctx.stroke();
					ctx.fill();
				}
			}
		}
		
		//output file
		let file = 'drawntown.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
			channel.send({ files: [{ attachment: path, name: file }] });
		})
	}
	else
	{
		console.log("getContext failed");
	}
}

function NormalizeVector(vector)
{
	length = Math.sqrt((vector.x*vector.x) + (vector.y*vector.y));
	x = vector.x / length;
	y = vector.y / length;
	
	return { x, y };
}

function NintyDegreeTurn(vector)
{
	y = vector.x*-1;
	x = vector.y;
	
	return { x, y };
}

function FindCirclePoint(d, radius, length)
{
	let circlepoint = { x: 0, y: 0 };
	
	circlepoint.x = (Math.sin(d / radius) * length);
	circlepoint.y = (Math.cos(d / radius) * length);

	return circlepoint;
}

function FindShapePoint(t, radius)
{
	let shapepoint = { x: 0, y: 0 };
	
	shapepoint.x = (Math.sin(t) * radius);
	shapepoint.y = (Math.cos(t) * radius);
	
	return shapepoint;
}


function RandomPoint(xmax, xmin, ymax, ymin)
{
	let randompoint = { x: Math.random()*(xmax-xmin)+xmin, y: Math.random()*(ymax-ymin)+ymin };
	
	return randompoint;
}


function LengthBetweenPoints(a, b)
{
		let dVector = { x: b.x - a.x, y: b.y - a.y };
		let distance = Math.sqrt((dVector.x*dVector.x) + (dVector.y*dVector.y))
		
		return distance;
}

function PointWithinCircle(point, circle)
{
	let distance = LengthBetweenPoints(point, circle);
	if (distance < circle.radius)
		return true;
	else
		return false;
}

function AdjacentContentContains(map, width, height, point, content)
{
	if (point.x-1 > -1 && map[x-1+(y*height)].content == content)
		return true;
	else if (point.x+1 < width && map[x+1+(y*height)].content == content)
		return true;
	else if (point.y-1 > -1 && map[x+((y-1)*height)].content == content)
		return true;
	else if (point.y+1 < height && map[x+((y+1)*height)].content == content)
		return true;
	
	return false;
}

function ContainsIdenticalXY(array, point)
{
	for (let i in array)
	{
		if (array[i].x == point.x && array[i].y == point.y)
			return true;
	}
	
	return false;
}

function DirectionVector(a, b)
{
	d = { x: b.x - a.x, y: b.y - a.y };
	
	return NormalizeVector(d);
}

function GetBuildingWall(building, wallno)
{
	let wall = 
		{ 
			start: { x: building.sides[wallno].start.x, y: building.sides[wallno].start.y },
			end: { x: building.sides[wallno].end.x, y: building.sides[wallno].end.y }
		};
	
	wall.start.x += building.position.x;
	wall.start.y += building.position.y;
	wall.end.x += building.position.x;
	wall.end.y += building.position.y;
	
	return wall;
}

function OnSegment(p, q, r)
{
	if (q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min (p.y, r.y))
		return true;
	
	return false;
}

function Orientation(p, q, r)
{
	let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
	
	if (val == 0)
		return 0;
	
	return (val > 0) ? 1 : 2;
}


function RoadIntersects(mainroad, intersectingroad)
{
	let o1 = Orientation(mainroad.start, mainroad.end, intersectingroad.start);
	let o2 = Orientation(mainroad.start, mainroad.end, intersectingroad.end);
	let o3 = Orientation(intersectingroad.start, intersectingroad.end, mainroad.start);
	let o4 = Orientation(intersectingroad.start, intersectingroad.end, mainroad.end);
	
	if (o1 != o2 && o3 != o4)
		return true;
	
	if (o1 = 0 && OnSegment(mainroad.start, intersectingroad.start, mainroad.end))
		return true;
	
	if (o2 = 0 && OnSegment(mainroad.start, intersectingroad.end, mainroad.end))
		return true;
	
	if (o3 = 0 && OnSegment(intersectingroad.start, mainroad.start, intersectingroad.end))
		return true;
	
	if (o4 = 0 && OnSegment(intersectingroad.start, mainroad.end, intersectingroad.end))
		return true;
	
	return false;
}

//returns collision point if collides, else returns false
function RoadIntersectsAtPoint(road1, road2, thickness = 0)
{
	let temproad = { start: { x: road2.start.x, y: road2.start.y}, end: { x: road2.end.x, y: road2.end.y } };
	
	if (thickness > 0)
	{
		let tempdir = DirectionVector(road2.start, road2.end);
		
		tempdir = NintyDegreeTurn(tempdir);
		
		temproad.start.x = road2.start.x + tempdir.x*thickness/2;
		temproad.start.y = road2.start.y +tempdir.y*thickness/2;
		temproad.end.x = road2.end.x + tempdir.x*thickness/2;
		temproad.end.y = road2.end.y + tempdir.y*thickness/2;
		
		let side1 = RoadIntersectsAtPoint(road1, temproad);
		
		tempdir.x *= -1;
		tempdir.y *= -1;
		
		temproad.start.x = road2.start.x + tempdir.x*thickness/2;
		temproad.start.y = road2.start.y +tempdir.y*thickness/2;
		temproad.end.x = road2.end.x + tempdir.x*thickness/2;
		temproad.end.y = road2.end.y + tempdir.y*thickness/2;
		
		let side2 = RoadIntersectsAtPoint(road1, temproad);
		if (side1 != false && side2 != false)
		{
			let distance1 = LengthBetweenPoints(road1.start, side1);
			let distance2 = LengthBetweenPoints(road1.start, side2);
			if (distance1 < distance2)
				return side1;
			else 
				return side2;
		}
		else if (side1 != false && side2 == false)
		{
			return side1;
		}
		else if (side1 == false && side2 != false)
		{
			return side2;
		}
		else
		{
			return false;
		}
		/*
		if (PointInTriangle(road1.start, road2.start, temproad.end, temproad.start))
			return { x: road1.start.x, y: road1.start.y };
		if (PointInTriangle(road1.start, road2.start,  road2.end, temproad.end))
			return { x: road1.start.x, y: road1.start.y };
		*/
	}
	
	
	let s1 = { x: road1.end.x - road1.start.x, y: road1.end.y - road1.start.y };
	let s2 = { x: temproad.end.x - temproad.start.x, y: temproad.end.y - temproad.start.y };
	
	if ((-s2.x * s1.y + s1.x * s2.y) == 0)
		return false;
	
	let s = (-s1.y * (road1.start.x - temproad.start.x) + s1.x * (road1.start.y - temproad.start.y)) / (-s2.x * s1.y + s1.x * s2.y);
	let t = (s2.x * (road1.start.y - temproad.start.y) - s2.y * (road1.start.x - temproad.start.x)) / (-s2.x * s1.y + s1.x * s2.y);
	
	if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
	{
		//collision detected, returning
		let collisionpoint = { x: road1.start.x + (t * s1.x), y: road1.start.y + (t * s1.y)};
		return collisionpoint;
	}
	
	return false; // no collision
}

function PointInTriangle (point, trianglePoint1, trianglePoint2, trianglePoint3)
{
	let s = (trianglePoint1.x - trianglePoint3.x) * (point.y - trianglePoint3.y) - (trianglePoint1.y - trianglePoint3.y) * (point.x - trianglePoint3.x);
	let t = (trianglePoint2.x - trianglePoint1.x) * (point.y - trianglePoint1.y) - (trianglePoint2.y - trianglePoint1.y) * (point.x - trianglePoint1.x);
	
	if ((s < 0) != (t < 0) && s != 0 && t != 0)
		return false;
	
	let d = (trianglePoint3.x - trianglePoint2.x) * (point.y - trianglePoint2.y) - (trianglePoint3.y - trianglePoint2.y) * (point.x - trianglePoint2.x);
	return d == 0 || (d < 0) == (s + t <= 0);
}

function PointInRoad(point, road, thickness)
{
	if (thickness <= 0)
		return false;
	
	let side0 = { start: { x: road.start.x, y: road.start.y}, end: { x: road.end.x, y: road.end.y } };
	let side1 = { start: { x: road.start.x, y: road.start.y}, end: { x: road.end.x, y: road.end.y } };
	let tempdir = DirectionVector(side0.start, side0.end);
	
	tempdir = NintyDegreeTurn(tempdir);
	
	side0.start.x += tempdir.x*thickness/2;
	side0.start.y += tempdir.y*thickness/2;
	side0.end.x += tempdir.x*thickness/2;
	side0.end.y += tempdir.y*thickness/2;
	side1.start.x += tempdir.x*-1*thickness/2;
	side1.start.y += tempdir.y*-1*thickness/2;
	side1.end.x += tempdir.x*-1*thickness/2;
	side1.end.y += tempdir.y*-1*thickness/2;
	
	if (PointInTriangle(point, side0.start, side0.end, side1.start))
		return true;
	if (PointInTriangle(point, side1.start,  side1.end, side0.end))
		return true;
	
	return false
}


function GenerateTown(arguments)
{
	let xoffset = 1000;
	let yoffset = 1000;
	let variance = 50;
	let wallsSides = Math.floor(Math.random()*8+9);
	let wallsRadius = Math.floor(Math.random()*250+500);
	
	let maxbuildingcount = 100000000;
	let argumentpos = arguments.indexOf("-b");
	if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		maxbuildingcount = arguments[argumentpos+1];
	
	let towncenter = { x: xoffset, y: yoffset };
	towncenter.x += Math.random()*variance - variance/2;
	towncenter.y += Math.random()*variance - variance/2;
	
	console.log("make river");
	
	// make river
	let river = []
	
	let newroad = 
		{ 
			start: { x: 0, y: 0 },
			end: { x: 1, y: 1 }
		};
	let riverRand = Math.random();
	let riverX = riverRand < 0.5 ? Math.random()*600+200 : Math.random()*600+1200;
	let riverDir = riverRand < 0.5 ? FindShapePoint(Math.random()*Math.PI/3, 1) : FindShapePoint(-Math.random()*Math.PI/3, 1);
	console.log(riverDir);
	let	currentpos = { x: riverX, y: -250 };
	
	while (currentpos.x > -500 && currentpos.x < 2500 && currentpos.y > -500 && currentpos.y < 2500)
	{
		let stretchOfRoad = Math.floor(Math.random()*360+240);
		newroad = 
		{ 
			start: { x: currentpos.x, y: currentpos.y },
			end: { x: currentpos.x + riverDir.x*stretchOfRoad, y: currentpos.y + riverDir.y*stretchOfRoad }
		};
		newroad.end.x += Math.random()*variance*2 - variance;
		newroad.end.y += Math.random()*variance*2 - variance;
	
		river.push(newroad);
		currentpos.x = newroad.end.x;
		currentpos.y = newroad.end.y;
	}
	
	
	
	let tcInRiver = false;
	let tcShiftAmount = 2.5;
	do
	{
		tcInRiver = false;
		for (let i = 0; i < river.length && !tcInRiver; i++)
		{
			if (PointInRoad(towncenter, river[i], riverthickness))
			{
				tcInRiver = true;
			}
		}
		
		if (tcInRiver)
		{
			tcShiftAmount *= -2;
			towncenter.x = xoffset + tcShiftAmount;
		}
	}
	while (tcInRiver)
	
	console.log("make walls");
	
	// make walls and towers
	let walls = [];
	let towers = [];
	
	let wallPoint1;
	let wallPoint2;
	let wallStart;
	
	let newwall = 
		{ 
			start: { x: 0, y: 0 },
			end: { x: 1, y: 1 }
		};
	
	for (let i = 0; i < wallsSides; i++)
	{
		let intersectFound = false;
		let wallSubmerged = false;
		let twoSidesWall = false;
		let startInRiver = false;
		let endInRiver = false;
		if (i > 0)
			wallPoint1 = { x: wallPoint2.x, y:wallPoint2.y };
		else
		{
			wallPoint1 = FindShapePoint(Math.PI*2*i/wallsSides, wallsRadius);
			wallPoint1.x += towncenter.x + Math.random()*variance - variance/2;
			wallPoint1.y += towncenter.y + Math.random()*variance - variance/2;
			wallStart = { x: wallPoint1.x, y:wallPoint1.y };
		}
		if (i == wallsSides-1)
		{
			wallPoint2 = { x: wallStart.x, y:wallStart.y };
		}
		else
		{
			wallPoint2 = FindShapePoint(Math.PI*2*(i+1)/wallsSides, wallsRadius);
			wallPoint2.x += towncenter.x + Math.random()*variance - variance/2;
			wallPoint2.y += towncenter.y + Math.random()*variance - variance/2;
		}
		
		newwall = 
			{ 
				start: { x: wallPoint1.x, y: wallPoint1.y },
				end: { x: wallPoint2.x, y: wallPoint2.y }
			};
		for (let j = 0; j < river.length && !intersectFound; j++)
		{
			if (PointInRoad(newwall.start, river[j], riverthickness))
			{
				startInRiver = true;
			}
			if (PointInRoad(newwall.end, river[j], riverthickness))
			{
				endInRiver = true;
			}
		}
		
		for (let j = 0; j < river.length && !intersectFound; j++)
		{
			if (startInRiver && endInRiver)
			{
				wallSubmerged = true;
			}
			else if (startInRiver && !endInRiver)
			{
				let intersectPoint0 = RoadIntersectsAtPoint(newwall, river[j], riverthickness);
				if (intersectPoint0 != false)
				{
					newwall.start.x = intersectPoint0.x;
					newwall.start.y = intersectPoint0.y
					if (!ContainsIdenticalXY(towers, newwall.start))
					{
						let newtower = { x: newwall.start.x, y: newwall.start.y };
						newtower.type = "circle";
						towers.push(newtower);
					}
					
				}
				
				walls.push(newwall);
			}
			else if (!startInRiver && endInRiver)
			{
				let intersectPoint0 = RoadIntersectsAtPoint(newwall, river[j], riverthickness);
				if (intersectPoint0 != false)
				{
					newwall.end.x = intersectPoint0.x;
					newwall.end.y = intersectPoint0.y
					if (!ContainsIdenticalXY(towers, newwall.end))
					{
						let newtower = { x: newwall.end.x, y: newwall.end.y };
						newtower.type = "circle";
						towers.push(newtower);
					}
				}
				
				walls.push(newwall);
				if (!ContainsIdenticalXY(towers, newwall.start))
				{
					let newtower = { x: newwall.start.x, y: newwall.start.y };
					newtower.type = "circle";
					towers.push(newtower);
				}
			}
			else
			{
				reversewall = 
				{ 
					start: { x: wallPoint2.x, y: wallPoint2.y },
					end: { x: wallPoint1.x, y: wallPoint1.y }
				};
				let intersectPoint0 = RoadIntersectsAtPoint(newwall, river[j], riverthickness);
				let intersectPoint1 = RoadIntersectsAtPoint(reversewall, river[j], riverthickness);
				if (intersectPoint0 != false)
				{
					newwall.end.x = intersectPoint0.x;
					newwall.end.y = intersectPoint0.y
					if (!ContainsIdenticalXY(towers, newwall.end))
					{
						let newtower = { x: newwall.end.x, y: newwall.end.y };
						newtower.type = "circle";
						towers.push(newtower);
					}
				}
				if (intersectPoint1 != false)
				{
					reversewall.end.x = intersectPoint1.x;
					reversewall.end.y = intersectPoint1.y
					if (!ContainsIdenticalXY(towers, reversewall.end))
					{
						let newtower = { x: reversewall.end.x, y: reversewall.end.y };
						newtower.type = "circle";
						towers.push(newtower);
					}
					walls.push(reversewall);
				}
				
				walls.push(newwall);
				if (!ContainsIdenticalXY(towers, newwall.start))
				{
					let newtower = { x: newwall.start.x, y: newwall.start.y };
					newtower.type = "circle";
					towers.push(newtower);
				}
			}
		}
	}
	
	console.log("make roads");
	
	// make roads
	let roads = [];
	/*let newroad = 
		{ 
			start: { x: 0, y: 0 },
			end: { x: 1, y: 1 }
		};*/
	let newartery = 
		{ 
			start: { x: 0, y: 0 },
			end: { x: 1, y: 1 }
		};
	
	let arterystarts = [];
	// main roads;
	let totalmainroadcount = Math.floor(Math.max(Math.random()*5-2,0)+3);
	let mainroadcount = Math.ceil(totalmainroadcount/2);
	let innermainroadcount = totalmainroadcount - mainroadcount;
	let initialMainRoadDir = Math.random()*Math.PI*2;
	for (let i = 0; i < mainroadcount; i++)
	{
		let intersectFound = false;
		let intersectPoint;
		let	currentpos = { x: towncenter.x, y: towncenter.y };
		let roaddir = FindShapePoint(initialMainRoadDir+Math.PI*2/(totalmainroadcount)*i, 1);
		let roadactualdir;
		let pastwall = false;
		while (currentpos.x > -200 && currentpos.x < 2200 && currentpos.y > -200 && currentpos.y < 2200)
		{
			let stretchOfRoad = Math.floor(Math.random()*110+110);
			let arteryPoint = Math.floor(Math.random()*70+70);
			newroad = 
			{ 
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roaddir.x*stretchOfRoad, y: currentpos.y + roaddir.y*stretchOfRoad }
			};
			newroad.end.x += Math.random()*variance - variance/2;
			newroad.end.y += Math.random()*variance - variance/2;
			roadactualdir = DirectionVector(newroad.start, newroad.end);
			newartery = 
			{ 
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roadactualdir.x*arteryPoint, y: currentpos.y + roadactualdir.y*arteryPoint },
				dir: -1
			};
			
			let createBridge = false;
			for (let j = 0; j < river.length && !createBridge; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, river[j], riverthickness);
				if (intersectPoint != false)
				{
					let bridgeDir = DirectionVector(river[j].start, river[j].end);
					bridgeDir = NintyDegreeTurn(bridgeDir);
					//intersectFound = true;
					createBridge = true;
					newroad.end.x = intersectPoint.x;
					newroad.end.y = intersectPoint.y;
					roads.push(newroad);
					bridgeRoad = 
					{ 
						start: { x: newroad.end.x + bridgeDir.x*riverthickness*2, y: newroad.end.y + bridgeDir.y*riverthickness*2 },
						end: { x: newroad.end.x, y: newroad.end.y}
					};
					bridgeEnd = RoadIntersectsAtPoint(bridgeRoad, river[j], riverthickness-1)
					if (bridgeEnd != false)
					{
						bridgeRoad = 
						{ 
							start: { x: newroad.end.x, y: newroad.end.y },
							end: { x: newroad.end.x + bridgeDir.x*riverthickness, y: newroad.end.y + bridgeDir.y*riverthickness }
						};
					}
					else
					{
						bridgeRoad = 
						{ 
							start: { x: newroad.end.x, y: newroad.end.y },
							end: { x: newroad.end.x - bridgeDir.x*riverthickness, y: newroad.end.y - bridgeDir.y*riverthickness }
						};
					}
					roads.push(bridgeRoad);
					newroad = 
					{ 
						start: { x: bridgeRoad.end.x, y: bridgeRoad.end.y },
						end: { x: bridgeRoad.end.x + roaddir.x*2, y: bridgeRoad.end.y + roaddir.y*2 }
					};
				}
			}
		
			for (let j = 0; j < walls.length && !intersectFound; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, walls[j]);
				if (intersectPoint != false)
				{
					intersectFound = true;
					let facingradians = Math.atan2(roaddir.x,roaddir.y);
					facingradians += Math.PI/4;
					let newtower = intersectPoint;
					newtower.type = "entry";
					newtower.facing = NormalizeVector(FindShapePoint(facingradians, 1));
					towers.push(newtower);
					pastwall = true;
				}
			}
			
			if (!createBridge && LengthBetweenPoints(newartery.end, towncenter) < wallsRadius*0.85)
			{
				if (Math.random() < 0.25)
					arterystarts.push(newartery);
				else
				{
					newartery.dir = 0;
					arterystarts.push(newartery);
					newartery = 
					{ 
						start: { x: currentpos.x, y: currentpos.y },
						end: { x: currentpos.x + roadactualdir.x*arteryPoint, y: currentpos.y + roadactualdir.y*arteryPoint },
						dir: 1
					};
					arterystarts.push(newartery);
				}
			}
			
			roads.push(newroad);
			currentpos.x = newroad.end.x;
			currentpos.y = newroad.end.y;
		}
	}
	// main inner roads
	for (let i = 0; i < innermainroadcount; i++)
	{
		let intersectFound = false;
		let intersectPoint;
		let	currentpos = { x: towncenter.x, y: towncenter.y };
		let roaddir = FindShapePoint(initialMainRoadDir+Math.PI*2/(totalmainroadcount)*(i+mainroadcount), 1);
		let roadactualdir;
		let pastwall = false;
		while (currentpos.x > -200 && currentpos.x < 2200 && currentpos.y > -200 && currentpos.y < 2200)
		{
			let stretchOfRoad = Math.floor(Math.random()*110+110);
			let arteryPoint = Math.floor(Math.random()*70+70);
			newroad = 
			{ 
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roaddir.x*stretchOfRoad, y: currentpos.y + roaddir.y*stretchOfRoad }
			};
			newroad.end.x += Math.random()*variance - variance/2;
			newroad.end.y += Math.random()*variance - variance/2;
			roadactualdir = DirectionVector(newroad.start, newroad.end);
			newartery = 
			{ 
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roadactualdir.x*arteryPoint, y: currentpos.y + roadactualdir.y*arteryPoint },
				dir: -1
			};
		
		
			let createBridge = false;
			for (let j = 0; j < river.length && !createBridge; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, river[j], riverthickness);
				if (intersectPoint != false)
				{
					let bridgeDir = DirectionVector(river[j].start, river[j].end);
					bridgeDir = NintyDegreeTurn(bridgeDir);
					//intersectFound = true;
					createBridge = true;
					newroad.end.x = intersectPoint.x;
					newroad.end.y = intersectPoint.y;
					roads.push(newroad);
					bridgeRoad = 
					{ 
						start: { x: newroad.end.x + bridgeDir.x*riverthickness*2, y: newroad.end.y + bridgeDir.y*riverthickness*2 },
						end: { x: newroad.end.x, y: newroad.end.y}
					};
					bridgeEnd = RoadIntersectsAtPoint(bridgeRoad, river[j], riverthickness-1)
					if (bridgeEnd != false)
					{
						bridgeRoad = 
						{ 
							start: { x: newroad.end.x, y: newroad.end.y },
							end: { x: newroad.end.x + bridgeDir.x*riverthickness, y: newroad.end.y + bridgeDir.y*riverthickness }
						};
					}
					else
					{
						bridgeRoad = 
						{ 
							start: { x: newroad.end.x, y: newroad.end.y },
							end: { x: newroad.end.x - bridgeDir.x*riverthickness, y: newroad.end.y - bridgeDir.y*riverthickness }
						};
					}
					roads.push(bridgeRoad);
					newroad = 
					{ 
						start: { x: bridgeRoad.end.x, y: bridgeRoad.end.y },
						end: { x: bridgeRoad.end.x + roaddir.x*2, y: bridgeRoad.end.y + roaddir.y*2 }
					};
				}
			}
		
			for (let j = 0; j < walls.length && !intersectFound; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, walls[j]);
				if (intersectPoint != false)
				{
					intersectFound = true;
					newroad.end.x = intersectPoint.x;
					newroad.end.y = intersectPoint.y;
				}
			}
			
			if (LengthBetweenPoints(newartery.end, towncenter) < wallsRadius*0.85)
			{
				if (Math.random() < 0.25)
					arterystarts.push(newartery);
				else
				{
					newartery.dir = 0;
					arterystarts.push(newartery);
					newartery = 
					{ 
						start: { x: currentpos.x, y: currentpos.y },
						end: { x: currentpos.x + roadactualdir.x*arteryPoint, y: currentpos.y + roadactualdir.y*arteryPoint },
						dir: 1
					};
					arterystarts.push(newartery);
				}
			}
			
			roads.push(newroad);
			currentpos.x = newroad.end.x;
			currentpos.y = newroad.end.y;
			if (intersectFound)
			{
				currentpos.x = 25000;
				currentpos.y = 25000;
			}
		}
	}
	
	console.log("make artery roads");
	
	let arteryroads = [];
	let subarterystarts = [];
	
	for (let i = 0; i < arterystarts.length; i++)
	{
		let	currentpos = { x: arterystarts[i].end.x, y: arterystarts[i].end.y };
		let roaddir = NintyDegreeTurn(DirectionVector(arterystarts[i].start, arterystarts[i].end));
		let roadactualdir;
		let ignoreFirstRoad = 1;
		
		roadsubarr = [];
		if (arterystarts[i].dir == 1 || (arterystarts[i].dir == -1 && Math.random() < 0.5))
		{
			roaddir.x *= -1;
			roaddir.y *= -1;
		}
		
		while (currentpos.x > -1 && currentpos.x < 2000 && currentpos.y > -1 && currentpos.y < 2000)
		{
			let stretchOfRoad = Math.floor(Math.random()*90+90);
			let arteryPoint = Math.floor(Math.random()*50+50);
			newroad = 
			{
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roaddir.x*stretchOfRoad, y: currentpos.y + roaddir.y*stretchOfRoad }
			};
			newroad.end.x += Math.random()*variance/2 - variance/4;
			newroad.end.y += Math.random()*variance/2 - variance/4;
			roadactualdir = DirectionVector(newroad.start, newroad.end);
			newartery = 
			{ 
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roadactualdir.x*arteryPoint, y: currentpos.y + roadactualdir.y*arteryPoint },
				dir: -1
			};
			
			let intersectPoint;
			let intersectFound = false;
			let inRiver = false;
			for (let j = 0; j < river.length && !intersectFound; j++)
			{
				if (!inRiver && PointInRoad(newroad.start, river[j], riverthickness))
				{
					inRiver = true;
				}
				
				let intersectPoint = RoadIntersectsAtPoint(newroad, river[j], riverthickness);
				if (intersectPoint != false)
				{
					intersectFound = true;
					newroad.end.x = intersectPoint.x;
					newroad.end.y = intersectPoint.y;
				}
			}
			
			for (let j = 0; j < walls.length && !intersectFound; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, walls[j], wallthickness);
				if (intersectPoint != false)
				{
					let truedir = DirectionVector(newroad.start, intersectPoint);
					let truelength = LengthBetweenPoints(newroad.start, intersectPoint);
					trueintersectpoint = { x: newroad.start.x, y: newroad.start.y };
					trueintersectpoint.x += truelength * truedir.x;
					trueintersectpoint.y += truelength * truedir.y;
					intersectFound = true;
					newroad.end.x = trueintersectpoint.x;
					newroad.end.y = trueintersectpoint.y;
				}
			}
			
			for (let j = 0; j < roads.length && !intersectFound; j++)
			{
				if (i != j)
				{
					intersectPoint = RoadIntersectsAtPoint(newroad, roads[j], roadthickness);
					if (intersectPoint != false)
					{
						if (ignoreFirstRoad > 0)
						{
							ignoreFirstRoad--;
						}
						else
						{
							let truedir = DirectionVector(newroad.start, intersectPoint);
							let truelength = LengthBetweenPoints(newroad.start, intersectPoint);
							trueintersectpoint = { x: newroad.start.x, y: newroad.start.y };
							trueintersectpoint.x += truelength * truedir.x;
							trueintersectpoint.y += truelength * truedir.y;
							intersectFound = true;
							newroad.end.x = trueintersectpoint.x;
							newroad.end.y = trueintersectpoint.y;
						}
					}
				}
			}
			
			for (let j = 0; j < arteryroads.length && !intersectFound; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, arteryroads[j], sroadthickness);
				if (intersectPoint != false)
				{
					if (LengthBetweenPoints(newroad.start, intersectPoint) > 1)
					{
						if (ignoreFirstRoad > 0)
						{
							ignoreFirstRoad--;
						}
						else
						{
							let truedir = DirectionVector(newroad.start, intersectPoint);
							let truelength = LengthBetweenPoints(newroad.start, intersectPoint);
							trueintersectpoint = { x: newroad.start.x, y: newroad.start.y };
							trueintersectpoint.x += truelength * truedir.x;
							trueintersectpoint.y += truelength * truedir.y;
							intersectFound = true;
							newroad.end.x = trueintersectpoint.x;
							newroad.end.y = trueintersectpoint.y;
						}
					}
				}
			}
			
			if (!inRiver)
			{
				if (LengthBetweenPoints(newroad.start, newroad.end) > LengthBetweenPoints(newartery.start, newartery.end))
				{
					if (Math.random() < 0.334)
						subarterystarts.push(newartery);
					else
					{
						newartery.dir = 0;
						subarterystarts.push(newartery);
						newartery = 
						{ 
							start: { x: currentpos.x, y: currentpos.y },
							end: { x: currentpos.x + roaddir.x*arteryPoint, y: currentpos.y + roaddir.y*arteryPoint },
							dir: 1
						};
						subarterystarts.push(newartery);
					}
				}
				roadsubarr.push(newroad);
			}
			currentpos.x = newroad.end.x;
			currentpos.y = newroad.end.y;
			if (intersectFound || inRiver)
			{
				currentpos.x = 25000;
				currentpos.y = 25000;
			}
			else
			{
				//roaddir = DirectionVector(newroad.start, newroad.end)
			}
		}
		arteryroads = arteryroads.concat(roadsubarr);
	}
	
	console.log("make sub-artery roads");
	
	for (let i = 0; i < subarterystarts.length; i++)
	{
		let	currentpos = { x: subarterystarts[i].end.x, y: subarterystarts[i].end.y };
		let roaddir = NintyDegreeTurn(DirectionVector(subarterystarts[i].start, subarterystarts[i].end));
		let roadactualdir;
		let ignoreFirstRoad = 1;
		
		roadsubarr = [];
		
		if (subarterystarts[i].dir == 1 || (subarterystarts[i].dir == -1 && Math.random() < 0.5))
		{
			roaddir.x *= -1;
			roaddir.y *= -1;
		}
		while (currentpos.x > -1 && currentpos.x < 2000 && currentpos.y > -1 && currentpos.y < 2000)
		{
			let stretchOfRoad = Math.floor(Math.random()*90+90);
			let arteryPoint = Math.floor(Math.random()*50+50);
			
			newroad = 
			{
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roaddir.x*stretchOfRoad, y: currentpos.y + roaddir.y*stretchOfRoad }
			};
			newroad.end.x += Math.random()*variance/2 - variance/4;
			newroad.end.y += Math.random()*variance/2 - variance/4;
			roadactualdir = DirectionVector(newroad.start, newroad.end);
			
			newartery = 
			{ 
				start: { x: currentpos.x, y: currentpos.y },
				end: { x: currentpos.x + roadactualdir.x*arteryPoint, y: currentpos.y + roadactualdir.y*arteryPoint },
				dir: -1
			};
			
			let intersectPoint;
			let intersectFound = false;
			let inRiver = false;
			for (let j = 0; j < river.length && !intersectFound; j++)
			{
				if (!inRiver && PointInRoad(newroad.start, river[j], riverthickness))
				{
					inRiver = true;
				}
				
				let intersectPoint = RoadIntersectsAtPoint(newroad, river[j], riverthickness);
				if (intersectPoint != false)
				{
					intersectFound = true;
					newroad.end.x = intersectPoint.x;
					newroad.end.y = intersectPoint.y;
				}
			}
			
			for (let j = 0; j < walls.length && !intersectFound; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, walls[j], wallthickness);
				if (intersectPoint != false)
				{
					let truedir = DirectionVector(newroad.start, intersectPoint);
					let truelength = LengthBetweenPoints(newroad.start, intersectPoint);
					trueintersectpoint = { x: newroad.start.x, y: newroad.start.y };
					trueintersectpoint.x += truelength * truedir.x;
					trueintersectpoint.y += truelength * truedir.y;
					intersectFound = true;
					newroad.end.x = trueintersectpoint.x;
					newroad.end.y = trueintersectpoint.y;
				}
			}
			
			for (let j = 0; j < roads.length && !intersectFound; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, roads[j], roadthickness);
				if (intersectPoint != false)
				{
					if (ignoreFirstRoad > 0)
					{
						ignoreFirstRoad--;
					}
					else
					{
						let truedir = DirectionVector(newroad.start, intersectPoint);
						let truelength = LengthBetweenPoints(newroad.start, intersectPoint);
						trueintersectpoint = { x: newroad.start.x, y: newroad.start.y };
						trueintersectpoint.x += truelength * truedir.x;
						trueintersectpoint.y += truelength * truedir.y;
						intersectFound = true;
						newroad.end.x = trueintersectpoint.x;
						newroad.end.y = trueintersectpoint.y;
					}
				}
			}
			
			for (let j = 0; j < arteryroads.length && !intersectFound; j++)
			{
				intersectPoint = RoadIntersectsAtPoint(newroad, arteryroads[j], sroadthickness);
				if (intersectPoint != false)
				{
					if (ignoreFirstRoad > 0)
					{
						ignoreFirstRoad--;
					}
					else
					{
						let truedir = DirectionVector(newroad.start, intersectPoint);
						let truelength = LengthBetweenPoints(newroad.start, intersectPoint);
						trueintersectpoint = { x: newroad.start.x, y: newroad.start.y };
						trueintersectpoint.x += truelength * truedir.x;
						trueintersectpoint.y += truelength * truedir.y;
						intersectFound = true;
						newroad.end.x = trueintersectpoint.x;
						newroad.end.y = trueintersectpoint.y;
					}
				}
			}
			
			if (!inRiver)
			{
				if (Math.random() < 0.334 && LengthBetweenPoints(newroad.start, newroad.end) > LengthBetweenPoints(newartery.start, newartery.end))
				{
					if (Math.random() < 0.667)
						subarterystarts.push(newartery);
					else
					{
						newartery.dir = 0;
						subarterystarts.push(newartery);
						newartery = 
						{ 
							start: { x: currentpos.x, y: currentpos.y },
							end: { x: currentpos.x + roaddir.x*arteryPoint, y: currentpos.y + roaddir.y*arteryPoint },
							dir: 1
						};
						subarterystarts.push(newartery);
					}
				}
				roadsubarr.push(newroad);
			}
			currentpos.x = newroad.end.x;
			currentpos.y = newroad.end.y;
			if (intersectFound || inRiver)
			{
				currentpos.x = 25000;
				currentpos.y = 25000;
			}
			else
			{
				//roaddir = DirectionVector(newroad.start, newroad.end)
			}
		}
		arteryroads = arteryroads.concat(roadsubarr);
	}
	
	console.log("make buildings");
	
	// make buildings
	let buildings = [];
	let totalbuildingcount = 0;
	
	for (let i in roads)
	{
		let buildingsCount = Math.floor(Math.random()*3+3);
		
		for (let j = 0; j < buildingsCount && totalbuildingcount < maxbuildingcount; j++)
		{
			let attempts = 0;
			let buildingSides = 4;
			let buildingRadius = Math.floor(Math.random()*5+6)*3;
			let buildingpos = DirectionVector(roads[i].start, roads[i].end);
			let roaddir = { x: buildingpos.x, y: buildingpos.y };
			let roadradians = Math.atan2(roaddir.x,roaddir.y) + Math.PI/4;
			let awayfromroad = NintyDegreeTurn(roaddir);
			if (Math.random() < 0.5)
			{
				awayfromroad.x *= -1;
				awayfromroad.y *= -1;
			}
			let awayFromRoadDir = 0;
			let awayAmount = buildingRadius+roadthickness/2+3;
			let randomroadpos = Math.random()*LengthBetweenPoints(roads[i].start, roads[i].end);
			buildingpos.x = roads[i].start.x + buildingpos.x * randomroadpos;
			buildingpos.y = roads[i].start.y + buildingpos.y * randomroadpos;
			buildingpos.x += awayfromroad.x*awayAmount;
			buildingpos.y += awayfromroad.y*awayAmount;
			
			let newbuilding = 
					{ 
						position: { x: buildingpos.x, y: buildingpos.y },
						radius: buildingRadius,
						sides: []
					};
			for (let k = 0; k < buildingSides; k++)
			{
				if (k > 0)
					wallPoint1 = { x: wallPoint2.x, y:wallPoint2.y };
				else
				{
					wallPoint1 = FindShapePoint(roadradians + Math.PI*2*k/buildingSides, buildingRadius);
					//wallPoint1.x += Math.random()*variance/3 - variance/6;
					//wallPoint1.y += Math.random()*variance/3 - variance/6;
					wallStart = { x: wallPoint1.x, y:wallPoint1.y };
				}
				if (k == buildingSides-1)
				{
					wallPoint2 = { x: wallStart.x, y:wallStart.y };
				}
				else
				{
					wallPoint2 = FindShapePoint(roadradians + Math.PI*2*(k+1)/buildingSides, buildingRadius);
					//wallPoint2.x += Math.random()*variance/3 - variance/6;
					//wallPoint2.y += Math.random()*variance/3 - variance/6;
				}
				newwall = 
					{ 
						start: { x: wallPoint1.x, y: wallPoint1.y },
						end: { x: wallPoint2.x, y: wallPoint2.y }
					};
				newbuilding.sides.push(newwall);
			}
			let intersectPoint;
			let intersectFound = true;
			while (intersectFound == true && attempts < 255)
			{
				intersectFound = false;
				
				for (let l = 0; l < newbuilding.sides.length; l++)
				{
					
					let temproad = GetBuildingWall(newbuilding, l)
					
					for (let j = 0; j < river.length && !intersectFound; j++)
					{
						if (PointInRoad(temproad.start, river[j], riverthickness))
						{
							intersectFound = true;
						}
						
						let intersectPoint = RoadIntersectsAtPoint(temproad, river[j], riverthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					
					for (let k = 0; k < walls.length && !intersectFound; k++)
					{
						intersectPoint = RoadIntersectsAtPoint(temproad, walls[k], wallthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					
					for (let k = 0; k < roads.length && !intersectFound; k++)
					{
						intersectPoint = RoadIntersectsAtPoint(temproad, roads[k], roadthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					
					for (let k = 0; k < arteryroads.length && !intersectFound; k++)
					{
						intersectPoint = RoadIntersectsAtPoint(temproad, arteryroads[k], sroadthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					/*
					for (let k = 0; k < buildings.length && !intersectFound; k++)
					{
						for (let m = 0; m < buildings[k].sides.length && !intersectFound; m++)
						{
							intersectPoint = RoadIntersectsAtPoint(temproad, GetBuildingWall(buildings[k],m));
							if (intersectPoint != false)
							{
								intersectFound = true;
							}
						}
					}
					*/
				}
				for (let k = 0; k < buildings.length && !intersectFound; k++)
				{
					let buildingToBuildingDistance = LengthBetweenPoints(buildings[k].position, newbuilding.position);
					if (buildingToBuildingDistance < (buildings[k].radius + newbuilding.radius)/1.41)
						intersectFound = true;
				}
				if (intersectFound)
				{
					if (awayFromRoadDir == 0)
						awayfromroad.x *= -1;
					else
						awayfromroad.y *= -1;
					awayFromRoadDir = (awayFromRoadDir+1)%2;
					buildingpos = DirectionVector(roads[i].start, roads[i].end);
					randomroadpos = Math.random()*LengthBetweenPoints(roads[i].start, roads[i].end);
					buildingpos.x = roads[i].start.x + buildingpos.x * randomroadpos;
					buildingpos.y = roads[i].start.y + buildingpos.y * randomroadpos;
					buildingpos.x += awayfromroad.x*awayAmount;
					buildingpos.y += awayfromroad.y*awayAmount;
					newbuilding.position.x = buildingpos.x;
					newbuilding.position.y = buildingpos.y;
					attempts++;
				}
			}
			if (!intersectFound && LengthBetweenPoints(towncenter, buildingpos) < wallsRadius*0.975)
			{
				totalbuildingcount++;
				buildings.push(newbuilding);
			}
		}
	}
	
	for (let i in arteryroads)
	{
		let buildingsCount = Math.floor(Math.random()*3+3);
		
		for (let j = 0; j <  buildingsCount && totalbuildingcount < maxbuildingcount; j++)
		{
			let attempts = 0;
			let buildingSides = 4;
			let buildingRadius = Math.floor(Math.random()*5+6)*3;
			let buildingpos = DirectionVector(arteryroads[i].start, arteryroads[i].end);
			let roaddir = { x: buildingpos.x, y: buildingpos.y };
			let roadradians = Math.atan2(roaddir.x,roaddir.y) + Math.PI/4;
			let awayfromroad = NintyDegreeTurn(roaddir);
			if (Math.random() < 0.5)
			{
				awayfromroad.x *= -1;
				awayfromroad.y *= -1;
			}
			let awayFromRoadDir = 0;
			let awayAmount = buildingRadius+sroadthickness/2+2;
			let randomroadpos = Math.random()*LengthBetweenPoints(arteryroads[i].start, arteryroads[i].end);
			buildingpos.x = arteryroads[i].start.x + buildingpos.x * randomroadpos;
			buildingpos.y = arteryroads[i].start.y + buildingpos.y * randomroadpos;
			buildingpos.x += awayfromroad.x*awayAmount;
			buildingpos.y += awayfromroad.y*awayAmount;
			
			let newbuilding = 
					{ 
						position: { x: buildingpos.x, y: buildingpos.y },
						radius: buildingRadius,
						sides: []
					};
			for (let k = 0; k < buildingSides; k++)
			{
				if (k > 0)
					wallPoint1 = { x: wallPoint2.x, y:wallPoint2.y };
				else
				{
					wallPoint1 = FindShapePoint(roadradians + Math.PI*2*k/buildingSides, buildingRadius);
					//wallPoint1.x += Math.random()*variance/3 - variance/6;
					//wallPoint1.y += Math.random()*variance/3 - variance/6;
					wallStart = { x: wallPoint1.x, y:wallPoint1.y };
				}
				if (k == buildingSides-1)
				{
					wallPoint2 = { x: wallStart.x, y:wallStart.y };
				}
				else
				{
					wallPoint2 = FindShapePoint(roadradians + Math.PI*2*(k+1)/buildingSides, buildingRadius);
					//wallPoint2.x += Math.random()*variance/3 - variance/6;
					//wallPoint2.y += Math.random()*variance/3 - variance/6;
				}
				newwall = 
					{ 
						start: { x: wallPoint1.x, y: wallPoint1.y },
						end: { x: wallPoint2.x, y: wallPoint2.y }
					};
				newbuilding.sides.push(newwall);
			}
			let intersectPoint;
			let intersectFound = true;
			while (intersectFound == true && attempts < 255)
			{
				intersectFound = false;
				
				for (let l = 0; l < newbuilding.sides.length; l++)
				{
					let temproad = GetBuildingWall(newbuilding, l)
					
					for (let j = 0; j < river.length && !intersectFound; j++)
					{
						if (PointInRoad(temproad.start, river[j], riverthickness))
						{
							intersectFound = true;
						}
						
						let intersectPoint = RoadIntersectsAtPoint(temproad, river[j], riverthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					
					for (let k = 0; k < walls.length && !intersectFound; k++)
					{
						intersectPoint = RoadIntersectsAtPoint(temproad, walls[k], wallthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					
					for (let k = 0; k < roads.length && !intersectFound; k++)
					{
						intersectPoint = RoadIntersectsAtPoint(temproad, roads[k], roadthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					
					for (let k = 0; k < arteryroads.length && !intersectFound; k++)
					{
						intersectPoint = RoadIntersectsAtPoint(temproad, arteryroads[k], sroadthickness);
						if (intersectPoint != false)
						{
							intersectFound = true;
						}
					}
					/*
					for (let k = 0; k < buildings.length && !intersectFound; k++)
					{
						for (let m = 0; m < buildings[k].sides.length && !intersectFound; m++)
						{
							intersectPoint = RoadIntersectsAtPoint(temproad, GetBuildingWall(buildings[k],m));
							if (intersectPoint != false)
							{
								intersectFound = true;
							}
						}
					}
					*/
				}
				for (let k = 0; k < buildings.length && !intersectFound; k++)
				{
					let buildingToBuildingDistance = LengthBetweenPoints(buildings[k].position, newbuilding.position);
					if (buildingToBuildingDistance < (buildings[k].radius + newbuilding.radius)/1.41)
						intersectFound = true;
				}
				
				if (intersectFound)
				{
					if (awayFromRoadDir == 0)
						awayfromroad.x *= -1;
					else
						awayfromroad.y *= -1;
					awayFromRoadDir = (awayFromRoadDir+1)%2;
					buildingpos = DirectionVector(arteryroads[i].start, arteryroads[i].end);
					randomroadpos = Math.random()*LengthBetweenPoints(arteryroads[i].start, arteryroads[i].end);
					buildingpos.x = arteryroads[i].start.x + buildingpos.x * randomroadpos;
					buildingpos.y = arteryroads[i].start.y + buildingpos.y * randomroadpos;
					buildingpos.x += awayfromroad.x*awayAmount;
					buildingpos.y += awayfromroad.y*awayAmount;
					newbuilding.position.x = buildingpos.x;
					newbuilding.position.y = buildingpos.y;
					attempts++;
				}
			}
			
			if (!intersectFound && LengthBetweenPoints(towncenter, buildingpos) < wallsRadius*0.975)
			{
				totalbuildingcount++;
				buildings.push(newbuilding);
			}
		}
	}
	
	town = { roads: roads, smallroads: arteryroads, walls: walls, towers: towers, buildings: buildings, river: river };
	
	return town;
}

function MoveHex(hex, direction)
{
	direction = direction%6;
	
	if (hex.x%2 == 1)
	{
		if (direction == 5)
		{
			hex.x--;
		}
		else if (direction == 4)
		{
			hex.x--;
			hex.y++;
		}
		else if (direction == 3)
		{
			hex.y++;
		}
		else if (direction == 2)
		{
			hex.x++;
			hex.y++;
		}
		else if (direction == 1)
		{
			hex.x++;
		}
		else if (direction == 0)
		{
			hex.y--;
		}
	} 
	else
	{
		if (direction == 5)
		{
			hex.x--;
			hex.y--;
		}
		else if (direction == 4)
		{
			hex.x--;
		}
		else if (direction == 3)
		{
			hex.y++;
		}
		else if (direction == 2)
		{
			hex.x++;
		}
		else if (direction == 1)
		{
			hex.x++;
			hex.y--;
		}
		else if (direction == 0)
		{
			hex.y--;
		}
	}
}

function MoveUpwardHex(hex, direction)
{
	direction = direction%6;
	
	if (hex.y%2 == 1)
	{
		if (direction == 5)
		{
			hex.y--;
		}
		else if (direction == 4)
		{
			hex.x--;
		}
		else if (direction == 3)
		{
			hex.y++;
		}
		else if (direction == 2)
		{
			hex.x++;
			hex.y++;
		}
		else if (direction == 1)
		{
			hex.x++;
		}
		else if (direction == 0)
		{
			hex.x++;
			hex.y--;
		}
	} 
	else
	{
		if (direction == 5)
		{
			hex.x--;
			hex.y--;
		}
		else if (direction == 4)
		{
			hex.x--;
		}
		else if (direction == 3)
		{
			hex.x--;
			hex.y++;
		}
		else if (direction == 2)
		{
			hex.y++;
		}
		else if (direction == 1)
		{
			hex.x++;
		}
		else if (direction == 0)
		{
			hex.y--;
		}
	}
}

function GetHexNeighbour(hex, direction)
{
	direction = direction%6;
	
	hexNeighbour = { x: hex.x, y: hex.y }
	
	if (hex.y%2 == 1)
	{
		if (direction == 5)
		{
			hexNeighbour.y--;
		}
		else if (direction == 4)
		{
			hexNeighbour.x--;
		}
		else if (direction == 3)
		{
			hexNeighbour.y++;
		}
		else if (direction == 2)
		{
			hexNeighbour.x++;
			hexNeighbour.y++;
		}
		else if (direction == 1)
		{
			hexNeighbour.x++;
		}
		else if (direction == 0)
		{
			hexNeighbour.x++;
			hexNeighbour.y--;
		}
	} 
	else
	{
		if (direction == 5)
		{
			hexNeighbour.x--;
			hexNeighbour.y--;
		}
		else if (direction == 4)
		{
			hexNeighbour.x--;
		}
		else if (direction == 3)
		{
			hexNeighbour.x--;
			hexNeighbour.y++;
		}
		else if (direction == 2)
		{
			hexNeighbour.y++;
		}
		else if (direction == 1)
		{
			hexNeighbour.x++;
		}
		else if (direction == 0)
		{
			hexNeighbour.y--;
		}
	}
	
	return hexNeighbour;
}

function ContainsHexInArray(hex, array)
{
	for (let i = 0; i < array.length; i++)
	{
		if (array[i].x == hex.x && array[i].y == hex.y)
			return true;
	}
	
	return false;
}

function GetContiguousLandHexes(start, map, map_width, map_height)
{
	let frontierQueue = [{ x: start.x, y: start.y, priority: 0 }];
	let doneHexes = [];
	let priority = 0;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		if (nextinqueue < 0)
		{
			console.log(frontierQueue);
			console.log("unexpected contigous land exit");
			return doneHexes;
		}
		current = frontierQueue[nextinqueue];
		frontierQueue.splice(nextinqueue,1);
		
		let connection = { x: current.x, y: current.y };
		for (let i = 0; i < 6; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveUpwardHex(connection,i);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height && !ContainsHexInArray(connection, doneHexes) && map.hexes[connection.y * map_width + connection.x].height >= 0)
			{
				doneHexes.push({ x: connection.x, y: connection.y });
				frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
			}
		}
		
		priority++;
	}
	
	return doneHexes;
}

function GetContiguousHexesAboveHeight(start, map, map_width, map_height, height_threshold)
{
	let frontierQueue = [{ x: start.x, y: start.y, priority: 0 }];
	let doneHexes = [];
	let priority = 0;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		if (nextinqueue < 0)
		{
			console.log(frontierQueue);
			console.log("unexpected contigous land exit");
			return doneHexes;
		}
		current = frontierQueue[nextinqueue];
		frontierQueue.splice(nextinqueue,1);
		
		let connection = { x: current.x, y: current.y };
		for (let i = 0; i < 6; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveUpwardHex(connection,i);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height && !ContainsHexInArray(connection, doneHexes) && map.hexes[connection.y * map_width + connection.x].height >= height_threshold)
			{
				doneHexes.push({ x: connection.x, y: connection.y });
				frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
			}
		}
		
		priority++;
	}
	
	return doneHexes;
}

function GetContiguousWaterHexes(start, map, map_width, map_height)
{
	let frontierQueue = [{ x: start.x, y: start.y, priority: 0 }];
	let doneHexes = [];
	let priority = 0;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		if (nextinqueue < 0)
		{
			console.log(frontierQueue);
			console.log("unexpected contigous water exit");
			return doneHexes;
		}
		current = frontierQueue[nextinqueue];
		frontierQueue.splice(nextinqueue,1);
		
		let connection = { x: current.x, y: current.y };
		for (let i = 0; i < 6; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveUpwardHex(connection,i);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height && !ContainsHexInArray(connection, doneHexes) && map.hexes[connection.y * map_width + connection.x].height < 0)
			{
				doneHexes.push({ x: connection.x, y: connection.y });
				frontierQueue.push({ x: connection.x, y: connection.y, priority: priority });
			}
		}
		
		priority++;
	}
	
	return doneHexes;
}

const OUTERRADIUS = 1.0;
const INNERRADIUS = 0.866025404;
const PERTURBSTRENGTH = 11;
const HIGHLANDHEIGHT = 19;
const SNOWCAPHEIGHT = 25;

function PerturbHexPoint(point, noisemapX, noisemapY, width)
{
	xnoise = noisemapX[Math.round(point.x * width + point.y)];
	ynoise = noisemapY[Math.round(point.x * width + point.y)];
	
	return { x: point.x + xnoise * PERTURBSTRENGTH, y: point.y + ynoise * PERTURBSTRENGTH }
}

function GenerateHexWorldMap(pixelsPerHex, w, h, landratio, smoothpasses)
{
	let hexWorldMap = 
	{
		pph: pixelsPerHex,
		height: h,
		width: w,
		hexes: [h*w],
		heightmax: 1,
		heightmin: -1,
		landmasses: 0,
		lakes: 0,
		highlands: 0,
		snowcaps: 0
	}
	
	let noisemapX = noiseMap2D(pixelsPerHex * h, pixelsPerHex * w, 0.67);
		noisemapX = increaseContrast(noisemapX, pixelsPerHex * h, pixelsPerHex * w, 0.4);
		noisemapX = smoothenMap(noisemapX, pixelsPerHex * h, pixelsPerHex * w, 0.175);
		noisemapX = increaseContrast(noisemapX, pixelsPerHex * h, pixelsPerHex * w, 0.25);
		
	let noisemapY = noiseMap2D(pixelsPerHex * h, pixelsPerHex * w, 0.67);
		noisemapY = increaseContrast(noisemapY, pixelsPerHex * h, pixelsPerHex * w, 0.4);
		noisemapY = smoothenMap(noisemapY, pixelsPerHex * h, pixelsPerHex * w, 0.175);
		noisemapY = increaseContrast(noisemapY, pixelsPerHex * h, pixelsPerHex * w, 0.25);
	
	
	for (let i = 0; i < h; i++)
	{
		for (let j = 0; j < w; j++)
		{
			let baseX = (pixelsPerHex * INNERRADIUS) + j * pixelsPerHex * INNERRADIUS * 2;
			let baseY = (pixelsPerHex * OUTERRADIUS) + i * pixelsPerHex * OUTERRADIUS * 1.5;
			if (i % 2 == 1)
			{
				baseX += pixelsPerHex * INNERRADIUS;
			}
			
			hexWorldMap.hexes[i*w + j] = 
			{
				p0: PerturbHexPoint({ x: baseX, y: baseY + OUTERRADIUS * pixelsPerHex }, noisemapX, noisemapY, w),
				p1: PerturbHexPoint({ x: baseX + INNERRADIUS * pixelsPerHex, y: baseY + OUTERRADIUS * pixelsPerHex / 2 }, noisemapX, noisemapY, w),
				p2: PerturbHexPoint({ x: baseX + INNERRADIUS * pixelsPerHex, y: baseY - OUTERRADIUS * pixelsPerHex / 2 }, noisemapX, noisemapY, w),
				p3: PerturbHexPoint({ x: baseX, y: baseY - OUTERRADIUS * pixelsPerHex }, noisemapX, noisemapY, w),
				p4: PerturbHexPoint({ x: baseX - INNERRADIUS * pixelsPerHex, y: baseY - OUTERRADIUS * pixelsPerHex / 2 }, noisemapX, noisemapY, w),
				p5: PerturbHexPoint({ x: baseX - INNERRADIUS * pixelsPerHex, y: baseY + OUTERRADIUS * pixelsPerHex / 2 }, noisemapX, noisemapY, w),
				height: -25,
				landmass: -1,
				lake: -1,
				mountain: -1
			}
		}
	}
	
	let minx = Math.min(Math.ceil(w/8), Math.ceil(h/8));
	let maxx = w - minx;
	let miny = minx;
	let maxy = h - miny;
	let avgheight = 0;
	let landtosearatio = 0;
	
	let landmassVal = (h+w)*0.53;
	
	while (landtosearatio < landratio)
	{
		for (let i = 0; i < landmassVal; i++)
		{
			let randomx = Math.floor(Math.random() * (maxx - minx) + minx);
			let randomy = Math.floor(Math.random() * (maxy - miny) + miny);
			let randoml = Math.floor((Math.random() * (maxx - minx) + minx) + (Math.random() * (maxy - miny) + miny));
			let currenthex = { x: randomx, y: randomy }
			let startdirection = Math.floor(Math.random() * 6);
			let heightchange = (Math.random() * 4.25) + 0.75;
			
			for (let j = 0; j < randoml; j++)
			{
				hexWorldMap.hexes[currenthex.y * w + currenthex.x].height += heightchange;
				
				MoveUpwardHex(currenthex, startdirection + Math.floor(Math.random() * 3 - 2));
				
				if (currenthex.x < minx || currenthex.x > maxx || currenthex.y < miny || currenthex.y > maxy)
				{
					randoml = -1;
				}
			}
		}
		
		let smoothedHeightmap = [h*w];
		avgheight = 0;
		landtosearatio = 0;
		
		for (let i  = 0; i < h*w; i++)
		{
			let currenthex = { x: i % w, y: Math.floor(i / w) }
			let nhex0 = GetHexNeighbour(currenthex, 0);
			let nhex1 = GetHexNeighbour(currenthex, 1);
			let nhex2 = GetHexNeighbour(currenthex, 2);
			let nhex3 = GetHexNeighbour(currenthex, 3);
			let nhex4 = GetHexNeighbour(currenthex, 4);
			let nhex5 = GetHexNeighbour(currenthex, 5);
			
			let totalheight = hexWorldMap.hexes[currenthex.y * w + currenthex.x].height;
			let hexcount = 1;
			if (nhex0.x >= 0 && nhex0.x < w && nhex0.y >= 0 && nhex0.y < h)
			{
				totalheight += hexWorldMap.hexes[nhex0.y * w + nhex0.x].height;
				hexcount++;
			}
			if (nhex1.x >= 0 && nhex1.x < w && nhex1.y >= 0 && nhex1.y < h)
			{
				totalheight += hexWorldMap.hexes[nhex1.y * w + nhex1.x].height;
				hexcount++;
			}
			if (nhex2.x >= 0 && nhex2.x < w && nhex2.y >= 0 && nhex2.y < h)
			{
				totalheight += hexWorldMap.hexes[nhex2.y * w + nhex2.x].height;
				hexcount++;
			}
			if (nhex3.x >= 0 && nhex3.x < w && nhex3.y >= 0 && nhex3.y < h)
			{
				totalheight += hexWorldMap.hexes[nhex3.y * w + nhex3.x].height;
				hexcount++;
			}
			if (nhex4.x >= 0 && nhex4.x < w && nhex4.y >= 0 && nhex4.y < h)
			{
				totalheight += hexWorldMap.hexes[nhex4.y * w + nhex4.x].height;
				hexcount++;
			}
			if (nhex5.x >= 0 && nhex5.x < w && nhex5.y >= 0 && nhex5.y < h)
			{
				totalheight += hexWorldMap.hexes[nhex5.y * w + nhex5.x].height;
				hexcount++;
			}
			
			smoothedHeightmap[i] = totalheight / hexcount;
		}
		
		for (let j = 1; j < smoothpasses; j++)
		{
			for (let i  = 0; i < h*w; i++)
			{
				let currenthex = { x: i % w, y: Math.floor(i / w) }
				let nhex0 = GetHexNeighbour(currenthex, 0);
				let nhex1 = GetHexNeighbour(currenthex, 1);
				let nhex2 = GetHexNeighbour(currenthex, 2);
				let nhex3 = GetHexNeighbour(currenthex, 3);
				let nhex4 = GetHexNeighbour(currenthex, 4);
				let nhex5 = GetHexNeighbour(currenthex, 5);
				
				let totalheight = smoothedHeightmap[currenthex.y * w + currenthex.x];
				let hexcount = 1;
				if (nhex0.x >= 0 && nhex0.x < w && nhex0.y >= 0 && nhex0.y < h)
				{
					totalheight += smoothedHeightmap[nhex0.y * w + nhex0.x];
					hexcount++;
				}
				if (nhex1.x >= 0 && nhex1.x < w && nhex1.y >= 0 && nhex1.y < h)
				{
					totalheight += smoothedHeightmap[nhex1.y * w + nhex1.x];
					hexcount++;
				}
				if (nhex2.x >= 0 && nhex2.x < w && nhex2.y >= 0 && nhex2.y < h)
				{
					totalheight += smoothedHeightmap[nhex2.y * w + nhex2.x];
					hexcount++;
				}
				if (nhex3.x >= 0 && nhex3.x < w && nhex3.y >= 0 && nhex3.y < h)
				{
					totalheight += smoothedHeightmap[nhex3.y * w + nhex3.x];
					hexcount++;
				}
				if (nhex4.x >= 0 && nhex4.x < w && nhex4.y >= 0 && nhex4.y < h)
				{
					totalheight += smoothedHeightmap[nhex4.y * w + nhex4.x];
					hexcount++;
				}
				if (nhex5.x >= 0 && nhex5.x < w && nhex5.y >= 0 && nhex5.y < h)
				{
					totalheight += smoothedHeightmap[nhex5.y * w + nhex5.x];
					hexcount++;
				}
				
				smoothedHeightmap[i] = totalheight / hexcount;
			}
		}
		
		for (let i = 0; i < (h*w); i++)
		{
			if (smoothedHeightmap[i] > 0)
				landtosearatio++;
			avgheight +=  smoothedHeightmap[i];
		}
		
		avgheight = avgheight/(h*w);
		landtosearatio = landtosearatio/(h*w);
		let max = -1.0;
		let min = 1.0;
		if (landtosearatio > landratio)
		{
			for (let i = 0; i < h*w; i++)
			{
				hexWorldMap.hexes[i].height = smoothedHeightmap[i];
				if (smoothedHeightmap[i] < min)
					min = smoothedHeightmap[i];
				if (smoothedHeightmap[i] > max)
					max = smoothedHeightmap[i];
			}
			
			hexWorldMap.heightmax = max;
			hexWorldMap.heightmin = min;
		}
		
	}
	
	let landmassCount = 0;
	
	for (let i = 0; i < h*w; i++)
	{
		if (hexWorldMap.hexes[i].height >= 0 && hexWorldMap.hexes[i].landmass == -1)
		{
			let currenthex = { x: i % w, y: Math.floor(i / w) }
			let currentlandmass = GetContiguousLandHexes(currenthex, hexWorldMap, w, h);
			
			for(let j = 0; j < currentlandmass.length; j++)
			{
				hexWorldMap.hexes[currentlandmass[j].y * w + currentlandmass[j].x].landmass = landmassCount;
			}
			
			landmassCount++;
		}
	}
	
	hexWorldMap.landmasses = landmassCount;
	
	let lakeCount = 0;
	
	for (let i = 0; i < h*w; i++)
	{
		if (hexWorldMap.hexes[i].height < 0 && hexWorldMap.hexes[i].lake == -1)
		{
			let currenthex = { x: i % w, y: Math.floor(i / w) }
			let currentlandmass = GetContiguousWaterHexes(currenthex, hexWorldMap, w, h);
			
			for(let j = 0; j < currentlandmass.length; j++)
			{
				hexWorldMap.hexes[currentlandmass[j].y * w + currentlandmass[j].x].lake = lakeCount;
			}
			
			lakeCount++;
		}
	}
	
	hexWorldMap.lakes = lakeCount;
	
	let highlandCount = 0;
	
	for (let i = 0; i < h*w; i++)
	{
		if (hexWorldMap.hexes[i].height >= HIGHLANDHEIGHT && hexWorldMap.hexes[i].mountain == -1)
		{
			let currenthex = { x: i % w, y: Math.floor(i / w) }
			let currentlandmass = GetContiguousHexesAboveHeight(currenthex, hexWorldMap, w, h, HIGHLANDHEIGHT);
			
			for(let j = 0; j < currentlandmass.length; j++)
			{
				hexWorldMap.hexes[currentlandmass[j].y * w + currentlandmass[j].x].mountain = highlandCount;
			}
			
			highlandCount++;
		}
	}
	
	hexWorldMap.highlands = highlandCount;
	
	let snowcapCount = highlandCount;
	
	for (let i = 0; i < h*w; i++)
	{
		if (hexWorldMap.hexes[i].height >= SNOWCAPHEIGHT && hexWorldMap.hexes[i].mountain < highlandCount)
		{
			let currenthex = { x: i % w, y: Math.floor(i / w) }
			let currentlandmass = GetContiguousHexesAboveHeight(currenthex, hexWorldMap, w, h, SNOWCAPHEIGHT);
			
			for(let j = 0; j < currentlandmass.length; j++)
			{
				hexWorldMap.hexes[currentlandmass[j].y * w + currentlandmass[j].x].mountain = snowcapCount;
			}
			
			snowcapCount++;
		}
	}
	
	hexWorldMap.snowcaps = snowcapCount - highlandCount;
	
	return hexWorldMap;
}

function DrawHexWorldMap(channel, arguments)
{
	let MAP_HEIGHT = 24;
	let MAP_WIDTH = 54;
	let LANDRATIO = 0.53;
	let SMOOTHING = 1;
	if (arguments != null)
	{
		let argumentpos = arguments.indexOf("-h");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			MAP_HEIGHT = Math.floor(parseInt(arguments[argumentpos+1]));
			if (MAP_HEIGHT > 240)
				MAP_HEIGHT = 240;
			if (MAP_HEIGHT <= 0)
				MAP_HEIGHT = 24;
		}
		argumentpos = arguments.indexOf("-w");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			MAP_WIDTH = Math.floor(parseInt(arguments[argumentpos+1]));
			if (MAP_WIDTH > 540)
				MAP_WIDTH = 540;
			if (MAP_WIDTH <= 0)
				MAP_WIDTH = 54;
		}
		argumentpos = arguments.indexOf("-land");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			LANDRATIO = parseFloat(arguments[argumentpos+1]);
			if (LANDRATIO > 0.66)
				LANDRATIO = 0.66;
			if (LANDRATIO <= 0)
				LANDRATIO = 0.005;
		}
		argumentpos = arguments.indexOf("-smooth");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			SMOOTHING = Math.floor(parseInt(arguments[argumentpos+1]));
			if (SMOOTHING > 7)
				SMOOTHING = 7;
			if (SMOOTHING <= 0)
				SMOOTHING = 1;
		}
	}
	
	let hexWorldMap = GenerateHexWorldMap(10, MAP_WIDTH, MAP_HEIGHT, LANDRATIO, SMOOTHING);
	
	let tempcanvas = new Canvas();
	tempcanvas.width = Math.floor(10 * INNERRADIUS * MAP_WIDTH * 2) + Math.floor(10 * INNERRADIUS * 2);
	tempcanvas.height = Math.floor(10 * OUTERRADIUS * MAP_HEIGHT * 1.5) + Math.floor(10 * OUTERRADIUS);
	
	if (tempcanvas.getContext)
	{
		let ctx = tempcanvas.getContext('2d');
		
		let r = 0;
		let g = 16;
		let b = 200;
		ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
		ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
		ctx.fillRect(0,0,tempcanvas.width,tempcanvas.height);
		
		for (let i = 0; i < hexWorldMap.landmasses; i++)
		{
			let currenthex = { x: -1, y: -1 }
			let startingpoint = { x: -1, y: -1 }
			let currentpoint = { x: -1, y: -1 }
			
			let currentcontrol1 = { x: -1, y: -1 }
			let currentcontrol2 = { x: -1, y: -1 }
			
			let currentside = 0;
			
			for (let j = 0; j < MAP_WIDTH * MAP_HEIGHT; j++)
			{
				if (hexWorldMap.hexes[j].landmass == i)
				{
					currenthex.x = j % MAP_WIDTH;
					currenthex.y = Math.floor(j / MAP_WIDTH);
					startingpoint.x = hexWorldMap.hexes[j].p3.x;
					startingpoint.y = hexWorldMap.hexes[j].p3.y;
					j =  MAP_WIDTH * MAP_HEIGHT + 1;
				}
			}
			
			if (currenthex.x != -1 && currenthex.y != -1)
			{
				/*
				ctx.beginPath();
				ctx.fillStyle = "#FFFFFF";
				console.log("landmass: " + i);
				ctx.arc(startingpoint.x, startingpoint.y, 2, 0, Math.PI*2, 0);
				ctx.closePath
				ctx.fill();
				*/
				
				
				ctx.beginPath();
				ctx.moveTo(startingpoint.x, startingpoint.y);
				//currentpoint.x = startingpoint.x;
				//currentpoint.y = startingpoint.y;
				let pointnum = 0;
				do
				{
					let adjacentHex = GetHexNeighbour(currenthex, currentside);
					if (hexWorldMap.hexes[adjacentHex.y * MAP_WIDTH + adjacentHex.x].landmass == i)
					{
						currenthex.x = adjacentHex.x;
						currenthex.y = adjacentHex.y;
						currentside -= 2;
						if (currentside < 0)
							currentside += 6;
						if (currentside >= 6)
							currentside -= 6;
					}
					
					if (pointnum % 3 == 0)
					{
						if (currentside == 0)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else if (pointnum % 3 == 1)
					{
						if (currentside == 0)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else
					{
						if (currentside == 0)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 0;
						}
					}
					pointnum++;
				}
				while ((currentpoint.x != startingpoint.x || currentpoint.y != startingpoint.y) && (currentcontrol2.x != startingpoint.x || currentcontrol2.y != startingpoint.y) && (currentcontrol1.x != startingpoint.x || currentcontrol1.y != startingpoint.y))
				
				if (pointnum % 3 == 0)
				{
					let tentativecontrolpoint = { x: (currentpoint.x - startingpoint.x) / 4 + startingpoint.x, y: (currentpoint.y - startingpoint.y) / 4 + startingpoint.y }
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, tentativecontrolpoint.x, tentativecontrolpoint.y, startingpoint.x, startingpoint.y)
				}
				else if (pointnum % 3 == 1)
				{
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, startingpoint.x, startingpoint.y)
				}
			
				//console.log("points: " + pointnum + ", " + (pointnum % 3));
				
				ctx.closePath();
				r = 104;
				g = 216;
				b = 0;
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
				
				ctx.fill();
				//ctx.stroke();
			}
		}
		
		for (let i = 1; i < hexWorldMap.lakes; i++)
		{
			let currenthex = { x: -1, y: -1 }
			let startingpoint = { x: -1, y: -1 }
			let currentpoint = { x: -1, y: -1 }
			
			let currentcontrol1 = { x: -1, y: -1 }
			let currentcontrol2 = { x: -1, y: -1 }
			
			let currentside = 0;
			
			for (let j = 0; j < MAP_WIDTH * MAP_HEIGHT; j++)
			{
				if (hexWorldMap.hexes[j].lake == i)
				{
					currenthex.x = j % MAP_WIDTH;
					currenthex.y = Math.floor(j / MAP_WIDTH);
					startingpoint.x = hexWorldMap.hexes[j].p3.x;
					startingpoint.y = hexWorldMap.hexes[j].p3.y;
					j =  MAP_WIDTH * MAP_HEIGHT + 1;
				}
			}
			
			if (currenthex.x != -1 && currenthex.y != -1)
			{
				/*
				ctx.beginPath();
				ctx.fillStyle = "#FFFFFF";
				console.log("landmass: " + i);
				ctx.arc(startingpoint.x, startingpoint.y, 2, 0, Math.PI*2, 0);
				ctx.closePath
				ctx.fill();
				*/
				
				ctx.beginPath();
				ctx.moveTo(startingpoint.x, startingpoint.y);
				//currentpoint.x = startingpoint.x;
				//currentpoint.y = startingpoint.y;
				let pointnum = 0;
				do
				{
					let adjacentHex = GetHexNeighbour(currenthex, currentside);
					if (hexWorldMap.hexes[adjacentHex.y * MAP_WIDTH + adjacentHex.x].lake == i)
					{
						currenthex.x = adjacentHex.x;
						currenthex.y = adjacentHex.y;
						currentside -= 2;
						if (currentside < 0)
							currentside += 6;
						if (currentside >= 6)
							currentside -= 6;
					}
					
					if (pointnum % 3 == 0)
					{
						if (currentside == 0)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else if (pointnum % 3 == 1)
					{
						if (currentside == 0)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else
					{
						if (currentside == 0)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 0;
						}
					}
					pointnum++;
				}
				while ((currentpoint.x != startingpoint.x || currentpoint.y != startingpoint.y) && (currentcontrol2.x != startingpoint.x || currentcontrol2.y != startingpoint.y) && (currentcontrol1.x != startingpoint.x || currentcontrol1.y != startingpoint.y))
				
				if (pointnum % 3 == 0)
				{
					let tentativecontrolpoint = { x: (currentpoint.x - startingpoint.x) / 4 + startingpoint.x, y: (currentpoint.y - startingpoint.y) / 4 + startingpoint.y }
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, tentativecontrolpoint.x, tentativecontrolpoint.y, startingpoint.x, startingpoint.y)
				}
				else if (pointnum % 3 == 1)
				{
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, startingpoint.x, startingpoint.y)
				}
				
				ctx.closePath();
				r = 0;
				g = 48;
				b = 224;
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
				
				ctx.fill();
				//ctx.stroke();
			}
		}
		
		for (let i = 0; i < hexWorldMap.highlands; i++)
		{
			let currenthex = { x: -1, y: -1 }
			let startingpoint = { x: -1, y: -1 }
			let currentpoint = { x: -1, y: -1 }
			
			let currentcontrol1 = { x: -1, y: -1 }
			let currentcontrol2 = { x: -1, y: -1 }
			
			let currentside = 0;
			
			for (let j = 0; j < MAP_WIDTH * MAP_HEIGHT; j++)
			{
				if (hexWorldMap.hexes[j].mountain == i)
				{
					currenthex.x = j % MAP_WIDTH;
					currenthex.y = Math.floor(j / MAP_WIDTH);
					startingpoint.x = hexWorldMap.hexes[j].p3.x;
					startingpoint.y = hexWorldMap.hexes[j].p3.y;
					j =  MAP_WIDTH * MAP_HEIGHT + 1;
				}
			}
			
			if (currenthex.x != -1 && currenthex.y != -1)
			{
				/*
				ctx.beginPath();
				ctx.fillStyle = "#FFFFFF";
				console.log("landmass: " + i);
				ctx.arc(startingpoint.x, startingpoint.y, 2, 0, Math.PI*2, 0);
				ctx.closePath
				ctx.fill();
				*/
				
				ctx.beginPath();
				ctx.moveTo(startingpoint.x, startingpoint.y);
				//currentpoint.x = startingpoint.x;
				//currentpoint.y = startingpoint.y;
				let pointnum = 0;
				do
				{
					let adjacentHex = GetHexNeighbour(currenthex, currentside);
					if (hexWorldMap.hexes[adjacentHex.y * MAP_WIDTH + adjacentHex.x].mountain == i)
					{
						currenthex.x = adjacentHex.x;
						currenthex.y = adjacentHex.y;
						currentside -= 2;
						if (currentside < 0)
							currentside += 6;
						if (currentside >= 6)
							currentside -= 6;
					}
					
					if (pointnum % 3 == 0)
					{
						if (currentside == 0)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else if (pointnum % 3 == 1)
					{
						if (currentside == 0)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else
					{
						if (currentside == 0)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 0;
						}
					}
					pointnum++;
				}
				while ((currentpoint.x != startingpoint.x || currentpoint.y != startingpoint.y) && (currentcontrol2.x != startingpoint.x || currentcontrol2.y != startingpoint.y) && (currentcontrol1.x != startingpoint.x || currentcontrol1.y != startingpoint.y))
				
				if (pointnum % 3 == 0)
				{
					let tentativecontrolpoint = { x: (currentpoint.x - startingpoint.x) / 4 + startingpoint.x, y: (currentpoint.y - startingpoint.y) / 4 + startingpoint.y }
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, tentativecontrolpoint.x, tentativecontrolpoint.y, startingpoint.x, startingpoint.y)
				}
				else if (pointnum % 3 == 1)
				{
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, startingpoint.x, startingpoint.y)
				}
				
				ctx.closePath();
				r = 160;
				g = 152;
				b = 144;
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
				
				ctx.fill();
				//ctx.stroke();
			}
		}
		
		for (let i = hexWorldMap.highlands; i < hexWorldMap.highlands + hexWorldMap.snowcaps; i++)
		{
			let currenthex = { x: -1, y: -1 }
			let startingpoint = { x: -1, y: -1 }
			let currentpoint = { x: -1, y: -1 }
			
			let currentcontrol1 = { x: -1, y: -1 }
			let currentcontrol2 = { x: -1, y: -1 }
			
			let currentside = 0;
			
			for (let j = 0; j < MAP_WIDTH * MAP_HEIGHT; j++)
			{
				if (hexWorldMap.hexes[j].mountain == i)
				{
					currenthex.x = j % MAP_WIDTH;
					currenthex.y = Math.floor(j / MAP_WIDTH);
					startingpoint.x = hexWorldMap.hexes[j].p3.x;
					startingpoint.y = hexWorldMap.hexes[j].p3.y;
					j =  MAP_WIDTH * MAP_HEIGHT + 1;
				}
			}
			
			if (currenthex.x != -1 && currenthex.y != -1)
			{
				/*
				ctx.beginPath();
				ctx.fillStyle = "#FFFFFF";
				console.log("landmass: " + i);
				ctx.arc(startingpoint.x, startingpoint.y, 2, 0, Math.PI*2, 0);
				ctx.closePath
				ctx.fill();
				*/
				
				ctx.beginPath();
				ctx.moveTo(startingpoint.x, startingpoint.y);
				//currentpoint.x = startingpoint.x;
				//currentpoint.y = startingpoint.y;
				let pointnum = 0;
				do
				{
					let adjacentHex = GetHexNeighbour(currenthex, currentside);
					if (hexWorldMap.hexes[adjacentHex.y * MAP_WIDTH + adjacentHex.x].mountain == i)
					{
						currenthex.x = adjacentHex.x;
						currenthex.y = adjacentHex.y;
						currentside -= 2;
						if (currentside < 0)
							currentside += 6;
						if (currentside >= 6)
							currentside -= 6;
					}
					
					if (pointnum % 3 == 0)
					{
						if (currentside == 0)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol1.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol1.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else if (pointnum % 3 == 1)
					{
						if (currentside == 0)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentcontrol2.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentcontrol2.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							currentside = 0;
						}
					}
					else
					{
						if (currentside == 0)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p2.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 1;
						}
						else if (currentside == 1)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p1.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 2;
						}
						else if (currentside == 2)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p0.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 3;
						}
						else if (currentside == 3)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p5.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 4;
						}
						else if (currentside == 4)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p4.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 5;
						}
						else if (currentside == 5)
						{
							currentpoint.x = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.x;
							currentpoint.y = hexWorldMap.hexes[currenthex.y * MAP_WIDTH + currenthex.x].p3.y;
							ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, currentpoint.x, currentpoint.y)
							currentside = 0;
						}
					}
					pointnum++;
				}
				while ((currentpoint.x != startingpoint.x || currentpoint.y != startingpoint.y) && (currentcontrol2.x != startingpoint.x || currentcontrol2.y != startingpoint.y) && (currentcontrol1.x != startingpoint.x || currentcontrol1.y != startingpoint.y))
				
				if (pointnum % 3 == 0)
				{
					let tentativecontrolpoint = { x: (currentpoint.x - startingpoint.x) / 4 + startingpoint.x, y: (currentpoint.y - startingpoint.y) / 4 + startingpoint.y }
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, tentativecontrolpoint.x, tentativecontrolpoint.y, startingpoint.x, startingpoint.y)
				}
				else if (pointnum % 3 == 1)
				{
					ctx.bezierCurveTo(currentcontrol1.x, currentcontrol1.y, currentcontrol2.x, currentcontrol2.y, startingpoint.x, startingpoint.y)
				}
				
				ctx.closePath();
				r = 248;
				g = 248;
				b = 255;
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
				
				ctx.fill();
				//ctx.stroke();
			}
		}
		
		
		/*
		for (let i = 0; i < MAP_WIDTH*MAP_HEIGHT; i++)
		{
			
			let xpos = (10 * INNERRADIUS) + (i % MAP_WIDTH) * 10 * INNERRADIUS * 2;
			let ypos = (10 * OUTERRADIUS) + Math.floor(i / MAP_WIDTH) * 10 * OUTERRADIUS * 1.5;
			if (Math.floor(i / MAP_WIDTH) % 2 == 1)
			{
				xpos += 10 * INNERRADIUS;
			}
			
			ctx.font = "8px serif";
			ctx.fillStyle = "#000000";
			ctx.fillText(Math.floor(hexWorldMap.hexes[i].mountain).toString(), xpos, ypos);
			
			
			/*
			//console.log("hex " + i + " height: " + hexWorldMap.hexes[i].height);
			ctx.beginPath();
			ctx.moveTo(hexWorldMap.hexes[i].p0.x, hexWorldMap.hexes[i].p0.y);
			ctx.lineTo(hexWorldMap.hexes[i].p1.x, hexWorldMap.hexes[i].p1.y);
			ctx.lineTo(hexWorldMap.hexes[i].p2.x, hexWorldMap.hexes[i].p2.y);
			ctx.lineTo(hexWorldMap.hexes[i].p3.x, hexWorldMap.hexes[i].p3.y);
			ctx.lineTo(hexWorldMap.hexes[i].p4.x, hexWorldMap.hexes[i].p4.y);
			ctx.lineTo(hexWorldMap.hexes[i].p5.x, hexWorldMap.hexes[i].p5.y);
			ctx.closePath();
			//ctx.stroke();
			let r = 0;
			let g = 0;
			let b = 0;
			if (hexWorldMap.hexes[i].height < 0)
			{
				//ctx.fillStyle = "#0033CC"; // base water, "#000066" deep water
				//ctx.strokeStyle = "#0033CC";
				r = 0;
				g = Math.floor(51 + hexWorldMap.hexes[i].height / hexWorldMap.heightmin * -51);
				b = Math.floor(204 + hexWorldMap.hexes[i].height / hexWorldMap.heightmin * -102);
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
			}
			else if (hexWorldMap.hexes[i].height < 32)
			{
				//ctx.fillStyle = "#11EE00"; // base land, "#CC1100" mountain land
				//ctx.strokeStyle = "#11EE00";
				// "#11EE00"; #CCDD00
				r = Math.floor(238 + hexWorldMap.hexes[i].height / 32 * -211);
				g = 238;
				b = 0;
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
			}
			else if (hexWorldMap.hexes[i].height < 64)
			{
				//ctx.fillStyle = "#11EE00"; // base land, "#CC1100" mountain land
				//ctx.strokeStyle = "#11EE00";
				// "#11EE00"; #CCDD00
				r = Math.floor(17 + (hexWorldMap.hexes[i].height - 32) / 32 * 187);
				g = Math.ceil(238 + ((hexWorldMap.hexes[i].height - 32) / 32 * -211));
				b = 0;
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
			}
			else if (hexWorldMap.hexes[i].height < 100)
			{
				//ctx.fillStyle = "#11EE00"; // base land, "#CC1100" mountain land
				//ctx.strokeStyle = "#11EE00";
				// "#11EE00"; #CCDD00
				r = Math.floor(204 + (hexWorldMap.hexes[i].height - 64) / 36 * -160);
				g = Math.ceil(17 + ((hexWorldMap.hexes[i].height - 64) / 36 * -17));
				b = 0;
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
				ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
			}
			ctx.fill();
			ctx.stroke();
			
		}
		*/
		
		
		
		
		//output file
		let file = 'drawntown.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
			channel.send({ files: [{ attachment: path, name: file }] });
		})
	}
	
}


//
// handle errors??? no

client.on('error', console.error);


//
// engage ALLIDROID

client.login(logintoken); //allidroid logon

initializeAndStartAdventureSim();
MarkovPhonemeNameTrain();