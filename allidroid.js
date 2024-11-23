////////
//
// written by AnomAllison
// last updated 23/11/2024
//
// I hope Allidroid can bring people some humour and entertainment
//
////////

//const Discord = require('discord.js')
//const client = new Discord.Client()

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildEmojiAndStickers, GatewayIntentBits.DirectMessages ] });


const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

const paper = require('paper-jsdom-canvas');
const { PaperOffset } = require('paperjs-offset');

const Voronoi = require('voronoi');

var fs = require("fs");

const monster_types = 
{
	FRIEND: "monster friend",
	BOSS: "boss monster",
	MOOK: "monster mook"
}

//numbers as words
var numbers_as_words = JSON.parse(fs.readFileSync('numbers_as_words.json'));

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

//turtle generator files
var turtle_gen = JSON.parse(fs.readFileSync('turtle_gen/turtle_gen.json'));

//slime generator files
var slime_gen = JSON.parse(fs.readFileSync('slime_gen/slime_gen.json'));

//familiar generator files
var familiar_gen = JSON.parse(fs.readFileSync('familiar_gen/familiar_gen.json'));

//psyduck generator files
var psyduck_gen = JSON.parse(fs.readFileSync('psyduck_gen/psyduck_gen.json'));

//mini map generator files
var minimap_gen = JSON.parse(fs.readFileSync('minimap_gen/minimap_gen.json'));

//mini map generator files
var dungeon_gen_assets = JSON.parse(fs.readFileSync('dungeon_gen_assets/dungeon_gen_assets.json'));

// D&D 5e adventure generator files
var dnd_adventure_gen = JSON.parse(fs.readFileSync('dd5e_adventure_gen.json'));

// blaseballer generator files
var blaseballer_gen = JSON.parse(fs.readFileSync('blaseballer_gen.json'));

//city generator files
var city_gen = JSON.parse(fs.readFileSync('city_gen/city_generator.json'));
var hexcity_gen = JSON.parse(fs.readFileSync('hexcity_gen/hexcitygenerator.json'));


//citygen svg files
var citygen_svg = JSON.parse(fs.readFileSync('citygen_svg/citygen_svg.json'));

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

var gacha_card_gen = JSON.parse(fs.readFileSync('gacha_card_gen.json'));

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

// pickup line files
var pickupline_gen = JSON.parse(fs.readFileSync('pickupline_gen.json'));

// diner menu files
var dinermenu_gen = JSON.parse(fs.readFileSync('dinermenu_gen.json'));

// trinket gen files
var trinket_gen = JSON.parse(fs.readFileSync('trinket_gen.json'));

// war advice from file
var war_advice = JSON.parse(fs.readFileSync('waradvice.json'));

// podcaster gen from file
var podcaster_gen = JSON.parse(fs.readFileSync('podcaster_gen.json'));

// tavern gen from file
var tavern_gen = JSON.parse(fs.readFileSync('tavern_gen.json'));


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

async function processCommand(receivedMessage) 
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
		output = rollManyDice(arguments[0], arguments[1]);
		if (output.total.toString().length > 1960)
			receivedMessage.channel.send("Output too large to display.");
		else if (output.total.toString().length + output.details.length + 5 > 2000)
			receivedMessage.channel.send("**" + output.total + "** (Details are too long to display)");
		else
			receivedMessage.channel.send("**" + output.total + "** " + output.details);
		return;
    } else if (normalizedCommand == "gay") 
	{
		output = howgay(arguments[0]);
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
    } else if (normalizedCommand == "gachacard") 
	{
		OpenBoosterPack(receivedMessage.channel);
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
    /* } else if (normalizedCommand == "remindme") 
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
		return; */
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
	} else if (normalizedCommand == "isometricmap") 
	{
		generateIsometricWorldMap(receivedMessage.channel,arguments);
	} else if (normalizedCommand == "minimap") 
	{
		GenerateMiniMap(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "dndadventure") 
	{
		output = GenerateDnDAdventure();
		
		if (output == null)
		{
			console.log("failed command: dndadventure");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndnpc") 
	{
		output = GenerateDnDNPC();
		
		if (output == null)
		{
			console.log("failed command: dndnpc");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndvillain") 
	{
		output = GenerateDnDVillain();
		
		if (output == null)
		{
			console.log("failed command: dndvillain");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndmonster") 
	{
		output = RandomArrayEntry(dnd_adventure_gen.Monsters);
		
		if (output == null)
		{
			console.log("failed command: dndmonster");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndrace") 
	{
		output = RandomArrayEntry(dnd_adventure_gen.CharacterRace);
		
		if (output == null)
		{
			console.log("failed command: dndmonster");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dnddungeon") 
	{
		output = GenerateDnDDungeon();
		
		if (output == null)
		{
			console.log("failed command: dnddungeon");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndchamber") 
	{
		output = GenerateDnDDungeonChamber();
		
		if (output == null)
		{
			console.log("failed command: dndchamber");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndtrap") 
	{
		output = GenerateDnDDungeonTrap();
		
		if (output == null)
		{
			console.log("failed command: dndtrap");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndtrick") 
	{
		output = GenerateDnDDungeonTrick();
		
		if (output == null)
		{
			console.log("failed command: dndtrick");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndlootpile") 
	{
		output = GenerateDnDLoot(arguments);
		
		if (output == null)
		{
			console.log("failed command: dndlootpile");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndmagicitem") 
	{
		output = GenerateDnDMagicItemGeneric();
		
		if (output == null)
		{
			console.log("failed command: dndmagicitem");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "dndworldshakingevent") 
	{
		output = GenerateDnDWorldShakingEvent();
		
		if (output == null)
		{
			console.log("failed command: dndworldshakingevent");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "blaseballer") 
	{
		output = GenerateBlaseballer();
		
		if (output == null)
		{
			console.log("failed command: blaseballer");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    } else if (normalizedCommand == "generategoblin") 
	{
		generateGoblin(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "generatedungeonmap") 
	{
		OutputTileMap(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "psyduck") 
	{
		generatePsyduck(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "frog") 
	{
		generateFren(receivedMessage.channel,arguments);
    } else if (normalizedCommand == "turt" || normalizedCommand == "turtle") 
	{
		generateTurtle(receivedMessage.channel,arguments);
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
    }else if (normalizedCommand == "generatevillage") 
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
	else if (normalizedCommand == "drawdungeonmap")
	{
		DrawDrawnDungeonMap(receivedMessage.channel,arguments);
	}
	else if (normalizedCommand == "rendertownmap")
	{
		DrawTownMap(receivedMessage.channel,arguments);
	}/*
	else if (normalizedCommand == "polygonmap")
	{
		DrawVoronoiMapMap(receivedMessage.channel,arguments);
	}
	else if (normalizedCommand == "voronoicity")
	{
		DrawVoronoiCity(receivedMessage.channel,arguments);
	}*/
	else if (normalizedCommand == "battleships") 
	{
		PlayBattleshipsGame(receivedMessage.channel, arguments);
    }
	else if (normalizedCommand == "startbattleships") 
	{
		InitializeNewBattleshipsGame(receivedMessage.channel, arguments);
    }
	else if (normalizedCommand == "viewbattleships") 
	{
		try
		{
			let boardimage_promise = new Promise(function(resolve, reject) {
				resolve(GetBattleshipsBoardImage(receivedMessage.channel));
			});
			
			let boardimage = await boardimage_promise;
			
			receivedMessage.channel.send({files: [{ attachment: boardimage.path, name: boardimage.file }] });
			
			ViewBattleshipsBoard(receivedMessage.channel);
		}
		catch (err)
		{
			receivedMessage.channel.send(err.message);
		}
	}
	else if (normalizedCommand == "pickupline") 
	{
		output = generatePickUpLine();
		
		if (output == null)
		{
			console.log("failed command: pickupline");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    }
	else if (normalizedCommand == "kronk") 
	{
		output = orderFromDiner(arguments[0]);
		
		if (output == null)
		{
			console.log("failed command: kronk");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    }
	else if (normalizedCommand == "trinket") 
	{
		output = buyTrinket();
		
		if (output == null)
		{
			console.log("failed command: trinket");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    }
	else if (normalizedCommand == "gotowar")
	{
		let answer = RandomArrayEntry(war_advice.advice, false, "[donotnest]");
		if (answer.length > 0)
			receivedMessage.channel.send(answer);
		return;
	}
	else if (normalizedCommand == "podcaster")
	{
		let output = generatePodcaster();
		
		if (output == null)
		{
			console.log("failed command: podcaster");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
	}
	else if (normalizedCommand == "tavern")
	{
		let output = GenerateTavern();
		
		if (output == null)
		{
			console.log("failed command: tavern");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
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

const MAX_COIN_INSERT = 768;

function howgay(value)
{
	let intvalue = parseInt(value);
	
	
	if (intvalue < 0)
		return "You cannot take out coins, you must !shake the gay jar";
	
	if (intvalue > MAX_COIN_INSERT)
	{
		currentgay = 0;
		saveCurrentGayValue();
		return "You try to shove too many coins in at once, causing the jar to explode!"
	}
	
	let gayresult = "";
	if (intvalue == 1 || intvalue == null || isNaN(intvalue))
	{
		currentgay++;
		gayresult = "You put a coin in the gay jar. There are currently " + currentgay + " coins in the gay jar.";
		if (currentgay == 1)
		{
			gayresult = "You put a coin in the gay jar. There is currently 1 coin in the gay jar.";
		}
	}
	else
	{
		currentgay += intvalue;
		gayresult = "You put " + intvalue.toString() + " coins in the gay jar. There are currently " + currentgay + " coins in the gay jar.";
	}
	
	
	let baserand = Math.random()+(currentgay*0.01);
	
	if (baserand > 0.98)
		gayresult += " :tada:";
	
	saveCurrentGayValue();
	
	return gayresult;
}

//
//
//

function gaygacha(coins)
{
	let baserand = Math.random() - coins*0.008;

	let rarity = getGachaRarity(baserand);
	let stars = 0;
	if (rarity == "Super Hyper Ultra Legendary")
	{
		stars = 10;
	}
	else if (rarity == "Hyper Legendary")
	{
		stars = 9;
	}
	else if (rarity == "Legendary")
	{
		stars = 8;
	}
	else if (rarity == "Super Rare")
	{
		stars = 7;
	}
	else if (rarity == "Rare")
	{
		stars = 6;
	}
	else if (rarity == "Less Common")
	{
		stars = 5;
	}
	else if (rarity == "Crappy Common")
	{
		stars = 4;
	}
	else if (rarity == "Uncommon")
	{
		stars = 3;
	}
	else if (rarity == "Worse Than Trash")
	{
		stars = 2;
	}
	else if (rarity == "Less Common")
	{
		stars = 1;
	}
	else if (rarity == "Trash")
	{
		stars = 0;
	}
	let hero_base = generateMonster("gaycha",0,0,1);
	let hero_class = boss_generator.classes[Math.floor(Math.random()*boss_generator.classes.length)];
	
	let hero_name = generateBossName(false);
	
	let gaycha_result = { rarity: rarity, base: hero_base, hero_class: hero_class, name: hero_name, stars: stars };
	//let fullreturnstring = "[" + rarity + "] " + hero_name + ", the " + hero_base + " " + hero_class;
	
	return gaycha_result;
}



//
//
//

var MAX_COIN_PERCENTAGE = 0.1666;
var MAX_COINS = 40;

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
		while (randomcoins == 0 || randomcoins > MAX_COINS)
		{
			randomcoins = Math.floor((Math.random()+Math.random()/2)*MAX_COIN_PERCENTAGE*currentgay);
			if (Math.random() < 0.08)
				shaketime++;
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
	let baseitemtypes = ["shortblade","largeblade","dagger","throwingknives","ropeweapon","polearm","staff","magestaff","smallhammer","largehammer","wand","magicoffhand","smallarms","longarms","armour","clothes","bow","sling","tool","shield","jewelery","holysymbol","pokemon"];
	let basegaychakeywords = ["arcane","alchemy","holy","karate","martial","rogueish","cyberpunk","necromantic", "psionic","himbo","twink","firearm","pokemon"];
	
	let gaychakeywords = [];
	for (let x = 0; x < hero.hero_class.keywords.length; x++)
	{
		if (basegaychakeywords.includes(hero.hero_class.keywords[x]))
		{
			gaychakeywords.push(hero.hero_class.keywords[x]);
		}			
	}
	
	gaychakeywords.push(RandomArrayEntry(basegaychakeywords, false, "[doesnotnest]"));

	let baseitem = generateGaychaItem(baseitemtypes, gaychakeywords);
	
	let hero_item = item_artifactnames.magic[Math.floor((Math.random()*item_artifactnames.magic.length))] + " " + baseitem.item;
	
	let position = hero_item.indexOf("\[");
	let endposition = -1;
	let hero_item_substr = "";
	
	while (position != -1)
	{
		endposition = hero_item.indexOf("\]");
		hero_item_substr = hero_item.substring(position+1,endposition);
		//substrcommands = hero_item.split(" ");
		substr_number = randomNumberForText(hero_item_substr);
		
		hero_item = hero_item.substr(0,position) + substr_number + hero_item.substr(endposition+1);
		
		position = hero_item.indexOf("\[");
	}
	
	let fullstring = "[" + hero.rarity + "] " + hero.name + " the " + hero.base + " " + hero.hero_class.class + " with " + grammarAorAn(hero_item.charAt(0)) + " " + hero_item;
	
	let shakestring = ""
	if (shaketime > 3)
	{
		shakestring = "You give the jar a really really good shake, getting ";
	}
	else if (shaketime > 1)
	{
		shakestring = "You give the jar a good shake, getting ";
	}
	else
	{
		shakestring = "You shake ";
	}
	
	if (randomcoins > 1)
		fullstring = shakestring + randomcoins + " coins from the jar and spend them on the gaycha! You get: \n" + fullstring;
	else
		fullstring = shakestring + " 1 coin from the jar and spend it on the gaycha! You get: \n" + fullstring;
		
	saveCurrentGayValue();
	
	return fullstring;
}

function OpenBoosterPack(channel)
{
	if (currentgay == 0)
	{
		return "the gay jar is empty";
	}
	
	let randomcoins = 0
	let shaketime = 0
	
	if (currentgay > 5)
	{
		while (randomcoins == 0 || randomcoins > MAX_COINS)
		{
			randomcoins = Math.floor((Math.random()+Math.random()/2)*MAX_COIN_PERCENTAGE*currentgay);
			if (Math.random() < 0.08)
				shaketime++;
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
	let baseitemtypes = ["shortblade","largeblade","dagger","throwingknives","ropeweapon","polearm","staff","magestaff","smallhammer","largehammer","wand","magicoffhand","smallarms","longarms","armour","clothes","bow","sling","tool","shield","jewelery","holysymbol","pokemon"];
	let basegaychakeywords = ["arcane","alchemy","holy","karate","martial","rogueish","cyberpunk","necromantic", "psionic","himbo","twink","firearm","pokemon"];
	
	let gaychakeywords = [];
	for (let x = 0; x < hero.hero_class.keywords.length; x++)
	{
		if (basegaychakeywords.includes(hero.hero_class.keywords[x]))
		{
			gaychakeywords.push(hero.hero_class.keywords[x]);
		}			
	}
	
	gaychakeywords.push(RandomArrayEntry(basegaychakeywords, false, "[doesnotnest]"));

	let baseitem = generateGaychaItem(baseitemtypes, gaychakeywords);
	
	let hero_item = item_artifactnames.magic[Math.floor((Math.random()*item_artifactnames.magic.length))] + " " + baseitem.item;
	
	let position = hero_item.indexOf("\[");
	let endposition = -1;
	let hero_item_substr = "";
	
	while (position != -1)
	{
		endposition = hero_item.indexOf("\]");
		hero_item_substr = hero_item.substring(position+1,endposition);
		//substrcommands = hero_item.split(" ");
		substr_number = randomNumberForText(hero_item_substr);
		
		hero_item = hero_item.substr(0,position) + substr_number + hero_item.substr(endposition+1);
		
		position = hero_item.indexOf("\[");
	}
	
	let special_text = "Equipped with " + grammarAorAn(hero_item.charAt(0)) + " " + hero_item;
	
	let shakestring = ""
	if (shaketime > 3)
	{
		shakestring = "You give the jar a really really good shake, getting ";
	}
	else if (shaketime > 1)
	{
		shakestring = "You give the jar a good shake, getting ";
	}
	else
	{
		shakestring = "You shake ";
	}
	let fullstring = "";
	
	if (randomcoins > 1)
		fullstring = shakestring + randomcoins + " coins from the jar and spend them on a gaycha booster! You get:";
	else
		fullstring = shakestring + " 1 coin from the jar and spend it on a gaycha booster! You get:";
	
	DrawGachaCard(channel, hero, special_text, fullstring);
	
	saveCurrentGayValue();
}

function orderFromDiner(coins)
{
	if (coins == null || isNaN(coins))
	{
		coins = 1 + Math.floor(Math.random()*7);
		
		if (coins > currentgay)
			coins = currentgay;
	}
	
	if (coins < 1)
		return "You cannot dine and dash at the diner";
	
	if (coins > currentgay)
		return "There aren't enough coins in the gay jar for an order that big";
	
	let dinerorder = generateDinerOrder(coins);
	currentgay -= coins;
	saveCurrentGayValue();
	return dinerorder;
}

let MAX_MEAL_VALUE = 21;

function generateDinerOrder(coins)
{
	let mealvalue = coins * ((Math.random() * 0.4) + 0.25);
	
	if (mealvalue < 1)
		mealvalue = 1;
	if (mealvalue > MAX_MEAL_VALUE)
		mealvalue = MAX_MEAL_VALUE;
	
	let order_items = [];
	
	let orderup = "";
	
	for(let i = 0; i < mealvalue; i++)
	{
		let meal = dinermenu_gen.meals[Math.floor(Math.random()*dinermenu_gen.meals.length)];
		let drink = dinermenu_gen.drinks[Math.floor(Math.random()*dinermenu_gen.drinks.length)];
		let mealedit = dinermenu_gen.mealedits[Math.floor(Math.random()*dinermenu_gen.mealedits.length)];
		let baserand = Math.random();
		
		let item = { text: "", number: 1};
		
		if (baserand < 0.33)
		{
			item.text = meal;
		}
		else if (baserand < 0.87)
		{
			item.text = meal + ", " + mealedit;
		}
		else
		{
			item.text = drink;
		}
		
		let item_not_found = true
		
		for (let j = 0; j < order_items.length; j++)
		{
			if (order_items[j].text == item.text)
			{
				order_items[j].number += 1;
				item_not_found = false;
				break;
			}
		}
		if (item_not_found)
		{
			order_items.push(item)
		}
		
	}
	
	for (let k = 0; k < order_items.length; k++)
	{
		orderup += numbers_as_words[order_items[k].number] + " " + order_items[k].text;
		if (k < order_items.length - 2)
		{
			orderup += ", ";
		}
		else if (k < order_items.length - 1)
		{
			orderup += " and ";
		}
		
	}
	
	console.log("coins: " + coins)
	
	if (coins == 1)
		orderup += "\nThat'll be 1 coin";
	else
		orderup += "\nThat'll be " + coins.toString() + " coins";
	
	return grammarCapitalFirstLetter(orderup);
}


//
//
// trinket generation

function generateTrinket()
{
	let trinkettext = trinket_gen.bodytexts[Math.floor(Math.random()*trinket_gen.bodytexts.length)];
	
	let position = trinkettext.indexOf("\[");
	let endposition = -1;
	let trinketsubstr = "";
	
	while (position != -1)
	{
		endposition = trinkettext.indexOf("\]");
		trinketsubstr = trinkettext.substring(position+1,endposition);
		substrcommands = trinketsubstr.split(" ");
		if (substrcommands[0] == "an")
		{
			let primaryword = "";
			if (substrcommands[1] == "adjective")
			{
				primaryword = trinket_gen.adjectives[Math.floor(Math.random()*trinket_gen.adjectives.length)];
			}
			else if (substrcommands[1] == "hardmaterials")
			{
				primaryword = trinket_gen.hardmaterials[Math.floor(Math.random()*trinket_gen.hardmaterials.length)];
			}
			else if (substrcommands[1] == "softmaterials")
			{
				primaryword = trinket_gen.softmaterials[Math.floor(Math.random()*trinket_gen.softmaterials.length)];
			}
			else if (substrcommands[1] == "gemstone")
			{
				primaryword = trinket_gen.gemstones[Math.floor(Math.random()*trinket_gen.gemstones.length)];
			}
			else if (substrcommands[1] == "smalleritem")
			{
				primaryword = trinket_gen.smalleritems[Math.floor(Math.random()*trinket_gen.smalleritems.length)];
			}
			else if (substrcommands[1] == "book")
			{
				primaryword = trinket_gen.books[Math.floor(Math.random()*trinket_gen.books.length)];
			}
			else if (substrcommands[1] == "factoid")
			{
				primaryword = trinket_gen.factoids[Math.floor(Math.random()*trinket_gen.factoids.length)];
			}
			else if (substrcommands[1] == "character")
			{
				primaryword = trinket_gen.characters[Math.floor(Math.random()*trinket_gen.characters.length)];
			}
			else if (substrcommands[1] == "creature")
			{
				primaryword = trinket_gen.creatures[Math.floor(Math.random()*trinket_gen.creatures.length)];
			}
			else if (substrcommands[1] == "bodypart")
			{
				primaryword = trinket_gen.bodyparts[Math.floor(Math.random()*trinket_gen.bodyparts.length)];
			}
			let aan = grammarAorAn(primaryword.substr(0,1));
			trinkettext = trinkettext.substr(0,position) + aan + " " + primaryword + trinkettext.substr(endposition+1);
		}
		else
		{
			let primaryword = "";
			if (substrcommands[0] == "adjective")
			{
				primaryword = trinket_gen.adjectives[Math.floor(Math.random()*trinket_gen.adjectives.length)];
			}
			else if (substrcommands[0] == "hardmaterials")
			{
				primaryword = trinket_gen.hardmaterials[Math.floor(Math.random()*trinket_gen.hardmaterials.length)];
			}
			else if (substrcommands[0] == "softmaterials")
			{
				primaryword = trinket_gen.softmaterials[Math.floor(Math.random()*trinket_gen.softmaterials.length)];
			}
			else if (substrcommands[0] == "gemstone")
			{
				primaryword = trinket_gen.gemstones[Math.floor(Math.random()*trinket_gen.gemstones.length)];
			}
			else if (substrcommands[0] == "smalleritem")
			{
				primaryword = trinket_gen.smalleritems[Math.floor(Math.random()*trinket_gen.smalleritems.length)];
			}
			else if (substrcommands[0] == "book")
			{
				primaryword = trinket_gen.books[Math.floor(Math.random()*trinket_gen.books.length)];
			}
			else if (substrcommands[0] == "factoid")
			{
				primaryword = trinket_gen.factoids[Math.floor(Math.random()*trinket_gen.factoids.length)];
			}
			else if (substrcommands[0] == "character")
			{
				primaryword = trinket_gen.characters[Math.floor(Math.random()*trinket_gen.characters.length)];
			}
			else if (substrcommands[0] == "creature")
			{
				primaryword = trinket_gen.creatures[Math.floor(Math.random()*trinket_gen.creatures.length)];
			}
			else if (substrcommands[0] == "bodypart")
			{
				primaryword = trinket_gen.bodyparts[Math.floor(Math.random()*trinket_gen.bodyparts.length)];
			}
			trinkettext = trinkettext.substr(0,position) + primaryword + trinkettext.substr(endposition+1);
		}
		position = trinkettext.indexOf("\[");
	}
	
	return grammarCapitalFirstLetter(trinkettext);
}

function buyTrinket()
{
	let coins = 2 + Math.floor(Math.random()*9);
	if (coins > currentgay)
		coins = currentgay;
	
	if (coins < 2)
		return "You don't have enough coins to buy a trinket";

	let trinketpurchase = generateTrinket();
	currentgay -= coins;
	saveCurrentGayValue();
	trinketpurchase += "\nThat's " + coins.toString() + " coins";
	return trinketpurchase;
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

function filterByListArray(array)
{
	for (let j in this)
	{
		for (let i in array)
		{
			if (this[j] == array[i])
				return true;
		}
	}
	return false;
}

//
// filter the objects by whether 'this' is one of the keywords it has
//

function filterGaychaByAtleastOneKeyword(object)
{
	for (let j in this)
	{
		for (let i in object.gaychaKeywords)
		{
			if (this[j] == object.gaychaKeywords[i])
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

function removeByListArray(array)
{
	for (let j in this)
	{
		for (let i in array)
		{
			if (this[j] == array[i])
				return false;
		}
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
			if (this[l] != object.lists[i])
				return false;
		}
	}
	return true;
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
		tempcharlist = tempcharlist.filter(filterByAtleastOneList,sublistfull);
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
	let positionmulti = fulldicestring.indexOf("*");
	let positionmulti2 = fulldicestring.indexOf("\*");
	let position = -1;
	let positions = [];
	let disadvantage = false;
	let advantage = false;
	
	if (advDisadv == "disadvantage")
		disadvantage = true;
	else if (advDisadv == "advantage")
		advantage = true;
	
	if (positionu43 != -1)
		positions.push(positionu43)
	if (positionu45 != -1)
		positions.push(positionu45)
	if (positionmulti != -1)
		positions.push(positionmulti)
	if (positionmulti2 != -1)
		positions.push(positionmulti2)
	
	if (positions.length > 1)
		position = Math.min(...positions);
	else
		position = positions[0];
	
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
	while (charat != "" && charat != undefined)
	{
		let positionu43 = fulldicestring.substr(1).indexOf("+");
		let positionu45 = fulldicestring.substr(1).indexOf("-");
		let positionmulti = fulldicestring.substr(1).indexOf("*");
		let positionmulti2 = fulldicestring.substr(1).indexOf("\*");
		let end = -1;
		let positions = [];
		let position = -1;
		
		if (positionu43 != -1)
			positions.push(positionu43)
		if (positionu45 != -1)
			positions.push(positionu45)
		if (positionmulti != -1)
			positions.push(positionmulti)
		if (positionmulti2 != -1)
			positions.push(positionmulti2)
		
		if (positions.length > 1)
			position = Math.min(...positions);
		else if (positions.length == 1)
			position = positions[0];
		
		if (position > -1)
			end = position;
		else
			end = fulldicestring.length-1;
		
		if (charat == "+")
			dice.push({ die: fulldicestring.substr(1,end), operation: "+"});
		else if (charat == "-")
			dice.push({ die: fulldicestring.substr(1,end), operation: "-" });
		else if (charat == "*")
			dice.push({ die: fulldicestring.substr(1,end), operation: "*" });
		else if (charat == "\*")
			dice.push({ die: fulldicestring.substr(1,end), operation: "*" });
		
		if (position != -1)
			fulldicestring = fulldicestring.substring(position+1);
		else
			fulldicestring = "";
		
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
			else if (dice[i].operation == "\*")
			{
				total *= current.result;
				if (i == 0)
					resultstring += current.details;
				else
					resultstring += " \* " + current.details;
			}
		}
	}
	
	resultstring += ")";
	
	return { total: total, details: resultstring };
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
// generate a weird princess, based on ??? from Quill

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
				tempphonemelist = tempphonemelist.filter(filterByAtleastOneList,tempmultilist);
			}
			else if (last.lists.includes("mid"))
			{
				tempphonemelist = phonemes_english.filter(filterByList,"vowels");
				tempmultilist = ["close","open"];
				tempphonemelist = tempphonemelist.filter(filterByAtleastOneList,tempmultilist);
			}
			else
			{
				tempphonemelist = phonemes_english.filter(filterByList,"vowels");
				tempmultilist = ["close","mid"];
				tempphonemelist = tempphonemelist.filter(filterByAtleastOneList,tempmultilist);
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
// insert fields into pickupline

function insertFieldsIntoLine(pickupline, fields)
{
	let position = pickupline.indexOf("\[");
	let endposition = -1;
	let fieldsubstr = "";
	
	while (position != -1)
	{
		endposition = pickupline.indexOf("\]");
		fieldsubstr = pickupline.substring(position+1,endposition);
		
		if (fieldsubstr == "bodypart" || fieldsubstr == "object" || fieldsubstr == "phrase")
		{
			pickupline = pickupline.substr(0,position) + fields.name + pickupline.substr(endposition+1);
		}
		else if (fieldsubstr == "an")
		{
			pickupline = pickupline.substr(0,position) + fields.an + pickupline.substr(endposition+1);
		}
		else if (fieldsubstr == "is")
		{
			pickupline = pickupline.substr(0,position) + fields.is + pickupline.substr(endposition+1);
		}
		else if (fieldsubstr == "that")
		{
			pickupline = pickupline.substr(0,position) + fields.that + pickupline.substr(endposition+1);
		}
		else if (fieldsubstr == "was")
		{
			pickupline = pickupline.substr(0,position) + fields.was + pickupline.substr(endposition+1);
		}
		
		position = pickupline.indexOf("\[");
	}
	
	return pickupline;
}

//
//
// generate pickup line

function generatePickUpLine()
{
	let pickupline = "";
	pickupline_gen
	
	if (Math.random() < 0.299)
	{
		pickupline += pickupline_gen.prefixes[Math.floor(Math.random()*pickupline_gen.prefixes.length)] + " ";
	}
	
	pickupline += pickupline_gen.startups[Math.floor(Math.random()*pickupline_gen.startups.length)];
	
	let fields = null;
	
	if (pickupline.includes("\[object\]"))
	{
		fields = pickupline_gen.objects[Math.floor(Math.random()*pickupline_gen.objects.length)];
		pickupline = insertFieldsIntoLine(pickupline, fields);
	}
	else if (pickupline.includes("\[bodypart\]"))
	{
		fields = pickupline_gen.bodyparts[Math.floor(Math.random()*pickupline_gen.bodyparts.length)];
		pickupline = insertFieldsIntoLine(pickupline, fields);
	}
	else if (pickupline.includes("\[phrase\]"))
	{
		fields = pickupline_gen.startupphrases[Math.floor(Math.random()*pickupline_gen.startupphrases.length)];
		pickupline = insertFieldsIntoLine(pickupline, fields);
	}
	
	pickupline += " " + pickupline_gen.followups[Math.floor(Math.random()*pickupline_gen.followups.length)];
	
	if (pickupline.includes("\[object\]"))
	{
		fields = pickupline_gen.objects[Math.floor(Math.random()*pickupline_gen.objects.length)];
		pickupline = insertFieldsIntoLine(pickupline, fields);
	}
	else if (pickupline.includes("\[bodypart\]"))
	{
		fields = pickupline_gen.bodyparts[Math.floor(Math.random()*pickupline_gen.bodyparts.length)];
		pickupline = insertFieldsIntoLine(pickupline, fields);
	}
	else if (pickupline.includes("\[phrase\]"))
	{
		fields = pickupline_gen.followupphrases[Math.floor(Math.random()*pickupline_gen.followupphrases.length)];
		pickupline = insertFieldsIntoLine(pickupline, fields);
	}
	
	return pickupline;
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

function generateGaychaItem(types = null, keywords = null)
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
	
	if (keywords != null && keywords.length > 0)
	{
		itempool = itempool.filter(filterGaychaByAtleastOneKeyword,keywords);
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

function MiniMapCountTileAroundHex(tile, premapmap, x, y, MAP_WIDTH)
{
	let count = 0;
	let position;
	
	
	if (x+1+(y*MAP_WIDTH) < premapmap.length && premapmap[x+1+(y*MAP_WIDTH)].tile == tile)
		count++;
	if (x-1+(y*MAP_WIDTH) > -1 && premapmap[x-1+(y*MAP_WIDTH)].tile == tile)
		count++;
	if (y%2 == 0)
	{
		if (x+((y-1)*MAP_WIDTH) > -1 && x+((y-1)*MAP_WIDTH) < premapmap.length && premapmap[x+((y-1)*MAP_WIDTH)].tile == tile)
			count++;
		if ((x-1)+((y-1)*MAP_WIDTH) > -1 && premapmap[(x-1)+((y-1)*MAP_WIDTH)].tile == tile)
			count++;
		if (x+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[x+((y+1)*MAP_WIDTH)].tile == tile)
			count++;
		if ((x-1)+((y+1)*MAP_WIDTH) < premapmap.length && (x-1)+((y+1)*MAP_WIDTH) > -1 && premapmap[(x-1)+((y+1)*MAP_WIDTH)].tile == tile)
			count++;
	}
	else
	{
		if ((x+1)+((y-1)*MAP_WIDTH) > -1 && ((x+1)+((y-1)*MAP_WIDTH)) < premapmap.length && premapmap[(x+1)+((y-1)*MAP_WIDTH)].tile == tile)
			count++;
		if ((x+1)+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[(x+1)+((y+1)*MAP_WIDTH)].tile == tile)
			count++;
		if (x+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[x+((y+1)*MAP_WIDTH)].tile == tile)
			count++;
		if (x+((y-1)*MAP_WIDTH) > -1 && premapmap[x+((y-1)*MAP_WIDTH)].tile == tile)
			count++;
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

function reassignToBasicDictionary(dictionary, key, value)
{
	for(let i = 0; i < dictionary.length; i++)
	{
		if (dictionary[i].key == key)
		{
			dictionary[i].value = value;
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

function GenerateMiniMap(channel, arguments)
{
	let LAND_LEVEL = 0.37;
	let HILL_LEVEL = 0.721;
	let MOUNTAIN_LEVEL = 0.908;

	let FOREST_LEVEL = 0.0052;
	
	let MAP_HEIGHT = 50;
	let MAP_WIDTH = 80;
	
	let LANDMASSES = 1;
	let Map_Size = MAP_HEIGHT+MAP_WIDTH;
	
	let citiesCheck = true;
	let townsCheck = true;
	let villagesCheck = true;
	
	let grid_opacity = 0;
	
	if (arguments != null)
	{
		let argumentpos = arguments.indexOf("-h");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			MAP_HEIGHT = Math.floor(parseInt(arguments[argumentpos+1]));
			if (MAP_HEIGHT > 256)
				MAP_HEIGHT = 256;
		}
		argumentpos = arguments.indexOf("-w");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			MAP_WIDTH = Math.floor(parseInt(arguments[argumentpos+1]));
			if (MAP_WIDTH > 160)
				MAP_WIDTH = 160;
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
		argumentpos = arguments.indexOf("-g");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			grid_opacity =  parseFloat(arguments[argumentpos+1]);
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
		argumentpos = arguments.indexOf("-novillages");
		if (argumentpos > -1)
		{
			villagesCheck = false;
		}
	}
	
	if (MAP_WIDTH < 1)
		return null;
	if (MAP_HEIGHT < 1)
		return null;
	
	grid_opacity = Math.min(grid_opacity,1);
	grid_opacity = Math.max(grid_opacity,0);
	
	
	MAP_HEIGHT = Math.min(MAP_HEIGHT,MAX_MAP_HEIGHT);
	MAP_WIDTH = Math.min(MAP_WIDTH,MAX_MAP_WIDTH);
	
	let heightmap = noiseMap2D(MAP_HEIGHT,MAP_WIDTH, 0.99);
		heightmap = increaseContrast(heightmap, MAP_HEIGHT, MAP_WIDTH, 0.4);
		heightmap = smoothenMap(heightmap, MAP_HEIGHT, MAP_WIDTH, 0.175);
		heightmap = increaseContrast(heightmap, MAP_HEIGHT, MAP_WIDTH, 0.25);
	
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
			premapmap.push({ tile: "water" });
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
				temppremap.push({ tile: "water" });
			}
		}
		
		let randomsize = Math.floor(Math.random()*(MAP_HEIGHT*MAP_WIDTH/9)+(Map_Size*2/3));
		let randomx = Math.floor(Math.random()*(MAP_WIDTH*3/4)+(MAP_WIDTH/8));
		let randomy = Math.floor(Math.random()*(MAP_HEIGHT*3/4)+(MAP_HEIGHT/8));
		
		temppremap[randomx+(randomy*MAP_WIDTH)].tile = "grass";
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
			
			startpos.x = startpos.x+1;
			
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
							temppremap[position].tile = "grass";
						}
					}
				}
				
				MoveUpwardHex(currenthex, direction);
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
				if (temppremap[x+(y*MAP_WIDTH)].tile == "grass")
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
			
			startpos.x = startpos.x+1;
			
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
			if (heightmap[x+(y*MAP_WIDTH)] >= MOUNTAIN_LEVEL)
			{
				premapmap[x+(y*MAP_WIDTH)].tile = "mountain";
			}
			else if (heightmap[x+(y*MAP_WIDTH)] >= HILL_LEVEL)
			{
				premapmap[x+(y*MAP_WIDTH)].tile = "hills";
			}
			else if (heightmap[x+(y*MAP_WIDTH)] >= LAND_LEVEL)
			{
				premapmap[x+(y*MAP_WIDTH)].tile = "grass";
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
				if (x+1+(y*MAP_WIDTH) < premapmap.length && premapmap[x+1+(y*MAP_WIDTH)].tile == "grass")
					waterCount--;
				if (x-1+(y*MAP_WIDTH) > -1 && premapmap[x-1+(y*MAP_WIDTH)].tile == "grass")
					waterCount--
				if (y%2 == 0)
				{
					if (x+((y-1)*MAP_WIDTH) > -1 && x+((y-1)*MAP_WIDTH) < premapmap.length && premapmap[x+((y-1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
					if ((x-1)+((y-1)*MAP_WIDTH) > -1 && premapmap[(x-1)+((y-1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
					if (x+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[x+((y+1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
					if ((x-1)+((y+1)*MAP_WIDTH) < premapmap.length && (x-1)+((y+1)*MAP_WIDTH) > -1 && premapmap[(x-1)+((y+1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
				}
				else
				{
					if ((x+1)+((y-1)*MAP_WIDTH) > -1 && ((x+1)+((y-1)*MAP_WIDTH)) < premapmap.length && premapmap[(x+1)+((y-1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
					if ((x+1)+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[(x+1)+((y+1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
					if (x+((y+1)*MAP_WIDTH) < premapmap.length && premapmap[x+((y+1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
					if (x+((y-1)*MAP_WIDTH) > -1 && premapmap[x+((y-1)*MAP_WIDTH)].tile == "grass")
						waterCount--;
				}
				
				if (waterCount == 6)
				{
					premapmap[x+(y*MAP_WIDTH)].tile = "water";
				}
				else if (waterCount < 3 && premapmap[x+(y*MAP_WIDTH)].tile == "water")
				{
					premapmap[x+(y*MAP_WIDTH)].tile = "grass";
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
					premapmap[x+(y*MAP_WIDTH)].tile = "mountain";
				}
				else if (heightmap[x+(y*MAP_WIDTH)] > HILL_LEVEL)
				{
					premapmap[x+(y*MAP_WIDTH)].tile = "hills";
				}
			}
		}
	}
	
	// do water border
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		position = (y*MAP_WIDTH);
		premapmap[position].tile = "water";
		
		position = (MAP_WIDTH-1+y*MAP_WIDTH);
		premapmap[position].tile = "water";
	}
	for (let x = 0; x < MAP_WIDTH; x++)
	{
		position = (x);
		premapmap[position].tile = "water";
		
		position = (x+(MAP_HEIGHT-1)*MAP_WIDTH);
		premapmap[position].tile = "water";
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
		while (premapmap[randomx+randomy*MAP_WIDTH].tile == "water" || premapmap[randomx+randomy*MAP_WIDTH].tile == "mountain")
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
			
			startpos.x = startpos.x+1;
			
			currenthex.x = startpos.x;
			currenthex.y = startpos.y;
			
			for(let k = 0; k < loopend && sizereached < randomsize; k++)
			{
				if (currenthex.x < MAP_WIDTH && currenthex.y < MAP_HEIGHT && currenthex.x > -1 && currenthex.y > -1)
				{
					let position = currenthex.x+(currenthex.y*MAP_WIDTH);
					if ((premapmap[position].tile == "grass" || premapmap[position].tile == "hills"))
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
					premapmap[x+(y*MAP_WIDTH)].tile = "forest";
				}
			}
		}
		
	}
	
	// do swamps
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			if (premapmap[x+(y*MAP_WIDTH)].tile == "grass")
			{
				let higherground = MiniMapCountTileAroundHex("hills", premapmap, x, y, MAP_WIDTH);
				higherground += MiniMapCountTileAroundHex("hills", premapmap, x, y, MAP_WIDTH)+1;
				let marshchance = higherground*higherground*0.00223;
				if (Math.random() < marshchance)
				{
					premapmap[x+(y*MAP_WIDTH)].tile = "swamp";
				}
			}
		}
	}
	
	//do deep water
	for (let x = 0; x < MAP_WIDTH; x++)
	{
		for (let y = 0; y < MAP_HEIGHT; y++)
		{
			let nonwaterTiles = 0;
			nonwaterTiles += MiniMapCountTileAroundHex("grass", premapmap, x, y, MAP_WIDTH);
			nonwaterTiles += MiniMapCountTileAroundHex("hills", premapmap, x, y, MAP_WIDTH);
			nonwaterTiles += MiniMapCountTileAroundHex("mountain", premapmap, x, y, MAP_WIDTH);
			nonwaterTiles += MiniMapCountTileAroundHex("forest", premapmap, x, y, MAP_WIDTH);
			nonwaterTiles += MiniMapCountTileAroundHex("swamp", premapmap, x, y, MAP_WIDTH);
			if (nonwaterTiles == 0)
			{
				premapmap[x+(y*MAP_WIDTH)].tile = "deepwater"
			}
		}
	}
	
	let mapmap = [];
	
	for (let y = 0; y < MAP_HEIGHT; y++)
	{
		for (let x  = 0; x < MAP_WIDTH; x++)
		{
			let xpos = (10*x+((y%2)*5));
			let ypos = (8*y);
			
			if (premapmap[x+(y*MAP_WIDTH)].tile == "deepwater")
				mapmap.push({ src: minimap_gen.deepwater[Math.floor(Math.random()*minimap_gen.deepwater.length)], x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].tile == "water")
				mapmap.push({ src: minimap_gen.water[Math.floor(Math.random()*minimap_gen.water.length)], x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].tile == "grass")
				mapmap.push({ src: minimap_gen.grass[Math.floor(Math.random()*minimap_gen.grass.length)], x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].tile == "hills")
				mapmap.push({ src: minimap_gen.hills[Math.floor(Math.random()*minimap_gen.hills.length)], x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].tile == "mountain")
				mapmap.push({ src: minimap_gen.mountain[Math.floor(Math.random()*minimap_gen.mountain.length)], x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].tile == "swamp")
				mapmap.push({ src: minimap_gen.swamp[Math.floor(Math.random()*minimap_gen.swamp.length)], x: xpos, y: ypos});
			else if (premapmap[x+(y*MAP_WIDTH)].tile == "forest")
				mapmap.push({ src: minimap_gen.forest[Math.floor(Math.random()*minimap_gen.forest.length)], x: xpos, y: ypos});
			
			if (grid_opacity > 0)
			{
				mapmap.push({ src: minimap_gen.grid[Math.floor(Math.random()*minimap_gen.grid.length)], x: xpos, y: ypos, opacity: grid_opacity });
			}
		}
	}
	
	let file = 'generatedmap.png';
	let path = './' + file;
	
	mergeImages(mapmap, 
	{
		width: (10*MAP_WIDTH + 5),
		height: (8*MAP_HEIGHT + 2),
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

function generateTurtle(channel, arguments)
{
	let fullturtle = [];
	
	let feet_int = Math.floor(Math.random()*turtle_gen.feet.length);
	let feet_back = turtle_gen.feet[feet_int].back;
	fullturtle.push(feet_back);
	
	let random_int = Math.floor(Math.random()*turtle_gen.tail.length);
	let tail = turtle_gen.tail[random_int];
	fullturtle.push(tail);
	
	random_int = Math.floor(Math.random()*turtle_gen.shell.length);
	let shell = turtle_gen.shell[random_int];
	fullturtle.push(shell);
	
	random_int = Math.floor(Math.random()*turtle_gen.head.length);
	let head = turtle_gen.head[random_int];
	fullturtle.push(head);
	
	let feet_front = turtle_gen.feet[feet_int].front;
	fullturtle.push(feet_front);
	
	let file = 'newestfren.png';
	let path = './' + file;
	
	mergeImages(fullturtle, 
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
	//noisemap = increaseContrast(noisemap, map_height, map_width, 0.8);
	noisemap = smoothenMap(noisemap, map_height, map_width, 0.175);
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
	{
		console.log("partylog length:" + output.length);
		return output.trim();
	}
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
		party.xpos = party.questpath[0].x;
		party.ypos = party.questpath[0].y;
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
			
			if (lowestiti > -1 && adventurer.magicitems.accessories[lowestiti].itlvl < item.itlvl)
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

function getLivingPartyMembers(party)
{
	let temppartymemberlist = [];
	for (let i = 0; i < party.members.length; i++)
	{
		if (party.members[i].cstatus != "dead")
		{
			temppartymemberlist.push(party.members[i]);
		}
	}
	
	return temppartymemberlist;
}

function equipPartyWithItems(party, items)
{
	for(let i = 0; i < items.length; i++)
	{
		let tempmemberlist = getLivingPartyMembers(party);
		
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
	if (level < 0)
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
	if (arguments != null && arguments.length > 0)
	{
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
	}
	
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

// gacha card drawing

function DrawGachaCard(channel, gacha_result, special_text, message)
{
	var tempcanvas = new Canvas();
	tempcanvas.width = 500;
	tempcanvas.height = 700;
	if (tempcanvas.getContext)
	{
		let temp_stats = gacha_card_gen.slice();
		var ctx = tempcanvas.getContext('2d');
		
		ctx.fillStyle = 'rgb(0, 0, 0)';
		
		ctx.beginPath();
		ctx.moveTo(0,10);
		ctx.arcTo(0, 0, 10, 0, 10);
		ctx.lineTo(490,0);
		ctx.arcTo(500, 0, 500, 10, 10);
		ctx.lineTo(500,690);
		ctx.arcTo(500, 700, 490, 700, 10);
		ctx.lineTo(10,700);
		ctx.arcTo(0, 700, 0, 690, 10);
		ctx.fill();

		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.fillRect(10, 10, 480, 680);

		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.fillRect(386, 650, 110, 40);

		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.fillRect(392, 656, 98, 34);

		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.font = "36px sans-serif"
		ctx.fillText(gacha_result.name,12,40, 476);
		let stars_string = "";
		for (let i = 0; i < gacha_result.stars; i++)
		{
			stars_string += "★";
		}
		for (let i = 0; i < (10 - gacha_result.stars); i++)
		{
			stars_string += "☆";
		}
		ctx.fillText(stars_string,12,80,476);
		
		ctx.font = "24px sans-serif"
		ctx.fillText(grammarCapitalFirstLetter(gacha_result.base + " " + gacha_result.hero_class.class),12,110, 476);
		
		ctx.textAlign = "center";
		for (let j = 0; j < 5; j++)
		{
			let random_stat_entry = Math.floor(Math.random() * temp_stats.length);
			let stat = temp_stats[random_stat_entry];
			temp_stats.splice(random_stat_entry,1);
			
			let stat_value = stat.result[Math.floor(Math.random() * stat.result.length)];
			
			let position = stat_value.indexOf("\[");
			let endposition = -1;
			let stat_value_substr = "";
			
			while (position != -1)
			{
				endposition = stat_value.indexOf("\]");
				stat_value_substr = stat_value.substring(position+1,endposition);
				//substrcommands = stat_value.split(" ");
				substr_number = randomNumberForText(stat_value_substr);
				
				stat_value = stat_value.substr(0,position) + substr_number + stat_value.substr(endposition+1);
				
				position = stat_value.indexOf("\[");
			}
			
			ctx.fillText(stat.name,(j*100)+50,410, 80);
			ctx.fillText(stat_value,(j*100)+50,440, 80);
		}

		ctx.textAlign = "left";
		ctx.fillText(special_text,12,500, 476);

		ctx.font = "36px sans-serif"
		ctx.textAlign = "right";
		
		let power = randomNumberForText("1-99");
		let toughness = randomNumberForText("1-99");
		
		ctx.fillText(power + "/" + toughness,486,686, 120);
		
		ctx.font = "11px sans-serif"
		ctx.textAlign = "left";
		ctx.fillText(randomNumberForText("1-20000")+"/20000 // Allidroid Productions",12,686, 360);
		
		
		let file = 'newestcard.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
			
			channel.send({content: message, files: [{ attachment: 'newestcard.png', name: 'newestcard.png' }] });
			//channel.send({ files: [{ attachment: path, name: file }] });
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
	let length = Math.sqrt((vector.x*vector.x) + (vector.y*vector.y));
	let x = vector.x / length;
	let y = vector.y / length;
	
	return { x: x, y: y };
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

/*
function addToBasicDictionary(dictionary, key, value)
{
	for(let i = 0; i < dictionary.length; i++)
	{
		if (dictionary[i].key == key)
		{
			dictionary[i].value = value;
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
*/

function getDistanceBetweenCells(a, b)
{
	let x = (b.site.x - a.site.x) * (b.site.x - a.site.x);
	let y = (b.site.y - a.site.y) * (b.site.y - a.site.y);
	
	let h = Math.sqrt(x+y);
	
	return h;
}

function dictionaryToCellPath(dictionary, start, end)
{
	let current = end;
	let reversepath = [];
	
	while (current != start && current != null)
	{
		reversepath.push(current);
		current = getFromBasicDictionary(dictionary, current.site.voronoiId);
	}
	
	let path = [];
	
	for (let i = reversepath.length - 1; i > -1; i--)
	{
		path.push(reversepath[i]);
	}
	
	return path;
}

function pathToCell(startcell, targetcell, cells)
{
	let frontierQueue = [{ cell: startcell, priority: 0 }];
	let dictionaryCameFrom = [];
	let dictionaryCostSoFar = [];
	let closest = startcell;
	let closestHeuristic = 99999999;
	let newcost = 0;
	let oldcost;
	let priority;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		if (nextinqueue < 0)
		{
			//unexpected Path End
			return dictionaryToCellPath(dictionaryCameFrom, startcell, closest);
		}
		current = frontierQueue[nextinqueue].cell;
		frontierQueue.splice(nextinqueue,1);
		
		if (current == targetcell)
		{
			return dictionaryToCellPath(dictionaryCameFrom, startcell, targetcell);
		}
		
		let tempcost = getFromBasicDictionary(dictionaryCostSoFar, current.site.voronoiId)
		if (tempcost != null)
		{
			newcost = tempcost;
		}
		
		let neighbours = current.getNeighborIds();
		
		for (let i = 0; i < neighbours.length; i++)
		{
			neighbourCell = cells[neighbours[i]];
			let heightweight = neighbourCell.height < 0 ? (neighbourCell.height + 1) * (neighbourCell.height + 1) : (neighbourCell.height * neighbourCell.height)
			if (neighbourCell.height < 0)
				heightweight = 0.25;
			let connectioncost = newcost + 1 + heightweight;
			tempcost = getFromBasicDictionary(dictionaryCostSoFar, neighbours[i])
			if (tempcost != null)
			{
				oldcost = tempcost;
				if (connectioncost < oldcost)
				{
					reassignToBasicDictionary(dictionaryCostSoFar, neighbours[i], connectioncost);
					priority = connectioncost + getDistanceBetweenCells(neighbourCell, targetcell);
					if (priority - connectioncost < closestHeuristic)
					{
						closest = neighbourCell;
						closestHeuristic = priority - connectioncost;
					}
					frontierQueue.push({ cell: neighbourCell, priority: priority });
					reassignToBasicDictionary(dictionaryCameFrom, neighbours[i], current);
				}
			}
			else
			{
				reassignToBasicDictionary(dictionaryCostSoFar, neighbours[i], connectioncost);
				priority = connectioncost + getDistanceBetweenCells(neighbourCell, targetcell);
				if (priority - connectioncost < closestHeuristic)
				{
					closest = neighbourCell;
					closestHeuristic = priority - connectioncost;
				}
				frontierQueue.push({ cell: neighbourCell, priority: priority });
				reassignToBasicDictionary(dictionaryCameFrom, neighbours[i], current);
			}
		}
	}
	
	return dictionaryToCellPath(dictionaryCameFrom, startcell, closest);
}

function findOceanCells(cells)
{
	let topleftcorner = cells[0];
	let topleftcornerBbox = topleftcorner.getBbox();
	cells.forEach(cell => {
		let cellBbox = cell.getBbox();
		if (cellBbox.x < topleftcornerBbox.x)
		{
			topleftcorner = cell;
			topleftcornerBbox = topleftcorner.getBbox();
		}
		else if (cellBbox.x == topleftcornerBbox.x && cellBbox.y < topleftcornerBbox.y)
		{
			topleftcorner = cell;
			topleftcornerBbox = topleftcorner.getBbox();
		}
	});
	
	let frontierQueue = [{ cell: topleftcorner, priority: 0 }];
	let doneCells = [];
	let priority;
	
	let current;
	
	doneCells.push(topleftcorner.site.voronoiId);
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		if (nextinqueue < 0)
		{
			//unexpected ocean end
			return false;
		}
		current = frontierQueue[nextinqueue].cell;
		priority = frontierQueue[nextinqueue].priority;
		frontierQueue.splice(nextinqueue,1);
		
		let neighbours = current.getNeighborIds();
		
		for (let i = 0; i < neighbours.length; i++)
		{
			neighbourCell = cells[neighbours[i]];
			
			if (!doneCells.includes(neighbours[i]))
			{
				if (neighbourCell.height < -6)
				{
					neighbourCell.oceanCell = true;
					frontierQueue.push({ cell: neighbourCell, priority: priority + 1});
				}
				doneCells.push(neighbours[i]);
			}
		}
	}
	
	return true
}

function findLakeCells(cells)
{
	cells.forEach(cell => {
		if (cell.height < 0)
		{
			cell.lakeCell = true;
		}
	});
}

function nearestOceanCell(startcell, cells)
{
	let frontierQueue = [{ cell: startcell, priority: 0 }];
	let dictionaryCameFrom = [];
	let dictionaryCostSoFar = [];
	let newcost = 0;
	let oldcost;
	let priority;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		if (nextinqueue < 0)
		{
			//unexpected Path End
			return null;
		}
		current = frontierQueue[nextinqueue].cell;
		frontierQueue.splice(nextinqueue,1);
		
		if (current.oceanCell)
		{
			return current;
		}
		
		let tempcost = getFromBasicDictionary(dictionaryCostSoFar, current.site.voronoiId)
		if (tempcost != null)
		{
			newcost = tempcost;
		}
		
		let neighbours = current.getNeighborIds();
		
		for (let i = 0; i < neighbours.length; i++)
		{
			neighbourCell = cells[neighbours[i]];
			let heightweight = neighbourCell.height < 1 ? (neighbourCell.height + 1) * (neighbourCell.height + 1) : (neighbourCell.height * neighbourCell.height)
			if (neighbourCell.height < 0)
				heightweight = 10 - neighbourCell.height;
			let connectioncost = newcost + 1 + heightweight;
			tempcost = getFromBasicDictionary(dictionaryCostSoFar, neighbours[i])
			if (tempcost != null)
			{
				oldcost = tempcost;
				if (connectioncost < oldcost)
				{
					reassignToBasicDictionary(dictionaryCostSoFar, neighbours[i], connectioncost);
					priority = connectioncost + 1;
					frontierQueue.push({ cell: neighbourCell, priority: priority });
					reassignToBasicDictionary(dictionaryCameFrom, neighbours[i], current);
				}
			}
			else
			{
				reassignToBasicDictionary(dictionaryCostSoFar, neighbours[i], connectioncost);
				priority = connectioncost + 1;
				frontierQueue.push({ cell: neighbourCell, priority: priority });
				reassignToBasicDictionary(dictionaryCameFrom, neighbours[i], current);
			}
		}
	}
	
	return null;
}

function nearestCellBelowXHeight(startcell, targetHeight, cells)
{
	let frontierQueue = [{ cell: startcell, priority: 0 }];
	let dictionaryCameFrom = [];
	let dictionaryCostSoFar = [];
	let newcost = 0;
	let oldcost;
	let priority;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		if (nextinqueue < 0)
		{
			//unexpected Path End
			return null;
		}
		current = frontierQueue[nextinqueue].cell;
		frontierQueue.splice(nextinqueue,1);
		
		if (current.height < targetHeight)
		{
			return current;
		}
		
		let tempcost = getFromBasicDictionary(dictionaryCostSoFar, current.site.voronoiId)
		if (tempcost != null)
		{
			newcost = tempcost;
		}
		
		let neighbours = current.getNeighborIds();
		
		for (let i = 0; i < neighbours.length; i++)
		{
			neighbourCell = cells[neighbours[i]];
			let heightweight = neighbourCell.height < 1 ? (neighbourCell.height + 1) * (neighbourCell.height + 1) : (neighbourCell.height * neighbourCell.height)
			let connectioncost = newcost + 1 + heightweight;
			tempcost = getFromBasicDictionary(dictionaryCostSoFar, neighbours[i])
			if (tempcost != null)
			{
				oldcost = tempcost;
				if (connectioncost < oldcost)
				{
					reassignToBasicDictionary(dictionaryCostSoFar, neighbours[i], connectioncost);
					priority = connectioncost + 1;
					frontierQueue.push({ cell: neighbourCell, priority: priority });
					reassignToBasicDictionary(dictionaryCameFrom, neighbours[i], current);
				}
			}
			else
			{
				reassignToBasicDictionary(dictionaryCostSoFar, neighbours[i], connectioncost);
				priority = connectioncost + 1;
				frontierQueue.push({ cell: neighbourCell, priority: priority });
				reassignToBasicDictionary(dictionaryCameFrom, neighbours[i], current);
			}
		}
	}
	
	return null;
}

function generateVoronoiMap(numberOfPoints, margin, w, h, waterpasses, relaxation, smoothingIterations, landmassCount, mountainsCount, mountainsLength)
{
	if (h <= 0 || w <= 0)
		return false;
	
	let points = [];
	
	for (let i = 0; i < numberOfPoints; i++)
	{
		let newx = Math.floor(((w - margin*2) * Math.random()) + margin);
		let newy = Math.floor(((h - margin*2) * Math.random()) + margin);
		let newpoint = { x: newx, y: newy };
		if (!ContainsIdenticalXY(points, newpoint))
		{
			points.push(newpoint);
		}
	}
	
	let boundbox = { xl: margin, xr: w - margin, yt: margin, yb: h - margin };
	
	let diagram = new Voronoi().compute(points, boundbox);
	
	//let noisemapHeight = noiseMap2D(h, w, 0.64);
	//noisemapHeight = increaseContrast(noisemapHeight, h, w, 0.66);
	//noisemapHeight = smoothenMap(noisemapHeight, h, w, 0.25);
	
	for (let i = 0; i < relaxation; i++)
	{
		points = [];
		
		diagram.cells.forEach(cell => {
			let cellBbox = cell.getBbox();
			let newpoint = { x: Math.floor((cellBbox.x + (cellBbox.width/2))), y: Math.floor((cellBbox.y + (cellBbox.height/2))) };
			points.push(newpoint);
		});
		
		diagram = new Voronoi().compute(points, boundbox);
	}
	
	diagram.cells.forEach(cell => {
		cell.height = -10;
		cell.drawn = false;
	});
	
	// random landmasses
	
	let watercellborder = Math.min(w/4, h/4);
	for (let i = 0; i < landmassCount; i++)
	{
		let centrePoint = { x: w/8 + Math.random()*w*6/8, y: h/8 + Math.random()*h*6/8 };
		let radius = Math.random() * Math.min(w/4, h/4) + Math.min(w/4, h/4);
		let maxDistance = Math.min(w - watercellborder - centrePoint.x, centrePoint.x - watercellborder, h - watercellborder - centrePoint.y, centrePoint.y - watercellborder, radius);
		if (maxDistance < 0)
		{
			i--;
		}
		else
		{
			diagram.cells.forEach(cell => {
				let heightmapindex = cell.site.x + (cell.site.y * w);
				let distanceFromC = LengthBetweenPoints(cell.site, centrePoint);
				let propDistance = Math.max(1 - (distanceFromC / maxDistance), 0);
				let newheight = 4 * propDistance;
				if (newheight > 0)
					cell.height = newheight;
			});
		}
	}
	
	let attempts = 0;
	//random mountains
	for (let j = 0; j < mountainsCount; j++)
	{
		let randomCell = Math.floor(Math.random()*diagram.cells.length);
		let neighbours = diagram.cells[randomCell].getNeighborIds();
		let peakheight = 1.8 + Math.random()*3.6;
		
		let cellBbox = diagram.cells[randomCell].getBbox();
		if (cellBbox.x > watercellborder && (cellBbox.x + cellBbox.width) < w - watercellborder && cellBbox.y > watercellborder && (cellBbox.y + cellBbox.height) < h - watercellborder)
		{
			diagram.cells[randomCell].height += peakheight;
			for (let i = 0; i < neighbours.length; i++)
			{
				diagram.cells[neighbours[i]].height += peakheight*2/3;
			}
			
			let nextCell = neighbours[Math.floor(Math.random()*neighbours.length)];
			let forbiddenCells = [];
			
			for (let i = 0; i < mountainsLength; i++)
			{
				diagram.cells[nextCell].height += peakheight/2;
				let nextNeighbours = diagram.cells[nextCell].getNeighborIds();
				for (let k = 0; k < nextNeighbours.length; k++)
				{
					diagram.cells[nextNeighbours[k]].height += peakheight/3;
				}
				forbiddenCells.push(nextCell);
				nextCell = nextNeighbours[Math.floor(Math.random()*nextNeighbours.length)];
				let nextAttempts = 0;
				while (forbiddenCells.includes(nextCell))
				{
					nextCell = nextNeighbours[Math.floor(Math.random()*nextNeighbours.length)];
					nextAttempts++;
					if (nextAttempts > 128)
					{
						i = mountainsLength;
						break;
					}
				}
			}
			
			attempts = 0;
		}
		else if (attempts < 24)
		{
			attempts++;
			j--;
		}
		else
		{
			attempts = 0;
		}			
	}
	
	let lakescount = 0; //mountainsCount/3;
	
	//random lakes
	for (let j = 0; j < lakescount; j++)
	{
		let randomCell = Math.floor(Math.random()*diagram.cells.length);
		let neighbours = diagram.cells[randomCell].getNeighborIds();
		let peakheight = 0.75 + Math.random()*1.25;
		
		let cellBbox = diagram.cells[randomCell].getBbox();
		if (cellBbox.x > watercellborder && (cellBbox.x + cellBbox.width) < w - watercellborder && cellBbox.y > watercellborder && (cellBbox.y + cellBbox.height) < h - watercellborder)
		{
			diagram.cells[randomCell].height -= peakheight;
			for (let i = 0; i < neighbours.length; i++)
			{
				diagram.cells[neighbours[i]].height -= peakheight;
			}
			
			let nextCell = neighbours[Math.floor(Math.random()*neighbours.length)];
			let forbiddenCells = [];
			
			for (let i = 0; i < mountainsLength; i++)
			{
				diagram.cells[nextCell].height -= peakheight;
				let nextNeighbours = diagram.cells[nextCell].getNeighborIds();
				for (let k = 0; k < nextNeighbours.length; k++)
				{
					diagram.cells[nextNeighbours[k]].height -= peakheight;
				}
				forbiddenCells.push(nextCell);
				nextCell = nextNeighbours[Math.floor(Math.random()*nextNeighbours.length)];
				let nextAttempts = 0;
				while (forbiddenCells.includes(nextCell))
				{
					nextCell = nextNeighbours[Math.floor(Math.random()*nextNeighbours.length)];
					nextAttempts++;
					if (nextAttempts > 128)
					{
						i = mountainsLength;
						break;
					}
				}
			}
			
			attempts = 0;
		}
		else if (attempts < 24)
		{
			attempts++;
			j--;
		}
		else
		{
			attempts = 0;
		}			
	}
	
	// land/water automata
	for (let j = 0; j < waterpasses; j++)
	{
		let automataChanges = [];
		diagram.cells.forEach(cell => {
			let neighbours = cell.getNeighborIds();
			let surroundingWater = 0;
			for (let i = 0; i < neighbours.length; i++)
			{
				if (diagram.cells[neighbours[i]].height < 0)
				{
					surroundingWater++;
				}
			}
			if (surroundingWater/neighbours.length > 0.667 && cell.height > 0)
			{
				automataChanges.push({ voronoiId: cell.site.voronoiId, newHeight: -1 });
			}
			else if (surroundingWater/neighbours.length < 0.333 && cell.height < 0)
			{
				automataChanges.push({ voronoiId: cell.site.voronoiId, newHeight: 1 });
			}
		});
		
		for (let i = 0; i < automataChanges.length; i++)
		{
			diagram.cells[automataChanges[i].voronoiId].height = automataChanges[i].newHeight;
		}
	}
	
	//smooth heights
	
	for (let j = 0; j < smoothingIterations; j++);
	{
		let cellChanges = [];
	
		diagram.cells.forEach(cell => {
			let neighbours = cell.getNeighborIds();
			let totalHeight = 0;
			let totalCount = 0;
			
			for (let i = 0; i < neighbours.length; i++)
			{
				totalHeight += diagram.cells[neighbours[i]].height;
				totalCount++;
			}
			
			let stddev = (totalHeight/totalCount);
			
			let heightChange;
			
			heightChange = (stddev + cell.height)/2;
			
			/*			
			if (cell.height < 0)
			{
				heightChange = (stddev + stddev + stddev + cell.height)/4;
			}
			else if (Math.abs(stddev - cell.height) > cell.height/2)
				heightChange = (stddev + cell.height + cell.height + cell.height)/4;
			else
				heightChange = (stddev + cell.height)/2;
			*/
			
			cellChanges.push({ voronoiId: cell.site.voronoiId, newHeight: heightChange });
		});
		
		for (let i = 0; i < cellChanges.length; i++)
		{
			diagram.cells[cellChanges[i].voronoiId].height = cellChanges[i].newHeight;
		}
	}
	
	return diagram;
}

function ComplexShapeContainsPoint(shape, p)
{
	for (let i = 0; i < shape.length; i++)
	{
		if (shape[i].x == p.x && shape[i].y == p.y)
			return i;
	}
	return -1;
}

function DrawVoronoiMapMap(channel, arguments)
{
	let p = 4000;
	let m = 0.75;
	let w = 1920;
	let h = 1080;
	let wp = 4;
	let r = 1;
	let s = 64;
	let lm = 16;
	
	if (arguments != null && arguments.length > 0)
	{
		let argumentpos = arguments.indexOf("-p");
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			p = parseInt(arguments[argumentpos+1]);
		if (p > 16000)
			p = 16000;
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			w = parseInt(arguments[argumentpos+1]);
		if (w > 6400)
			w = 6400;
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			h = parseInt(arguments[argumentpos+1]);
		argumentpos = arguments.indexOf("-m")
		if (h > 4800)
			h = 4800;
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
			m = parseFloat(arguments[argumentpos+1]);
		if (m < 0)
			m = 0;
		if (m > 5)
			m = 5;
		argumentpos = arguments.indexOf("-wp")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			wp = parseInt(arguments[argumentpos+1]);
		if (wp > 100)
			wp = 100;
		argumentpos = arguments.indexOf("-r")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			r = parseInt(arguments[argumentpos+1]);
		if (r > 9)
			r = 8;
		argumentpos = arguments.indexOf("-lm")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			lm = parseInt(arguments[argumentpos+1]);
		if (lm > 64)
			lm = 64;
		argumentpos = arguments.indexOf("-s")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			s = parseInt(arguments[argumentpos+1]);
		if (s > 100)
			s = 100;
	}
	
	let plog = Math.log2(p);
	let mountains = (Math.random()*0.333 + 0.667) * plog * plog * m; // p / 61;
	let mountainsL = mountains / 7;
	let rivers = mountains / 6;
	let riversL = rivers / 9;
	let margin = 4;
	
	let diagram = generateVoronoiMap(p, margin, w, h, wp, r, s, lm, mountains, mountainsL);
	
	findOceanCells(diagram.cells);
	findLakeCells(diagram.cells);
	
	let tempcanvas = new Canvas();
	tempcanvas.width = w;
	tempcanvas.height = h;
	
	if (tempcanvas.getContext)
	{
		let ctx = tempcanvas.getContext('2d');
		
		ctx.fillStyle =  '#0030C0' //"#0055FF";
		ctx.fillRect(0,0,w,h);
		
		let randomColorString = "6dABCDEF123456789";
		
		ctx.strokeStyle = "#000000"
		
		diagram.cells.forEach(cell => {
			if (!cell.drawn && cell.height > 0 && !cell.oceanCell && !cell.lakeCell)
			{
				cell.drawn = true;
				
				if (cell && cell.halfedges.length > 2) 
				{
					ctx.fillStyle = '#08FE00'
					ctx.strokeStyle = '#08FE00'
					let origin_height = cell.height;
					let current_cell = cell;
					let current_halfedge = cell.halfedges[0];
					let half_edge_i = 0;
					let complex_shape = [];
					let shape_closed = false;
					let shape_start = 0;
					complex_shape.push(current_halfedge.getStartpoint());
					while (!shape_closed)
					{
						if (current_halfedge.edge.rSite != null && current_halfedge.edge.lSite != null)
						{
							let neighbour = diagram.cells[current_halfedge.edge.rSite.voronoiId];
							if (current_halfedge.edge.rSite == current_halfedge.site)
							{
								neighbour = diagram.cells[current_halfedge.edge.lSite.voronoiId];
							}
							if (neighbour.height > 0)
							{
								current_cell = neighbour;
								current_cell.drawn = true;
								for (let i = 0; i < current_cell.halfedges.length; i++)
								{
									let newedge_startpoint = current_cell.halfedges[i].getStartpoint();
									let curedge_startpoint =  current_halfedge.getStartpoint();
									if (newedge_startpoint.x == curedge_startpoint.x && newedge_startpoint.y == curedge_startpoint.y)
									{
										half_edge_i = i+1;
										if (half_edge_i == current_cell.halfedges.length)
										{
											half_edge_i = 0;
										}
										current_halfedge = current_cell.halfedges[half_edge_i];
										i += current_cell.halfedges.length;
									}
								}
							}
							else
							{
								half_edge_i++;
								if (half_edge_i == current_cell.halfedges.length)
								{
									half_edge_i = 0;
								}
								current_halfedge = current_cell.halfedges[half_edge_i];
							}
						}
						else
						{
							half_edge_i++;
							if (half_edge_i == current_cell.halfedges.length)
							{
								half_edge_i = 0;
							}
							current_halfedge = current_cell.halfedges[half_edge_i];
						}
						
						let next_point = current_halfedge.getStartpoint();
						let find_point_in_shape = ComplexShapeContainsPoint(complex_shape, next_point);
						if (find_point_in_shape < 0)
						{
							complex_shape.push(next_point);
						}
						else
						{
							shape_start = find_point_in_shape;
							shape_closed = true;
						}
					}
						
					if (shape_closed && (shape_start + 1) < complex_shape.length);
					{
						ctx.beginPath();
						console.log(shape_start);
						console.log(complex_shape);
						let midpoint = MidpointBetweenPoints(complex_shape[shape_start], complex_shape[shape_start+1]);
						ctx.moveTo(midpoint.x, midpoint.y);
						for (let shape_point = shape_start+1; shape_point < complex_shape.length; shape_point++)
						{
							let further_point = shape_point+1;
							if (further_point >= complex_shape.length)
								further_point -= complex_shape.length;
							let next_midpoint = MidpointBetweenPoints(complex_shape[shape_point], complex_shape[further_point]);
							ctx.bezierCurveTo(complex_shape[shape_point-1].x, complex_shape[shape_point-1].y, complex_shape[shape_point].x, complex_shape[shape_point].y, next_midpoint.x, next_midpoint.y);
						}
						ctx.closePath();
						ctx.fill();
						//ctx.stroke();
					}
				}
			}
		});
		
		// lakes
		diagram.cells.forEach(cell => {
			if (!cell.drawn && cell.height > 0 && cell.lakeCell)
			{
				cell.drawn = true;
				
				if (cell && cell.halfedges.length > 2) 
				{
					ctx.fillStyle = '#0030C0'
					ctx.strokeStyle = '#0030C0'
					let origin_height = cell.height;
					let current_cell = cell;
					let current_halfedge = cell.halfedges[0];
					let half_edge_i = 0;
					let complex_shape = [];
					let shape_closed = false;
					let shape_start = 0;
					complex_shape.push(current_halfedge.getStartpoint());
					while (!shape_closed)
					{
						if (current_halfedge.edge.rSite != null && current_halfedge.edge.lSite != null)
						{
							let neighbour = diagram.cells[current_halfedge.edge.rSite.voronoiId];
							if (current_halfedge.edge.rSite == current_halfedge.site)
							{
								neighbour = diagram.cells[current_halfedge.edge.lSite.voronoiId];
							}
							if (neighbour.lakeCell)
							{
								current_cell = neighbour;
								current_cell.drawn = true;
								for (let i = 0; i < current_cell.halfedges.length; i++)
								{
									let newedge_startpoint = current_cell.halfedges[i].getStartpoint();
									let curedge_startpoint =  current_halfedge.getStartpoint();
									if (newedge_startpoint.x == curedge_startpoint.x && newedge_startpoint.y == curedge_startpoint.y)
									{
										console.log("new halfedge found");
										half_edge_i = i+1;
										if (half_edge_i == current_cell.halfedges.length)
										{
											half_edge_i = 0;
										}
										current_halfedge = current_cell.halfedges[half_edge_i];
										i += current_cell.halfedges.length;
									}
								}
							}
							else
							{
								half_edge_i++;
								if (half_edge_i == current_cell.halfedges.length)
								{
									half_edge_i = 0;
								}
								current_halfedge = current_cell.halfedges[half_edge_i];
							}
						}
						else
						{
							half_edge_i++;
							if (half_edge_i == current_cell.halfedges.length)
							{
								half_edge_i = 0;
							}
							current_halfedge = current_cell.halfedges[half_edge_i];
						}
						
						let next_point = current_halfedge.getStartpoint();
						let find_point_in_shape = ComplexShapeContainsPoint(complex_shape, next_point);
						if (find_point_in_shape < 0)
						{
							complex_shape.push(next_point);
						}
						else
						{
							shape_start = find_point_in_shape;
							shape_closed = true;
						}
					}
						
					if (shape_closed);
					{
						ctx.beginPath();
						let midpoint = MidpointBetweenPoints(complex_shape[shape_start], complex_shape[shape_start+1]);
						ctx.moveTo(midpoint.x, midpoint.y);
						for (let shape_point = shape_start+1; shape_point < complex_shape.length; shape_point++)
						{
							let further_point = shape_point+1;
							if (further_point >= complex_shape.length)
								further_point -= complex_shape.length;
							let next_midpoint = MidpointBetweenPoints(complex_shape[shape_point], complex_shape[further_point]);
							ctx.bezierCurveTo(complex_shape[shape_point-1].x, complex_shape[shape_point-1].y, complex_shape[shape_point].x, complex_shape[shape_point].y, next_midpoint.x, next_midpoint.y);
						}
						ctx.closePath();
						ctx.fill();
						//ctx.stroke();
					}
				}
			}
		});
		
		ctx.strokeStyle =  '#0030C0' //"#0055FF";
		
		// rivers
		for (let i = 0; i < rivers; i++)
		{
			let randomCell = Math.floor(Math.random()*diagram.cells.length);
			while (diagram.cells[randomCell].oceanCell)
			{
				randomCell = Math.floor(Math.random()*diagram.cells.length);
			}
			
			let currentCell = diagram.cells[randomCell];
			
			let closestWater;
			if (currentCell.height > 0)
			{
				closestWater = nearestCellBelowXHeight(currentCell, -4, diagram.cells);
			}
			else
			{
				closestWater = nearestOceanCell(currentCell, diagram.cells);
			}
			
			if (closestWater != null)
			{
				let pathToClosestWater = pathToCell(currentCell, closestWater, diagram.cells);
				
				if (pathToClosestWater.length > 5)
				{
					let river_width = 1;
					
					for(let j = 0; j < pathToClosestWater.length-2; j++)
					{
						river_width += 1;
						ctx.lineWidth = river_width;
						ctx.beginPath();
						let start = MidpointBetweenPoints(pathToClosestWater[j].site, pathToClosestWater[j+1].site);
						ctx.moveTo(start.x, start.y);
						let end = MidpointBetweenPoints(pathToClosestWater[j+1].site, pathToClosestWater[j+2].site);
						ctx.bezierCurveTo(pathToClosestWater[j+1].site.x, pathToClosestWater[j+1].site.y, pathToClosestWater[j+1].site.x, pathToClosestWater[j+1].site.y, end.x, end.y);
						//ctx.lineTo(pathToClosestWater[j].site.x, pathToClosestWater[j].site.y);
						ctx.stroke();
					}
					
				}
				else
				{
					i--;
				}
			}
		}
		
		//output file
		let file = 'voronoimap.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
			channel.send({ files: [{ attachment: path, name: file }] });
		})
	}
}

// D&D 5e adventure generation
//

function RandomArrayEntry(array, nesting, nestingcode)
{
	let entry = array[Math.floor(Math.random()*array.length)];
	while (nesting == false && entry.includes(nestingcode))
	{
		entry = array[Math.floor(Math.random()*array.length)];
	}
	return entry;
}

function RandomNPCAbilities()
{
	let high = "high ";
	let low = "low ";
	let hAbility = Math.floor(Math.random()*dnd_adventure_gen.NPCHighAbilities.length);
	let lAbility = Math.floor(Math.random()*dnd_adventure_gen.NPCLowAbilities.length);
	while (lAbility == hAbility)
	{
		lAbility = Math.floor(Math.random()*dnd_adventure_gen.NPCLowAbilities.length);
	}
	high += dnd_adventure_gen.NPCHighAbilities[hAbility];
	low += dnd_adventure_gen.NPCLowAbilities[lAbility];
	
	return high + ", " + low;
}

function GenerateDnDDungeonTrap()
{
	let trap = "Trap- " + RandomArrayEntry(dnd_adventure_gen.DungeonTrapEffects, true, "[DungeonTrapEffects]") + " (severity: " + RandomArrayEntry(dnd_adventure_gen.DungeonTrapDamageSeverity, true, "[DungeonTrapDamageSeverity]") + ")";
	
	return trap;
}

function GenerateDnDDungeonTrick()
{
	let trick = "Trick- " + RandomArrayEntry(dnd_adventure_gen.DungeonTrickObjects, true, "[DungeonTrickObjects]") + ", effect: " + RandomArrayEntry(dnd_adventure_gen.DungeonTrickEffects, true, "[DungeonTrickEffects]");
	
	return trick;
}

function GenerateDnDDungeonChamber()
{
	let chamberstate = "Chamber State: " + RandomArrayEntry(dnd_adventure_gen.DungeonChamberState, true, "[DungeonChamberState]") + ".";
	let chambercontents = "Contents: " + RandomArrayEntry(dnd_adventure_gen.DungeonChamberContents, true, "[DungeonChamberContents]") + ".";
	
	let randomnumber = Math.floor(Math.random()*4)+2;
	let chamberfeatures = "Features: ";
	
	for (let i = 0; i < randomnumber; i++)
	{
		if (i == 0)
			chamberfeatures += RandomArrayEntry(dnd_adventure_gen.DungeonGeneralFeatures, true, "[DungeonGeneralFeatures]")
		else if (i == randomnumber - 1)
			chamberfeatures += " and " + RandomArrayEntry(dnd_adventure_gen.DungeonGeneralFeatures, true, "[DungeonGeneralFeatures]")
		else
			chamberfeatures += ", " + RandomArrayEntry(dnd_adventure_gen.DungeonGeneralFeatures, true, "[DungeonGeneralFeatures]")
	}
	
	chamberfeatures += ".";
	
	randomnumber = Math.floor(Math.random()*4)+3;
	let chamberfurnishings = "Furnishings: ";
	
	for (let i = 0; i < randomnumber; i++)
	{
		if (i == 0)
			chamberfurnishings += RandomArrayEntry(dnd_adventure_gen.DungeonGeneralFunishings, true, "[DungeonGeneralFunishings]")
		else if (i == randomnumber - 1)
			chamberfurnishings += " and " + RandomArrayEntry(dnd_adventure_gen.DungeonGeneralFunishings, true, "[DungeonGeneralFunishings]")
		else
			chamberfurnishings += ", " + RandomArrayEntry(dnd_adventure_gen.DungeonGeneralFunishings, true, "[DungeonGeneralFunishings]")
	}
	
	chamberfurnishings += ".";
	
	let fullchamber = chamberstate + "\n"
					+ chambercontents + "\n"
					+ chamberfeatures + "\n"
					+ chamberfurnishings;
	
	let position = fullchamber.indexOf("\[");
	let endposition = -1;
	let fieldsubstr = "";
	
	while (position != -1)
	{
		endposition = fullchamber.indexOf("\]");
		fieldsubstr = fullchamber.substring(position+1,endposition);
		
		if (fieldsubstr == "DungeonObstacles")
		{
			fullchamber = fullchamber.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.DungeonObstacles, false, "[DungeonObstacles]") + fullchamber.substr(endposition+1);
		}
		else if (fieldsubstr == "DungeonTrap")
		{
			fullchamber = fullchamber.substr(0,position) + GenerateDnDDungeonTrap() + fullchamber.substr(endposition+1);
		}
		else if (fieldsubstr == "DungeonTrick")
		{
			fullchamber = fullchamber.substr(0,position) + GenerateDnDDungeonTrick() + fullchamber.substr(endposition+1);
		}
		else
		{
			fullchamber = fullchamber.substr(0,position) + rollManyDice(fieldsubstr, false, false).total + fullchamber.substr(endposition+1);
		}
		
		
		position = fullchamber.indexOf("\[");
	}
	
	return fullchamber;
}

function GenerateDnDNPC()
{
	let npcname = RandomArrayEntry(dnd_adventure_gen.FirstNames, true, "[FirstNames]") + " " + RandomArrayEntry(dnd_adventure_gen.LastNames, true, "[LastNames]") + ".";
	let npcappearance = RandomArrayEntry(dnd_adventure_gen.NPCAppearances, true, "[NPCAppearances]") + ".";
	let npcabilities = RandomNPCAbilities();
	let npctalent = RandomArrayEntry(dnd_adventure_gen.NPCTalents, true, "[NPCTalents]") + ".";
	let npcmannerism = RandomArrayEntry(dnd_adventure_gen.NPCMannerisms, true, "[NPCMannerisms]") + ".";
	let npcinterpersonal = RandomArrayEntry(dnd_adventure_gen.NPCInterpsonalTraits, true, "[NPCInterpsonalTraits]") + ".";
	let npcbond = RandomArrayEntry(dnd_adventure_gen.NPCBonds, true, "[NPCBonds]") + ".";
	let npcsecret = RandomArrayEntry(dnd_adventure_gen.NPCFlawsAndSecrets, true, "[NPCFlawsAndSecrets]") + ".";
	
	let fullnpc = npcname + "\n"
				+ "Notable physical feature: " + npcappearance + "\n"
				+ "Abilities: " + npcabilities + "\n"
				+ "Talent: " + npctalent + "\n"
				+ "Mannerism: " + npcmannerism + "\n"
				+ "Disposition: " + npcinterpersonal + "\n"
				+ "Bonds: " + npcbond + "\n"
				+ "Flaws/Secrets: " + npcsecret;
	
	let position = fullnpc.indexOf("\[");
	let endposition = -1;
	let fieldsubstr = "";
	
	while (position != -1)
	{
		endposition = fullnpc.indexOf("\]");
		fieldsubstr = fullnpc.substring(position+1,endposition);
		
		if (fieldsubstr == "NPCBonds")
		{
			fullnpc = fullnpc.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.NPCBonds, false, "[NPCBonds]") + fullnpc.substr(endposition+1);
		}
		
		position = fullnpc.indexOf("\[");
	}
	
	return fullnpc;
}

function GenerateDnDVillain()
{
	let villainscheme = "Scheme: " + RandomArrayEntry(dnd_adventure_gen.VillainSchemes, true, "[VillainSchemes]") + ".";
	let villainmethod = "Method: " + RandomArrayEntry(dnd_adventure_gen.VillainMethods, true, "[VillainMethods]") + ".";

	let fullvillain = GenerateDnDNPC() + "\n" + villainscheme + "\n" + villainmethod;
	
	return fullvillain;
}

function GenerateDnDDungeon()
{
	let dungeonlocation = "Location: " + RandomArrayEntry(dnd_adventure_gen.DungeonLocation, true, "[DungeonLocation]") + ".";
	let dungeoncreator = "Creator: " + RandomArrayEntry(dnd_adventure_gen.DungeonCreator, true, "[DungeonCreator]") + ".";
	let dungeonpurpose = "Purpose: " + RandomArrayEntry(dnd_adventure_gen.DungeonPurpose, true, "[DungeonPurpose]") + ".";
	let dungeonhistory = "History: " + RandomArrayEntry(dnd_adventure_gen.DungeonHistory, true, "[DungeonHistory]") + ".";
	let dungeonatmosphere = "Atmosphere: Air- " + RandomArrayEntry(dnd_adventure_gen.DungeonAir, true, "[DungeonAir]") + "; Smell- " + RandomArrayEntry(dnd_adventure_gen.DungeonOdor, true, "[DungeonOdor]") + ".";;
	
	let fulldungeon = dungeonlocation + "\n"
					+ dungeoncreator + "\n"
					+ dungeonpurpose + "\n"
					+ dungeonhistory + "\n"
					+ dungeonatmosphere;
	
	let position = fulldungeon.indexOf("\[");
	let endposition = -1;
	let fieldsubstr = "";
	
	while (position != -1)
	{
		endposition = fulldungeon.indexOf("\]");
		fieldsubstr = fulldungeon.substring(position+1,endposition);
		
		if (fieldsubstr == "ExoticLocation")
		{
			fulldungeon = fulldungeon.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.ExoticLocation, false, "[ExoticLocation]") + fulldungeon.substr(endposition+1);
		}
		else if (fieldsubstr == "CultsAndReligiousGroups")
		{
			fulldungeon = fulldungeon.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.CultsAndReligiousGroups, false, "[CultsAndReligiousGroups]") + fulldungeon.substr(endposition+1);
		}
		position = fulldungeon.indexOf("\[");
	}
	
	return fulldungeon;
}

function GenerateDnDAdventure()
{
	let adventuretype = Math.random();
	let adventuregoals = "";
	let eventbaseadventure = false;
	if (adventuretype <= 0.25)
	{
		adventuregoals = RandomArrayEntry(dnd_adventure_gen.DungeonGoals, true, "[DungeonGoals]") + ".";
	}
	else if (adventuretype <= 0.5)
	{
		adventuregoals = RandomArrayEntry(dnd_adventure_gen.WildernessGoals, true, "[WildernessGoals]") + ".";
	}
	else if (adventuretype <= 0.75)
	{
		adventuregoals = RandomArrayEntry(dnd_adventure_gen.OtherGoals, true, "[OtherGoals]") + ".";
	}
	else
	{
		adventuregoals = RandomArrayEntry(dnd_adventure_gen.EventBasedGoals, true, "[EventBasedGoals]") + ".";
		eventbaseadventure = true;
	}
	
	let adventurevillain = RandomArrayEntry(dnd_adventure_gen.AdventureVillains, true, "[AdventureVillains]") + ".";
	let adventureally = RandomArrayEntry(dnd_adventure_gen.AdventureAllies, true, "[AdventureAllies]") + ".";
	let adventurepatron = RandomArrayEntry(dnd_adventure_gen.AdventurePatrons, true, "[AdventurePatrons]") + ".";
	let adventureintro = RandomArrayEntry(dnd_adventure_gen.AdventureIntroductions, true, "[AdventureIntroductions]") + ".";
	let adventureclimax = RandomArrayEntry(dnd_adventure_gen.AdventureClimax, true, "[AdventureClimax]") + ".";
	let adventurequandry = RandomArrayEntry(dnd_adventure_gen.MoralQuandries, true, "[MoralQuandries]") + ".";
	let adventuretwist = RandomArrayEntry(dnd_adventure_gen.Twists, true, "[Twists]") + ".";
	let sidequest = RandomArrayEntry(dnd_adventure_gen.SideQuests, true, "[SideQuests]") + ".";
	
	let fulladventure = "Intro: " + adventureintro + "\n"
						+ "Goals: " + adventuregoals + "\n"
						+ "Side Objectives: " + sidequest + "\n"
						+ "Villain: " + adventurevillain + "\n"
						+ "Ally: " + adventureally + "\n"
						+ "Patron: " + adventurepatron + "\n"
						+ "Quandry: " + adventurequandry + "\n"
						+ "Climax: " + adventureclimax + "\n"
						+ "Twist: " + adventuretwist;
	
	if (eventbaseadventure == true)
	{
		let eventvillainstyle = RandomArrayEntry(dnd_adventure_gen.EventBasedVillainActions, true, "[EventBasedVillainActions]") + ".";
		let framingevent = RandomArrayEntry(dnd_adventure_gen.FramingEvents, true, "[FramingEvents]") + ".";
		
		fulladventure = "Villain's Style: " + eventvillainstyle + "\n"
						+ "Framing Event: " + framingevent + "\n"
						+ "Intro: " + adventureintro + "\n"
						+ "Goals: " + adventuregoals + "\n"
						+ "Side Objectives: " + sidequest + "\n"
						+ "Villain: " + adventurevillain + "\n"
						+ "Ally: " + adventureally + "\n"
						+ "Patron: " + adventurepatron + "\n"
						+ "Quandry: " + adventurequandry + "\n"
						+ "Climax: " + adventureclimax + "\n"
						+ "Twist: " + adventuretwist;
	}
	
	let position = fulladventure.indexOf("\[");
	let endposition = -1;
	let fieldsubstr = "";
	
	while (position != -1)
	{
		endposition = fulladventure.indexOf("\]");
		fieldsubstr = fulladventure.substring(position+1,endposition);
		
		if (fieldsubstr == "DungeonGoals")
		{
			fulladventure = fulladventure.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.DungeonGoals, false, "[DungeonGoals]") + fulladventure.substr(endposition+1);
		}
		else if (fieldsubstr == "WildernessGoals")
		{
			fulladventure = fulladventure.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.WildernessGoals, false, "[WildernessGoals]") + fulladventure.substr(endposition+1);
		}
		else if (fieldsubstr == "EventBasedGoals")
		{
			fulladventure = fulladventure.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.EventBasedGoals, false, "[EventBasedGoals]") + fulladventure.substr(endposition+1);
		}
		else if (fieldsubstr == "FramingEvents")
		{
			fulladventure = fulladventure.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.FramingEvents, false, "[FramingEvents]") + fulladventure.substr(endposition+1);
		}
		
		position = fulladventure.indexOf("\[");
	}
	
	return fulladventure;
}

function GenerateDnDLoot(arguments)
{	
	let filterlist = [];
	let removelist = [];
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-gems")
		if (argumentpos > -1)
			filterlist.push("gems");
		argumentpos = arguments.indexOf("-art")
		if (argumentpos > -1)
			filterlist.push("art");
		argumentpos = arguments.indexOf("-coins")
		if (argumentpos > -1)
		{
			filterlist.push("coins");
			removelist.push("imperialcoins");
		}
		argumentpos = arguments.indexOf("-imperialcoins")
		if (argumentpos > -1)
		{
			filterlist.push("imperialcoins");
			removelist.push("coins");
		}
		else
		{
			removelist.push("imperialcoins");
		}
	}
	
	let goldvalue = parseFloat(arguments[0]);
	if (isNaN(goldvalue) || goldvalue < 1)
		return "I need a non-negative gold value greater than 10 to generate a pile of loot";
	
	let lootpile = [];
	
	let templootlist = [];
	
	if (filterlist.length > 0)
	{
		templootlist = templootlist.concat(dnd_adventure_gen.NonGoldLootItems.filter(filterByListArray,filterlist));
	}
	else
	{
		templootlist = dnd_adventure_gen.NonGoldLootItems.slice();
	}
	
	if (removelist.length > 0)
	{
		templootlist = templootlist.filter(removeByListArray,removelist);
	}
	
	if (templootlist.length == 0)
	{
		console.log("error, templootlist is empty");
		return "-coins and -imperialcoins are mutually exclusive";
	}
	
	let smallestvalue = templootlist[0].value;
	for(let i = 0; i < templootlist.length; i++)
	{
		if (templootlist[i].value < smallestvalue)
			smallestvalue = templootlist[0].value;
	}
	
	while (goldvalue >= templootlist[0].value)
	{
		let randomlootitem = templootlist[Math.floor(Math.random() * templootlist.length)];
		
		while (randomlootitem.value > goldvalue)
		{
			randomlootitem = templootlist[Math.floor(Math.random() * templootlist.length)];
		}
		
		let itemadded = false;
		
		for (let i = 0; i < lootpile.length; i++)
		{
			if (randomlootitem.item == lootpile[i].item)
			{
				lootpile[i].amount += 1;
				itemadded = true;
				break;
			}
		}
		
		if (!itemadded)
		{
			lootpile.push({item: randomlootitem.item, value: randomlootitem.value, amount: 1});
		}
		
		goldvalue -= randomlootitem.value;
	}
	
	let pile_string = "";
	let total = 0;
	
	for (let i = 0; i < lootpile.length; i++)
	{
		total += lootpile[i].amount * lootpile[i].value;
		if (i == 0)
			pile_string += lootpile[i].amount + "x " + lootpile[i].item + " (" + (lootpile[i].value * lootpile[i].amount).toFixed(2) + "gp)";
		else if (i == lootpile.length - 1)
			pile_string += ", and " + lootpile[i].amount + "x " + lootpile[i].item + " (" + (lootpile[i].value * lootpile[i].amount).toFixed(2) + "gp)";
		else
			pile_string += ", " + lootpile[i].amount + "x " + lootpile[i].item + " (" + (lootpile[i].value * lootpile[i].amount).toFixed(2) + "gp)";
	}
	
	pile_string += "\n total: **" + total.toFixed(2) + "gp**";
	
	return pile_string;
}

function GenerateDnDMagicItemGeneric()
{
	let itemcreator = "Creator: " + RandomArrayEntry(dnd_adventure_gen.MagicItemCreator, true, "[MagicItemCreator]");
	let itemhistory = "History: " + RandomArrayEntry(dnd_adventure_gen.MagicItemHistory, true, "[MagicItemHistory]");
	let itemproperty = "Property: " + RandomArrayEntry(dnd_adventure_gen.MagicItemMinorProperty, true, "[MagicItemMinorProperty]");
	let itemquirk = "Quirk: " + RandomArrayEntry(dnd_adventure_gen.MagicItemQuirks, true, "[MagicItemQuirks]");
	
	
	let item_full = itemcreator + "\n" + itemhistory + "\n" + itemproperty + "\n" + itemquirk;
	
	let position = item_full.indexOf("\[");
	let endposition = -1;
	let fieldsubstr = "";
	
	while (position != -1)
	{
		endposition = item_full.indexOf("\]");
		fieldsubstr = item_full.substring(position+1,endposition);
		
		if (fieldsubstr == "MagicItemMinorProperty")
		{
			item_full = item_full.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.MagicItemMinorProperty, false, "[MagicItemMinorProperty]") + item_full.substr(endposition+1);
		}
		
		position = item_full.indexOf("\[");
	}
	
	return item_full;
}

function GenerateDnDWorldShakingEvent()
{
	let worldevent = RandomArrayEntry(dnd_adventure_gen.WorldShakingEvents, true, "[WorldShakingEvents]");
	
	let position = worldevent.indexOf("\[");
	let endposition = -1;
	let fieldsubstr = "";
	
	while (position != -1)
	{
		endposition = worldevent.indexOf("\]");
		fieldsubstr = worldevent.substring(position+1,endposition);
		
		if (fieldsubstr == "LeaderTypes")
		{
			worldevent = worldevent.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.LeaderTypes, false, "[LeaderTypes]") + worldevent.substr(endposition+1);
		}
		else if (fieldsubstr == "CataclysmicDisasters")
		{
			worldevent = worldevent.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.CataclysmicDisasters, false, "[CataclysmicDisasters]") + worldevent.substr(endposition+1);
		}
		else if (fieldsubstr == "InvadingForces")
		{
			worldevent = worldevent.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.InvadingForces, false, "[InvadingForces]") + worldevent.substr(endposition+1);
		}
		else if (fieldsubstr == "LostResources")
		{
			worldevent = worldevent.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.LostResources, false, "[LostResources]") + worldevent.substr(endposition+1);
		}
		else if (fieldsubstr == "Organizations")
		{
			worldevent = worldevent.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.Organizations, false, "[Organizations]") + worldevent.substr(endposition+1);
		}
		else if (fieldsubstr == "Discoveries")
		{
			worldevent = worldevent.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.Discoveries, false, "[Discoveries]") + worldevent.substr(endposition+1);
		}
		else if (fieldsubstr == "WorldShakingEvents")
		{
			worldevent = worldevent.substr(0,position) + RandomArrayEntry(dnd_adventure_gen.WorldShakingEvents, false, "[WorldShakingEvents]") + worldevent.substr(endposition+1);
		}
		else
		{
			worldevent = worldevent.substr(0,position) + worldevent.substr(endposition+1);
		}
		
		position = worldevent.indexOf("\[");
	}
	
	return worldevent;
}

//
// Dungeon Generation
//

function MoveTile(tile, direction)
{
	if (direction == 0)
		tile.x += 1;
	else if (direction == 1)
		tile.y += 1;
	else if (direction == 2)
		tile.x -= 1;
	else if (direction == 3)
		tile.y -= 1;
}

function TileMapPathToPosition(start, end, tilemap, map_width, map_height)
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
		for (let i = 0; i < 4; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveTile(connection,i);
			let tilemapPos = connection.x + (connection.y * map_width);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height && (tilemap[tilemapPos] == "open" || tilemap[tilemapPos] == "coridoor" || tilemap[tilemapPos] == "doorway" || tilemap[tilemapPos] == "unknown"))
			{
				let connectioncost = newcost + 1;
				if (tilemap[tilemapPos] == "coridoor" || tilemap[tilemapPos] == "open" || tilemap[tilemapPos] == "doorway")
					connectioncost -= 0.99;
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
	return dictionaryToDirection(dictionaryCameFrom, closest, start);
}

function TileMapCanReachPosition(start, end, tilemap, map_width, map_height, include_secret_doors)
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
			let pathLength = dictionaryToDirection(dictionaryCameFrom, end, start).length;
			return pathLength;
		}
		
		let tempcost = getFromDictionary(dictionaryCostSoFar, current)
		if (tempcost != null)
		{
			newcost = tempcost;
			//newcost += 1;
		}
		let connection = { x: current.x, y: current.y };
		for (let i = 0; i < 4; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveTile(connection,i);
			let tilemapPos = connection.x + (connection.y * map_width);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height 
				&& (tilemap[tilemapPos] == "open" || tilemap[tilemapPos] == "coridoor" ||  tilemap[tilemapPos] == "doorway"
				|| tilemap[tilemapPos] == "door_horizontal" || tilemap[tilemapPos] == "door_vertical" 
				|| tilemap[tilemapPos] == "grate_horizontal" || tilemap[tilemapPos] == "grate_vertical"
				|| (include_secret_doors && tilemap[tilemapPos] == "secret_door_horizontal") || (include_secret_doors && tilemap[tilemapPos] == "secret_door_vertical")
				|| (include_secret_doors && tilemap[tilemapPos] == "secret_door_other")))
			{
				let connectioncost = newcost + 1;
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
	return -1;
}

function CountAdjacentTileType(x, y, tilemap, tiletype, width, height)
{
	let count = 0;
	let tileIndex = x + 1 + (y * width);
	if (x < width - 1 && tilemap[tileIndex] == tiletype)
		count++;
	tileIndex = x - 1 + (y * width);
	if (x > 0 && tilemap[tileIndex] == tiletype)
		count++;
	tileIndex = x + ((y + 1) * width);
	if (y < height - 1 && tilemap[tileIndex] == tiletype)
		count++;
	tileIndex = x + ((y - 1) * width);
	if (y > 0 && tilemap[tileIndex] == tiletype)
		count++;
	
	return count;
}

function CheckRoomInBounds(room, width, height)
{
	if (room.x + room.w + 1 >= width)
		return false;
	if (room.x - 1 < 0)
		return false;
	if (room.y + room.h + 1 >= height)
		return false;
	if (room.y - 1 < 0)
		return false;
	
	return true;
}

function CheckRoomNoOverlap(roommap, room)
{
	for(let i = 0; i < roommap.length; i++)
	{
		if (roommap[i].x + roommap[i].w + 1 > room.x && roommap[i].x - 1 < room.x + room.w)
		{
			if (roommap[i].y + roommap[i].h + 1 > room.y && roommap[i].y - 1 < room.y + room.h)
				return false;
		}
	}
	
	return true;
}

function RemoveExtraneousTilesFromTilemap(tilemap, tile, width, height)
{
	let tile_to_do = [];
	let tiles_visited = [];
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			tile_to_do.push({ x: x, y: y })
		}
	}
	
	let removed_tile_count = 0;
	
	while (tile_to_do.length > 0)
	{
		let tilemapIndex = tile_to_do[0].x + (tile_to_do[0].y * width);
		if (!tiles_visited.includes(tilemapIndex) && tilemap[tilemapIndex] == tile)
		{
			let connections_number = 0;
			let connections_code = GetConnectionsAsInt(tile_to_do[0].x, tile_to_do[0].y, tilemap, width, height)
			if ((connections_code & 1) == 1)
				connections_number++;
			if ((connections_code & 2) == 2)
				connections_number++;
			if ((connections_code & 4) == 4)
				connections_number++;
			if ((connections_code & 8) == 8)
				connections_number++;
			
			if (connections_number < 2)
			{
				tiles_visited.push(tilemapIndex);
				tilemap[tilemapIndex] = "unknown";
				removed_tile_count++;
				if (tile_to_do[0].x > 0)
					tile_to_do.push({ x: tile_to_do[0].x - 1, y: tile_to_do[0].y });
				if (tile_to_do[0].x < width - 1)
					tile_to_do.push({ x: tile_to_do[0].x + 1, y: tile_to_do[0].y });
				if (tile_to_do[0].y > 0)
					tile_to_do.push({ x: tile_to_do[0].x, y: tile_to_do[0].y - 1 });
				if (tile_to_do[0].y < width - 1)
					tile_to_do.push({ x: tile_to_do[0].x, y: tile_to_do[0].y + 1 });
			}
		}
		tile_to_do.splice(0,1);
	}
	
	//console.log("removed " + tile + " tiles: " + removed_tile_count);
}

function GetConnectionsAsInt(x, y, tilemap, width, height)
{
	let code = 0;
	let tileIndex = x + 1 + (y * width);
	if (x < width - 1 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor" || tilemap[tileIndex] == "doorway"
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"
		|| tilemap[tileIndex] == "secret_door_horizontal" || tilemap[tileIndex] == "secret_door_vertical"))
	{
		code += 1;
	}
	
	tileIndex = x - 1 + (y * width);
	if (x > 0 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor" || tilemap[tileIndex] == "doorway"
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"
		|| tilemap[tileIndex] == "secret_door_horizontal" || tilemap[tileIndex] == "secret_door_vertical"))
	{
		code += 4;
	}

	tileIndex = x + ((y + 1) * width);
	if (y < height - 1 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor" || tilemap[tileIndex] == "doorway"
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"
		|| tilemap[tileIndex] == "secret_door_horizontal" || tilemap[tileIndex] == "secret_door_vertical"))
	{
		code += 2;
	}
	
	tileIndex = x + ((y - 1) * width);
	if (y > 0 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor" || tilemap[tileIndex] == "doorway"
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"
		|| tilemap[tileIndex] == "secret_door_horizontal" || tilemap[tileIndex] == "secret_door_vertical"))
	{
		code += 8;
	}
	
	return code;
}

function GetNotSecretConnectionsAsInt(x, y, tilemap, width, height)
{
	let code = 0;
	let tileIndex = x + 1 + (y * width);
	if (x < width - 1 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor" || tilemap[tileIndex] == "doorway"
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"))
	{
		code += 1;
	}
	
	tileIndex = x - 1 + (y * width);
	if (x > 0 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor" || tilemap[tileIndex] == "doorway"
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"))
	{
		code += 4;
	}

	tileIndex = x + ((y + 1) * width);
	if (y < height - 1 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor"|| tilemap[tileIndex] == "doorway" 
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"))
	{
		code += 2;
	}
	
	tileIndex = x + ((y - 1) * width);
	if (y > 0 && (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor" || tilemap[tileIndex] == "doorway"
		|| tilemap[tileIndex] == "door_horizontal" || tilemap[tileIndex] == "door_vertical"
		|| tilemap[tileIndex] == "grate_horizontal" || tilemap[tileIndex] == "grate_vertical"))
	{
		code += 8;
	}
	
	return code;
}

function IsRoomCorner(x, y, tilemap, width, height)
{
	let code = GetConnectionsAsInt(x, y, tilemap, width, height);
	if (code == (1 + 2))
	{
		let tileIndex = x + 1 + ((y + 1) * width);
		if (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor")
		{
			return true;
		}
	}
	else if (code == (1 + 8))
	{
		let tileIndex = x + 1 + ((y - 1) * width);
		if (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor")
		{
			return true;
		}
	}
	else if (code == (4 + 2))
	{
		let tileIndex = x - 1 + ((y + 1) * width);
		if (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor")
		{
			return true;
		}
	}
	else if (code == (4 + 8))
	{
		let tileIndex = x - 1 + ((y - 1) * width);
		if (tilemap[tileIndex] == "open" || tilemap[tileIndex] == "coridoor")
		{
			return true;
		}
	}
	
	return false;
}

function DictionaryToRoomPath(dictionary, end, start)
{
	let backwards = [];
	let forwards = [];
	let current = end;
	backwards.push(end)
	while (current != start)
	{
		current = getFromBasicDictionary(dictionary, current).index;
		backwards.push(current);
	}
	
	for (let i = backwards.length-1; i >= 0; i--)
	{
		forwards.push(backwards[i]);
	}
	
	return forwards;
}

function DetermineMandatoryRoomPath(roomconnections, start, end)
{
	let frontierQueue = [{ index: start, priority: 0 }];
	let dictionaryCameFrom = [];
	let dictionaryCostSoFar = [];
	let newcost = 0;
	let oldcost;
	let priority;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		current = frontierQueue[nextinqueue];
		frontierQueue.splice(nextinqueue,1);
		if (current.index == end)
		{
			//console.log("mandatory room path found");
			//console.log(dictionaryCameFrom);
			return DictionaryToRoomPath(dictionaryCameFrom, end, start);
		}
		
		let tempcost = getFromBasicDictionary(dictionaryCostSoFar, current)
		if (tempcost != null)
		{
			newcost = tempcost;
			//newcost += 1;
		}
		let individual_room_connections = [];
		for (let i = 0; i < roomconnections.length; i++)
		{
			if(roomconnections[i].start == current.index)
			{
				individual_room_connections.push(roomconnections[i].end);
			}
			else if (roomconnections[i].end == current.index)
			{
				individual_room_connections.push(roomconnections[i].start);
			}
		}
		let connection = -1;
		for (let i = 0; i < individual_room_connections.length; i++)
		{
			connection = individual_room_connections[i];
			let connectioncost = newcost + 1;
			tempcost = getFromBasicDictionary(dictionaryCostSoFar, connection)
			if (tempcost != null)
			{
				oldcost = tempcost;
				if (connectioncost < oldcost)
				{
					reassignToBasicDictionary(dictionaryCostSoFar, connection, connectioncost);
					frontierQueue.push({ index: connection, priority: connectioncost });
					reassignToBasicDictionary(dictionaryCameFrom, connection, current);
				}
			}
			else
			{
				reassignToBasicDictionary(dictionaryCostSoFar, connection, connectioncost);
				priority = connectioncost + pathHeuristic(connection, end);
				frontierQueue.push({ index: connection, priority: connectioncost });
				reassignToBasicDictionary(dictionaryCameFrom, connection, current);
			}
		}
		//console.log(frontierQueue);
	}
	//console.log("mandatory room path not found");
	return false;
}

var DUNGEONMAP_MAX_WIDTH = 96;
var DUNGEONMAP_MIN_WIDTH = 20;
var DUNGEONMAP_MAX_HEIGHT = 72;
var DUNGEONMAP_MIN_HEIGHT = 15;
var DUNGEONMAP_MAX_ROOMS = 48;
var DUNGEONMAP_MIN_ROOMS = 3;
var DUNGEONMAP_ROOM_MIN_HEIGHT = 4;
var DUNGEONMAP_ROOM_MIN_WIDTH = 4;

function GenerateDungeonMap(arguments)
{
	let w = 32;
	let h = 24;
	let rooms = 8;
	let add_loops = false;
	let secret_doors = false;
	let secret_next_level = false;
	let stairs_up_side = -1;
	let stairs_down_side = -1;
	
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			w = parseInt(arguments[argumentpos+1]);
		if (w > DUNGEONMAP_MAX_WIDTH)
			w = DUNGEONMAP_MAX_WIDTH;
		if (w < DUNGEONMAP_MIN_WIDTH)
			w = DUNGEONMAP_MIN_WIDTH;
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			h = parseInt(arguments[argumentpos+1]);
		if (h > DUNGEONMAP_MAX_HEIGHT)
			h = DUNGEONMAP_MAX_HEIGHT;
		if (h < DUNGEONMAP_MIN_HEIGHT)
			h = DUNGEONMAP_MIN_HEIGHT;
		argumentpos = arguments.indexOf("-r")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			rooms = parseInt(arguments[argumentpos+1]);
		if (rooms > DUNGEONMAP_MAX_ROOMS)
			rooms = DUNGEONMAP_MAX_ROOMS;
		if (rooms < DUNGEONMAP_MIN_ROOMS)
			rooms = DUNGEONMAP_MIN_ROOMS;
		argumentpos = arguments.indexOf("-stairsup")
		if (argumentpos > -1)
		{
			if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "n" || arguments[argumentpos+1] == "north"))
				stairs_up_side = 0.625;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "e" || arguments[argumentpos+1] == "east"))
				stairs_up_side = 0.375;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "s" || arguments[argumentpos+1] == "south"))
				stairs_up_side = 0.875;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "w" || arguments[argumentpos+1] == "west"))
				stairs_up_side = 0.125;
			else
				stairs_up_side = -2;
		}
		argumentpos = arguments.indexOf("-stairsdown")
		if (argumentpos > -1)
		{
			if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "n" || arguments[argumentpos+1] == "north"))
				stairs_down_side = 0.625;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "e" || arguments[argumentpos+1] == "east"))
				stairs_down_side = 0.375;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "s" || arguments[argumentpos+1] == "south"))
				stairs_down_side = 0.875;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "w" || arguments[argumentpos+1] == "west"))
				stairs_down_side = 0.125;
			else
				stairs_down_side = -2;
		}
		argumentpos = arguments.indexOf("-loops")
		if (argumentpos > -1)
			add_loops = true;
		argumentpos = arguments.indexOf("-secretdoors")
		if (argumentpos > -1)
			secret_doors = true;
		argumentpos = arguments.indexOf("-secret_next_level")
		if (argumentpos > -1)
		{
			secret_doors = true;
			secret_next_level = true;
		}
	}
	
	
	let tilemap = [];
	
	for (let y = 0; y < h; y++)
	{
		for (let x = 0; x < w; x++)
		{
			if (x == 0 || y == 0 || x == w - 1 || y == h - 1)
				tilemap.push("closed");
			else
				tilemap.push("unknown");
		}
	}
	
	let roommap = [];
	
	let roomconnections = [];
	
	let roomattempts = 0;
	
	for (let r = 0; r < rooms && roomattempts < 4096; r++)
	{
		let randomw = Math.floor(Math.random() * 3) + DUNGEONMAP_ROOM_MIN_HEIGHT;
		let randomh = Math.floor(Math.random() * 3) + DUNGEONMAP_ROOM_MIN_WIDTH;
		let randomx = Math.floor(Math.random() * (w - 4 - randomw)) + 2;
		let randomy = Math.floor(Math.random() * (h - 4 - randomh)) + 2;
		
		let adjacentroom = Math.floor(Math.random() * roommap.length);
		let roomside = Math.random();
		
		let randomgap = Math.max(Math.floor(Math.random() * 5) - Math.floor(Math.random() * 3), 0) + 2;
		
		
		if (roommap.length > 0)
		{	
			if (roomside < 0.25) // west side
			{
				randomx = roommap[adjacentroom].x - randomw - randomgap;
				randomy = Math.floor(Math.random() * roommap[adjacentroom].h + randomh) + roommap[adjacentroom].y - randomh;
			}
			else if (roomside < 0.5) // east side
			{
				randomx = roommap[adjacentroom].x + roommap[adjacentroom].w + randomgap;
				randomy = Math.floor(Math.random() * roommap[adjacentroom].h + randomh) + roommap[adjacentroom].y - randomh;
			}
			else if (roomside < 0.75) // south side
			{
				randomx = Math.floor(Math.random() * roommap[adjacentroom].w + randomw) + roommap[adjacentroom].x - randomw;
				randomy = roommap[adjacentroom].y - randomh - randomgap;
			}
			else // north side
			{
				randomx = Math.floor(Math.random() * roommap[adjacentroom].w + randomw) + roommap[adjacentroom].x - randomw;
				randomy = roommap[adjacentroom].y + roommap[adjacentroom].h + randomgap;
			}
		}
		
		let newroom = { x: randomx, y: randomy, w: randomw, h: randomh, secret: false };
		
		if (!CheckRoomInBounds(newroom, w, h))
		{
			roomattempts++;
			r--;
		}
		else if (!CheckRoomNoOverlap(roommap, newroom))
		{
			roomattempts++;
			r--;
		}
		else if (roomattempts < 4096)
		{
			for (let y = newroom.y; y <= newroom.h + newroom.y; y++)
			{
				tilemap[newroom.x + (y * w)] = "closed";
				tilemap[newroom.x + newroom.w + (y * w)] = "closed";
			}
			for (let x = newroom.x; x <= newroom.w + newroom.x; x++)
			{
				tilemap[x + (newroom.y * w)] = "closed";
				tilemap[x + ((newroom.y + newroom.h) * w)] = "closed";
			}
			for (let y = newroom.y + 1; y <= newroom.h + newroom.y - 1; y++)
			{
				for (let x = newroom.x + 1; x <= newroom.w + newroom.x - 1; x++)
				{
					tilemap[x + (y * w)] = "open";
				}
			}
			roommap.push(newroom);
			roomconnections.push({ start: adjacentroom, end: roommap.length - 1, side: roomside});
		}
	}
	
	// add loops, optionally
	
	let loopconnections = [];
	
	if (add_loops)
	{
		let loopattempts = 0;
		
		for (let l = 0; l < rooms/2 && loopattempts < 256; l++)
		{
			let randomroomA = Math.floor(Math.random() * roommap.length);
			let possible_connections = [];
			let already_connected = [];
			let randomroomB = -1;
			
			for (let i = 0; i < roommap.length; i++)
			{
				if (i != randomroomA)
					possible_connections.push(i);
			}
			
			for (let c = 0; c < possible_connections.length; c++)
			{
				if (roomconnections[c].start == randomroomA)
				{
					for (let i = 0; i < possible_connections.length; i++)
					{
						if (possible_connections[i] == roomconnections[c].end)
						{
							possible_connections.splice(i,1);
							break;
						}
					}
					already_connected.push(roomconnections[c].end);
				}
				else if (roomconnections[c].end == randomroomA)
				{
					for (let i = 0; i < possible_connections.length; i++)
					{
						if (possible_connections[i] == roomconnections[c].start)
						{
							possible_connections.splice(i,1);
							break;
						}
					}
					already_connected.push(roomconnections[c].start);
				}
			}
			
			if (possible_connections.length == 0)
			{
				loopattempts++;
				l--;
			}
			else
			{
				randomroomB = possible_connections[Math.floor(Math.random() * possible_connections.length)];
				
				loopconnections.push({ start: randomroomA, end: randomroomB, side: 0});
			}
		}
	}
	
	// add doors and paths between rooms
	//let door_count = 0;
	
	for(let i = 0; i < roomconnections.length; i++)
	{
		let tileIndex = 0;
		
		// make doorways
		let doorApos = { x: 0, y: 0 };
		let doorBpos = { x: 0, y: 0 };
		let Adoor = true;
		let Bdoor = true;
		if (roomconnections[i].side <= 0.25)
		{
			let randomy = Math.floor((Math.random() * (roommap[roomconnections[i].start].h - 2)) + roommap[roomconnections[i].start].y + 2);
			doorApos = { x: roommap[roomconnections[i].start].x, y: randomy };
			
			randomy = Math.floor((Math.random() * (roommap[roomconnections[i].end].h - 2)) + roommap[roomconnections[i].end].y + 2);
			doorBpos = { x: roommap[roomconnections[i].end].x + roommap[roomconnections[i].end].w, y: randomy };
			
			let change = 0;
			let changesign = -1;
			let changeattempt = 1;
			
			while ((CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Adoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorApos.y + Math.abs(change) > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 2  && doorApos.y - Math.abs(change) < roommap[roomconnections[i].start].y + 1)
					Adoor = false;
			}
			
			doorApos.y += change;
			
			change = 0;
			changesign = -1;
			changeattempt = 1;
			
			while ((CountAdjacentTileType(doorBpos.x, doorBpos.y + change, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorBpos.x, doorBpos.y + change, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Bdoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorBpos.y + Math.abs(change) > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 2  && doorBpos.y - Math.abs(change) < roommap[roomconnections[i].start].y + 1)
					Bdoor = false;
			}
			
			doorBpos.y += change;
		}
		else if (roomconnections[i].side <= 0.5)
		{
			let randomy = Math.floor((Math.random() * (roommap[roomconnections[i].start].h - 2)) + roommap[roomconnections[i].start].y + 2);
			doorApos = { x: roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w, y: randomy };
			
			randomy = Math.floor((Math.random() * (roommap[roomconnections[i].end].h - 2)) + roommap[roomconnections[i].end].y + 2);
			doorBpos = { x: roommap[roomconnections[i].end].x, y: randomy };
			
			let change = 0;
			let changesign = -1;
			let changeattempt = 1;
			
			while ((CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Adoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorApos.y + Math.abs(change) > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 2 && doorApos.y - Math.abs(change) < roommap[roomconnections[i].start].y + 1)
					Adoor = false;
			}
			
			doorApos.y += change;
			
			change = 0;
			changesign = -1;
			changeattempt = 1;
			
			while ((CountAdjacentTileType(doorBpos.x, doorBpos.y + change, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorBpos.x, doorBpos.y + change, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Bdoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorBpos.y + Math.abs(change) > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 2 && doorBpos.y - Math.abs(change) < roommap[roomconnections[i].start].y + 1)
					Bdoor = false;
			}
			
			doorBpos.y += change;
		}
		else if (roomconnections[i].side <= 0.75)
		{
			let randomx = Math.floor((Math.random() * (roommap[roomconnections[i].start].w - 2)) + roommap[roomconnections[i].start].x + 2);
			doorApos = { x: randomx, y: roommap[roomconnections[i].start].y };
			
			randomx = Math.floor((Math.random() * (roommap[roomconnections[i].end].w - 2)) + roommap[roomconnections[i].end].x + 2);
			doorBpos = { x: randomx, y: roommap[roomconnections[i].end].y + roommap[roomconnections[i].end].h };
			
			let change = 0;
			let changesign = -1;
			let changeattempt = 1;
			
			while ((CountAdjacentTileType(doorApos.x + change, doorApos.y, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorApos.x + change, doorApos.y, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Adoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorApos.x + Math.abs(change) > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 2 && doorApos.x - Math.abs(change) < roommap[roomconnections[i].start].x + 1)
					Adoor = false;
			}
			
			doorApos.y += change;
			
			change = 0;
			changesign = -1;
			changeattempt = 1;
			
			while ((CountAdjacentTileType(doorBpos.x + change, doorBpos.y, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorBpos.x + change, doorBpos.y, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Bdoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorBpos.x + Math.abs(change) > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 2 && doorBpos.x - Math.abs(change) < roommap[roomconnections[i].start].x + 1)
					Bdoor = false;
			}
			
			doorBpos.y += change;
		}
		else
		{
			let randomx = Math.floor((Math.random() * (roommap[roomconnections[i].start].w - 2)) + roommap[roomconnections[i].start].x + 2);
			doorApos = { x: randomx, y: roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h };
			
			randomx = Math.floor((Math.random() * (roommap[roomconnections[i].end].w - 2)) + roommap[roomconnections[i].end].x + 2);
			doorBpos = { x: randomx, y: roommap[roomconnections[i].end].y };
			
			let change = 0;
			let changesign = -1;
			let changeattempt = 1;
			
			while ((CountAdjacentTileType(doorApos.x + change, doorApos.y, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorApos.x + change, doorApos.y, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Adoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorApos.x + Math.abs(change) > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 2 && doorApos.x - Math.abs(change) < roommap[roomconnections[i].start].x + 1)
					Adoor = false;
			}
			
			doorApos.y += change;
			
			change = 0;
			changesign = -1;
			changeattempt = 1;
			
			while ((CountAdjacentTileType(doorBpos.x + change, doorBpos.y, tilemap, "unknown", w, h) == 0 || CountAdjacentTileType(doorBpos.x + change, doorBpos.y, tilemap, "coridoor", w, h) > 0 || CountAdjacentTileType(doorApos.x, doorApos.y + change, tilemap, "doorway", w, h) > 0) && Bdoor == true)
			{
				change += Math.floor(changeattempt) * changesign;
				changesign *= -1;
				changeattempt += 0.5;
				
				if (doorBpos.x + Math.abs(change) > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 2 && doorBpos.x - Math.abs(change) < roommap[roomconnections[i].start].x + 1)
					Bdoor = false;
			}
			
			doorBpos.y += change;
		}
		
		if (Adoor == true)
		{
			tileIndex = doorApos.x + (doorApos.y * w);
			tilemap[tileIndex] = "doorway";
		}
		
		if (Bdoor == true)
		{
			tileIndex = doorBpos.x + (doorBpos.y * w);
			tilemap[tileIndex] = "doorway";
		}
		
		//door_count += 2;
		
		let startx = Math.floor(roommap[roomconnections[i].start].x + (roommap[roomconnections[i].start].w / 2));
		let starty = Math.floor(roommap[roomconnections[i].start].y + (roommap[roomconnections[i].start].h / 2));
		let endx = Math.floor(roommap[roomconnections[i].end].x + (roommap[roomconnections[i].end].w / 2));
		let endy = Math.floor(roommap[roomconnections[i].end].y + (roommap[roomconnections[i].end].h / 2));
		
		let startpos = { x: startx, y: starty };
		let endpos = { x: endx, y: endy };
		
		let path = TileMapPathToPosition(startpos, endpos, tilemap, w, h);
		{
			for (let j = 0; j < path.length; j++)
			{
				tileIndex = path[j].x + (path[j].y * w);
				if (tilemap[tileIndex] == "unknown")
					tilemap[tileIndex] = "coridoor";
			}
		}
	}
	//console.log(door_count);
	// make loop paths (no doorways, will use existing doorways)
	
	for(let i = 0; i < loopconnections.length; i++)
	{
		let tileIndex = 0;
		
		let startx = Math.floor(roommap[loopconnections[i].start].x + (roommap[loopconnections[i].start].w / 2));
		let starty = Math.floor(roommap[loopconnections[i].start].y + (roommap[loopconnections[i].start].h / 2));
		let endx = Math.floor(roommap[loopconnections[i].end].x + (roommap[loopconnections[i].end].w / 2));
		let endy = Math.floor(roommap[loopconnections[i].end].y + (roommap[loopconnections[i].end].h / 2));
		
		let startpos = { x: startx, y: starty };
		let endpos = { x: endx, y: endy };
		
		let path = TileMapPathToPosition(startpos, endpos, tilemap, w, h);
		{
			for (let j = 0; j < path.length; j++)
			{
				tileIndex = path[j].x + (path[j].y * w);
				if (tilemap[tileIndex] == "unknown")
					tilemap[tileIndex] = "coridoor";
			}
		}
		
	}
	
	// determine stairs and furthest rooms
	
	let start_room = Math.floor(Math.random() * roommap.length);
	let startx = Math.floor(roommap[start_room].x + (roommap[start_room].w / 2));
	let starty = Math.floor(roommap[start_room].y + (roommap[start_room].h / 2));
	
	let startpos = { x: startx, y: starty };
	
	let reachablerooms = 0
	let furthestdistance = -1;
	let furthestroom = -1;
	
	for(let r = 0; r < roommap.length; r++)
	{
		if (r != start_room)
		{
			let endx = Math.floor(roommap[r].x + (roommap[r].w / 2));
			let endy = Math.floor(roommap[r].y + (roommap[r].h / 2));
			
			let endpos = { x: endx, y: endy };
			let roomDistance = TileMapCanReachPosition(startpos, endpos, tilemap, w, h, true);

			if(roomDistance == -1)
			{
				for (let y = roommap[r].y; y <= roommap[r].h + roommap[r].y; y++)
				{
					for (let x = roommap[r].x; x <= roommap[r].w + roommap[r].x; x++)
					{
						tilemap[x + (y * w)] = "unknown";
					}
				}
			}
			else
			{
				if (roomDistance > furthestdistance)
				{
					furthestdistance = roomDistance;
					furthestroom = r;
				}
				reachablerooms++;
			}	
		}
	}
	
	RemoveExtraneousTilesFromTilemap(tilemap, "coridoor", w, h);
	RemoveExtraneousTilesFromTilemap(tilemap, "doorway", w, h);
	
	let mandatory_room_path = []
	if (furthestroom > 0)
		mandatory_room_path = DetermineMandatoryRoomPath(roomconnections, start_room, furthestroom);


	// add doors/portcullis
	
	for (let r = 0; r < roommap.length; r++)
	{
		let grate_chance = 0.29;
		let secret_door_chance = 0.67;
		if (mandatory_room_path.includes(r)) //room is on path to next floor
		{
			grate_chance = 0.31;
			secret_door_chance = 0.5;
		}
		else if (Math.random() < 0.33) // room is not on path, and is a secret room (all doors secret doors)
		{
			grate_chance = -1;
			secret_door_chance = 1;
		}
		for (let y = roommap[r].y; y <= roommap[r].h + roommap[r].y; y++)
		{
			if (tilemap[roommap[r].x + (y * w)] == "doorway")
			{
				let randomfloat = Math.random();
				let entrancetype = "door_vertical";
				if (!secret_doors && randomfloat < 0.42)
					entrancetype = "grate_vertical";
				else if (secret_doors && randomfloat < grate_chance)
					entrancetype = "grate_vertical";
				else if (secret_doors && randomfloat < secret_door_chance)
					entrancetype = "secret_door_vertical";
				tilemap[roommap[r].x + (y * w)] = entrancetype;
			}
			else
				tilemap[roommap[r].x + (y * w)] = "closed";
			
			if (tilemap[roommap[r].x + roommap[r].w + (y * w)] == "doorway"){
				let randomfloat = Math.random();
				let entrancetype = "door_vertical";
				if (!secret_doors && randomfloat < 0.42)
					entrancetype = "grate_vertical";
				else if (secret_doors && randomfloat < grate_chance)
					entrancetype = "grate_vertical";
				else if (secret_doors && randomfloat < secret_door_chance)
					entrancetype = "secret_door_vertical";
				tilemap[roommap[r].x + roommap[r].w + (y * w)] = entrancetype;
			}
			else
				tilemap[roommap[r].x + roommap[r].w + (y * w)] = "closed";
		}
		for (let x = roommap[r].x; x <= roommap[r].w + roommap[r].x; x++)
		{
			if (tilemap[x + (roommap[r].y * w)] == "doorway")
			{
				let randomfloat = Math.random();
				let entrancetype = "door_horizontal";
				if (!secret_doors && randomfloat < 0.42)
					entrancetype = "grate_horizontal";
				else if (secret_doors && randomfloat < grate_chance)
					entrancetype = "grate_horizontal";
				else if (secret_doors && randomfloat < secret_door_chance)
					entrancetype = "secret_door_horizontal";
				tilemap[x + (roommap[r].y * w)] = entrancetype;
			}
			else
				tilemap[x + (roommap[r].y * w)] = "closed";
			
			if (tilemap[x + ((roommap[r].y + roommap[r].h) * w)] == "doorway")
			{
				let randomfloat = Math.random();
				let entrancetype = "door_horizontal";
				if (!secret_doors && randomfloat < 0.42)
					entrancetype = "grate_horizontal";
				else if (secret_doors && randomfloat < grate_chance)
					entrancetype = "grate_horizontal";
				else if (secret_doors && randomfloat < secret_door_chance)
					entrancetype = "secret_door_horizontal";
				tilemap[x + ((roommap[r].y + roommap[r].h) * w)] = entrancetype;
			}
			else
				tilemap[x + ((roommap[r].y + roommap[r].h) * w)] = "closed";
		}
		for (let y = roommap[r].y + 1; y <= roommap[r].h + roommap[r].y - 1; y++)
		{
			for (let x = roommap[r].x + 1; x <= roommap[r].w + roommap[r].x - 1; x++)
			{
				tilemap[x + (y * w)] = "open";
			}
		}
	}
	
	if (furthestroom > -1)
	{
		let endx = Math.floor(roommap[furthestroom].x + (roommap[furthestroom].w / 2));
		let endy = Math.floor(roommap[furthestroom].y + (roommap[furthestroom].h / 2));
		
		let endpos = { x: endx, y: endy };
		let roomDistance = TileMapCanReachPosition(startpos, endpos, tilemap, w, h, secret_next_level);

		if(roomDistance == -1)
		{
			//console.log("could not reach stairs");
			return false;
		}
	}
	
	//HideSecretPathways(tilemap, w, h);
	
	if (stairs_up_side != -1)
	{
		//stairs up
		
		let stairs_side = Math.random();
		let sides_attempted = 0;
		let stairs_unplaced = true;
		
		if (stairs_up_side > -1)
		{
			stairs_side = stairs_up_side;
			sides_attempted = 0.75;
		}
		
		while (stairs_unplaced && sides_attempted < 1)
		{
			if (stairs_side > 1)
				stairs_side -= 1;
			
			if (stairs_side <= 0.25) //west wall
			{
				let randomy = Math.floor((Math.random() * (roommap[start_room].h - 2)) + roommap[start_room].y + 2);
				let stairspos = { x: roommap[start_room].x, y: randomy };
				
				let change = 0;
				let changesign = -1;
				let changeattempt = 1;
				let trynextside = false;
				
				while ((CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "coridoor", w, h) > 0 
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)			
				{
					change += Math.floor(changeattempt) * changesign;
					changesign *= -1;
					changeattempt += 0.5;
					
					if (stairspos.y + Math.abs(change) > roommap[start_room].y + roommap[start_room].h - 2  && stairspos.y - Math.abs(change) < roommap[start_room].y + 2)
					{
						stairs_side += 0.25;
						sides_attempted += 0.25;
						trynextside = true;
					}
				}
				
				if (!trynextside)
				{
					stairspos.y += change;
					tileIndex = stairspos.x + (stairspos.y * w);
					tilemap[tileIndex] = "stairs_west";
					stairs_unplaced = false;
				}
			}
			else if (stairs_side <= 0.5) //east wall
			{
				let randomy = Math.floor((Math.random() * (roommap[start_room].h - 2)) + roommap[start_room].y + 2);
				let stairspos = { x: roommap[start_room].x + roommap[start_room].w, y: randomy };
				
				let change = 0;
				let changesign = -1;
				let changeattempt = 1;
				let trynextside = false;
				
				while ((CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "coridoor", w, h) > 0 
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)	
				{
					change += Math.floor(changeattempt) * changesign;
					changesign *= -1;
					changeattempt += 0.5;
					
					if (stairspos.y + Math.abs(change) > roommap[start_room].y + roommap[start_room].h - 2  && stairspos.y - Math.abs(change) < roommap[start_room].y + 2)
					{
						stairs_side += 0.25;
						sides_attempted += 0.25;
						trynextside = true;
					}
				}
				
				if (!trynextside)
				{
					stairspos.y += change;
					tileIndex = stairspos.x + (stairspos.y * w);
					tilemap[tileIndex] = "stairs_east";
					stairs_unplaced = false;
				}
			}
			else if (stairs_side <= 0.75) //north wall
			{
				let randomx = Math.floor((Math.random() * (roommap[start_room].w - 2)) + roommap[start_room].x + 2);
				let stairspos = { x: randomx, y: roommap[start_room].y };
				
				let change = 0;
				let changesign = -1;
				let changeattempt = 1;
				let trynextside = false;
				
				while ((CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "coridoor", w, h) > 0 
				|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)	
				{
					change += Math.floor(changeattempt) * changesign;
					changesign *= -1;
					changeattempt += 0.5;
					
					if (stairspos.x + Math.abs(change) > roommap[start_room].x + roommap[start_room].w - 1  && stairspos.x - Math.abs(change) < roommap[start_room].x + 1)
					{
						stairs_side += 0.25;
						sides_attempted += 0.25;
						trynextside = true;
					}
				}
				
				if (!trynextside)
				{
					stairspos.x += change;
					tileIndex = stairspos.x + (stairspos.y * w);
					tilemap[tileIndex] = "stairs_north";
					stairs_unplaced = false;
				}
			}
			else //south wall
			{
				let randomx = Math.floor((Math.random() * (roommap[start_room].w - 2)) + roommap[start_room].x + 2);
				let stairspos = { x: randomx, y: roommap[start_room].y + roommap[start_room].h };
				
				let change = 0;
				let changesign = -1;
				let changeattempt = 1;
				let trynextside = false;
				
				while ((CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "coridoor", w, h) > 0 
				|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)	
				{
					change += Math.floor(changeattempt) * changesign;
					changesign *= -1;
					changeattempt += 0.5;
					
					if (stairspos.x + Math.abs(change) > roommap[start_room].x + roommap[start_room].w - 1  && stairspos.x - Math.abs(change) < roommap[start_room].x + 1)
					{
						stairs_side += 0.25;
						sides_attempted += 0.25;
						trynextside = true;
					}
				}
				
				if (!trynextside)
				{
					stairspos.x += change;
					tileIndex = stairspos.x + (stairspos.y * w);
					tilemap[tileIndex] = "stairs_south";
					stairs_unplaced = false;
				}
			}
			
			if (stairs_up_side != -1 && (sides_attempted == 1 || stairs_unplaced == true))
			{
				//console.log("no stairs up");
				return false; //fail if no stairs up
			}
		}
	}
	
	if (stairs_down_side != -1)
	{
		//stairs down
		
		stairs_side = Math.random();
		sides_attempted = 0;
		stairs_unplaced = true;
		
		if (stairs_down_side > -1)
		{
			stairs_side = stairs_down_side;
			sides_attempted = 0.75;
		}
		
		if (furthestroom > -1)
		{
			while (stairs_unplaced && sides_attempted < 1)
			{
				if (stairs_side > 1)
					stairs_side -= 1;
				
				if (stairs_side <= 0.25) //west wall
				{
					let randomy = Math.floor((Math.random() * (roommap[furthestroom].h - 2)) + roommap[furthestroom].y + 2);
					let stairspos = { x: roommap[furthestroom].x, y: randomy };
					
					let change = 0;
					let changesign = -1;
					let changeattempt = 1;
					let trynextside = false;
					
					while ((CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "coridoor", w, h) > 0 
					|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)	 
					{
						change += Math.floor(changeattempt) * changesign;
						changesign *= -1;
						changeattempt += 0.5;
						
						if (stairspos.y + Math.abs(change) > roommap[furthestroom].y + roommap[furthestroom].h - 1  && stairspos.y - Math.abs(change) < roommap[furthestroom].y + 1)
						{
							stairs_side += 0.25;
							sides_attempted += 0.25;
							trynextside = true;
						}
					}
					
					if (!trynextside)
					{
						stairspos.y += change;
						tileIndex = stairspos.x + (stairspos.y * w);
						tilemap[tileIndex] = "stairs_east";
						stairs_unplaced = false;
					}
				}
				else if (stairs_side <= 0.5) //east wall
				{
					let randomy = Math.floor((Math.random() * (roommap[furthestroom].h - 2)) + roommap[furthestroom].y + 2);
					let stairspos = { x: roommap[furthestroom].x + roommap[furthestroom].w, y: randomy };
					
					let change = 0;
					let changesign = -1;
					let changeattempt = 1;
					let trynextside = false;
					
					while ((CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "coridoor", w, h) > 0 
					|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)	
					{
						change += Math.floor(changeattempt) * changesign;
						changesign *= -1;
						changeattempt += 0.5;
						
						if (stairspos.y + Math.abs(change) > roommap[furthestroom].y + roommap[furthestroom].h - 1  && stairspos.y - Math.abs(change) < roommap[furthestroom].y + 1)
						{
							stairs_side += 0.25;
							sides_attempted += 0.25;
							trynextside = true;
						}
					}
					
					if (!trynextside)
					{
						stairspos.y += change;
						tileIndex = stairspos.x + (stairspos.y * w);
						tilemap[tileIndex] = "stairs_west";
						stairs_unplaced = false;
					}
				}
				else if (stairs_side <= 0.75) //north wall
				{
					let randomx = Math.floor((Math.random() * (roommap[furthestroom].w - 2)) + roommap[furthestroom].x + 2);
					let stairspos = { x: randomx, y: roommap[furthestroom].y };
					
					let change = 0;
					let changesign = -1;
					let changeattempt = 1;
					let trynextside = false;
					
					while ((CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "coridoor", w, h) > 0 
					|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)	
					{
						change += Math.floor(changeattempt) * changesign;
						changesign *= -1;
						changeattempt += 0.5;
						
						if (stairspos.x + Math.abs(change) > roommap[furthestroom].x + roommap[furthestroom].w - 1  && stairspos.x - Math.abs(change) < roommap[furthestroom].x + 1)
						{
							stairs_side += 0.25;
							sides_attempted += 0.25;
							trynextside = true;
						}
					}
					
					if (!trynextside)
					{
						stairspos.x += change;
						tileIndex = stairspos.x + (stairspos.y * w);
						tilemap[tileIndex] = "stairs_south";
						stairs_unplaced = false;
					}
				}
				else //south wall
				{
					let randomx = Math.floor((Math.random() * (roommap[furthestroom].w - 2)) + roommap[furthestroom].x + 2);
					let stairspos = { x: randomx, y: roommap[furthestroom].y + roommap[furthestroom].h };
					
					let change = 0;
					let changesign = -1;
					let changeattempt = 1;
					let trynextside = false;
					
					while ((CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "unknown", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "coridoor", w, h) > 0 
					|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "open", w, h) != 1 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "door_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_horizontal", w, h) > 0
					|| CountAdjacentTileType(stairspos.x + change, stairspos.y, tilemap, "grate_vertical", w, h) > 0 || CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_horizontal", w, h) > 0
				|| CountAdjacentTileType(stairspos.x, stairspos.y + change, tilemap, "secret_door_vertical", w, h) > 0) && !trynextside)	
					{
						change += Math.floor(changeattempt) * changesign;
						changesign *= -1;
						changeattempt += 0.5;
						
						if (stairspos.x + Math.abs(change) > roommap[furthestroom].x + roommap[furthestroom].w - 1  && stairspos.x - Math.abs(change) < roommap[furthestroom].x + 1)
						{
							stairs_side += 0.25;
							sides_attempted += 0.25;
							trynextside = true;
						}
					}
					
					if (!trynextside)
					{
						stairspos.x += change;
						tileIndex = stairspos.x + (stairspos.y * w);
						tilemap[tileIndex] = "stairs_north";
						stairs_unplaced = false;
					}
				}
			}
			
			if (stairs_down_side != -1 && (sides_attempted == 1 || stairs_unplaced == true))
			{
				//console.log("no stairs down");
				return false; //fail if no stairs down when required
			}
		}
	}
	
	if (reachablerooms < roommap.length*2/3)
	{
		//console.log("not enough rooms");
		return false;
	}
	else
	{
		return tilemap;
	}
}

function OutputTileMap(channel, arguments)
{
	let w = 32;
	let h = 24;
	
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			w = parseInt(arguments[argumentpos+1]);
		if (w > DUNGEONMAP_MAX_WIDTH)
			w = DUNGEONMAP_MAX_WIDTH;
		if (w < DUNGEONMAP_MIN_WIDTH)
			w = DUNGEONMAP_MIN_WIDTH;
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			h = parseInt(arguments[argumentpos+1]);
		if (h > DUNGEONMAP_MAX_HEIGHT)
			h = DUNGEONMAP_MAX_HEIGHT;
		if (h < DUNGEONMAP_MIN_HEIGHT)
			h = DUNGEONMAP_MIN_HEIGHT;
	}
	
	let tilemap = false;
	let attempts = 0;
	while (tilemap == false && attempts < 32)
	{
		attempts++;
		tilemap = GenerateDungeonMap(arguments);
	}
	
	if (attempts >= 32)
	{
		channel.send("I failed to make a dungeon with those parameters");
		console.log("failed to generatemap");
		return 0;
	}
	
	//cull empty spacewidth
	let start_x = 1;
	let start_y = 1;
	let end_x = w-1;
	let end_y = h-1;
	let real_w = w-2;
	let real_h = h-2;
	for (let y = 1; y < h-1; y++)
	{
		let row_empty = true;
		for (let x  = 1; x < w-1; x++)
		{
			if (tilemap[x+(y*w)] != "unknown")
			{
				row_empty = false;
				x = w+1;
			}
		}
		if (row_empty)
		{
			real_h--;
			start_y++;
		}
		else
		{
			console.log("start_y = " + start_y.toString())
			y = h+1;
		}
	}
	for (let y = h-2; y > 0; y--)
	{
		let row_empty = true;
		for (let x  = 1; x < w-1; x++)
		{
			if (tilemap[x+(y*w)] != "unknown")
			{
				row_empty = false;
				x = w+1;
			}
		}
		if (row_empty)
		{
			real_h--;
			end_y--;
		}
		else
		{
			console.log("end_y = " + end_y.toString())
			y = -1;
		}
	}
	for (let x = 1; x < w-1; x++)
	{
		let column_empty = true;
		for (let y = 1; y < h-1; y++)
		{
			if (tilemap[x+(y*w)] != "unknown")
			{
				column_empty = false;
				y = h+1;
			}
		}
		if (column_empty)
		{
			real_w--;
			start_x++;
		}
		else
		{
			console.log("start_x = " + start_x.toString())
			x = w+1;
		}
	}
	for (let x = w-2; x > 0; x--)
	{
		let column_empty = true;
		for (let y = 1; y < h-1; y++)
		{
			if (tilemap[x+(y*w)] != "unknown")
			{
				column_empty = false;
				y = h+1;
			}
		}
		if (column_empty)
		{
			real_w--;
			end_x--;
		}
		else
		{
			console.log("end_x = " + end_x.toString())
			x = -1;
		}
	}
	real_w += 2;
	real_h += 2;
	start_x--;
	end_x++;
	start_y--;
	end_y++;
	
	let mapmap = [];
	
	for (let y = start_y; y < end_y; y++)
	{
		for (let x = start_x; x < end_x; x++)
		{
			let xpos = (70*(x - start_x));
			let ypos = (70*(y - start_y));
			
			if (tilemap[x+(y*w)] == "closed")
				mapmap.push({ src: dungeon_gen_assets.closed[Math.floor(Math.random()*dungeon_gen_assets.closed.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "open")
				mapmap.push({ src: dungeon_gen_assets.open[Math.floor(Math.random()*dungeon_gen_assets.open.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "coridoor")
				mapmap.push({ src: dungeon_gen_assets.open[Math.floor(Math.random()*dungeon_gen_assets.open.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "doorway")
				mapmap.push({ src: dungeon_gen_assets.open[Math.floor(Math.random()*dungeon_gen_assets.open.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "door_horizontal")
				mapmap.push({ src: dungeon_gen_assets.door_horizontal[Math.floor(Math.random()*dungeon_gen_assets.door_horizontal.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "door_vertical")
				mapmap.push({ src: dungeon_gen_assets.door_vertical[Math.floor(Math.random()*dungeon_gen_assets.door_vertical.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "grate_horizontal")
				mapmap.push({ src: dungeon_gen_assets.grate_horizontal[Math.floor(Math.random()*dungeon_gen_assets.grate_horizontal.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "grate_vertical")
				mapmap.push({ src: dungeon_gen_assets.grate_vertical[Math.floor(Math.random()*dungeon_gen_assets.grate_vertical.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "secret_door_horizontal")
				mapmap.push({ src: dungeon_gen_assets.secret_door_horizontal[Math.floor(Math.random()*dungeon_gen_assets.secret_door_horizontal.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "secret_door_vertical")
				mapmap.push({ src: dungeon_gen_assets.secret_door_vertical[Math.floor(Math.random()*dungeon_gen_assets.secret_door_vertical.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "stairs_north")
				mapmap.push({ src: dungeon_gen_assets.stairs_north[Math.floor(Math.random()*dungeon_gen_assets.stairs_north.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "stairs_south")
				mapmap.push({ src: dungeon_gen_assets.stairs_south[Math.floor(Math.random()*dungeon_gen_assets.stairs_south.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "stairs_east")
				mapmap.push({ src: dungeon_gen_assets.stairs_east[Math.floor(Math.random()*dungeon_gen_assets.stairs_east.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "stairs_west")
				mapmap.push({ src: dungeon_gen_assets.stairs_west[Math.floor(Math.random()*dungeon_gen_assets.stairs_west.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "test")
				mapmap.push({ src: dungeon_gen_assets.test[Math.floor(Math.random()*dungeon_gen_assets.test.length)], x: xpos, y: ypos});
			else if (tilemap[x+(y*w)] == "unknown")
				mapmap.push({ src: dungeon_gen_assets.closed[Math.floor(Math.random()*dungeon_gen_assets.closed.length)], x: xpos, y: ypos});
			else
			{
				console.log("unknown tile '" + tilemap[x+(y*w)] + "' at " + x + ", " + y);
				mapmap.push({ src: dungeon_gen_assets.error[Math.floor(Math.random()*dungeon_gen_assets.error.length)], x: xpos, y: ypos});
			}
			
			/*
			if (grid_opacity > 0)
			{
				mapmap.push({ src: minimap_gen.grid[Math.floor(Math.random()*minimap_gen.grid.length)], x: xpos, y: ypos, opacity: grid_opacity });
			}
			*/
		}
	}
	
	let file = 'generatedmap.png';
	let path = './' + file;
	
	mergeImages(mapmap, 
	{
		width: (70*real_w),
		height: (70*real_h),
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

function DrawnMapPathToPosition(start, end, tilemap, map_width, map_height)
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
		for (let i = 0; i < 4; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveTile(connection,i);
			let tilemapPos = connection.x + (connection.y * map_width);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height && (!isNaN(tilemap[tilemapPos]) || tilemap[tilemapPos].includes("corridor") || tilemap[tilemapPos].includes("unknown")))
			{
				let connectioncost = newcost + 1;
				if (!isNaN(tilemap[tilemapPos]) || tilemap[tilemapPos].includes("corridor"))
					connectioncost -= 0.99;
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
	return dictionaryToDirection(dictionaryCameFrom, closest, start);
}

function TileMapCanReachPosition(start, end, tilemap, map_width, map_height, include_secret_doors)
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
			let pathLength = dictionaryToDirection(dictionaryCameFrom, end, start).length;
			return pathLength;
		}
		
		let tempcost = getFromDictionary(dictionaryCostSoFar, current)
		if (tempcost != null)
		{
			newcost = tempcost;
			//newcost += 1;
		}
		let connection = { x: current.x, y: current.y };
		for (let i = 0; i < 4; i++)
		{
			connection = { x: current.x, y: current.y };
			MoveTile(connection,i);
			let tilemapPos = connection.x + (connection.y * map_width);
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height 
				&& (tilemap[tilemapPos] == "open" || tilemap[tilemapPos] == "coridoor" ||  tilemap[tilemapPos] == "doorway"
				|| tilemap[tilemapPos] == "door_horizontal" || tilemap[tilemapPos] == "door_vertical" 
				|| tilemap[tilemapPos] == "grate_horizontal" || tilemap[tilemapPos] == "grate_vertical"
				|| (include_secret_doors && tilemap[tilemapPos] == "secret_door_horizontal") || (include_secret_doors && tilemap[tilemapPos] == "secret_door_vertical")
				|| (include_secret_doors && tilemap[tilemapPos] == "secret_door_other")))
			{
				let connectioncost = newcost + 1;
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
	return -1;
}

function CheckRoomNoOverlapNoBuffer(roommap, room)
{
	for(let i = 0; i < roommap.length; i++)
	{
		if (roommap[i].x + roommap[i].w > room.x && roommap[i].x < room.x + room.w )
		{
			if (roommap[i].y + roommap[i].h > room.y && roommap[i].y < room.y + room.h)
				return false;
		}
	}
	
	return true;
}

function DetermineRoomDistances(roomconnections, start)
{
	let frontierQueue = [{ index: start, priority: 0 }];
	let dictionaryCameFrom = [];
	let dictionaryCostSoFar = [];
	let newcost = 0;
	let oldcost;
	let priority;
	
	let current;
	
	while (frontierQueue.length > 0)
	{
		let nextinqueue = getNextInQueue(frontierQueue);
		current = frontierQueue[nextinqueue];
		frontierQueue.splice(nextinqueue,1);
		
		let tempcost = getFromBasicDictionary(dictionaryCostSoFar, current)
		if (tempcost != null)
		{
			newcost = tempcost;
			//newcost += 1;
		}
		let individual_room_connections = [];
		for (let i = 0; i < roomconnections.length; i++)
		{
			if(roomconnections[i].start == current.index)
			{
				individual_room_connections.push(roomconnections[i].end);
			}
			else if (roomconnections[i].end == current.index)
			{
				individual_room_connections.push(roomconnections[i].start);
			}
		}
		let connection = -1;
		for (let i = 0; i < individual_room_connections.length; i++)
		{
			connection = individual_room_connections[i];
			let connectioncost = newcost + 1;
			tempcost = getFromBasicDictionary(dictionaryCostSoFar, connection)
			if (tempcost != null)
			{
				oldcost = tempcost;
				if (connectioncost < oldcost)
				{
					reassignToBasicDictionary(dictionaryCostSoFar, connection, connectioncost);
					frontierQueue.push({ index: connection, priority: connectioncost });
					reassignToBasicDictionary(dictionaryCameFrom, connection, current);
				}
			}
			else
			{
				reassignToBasicDictionary(dictionaryCostSoFar, connection, connectioncost);
				frontierQueue.push({ index: connection, priority: connectioncost });
				reassignToBasicDictionary(dictionaryCameFrom, connection, current);
			}
		}
		//console.log(frontierQueue);
	}
	//console.log("mandatory room path not found");
	return dictionaryCostSoFar;
}

function CheckDoorOverlap(doors, startindex, endindex)
{
	for (let i = 0; i < doors.length; i++)
	{
		if ((doors[i].roomA == startindex && doors[i].roomB == endindex) || (doors[i].roomA == endindex && doors[i].roomB == startindex))
		{
			return false;
		}
	}
	return true;
}

function GenerateDrawnDungeonMap(arguments)
{
	let w = 32;
	let h = 24;
	let rooms = 8;
	let add_loops = false;
	let secret_doors = false;
	let secret_next_level = false;
	let stairs_up_side = -1;
	let stairs_down_side = -1;
	let minimum_room_gap = 2;
	
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			w = parseInt(arguments[argumentpos+1]);
		if (w > DUNGEONMAP_MAX_WIDTH)
			w = DUNGEONMAP_MAX_WIDTH;
		if (w < DUNGEONMAP_MIN_WIDTH)
			w = DUNGEONMAP_MIN_WIDTH;
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			h = parseInt(arguments[argumentpos+1]);
		if (h > DUNGEONMAP_MAX_HEIGHT)
			h = DUNGEONMAP_MAX_HEIGHT;
		if (h < DUNGEONMAP_MIN_HEIGHT)
			h = DUNGEONMAP_MIN_HEIGHT;
		argumentpos = arguments.indexOf("-r")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			rooms = parseInt(arguments[argumentpos+1]);
		if (rooms > DUNGEONMAP_MAX_ROOMS)
			rooms = DUNGEONMAP_MAX_ROOMS;
		if (rooms < DUNGEONMAP_MIN_ROOMS)
			rooms = DUNGEONMAP_MIN_ROOMS;
		argumentpos = arguments.indexOf("-mrg")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			minimum_room_gap = parseInt(arguments[argumentpos+1]);
		if (minimum_room_gap > 10)
			minimum_room_gap = 10;
		if (minimum_room_gap < 0)
			minimum_room_gap = 0;
		argumentpos = arguments.indexOf("-stairsup")
		if (argumentpos > -1)
		{
			if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "n" || arguments[argumentpos+1] == "north"))
				stairs_up_side = 0.625;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "e" || arguments[argumentpos+1] == "east"))
				stairs_up_side = 0.375;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "s" || arguments[argumentpos+1] == "south"))
				stairs_up_side = 0.875;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "w" || arguments[argumentpos+1] == "west"))
				stairs_up_side = 0.125;
			else
				stairs_up_side = -2;
		}
		argumentpos = arguments.indexOf("-stairsdown")
		if (argumentpos > -1)
		{
			if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "n" || arguments[argumentpos+1] == "north"))
				stairs_down_side = 0.625;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "e" || arguments[argumentpos+1] == "east"))
				stairs_down_side = 0.375;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "s" || arguments[argumentpos+1] == "south"))
				stairs_down_side = 0.875;
			else if (argumentpos+1 < arguments.length && (arguments[argumentpos+1] == "w" || arguments[argumentpos+1] == "west"))
				stairs_down_side = 0.125;
			else
				stairs_down_side = -2;
		}
		argumentpos = arguments.indexOf("-loops")
		if (argumentpos > -1)
			add_loops = true;
		argumentpos = arguments.indexOf("-secretdoors")
		if (argumentpos > -1)
			secret_doors = true;
		argumentpos = arguments.indexOf("-secret_next_level")
		if (argumentpos > -1)
		{
			secret_doors = true;
			secret_next_level = true;
		}
	}
	
	let tilemap = [];
	
	let debug = [];
	
	for (let y = 0; y < h; y++)
	{
		for (let x = 0; x < w; x++)
		{
			let index = x + (y*w);
			if (x == 0 || y == 0 || x == w - 1 || y == h - 1)
				tilemap.push("closed");
			else
				tilemap.push("unknown");
		}
	}
	
	
	let roommap = [];
	
	let roomconnections = [];
	
	let roomattempts = 0;
	
	for (let r = 0; r < rooms && roomattempts < 4096; r++)
	{
		let randomw = Math.floor(Math.random() * 6 / 4) + 3;
		let randomh = Math.floor(Math.random() * 6 / 4) + 3;
		let randomx = Math.floor(Math.random() * (w - 4 - randomw)) + 2;
		let randomy = Math.floor(Math.random() * (h - 4 - randomh)) + 2;
		
		let adjacentroom = Math.floor(Math.random() * roommap.length);
		let roomside = Math.random();
		
		let randomgap = Math.max(Math.floor(Math.random() * 5) - Math.floor(Math.random() * 3.5), minimum_room_gap);
		
		
		if (roommap.length > 0)
		{	
			if (roomside < 0.25) // west side
			{
				randomx = roommap[adjacentroom].x - randomw - randomgap;
				randomy = Math.floor(Math.random() * roommap[adjacentroom].h + randomh) + roommap[adjacentroom].y - randomh;
			}
			else if (roomside < 0.5) // east side
			{
				randomx = roommap[adjacentroom].x + roommap[adjacentroom].w + randomgap;
				randomy = Math.floor(Math.random() * roommap[adjacentroom].h + randomh) + roommap[adjacentroom].y - randomh;
			}
			else if (roomside < 0.75) // south side
			{
				randomx = Math.floor(Math.random() * roommap[adjacentroom].w + randomw) + roommap[adjacentroom].x - randomw;
				randomy = roommap[adjacentroom].y - randomh - randomgap;
			}
			else // north side
			{
				randomx = Math.floor(Math.random() * roommap[adjacentroom].w + randomw) + roommap[adjacentroom].x - randomw;
				randomy = roommap[adjacentroom].y + roommap[adjacentroom].h + randomgap;
			}
		}
		
		let newroom = { x: randomx, y: randomy, w: randomw, h: randomh, secret: Math.random() < 0.36 };
		
		if (!CheckRoomInBounds(newroom, w, h))
		{
			roomattempts++;
			r--;
		}
		else if (!CheckRoomNoOverlapNoBuffer(roommap, newroom))
		{
			roomattempts++;
			r--;
		}
		else if (roomattempts < 4096)
		{
			for (let y = newroom.y; y < newroom.h + newroom.y; y++)
			{
				for (let x = newroom.x; x < newroom.w + newroom.x; x++)
				{
					tilemap[x + (y * w)] = r;
				}
			}
			roommap.push(newroom);
			if (roommap.length > 1)
			{
				let end_room_id = r;
				let start_room_id = adjacentroom;
				roomconnections.push({ start: adjacentroom, end: roommap.length-1, side: roomside, startroomid: start_room_id, endroomid: end_room_id});

			}
		}
	}
	
	let start_room = Math.floor(Math.random() * roommap.length);
	
	let roomdistances = DetermineRoomDistances(roomconnections, start_room)
	
	let furthestdistance = -1;
	let furthestindex = -1;
	
	for (let i = 0; i < roommap.length; i++)
	{
		let distance = getFromBasicDictionary(roomdistances, i)
		if (distance > furthestdistance)
		{
			furthestdistance = distance;
			furthestindex = i;
		}
	}
	
	
	let mandatory_room_path = DetermineMandatoryRoomPath(roomconnections, start_room, furthestindex);
	
	for (let i = 0; i < mandatory_room_path.length; i++)
	{
		let nextindex = mandatory_room_path[i];
		roommap[nextindex].secret = false;
	}
	
	// add doors and paths between rooms
	//let door_count = 0;
	let doors = [];
	for(let i = 0; i < roomconnections.length; i++)
	{
		let tileIndex = 0;
		
		// make doors
		
		let change = 0;
		let changeattempt = 0;
		let changesign = -1;
		let sides_attempted = 0;
		let doorApos = { x: 0, y: 0 };
		let doorBpos = { x: 0, y: 0 };
		let trynextside = false;
		
		let door_side = roomconnections[i].side;
		let singularDoor = false;
		let randomy = Math.floor(Math.random() * (roommap[roomconnections[i].start].h - 1) + roommap[roomconnections[i].start].y);
		let randomx = Math.floor(Math.random() * (roommap[roomconnections[i].start].w - 1) + roommap[roomconnections[i].start].x);
		
		while (sides_attempted < 1 && singularDoor == false)
		{
			if (door_side > 1)
				door_side -= 1;
			
			change = Math.floor(changeattempt) * changesign;	
			
			if (door_side <= 0.25)
			{
				doorApos = { x: roommap[roomconnections[i].start].x, y: randomy };
				
				if (doorApos.y + Math.abs(change) > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 1  && doorApos.y - Math.abs(change) < roommap[roomconnections[i].start].y)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.y + change > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 1 || doorApos.y + change < roommap[roomconnections[i].start].y)
				{
					changeattempt += 0.5;
					changesign *= -1;
				}
				else
				{
					let index = doorApos.x + 1 + ((doorApos.y + change) * w);
					if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
					{
						let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x + 1, y: doorApos.y + change }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
						doors.push(newdoor);
						//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "00: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + ((doorApos.y + change) * w);
						if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
						{
							let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x - 1, y: doorApos.y + change }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
							doors.push(newdoor);
							//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "01: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
							singularDoor = true;
						}
						else
						{
							index = doorApos.x  + ((doorApos.y + change + 1) * w);
							if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
							{
								let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change + 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
								doors.push(newdoor);
								//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "02: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + ((doorApos.y + change - 1) * w);
								if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
								{
									let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change - 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
									doors.push(newdoor);
									//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "03: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
			else if (door_side <= 0.5)
			{
				doorApos = { x: roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 1, y: randomy };
				
				if (doorApos.y + Math.abs(change) > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 1  && doorApos.y - Math.abs(change) < roommap[roomconnections[i].start].y)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.y + change > roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 1 || doorApos.y + change < roommap[roomconnections[i].start].y)
				{
					changeattempt += 0.5;
					changesign *= -1;
				}
				else
				{
					let index = doorApos.x + 1 + ((doorApos.y + change) * w);
					if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
					{
						let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x + 1, y: doorApos.y + change }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
						doors.push(newdoor);
						//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "10: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + ((doorApos.y + change) * w);
						if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
						{
							let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x - 1, y: doorApos.y + change }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
							doors.push(newdoor);
							//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "11: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
							singularDoor = true;
						}
						else
						{
							index = doorApos.x + ((doorApos.y + change + 1) * w);
							if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
							{
								let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change + 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
								doors.push(newdoor);
								//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "12: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + ((doorApos.y + change - 1) * w);
								if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
								{
									let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change - 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
									doors.push(newdoor);
									//debug.push({ x: doorApos.x, y: doorApos.y + change, letter: "13: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + doorApos.x + "," + (doorApos.y+change) + ") " + roomconnections[i].startroomid });
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
			else if (door_side <= 0.75)
			{
				doorApos = { x: randomx, y: roommap[roomconnections[i].start].y };
				
				if (doorApos.x + Math.abs(change) > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 1  && doorApos.x - Math.abs(change) < roommap[roomconnections[i].start].x)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.x + change > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 1 || doorApos.x + change < roommap[roomconnections[i].start].x)
				{
					changeattempt += 0.5;
					changesign *= -1;
				}
				else
				{
					let index = doorApos.x + 1 + change + (doorApos.y * w);
					if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
					{
						let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change + 1, y: doorApos.y }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
						doors.push(newdoor);
						//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "20: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ")" + roomconnections[i].startroomid });
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + change + (doorApos.y * w);
						if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
						{
							let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change - 1, y: doorApos.y }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
							doors.push(newdoor);
							//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "21: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ")" + roomconnections[i].startroomid });
							singularDoor = true;
						}
						else
						{
							index = doorApos.x + change + ((doorApos.y + 1) * w);
							if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
							{
								let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y + 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
								doors.push(newdoor);
								//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "22: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ")" + roomconnections[i].startroomid });
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + change + ((doorApos.y - 1) * w);
								if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
								{
									let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y - 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
									doors.push(newdoor);
									//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "23: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ") " + roomconnections[i].startroomid });
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
			else
			{
				doorApos = { x: randomx, y: roommap[roomconnections[i].start].y + roommap[roomconnections[i].start].h - 1 };
				
				if (doorApos.x + Math.abs(change) > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 1  && doorApos.x - Math.abs(change) < roommap[roomconnections[i].start].x)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.x + change > roommap[roomconnections[i].start].x + roommap[roomconnections[i].start].w - 1 || doorApos.x + change < roommap[roomconnections[i].start].x)
				{
					changeattempt += 0.5;
					changesign *= -1;
				}
				else
				{
					let index = doorApos.x + 1 + change + (doorApos.y * w);
					if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
					{
						let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change + 1, y: doorApos.y }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
						doors.push(newdoor);
						//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "30: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ") " + roomconnections[i].startroomid });
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + change + (doorApos.y * w);
						if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
						{
							let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change - 1, y: doorApos.y }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
							doors.push(newdoor);
							//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "31: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ") " + roomconnections[i].startroomid });
							singularDoor = true;
						}
						else
						{
							index = doorApos.x + change + ((doorApos.y + 1) * w);
							if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
							{
								let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y + 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
								doors.push(newdoor);
								//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "32: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ") " + roomconnections[i].startroomid });
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + change + ((doorApos.y - 1) * w);
								if (tilemap[index] != roomconnections[i].startroomid && tilemap[index] == roomconnections[i].endroomid)
								{
									let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y - 1 }, secret: roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret, roomA: roomconnections[i].startroomid, roomB: roomconnections[i].endroomid }
									doors.push(newdoor);
									//debug.push({ x: doorApos.x + change, y: doorApos.y, letter: "33: " + tilemap[index] + "/" + roomconnections[i].endroomid + " (" + (doorApos.x+change) + "," + doorApos.y + ") " + roomconnections[i].startroomid });
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
		
			if (trynextside)
			{
				trynextside = false;
				change = 0;
				changeattempt = 0;
				changesign = -1;
			}
		}
		
		if (sides_attempted >= 1)
		{
			let path_start = { x: Math.floor(roommap[roomconnections[i].start].x + (roommap[roomconnections[i].start].w / 2)), y: Math.floor(roommap[roomconnections[i].start].y + (roommap[roomconnections[i].start].h / 2)) };
			let path_end = { x: Math.floor(roommap[roomconnections[i].end].x + (roommap[roomconnections[i].end].w / 2)), y: Math.floor(roommap[roomconnections[i].end].y + (roommap[roomconnections[i].end].h / 2)) };
			let corridor_path = DrawnMapPathToPosition(path_start, path_end, tilemap, w, h);
			
			for (let j = 0; j < corridor_path.length; j++)
			{
				let tileIndex = corridor_path[j].x + (corridor_path[j].y * w);
				if (tilemap[tileIndex] == "unknown")
				{
					tilemap[tileIndex] = "corridor";
					//debug.push({ x: corridor_path[i].x, y: corridor_path[i].y, letter: "C" });
				}
				if (j > 0 && j < corridor_path.length - 1)
				{
					let tileIndex2 = corridor_path[j-1].x + (corridor_path[j-1].y * w)
					if (tilemap[tileIndex] != tilemap[tileIndex2] && ((tilemap[tileIndex] == "corridor" && tilemap[tileIndex2] != "corridor") || (tilemap[tileIndex] != "corridor" && tilemap[tileIndex2] == "corridor")))
					{
						let corridor_secret = roommap[roomconnections[i].start].secret || roommap[roomconnections[i].end].secret;
						let roomB = tilemap[tileIndex2] == "unknown" ? "corridor" : tilemap[tileIndex2];
						if (tilemap[corridor_path[j].x + (corridor_path[j].y * w)] != roomB)
						{
							let newdoor = { A: { x: corridor_path[j].x, y: corridor_path[j].y }, B: { x: corridor_path[j-1].x, y: corridor_path[j-1].y }, secret: corridor_secret, roomA: tilemap[corridor_path[j].x + (corridor_path[j].y * w)], roomB: roomB }
							doors.push(newdoor);
						}
					}
				}
			}
		}
	}
	
	
	for(let i = 0; i < roommap.length; i++)
	{
		let tileIndex = 0;
		
		// make more doors
		
		let change = 0;
		let changeattempt = 0;
		let changesign = -1;
		let sides_attempted = 0;
		let doorApos = { x: 0, y: 0 };
		let doorBpos = { x: 0, y: 0 };
		let trynextside = false;
		
		let door_side = Math.random();
		let singularDoor = false;
		let randomy = Math.floor(Math.max(Math.random() * (roommap[i].h - 1), 0) + roommap[i].y);
		let randomx = Math.floor(Math.max(Math.random() * (roommap[i].w - 1), 0) + roommap[i].x);
		
		index = roommap[i].x + (roommap[i].y * w);
		let door_id = tilemap[index];
		
		while (sides_attempted < 1 && singularDoor == false)
		{
			if (door_side > 1)
				door_side -= 1;
			
			change = Math.floor(changeattempt) * changesign;
			
			if (door_side <= 0.25)
			{
				doorApos = { x: roommap[i].x, y: randomy };
				
				if (doorApos.y + Math.abs(change) > roommap[i].y + roommap[i].h - 1 && doorApos.y - Math.abs(change) < roommap[i].y)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.y + change > roommap[i].y + roommap[i].h - 1 || doorApos.y + change < roommap[i].y)
				{
					changeattempt += 0.5;
					changesign *= -1;
					change = Math.floor(changeattempt) * changesign;
				}
				else
				{
					let index = doorApos.x + 1 + ((doorApos.y + change) * w);
					if (doorApos.x + 1 < w &&  doorApos.y + change > -1 && doorApos.y + change < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
					{
						let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
						let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x + 1, y: doorApos.y + change }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
						doors.push(newdoor);
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + ((doorApos.y + change) * w);
						if (doorApos.x - 1 > 0 &&  doorApos.y + change > -1 && doorApos.y + change < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
						{
							let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
							let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x - 1, y: doorApos.y + change }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
							doors.push(newdoor);
							singularDoor = true;
						}
						else
						{
							index = doorApos.x + ((doorApos.y + change + 1) * w);
							if (doorApos.y + change + 1 > -1 && doorApos.y + change + 1 < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
							{
								let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
								let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change + 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
								doors.push(newdoor);
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + ((doorApos.y + change - 1) * w);
								if (doorApos.y + change - 1 > -1 && doorApos.y + change - 1 < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
								{
									let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
									let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change - 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
									doors.push(newdoor);
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
			else if (door_side <= 0.5)
			{
				doorApos = { x: roommap[i].x + roommap[i].w - 1, y: randomy };
				
				if (doorApos.y + Math.abs(change) > roommap[i].y + roommap[i].h - 1  && doorApos.y - Math.abs(change) < roommap[i].y)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.y + change > roommap[i].y + roommap[i].h - 1 || doorApos.y + change < roommap[i].y)
				{
					changeattempt += 0.5;
					changesign *= -1;
					change = Math.floor(changeattempt) * changesign;
				}
				
				else
				{
					let index = doorApos.x + 1 + ((doorApos.y + change) * w);
					if (doorApos.x + 1 < w &&  doorApos.y + change > -1 && doorApos.y + change < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
					{
						let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
						let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x + 1, y: doorApos.y + change }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
						doors.push(newdoor);
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + ((doorApos.y + change) * w);
						if (doorApos.x - 1 > -1 && doorApos.y + change > 1 && doorApos.y + change < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
						{
							let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
							let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x - 1, y: doorApos.y + change }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
							doors.push(newdoor);
							singularDoor = true;
						}
						else
						{
							index = doorApos.x + ((doorApos.y + change + 1) * w);
							if (doorApos.y + change + 1 > -1 && doorApos.y + change + 1 < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
							{
								let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
								let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change + 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
								doors.push(newdoor);
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + ((doorApos.y + change - 1) * w);
								if (doorApos.y + change - 1 > -1 && doorApos.y + change - 1 < h && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
								{
									let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
									let newdoor = { A: { x: doorApos.x, y: doorApos.y + change }, B: { x: doorApos.x, y: doorApos.y + change - 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
									doors.push(newdoor);
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
			else if (door_side <= 0.75)
			{
				doorApos = { x: randomx, y: roommap[i].y };
				
				if (doorApos.x + Math.abs(change) > roommap[i].x + roommap[i].w - 1  && doorApos.x - Math.abs(change) < roommap[i].x)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.x + change > roommap[i].x + roommap[i].w - 1 || doorApos.x + change < roommap[i].x)
				{
					changeattempt += 0.5;
					changesign *= -1;
					change = Math.floor(changeattempt) * changesign;
				}
				else
				{
					let index = doorApos.x + 1 + change + (doorApos.y * w);
					if (doorApos.x + change + 1 < w && doorApos.x + change + 1 > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
					{
						let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
						let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change + 1, y: doorApos.y }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
						doors.push(newdoor);
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + change + (doorApos.y * w);
						if (doorApos.x + change + 1 < w && doorApos.x + change + 1 > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
						{
							let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
							let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change - 1, y: doorApos.y }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
							doors.push(newdoor);
							singularDoor = true;
						}
						else
						{
							index = doorApos.x + change + ((doorApos.y + 1) * w);
							if (doorApos.y + 1 < h && doorApos.x + change < w && doorApos.x + change > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
							{
								let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
								let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y + 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
								doors.push(newdoor);
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + change + ((doorApos.y - 1) * w);
								if (doorApos.y - 1 > -1 && doorApos.x + change < w && doorApos.x + change > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
								{
									let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
									let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y - 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
									doors.push(newdoor);
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
			else
			{
				doorApos = { x: randomx, y: roommap[i].y + roommap[i].h - 1 };
				
				if (doorApos.x + Math.abs(change) > roommap[i].x + roommap[i].w - 1 && doorApos.x - Math.abs(change) < roommap[i].x)
				{
					door_side += 0.25;
					sides_attempted += 0.25;
					trynextside = true;
				}
				else if (doorApos.x + change > roommap[i].x + roommap[i].w - 1 || doorApos.x + change < roommap[i].x)
				{
					changeattempt += 0.5;
					changesign *= -1;
					change = Math.floor(changeattempt) * changesign;
				}
				else
				{
					let index = doorApos.x + 1 + change + (doorApos.y * w);
					if (doorApos.x + change + 1 < w && doorApos.x + change + 1 > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
					{
						let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
						let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change + 1, y: doorApos.y }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
						doors.push(newdoor);
						singularDoor = true;
					}
					else
					{
						index = doorApos.x - 1 + change + (doorApos.y * w);
						if (doorApos.x + change - 1 < w && doorApos.x + change - 1 > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
						{
							let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
							let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change - 1, y: doorApos.y }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
							doors.push(newdoor);
							singularDoor = true;
						}
						else
						{
							index = doorApos.x + change + ((doorApos.y + 1) * w);
							if (doorApos.y + 1 < h && doorApos.x + change + 1 < w && doorApos.x + change + 1 > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
							{
								let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
								let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y + 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
								doors.push(newdoor);
								singularDoor = true;
							}
							else
							{
								index = doorApos.x + change + ((doorApos.y - 1) * w);
								if (doorApos.y - 1 > -1 && doorApos.x + change + 1 < w && doorApos.x + change + 1 > -1 && tilemap[index] != door_id && tilemap[index] != "unknown" && tilemap[index] != "closed" && CheckDoorOverlap(doors, door_id, tilemap[index]))
								{
									let secretB = tilemap[index] == "corridor" ? false : roommap[tilemap[index]].secret;
									let newdoor = { A: { x: doorApos.x + change, y: doorApos.y }, B: { x: doorApos.x + change, y: doorApos.y - 1 }, secret: roommap[door_id].secret || secretB, roomA: door_id, roomB: tilemap[index] };
									doors.push(newdoor);
									singularDoor = true;
									
								}
								else
								{
									changeattempt += 0.5;
									changesign *= -1;
								}
							}
						}
					}
				}
			}
		
			if (trynextside)
			{
				trynextside = false;
				change = 0;
				changeattempt = 0;
				changesign = -1;
			}
		}
	}
	
	for (let i = 0; i < doors.length; i++)
	{
		//console.log(doors[i].roomA + " -> " + doors[i].roomB);
		//debug.push({ x: doors[i].A.x, y: doors[i].A.y, letter: doors[i].roomA + " (" + doors[i].A.x + ", " + doors[i].A.y + ")"})
		//debug.push({ x: doors[i].A.x, y: doors[i].A.y + 0.12, letter: doors[i].roomB + " (" + doors[i].B.x + ", " + doors[i].B.y + ")" })
		if (doors[i].roomA == "unknown" || doors[i].roomB == "unknown" || (doors[i].roomA == "corridor" && doors[i].roomB == "corridor") || (doors[i].roomA == doors[i].roomB))
		{;
			doors.splice(i, 1);
			i--;
		}
	}
	
	/*
	for (let y = 0; y < h; y++)
	{
		for (let x = 0; x < w; x++)
		{
			//if (isNaN(tilemap[x + (y * w)]))
			debug.push({ x: x, y: y + 0.5, letter: tilemap[x + (y * w)] });
		}
	}
	*/
	return {tilemap: tilemap, doors: doors, debugmarks: debug};
}

function RemoveXYFromQueue(coords, queue)
{
	
	for (let i = 0; i < queue.length; i++)
	{
		if (queue[i].x == coords.x && queue[i].y == coords.y)
		{
			queue.splice(i,1);
			i--;
		}
	}
	
	return queue;
}

function GetConnectionsRAsInt(x, y, tilemap, width, height)
{
	let code = 0;
	let tileIndex = x + 1 + (y * width);
	if (x < width - 1 && (!isNaN(tilemap[tileIndex]) || tilemap[tileIndex] == "coridoor"))
	{
		code += 1;
	}
	
	tileIndex = x - 1 + (y * width);
	if (x > 0 && (!isNaN(tilemap[tileIndex]) || tilemap[tileIndex] == "coridoor"))
	{
		code += 4;
	}

	tileIndex = x + ((y + 1) * width);
	if (y < height - 1 && (!isNaN(tilemap[tileIndex]) || tilemap[tileIndex] == "coridoor"))
	{
		code += 2;
	}
	
	tileIndex = x + ((y - 1) * width);
	if (y > 0 && (!isNaN(tilemap[tileIndex]) || tilemap[tileIndex] == "coridoor"))
	{
		code += 8;
	}
	
	return code;
}

function DrawDrawnDungeonMap(channel, arguments)
{
	let w = 32;
	let h = 24;
	let draw_grid = true;
	
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			w = parseInt(arguments[argumentpos+1]);
		if (w > DUNGEONMAP_MAX_WIDTH)
			w = DUNGEONMAP_MAX_WIDTH;
		if (w < DUNGEONMAP_MIN_WIDTH)
			w = DUNGEONMAP_MIN_WIDTH;
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			h = parseInt(arguments[argumentpos+1]);
		if (h > DUNGEONMAP_MAX_HEIGHT)
			h = DUNGEONMAP_MAX_HEIGHT;
		if (h < DUNGEONMAP_MIN_HEIGHT)
			h = DUNGEONMAP_MIN_HEIGHT;
		argumentpos = arguments.indexOf("-nogrid")
		if (argumentpos > -1)
			draw_grid = false;
	}
	
	let fullmap = GenerateDrawnDungeonMap(arguments);
	//let fullmap = { tilemap: [], doors: [] };
	//fullmap.tilemap = GenerateDungeonMap(arguments);
	
	let leftcut = 0;
	let bottomcut = 0;
	
	let cut = 0;
	let stopcut = false;
	
	for (let y = 0; y < h && !stopcut; y++)
	{
		for (let x = 0; x < w && !stopcut; x++)
		{
			let index = x + (y * w);
			cut++;
			if (fullmap.tilemap[index] != "unknown" && fullmap.tilemap[index] != "closed")
			{
				cut--;
				stopcut = true;
			}
		}
	}
	
	bottomcut = Math.floor(cut / w);
	cut = 0;
	stopcut = false;
	
	for (let y = h - 1; y > 0 && !stopcut; y--)
	{
		for (let x = 0; x < w && !stopcut; x++)
		{
			let index = x + (y * w);
			cut++;
			if (fullmap.tilemap[index] != "unknown" && fullmap.tilemap[index] != "closed")
			{
				cut--;
				stopcut = true;
			}
		}
	}
	
	let canvash = h - Math.floor(cut / w);
	cut = 0;
	stopcut = false;
	
	for (let x = 0; x < w && !stopcut; x++)
	{
		for (let y = 0; y < h && !stopcut; y++)
		{
			let index = x + (y * w);
			cut++;
			if (fullmap.tilemap[index] != "unknown" && fullmap.tilemap[index] != "closed")
			{
				cut--;
				stopcut = true;
			}
		}
	}
	
	leftcut = Math.floor(cut / h);
	cut = 0;
	stopcut = false;
	
	for (let x = w - 1; x > 0 && !stopcut; x--)
	{
		for (let y = 0; y < h -0 && !stopcut; y++)
		{
			let index = x + (y * w);
			cut++;
			if (fullmap.tilemap[index] != "unknown" && fullmap.tilemap[index] != "closed")
			{
				cut--;
				stopcut = true;
			}
		}
	}
	
	let canvasw = w - Math.floor(cut / h);
	
	let tempcanvas = new Canvas();
	tempcanvas.width = (canvasw - leftcut + 2) * 100;
	tempcanvas.height = (canvash - bottomcut + 2) * 100;
	
	//console.log(leftcut)
	//console.log(bottomcut)
	//console.log(canvash)
	//console.log(canvasw)
	
	if (tempcanvas.getContext)
	{
		let ctx = tempcanvas.getContext('2d');
		
		let closed_color = '#5693BA';
		let open_color = '#FFFFFF'
		let grid_color = '#A9CBDD'
		
		let map_offset = { x: (leftcut - 1) * -100, y: (bottomcut - 1) * -100};
		
		
		ctx.fillStyle = closed_color;
		ctx.fillRect(0,0,(canvasw - leftcut + 2) * 100,(canvash - bottomcut + 2) * 100);
		
		ctx.fillStyle = open_color;
		ctx.fillRect(100,100,(canvasw - leftcut) * 100,(canvash - bottomcut) * 100);
		
		ctx.strokeStyle = grid_color;
		ctx.lineWidth = 2;
		
		for (let y = 1; y < canvash - bottomcut + 2; y++)
		{
			ctx.beginPath();
			ctx.moveTo(100, y * 100);
			ctx.lineTo((canvasw - leftcut + 1) * 100, y * 100);
			ctx.closePath();
			ctx.stroke();
		}
		
		for (let x = 1; x < canvasw - leftcut + 2; x++)
		{
			ctx.beginPath();
			ctx.moveTo(x * 100, 100);
			ctx.lineTo(x * 100,(canvash - bottomcut + 1) * 100);
			ctx.closePath();
			ctx.stroke();
		}
		
		
		ctx.fillStyle = open_color;
		ctx.strokeStyle = closed_color;

		ctx.lineWidth = 8;
		let frontierQueue = [];
		for (let y = bottomcut - 1; y < canvash; y++)
		{
			for (let x = leftcut - 1; x < canvasw; x++)
			{
				let index = x + (y * w);
				let priority = 0;
				if (fullmap.tilemap[index] == "unknown" || fullmap.tilemap[index] == "closed")
					priority = 0;
				else if (fullmap.tilemap[index] == "corridor" || !isNaN(fullmap.tilemap[index]))
				{
					priority = 0;
					let queueposition = { x: x, y: y, priority: priority };
					frontierQueue.push(queueposition);
				}
				
			}
		}
		
		ctx.strokeStyle = closed_color;
		let drawn_tiles = [];
		
		while (frontierQueue.length > 0)
		{
			let next_queue = getNextInQueue(frontierQueue);
			
			let current_tile = { x: frontierQueue[next_queue].x, y: frontierQueue[next_queue].y };
			
			frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
			
			let index = current_tile.x + (current_tile.y * w);
			
			let current_room_id = fullmap.tilemap[index];
			if (current_room_id == "unknown" || current_room_id == "closed")
				ctx.fillStyle = closed_color;
			else
				ctx.fillStyle = open_color;
			
			
			//get topmost cell of shape
			let check_tile = { x: current_tile.x, y: current_tile.y - 1 };
			let continue_loop = true;
			while (check_tile.y > -1 && continue_loop)
			{
				continue_loop = false;
				index = check_tile.x + (check_tile.y * w);
				if (fullmap.tilemap[index] == current_room_id)
				{
					current_tile.y--;
					continue_loop = true;
				}
				
				check_tile.y = current_tile.y - 1;
			}
			
			index = current_tile.x + (current_tile.y * w);
			
			let startpoint = { x: current_tile.x * 100 + map_offset.x, y: current_tile.y*100 + map_offset.y };
			let currentpoint = { x: startpoint.x, y: startpoint.y }
			let point_position = 0;
			ctx.beginPath();
			ctx.moveTo(startpoint.x, startpoint.y)
			//console.log(x + ", " + y);
			//console.log(startpoint);
			//console.log(ctx.fillStyle);
			//console.log(current_room_id);
			
			if (!drawn_tiles.includes(index))
			{
				drawn_tiles.push(index);
				let finished = false;
				do
				{
					while (point_position == 0 && finished == false)
					{
						//console.log("loop 0 part 0");
						check_tile.x = current_tile.x + 1;
						check_tile.y = current_tile.y - 1;
						index = check_tile.x + (check_tile.y * w);
						if (check_tile.y > -1 && check_tile.x < w && fullmap.tilemap[index] == current_room_id)
						{
							//console.log("loop 0 part 1");
							currentpoint = { x: (current_tile.x + 1) * 100 + map_offset.x, y: current_tile.y * 100  + map_offset.y};
							ctx.lineTo(currentpoint.x, currentpoint.y);
							current_tile.x++;
							current_tile.y--;
							index = current_tile.x + (current_tile.y * w);
							point_position = 3;
							frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
						}
						else 
						{
							check_tile.x = current_tile.x + 1;
							check_tile.y = current_tile.y;
							index = check_tile.x + (check_tile.y * w);
							if (check_tile.x < w && fullmap.tilemap[index] == current_room_id)
							{
								//console.log("loop 0 part 2")
								current_tile.x++;
								index = current_tile.x + (current_tile.y * w);
								currentpoint = { x: current_tile.x * 100 + map_offset.x, y: current_tile.y * 100 + map_offset.y};
								ctx.lineTo(currentpoint.x, currentpoint.y);
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
							else
							{
								//console.log("loop 0 part 3")
								currentpoint = { x: (current_tile.x + 1) * 100 + map_offset.x, y: current_tile.y * 100 + map_offset.y};
								ctx.lineTo(currentpoint.x, currentpoint.y);
								point_position = 1;
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
						}
						if (currentpoint.x == startpoint.x && currentpoint.y == startpoint.y)
							finished = true;
					}
					
					while (point_position == 1 && finished == false)
					{
						//console.log("loop 1 part 0")
						check_tile.x = current_tile.x + 1;
						check_tile.y = current_tile.y + 1;
						index = check_tile.x + (check_tile.y * w);
						if (check_tile.y < h && check_tile.x < w && fullmap.tilemap[index] == current_room_id)
						{
							//console.log("loop 1 part 1")
							currentpoint = { x: (current_tile.x + 1) * 100 + map_offset.x, y: (current_tile.y + 1) * 100 + map_offset.y };
							ctx.lineTo(currentpoint.x, currentpoint.y);
							current_tile.x++;
							current_tile.y++;
							index = current_tile.x + (current_tile.y * w);
							point_position = 0;
							frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
						}
						else 
						{
							check_tile.x = current_tile.x;
							check_tile.y = current_tile.y + 1;
							index = check_tile.x + (check_tile.y * w);
							if (check_tile.y < h && fullmap.tilemap[index] == current_room_id)
							{
								//console.log("loop 1 part 2")
								current_tile.y++;
								index = current_tile.x + (current_tile.y * w);
								currentpoint = { x: (current_tile.x + 1) * 100 + map_offset.x, y: current_tile.y * 100 + map_offset.y };
								ctx.lineTo(currentpoint.x, currentpoint.y);
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
							else
							{
								//console.log("loop 1 part 3")
								currentpoint = { x: (current_tile.x + 1) * 100 + map_offset.x, y: (current_tile.y + 1) * 100 + map_offset.y};
								ctx.lineTo(currentpoint.x, currentpoint.y);
								point_position = 2;
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
						}
						if (currentpoint.x == startpoint.x && currentpoint.y == startpoint.y)
							finished = true;
					}
					
					while (point_position == 2 && finished == false)
					{
						//console.log("loop 2 part 0")
						check_tile.x = current_tile.x - 1;
						check_tile.y = current_tile.y + 1;
						index = check_tile.x + (check_tile.y * w);
						if (check_tile.y < h && check_tile.x > - 1 && fullmap.tilemap[index] == current_room_id)
						{
							//console.log("loop 2 part 1")
							currentpoint = { x: current_tile.x * 100 + map_offset.x, y: (current_tile.y + 1) * 100 + map_offset.y };
							ctx.lineTo(currentpoint.x, currentpoint.y);
							current_tile.x--;
							current_tile.y++;
							index = current_tile.x + (current_tile.y * w);
							point_position = 1;
							frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
						}
						else 
						{
							check_tile.x = current_tile.x - 1;
							check_tile.y = current_tile.y;
							index = check_tile.x + (check_tile.y * w);
							if (check_tile.x > -1 && fullmap.tilemap[index] == current_room_id)
							{
								//console.log("loop 2 part 2")
								current_tile.x--;
								index = current_tile.x + (current_tile.y * w);
								currentpoint = { x: (current_tile.x + 1) * 100 + map_offset.x, y: (current_tile.y + 1) * 100 + map_offset.y };
								ctx.lineTo(currentpoint.x, currentpoint.y);
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
							else
							{
								//console.log("loop 2 part 3")
								currentpoint = { x: current_tile.x * 100 + map_offset.x, y: (current_tile.y + 1) * 100 + map_offset.y };
								ctx.lineTo(currentpoint.x, currentpoint.y);
								point_position = 3;
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
						}
						if (currentpoint.x == startpoint.x && currentpoint.y == startpoint.y)
							finished = true;
					}
					
					
					while (point_position == 3 && finished == false)
					{
						//console.log("loop 3 part 0")
						check_tile.x = current_tile.x - 1;
						check_tile.y = current_tile.y - 1;
						index = check_tile.x + (check_tile.y * w);
						if (check_tile.y > -1 && check_tile.x > -1 && fullmap.tilemap[index] == current_room_id)
						{
							//console.log("loop 3 part 1")
							currentpoint = { x: current_tile.x * 100 + map_offset.x, y: current_tile.y * 100 + map_offset.y };
							ctx.lineTo(currentpoint.x, currentpoint.y);
							current_tile.x--;
							current_tile.y--;
							index = current_tile.x + (current_tile.y * w);
							point_position = 2;
							frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
						}
						else 
						{
							check_tile.x = current_tile.x;
							check_tile.y = current_tile.y - 1;
							index = check_tile.x + (check_tile.y * w);
							if (check_tile.y > -1 && fullmap.tilemap[index] == current_room_id)
							{
								//console.log("loop 3 part 2")
								current_tile.y--;
								index = current_tile.x + (current_tile.y * w);
								currentpoint = { x: current_tile.x * 100 + map_offset.x, y: (current_tile.y + 1) * 100 + map_offset.y };
								ctx.lineTo(currentpoint.x, currentpoint.y);
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
							else
							{
								//console.log("loop 3 part 3")
								currentpoint = { x: current_tile.x * 100 + map_offset.x, y: current_tile.y * 100 + map_offset.y };
								ctx.lineTo(currentpoint.x, currentpoint.y);
								point_position = 0;
								frontierQueue = RemoveXYFromQueue(current_tile, frontierQueue);
							}
						}
						if (currentpoint.x == startpoint.x && currentpoint.y == startpoint.y)
							finished = true;
					}
				} while (finished == false);
				
				ctx.closePath();
				//ctx.fill();
				ctx.stroke();
			}
			
		}
		
		ctx.fillStyle = grid_color;
		//ctx.strokeStyle = grid_color;
		//ctx.lineWidth = 2;
		
		for (let y = bottomcut -1; y < canvash +1; y++)
		{
			for (let x = leftcut -1; x < canvasw +1; x++)
			{
				let index = x + (y * w);
				if (fullmap.tilemap[index] == "unknown" || fullmap.tilemap[index] == "closed")
				{
					
					ctx.fillStyle = closed_color;
					ctx.fillRect(x * 100 + map_offset.x, y * 100 + map_offset.y, 100, 100);
					
					let code = GetConnectionsRAsInt(x, y, fullmap.tilemap, w, h);
					
					ctx.fillStyle = grid_color;
					if ((code & 12) == 0)
					{
						ctx.beginPath();
						ctx.arc(x * 100 + map_offset.x, y * 100 + map_offset.y, 2, 0, 2 * Math.PI);
						ctx.fill();
					}
					if ((code & 9) == 0)
					{
						ctx.beginPath();
						ctx.arc(x * 100 + map_offset.x + 100, y * 100 + map_offset.y, 2, 0, 2 * Math.PI);
						ctx.fill();
					}
					if ((code & 6) == 0)
					{
						ctx.beginPath();
						ctx.arc(x * 100 + map_offset.x, y * 100 + map_offset.y + 100, 2, 0, 2 * Math.PI);
						ctx.fill();
					}
					if ((code & 3) == 0)
					{
						ctx.beginPath();
						ctx.arc(x * 100 + map_offset.x + 100, y * 100 + map_offset.y + 100, 2, 0, 2 * Math.PI);
						ctx.fill();
					}
				}
			}
		}
		
		let secret_symbol = new Image(20,27);
		secret_symbol.src = "./secret.svg"
		//ctx.font = "60px sans-serif";
		ctx.lineWidth = 8;
		for (let i = 0; i < fullmap.doors.length; i++)
		{
			let doorposition = { x: fullmap.doors[i].A.x * 100, y: fullmap.doors[i].A.y * 100 };
			let offset = { x: fullmap.doors[i].A.x - fullmap.doors[i].B.x, y: fullmap.doors[i].A.y - fullmap.doors[i].B.y };
			ctx.strokeStyle = '#000000';
			ctx.fillStyle = '#FFFFFF';
			if (offset.x == 0)
			{
				if (fullmap.doors[i].secret) // 32x45
				{
					ctx.strokeStyle = grid_color;
					doorposition.x += offset.x * -50 + 20 + map_offset.x;
					doorposition.y += offset.y * -50 + 40 + map_offset.y;
					ctx.fillRect(doorposition.x, doorposition.y, 60, 20);
					ctx.strokeRect(doorposition.x, doorposition.y, 60, 20);
					ctx.fillStyle = '#000000';
					doorposition.x += 14;
					doorposition.y += 30;
					ctx.drawImage(secret_symbol, doorposition.x + 6, doorposition.y - 32); // done!
					//ctx.fillText("S", doorposition.x, doorposition.y);
					//ctx.strokeText("S", doorposition.x, doorposition.y)
				}
				else
				{
					doorposition.x += offset.x * -50 + 20 + map_offset.x;
					doorposition.y += offset.y * -50 + 40 + map_offset.y;
					ctx.fillRect(doorposition.x, doorposition.y, 60, 20);
					ctx.strokeRect(doorposition.x, doorposition.y, 60, 20);
				}
			}
			else
			{
				if (fullmap.doors[i].secret)
				{
					ctx.strokeStyle = grid_color;
					doorposition.x += offset.x * -50 + 40 + map_offset.x;
					doorposition.y += offset.y * -50 + 20 + map_offset.y;
					ctx.fillRect(doorposition.x, doorposition.y, 20, 60);
					ctx.strokeRect(doorposition.x, doorposition.y, 20, 60);
					ctx.fillStyle = '#000000';
					doorposition.x -= 6;
					doorposition.y += 50;
					ctx.drawImage(secret_symbol, doorposition.x + 6, doorposition.y - 32)
					//ctx.fillText("S", doorposition.x, doorposition.y);
					//ctx.strokeText("S", doorposition.x, doorposition.y)
				}
				else
				{
					doorposition.x += offset.x * -50 + 40 + map_offset.x;
					doorposition.y += offset.y * -50 + 20 + map_offset.y;
					ctx.fillRect(doorposition.x, doorposition.y, 20, 60);
					ctx.strokeRect(doorposition.x, doorposition.y, 20, 60);
				}
			}
		}
		
		ctx.font = "12px sans-serif";
		for (let i = 0; i < fullmap.debugmarks.length; i++)
		{
			ctx.fillStyle = '#CC0000';
			let xpos = (fullmap.debugmarks[i].x * 100) + 10 + map_offset.x;
			let ypos = (fullmap.debugmarks[i].y * 100) + 10 + map_offset.y;
			ctx.fillText(fullmap.debugmarks[i].letter, xpos, ypos);
		}
		
		
		//output file
		let file = 'drawndungeonmap.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			console.log('The drawndungeonmap has been saved!');
			channel.send({ files: [{ attachment: path, name: file }] });
		})
	}
}

//
// save/load currentgay variable

function saveCurrentGayValue()
{
	let gayvalue = { gay: currentgay };
	
	let file = 'currentgay.json';
	let path = './' + file;
	let data = JSON.stringify(gayvalue);
	
	fs.writeFile(path, data, (err) => {
		if (err) throw err;
		console.log('currentgay saved');
		});
}

function loadCurrentGayValue()
{
	try
	{
		let gayvalue = JSON.parse(fs.readFileSync('currentgay.json'));
		currentgay += gayvalue.gay;
		console.log('currentgay loaded: ' + currentgay.toString());
	}
	catch (err)
	{
		currentgay = 0;
		console.log('currentgay reset');
	}
	
	currentgay += (Math.floor((Math.random()*6) + 1) * 10) + Math.floor((Math.random()*10) + 1);
}

//
// Podcaster Generation

function generatePodcaster()
{
	let podcaster = RandomArrayEntry(monster_names, false, "[donotnest]") + " " + RandomArrayEntry(monster_surnames, false, "[donotnest]");
	let podcastname = RandomArrayEntry(podcaster_gen.podcastnames, false, "[donotnest]");
	let subject1 = RandomArrayEntry(podcaster_gen.podcast_subjects, false, "[donotnest]");
	let subject2 = RandomArrayEntry(podcaster_gen.podcast_subjects, false, "[donotnest]");
	
	while (subject1 == subject2)
	{
		subject2 = RandomArrayEntry(podcaster_gen.podcast_subjects, false, "[donotnest]");
	}
	
	let position = podcastname.indexOf("\[");
	let endposition = -1;
	let podcastsubstr = "";
	
	while (position != -1)
	{
		endposition = podcastname.indexOf("\]");
		podcastsubstr = podcastname.substring(position+1,endposition);
		substrcommands = podcastsubstr.split(" ");
		if (substrcommands[0] == "an")
		{
			let primaryword = "";
			if (substrcommands[1] == "verb")
			{
				primaryword = RandomArrayEntry(podcaster_gen.verb, false, "[donotnest]");
			}
			else if (substrcommands[1] == "verbing")
			{
				primaryword = RandomArrayEntry(podcaster_gen.verbing, false, "[donotnest]");
			}
			else if (substrcommands[1] == "adjective")
			{
				primaryword = RandomArrayEntry(podcaster_gen.adjective, false, "[donotnest]");
			}
			else if (substrcommands[1] == "object")
			{
				primaryword = RandomArrayEntry(podcaster_gen.object, false, "[donotnest]");
			}
			else if (substrcommands[1] == "objects")
			{
				primaryword = RandomArrayEntry(podcaster_gen.objects, false, "[donotnest]");
			}
			else if (substrcommands[1] == "objects")
			{
				primaryword = RandomArrayEntry(podcaster_gen.objects, false, "[donotnest]");
			}
			else if (substrcommands[1] == "animal")
			{
				primaryword = RandomArrayEntry(podcaster_gen.animal, false, "[donotnest]");
			}
			else if (substrcommands[1] == "animals")
			{
				primaryword = RandomArrayEntry(podcaster_gen.animals, false, "[donotnest]");
			}
			else if (substrcommands[1] == "place")
			{
				primaryword = RandomArrayEntry(podcaster_gen.place, false, "[donotnest]");
			}
			else if (substrcommands[1] == "places")
			{
				primaryword = RandomArrayEntry(podcaster_gen.places, false, "[donotnest]");
			}
			let aan = grammarAorAn(primaryword.substr(0,1));
			podcastname = podcastname.substr(0,position) + aan + " " + primaryword + podcastname.substr(endposition+1);
		}
		else
		{
			let primaryword = "";
			if (substrcommands[0] == "verb")
			{
				primaryword = RandomArrayEntry(podcaster_gen.verb, false, "[donotnest]");
			}
			else if (substrcommands[0] == "verbing")
			{
				primaryword = RandomArrayEntry(podcaster_gen.verbing, false, "[donotnest]");
			}
			else if (substrcommands[0] == "adjective")
			{
				primaryword = RandomArrayEntry(podcaster_gen.adjective, false, "[donotnest]");
			}
			else if (substrcommands[0] == "object")
			{
				primaryword = RandomArrayEntry(podcaster_gen.object, false, "[donotnest]");
			}
			else if (substrcommands[0] == "objects")
			{
				primaryword = RandomArrayEntry(podcaster_gen.objects, false, "[donotnest]");
			}
			else if (substrcommands[0] == "objects")
			{
				primaryword = RandomArrayEntry(podcaster_gen.objects, false, "[donotnest]");
			}
			else if (substrcommands[0] == "animal")
			{
				primaryword = RandomArrayEntry(podcaster_gen.animal, false, "[donotnest]");
			}
			else if (substrcommands[0] == "animals")
			{
				primaryword = RandomArrayEntry(podcaster_gen.animals, false, "[donotnest]");
			}
			else if (substrcommands[0] == "place")
			{
				primaryword = RandomArrayEntry(podcaster_gen.place, false, "[donotnest]");
			}
			else if (substrcommands[0] == "places")
			{
				primaryword = RandomArrayEntry(podcaster_gen.places, false, "[donotnest]");
			}
			podcastname = podcastname.substr(0,position) + primaryword + podcastname.substr(endposition+1);
		}
		position = podcastname.indexOf("\[");
	}
	
	let full_postcastgen = podcaster.toUpperCase() + ", host of " + podcastname.toUpperCase() + " where they discuss " + subject1.toUpperCase() + " and " + subject2.toUpperCase();
	
	return full_postcastgen;
}



//
// BATTLESHIPS

var battleships_games = [];

var DESTROYER_ID = 2;
var SUBMARINE_ID = 4;
var CRUISER_ID = 6;
var BATTLESHIP_ID = 8;
var CARRIER_ID = 10;

var ALIGNMENT_VERTICAL = 0;
var ALIGNMENT_HORIZONTAL = 1;

var BATTLESHIPS_GRID_PATH = './battleships_grid_top.png';
var BATTLESHIPS_BG_PATH = './battleships_grid_bg.png';
var BATTLESHIPS_MISS_PATH = './battleships_miss.png';
var BATTLESHIPS_HIT_PATH = './battleships_hit.png';

//
// returns true if a ship is placed, otherwise returns false
function PlaceShip(board, ship_id, coords, alignment)
{
	let ship_length = 2;
	if (ship_id == CARRIER_ID)
	{
		ship_length = 5;
	}
	else if (ship_id == BATTLESHIP_ID)
	{
		ship_length = 4;
	}
	else if (ship_id == CRUISER_ID || ship_id == SUBMARINE_ID)
	{
		ship_length = 3;
	}
	
	if (alignment != ALIGNMENT_VERTICAL && alignment != ALIGNMENT_HORIZONTAL)
	{
		console.log("Invalid ship alignment");
		return false;
	}
	
	if (alignment == ALIGNMENT_VERTICAL)
	{
		for (let i = 0; i < ship_length; i++)
		{
			let tempy = coords.y + i;
			
			if (tempy > 9)
			{
				return false;
			}
			
			board_index = coords.x + (tempy * 10);
			if (board[board_index] != 0)
			{
				return false;
			}
		}
	}
	else if (alignment == ALIGNMENT_HORIZONTAL)
	{
		for (let i = 0; i < ship_length; i++)
		{
			let tempx = coords.x + i;
			
			if (tempx > 9)
			{
				return false;
			}
			
			board_index = tempx + (coords.y * 10);
			if (board[board_index] != 0)
			{
				return false;
			}
		}
	}
	
	if (alignment == ALIGNMENT_VERTICAL)
	{
		for (let i = 0; i < ship_length; i++)
		{
			let tempy = coords.y + i;
			board_index = coords.x + (tempy * 10);
			board[board_index] = ship_id;
		}
	}
	else if (alignment == ALIGNMENT_HORIZONTAL)
	{
		for (let i = 0; i < ship_length; i++)
		{
			let tempx = coords.x + i;
			board_index = tempx + (coords.y * 10);
			board[board_index] = ship_id;
		}
	}
	
	return true;
}

function GetBattleshipsGameByChannelId(channelid)
{
	for(let i = 0; i < battleships_games.length; i++)
	{
		if (battleships_games[i].channelid == channelid)
			return battleships_games[i];
	}
	
	return null;
}

function OverwriteBattleshipsGame(gamestate)
{
	let index = -1;
	for(let i = 0; i < battleships_games.length; i++)
	{
		if (battleships_games[i].channelid == gamestate.channelid)
		{
			index = i;
			break;
		}
	}
	
	if (index == -1)
		return false;
	
	battleships_games[index] = gamestate;
	return true;
	
}

function InitializeNewBattleshipsGame(channel, arguments)
{
	let newgame = { board: [], channelid: channel.id, turns: 0 };
	
	for(let y = 0; y < 10; y++)
	{
		for(let x = 0; x < 10; x++)
		{
			newgame.board.push(0);
		}
	}
	
	//place ships
	
	for (let newship = CARRIER_ID; newship >= DESTROYER_ID; newship -= 2)
	{
		let tryplaceship = true;
		while (tryplaceship == true)
		{
			let coords = { x: Math.floor(Math.random()*10), y: Math.floor(Math.random()*10) };
			tryplaceship = !PlaceShip(newgame.board, newship, coords, Math.floor(Math.random()*2));
		}
	}
	
	let currentgame = GetBattleshipsGameByChannelId(channel.id);
	
	if (!OverwriteBattleshipsGame(newgame))
	{
		battleships_games.push(newgame);
	}
	
	
	SaveBattleshipsGames();
	channel.send("Game set up, use !battleships (letter) (number) to play");
}

async function GetBattleshipsBoardImage(channel)
{
	let boardimage_promise = new Promise(function(resolve, reject) {
		let gamestate = GetBattleshipsGameByChannelId(channel.id);
		if (gamestate == null)
			reject(new Error('No game in this channel.')).then(resolved, rejected);
		
		//let board_string = OutputBoardToString(gamestate.board);
		
		//return board_string;
		
		let mapmap = [];
		
		mapmap.push({ src: BATTLESHIPS_BG_PATH, x: 0, y: 0})
		
		for (let y = 0; y < 10; y++)
		{
			for (let x  = 0; x < 10; x++)
			{
				let xpos = (24*x)+24;
				let ypos = (24*y)+24;
				
				board_index = x + (y*10);
				
				if ((gamestate.board[board_index] & 1) == 1)
				{
					if (gamestate.board[board_index] - 1 == 0)
					{
						mapmap.push({ src: BATTLESHIPS_MISS_PATH, x: xpos, y: ypos});
					}
					else
					{
						mapmap.push({ src: BATTLESHIPS_HIT_PATH, x: xpos, y: ypos});
					}
				}
			}
		}
		
		mapmap.push({ src: BATTLESHIPS_GRID_PATH, x: 0, y: 0})
		
		let file = 'battleships_game.png';
		let path = './' + file;
		
		mergeImages(mapmap, 
		{
			width: 264,
			height: 264,
			Canvas: Canvas,
			Image: Image
		})
		.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			console.log('The battleships_game file has been saved!');
			resolve({path: path, file: file});
			//channel.send({ files: [{ attachment: path, name: file }] });
			}
			));
	});
	
	return boardimage_promise;
}



function CheckShipSunk(board, ship_id)
{
	for(let y = 0; y < 10; y++)
	{
		for(let x = 0; x < 10; x++)
		{
			board_index = x + (y * 10);
			if (board[board_index] == ship_id)
				return false;
		}
	}
	
	return true;
}

function CheckBoardState(board)
{
	for(let y = 0; y < 10; y++)
	{
		for(let x = 0; x < 10; x++)
		{
			board_index = x + (y * 10);
			if ((board[board_index] & 1) == 0)
			{
				if (board[board_index] > 0)
					return false;
			}
		}
	}
	
	return true;
}

async function PlayBattleshipsGame(channel, arguments)
{
	let gamestate = GetBattleshipsGameByChannelId(channel.id)
	if (gamestate == null)
	{
		channel.send("No game in this channel.");
		return;
	}
	
	if (CheckBoardState(gamestate.board))
	{
		channel.send("You have already won this game of Battleships (turns: " + gamestate.turns + ")");
		return;
	}
	
	if (arguments.length == 0)
		channel.send("You need to provide target coordinates. (letter) (number)");
	
	let coords = { x: 0, y: 0 };
	
	if (arguments.length == 1)
	{
		coords.x = parseInt(arguments[0].charAt(1)) - 1;
		coords.y = arguments[0].toLowerCase().charCodeAt(0) - 97;
	}
	else
	{
		coords.x = parseInt(arguments[1]) - 1;
		coords.y = arguments[0].toLowerCase().charCodeAt(0) - 97;
	}
	
	if (isNaN(coords.x) || isNaN(coords.y))
	{
		channel.send("Invalid co-ordinates.");
		return;
	}
	
	if (coords.x == -1)
		coords.x += 10;
	
	if (coords.x > 9 || coords.y > 9 || coords.x < 0 || coords.y < 0)
	{
		channel.send("Invalid co-ordinates.");
		return;
	}
	
	let board_index = coords.x + (coords.y * 10);
	
	let message = "";
	if ((gamestate.board[board_index] & 1) == 1)
	{
		channel.send("You have already fired on that position.");
		return;
	}
	else
	{
		gamestate.turns++;
		gamestate.board[board_index] += 1;
		if ((gamestate.board[board_index] - 1) == 0)
		{
			message = "Miss."
		}
		else
		{
			message = "Hit."
			let ship_id = gamestate.board[board_index] - 1;
			if (CheckShipSunk(gamestate.board, ship_id))
			{
				if (ship_id == DESTROYER_ID)
					message += "\nYou sunk a destroyer (2 length)";
				else if (ship_id == SUBMARINE_ID)
					message += "\nYou sunk a submarine (3 length)";
				else if (ship_id == CRUISER_ID)
					message += "\nYou sunk a cruiser (3 length)";
				else if (ship_id == BATTLESHIP_ID)
					message += "\nYou sunk a battleship (4 length)";
				else if (ship_id == CARRIER_ID)
					message += "\nYou sunk a carrier (5 length)";
			}
			if (CheckBoardState(gamestate.board))
			{
				message += "\nYou won in " + gamestate.turns + " turns.";
			}
		}
	}
	
	
	
	let boardimage_promise = new Promise(function(resolve, reject) {
		resolve(GetBattleshipsBoardImage(channel));
	});
	
	let boardimage = await boardimage_promise;
	
	channel.send({content: message, files: [{ attachment: boardimage.path, name: boardimage.file }] });
	
	SaveBattleshipsGames();
}

function SaveBattleshipsGames()
{
	let file = 'battleships.json';
	let path = './' + file;
	let data = JSON.stringify(battleships_games);
	
	fs.writeFile(path, data, (err) => {
		if (err) throw err;
		console.log('battleships saved');
		});
}

function LoadBattleshipsGames()
{
	try
	{
		battleships_games = JSON.parse(fs.readFileSync('battleships.json'));
		console.log('battleships loaded');
	}
	catch (err)
	{
		battleships_games = [];
		console.log('battleships reset');
	}
}

//
//
// BLASEBALL GENERATOR


function GenerateBlaseballer()
{
	let name = "**" + RandomArrayEntry(blaseballer_gen.FirstNames, true, "[FirstNames]") + " " + RandomArrayEntry(blaseballer_gen.LastNames, true, "[LastNames]") + "**";
	let rating = Math.floor((Math.random() * 34.5) + (Math.random() * 34.5)) / 10;
	let position = RandomArrayEntry(blaseballer_gen.Positions, true, "[Positions]");
	let team = RandomArrayEntry(blaseballer_gen.TeamNames, true, "[TeamNames]");
	let coffee = "Coffee: " + RandomArrayEntry(blaseballer_gen.Coffees, true, "[Coffees]");
	let bloodtype = "Blood type: " + RandomArrayEntry(blaseballer_gen.Bloodtypes, true, "[Bloodtypes]");
	let pregameritual = "Pregame ritual: " + RandomArrayEntry(blaseballer_gen.PreGameRituals, true, "[PreGameRituals]")
	
	
	let blaseballer = name + ", " + rating.toString() + "-star " + position + " for the " + team + "\n"
					+ coffee + "\n" + bloodtype + "\n" + pregameritual;
	
	return blaseballer;
}

//
//
// Voronoi/SVG City Generator

function DistanceBetweenPoints(a, b)
{
	let dirvector = { x: b.x - a.x, y:  b.y - a.y };
	return Math.sqrt((dirvector.x*dirvector.x) + (dirvector.y*dirvector.y));
}

function MidpointBetweenPoints(a, b)
{
	console.log(a);
	console.log(b);
	let xdiff = b.x - a.x;
	let ydiff = b.y - a.y;
	let midpoint = { x: a.x + xdiff/2, y: a.y + ydiff/2 };
	return midpoint;
}

function DoLinesIntersect(line1, line2)
{
	let s1 = { x: line1.end.x - line1.start.x, y: line1.end.y - line1.start.y };
	let s2 = { x: line2.end.x - line2.start.x, y: line2.end.y - line2.start.y };
	
	if ((-s2.x * s1.y + s1.x * s2.y) == 0)
		return false;
	
	let s = (-s1.y * (line1.start.x - line2.start.x) + s1.x * (line1.start.y - line2.start.y)) / (-s2.x * s1.y + s1.x * s2.y);
	let t = (s2.x * (line1.start.y - line2.start.y) - s2.y * (line1.start.x - line2.start.x)) / (-s2.x * s1.y + s1.x * s2.y);
	
	if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
	{
		//collision detected, returning
		//let collisionpoint = { x: line1.start.x + (t * s1.x), y: line1.start.y + (t * s1.y)};
		return true;
	}
	
	return false;
}

function RotatePoint(point, radians)
{
	let rotatedpoint = { x: point.x , y: point.y };
	rotatedpoint.x = Math.cos(radians)*point.x - Math.sin(radians)*point.y;
	rotatedpoint.y = Math.sin(radians)*point.x + Math.cos(radians)*point.y;
	
	return rotatedpoint;
}

function RotateLine(line, radians)
{
	let rotatedline = { start: { x: line.start.x , y: line.start.y}, end: { x: line.end.x , y: line.end.y } };
	rotatedline.start.x = Math.cos(radians)*line.start.x - Math.sin(radians)*line.start.y;
	rotatedline.start.y = Math.sin(radians)*line.start.x + Math.cos(radians)*line.start.y;
	rotatedline.end.x = Math.cos(radians)*line.end.x - Math.sin(radians)*line.end.y;
	rotatedline.end.y = Math.sin(radians)*line.end.x + Math.cos(radians)*line.end.y;
	
	return rotatedline;
}

function AddVectors(a, b)
{
	let c = { x: a.x + b.x, y: a.y + b.y };
	return c;
}

function SubtractVectors(a, b)
{
	let c = { x: a.x - b.x, y: a.y - b.y };
	
	return c;
}

function MultiplyVector(a, b)
{
	let c = { x: a.x * b, y: a.y * b };
	
	return c;
}

function GenerateVoronoiCity(margin, w, h)
{
	if (h <= 0 || w <= 0)
		return false;
	
	let city = {
		voronoi: new Voronoi(),
		sites: [],
		diagram: null,
		margin: margin,
		bbox: { xl: 0, xr: w, yt: 0, yb: h },
		
		init: function()
		{
			this.randomSites(128);
		},
		
		addSite: function(site)
		{
			this.sites.push(site);
			
			this.diagram = this.voronoi.compute(this.sites, this.bbox);
		},
		
		circleOfSites: function(r, n, c)
		{
			let sites = [];
			for (let i = 0; i < Math.PI*2; i += Math.PI*2/n)
			{
				let x = Math.sin(i)*r + c.x;
				let y = Math.cos(i)*r + c.y;
				
				this.sites.push({x: x, y: y});
			}
			
			this.compute(this.sites);
		},
		
		circleOfRandomSites: function(r, n, c, v)
		{
			let xo = Math.max(this.margin, c.x - v);
			let xp = Math.min(this.bbox.xr - this.margin, c.x + v)
			let dx = Math.min(v*2, xp - xo);
			let yo = Math.max(this.margin, c.y - v);
			let yp = Math.min(this.bbox.yb - this.margin, c.y + v)
			let dy = Math.min(v*2, yp - yo);
			let sites = [];
			for (let i = 0; i < Math.PI*2; i += Math.PI*2/n)
			{
				let random_x = Math.round(xo+Math.random()*dx)
				let random_y = Math.round(yo+Math.random()*dy)
				
				let random_site = { x: 0, y: 0 };
				random_site.x += Math.sin(i)*r + random_x;
				random_site.y += Math.cos(i)*r + random_y;
				
				this.sites.push({x: random_site.x, y: random_site.y});
			}
			
			this.compute(this.sites);
		},
		
		randomSites: function(n)
		{
			let xo = this.margin;
			let dx = w - this.margin*2;
			let yo = this.margin;
			let dy = h - this.margin*2;
			for (let i = 0; i < n; i++)
			{
				this.sites.push({ x: Math.round(xo+Math.random()*dx), y: Math.round(yo+Math.random()*dy) });
			}
			this.diagram = this.voronoi.compute(this.sites, this.bbox);
		},
		
		relax: function(n)
		{
			for (let i = 0; i < n; i++)
			{
				this.relaxSites();
			}
		},
		
		relaxSites: function()
		{
			if (!this.diagram) {return;}
			var cells = this.diagram.cells,
				iCell = cells.length,
				cell,
				site, sites = [],
				again = false,
				rn, dist;
			var p = 1 / iCell * 0.1;
			while (iCell--) 
			{
				cell = cells[iCell];
				rn = Math.random();
				// probability of apoptosis
				if (rn < p) {
					continue;
					}
				site = this.cellCentroid(cell);
				dist = this.distance(site, cell.site);
				if (dist > 2) {
					site.x = (site.x+cell.site.x)/2;
					site.y = (site.y+cell.site.y)/2;
					}
				// probability of mytosis
				if (rn > (1-p)) {
					dist /= 2;
					sites.push({
						x: site.x+(site.x-cell.site.x)/dist,
						y: site.y+(site.y-cell.site.y)/dist,
						});
					}
				sites.push(site);
			}
			this.compute(sites);
		},
		
		cellArea: function(cell)
		{
			var area = 0,
				halfedges = cell.halfedges,
				iHalfedge = halfedges.length,
				halfedge,
				p1, p2;
			while (iHalfedge--) {
				halfedge = halfedges[iHalfedge];
				p1 = halfedge.getStartpoint();
				p2 = halfedge.getEndpoint();
				area += p1.x * p2.y;
				area -= p1.y * p2.x;
				}
			area /= 2;
			return area;
		},
		
		cellCentroid: function(cell)
		{
			var x = 0, y = 0,
				halfedges = cell.halfedges,
				iHalfedge = halfedges.length,
				halfedge,
				v, p1, p2;
			while (iHalfedge--)
			{
				halfedge = halfedges[iHalfedge];
				p1 = halfedge.getStartpoint();
				p2 = halfedge.getEndpoint();
				v = p1.x*p2.y - p2.x*p1.y;
				x += (p1.x+p2.x) * v;
				y += (p1.y+p2.y) * v;
			}
			
			v = this.cellArea(cell) * 6;
			return {x:x/v,y:y/v};
		},
		
		distance: function(a, b)
		{
			var dx = a.x-b.x,
				dy = a.y-b.y;
			return Math.sqrt(dx*dx+dy*dy);
		},
		
		compute: function(sites)
		{
			this.sites = sites;
			this.voronoi.recycle(this.diagram);
			this.diagram = this.voronoi.compute(sites, this.bbox);
		},
		
		setDistricts: function(chanceToConnect, min_district_area)
		{
			let centrepoint = { x: (this.bbox.xr - this.bbox.xl)/2, y: (this.bbox.yb - this.bbox.yt)/2 };
			let maxdx = (centrepoint.x * centrepoint.x);
			let maxdy = (centrepoint.y * centrepoint.y);
			let maxdistanceSQ = Math.min(maxdx, maxdy);
			let current_district = 1;
			
			this.diagram.cells.forEach(cell => {
				let cellBbox = cell.getBbox();
				let cellCentre = { x: Math.floor((cellBbox.x + (cellBbox.width/2))), y: Math.floor((cellBbox.y + (cellBbox.height/2))) };
				let distanceX = (cellCentre.x - centrepoint.x)*(cellCentre.x - centrepoint.x);
				let distanceY = (cellCentre.y - centrepoint.y)*(cellCentre.y - centrepoint.y);
				let distanceSQ = (distanceX + distanceY);
				let proportionaldistance = distanceSQ / maxdistanceSQ;
				let district_area = this.cellArea(cell);
				
				if (proportionaldistance < 0.6667)
				{
					cell.district = 0;
				}
				else if (cell.district < 0)
				{
					cell.district = current_district;
					let frontier = cell.getNeighborIds();
					while (frontier.length > 0)
					{
						let current_neighbour = this.diagram.cells[frontier[0]];
						let roll = Math.random();
						if (current_neighbour.district < 0 && roll < chanceToConnect || district_area < min_district_area)
						{
							district_area += this.cellArea(current_neighbour);
							current_neighbour.district = current_district;
							frontier.concat(current_neighbour.getNeighborIds());
						}
					}
					current_district++;
				}
			});
		}
	}
	
	return city;
}

function areaOfTriangle(p0, p1, p2)
{
	let area = Math.abs(p0.x*(p1.y-p2.y)+p1.x*(p2.y-p0.y)+p2.x*(p0.y-p1.y)/2);
	
	return area;
}

async function DrawVoronoiCity(channel, arguments)
{
	let p = 256;
	let m = 100;
	let w = 800;
	let h = 800;
	let r = 3;
	let d = 2;
	let building_scale = 1;
	let output_svg = false;
	
	if (arguments != null && arguments.length > 0)
	{
		let argumentpos = arguments.indexOf("-p");
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			p = parseInt(arguments[argumentpos+1]);
		if (p > 8192)
			p = 8192;
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			w = parseInt(arguments[argumentpos+1]);
		if (w > 6400)
			w = 6400;
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			h = parseInt(arguments[argumentpos+1]);
		argumentpos = arguments.indexOf("-m")
		if (h > 6400)
			h = 6400;
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
			m = parseFloat(arguments[argumentpos+1]);
		if (m < 0)
			m = 0;
		if (m > Math.min(w, h)/3)
			m = Math.min(w, h)/3;
		argumentpos = arguments.indexOf("-r")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			r = parseInt(arguments[argumentpos+1]);
		if (r > 10000)
			r = 10000;
		argumentpos = arguments.indexOf("-d")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			d = parseInt(arguments[argumentpos+1]);
		if (d > 16)
			d = 16;
		if (d < 1)
			d = 1;
		argumentpos = arguments.indexOf("-b")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			building_scale = parseFloat(arguments[argumentpos+1]);
		if (building_scale > 8)
			building_scale = 8;
		if (building_scale < 0.125)
			building_scale = 0.125;
		argumentpos = arguments.indexOf("-svg")
		if (argumentpos != -1)
			output_svg = true;
	}
	
	let start_time = new Date().getTime();
	
	let city = null;
	let max_distance = DistanceBetweenPoints({ x:0, y:0 }, { x:w/2, y:h/2 });
	
	while (city == null || city.sites.length == 0)
	{
		try 
		{
			let outsite_roads = 2+Math.round(Math.random()*2);
			city = GenerateVoronoiCity(m, w, h);
			let district0size = (building_scale*2) - 1;
			
			city.circleOfRandomSites(Math.min(w - m*2, h - m*2)/4*(Math.random()+Math.random()+1), Math.round(Math.random()*2)+3, { x: w/2, y: h/2 }, Math.min(w, h)*1/7);
			
			let random_center_site = { x: w/2, y: h/2 };
			random_center_site.x += Math.random()*Math.min(w, h)*2/9 - Math.min(w, h)*1/9;
			random_center_site.y += Math.random()*Math.min(w, h)*2/9 - Math.min(w, h)*1/9;
			city.addSite(random_center_site);
			let corner_site0 = { x: m, y: m };
			let corner_site1 = { x: w - m, y: m };
			let corner_site2 = { x: m, y: h - m };
			let corner_site3 = { x: w - m, y: h - m };
			corner_site0.x += Math.random()*m/4;
			corner_site0.y += Math.random()*m/4;
			corner_site1.x -= Math.random()*m/4;
			corner_site1.y += Math.random()*m/4;
			corner_site1.x += Math.random()*m/4;
			corner_site1.y -= Math.random()*m/4;
			corner_site1.x -= Math.random()*m/4;
			corner_site1.y -= Math.random()*m/4;
			
			let original_circle = [];
			
			city.sites.forEach(site =>
			{
				original_circle.push({ x: site.x, y: site.y });
			});
			
			original_circle.forEach(site =>
			{
				city.circleOfRandomSites(Math.min(w - m*2, h - m*2)/12*(Math.random()+Math.random()+1), Math.floor(((p-1-original_circle.length)/original_circle.length)/16), site, Math.min(w, h)/18);
			});
			
			city.relax(r-1);
			
			city.circleOfSites((w-m*2)+20, 8, { x: w/2, y: h/2 });
			
			original_circle = [];
			for(let i = 0; i < 4; i++)
			{
				city.diagram.cells.forEach(cell =>
				{
					if (cell.district < (d*4)+1 && city.cellArea(cell) > 400*building_scale)
						original_circle.push({ x: cell.site.x, y: cell.site.y });
				});
			}
			
			original_circle.forEach(site =>
			{
				city.circleOfRandomSites(Math.min(w - m*2, h - m*2)/15*(Math.random()+Math.random()+1), 4, site, Math.min(w, h)/37);
			});
			
			city.addSite(corner_site0);
			city.addSite(corner_site1);
			city.addSite(corner_site2);
			city.addSite(corner_site3);
			city.setDistricts(0.5, 1024);
		}
		catch (err)
		{
			console.log("failed to generate city: " + err);
			city = null;
		}
	}
	
	
	let citygen_time = new Date().getTime() - start_time;
	
	console.log("City generation took " + (citygen_time) + " milliseconds");
	
	let tempcanvas = new Canvas();
	tempcanvas.width = w;
	tempcanvas.height = h;
	
	if (tempcanvas.getContext)
	{
		let centrepoint = {x: w/2, y: h/2};
		let max_distance = Math.min(Math.sqrt((w/2)*(w/2)*2), Math.sqrt((h/2)*(h/2)*2));
		let ctx = tempcanvas.getContext('2d');
		
		// ctx.fillStyle = '#BFA87F';
		// ctx.fillRect(0, 0, w, h);
		
		let scope = new paper.PaperScope();
		scope.setup(tempcanvas);
		
		let rect = new scope.Path.Rectangle(new scope.Point(0,0), new scope.Size(w, h));
		rect.fillColor = new scope.Color('#BFA87F');
		
		let paperMap =
		{
			districtPaths: [],
			roadPaths: [],
			roadPathsInner: [],
			buildingPaths: [],
			debugPaths: []
		}
		
		city.diagram.cells.forEach(cell =>
		{
			if (cell.halfedges.length > 2)
			{
				cell.path = new scope.Path();
				cell.path.moveTo(cell.halfedges[0].getStartpoint());
				cell.halfedges.forEach(halfedge =>
				{
					cell.path.lineTo(halfedge.getEndpoint());
				});
				cell.path.closePath();
				cell.path.visible = false;
			}
		});
		
		console.log("Cell paths done");
		
		city.diagram.cells.forEach(cell =>
		{
			cell.halfedges.forEach(halfedge =>
			{
				if (halfedge.edge.rSite && city.diagram.cells[halfedge.edge.rSite.voronoiId].district != cell.district)
				{
					let path = new scope.Path();
					path.strokeColor = new scope.Color('#000000');
					path.strokeWidth = 6;
					path.strokeJoin = 'round';
					path.strokeCap = 'round';
					
					let start = halfedge.getStartpoint();
					let end = halfedge.getEndpoint();
					let startpoint = new scope.Point(start.x, start.y);
					let endpoint = new scope.Point(end.x, end.y);
					
					path.moveTo(startpoint);
					path.lineTo(endpoint);
					paperMap.roadPaths.push(path);
				}
				else if (cell.district < d*4+1)
				{
					
					let path = new scope.Path();
					path.strokeColor = new scope.Color('#000000');
					path.strokeWidth = 4;
					path.strokeJoin = 'round';
					path.strokeCap = 'round';
					
					let start = halfedge.getStartpoint();
					let end = halfedge.getEndpoint();
					let startpoint = new scope.Point(start.x, start.y);
					let endpoint = new scope.Point(end.x, end.y);
					
					path.moveTo(startpoint);
					path.lineTo(endpoint);
					paperMap.roadPaths.push(path);
				}
			});
		});
		
		city.diagram.cells.forEach(cell =>
		{
			cell.halfedges.forEach(halfedge =>
			{
				if (halfedge.edge.rSite && city.diagram.cells[halfedge.edge.rSite.voronoiId].district != cell.district)
				{
					let path = new scope.Path();
					path.strokeColor = new scope.Color('#C4B9B7');
					path.strokeWidth = 5;
					path.strokeJoin = 'round';
					path.strokeCap = 'round';
					
					let start = halfedge.getStartpoint();
					let end = halfedge.getEndpoint();
					let startpoint = new scope.Point(start.x, start.y);
					let endpoint = new scope.Point(end.x, end.y);
					
					path.moveTo(startpoint);
					path.lineTo(endpoint);
					paperMap.roadPaths.push(path);
				}
				else if (cell.district < d*4+1)
				{
					
					let path = new scope.Path();
					path.strokeColor = new scope.Color('#C4B9B7');
					path.strokeWidth = 3;
					path.strokeJoin = 'round';
					path.strokeCap = 'round';
					
					let start = halfedge.getStartpoint();
					let end = halfedge.getEndpoint();
					let startpoint = new scope.Point(start.x, start.y);
					let endpoint = new scope.Point(end.x, end.y);
					
					path.moveTo(startpoint);
					path.lineTo(endpoint);
					paperMap.roadPaths.push(path);
				}
			});
		});
		
		console.log("Roads done");
		// buildings
		
		city.diagram.cells.forEach(cell =>
		{
			if (cell.path)
			{
				cell.buildings = new scope.Path();
				cell.buildings.closePath();
				let buildings = new scope.Path();
				buildings.closePath();
				buildings.visible = false;
				
				let cArea = Math.abs(city.cellArea(cell));
				
				if (cell.district < d*4+1 && cArea > 600*building_scale)
				{
					for (let i = 0; i < cell.path.segments.length; i++)
					{
						let building_path = new scope.Path();
						building_path.visible = false;
						let startpoint = { x: cell.path.segments[i].point.x, y: cell.path.segments[i].point.y };
						let endpoint = { x: cell.path.segments[(i+1)%cell.path.segments.length].point.x, y: cell.path.segments[(i+1)%cell.path.segments.length].point.y };
						let distance = Math.max(DistanceBetweenPoints(endpoint, centrepoint),DistanceBetweenPoints(startpoint, centrepoint));
						
						let pushFromRoad = 2;
						
						let pathDir = SubtractVectors(endpoint, startpoint);
						pathDir = NormalizeVector(pathDir);
						let awayDir = { x: pathDir.y, y: -pathDir.x };
						let length = DistanceBetweenPoints(startpoint, endpoint);
						let remaining_length = length;
						
						if (remaining_length > (5*building_scale))
						{
							let between_distance = (1+Math.random()*4)*building_scale;
							let point0 = new scope.Point(startpoint.x + awayDir.x*pushFromRoad, startpoint.y + awayDir.y*pushFromRoad);
							let point1 = point0.clone();
							let random_height = (Math.random()*(4*building_scale))+(4*building_scale);
							point1 = point1.add(new scope.Point(awayDir.x*(random_height), awayDir.y*(random_height)));
							let previous_height = random_height;
							building_path.moveTo(point0);
							building_path.lineTo(point1);
							while (remaining_length > 0)
							{
								let random_length = (Math.random()*(5*building_scale))+(5*building_scale);
								random_height = (Math.random()*(4*building_scale))+(4*building_scale);
								
								if (random_length > remaining_length)
									random_length = remaining_length;
								
								remaining_length -= random_length;
								if (remaining_length <= 0)
								{
									point0 = point1.clone();
									point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
									point1 = point0.clone();
									point1 = point1.add(new scope.Point(awayDir.x*(-previous_height), awayDir.y*(-previous_height)));
									//point1 = point1.add(new scope.Point(awayDir.x*(previous_height), awayDir.y*(previous_height)));
									
									building_path.lineTo(point0);
									building_path.lineTo(point1);
								}
								else
								{
									point0 = point1.clone();
									point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
									point1 = point0.clone();
									point1 = point1.add(new scope.Point(awayDir.x*(random_height-previous_height), awayDir.y*(random_height-previous_height)));
									//point1 = point1.add(new scope.Point(awayDir.x*(previous_height-random_height), awayDir.y*(previous_height-random_height)));
									
									building_path.lineTo(point0);
									building_path.lineTo(point1);
									
									previous_height = random_height;
								}
							}
							building_path.closePath();
							
							buildings = buildings.unite(building_path);
						}
						//other side of road
						remaining_length = length;
						
						if (remaining_length > (5*building_scale))
						{
							let between_distance = (1+Math.random()*4)*building_scale;
							let point0 = new scope.Point(startpoint.x - awayDir.x*pushFromRoad, startpoint.y - awayDir.y*pushFromRoad);
							let point1 = point0.clone();
							let random_height = (Math.random()*(4*building_scale))+(4*building_scale);
							point1 = point1.add(new scope.Point(awayDir.x*(-random_height), awayDir.y*(-random_height)));
							let previous_height = random_height;
							building_path.moveTo(point0);
							building_path.lineTo(point1);
							while (remaining_length > 0)
							{
								let random_length = (Math.random()*(5*building_scale))+(5*building_scale);
								random_height = (Math.random()*(4*building_scale))+(4*building_scale);
								
								if (random_length > remaining_length)
									random_length = remaining_length;
								
								remaining_length -= random_length;
								if (remaining_length <= 0)
								{
									point0 = point1.clone();
									point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
									point1 = point0.clone();
									point1 = point1.add(new scope.Point(awayDir.x*(previous_height), awayDir.y*(previous_height)));
									
									building_path.lineTo(point0);
									building_path.lineTo(point1);
								}
								else
								{
									point0 = point1.clone();
									point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
									point1 = point0.clone();
									point1 = point1.add(new scope.Point(awayDir.x*(previous_height-random_height), awayDir.y*(previous_height-random_height)));
									
									building_path.lineTo(point0);
									building_path.lineTo(point1);
									
									previous_height = random_height;
								}
							}
							building_path.closePath();
							
							buildings = buildings.unite(building_path);
						}
					}
				}
				
				// outer districts
				if (cell.district >= d*4+1)
				{
					cell.halfedges.forEach(halfedge =>
					{
						if ((halfedge.edge.rSite != null && city.diagram.cells[halfedge.edge.rSite.voronoiId].district != cell.district) || city.diagram.cells[halfedge.edge.lSite.voronoiId].district != cell.district)
						{
							let building_path = new scope.Path();
							building_path.visible = false;
							let startpoint = halfedge.getStartpoint();
							let endpoint = halfedge.getEndpoint();
							let distance = Math.min(DistanceBetweenPoints(endpoint, centrepoint),DistanceBetweenPoints(startpoint, centrepoint));
							
							let pushFromRoad = 2;
							
							let pathDir = SubtractVectors(endpoint, startpoint);
							pathDir = NormalizeVector(pathDir);
							let awayDir = { x: pathDir.y, y: -pathDir.x };
							let length = DistanceBetweenPoints(startpoint, endpoint);
							let remaining_length = length;
							
							if (remaining_length > (5*building_scale) && distance/max_distance)
							{
								let between_distance = (1+Math.random()*6)*building_scale;
								let point0 = new scope.Point(startpoint.x + awayDir.x*pushFromRoad, startpoint.y + awayDir.y*pushFromRoad);
								let point1 = point0.clone();
								let random_height = (Math.random()*(4*building_scale))+(4*building_scale);
								point1 = point1.add(new scope.Point(awayDir.x*(random_height), awayDir.y*(random_height)));
								let previous_height = random_height;
								building_path.moveTo(point0);
								building_path.lineTo(point1);
								while (remaining_length > 0)
								{
									let random_length = (Math.random()*(5*building_scale))+(5*building_scale);
									random_height = (Math.random()*(4*building_scale))+(4*building_scale);
									
									if (random_length > remaining_length)
										random_length = remaining_length;
									
									remaining_length -= random_length;
									if (remaining_length <= 0)
									{
										point0 = point1.clone();
										point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
										point1 = point0.clone();
										point1 = point1.add(new scope.Point(awayDir.x*(-previous_height), awayDir.y*(-previous_height)));
										//point1 = point1.add(new scope.Point(awayDir.x*(previous_height), awayDir.y*(previous_height)));
										
										building_path.lineTo(point0);
										building_path.lineTo(point1);
									}
									else
									{
										point0 = point1.clone();
										point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
										point1 = point0.clone();
										point1 = point1.add(new scope.Point(awayDir.x*(-previous_height), awayDir.y*(-previous_height)));
										
										building_path.lineTo(point0);
										building_path.lineTo(point1);
										
										random_height = (Math.random()*(4*building_scale))+(4*building_scale);
										previous_height = random_height;
										
										remaining_length -= between_distance;
										if (remaining_length <= 0)
										{
											break;
										}
										
										building_path.closePath();
										between_distance = (1+Math.random()*6)*building_scale;
										
										buildings = buildings.unite(building_path);
										building_path = new scope.Path();
										point0 = point1.clone();
										point0 = point0.add(new scope.Point(pathDir.x*between_distance, pathDir.y*between_distance));
										point1 = point0.clone();
										point1 = point1.add(new scope.Point(awayDir.x*(random_height), awayDir.y*(random_height)));
												
										building_path.moveTo(point0);
										building_path.lineTo(point1);
									}
								}
								building_path.closePath();
								
								buildings = buildings.unite(building_path);
							}
							//other side of road
							remaining_length = length;
							
							if (remaining_length > (5*building_scale) && distance/max_distance)
							{
								let between_distance = (1+Math.random()*6)*building_scale;
								let point0 = new scope.Point(startpoint.x - awayDir.x*pushFromRoad, startpoint.y - awayDir.y*pushFromRoad);
								let point1 = point0.clone();
								let random_height = (Math.random()*(4*building_scale))+(4*building_scale);
								point1 = point1.add(new scope.Point(awayDir.x*(-random_height), awayDir.y*(-random_height)));
								let previous_height = random_height;
								building_path.moveTo(point0);
								building_path.lineTo(point1);
								while (remaining_length > 0)
								{
									let random_length = (Math.random()*(5*building_scale))+(5*building_scale);
									random_height = (Math.random()*(4*building_scale))+(4*building_scale);
									
									if (random_length > remaining_length)
										random_length = remaining_length;
									
									remaining_length -= random_length;
									if (remaining_length <= 0)
									{
										point0 = point1.clone();
										point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
										point1 = point0.clone();
										point1 = point1.add(new scope.Point(awayDir.x*(previous_height), awayDir.y*(previous_height)));
										
										building_path.lineTo(point0);
										building_path.lineTo(point1);
									}
									else
									{
										point0 = point1.clone();
										point0 = point0.add(new scope.Point(pathDir.x*random_length, pathDir.y*random_length));
										point1 = point0.clone();
										point1 = point1.add(new scope.Point(awayDir.x*(previous_height), awayDir.y*(previous_height)));
										
										building_path.lineTo(point0);
										building_path.lineTo(point1);
										
										random_height = (Math.random()*(4*building_scale))+(4*building_scale);
										previous_height = random_height;
										
										remaining_length -= between_distance;
										if (remaining_length <= 0)
										{
											break;
										}
										
										building_path.closePath();
										between_distance = (1+Math.random()*6)*building_scale;
										
										buildings = buildings.unite(building_path);
										building_path = new scope.Path();
										point0 = point1.clone();
										point0 = point0.add(new scope.Point(pathDir.x*between_distance, pathDir.y*between_distance));
										point1 = point0.clone();
										point1 = point1.add(new scope.Point(awayDir.x*(-random_height), awayDir.y*(-random_height)));
												
										building_path.moveTo(point0);
										building_path.lineTo(point1);
									}
								}
								building_path.closePath();
								
								buildings = buildings.unite(building_path);
							}
						}
					});
				}
				
				let contractedCell = PaperOffset.offsetStroke(cell.path, 4, { join: 'round' });
				cell.buildings = buildings.clone();
				cell.buildings = buildings.intersect(cell.path);
				cell.buildings = cell.buildings.subtract(contractedCell);
				cell.buildings.visible = true;
				cell.buildings.fillColor = new scope.Color('#70584B');
				cell.buildings.strokeColor = new scope.Color('#000000');
				cell.buildings.strokeWidth = 1;
				cell.buildings.bringToFront();
			}
		});
		
		console.log("Buildings done");
		//debug paths
		/*
		city.diagram.cells.forEach(cell =>
		{
			let cellcenter = cell.site;
			let debugPoint = new scope.Point(cellcenter.x, cellcenter.y);
			let debugPath = new scope.Path.Circle(debugPoint, 3);
			debugPath.fillColor = new scope.Color('#FFFFFF');
		});
		*/
		
		scope.view.draw();
		
		//output file
		let file = 'voronoicity.png';
		let filepath = './' + file;
		
		let b64 = scope.view.element.toDataURL('image/png', 0.92);
		
		fs.writeFile(filepath,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			let draw_time = new Date().getTime() - start_time - citygen_time;
			console.log('The voronoicity has been saved! Took ' + draw_time + ' milliseconds to draw');
			channel.send({ files: [{ attachment: filepath, name: file }] });
		});
	}
}


function spreadTemperature(world, pos, w, h, target, distance)
{
	let donePos = [];
	donePos.push(pos);
	let posToDo = [];
	let index = pos.x + (pos.y * w);
	world[index].biome += target;
	world[index].biome = Math.max(Math.min(world[index].biome, 4), 0);
	
	posToDo.push({ x: pos.x, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x, y: pos.y - 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y - 1, distance: distance });
	
	while (posToDo.length > 0)
	{
		donePos.push(posToDo[0]);
		if (posToDo[0].x > -1 && posToDo[0].y > -1 && posToDo[0].x < w && posToDo[0].y < h )
		{
			index = posToDo[0].x + (posToDo[0].y * w);
			subDistance = Math.max(posToDo[0].distance - 1.414);
			world[index].biome += target * Math.round(subDistance) / distance;
			world[index].biome = Math.max(Math.min(world[index].biome, 4), 0);
			if ((posToDo[0].y + 1) % 2 == 1)
			{
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
			else
			{
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
		}
		posToDo.splice(0, 1);
	}
	
	return world;
}

function spreadBiome(world, pos, w, h, target, distance)
{
	let donePos = [];
	donePos.push(pos);
	let posToDo = [];
	let index = pos.x + (pos.y * w);
	let change = target - world[index].biome;
	world[index].biome += change;
	world[index].biome = Math.max(Math.min(world[index].biome, 4), 0);
	
	posToDo.push({ x: pos.x, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x, y: pos.y - 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y - 1, distance: distance });
	
	while (posToDo.length > 0)
	{
		donePos.push(posToDo[0]);
		if (posToDo[0].x > -1 && posToDo[0].y > -1 && posToDo[0].x < w && posToDo[0].y < h )
		{
			index = posToDo[0].x + (posToDo[0].y * w);
			subDistance = Math.max(posToDo[0].distance - 1.414);
			change = target - world[index].biome;
			world[index].biome += change * Math.round(subDistance) / distance;
			world[index].biome = Math.max(Math.min(world[index].biome, 4), 0);
			if ((posToDo[0].y + 1) % 2 == 1)
			{
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
			else
			{
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
		}
		posToDo.splice(0, 1);
	}
	
	return world;
}

function spreadElevationLevel(world, pos, w, h, change, distance)
{
	let donePos = [];
	donePos.push(pos);
	let posToDo = [];
	let index = pos.x + (pos.y * w);
	world[index].waterlevel += change;
	
	posToDo.push({ x: pos.x, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x, y: pos.y - 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y - 1, distance: distance });
	
	while (posToDo.length > 0)
	{
		donePos.push(posToDo[0]);
		if (posToDo[0].x > -1 && posToDo[0].y > -1 && posToDo[0].x < w && posToDo[0].y < h )
		{
			index = posToDo[0].x + (posToDo[0].y * w);
			subDistance = Math.max(posToDo[0].distance - 1.414);
			world[index].waterlevel += change * Math.round(subDistance) / distance;
			if ((posToDo[0].y + 1) % 2 == 1)
			{
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
			else
			{
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
		}
		posToDo.splice(0, 1);
	}
	
	return world;
}

function spreadWaterLevel(world, pos, w, h, target, distance)
{
	let donePos = [];
	donePos.push(pos);
	let posToDo = [];
	let index = pos.x + (pos.y * w);
	let change = target - world[index].waterlevel;
	world[index].waterlevel += change;
	
	posToDo.push({ x: pos.x, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x, y: pos.y - 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y - 1, distance: distance });
	
	while (posToDo.length > 0)
	{
		donePos.push(posToDo[0]);
		if (posToDo[0].x > -1 && posToDo[0].y > -1 && posToDo[0].x < w && posToDo[0].y < h )
		{
			index = posToDo[0].x + (posToDo[0].y * w);
			subDistance = Math.max(posToDo[0].distance - 1.414);
			hange = target - world[index].waterlevel;
			world[index].waterlevel += change * Math.round(subDistance) / distance;
			if ((posToDo[0].y + 1) % 2 == 1)
			{
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
			else
			{
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
		}
		posToDo.splice(0, 1);
	}
	
	return world;
}

function spreadForest(world, pos, w, h, chance, distance)
{
	let donePos = [];
	donePos.push(pos);
	let posToDo = [];
	let index = pos.x + (pos.y * w);
	if (Math.random() < chance)
		world[index].forest = true;
	
	posToDo.push({ x: pos.x, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y + 1, distance: distance });
	posToDo.push({ x: pos.x, y: pos.y - 1, distance: distance });
	posToDo.push({ x: pos.x + 1, y: pos.y - 1, distance: distance });
	
	while (posToDo.length > 0)
	{
		donePos.push(posToDo[0]);
		if (posToDo[0].x > -1 && posToDo[0].y > -1 && posToDo[0].x < w && posToDo[0].y < h )
		{
			index = posToDo[0].x + (posToDo[0].y * w);
			subDistance = Math.max(posToDo[0].distance - 1.414, 0);
			if (Math.random() < (chance * subDistance / distance))
				world[index].forest = true;
			if ((posToDo[0].y + 1) % 2 == 1)
			{
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x + 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
			else
			{
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y + 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x - 1, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
				nextPos = { x: posToDo[0].x, y: posToDo[0].y - 1, distance: subDistance };
				if (subDistance > 1 && !ContainsIdenticalXY(donePos, nextPos) && !ContainsIdenticalXY(posToDo, nextPos))
				{
					posToDo.push(nextPos);
				}
			}
		}
		posToDo.splice(0, 1);
	}
	
	return world;
}

function getShoreTypeCode(world, pos, w, h)
{
	let code = 0;
	if ((pos.y + 1) % 2 == 1)
	{
		let index = pos.x + 1 + ((pos.y + 1) * w)
		if (pos.x+1 < w && pos.y+1 < h && world[index].waterlevel > 0)
			code += 1;
		index = pos.x + 1 + ((pos.y - 1) * w)
		if (pos.x+1 < w && pos.y-1 > -1 && world[index].waterlevel > 0)
			code += 2;
		index = pos.x + ((pos.y - 1) * w)
		if (pos.y-1 > -1 && world[index].waterlevel > 0)
			code += 4;
		index = pos.x + ((pos.y + 1) * w)
		if (pos.y+1 < h && world[index].waterlevel > 0)
			code += 8;
		index = pos.x + ((pos.y + 2) * w)
		if (pos.y+2 < h && world[index].waterlevel > 0)
			code += 16;
		index = pos.x + ((pos.y - 2) * w)
		if (pos.y-2 > -1 && world[index].waterlevel > 0)
			code += 32;
	}
	else
	{
		let index = pos.x+ ((pos.y + 1) * w)
		if (pos.y+1 < h && world[index].waterlevel > 0)
			code += 1;
		index = pos.x+ ((pos.y - 1) * w)
		if (pos.y-1 > -1 && world[index].waterlevel > 0)
			code += 2;
		index = pos.x - 1 + ((pos.y - 1) * w)
		if (pos.x-1 > -1 && pos.y-1 > -1 && world[index].waterlevel > 0)
			code += 4;
		index = pos.x - 1 + ((pos.y + 1) * w)
		if (pos.x-1 > -1 && pos.y+1 < h && world[index].waterlevel > 0)
			code += 8;
		index = pos.x + ((pos.y + 2) * w)
		if (pos.y+2 < h && world[index].waterlevel > 0)
			code += 16;
		index = pos.x + ((pos.y - 2) * w)
		if (pos.y-2 > -1 && world[index].waterlevel > 0)
			code += 32;
	}
	
	return code;
}

function generateIsometricWorldMap(channel, arguments)
{
	let width = 71;
	let height = 141;
	let margin = Math.floor(Math.min(width, height)/5);
	let xmargin = Math.floor(margin / 3);
	let temperature = 0;
	let temperature_variation = 0.5
	let elevation_variation = 1
	
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-t")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			temperature = parseFloat(arguments[argumentpos+1]);
			if (temperature > 20)
				temperature = 20;
			if (temperature < -20)
				temperature = -20;
		}
		argumentpos = arguments.indexOf("-tv")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			temperature_variation = parseFloat(arguments[argumentpos+1]);
			if (temperature_variation > 2)
				temperature_variation = 2;
			if (temperature_variation < -2)
				temperature_variation = -2;
		}
		argumentpos = arguments.indexOf("-ev")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			elevation_variation = parseFloat(arguments[argumentpos+1]);
			if (elevation_variation > 2)
				elevation_variation = 2;
			if (elevation_variation < -2)
				elevation_variation = -2;
		}
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			width = parseInt(arguments[argumentpos+1]);
			if (width > 161)
				width = 161;
			if (width < 31)
				width = 31;
		}
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			height = parseInt(arguments[argumentpos+1]);
			if (height > 291)
				height = 291;
			if (height < 81)
				height = 81;
		}
		margin = Math.floor(Math.min(width, height)/5);
		argumentpos = arguments.indexOf("-m")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			margin = parseInt(arguments[argumentpos+1]);
			
			if (margin > Math.floor(Math.min(width, height)/3));
				margin = Math.floor(Math.min(width, height)/3);
			if (margin < 0)
				margin = 0;
		}
		
		xmargin = Math.floor(margin / 3);
	}
	
	
	let start = new Date().getTime();
	
	let world = [];
	
	noisemap = noiseMap2D(height, width, 0.66, edgevalue = 0.5)
	
	for (let y = 0; y < height; y++)
	{
		let equator = height/2;
		let distance = Math.abs(equator - y + margin);
		if (y > equator)
			distance = Math.abs(equator - y - margin);
		let tile_temperature = (3.667 + temperature) - (distance / equator) * (3.667 + temperature)
		for (let x = 0; x < width; x++)
		{
			let temperature_noise = (noisemap[x + y * width] - 0.5) / 3;
			world.push({ waterlevel: -1, biome: tile_temperature + temperature_noise, forest: false});
		}
	}
	
	let xo = xmargin;
	let dx = width - (xmargin * 2) - 1;
	let yo = margin;
	let dy = height - (margin * 2) - 1;
	let average_water_level = -1;
	let avg_water_count = 0;
	let continent_mass =  Math.round(Math.min(width, height)*5.1 + Math.random()*Math.min(width, height)*1.65);
	while (average_water_level < -0.275)
	{
		let randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) };
		let randomDistance = 4 + Math.round(Math.random()*((width+height)/18));
		
		let index = randomPos.x + randomPos.y * width;
		spreadWaterLevel(world, randomPos, width, height, 1, randomDistance);
		average_water_level = 0;
		avg_water_count = 0;
		for (let y = margin; y < height - margin*2; y++)
		{
			for (let x = xmargin; x < width - xmargin*2; x++)
			{
				let index = x + y * width;
				average_water_level += world[index].waterlevel;
				avg_water_count++;
			}
		}
		
		average_water_level /= avg_water_count;
	}
	console.log("continent masses");
	
	let mountainPeaks = Math.round(Math.min(width, height)*2.97 + Math.random()*Math.min(width, height)*0.89);
	for (let i = 0; i < mountainPeaks; i++)
	{
		let randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) };
		let randomDistance = 2 + Math.round(Math.random()*((width+height)/192));
		
		let index = randomPos.x + randomPos.y * width;
		while (world[index].waterlevel < 0)
		{
			randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) }
			index = randomPos.x + randomPos.y * width;
		}
		spreadWaterLevel(world, randomPos, width, height, 1.5, randomDistance);
		spreadTemperature(world, randomPos, width, height, -0.5, randomDistance-1);
		spreadWaterLevel(world, randomPos, width, height, 2.5, 1);
	}
	console.log("mountain peaks");
	
	for (let i = 0; i < continent_mass; i++)
	{
		let randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) };
		let randomDistance = 4 + Math.round(Math.random()*((width+height)/48));
		
		let index = randomPos.x + randomPos.y * width;
		while (world[index].waterlevel < 0)
		{
			randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) }
			index = randomPos.x + randomPos.y * width;
		}
		spreadElevationLevel(world, randomPos, width, height, 0.095, randomDistance);
	}
	console.log("elevation raises");
	
	xo = xmargin;
	dx = width - (xmargin * 2) - 1;
	yo = height*3/8;
	dy = height/4 - 1;
	biomeShifts = Math.round(Math.min(width, height)*2.85)
	for (let i = 0; i < biomeShifts; i++)
	{
		//get hotter closer to equator
		let randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) }
		let index = randomPos.x + randomPos.y * width;
		while (world[index].waterlevel < 0)
		{
			randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) }
			index = randomPos.x + randomPos.y * width;
		}
		let randomDistance = 5 + Math.round(Math.random()*((width+height)/54));
		spreadTemperature(world, randomPos, width, height, Math.random()*temperature_variation*0.7, randomDistance);
	}
	console.log("hot temps");
	dy = height/10 - 1;
	for (let i = 0; i < biomeShifts*2/3; i++)
	{
		//get colder close to edges
		let randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(margin + Math.random() * dy) }
		let index = randomPos.x + randomPos.y * width;
		while (world[index].waterlevel < 0)
		{
			randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(margin + Math.random() * dy) }
			index = randomPos.x + randomPos.y * width;
		}
		let randomDistance = 5 + Math.round(Math.random()*((width+height)/63));
		spreadTemperature(world, randomPos, width, height, Math.random()*temperature_variation*-0.7, randomDistance);
		
		randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(height - margin - Math.random() * dy) }
		index = randomPos.x + randomPos.y * width;
		while (world[index].waterlevel < 0)
		{
			randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(height - margin - Math.random() * dy) }
			index = randomPos.x + randomPos.y * width;
		}
		randomDistance = 5 + Math.round(Math.random()*((width+height)/63));
		spreadTemperature(world, randomPos, width, height, Math.random()*temperature_variation*-0.7, randomDistance);
	}
	
	console.log("cold temps");
	
	xo = xmargin;
	dx = width - (xmargin * 2) - 1;
	yo = margin;
	dy = height - (margin * 2) - 1;
	let forestAdditions = 7 + Math.random()*Math.round(Math.min(width, height)*0.68);
	for (let i = 0; i < forestAdditions; i++)
	{
		let randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) }
		let index = randomPos.x + randomPos.y * width;
		let forest_attempts = 0;
		while ((world[index].waterlevel < 0 || world[index].waterlevel >= 2 || world[index].biome > 3.5) && forest_attempts < 128)
		{
			randomPos = { x: Math.floor(xo + Math.random() * dx), y: Math.floor(yo + Math.random() * dy) }
			index = randomPos.x + randomPos.y * width;
			forest_attempts++;
		}
		if (forest_attempts < 128)
		{
			let randomDistance = 4 + Math.round(Math.random()*((width+height)/75));
			spreadForest(world, randomPos, width, height, 0.995, randomDistance);
		}
	}
	console.log("forests");
	
	/*
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			let index = x + y * width;
			if (world[index].waterlevel > -0.5 && world[index].waterlevel < 0)
			{
				let randomDistance = 1 + Math.floor(Math.random()*4);
				spreadBiome(world, { x: x, y: y }, width, height, 2, randomDistance);
			}
		}
	}
	console.log("shore temperature normalization");
	*/
	
	let renderMap = [];
	for (let y = 0; y < height; y++)
	{
		for (let x  = 0; x < width; x++)
		{
			let xpos = (16 * x+(((y + 1) % 2) * 8));
			let ypos = (4 * y);
			
			let index = x+(y*width);
			
			if (world[index].waterlevel < -0.667)
			{
				let shore = getShoreTypeCode(world, {x: x, y: y}, width, height);
				if (shore == 32)
					renderMap.push({ src: './isometric_map_tiles/sea_shore_corner_B.png', x: xpos, y: ypos});
				else if (shore == 16)
					renderMap.push({ src: './isometric_map_tiles/sea_shore_corner_T.png', x: xpos, y: ypos});
				else
				{
					while (shore > 15)
					{
						shore -= 16;
					}
					if (shore == 1)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_01.png', x: xpos, y: ypos});
					else if (shore == 2)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_02.png', x: xpos, y: ypos});
					else if (shore == 3)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_03.png', x: xpos, y: ypos});
					else if (shore == 4)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_04.png', x: xpos, y: ypos});
					else if (shore == 5)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_05.png', x: xpos, y: ypos});
					else if (shore == 6)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_06.png', x: xpos, y: ypos});
					else if (shore == 7)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_07.png', x: xpos, y: ypos});
					else if (shore == 8)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_08.png', x: xpos, y: ypos});
					else if (shore == 9)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_09.png', x: xpos, y: ypos});
					else if (shore == 10)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_10.png', x: xpos, y: ypos});
					else if (shore == 11)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_11.png', x: xpos, y: ypos});
					else if (shore == 12)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_12.png', x: xpos, y: ypos});
					else if (shore == 13)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_13.png', x: xpos, y: ypos});
					else if (shore == 14)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_14.png', x: xpos, y: ypos});
					else if (shore == 15)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_15.png', x: xpos, y: ypos});
					else
						renderMap.push({ src: './isometric_map_tiles/sea_deep.png', x: xpos, y: ypos});
				}
			}
			else if (world[index].waterlevel <= 0)
			{
				let shore = getShoreTypeCode(world, {x: x, y: y}, width, height);
				if (shore == 32)
					renderMap.push({ src: './isometric_map_tiles/sea_shore_corner_B.png', x: xpos, y: ypos});
				else if (shore == 16)
					renderMap.push({ src: './isometric_map_tiles/sea_shore_corner_T.png', x: xpos, y: ypos});
				else
				{
					while (shore > 15)
					{
						shore -= 16;
					}
					if (shore == 1)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_01.png', x: xpos, y: ypos});
					else if (shore == 2)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_02.png', x: xpos, y: ypos});
					else if (shore == 3)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_03.png', x: xpos, y: ypos});
					else if (shore == 4)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_04.png', x: xpos, y: ypos});
					else if (shore == 5)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_05.png', x: xpos, y: ypos});
					else if (shore == 6)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_06.png', x: xpos, y: ypos});
					else if (shore == 7)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_07.png', x: xpos, y: ypos});
					else if (shore == 8)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_08.png', x: xpos, y: ypos});
					else if (shore == 9)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_09.png', x: xpos, y: ypos});
					else if (shore == 10)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_10.png', x: xpos, y: ypos});
					else if (shore == 11)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_11.png', x: xpos, y: ypos});
					else if (shore == 12)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_12.png', x: xpos, y: ypos});
					else if (shore == 13)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_13.png', x: xpos, y: ypos});
					else if (shore == 14)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_14.png', x: xpos, y: ypos});
					else if (shore == 15)
						renderMap.push({ src: './isometric_map_tiles/sea_shore_15.png', x: xpos, y: ypos});
					else
						renderMap.push({ src: './isometric_map_tiles/sea_shore.png', x: xpos, y: ypos});
				}
			}
			else if (world[index].waterlevel <= 1) // flat land
			{
				if (Math.round(world[index].biome) <= 0)
				{
					renderMap.push({ src: './isometric_map_tiles/snow_flat.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_snowed.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) == 1)
				{
					renderMap.push({ src: './isometric_map_tiles/tundra_flat.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_nosnow.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) == 2)
				{
					renderMap.push({ src: './isometric_map_tiles/grass_flat.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_nosnow.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) == 3)
				{
					renderMap.push({ src: './isometric_map_tiles/plains_flat.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_plains.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) >= 4)
				{
					renderMap.push({ src: './isometric_map_tiles/sand_flat.png', x: xpos, y: ypos});
				}
			}
			else if (world[index].waterlevel <= 2.2) // hills land
			{
				if (Math.round(world[index].biome) <= 0)
				{
					renderMap.push({ src: './isometric_map_tiles/snow_hill.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_snowed.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) == 1)
				{
					renderMap.push({ src: './isometric_map_tiles/tundra_hill.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_nosnow.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) == 2)
				{
					renderMap.push({ src: './isometric_map_tiles/grass_hill.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_nosnow.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) == 3)
				{
					renderMap.push({ src: './isometric_map_tiles/plains_hill.png', x: xpos, y: ypos});
					if (world[index].forest)
						renderMap.push({ src: './isometric_map_tiles/forest_plains.png', x: xpos, y: ypos});
				}
				else if (Math.round(world[index].biome) >= 4)
				{
					renderMap.push({ src: './isometric_map_tiles/sand_hill.png', x: xpos, y: ypos});
				}
			}
			else // mountains
			{
				let random_mountain = Math.random();
				if (Math.round(world[index].biome) < 2)
				{
					if (random_mountain < 0.01)
					{
						renderMap.push({ src: './isometric_map_tiles/mountain_volcano.png', x: xpos, y: ypos});
					}
					else if (random_mountain < 0.25)
					{
						renderMap.push({ src: './isometric_map_tiles/mountain_nosnow.png', x: xpos, y: ypos});
					}
					else
					{
						renderMap.push({ src: './isometric_map_tiles/mountain_snowcapped.png', x: xpos, y: ypos});
					}
				}
				else
				{
					if (random_mountain < 0.01)
					{
						renderMap.push({ src: './isometric_map_tiles/mountain_volcano.png', x: xpos, y: ypos});
					}
					else
					{
						renderMap.push({ src: './isometric_map_tiles/mountain_nosnow.png', x: xpos, y: ypos});
					}
				}
			}
		}
	}
	
	let end = new Date().getTime();
	
	let file = 'isometricmap.png';
	let path = './' + file;
	
	mergeImages(renderMap, 
	{
		width: (16 * width + 8),
		height: (4 * height + 9),
		Canvas: Canvas,
		Image: Image
	})
	.then(b64 => fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
		if (err) throw err;
		let end = new Date().getTime(); 
		console.log('The isometric map has been saved! Took ' + (end-start) + ' milliseconds');
		channel.send({ files: [{ attachment: path, name: file }] });
		}
		))
}

function GenerateTavern()
{
	let tavern_name = RandomArrayEntry(tavern_gen.tavernnames, false, "[donotnest]");
	
	let position = tavern_name.indexOf("\[");
	let endposition = -1;
	let podcastsubstr = "";
	
	while (position != -1)
	{
		endposition = tavern_name.indexOf("\]");
		podcastsubstr = tavern_name.substring(position+1,endposition);
		let primaryword = "";
		if (podcastsubstr == "verb")
		{
			primaryword = RandomArrayEntry(tavern_gen.verbs, false, "[donotnest]");
		}
		else if (podcastsubstr == "adjective")
		{
			primaryword = RandomArrayEntry(tavern_gen.adjectives, false, "[donotnest]");
		}
		else if (podcastsubstr == "object")
		{
			primaryword = RandomArrayEntry(tavern_gen.objects, false, "[donotnest]");
		}
		else if (podcastsubstr == "title")
		{
			primaryword = RandomArrayEntry(tavern_gen.titles, false, "[donotnest]");
		}
		else if (podcastsubstr == "name")
		{
			primaryword = RandomArrayEntry(tavern_gen.names, false, "[donotnest]");
		}
		tavern_name = tavern_name.substr(0,position) + grammarCapitalFirstLetter(primaryword) + tavern_name.substr(endposition+1);
		
		position = tavern_name.indexOf("\[");
	}
	
	let tavern_type = RandomArrayEntry(tavern_gen.taverntype, false, "[donotnest]");
	let tavern_drink_prices = RandomArrayEntry(tavern_gen.drinksprice, false, "[donotnest]");
	let tavern_food_prices = RandomArrayEntry(tavern_gen.foodprice, false, "[donotnest]");
	let tavern_room_prices = RandomArrayEntry(tavern_gen.roomprice, false, "[donotnest]");
	let tavern_housewine = RandomArrayEntry(tavern_gen.housewine, false, "[donotnest]");
	
	position = tavern_housewine.indexOf("\[");
	endposition = -1;
	podcastsubstr = "";
	
	while (position != -1)
	{
		endposition = tavern_housewine.indexOf("\]");
		podcastsubstr = tavern_housewine.substring(position+1,endposition);
		substrcommands = podcastsubstr.split(" ");
		let primaryword = "";
		if (substrcommands[0] == "adjective")
		{
			primaryword = RandomArrayEntry(tavern_gen.wineadjectives, false, "[donotnest]");
		}
		else if (substrcommands[0] == "race")
		{
			primaryword = RandomArrayEntry(tavern_gen.wineraces, false, "[donotnest]");
		}
		else if (substrcommands[0].includes("-"))
		{
			let delimiter_place = substrcommands[0].indexOf("-");
			let min = parseInt(substrcommands[0].substr(0,delimiter_place));
			let roll = parseInt(substrcommands[0].substr(delimiter_place+1));
			primaryword = (min + Math.floor(Math.random() * (roll + 1))).toString()
		}
		tavern_housewine = tavern_housewine.substr(0,position) + primaryword + tavern_housewine.substr(endposition+1);
		
		position = tavern_housewine.indexOf("\[");
	}
	
	let tavern_signaturedish = RandomArrayEntry(tavern_gen.signaturedishmain, false, "[donotnest]");
	
	position = tavern_signaturedish.indexOf("\[");
	endposition = -1;
	podcastsubstr = "";
	
	while (position != -1)
	{
		endposition = tavern_signaturedish.indexOf("\]");
		podcastsubstr = tavern_signaturedish.substring(position+1,endposition);
		substrcommands = podcastsubstr.split(" ");
		let primaryword = "";
		if (substrcommands[0] == "batter")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishbatter, false, "[donotnest]");
		}
		else if (substrcommands[0] == "ingredient")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishingredient, false, "[donotnest]");
		}
		else if (substrcommands[0] == "side")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishside, false, "[donotnest]");
		}
		else if (substrcommands[0] == "method")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishmethod, false, "[donotnest]");
		}
		else if (substrcommands[0] == "spice")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishspice, false, "[donotnest]");
		}
		else if (substrcommands[0] == "sweet")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishsweet, false, "[donotnest]");
		}
		else if (substrcommands[0] == "wineadjective")
		{
			primaryword = RandomArrayEntry(tavern_gen.wineadjectives, false, "[donotnest]");
		}
		else if (substrcommands[0] == "meat")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishmeat, false, "[donotnest]");
		}
		else if (substrcommands[0] == "vegetable")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishvegetable, false, "[donotnest]");
		}
		else if (substrcommands[0] == "pasta")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishpasta, false, "[donotnest]");
		}
		else if (substrcommands[0] == "fruit")
		{
			primaryword = RandomArrayEntry(tavern_gen.signaturedishfruit, true, "[fruit]");
		}
		tavern_signaturedish = tavern_signaturedish.substr(0,position) + primaryword + tavern_signaturedish.substr(endposition+1);
		
		position = tavern_signaturedish.indexOf("\[");
	}
	
	let full_string = grammarCapitalFirstLetter(tavern_name) + ", a " + tavern_type + "\nIt has " + tavern_drink_prices + ", " + tavern_food_prices + " and " + tavern_room_prices + "\nTheir main house drink is " + grammarAorAn(tavern_housewine.substring(0,1)) + " " + tavern_housewine + " and their specialty is " + tavern_signaturedish;
	
	return full_string;
}


//
//
//
// handle errors??? no

client.on('error', console.error);


//
// engage ALLIDROID

client.login(logintoken); //allidroid logon

loadCurrentGayValue();
initializeAndStartAdventureSim();
MarkovPhonemeNameTrain();
LoadBattleshipsGames();