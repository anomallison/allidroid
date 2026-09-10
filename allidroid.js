////////
//
// written by AnomAllison
//
// I hope Allidroid can bring people some humour and entertainment
//
////////

//const Discord = require('discord.js')
//const client = new Discord.Client()

const { Client, Events, GatewayIntentBits, PermissionsBitField } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences ] });


const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');

const Voronoi = require('voronoi');

const fs = require("fs");
const path = require("path");

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

//fren generator files
var fren_gen = JSON.parse(fs.readFileSync('friend_gen/fren_gen.json'));

//turtle generator files
var turtle_gen = JSON.parse(fs.readFileSync('turtle_gen/turtle_gen.json'));

//slime generator files
var slime_gen = JSON.parse(fs.readFileSync('slime_gen/slime_gen.json'));

//lil beatemup guy generator files
var lil_beatemup_guy_gen = JSON.parse(fs.readFileSync('lil_beatemup_guy/lil_beatemup_guy_gen.json'));

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

//how files
var how_levels = JSON.parse(fs.readFileSync('how_levels.json'));
var how_prefixes = JSON.parse(fs.readFileSync('how_prefixes.json'));
var how_suffixes = JSON.parse(fs.readFileSync('how_suffixes.json'));

//tarot files
var tarot_deck = JSON.parse(fs.readFileSync('tarot_deck.json'));
var tarot_readings = JSON.parse(fs.readFileSync('tarot_readings.json'));

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

// fractal map gen
var fractal_map_symbols = JSON.parse(fs.readFileSync('fractal_map_gen/fractal_map_symbols.json'));

// continent shapes gen
var continent_shapes = JSON.parse(fs.readFileSync('continent_map/continent_shapes.json'));

//
var logintoken = fs.readFileSync('token.txt').toString();


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

client.on("messageCreate", (receivedMessage) => {
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
    } 
	// else if (normalizedCommand == "generatedungeonmap") 
	// {
		// OutputTileMap(receivedMessage.channel,arguments);
    // } 
	else if (normalizedCommand == "psyduck") 
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
    } else if (normalizedCommand == "beatemup") 
	{
		generateLilBeatemupGuy(receivedMessage.channel,arguments);
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
	else if (normalizedCommand == "slut")
	{
		pronounceslut(receivedMessage);
	}
	else if (normalizedCommand == "chardmethod") 
	{
		let output = ChardAbilityScoresCustom(arguments);
		
		if (output == null)
		{
			console.log("failed command: chardmethod");
			receivedMessage.channel.send("Something went wrong, I'm sorry. !feedback to get feedback link");
			return;
		} else
		{
			receivedMessage.channel.send(output);
			return;
		}
    }
	else if (normalizedCommand == "generatelandmass") 
	{
		DrawLandmass(receivedMessage.channel,arguments);
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
// !slut
//
//

async function pronounceslut(received_message)
{
	let channel_promise = new Promise(function(resolve, reject) {
		resolve(received_message.guild.channels.fetch(received_message.channelId))
	});
	
	let channel = await channel_promise;
	
	//console.log(channel);
	
	
	let members_promise = new Promise(function(resolve, reject) {
		resolve(received_message.guild.members.fetch({withPresences: true}))
	});
	
	let members = await members_promise;
	//console.log(members)
	let member_names = []
	members.forEach(member => {
		let permission_bits = received_message.channel.permissionsFor(member);
		if (permission_bits.has(PermissionsBitField.Flags.ViewChannel))
		{
			let member_presence = member.guild.presences.resolve(member)
			if (member_presence != null && member_presence.status != 'offline')
				member_names.push(member.displayName);
		}
	});
	
	received_message.channel.send(member_names[Math.floor(Math.random()*member_names.length)]);
}

//
// some base functions
//

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
	let baserand = Math.random() - coins*0.002;

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

function ChardAbilityScoresCustom(arguments)
{
	var high_drop = 2
	var low_drop = 4
	var min_avg_mod = 0
	var max_avg_mod = 4
	if (arguments != null)
	{
		let argumentpos = arguments.indexOf("-h");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			high_drop = parseInt(arguments[argumentpos+1])
		}
		
		argumentpos = arguments.indexOf("-l");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			low_drop = parseInt(arguments[argumentpos+1])
		}
		
		argumentpos = arguments.indexOf("-min");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			min_avg_mod = parseInt(arguments[argumentpos+1])
		}
		
		argumentpos = arguments.indexOf("-max");
		if (argumentpos > -1 && argumentpos+1 <= arguments.length-1 && !isNaN(arguments[argumentpos+1]))
		{
			max_avg_mod = parseInt(arguments[argumentpos+1])
		}
	}
	
	return ChardAbilityScores(high_drop, low_drop, min_avg_mod, max_avg_mod)
}

function ChardAbilityScores(high_drop, low_drop, min_avg_mod, max_avg_mod)
{
	if (min_avg_mod > max_avg_mod)
		return "Bzz! Canont have minimum average higher than maximum average."
	
	if (high_drop < 0)
		high_drop = 0
	if (low_drop < 0)
		low_drop = 0
	
	let pool_size = 18 + high_drop + low_drop
	let dice_pool = []
	let dropped_low = []
	let dropped_high = []
	
	for (let i = 0; i < pool_size; i++)
	{
		dice_pool.push(Math.floor(Math.random() * 6) + 1)
	}
	
	for (let i = 0; i < low_drop; i++)
	{
		let lowestDie = 7;
		let lowestDieIndex = -1;
		for (j in dice_pool)
		{
			if (dice_pool[j] < lowestDie)
			{
				lowestDie = dice_pool[j];
				lowestDieIndex = j;
			}
		}
		dice_pool.splice(lowestDieIndex,1);
		dropped_low.push(lowestDie);
	}
	
	for (let i = 0; i < high_drop; i++)
	{
		let highestDie = 0;
		let highestDieIndex = -1;
		for (j in dice_pool)
		{
			if (dice_pool[j] > highestDie)
			{
				highestDie = dice_pool[j];
				highestDieIndex = j;
			}
		}
		dice_pool.splice(highestDieIndex,1);
		dropped_high.push(highestDie);
	}
	
	let duplicate_pool = dice_pool.slice()
	let ordered_pool = []
	let ability_scores = []
	let ability_mods = []
	let ability_mod_avg = 0
	
	for (let i = 0; i < 6; i++)
	{
		let score = 0
		for (let j = 0; j < 3; j++)
		{
			let dice_index = GetIndexOfHighest(duplicate_pool)
			score += duplicate_pool[dice_index]
			ordered_pool.push(duplicate_pool[dice_index])
			duplicate_pool.splice(dice_index,1);
		}
		ability_scores.push(score)
		ability_mods.push(Math.floor(score / 2) - 5)
		ability_mod_avg += Math.floor(score / 2) - 5
	}
	
	ability_mod_avg = ability_mod_avg / 6
	
	let output_string = ""
	if (ability_mod_avg < min_avg_mod || ability_mod_avg > max_avg_mod)
		output_string = ChardAbilityScores(high_drop, low_drop, min_avg_mod, max_avg_mod)
	else
	{
		for (i in dropped_high)
		{
			output_string += "~~" + dropped_high[i] + "~~ "
		}
		for (i in ordered_pool)
		{
			output_string += ordered_pool[i] + " "
		}
		for (let i = low_drop - 1; i > -1; i--)
		{
			output_string += "~~" + dropped_low[i] + "~~ "
		}
		
		output_string += "\n"
		
		for (i in ability_scores)
		{
			output_string += ability_scores[i] + " (" + ability_mods[i] + ") "
		}
	}
	return output_string
}

function GetIndexOfHighest(array)
{
	let highestDie = 0;
	let highestDieIndex = -1;
	for (j in array)
	{
		if (array[j] > highestDie)
		{
			highestDie = array[j];
			highestDieIndex = j;
		}
	}
	
	return highestDieIndex
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

function smootherstep(x)
{
	return 6*x**5 - 15*x**4 + 10*x**3;
}

function clamp(x, lower, upper)
{
	if (x < lower)
		x = lower
	if (x > upper)
		x = upper
	return x
}

function pascalTriangle(a, b)
{
	let result = 1
	for (let i = 0; i < b; ++i)
	{
		result *- (a - i) / (i + 1)
	}
	return result
}

function smoothStep(n, x)
{
	x = clamp(x, 0, 1)
	let result = 0
	for (let i = 0; i < n; ++i)
	{
		result += pascalTriangle(-n - 1, i) * pascalTriangle(2 * n + 1, n - i) * Math.pow(x, i + n + 1)
	}
	return result
}

function interpolateBetween(a0, a1, w)
{
	if (w <= 0)
		return a0;
	if (w >= 1)
		return a1;
	
	return (a1 - a0) * smootherstep(w) + a0;
}

function randomGradient()
{
	let randomv = Math.random() * 2 * Math.PI;
	return { x: Math.cos(randomv), y: Math.sin(randomv) };
}

function gradientOfTwo(x, y)
{
	let gradient = randomGradient();
	
	let v = x*gradient.x + y*gradient.y;
	return (v);
}

function objectNoiseMap2D(height, width, edgevalue)
{
	let noise_map = 
	{
		height: height,
		width: width,
		edge_value: edgevalue,
		map: [],
		
		init: function()
		{
			for (let y = 0; y < height; y++)
			{
				for (let x = 0; x < width; x++)
				{
					let v = randomGradient()
					this.map.push(v);
				}
			}
		},
		
		dotProduct: function(p, ip)
		{
			let g_index = ip.x + (ip.y * this.width)
			let g_vect = this.edge_value
			if (g_index < this.map.length)
			{
				g_vect = this.map[ip.x + (ip.y * this.width)]
			}
			
			let d_vect = { x: p.x - ip.x, y: p.y - ip.y }
			return (d_vect.x * g_vect.x) + (d_vect.y * g_vect.y)
		},
		
		sample: function(p)
		{
			let tl_p = { x: Math.floor(p.x), y: Math.floor(p.y) }
			let tr_p = { x: tl_p.x+1, y: tl_p.y }
			let bl_p = { x: tl_p.x, y: tl_p.y+1 }
			let br_p = { x: tl_p.x+1, y: tl_p.y+1 }
			let tl = this.dotProduct(p, tl_p)
			let tr = this.dotProduct(p, tr_p)
			let bl = this.dotProduct(p, bl_p)
			let br = this.dotProduct(p, br_p)
			let xt = interpolateBetween(tl, tr, p.x - tl_p.x)
			let xb = interpolateBetween(bl, br, p.x - tl_p.x)
			let xx = interpolateBetween(xt, xb, p.y - tl_p.y)
			// let xb = interpolateBetween(bl, br, tr_p.x - p.x)
			// let xx = interpolateBetween(xt, xb, bl_p.y - p.y)

			return xx
		},
		
		sharpen: function(amount)
		{
			this.map = sharpenMap(this.map, this.height, this.width, amount)
		},
		
		blur: function(amount)
		{
			this.map = blurMap(this.map, this.height, this.width, amount)
		},
		
		contrast: function(amount)
		{
			if (amount > 0)
				this.map = increaseContrast(this.map, this.height, this.width, amount)
			else if (amount < 0)
				this.map = decreaseContrast(this.map, this.height, this.width, -amount)
		},
		
		smoothen: function(amount)
		{
			this.map = smoothenMap(this.map, this.height, this.width, amount)
		},
		
		normalize:  function(min, max)
		{
			this.map = NormalizeMap(this.map, max, min)
		}
	}
	
	return noise_map
}

function objectShapeMap(min, max)
{
	let shape_map = 
	{
		height: 128,
		width: 128,
		edge_value: 0.0,
		minimum: min,
		maximum: max,
		map: [],
		
		init: function()
		{
			for (let y = 0; y < this.height; y++)
			{
				for (let x = 0; x < this.width; x++)
				{
					this.map.push(this.minimum)
				}
			}
			
			let x_dir = 1
			let y_dir = 1
			
			if (Math.random() <= 0.5)
				x_dir = -1
			
			if (Math.random() <= 0.5)
				y_dir = -1
			
			const img = new Image();
			img.src = continent_shapes.shapes[Math.floor(Math.random()*continent_shapes.shapes.length)]
			var tempcanvas = new Canvas();
			tempcanvas.width = this.width;
			tempcanvas.height = this.height;
			if (tempcanvas.getContext)
			{
				var ctx = tempcanvas.getContext('2d');
				
				ctx.drawImage(img, 0, 0)
				var imgdata = ctx.getImageData(0,0, 128, 128);
				var imgdatalen = imgdata.data.length;
				// console.log(imgdatalen/4)
				for(let i=0;i<imgdatalen/4;i++)
				{  //iterate over every pixel in the canvas
					let raw_val = imgdata.data[4*i] / 255 // red channel
					
					let x = i % this.width
					let y = Math.floor(i / this.width)
					
					let index = x + (y * this.width)
					if (x_dir < 0 && y_dir > 0)
					{
						index = (this.width - x) + (y * this.width)
					}
					else if (x_dir > 0 && y_dir < 0)
					{
						index = x + ((this.width - y) * this.width)
					}
					else if (x_dir < 0 && y_dir < 0)
					{
						index = (this.width - x) + ((this.width - y) * this.width)
					}
					
					this.map[index] = (raw_val * (this.maximum - this.minimum)) + this.minimum
				}
			}
		},
		
		sample: function(p)
		{
			let tl_p = { x: Math.floor(p.x), y: Math.floor(p.y) }
			let tr_p = { x: tl_p.x+1, y: tl_p.y }
			let bl_p = { x: tl_p.x, y: tl_p.y+1 }
			let br_p = { x: tl_p.x+1, y: tl_p.y+1 }
			
			let tl_a = (p.x - tl_p.x) * (p.y - tl_p.y)
			let tr_a = (tr_p.x - p.x) * (p.y - tl_p.y)
			let bl_a = (p.x - tl_p.x) * (bl_p.y - p.y)
			let br_a = (br_p.x - p.x) * (br_p.y - p.y)
			
			let tl = this.map[tl_p.x + (tl_p.y * this.width)]
			let tr = this.edge_value
			let bl = this.edge_value
			let br = this.edge_value
			if ((tr_p.x + (tr_p.y * this.width)) < this.map.length)
				tr = this.map[tr_p.x + (tr_p.y * this.width)]
			if ((bl_p.x + (bl_p.y * this.width)) < this.map.length)
				bl = this.map[bl_p.x + (bl_p.y * this.width)]
			if ((br_p.x + (br_p.y * this.width)) < this.map.length)
				br = this.map[br_p.x + (br_p.y * this.width)]
			
			// let raw0 = interpolateBetween(tl, tr, p.x - tl_p.x)
			// let raw1 = interpolateBetween(bl, br, p.x - tl_p.x)
			// let raw2 = interpolateBetween(raw0, raw1, p.y - bl_p.y)
			
			return tl * br_a + tr * bl_a + bl * tr_a + br * tl_a
		},
		
		sharpen: function(amount)
		{
			this.map = sharpenMap(this.map, this.height, this.width, amount)
		},
		
		blur: function(amount)
		{
			this.map = blurMap(this.map, this.height, this.width, amount)
		},
		
		contrast: function(amount)
		{
			if (amount > 0)
				this.map = increaseContrast(this.map, this.height, this.width, amount)
			else if (amount < 0)
				this.map = decreaseContrast(this.map, this.height, this.width, -amount)
		},
		
		smoothen: function(amount)
		{
			this.map = smoothenMap(this.map, this.height, this.width, amount)
		},
		
		normalize:  function(min, max)
		{
			this.map = NormalizeMap(this.map, max, min)
		}
	}
	
	shape_map.init()
	
	return shape_map
}

function objectBaseMap(h, w, min, max)
{
	let shape_map = 
	{
		height: h,
		width: h,
		edge_value: min,
		minimum: min,
		maximum: max,
		map: [],
		
		init: function(inital_val)
		{
			for (let i = 0; i < this.height * this.width; i++)
			{
				this.map.push(inital_val)
			}
		},
		
		sample: function(p)
		{
			let tl_p = { x: Math.floor(p.x), y: Math.floor(p.y) }
			let tr_p = { x: tl_p.x+1, y: tl_p.y }
			let bl_p = { x: tl_p.x, y: tl_p.y+1 }
			let br_p = { x: tl_p.x+1, y: tl_p.y+1 }
			
			let tl_a = (p.x - tl_p.x) * (p.y - tl_p.y)
			let tr_a = (tr_p.x - p.x) * (p.y - tl_p.y)
			let bl_a = (p.x - tl_p.x) * (bl_p.y - p.y)
			let br_a = (br_p.x - p.x) * (br_p.y - p.y)
			
			let tl = this.map[tl_p.x + (tl_p.y * this.width)]
			let tr = this.edge_value
			let bl = this.edge_value
			let br = this.edge_value
			if ((tr_p.x + (tr_p.y * this.width)) < this.map.length)
				tr = this.map[tr_p.x + (tr_p.y * this.width)]
			if ((bl_p.x + (bl_p.y * this.width)) < this.map.length)
				bl = this.map[bl_p.x + (bl_p.y * this.width)]
			if ((br_p.x + (br_p.y * this.width)) < this.map.length)
				br = this.map[br_p.x + (br_p.y * this.width)]
			
			// let raw0 = interpolateBetween(tl, tr, p.x - tl_p.x)
			// let raw1 = interpolateBetween(bl, br, p.x - tl_p.x)
			// let raw2 = interpolateBetween(raw0, raw1, p.y - bl_p.y)
			
			return tl * br_a + tr * bl_a + bl * tr_a + br * tl_a
		},
		
		changeValue(p, value)
		{
			let index = p.x + (p.y * this.width)
			this.map[index] = clamp(value, this.minimum, this.maximum)
		},
		
		sharpen: function(amount)
		{
			this.map = sharpenMap(this.map, this.height, this.width, amount)
		},
		
		blur: function(amount)
		{
			this.map = blurMap(this.map, this.height, this.width, amount)
		},
		
		contrast: function(amount)
		{
			if (amount > 0)
				this.map = increaseContrast(this.map, this.height, this.width, amount)
			else if (amount < 0)
				this.map = decreaseContrast(this.map, this.height, this.width, -amount)
		},
		
		smoothen: function(amount)
		{
			this.map = smoothenMap(this.map, this.height, this.width, amount)
		},
		
		normalize:  function(min, max)
		{
			this.map = NormalizeMap(this.map, max, min)
		}
	}
	
	shape_map.init()
	
	return shape_map
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
			map.push(Math.random());
		}
	}
	
	return map;
}

function NormalizeMap(map, max, min)
{
	let actual_max = max - min
	let highest = -999999999;
	let lowest = 999999999;
	for (i in map.length)
	{
		if (map[i] > highest)
			highest = map[i];
		if (map[i] < lowest)
			lowest = map[i];
	}
	
	for (i in map.length)
	{
		map[i] = (map[i] - lowest)/(highest - lowest)*actual_max + min;
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
	let HILL_LEVEL = 0.631;
	let MOUNTAIN_LEVEL = 0.838;
	let SNOW_MOUNTAIN_LEVEL = 0.871; 

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
					mapmap.push({ src: './terrain_tiles_grass_flat.png', x: xpos, y: ypos});
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
					mapmap.push({ src: './terrain_tiles_grass_hills.png', x: xpos, y: ypos});
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
					mapmap.push({ src: './terrain_tiles_grass_flat.png', x: xpos, y: ypos});
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
					mapmap.push({ src: './terrain_tiles_forest.png', x: xpos, y: ypos});
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
	let MOUNTAIN_LEVEL = 0.838;

	let FOREST_LEVEL = 0.00252;
	
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
	
	let mountain_count = Math.floor(LANDMASSES*25/19);
	
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

function generateLilBeatemupGuy(channel, arguments)
{
	let fullguy = [];
	
	fullguy.push(lil_beatemup_guy_gen.shadow)
	
	let behind_body = RandomArrayEntry(lil_beatemup_guy_gen.accessories.back, true, "[does not nesting]")
	fullguy.push(behind_body)
	
	let body = RandomArrayEntry(lil_beatemup_guy_gen.body, true, "[does not nesting]")
	fullguy.push(body)
	
	let mouth = RandomArrayEntry(lil_beatemup_guy_gen.mouth, true, "[does not nesting]")
	fullguy.push(mouth)
	
	let eyes = RandomArrayEntry(lil_beatemup_guy_gen.eyes, true, "[does not nesting]")
	fullguy.push(eyes)
	
	let hair = RandomArrayEntry(lil_beatemup_guy_gen.hair, true, "[does not nesting]")
	fullguy.push(hair)
	
	let pants = RandomArrayEntry(lil_beatemup_guy_gen.pants, true, "[does not nesting]")
	fullguy.push(pants)
	
	let feet = RandomArrayEntry(lil_beatemup_guy_gen.feet, true, "[does not nesting]")
	fullguy.push(feet)
	
	let shirt = RandomArrayEntry(lil_beatemup_guy_gen.shirt, true, "[does not nesting]")
	fullguy.push(shirt)
	
	let gloves = RandomArrayEntry(lil_beatemup_guy_gen.accessories.gloves, true, "[does not nesting]")
	fullguy.push(gloves)
	
	let right_hand = RandomArrayEntry(lil_beatemup_guy_gen.accessories.right_hand, true, "[does not nesting]")
	fullguy.push(right_hand)
	
	let left_hand = RandomArrayEntry(lil_beatemup_guy_gen.accessories.left_hand, true, "[does not nesting]")
	fullguy.push(left_hand)
	
	let pants_side = RandomArrayEntry(lil_beatemup_guy_gen.accessories.side, true, "[does not nesting]")
	fullguy.push(pants_side)
	
	
	let file = 'lil_beatemup_guy.png';
	let path = './' + file;
	
	
	mergeImages(fullguy, 
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
//
// visualize noiseMap
//
//

function noisemaptopng(channel, arguments)
{
	let start = new Date().getTime(); 
	
	let map_width = 2048;
	let map_height = 2048;
	let noise_map_resolution = 128
	let edge_value = { x: 0, y: 0 };
	let smooth = 0.0
	let contrast = 0.0
	
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			map_width = parseInt(arguments[argumentpos+1]);
		if (map_width > 2048)
			map_width = 2048;
		if (map_width < 1)
			map_width = 1;
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			map_height = parseInt(arguments[argumentpos+1]);
		if (map_height > 2048)
			map_height = 2048;
		if (map_height < 1)
			map_height = 1;
		argumentpos = arguments.indexOf("-edge")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			edge_value.x = parseFloat(arguments[argumentpos+1]);
		if (edge_value.x > 1)
			edge_value.x = 1;
		if (edge_value.x < 0)
			edge_value.x = 0;
		if (argumentpos > -1 && argumentpos+2 < arguments.length && !isNaN(arguments[argumentpos+2]) && arguments[argumentpos+2] > 0)
			edge_value.y = parseFloat(arguments[argumentpos+2]);
		if (edge_value.y > 1)
			edge_value.y = 1;
		if (edge_value.y < 0)
			edge_value.y = 0;
		// argumentpos = arguments.indexOf("-smooth")
		// if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			// smooth = parseFloat(arguments[argumentpos+1]);
		// if (smooth > 1)
			// smooth = 1;
		// if (smooth < 0)
			// smooth = 0;
		// argumentpos = arguments.indexOf("-contrast")
		// if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]) && arguments[argumentpos+1] > 0)
			// contrast = parseFloat(arguments[argumentpos+1]);
		// if (contrast > 1)
			// contrast = 1;
		// if (contrast < 0)
			// contrast = 0;
	}
	
	let noisemap = objectShapeMap(-1, 1);
	//let noisemap = objectNoiseMap2D(map_width/noise_map_resolution, map_height/noise_map_resolution, edge_value);
	noisemap.init()
	// if (smooth > 0.0)
		// noisemap.smoothen(smooth)
	// if (contrast != 0.0)
		// noisemap.contrast(contrast)
	
	// console.log(noisemap.map)
	var tempcanvas = new Canvas();
	tempcanvas.width = map_width;
	tempcanvas.height = map_height;
	if (tempcanvas.getContext)
	{
		var ctx = tempcanvas.getContext('2d');

		var imgdata = ctx.getImageData(0,0, map_width, map_height);
		var imgdatalen = imgdata.data.length;
		// console.log(imgdatalen/4)
		for(let i=0;i<imgdatalen/4;i++)
		{  //iterate over every pixel in the canvas
			let x = (i % map_width)
			let y = Math.floor(i / map_width) 
			let p = {x: x / map_width * noisemap.width, y: y / map_height * noisemap.height }
			
			let noise_sample = (noisemap.sample(p) + 1) / 2
			
			let _red = Math.round(255 * noise_sample)
			let _green = Math.round(255 * noise_sample)
			let _blue = Math.round(255 * noise_sample)
			
			imgdata.data[4*i] = _red;    // RED (0-255)
			imgdata.data[4*i+1] = _green;    // GREEN (0-255)
			imgdata.data[4*i+2] = _blue;    // BLUE (0-255)
			imgdata.data[4*i+3] = 255;  // APLHA (0-255)
		}
		ctx.putImageData(imgdata,0,0);
		
		let file = 'voronoimap.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			let end = new Date().getTime(); 
			console.log('The drawn landmass has been saved! Took ' + (end-start) + ' milliseconds');
			channel.send({ files: [{ attachment: path, name: file }] });
		})
	}
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

function NormalizeVector(vector)
{
	let length = Math.sqrt((vector.x*vector.x) + (vector.y*vector.y));
	let x = vector.x / length;
	let y = vector.y / length;
	
	return { x: x, y: y };
}

function LengthBetweenPoints(a, b)
{
		let dVector = { x: b.x - a.x, y: b.y - a.y };
		let distance = Math.sqrt((dVector.x*dVector.x) + (dVector.y*dVector.y))
		
		return distance;
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
			if (connection.x > -1 && connection.x < map_width && connection.y > -1 && connection.y < map_height && (tilemap[tilemapPos] == "open" || tilemap[tilemapPos] == "coridoor" || tilemap[tilemapPos] == "unknown"))
			{
				let connectioncost = newcost + 1;
				if (tilemap[tilemapPos] == "coridoor" || tilemap[tilemapPos] == "open")
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

function ChainRemoveDoorspaces(pos, doorspaces)
{
	for (let i = 0; i < doorspaces.length; i++)
	{
		if (doorspaces[i].y == pos.y - 1) //up
		{
			let temp_pos = doorspaces[i]
			doorspaces.splice(i);
			ChainRemoveDoorspaces(temp_pos, doorspaces);
			i--;
		}
		else if (doorspaces[i].x == pos.x - 1) //left
		{
			let temp_pos = doorspaces[i]
			doorspaces.splice(i);
			ChainRemoveDoorspaces(temp_pos, doorspaces);
			i--;
		}
		else if (doorspaces[i].x == pos.x + 1) //right
		{
			let temp_pos = doorspaces[i]
			doorspaces.splice(i);
			ChainRemoveDoorspaces(temp_pos, doorspaces);
			i--;
		}
		else if (doorspaces[i].y == pos.y + 1) //down
		{
			let temp_pos = doorspaces[i]
			doorspaces.splice(i);
			ChainRemoveDoorspaces(temp_pos, doorspaces);
			i--;
		}
	}
	
	return doorspaces;
}

function GetDoorPositionAndOrientation(start, end)
{
	// console.log (start)
	// console.log (end)
	// if (start.x == end.x && start.y == end.y)
		// console.log("warning, same tile for door start and end")
	
	if(start.x == end.x)
	{
		if (start.y < end.y)
			return {pos: start, img: dungeon_gen_assets.door_horizontal[Math.floor(Math.random()*dungeon_gen_assets.door_horizontal.length)]}
		else
			return {pos: end, img: dungeon_gen_assets.door_horizontal[Math.floor(Math.random()*dungeon_gen_assets.door_horizontal.length)]}
	}
	else
	{
		if (start.x < end.x)
			return {pos: start, img: dungeon_gen_assets.door_vertical[Math.floor(Math.random()*dungeon_gen_assets.door_vertical.length)]}
		else
			return {pos: end, img: dungeon_gen_assets.door_vertical[Math.floor(Math.random()*dungeon_gen_assets.door_vertical.length)]}
	}
}

var DUNGEONMAP_MAX_WIDTH = 150;
var DUNGEONMAP_MIN_WIDTH = 20;
var DUNGEONMAP_MAX_HEIGHT = 120;
var DUNGEONMAP_MIN_HEIGHT = 15;
var DUNGEONMAP_MAX_ROOMS = 48;
var DUNGEONMAP_MIN_ROOMS = 3;
var DUNGEONMAP_ROOM_MIN_HEIGHT = 4;
var DUNGEONMAP_ROOM_MIN_WIDTH = 4;

function GenerateDungeonMap(arguments)
{
	let w = 64;
	let h = 48;
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
	
	let map = { rooms: [], width: w, height: h, tilemap: [], doors: [] }
	let room_map = [];
	let room_count = 0;
	let attempts = 0;
	
	for(let x = 0; x < w; x++)
	{
		for(let y = 0; y < h; y++)
		{
			let local_pos_index = x + (y * w);
			room_map[local_pos_index] = 0;
			map.tilemap[local_pos_index] = "unknown";
		}
	}
	
	//rooms
	while (room_count < rooms && attempts < rooms*64)
	{
		attempts++;
		let new_room = { img: "", height: 0, width: 0, x_pos: 0, y_pos: 0, layout: [], doorspaces: []}
		let room_blueprint = dungeon_gen_assets.rooms[Math.floor(Math.random()*dungeon_gen_assets.rooms.length)]
		
		new_room.img = room_blueprint.img
		new_room.height = room_blueprint.height
		new_room.width = room_blueprint.width
		new_room.layout = room_blueprint.layout
		
		let rand_x = Math.floor(Math.random()* (w-2 - new_room.width)) + 1
		let rand_y = Math.floor(Math.random()* (h-2 - new_room.height)) + 1
		
		new_room.x_pos = rand_x
		new_room.y_pos = rand_y
		
		let valid_room = true
		let auto_pass = true
		for(let i = 0; i < map.rooms.length; i++)
		{
			let current_room = map.rooms[i]
			if (new_room.x_pos + new_room.width < current_room.x_pos || current_room.x_pos + current_room.width < new_room.x_pos)
			{
				if (new_room.y_pos + new_room.height < current_room.y_pos || current_room.y_pos + current_room.height < new_room.y_pos)
				{
					continue;
				}
				else
				{
					auto_pass = false;
					break;
				}
			}
			else
			{
				auto_pass = false
				break;
			}
		}
		
		if (!auto_pass)
		{
			for(let y = 0; y < new_room.height; y++)
			{
				for(let x = 0; x < new_room.width; x++)
				{
					let position_index = (x + new_room.x_pos) + ((y + new_room.y_pos) * w);
					let local_pos_index = x + (y * new_room.width);
					if ((room_map[position_index] == 1 || room_map[position_index] == 2) && (new_room.layout[local_pos_index] == 1 || new_room.layout[local_pos_index] == 2))
					{
						valid_room = false;
						break;
					}
				}
				if (!valid_room)
				{
					break;
				}
			}
		}
		if (valid_room)
		{
			room_count++;
			let potential_doors = [];
			
			for(let x = 0; x < new_room.width; x++)
			{
				for(let y = 0; y < new_room.height; y++)
				{
					let position_index = (x + new_room.x_pos) + ((y + new_room.y_pos) * w);
					let local_pos_index = x + (y * new_room.width);
					room_map[position_index] += new_room.layout[local_pos_index];
					if (new_room.layout[local_pos_index] == 2)
					{
						map.tilemap[position_index] = "doorway";
						potential_doors.push({ x: x + new_room.x_pos, y: y + new_room.y_pos});
					}
					else if (new_room.layout[local_pos_index] == 1)
					{
						map.tilemap[position_index] = "closed";
					}
				}
			}
			new_room.doorspaces = potential_doors;
			map.rooms.push(new_room);
		}
	}
	
	//coridoors and doors
	for(let i = 0; i < map.rooms.length; i++)
	{
		if  (map.rooms[i].doorspaces.length < 1)
			continue;
		
		let find_end_attempts = 0;
		let other_room = Math.floor(Math.random() * map.rooms.length)
		while (find_end_attempts < 999 && (other_room == i || map.rooms[other_room].doorspaces.length < 1))
		{
			find_end_attempts++;
			other_room = Math.floor(Math.random() * map.rooms.length);
		}
		
		if (find_end_attempts >= 999)
		{
			break;
		}
		
		let door_count = 0;
		let room_door = Math.floor(Math.random() * map.rooms[i].doorspaces.length)
		let door_start = map.rooms[i].doorspaces[room_door]
		let door_end = map.rooms[other_room].doorspaces[Math.floor(Math.random() * map.rooms[other_room].doorspaces.length)]
		
		let tile_path = TileMapPathToPosition(door_start, door_end, map.tilemap, map.width, map.height)
		
		map.rooms[i].doorspaces.splice(room_door)
		map.rooms[i].doorspaces = ChainRemoveDoorspaces(door_start, map.rooms[i].doorspaces)
		
		for(let j = 0; j < tile_path.length; j++)
		{
			let path_index = tile_path[j].x + (tile_path[j].y * w)
			
			if (map.tilemap[path_index] != "closed")
			{
				map.tilemap[path_index] = "coridoor"
			}
		}
		if (tile_path.length >= 2)
		{
			map.doors.push(GetDoorPositionAndOrientation(door_start, tile_path[1]))
			map.doors.push(GetDoorPositionAndOrientation(door_end, tile_path[tile_path.length-1]))
		}
		else
		{
			map.doors.push(GetDoorPositionAndOrientation(door_start, door_end))
		}
		
	}
	
	return map;
}

function GetTileCode(x, y, tilemap, h, w)
{
	let base_position = x + (y * w)
	let tile_code = 0;
	//upper wall
	if (base_position - w < 0 || tilemap[base_position - w] != "coridoor")
	{
		tile_code += 2;
	}
	//left wall
	if (base_position - 1 < 0 || tilemap[base_position - 1] != "coridoor")
	{
		tile_code += 8;
	}
	//right wall
	if (base_position + 1 >= (h * w) || tilemap[base_position + 1] != "coridoor")
	{
		tile_code += 16;
	}
	//under wall
	if (base_position + w >= (h * w) || tilemap[base_position + w] != "coridoor")
	{
		tile_code += 64;
	}
	
	//top_left
	if  ((tile_code & 10) == 0 && (base_position - (w + 1) < 0 || tilemap[base_position - (w + 1)] != "coridoor"))
	{
		tile_code += 1;
	}
	//top_right
	if  ((tile_code & 18) == 0 && (base_position - (w - 1) < 0 || tilemap[base_position - (w - 1)] != "coridoor"))
	{
		tile_code += 4;
	}
	//bottom_left
	if  ((tile_code & 72) == 0 && (base_position + (w - 1) >= (h * w) || tilemap[base_position + (w - 1)] != "coridoor")) 
	{
		tile_code += 32;
	}
	//bottom_right
	if  ((tile_code & 80) == 0 && (base_position + (w + 1) >= (h * w) || tilemap[base_position + (w + 1)] != "coridoor"))
	{
		tile_code += 128;
	}
	
	return tile_code;
}

function arrayContainsIdentical(value, array)
{
	for (let i = 0; i < array.length; i++)
	{
		if (array[i] == value)
			return true;
	}
	return false;
}

function OutputTileMap(channel, arguments)
{
	let w = 64;
	let h = 48;
	
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
	
	let map = false;
	let attempts = 0;
	while (map == false && attempts < 32)
	{
		attempts++;
		map = GenerateDungeonMap(arguments);
	}
	
	if (attempts >= 32)
	{
		channel.send("I failed to make a dungeon with those parameters");
		console.log("failed to generatemap");
		return 0;
	}
	
	let mapmap = [];
	
	//base map
	for (let y = 0; y < h; y++)
	{
		for (let x = 0; x < w; x++)
		{
			let xpos = (70*(x));
			let ypos = (70*(y));
			
			mapmap.push({ src: dungeon_gen_assets.closed[Math.floor(Math.random()*dungeon_gen_assets.closed.length)], x: xpos, y: ypos});
			
		}
	}
	
	//rooms
	for (let i = 0; i < map.rooms.length; i++)
	{
			let xpos = (70*(map.rooms[i].x_pos));
			let ypos = (70*(map.rooms[i].y_pos));
			
			mapmap.push({ src: map.rooms[i].img, x: xpos, y: ypos});
	}
	
	
	let test_img_types = []
	//coridoors
	for (let y = 0; y < h; y++)
	{
		for (let x = 0; x < w; x++)
		{
			let xpos = (70*(x));
			let ypos = (70*(y));
			let index_pos = x + (y * w);
			if (map.tilemap[index_pos] != "unknown" && map.tilemap[index_pos] != "closed" && map.tilemap[index_pos] != "doorway")
			{
				let img_tile_code = GetTileCode(x, y, map.tilemap, map.height, map.width);
				let tile_img = dungeon_gen_assets.open + img_tile_code.toString() + ".png"
				if (!arrayContainsIdentical(tile_img, test_img_types))
				{
					test_img_types.push(tile_img)
				}
				
				mapmap.push({ src: tile_img, x: xpos, y: ypos});
			}
		}
	}
	
	// console.log(test_img_types)
	
	//doors
	for (let i = 0; i < map.doors.length; i++)
	{
			let xpos = (70*(map.doors[i].pos.x));
			let ypos = (70*(map.doors[i].pos.y));
			
			mapmap.push({ src: map.doors[i].img, x: xpos, y: ypos});
	}
	
	let file = 'generatedmap.png';
	let path = './' + file;
	
	mergeImages(mapmap, 
	{
		width: (70*w),
		height: (70*h),
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
// BLASEBALLER GENERATOR


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
// isometric map gen?
//

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
	let temperature_noise_factor = 3
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
		argumentpos = arguments.indexOf("-tn")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			temperature_noise_factor = parseFloat(arguments[argumentpos+1]);
			if (temperature_noise_factor > 10)
				temperature_noise_factor = 10;
			if (temperature_noise_factor <= 0)
				temperature_noise_factor = 0.01;
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
			world.push({ waterlevel: -1, biome: tile_temperature, forest: false});
		}
	}
	
	for (let y = 0; y < height; y++)
	{
		for (let x = 0; x < width; x++)
		{
			let temperature_noise = (noisemap[x + y * width] - 0.5) / temperature_noise_factor;
			let noisePos = { x: x, y: y };
			spreadTemperature(world, noisePos, width, height, temperature_noise, 4);
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
// pixel drawn landmass map

function GenerateLandmass(canvas_width = 2560, canvas_height = 2560, shapeblending = 0.33, height_max = 8, height_min = -4)
{
	
	let map = {
		width: canvas_width,
		height: canvas_height,
		heightmap: null,
		shape: null,
		shape_blending: shapeblending,
		modificationmap: null,
		max_height: height_max,
		min_height: height_min,
		
		init: function(shape)
		{
			this.shape = shape
			this.heightmap = objectNoiseMap2D(4, 4, { x: 0, y: 0})
			this.heightmap.init()
		},
		
		sample: function(p)
		{
			let heightmap_p = { x: p.x / this.width * this.heightmap.width, y: p.y / this.height * this.heightmap.height }
			let shape_mod = 1.0
			let height_mod = 1.0
			if (this.shape != null)
			{
				let shape_p = { x: p.x / this.width * this.shape.width, y: p.y / this.height * this.shape.height }
				shape_height = this.shape.sample(shape_p)
				if(shape_height < -0.125)
					shape_mod = shape_height
				else if (shape_height > 0.5)
				{
					shape_mod = shape_height * 0.5 + 0.5
					height_mod = 8
				}
				else
					shape_mod = shape_height * 0.5 + 0.5
			}
			let sample_h = this.heightmap.sample(heightmap_p)
			let interpolate_hs = interpolateBetween(shape_mod, sample_h, this.shape_blending)
			if (shape_mod >= 0)
			{
				interpolate_hs = interpolateBetween(shape_mod, sample_h, 1-this.shape_blending)
			}
			return interpolate_hs
		},
		
		modifyArea(p, h, r)
		{
			for(let i = 0; i < this.modificationmap.map.length; i++)
			{
				let x = i % (this.modificationmap.width/2)
				let y = Math.floor(i / (this.modificationmap.width/2))
				let ip = { x: x, y: y }
				let dist = LengthBetweenPoints(p, ip)
				if  (dist <= r)
				{
					let prop = 1 - (dist / r)
					this.modificationmap.changeValue(ip, this.modificationmap.map[i] + (prop * h))
				}
			}
		},
		
		mountainRanges: function(p, h, l)
		{
			this.modifyArea(p, h, l/4)
			let x_dir = Math.round(Math.random()*2 - 1)
			let y_dir = Math.round(Math.random()*2 - 1)
			let h_movement = Math.random()* 0.125 + 0.025
			
			for (let i = 0; i < l/2; i++)
			{
				this.modifyArea({ x: p.x + x_dir*i, y: p.y + y_dir*i }, h - h_movement*i, (l/4)-i)
			}
			
			for (let i = 0; i < l/2; i++)
			{
				this.modifyArea({ x: p.x - x_dir*i, y: p.y - y_dir*i }, h - h_movement*i, (l/4)-i)
			}
		},
		
		randomMountainRanges: function(n, hv, hm, lv, lm)
		{
			for (let i = 0; i < n; i++)
			{
				let dl = Math.random()*lv + lm
				
				let dx = this.modificationmap.width - dl * 2
				let xm = dl
				let dy = this.modificationmap.height - dl * 2
				let ym = dl
				
				let p = { x: Math.random()*dx+xm, y: Math.random()*dy+ym }
				
				this.mountainRanges(p, Math.random()*hv + hm, dl)
			}
		}
	}
	return map
}

function DrawLandmass(channel, arguments)
{
	let shape_min = -0.25
	let shape_max = 2.25
	let shape_blending = 0.33
	let map_width = 1024
	let map_height = 1024
	
	if (arguments != null && arguments.length > 0)
	{
		argumentpos = arguments.indexOf("-w")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			map_width = parseInt(arguments[argumentpos+1]);
			if (map_width > 2560)
				map_width = 2560;
			if (map_width < 128)
				map_width = 128;
		}
		argumentpos = arguments.indexOf("-h")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			map_height = parseInt(arguments[argumentpos+1]);
			if (map_height > 2560)
				map_height = 2560;
			if (map_height < 128)
				map_height = 128;
		}
		argumentpos = arguments.indexOf("-smin")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			shape_min = parseFloat(arguments[argumentpos+1]);
			if (shape_min > 8)
				shape_min = 8;
			if (shape_min < -8)
				shape_min = -8;
		}
		argumentpos = arguments.indexOf("-smax")
		if (argumentpos > -1 && argumentpos+1 < arguments.length && !isNaN(arguments[argumentpos+1]))
		{
			shape_max = parseFloat(arguments[argumentpos+1]);
			if (shape_max > 8)
				shape_max = 8;
			if (shape_max < -8)
				shape_max = -8;
		}
		
		if (shape_max <= shape_min)
		{
			console.log("invalid shape min/max")
			channel.send("Invalid shape min/max: min must always be smaller than and different to max.");
			return
		}
	}
	
	let start = new Date().getTime();
	let new_map = GenerateLandmass(map_width, map_height, shape_blending)
	let shape = objectShapeMap(shape_min, shape_max)
	new_map.init(shape)
	
	let generation_time = new Date().getTime();
	
	console.log("map generation took " + (generation_time-start) + " milliseconds")
	// new_map.heightmap.normalize(-5, 8)
	// console.log(new_map.heightmap)
	
	var tempcanvas = new Canvas();
	tempcanvas.width = new_map.width;
	tempcanvas.height = new_map.height;
	if (tempcanvas.getContext)
	{
		var ctx = tempcanvas.getContext('2d');

		var imgdata = ctx.getImageData(0,0, new_map.width, new_map.height);
		var imgdatalen = imgdata.data.length;
		// console.log(imgdatalen/4)
		let highest_pixel = -99
		let lowest_pixel = 99
		for(let i=0;i<imgdatalen/4;i++)
		{  //iterate over every pixel in the canvas
			let x = i % new_map.width
			let y = Math.floor(i / new_map.width)
			let p = { x: x, y: y }
			
			let pixel_height = new_map.sample(p)
			
			let _red = 255
			let _green = 255
			let _blue = 255
			
			if (pixel_height < -2) //ocean
			{
				_red = 0
				_green = 112
				_blue = 223
			}
			else if (pixel_height < 0) //ocean
			{
				let height_point = pixel_height / -2
				_red = Math.round(0 * (1 - height_point) + 0 * height_point)
				_green = Math.round(128 * (1 - height_point) + 112 * height_point)
				_blue = Math.round(255 * (1 - height_point) + 223 * height_point)
			}
			else if (pixel_height < 0.75)
			{
				let height_point = (pixel_height) / 0.75
				_red = Math.round(34 * (1 - height_point) + 37 * height_point)
				_green = Math.round(177 * (1 - height_point) + 197 * height_point)
				_blue = Math.round(76 * (1 - height_point) + 85 * height_point)
			}
			else if (pixel_height < 1.5)
			{
				let height_point = (pixel_height-0.75) / 0.75
				_red = Math.round(37 * (1 - height_point) + 164 * height_point)
				_green = Math.round(197 * (1 - height_point) + 184 * height_point)
				_blue = Math.round(85 * (1 - height_point) + 54 * height_point)
			}
			else if (pixel_height < 2.5)
			{
				let height_point = (pixel_height-1.5) / 1
				_red = Math.round(164 * (1 - height_point) + 195 * height_point)
				_green = Math.round(184 * (1 - height_point) + 195 * height_point)
				_blue = Math.round(54 * (1 - height_point) + 195 * height_point)
			}
			else if (pixel_height < 5)
			{
				let height_point = (pixel_height-2.5) / 2.5
				_red = Math.round(195 * (1 - height_point) + 255 * height_point)
				_green = Math.round(195 * (1 - height_point) + 255 * height_point)
				_blue = Math.round(195 * (1 - height_point) + 255 * height_point)
			}
			else if (pixel_height <= 8)
			{
				_red = 255
				_green = 255
				_blue = 255
			}
			else
			{
				console.log(pixel_height)
				_red = 255
				_green = 0
				_blue = 255
			}
			
			imgdata.data[4*i] = _red;    // RED (0-255)
			imgdata.data[4*i+1] = _green;    // GREEN (0-255)
			imgdata.data[4*i+2] = _blue;    // BLUE (0-255)
			imgdata.data[4*i+3] = 255;  // APLHA (0-255)
		}
		
		ctx.putImageData(imgdata,0,0);
		
		// ctx.fillStyle = 'rgb(255, 255, 255)';
		// for (let i = 0; i < new_map.points.length; i++)
		// {
			// ctx.fillRect(new_map.points[i].x-2, new_map.points[i].y-2, 4, 4);
		// }
		
		let file = 'voronoimap.png';
		let path = './' + file;
		
		let b64 = tempcanvas.toDataURL('image/png', 0.92);
		
		fs.writeFile(path,base64data(b64), {encoding: 'base64'}, (err) => {
			if (err) throw err;
			let end = new Date().getTime(); 
			console.log('The drawn landmass has been saved! Rendering took ' + (end-generation_time) + ' milliseconds');
			channel.send({ files: [{ attachment: path, name: file }] });
		})
	}
	else
	{
		console.log("getContext failed");
	}
	
}


//
//
//
// handle errors??? no

process.on('uncaughtException', console.log);
client.on('error', console.error);


//
// engage ALLIDROID

client.login(logintoken); //allidroid logon

loadCurrentGayValue();
MarkovPhonemeNameTrain();
LoadBattleshipsGames();