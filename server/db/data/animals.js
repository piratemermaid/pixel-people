const aquatic = "Aquatic";
const arboreal = "Arboreal";
const bear = "Bear";
const bigcat = "Big Cat";
const bird = "Bird";
const carnivore = "Carnivore";
const cat = "Cat";
const dog = "Dog";
const extinct = "Extinct";
const farm = "Farm";
const fast = "Fast";
const herbivore = "Herbivore";
const insect = "Insect";
const mammal = "Mammal";
const mollusc = "Mollusc";
const mythical = "Mythical";
const omnivore = "Omnivore";
const pet = "Pet";
const primate = "Primate";
const reptile = "Reptile";
const scavenger = "Scavenger";
const secret = "Secret";
const small = "Small";
const snow = "Snow";
const special = "Special";
const strong = "Strong";
const tasty = "Tasty";
const wild = "Wild";

const all = "All";
const harvest = "Harvest";
const frost = "Frost";
const swell = "Swell";
const thaw = "Thaw";

const animals = [
    {
        name: "Tabby Cat",
        tier: 1,
        season: all,
        categories: [cat, mammal, pet, small]
    },
    {
        name: "Tom Cat",
        tier: 1,
        season: all,
        categories: [cat, mammal, pet, small]
    },
    {
        name: "Tuxedo Cat",
        tier: 1,
        season: all,
        categories: [cat, mammal, pet, small]
    },
    {
        name: "Siamese Cat",
        tier: 1,
        season: all,
        categories: [cat, mammal, pet, small]
    },
    {
        name: "Calico",
        tier: 1,
        season: all,
        categories: [cat, mammal, pet, small]
    },
    {
        name: "Box Cat",
        tier: 1,
        season: all,
        categories: [cat, mammal, pet, small]
    },
    {
        name: "Corgi",
        tier: 1,
        season: all,
        categories: [dog, mammal, pet, special]
    },
    {
        name: "Alsatian",
        tier: 1,
        season: all,
        categories: [dog, mammal, pet, special]
    },
    {
        name: "Pug",
        tier: 1,
        season: all,
        categories: [dog, mammal, pet, special]
    },
    {
        name: "Golden Retriever",
        tier: 1,
        season: all,
        categories: [dog, mammal, pet, special]
    },
    {
        name: "Poodle",
        tier: 1,
        season: all,
        categories: [dog, mammal, pet, special]
    },
    {
        name: "Chow Chow",
        tier: 1,
        season: all,
        categories: [dog, mammal, pet, special]
    },
    {
        name: "Tortoise",
        tier: 1,
        season: all,
        categories: [herbivore, reptile, pet, small],
        splice: ["Snail", "Snake"]
    },
    {
        name: "Snail",
        tier: 1,
        season: all,
        categories: [herbivore, reptile, pet, small],
        splice: ["Snake,Tortoise"]
    },
    {
        name: "Parrot",
        tier: 1,
        season: all,
        categories: [arboreal, bird, pet],
        splice: ["Chicken", "Gummy Bear"]
    },
    {
        name: "Chameleon",
        tier: 1,
        season: all,
        categories: [arboreal, reptile],
        splice: ["Tiger", "Toucan"]
    },
    {
        name: "Octopus",
        tier: 1,
        season: all,
        categories: [aquatic, mollusc, special],
        splice: ["Chimpanzee", "Trout"]
    },
    {
        name: "Snake",
        tier: 1,
        season: all,
        categories: [reptile],
        splice: ["Chameleon", "Platypus"]
    },
    {
        name: "Terrier",
        tier: 1,
        season: all,
        categories: [dog, mammal, special]
    },
    {
        name: "Narwhal",
        tier: 1,
        season: all,
        categories: [aquatic],
        splice: ["Harp Seal", "Unicorn"]
    },
    {
        name: "Belgian Shepherd",
        tier: 1,
        season: all,
        categories: [dog, farm, mammal, pet]
    },
    {
        name: "Pig",
        tier: 2,
        season: harvest,
        categories: [farm, mammal, special, tasty],
        splice: ["Hippopotamus", "Horse"]
    },
    {
        name: "Cow",
        tier: 2,
        season: harvest,
        categories: [farm, herbivore, mammal, special, strong, tasty],
        splice: ["Horse", "Chicken"]
    },
    {
        name: "Bull",
        tier: 2,
        season: harvest,
        categories: [farm, herbivore, mammal, special, strong],
        splice: ["Cow", "Stag"]
    },
    {
        name: "Horse",
        tier: 2,
        season: harvest,
        categories: [farm, herbivore, mammal, pet, special, strong],
        splice: ["Cow", "Cheetah"]
    },
    {
        name: "Unicorn",
        tier: 2,
        season: frost,
        categories: [mammal, mythical, special, strong],
        splice: ["Horse", "Dodo"]
    },
    {
        name: "Zebra",
        tier: 2,
        season: swell,
        categories: [fast, herbivore, mammal, special, strong, wild],
        splice: ["Horse", "Panda"]
    },
    {
        name: "Donkey",
        tier: 2,
        season: harvest,
        categories: [farm, herbivore, mammal, strong],
        splice: ["Horse", "Pig"]
    },
    {
        name: "Camel",
        tier: 2,
        season: swell,
        categories: [fast, herbivore, mammal, special, strong, wild],
        splice: ["Llama", "Llama"]
    },
    {
        name: "Mousedeer",
        tier: 2,
        season: thaw,
        categories: [herbivore, mammal, wild],
        splice: ["Mouse", "Mouse"]
    },
    {
        name: "Llama",
        tier: 2,
        season: thaw,
        categories: [herbivore, mammal, special, strong],
        splice: ["Donkey", "Donkey"]
    },
    {
        name: "Moose",
        tier: 2,
        season: null,
        categories: [mammal, wild, herbivore, snow],
        splice: ["Horse", "Goat"]
    },
    {
        name: "Hippopotamus",
        tier: 2,
        season: null,
        categories: [mammal, wild, herbivore, strong],
        splice: ["Cow", "Whale"]
    },
    {
        name: "Chicken",
        tier: 2,
        season: null,
        categories: [bird, tasty, farm, special, small],
        splice: ["Parrot", "Pig"]
    },
    {
        name: "Duck",
        tier: 2,
        season: null,
        categories: [bird, tasty, farm, special, small],
        splice: ["Chicken", "Flamingo"]
    },
    {
        name: "Rabbit",
        tier: 2,
        season: null,
        categories: [mammal, farm, special, small, pet, fast],
        splice: ["Mouse", "Cheetah"]
    },
    {
        name: "Elephant",
        tier: 2,
        season: null,
        categories: [mammal, wild, herbivore, strong],
        splice: ["Cow", "Cow"]
    },
    {
        name: "Tiger",
        tier: 2,
        season: null,
        categories: [mammal, cat, bigcat, special, wild, carnivore],
        splice: ["Zebra", "Tabby Cat"]
    },
    {
        name: "Lion",
        tier: 2,
        season: null,
        categories: [mammal, cat, bigcat, special, wild, carnivore],
        splice: ["Tiger", "Tiger"]
    },
    {
        name: "Panther",
        tier: 2,
        season: null,
        categories: [mammal, cat, bigcat, wild, carnivore, arboreal],
        splice: ["Bat", "Tiger"]
    },
    {
        name: "Cheetah",
        tier: 2,
        season: null,
        categories: [mammal, cat, bigcat, wild, carnivore, fast],
        splice: ["Tiger", "Horse"]
    },
    {
        name: "Giraffe",
        tier: 2,
        season: null,
        categories: [mammal, wild, herbivore, fast],
        splice: ["Horse", "Snake"]
    },
    {
        name: "Rhinoceros",
        tier: 2,
        season: null,
        categories: [mammal, wild, herbivore, strong],
        splice: ["Hippopotamus", "Unicorn"]
    },
    {
        name: "Harp Seal",
        tier: 2,
        season: null,
        categories: [mammal, aquatic, herbivore, strong],
        splice: ["Sea Lion", "Poodle"]
    },
    {
        name: "Walrus",
        tier: 2,
        season: null,
        categories: [mammal, aquatic, special, snow, strong],
        splice: ["Sea Lion", "Pug"]
    },
    {
        name: "Panda",
        tier: 2,
        season: null,
        categories: [mammal, wild, strong],
        splice: ["Zebra", "Brown Bear"]
    },
    {
        name: "Polar Bear",
        tier: 2,
        season: null,
        categories: [mammal, bear, wild, carnivore, snow],
        splice: ["Brown Bear", "Harp Seal"]
    },
    {
        name: "Brown Bear",
        tier: 2,
        season: null,
        categories: [mammal, bear, wild, omnivore, strong],
        splice: ["Wolf", "Bull"]
    },
    {
        name: "Sun Bear",
        tier: 2,
        season: null,
        categories: [mammal, bear, wild, omnivore],
        splice: ["Brown Bear", "Camel"]
    },
    {
        name: "Koala",
        tier: 2,
        season: null,
        categories: [mammal, wild, omnivore],
        splice: ["Brown Bear", "Squirrel"]
    },
    {
        name: "Gummy Bear",
        tier: 2,
        season: null,
        categories: [mammal, bear, tasty, mythical, small],
        splice: ["Brown Bear", "Unicorn"]
    },
    {
        name: "Fox",
        tier: 2,
        season: null,
        categories: [mammal, wild, carnivore],
        splice: ["Wolf", "Chow Chow"]
    },
    {
        name: "Wolf",
        tier: 2,
        season: null,
        categories: [mammal, special, wild, carnivore, snow],
        splice: ["Stag", "Dragon"]
    },
    {
        name: "Orangutan",
        tier: 2,
        season: null,
        categories: [mammal, primate, wild, omnivore, arboreal],
        splice: ["Brown Bear", "Octopus"]
    },
    {
        name: "Gorilla",
        tier: 2,
        season: null,
        categories: [mammal, primate, wild, omnivore, arboreal, strong],
        splice: ["Chimpanzee", "Elephant"]
    },
    {
        name: "Chimpanzee",
        tier: 2,
        season: null,
        categories: [mammal, primate, wild, omnivore, arboreal],
        splice: ["Orangutan", "Octopus"]
    },
    {
        name: "Penguin",
        tier: 2,
        season: null,
        categories: [bird, aquatic, snow],
        splice: ["Toucan", "Polar Bear"]
    },
    {
        name: "Blue Whale",
        tier: 2,
        season: null,
        categories: [mammal, aquatic, wild, snow, special],
        splice: ["Elephant", "Elephant"]
    },
    {
        name: "Orca",
        tier: 2,
        season: null,
        categories: [mammal, aquatic, wild, snow, carnivore],
        splice: ["Blue Whale", "Panda"]
    },
    {
        name: "Owl",
        tier: 2,
        season: null,
        categories: [bird, small, arboreal, snow],
        splice: ["Chicken", "Bat"]
    },
    {
        name: "Macaw",
        tier: 2,
        season: null,
        categories: [bird, pet, arboreal],
        splice: ["Parrot", "Parrot"]
    },
    {
        name: "Toucan",
        tier: 2,
        season: null,
        categories: [bird, arboreal],
        splice: ["Parrot", "Rhinoceros"]
    },
    {
        name: "Eagle",
        tier: 2,
        season: null,
        categories: [bird, special, fast],
        splice: ["Lion", "Parrot"]
    },
    {
        name: "Raccoon",
        tier: 2,
        season: null,
        categories: [mammal, omnivore],
        splice: ["Zebra", "Red Panda"]
    },
    {
        name: "Red Panda",
        tier: 2,
        season: null,
        categories: [mammal, arboreal],
        splice: ["Panda", "Fox"]
    },
    {
        name: "Goat",
        tier: 2,
        season: null,
        categories: [mammal, farm, tasty, herbivore],
        splice: ["Donkey", "Horse"]
    },
    {
        name: "Sheep",
        tier: 2,
        season: null,
        categories: [mammal, farm, tasty, herbivore],
        splice: ["Goat", "Poodle"]
    },
    {
        name: "Mouse",
        tier: 2,
        season: null,
        categories: [mammal, pet, small],
        splice: ["Squirrel", "Snail"]
    },
    {
        name: "Spider",
        tier: 2,
        season: null,
        categories: [insect, small, arboreal],
        splice: ["Snake", "Mouse"]
    },
    {
        name: "Bat",
        tier: 2,
        season: null,
        categories: [mammal, special, small],
        splice: ["Owl", "Mouse"]
    },
    {
        name: "Dodo",
        tier: 2,
        season: null,
        categories: [bird, special],
        splice: ["Chicken", "Unicorn"]
    },
    {
        name: "Dragon",
        tier: 2,
        season: null,
        categories: [reptile, mythical, special],
        splice: ["Unicorn", "Snake"]
    },
    {
        name: "Stag",
        tier: 2,
        season: null,
        categories: [mammal, special, herbivore, wild],
        splice: ["Moose", "Bull"]
    },
    {
        name: "Trout",
        tier: 2,
        season: null,
        categories: [aquatic, special, small],
        splice: ["Mouse", "Blue Whale"]
    },
    {
        name: "Turkey",
        tier: 2,
        season: null,
        categories: [bird, farm, tasty],
        splice: ["Chicken", "Pig"]
    },
    {
        name: "Squirrel",
        tier: 2,
        season: null,
        categories: [mammal, arboreal],
        splice: ["Mouse", "Fox"]
    },
    {
        name: "Flamingo",
        tier: 2,
        season: null,
        categories: [bird],
        splice: ["Duck", "Fox"]
    },
    {
        name: "Otter",
        tier: 2,
        season: null,
        categories: [mammal, aquatic],
        splice: ["Trout", "Squirrel"]
    },
    {
        name: "Sea Lion",
        tier: 2,
        season: null,
        categories: [mammal, aquatic],
        splice: ["Lion", "Otter"]
    },
    {
        name: "Hyena",
        tier: 2,
        season: null,
        categories: [mammal, wild, carnivore, scavenger],
        splice: ["Lion", "Wolf"]
    },
    {
        name: "Crocodile",
        tier: 2,
        season: null,
        categories: [reptile, wild, carnivore],
        splice: ["Snake", "Chameleon"]
    },
    {
        name: "Platypus",
        tier: 2,
        season: null,
        categories: [mammal, aquatic],
        splice: ["Duck", "Eurasian Beaver"]
    },
    {
        name: "Fearful Owl",
        tier: 2,
        season: null,
        categories: [bird, small, arboreal],
        splice: ["Owl", "Panther"]
    },
    {
        name: "Black Mare",
        tier: 2,
        season: null,
        categories: [mammal, herbivore, fast, strong],
        splice: ["Horse", "Panther"]
    },
    {
        name: "Raven",
        tier: 2,
        season: null,
        categories: [bird, small, arboreal, fast],
        splice: ["Toucan", "Bat"]
    },
    {
        name: "Black Spider",
        tier: 2,
        season: null,
        categories: [insect, small, arboreal],
        splice: ["Spider", "Bat"]
    },
    {
        name: "Chocolate Rabbit",
        tier: 2,
        season: null,
        categories: [mammal, farm, small, pet, fast],
        splice: ["Rabbit", "Gummy Bear"]
    },
    {
        name: "Mule Deer",
        tier: 2,
        season: null,
        categories: [mammal, wild, herbivore],
        splice: ["Donkey", "Mousedeer"]
    },
    {
        name: "Golden Goose",
        tier: 2,
        season: null,
        categories: [bird, small],
        splice: ["Donkey", "Duck"]
    },
    {
        name: "White Bass",
        tier: 2,
        season: null,
        categories: [aquatic, small],
        splice: ["Harp Seal", "Trout"]
    },
    {
        name: "Mute Swan",
        tier: 2,
        season: null,
        categories: [bird],
        splice: ["Lovebird", "Duck"]
    },
    {
        name: "Lovebird",
        tier: 2,
        season: null,
        categories: [bird, small, arboreal, fast],
        splice: ["Parrot", "Flamingo"]
    },
    {
        name: "Eurasian Beaver",
        tier: 2,
        season: null,
        categories: [mammal, aquatic],
        splice: ["Mouse", "Platypus"]
    },
    {
        name: "French Angelfish",
        tier: 2,
        season: null,
        categories: [aquatic, small],
        splice: ["White Bass", "Mute Swan"]
    },
    {
        name: "Arctic Fox",
        tier: 2,
        season: null,
        categories: [mammal, wild, carnivore, snow],
        splice: ["Fox", "Polar Bear"]
    },
    {
        name: "Beluga Whale",
        tier: 2,
        season: null,
        categories: [mammal, aquatic, wild, snow],
        splice: ["Blue Whale", "Polar Bear"]
    },
    {
        name: "Chinstrap Penguin",
        tier: 2,
        season: null,
        categories: [bird, aquatic],
        splice: ["Penguin", "Penguin"]
    },
    {
        name: "Reindeer",
        tier: 2,
        season: null,
        categories: [mammal, special, herbivore, wild, snow],
        splice: ["Moose", "Moose"]
    },
    {
        name: "Pegasus",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Horse", "Eagle"]
    },
    {
        name: "Gryphon",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Lion", "Eagle"]
    },
    {
        name: "Phoenix",
        tier: 3,
        season: null,
        categories: [mythical, secret, bird],
        splice: ["Dragon", "Flamingo"]
    },
    {
        name: "Hydra",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Snake", "Cerberus"]
    },
    {
        name: "Cerberus",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Wolf", "Direwolf"]
    },
    {
        name: "Oriental Dragon",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Dragon", "Panda"]
    },
    {
        name: "Loch Ness Monster",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Orca", "Snake"]
    },
    {
        name: "Yeti",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Polar Bear", "Gorilla"]
    },
    {
        name: "Drop Bear",
        tier: 3,
        season: null,
        categories: [mythical, secret, arboreal],
        splice: ["Koala", "Red Panda"]
    },
    {
        name: "Merlion",
        tier: 3,
        season: null,
        categories: [mythical, secret, aquatic],
        splice: ["Lion", "Trout"]
    },
    {
        name: "Rocket Cat",
        tier: 3,
        season: null,
        categories: [mythical, secret, cat],
        splice: ["Tom Cat", "Oriental Dragon"]
    },
    {
        name: "Cthulu",
        tier: 3,
        season: null,
        categories: [mythical, secret, aquatic],
        splice: ["Octopus", "Dragon"]
    },
    {
        name: "Sabertooth",
        tier: 3,
        season: null,
        categories: [carnivore, extinct, secret],
        splice: ["Tiger", "Elephant"]
    },
    {
        name: "Direwolf",
        tier: 3,
        season: null,
        categories: [carnivore, extinct, secret, snow],
        splice: ["Wolf", "Tiger"]
    },
    {
        name: "Sphinx",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Lion", "Chimpanzee"]
    },
    {
        name: "Wooly Mammoth",
        tier: 3,
        season: null,
        categories: [extinct, secret],
        splice: ["Elephant", "Sheep"]
    },
    {
        name: "Chimera",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Lion", "Goat"]
    },
    {
        name: "Chupacabra",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Panther", "Crocodile"]
    },
    {
        name: "Hippogryph",
        tier: 3,
        season: null,
        categories: [mythical, secret],
        splice: ["Goat", "Eagle"]
    },
    {
        name: "Peacock",
        tier: 3,
        season: null,
        categories: [bird, wild, fast],
        splice: ["Macaw", "Flamingo"]
    },
    {
        name: "Gecko",
        tier: 3,
        season: null,
        categories: [reptile, arboreal],
        splice: ["Crocodile", "Chameleon"]
    },
    {
        name: "Porcupine",
        tier: 3,
        season: null,
        categories: [mammal, wild, herbivore],
        splice: ["Raccoon", "Tortoise"]
    },
    {
        name: "Carp",
        tier: 3,
        season: null,
        categories: [aquatic, small],
        splice: ["Trout", "Macaw"]
    },
    {
        name: "Pangolin",
        tier: 3,
        season: null,
        categories: [mammal, wild],
        splice: ["Tortoise", "	Squirrel"]
    },
    {
        name: "Buffalo",
        tier: 3,
        season: null,
        categories: [mammal, farm, herbivore, strong],
        splice: ["Bull", "	Brown Bear"]
    },
    {
        name: "Snakehead Fish",
        tier: 3,
        season: null,
        categories: [aquatic, carnivore],
        splice: ["Trout", "Snake"]
    },
    {
        name: "Weasel",
        tier: 3,
        season: null,
        categories: [mammal, wild, arboreal, fast],
        splice: ["Snake", "Squirrel"]
    },
    {
        name: "Ant",
        tier: 3,
        season: null,
        categories: [insect, small],
        splice: ["Spider", "Stag"]
    },
    {
        name: "Mole",
        tier: 3,
        season: null,
        categories: [small, wild],
        splice: ["Ant", "Squirrel"]
    },
    {
        name: "Rattlesnake",
        tier: 3,
        season: null,
        categories: [reptile],
        splice: ["Snake", "Spider"]
    },
    {
        name: "Spider Monkey",
        tier: 3,
        season: null,
        categories: [mammal, primate, wild, omnivore, arboreal],
        splice: ["Spider", "Chimpanzee"]
    },
    {
        name: "Ostrich",
        tier: 3,
        season: null,
        categories: [bird, wild],
        splice: ["Turkey", "Cheetah"]
    },
    {
        name: "Tasmanian Devil",
        tier: 3,
        season: null,
        categories: [mammal, carnivore, wild, small],
        splice: ["Hyena", "Koala"]
    },
    {
        name: "Lar Gibbon",
        tier: 3,
        season: null,
        categories: [mammal, primate, wild, omnivore, arboreal],
        splice: ["Gorilla", "Red Panda"]
    },
    {
        name: "Three Toed Sloth",
        tier: 3,
        season: null,
        categories: [mammal, herbivore],
        splice: ["Snail", "Koala"]
    },
    {
        name: "Pigeon",
        tier: 3,
        season: null,
        categories: [bird, small],
        splice: ["Mouse", "Parrot"]
    },
    {
        name: "Black Rhinoceros",
        tier: 3,
        season: null,
        categories: [extinct, mammal, wild, herbivore, strong],
        splice: ["Rhinoceros", "Black Mare"]
    },
    {
        name: "Flying Fox",
        tier: 3,
        season: null,
        categories: [mammal, wild, small],
        splice: ["Squirrel", "Bat"]
    },
    {
        name: "Sperm Whale",
        tier: 3,
        season: null,
        categories: [mammal, aquatic, wild],
        splice: ["Orca", "Bull"]
    },
    {
        name: "Humpback Whale",
        tier: 3,
        season: null,
        categories: [mammal, aquatic, wild],
        splice: ["Dolphin", "Blue Whale"]
    },
    {
        name: "Puffin",
        tier: 3,
        season: null,
        categories: [bird, small, wild],
        splice: ["Penguin", "Toucan"]
    },
    {
        name: "Wild Boar",
        tier: 3,
        season: null,
        categories: [mammal, wild, omnivore],
        splice: ["Pig", "Bull"]
    },
    {
        name: "Tarantula",
        tier: 3,
        season: null,
        categories: [wild, small],
        splice: ["Spider", "Gorilla"]
    },
    {
        name: "Mongoose",
        tier: 3,
        season: null,
        categories: [mammal, aquatic, wild],
        splice: ["Squirrel", "Tiger"]
    },
    {
        name: "Opossum",
        tier: 3,
        season: null,
        categories: [mammal, wild, small, omnivore],
        splice: ["Koala", "Squirrel"]
    },
    {
        name: "Pygmy Hippo",
        tier: 3,
        season: null,
        categories: [mammal, wild, herbivore],
        splice: ["Hippo", "Pig"]
    },
    {
        name: "Python",
        tier: 3,
        season: null,
        categories: [reptile],
        splice: ["Snake", "Elephant"]
    },
    {
        name: "Scape Goat",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Raccoon", "Wolf"]
    },
    {
        name: "Sacred Cow",
        tier: 3,
        season: null,
        categories: [secret, farm],
        splice: ["Donkey", "Elephant"]
    },
    {
        name: "Cold Turkey",
        tier: 3,
        season: null,
        categories: [secret, bird],
        splice: ["Turkey", "Arctic Fox"]
    },
    {
        name: "Sausage Dog",
        tier: 3,
        season: null,
        categories: [secret, tasty],
        splice: ["Corgi", "Giraffe"]
    },
    {
        name: "Chamrosh",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Belgian Shepherd", "Eagle"]
    },
    {
        name: "Bicorn",
        tier: 3,
        season: null,
        categories: [mythical],
        splice: ["Cow", "Panther"]
    },
    {
        name: "Sha",
        tier: 3,
        season: null,
        categories: [mythical],
        splice: ["Wolf", "Crocodile"]
    },
    {
        name: "Capricornus",
        tier: 3,
        season: null,
        categories: [mythical],
        splice: ["Goat", "French Angelfish"]
    },
    {
        name: "Ratatoskr",
        tier: 3,
        season: null,
        categories: [mythical],
        splice: ["Narwhal", "Squirrel"]
    },
    {
        name: "Afanc",
        tier: 3,
        season: null,
        categories: [mythical],
        splice: ["Crocodile", "Eurasian Beaver"]
    },
    {
        name: "Dolphin",
        tier: 3,
        season: null,
        categories: [mammal, aquatic, wild, carnivore],
        splice: ["Orca", "Sea Lion"]
    },
    {
        name: "Electric Eel",
        tier: 4,
        season: null,
        categories: [aquatic, carnivore],
        splice: ["Snake", "Stingray"]
    },
    {
        name: "Stingray",
        tier: 4,
        season: null,
        categories: [aquatic, carnivore],
        splice: ["Scorpion", "Trout"]
    },
    {
        name: "Scorpion",
        tier: 4,
        season: null,
        categories: [small, wild, carnivore],
        splice: ["Pangolin", "Spider"]
    },
    {
        name: "Toad",
        tier: 4,
        season: null,
        categories: [reptile, small],
        splice: ["Chameleon", "Snakehead Fish"]
    },
    {
        name: "Albatross",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Buffalo", "Eagle"]
    },
    {
        name: "Giant Anteater",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Elephant", "Mole"]
    },
    {
        name: "Kangaroo",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Ostrich", "Squirrel"]
    },
    {
        name: "Sailfish",
        tier: 4,
        season: null,
        categories: [aquatic, carnivore],
        splice: ["Snakehead Fish", "Narwhal"]
    },
    {
        name: "Piranha",
        tier: 4,
        season: null,
        categories: [aquatic, carnivore, fast, small],
        splice: ["Carp", "Hyena"]
    },
    {
        name: "Vulture",
        tier: 4,
        season: null,
        categories: [bird, fast],
        splice: ["Piranha", "Turkey"]
    },
    {
        name: "Manatee",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Cow", "Dolphin"]
    },
    {
        name: "Wooly Rhinoceros",
        tier: 4,
        season: null,
        categories: [extinct, mammal, wild, herbivore, strong, snow],
        splice: ["Wooly Mammoth", "Rhinoceros"]
    },
    {
        name: "Beringian Wolf",
        tier: 4,
        season: null,
        categories: [extinct, wild, mammal, snow],
        splice: ["Direwolf", "Arctic Fox"]
    },
    {
        name: "Monitor Lizard",
        tier: 4,
        season: null,
        categories: [reptile],
        splice: ["Gecko", "Crocodile"]
    },
    {
        name: "Armadillo",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Pangolin", "Snail"]
    },
    {
        name: "Gazelle",
        tier: 4,
        season: null,
        categories: [mammal, wild, fast, herbivore],
        splice: ["Stag", "Ostrich"]
    },
    {
        name: "Clownfish",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Carp", "Zebra"]
    },
    {
        name: "Alligator",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Crocodile", "Wild Boar"]
    },
    {
        name: "Pygmy Marmoset",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Spider Monkey", "Squirrel"]
    },
    {
        name: "Pygmy Possum",
        tier: 4,
        season: null,
        categories: [mammal, small, omnivore],
        splice: ["Mouse", "Opossum"]
    },
    {
        name: "Seahorse",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Horse", "Snakehead Fish"]
    },
    {
        name: "Humboldt Squid",
        tier: 4,
        season: null,
        categories: [mollusc, aquatic],
        splice: ["Octopus", "Sperm Whale"]
    },
    {
        name: "Drunken Monkey",
        tier: 4,
        season: null,
        categories: [secret, primate],
        splice: ["Moose", "Spider Monkey"]
    },
    {
        name: "Encantado",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Dolphin", "Chameleon"]
    },
    {
        name: "Myrmecoleon",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Ant", "Lion"]
    },
    {
        name: "Feng Huang",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Hydra", "Peacock"]
    },
    {
        name: "Shug Monkey",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Belgian Shepherd", "Spider Monkey"]
    },
    {
        name: "Buraq",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Pegasus", "Sphinx"]
    },
    {
        name: "Hippocamp",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Black Mare", "Seahorse"]
    },
    {
        name: "Mishipeshu",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Panther", "Porcupine"]
    },
    {
        name: "Shachihoko",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Carp", "Tiger"]
    },
    {
        name: "Bunyip",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Sausage Dog", "Sea Lion"]
    },
    {
        name: "Shen",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Snail", "Dragon"]
    },
    {
        name: "Taweret",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Afanc", "Hippopotamus"]
    },
    {
        name: "Kobalt Kong",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Blue Whale", "Yeti"]
    },
    {
        name: "Xuan Wu",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Tortoise", "Rattlesnake"]
    },
    {
        name: "Taniwha",
        tier: 4,
        season: null,
        categories: [mythical],
        splice: ["Beluga Whale", "Gecko"]
    },
    {
        name: "Wyvern",
        tier: null,
        season: null,
        categories: [],
        splice: ["Dragon", "Sha"]
    },
    {
        name: "Manta Ray",
        tier: null,
        season: null,
        categories: [],
        splice: ["Panda", "Stingray"]
    },
    {
        name: "Praying Mantis",
        tier: null,
        season: null,
        categories: [],
        splice: ["Scorpion", "Spider"]
    },
    {
        name: "Crab",
        tier: null,
        season: null,
        categories: [],
        splice: ["Scorpion", "Tortoise"]
    },
    {
        name: "Honey Bee",
        tier: null,
        season: null,
        categories: [],
        splice: ["Scorpion", "Parrot"]
    },
    {
        name: "Swallow",
        tier: 5,
        season: null,
        categories: [bird, small, wild],
        splice: ["Pigeon", "Ant"]
    },
    {
        name: "Halibut",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Mole", "Stingray"]
    },
    {
        name: "Lionfish",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Carp", "Stingray"]
    },
    {
        name: "Komodo Dragon",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Monitor Lizard", "Rattlesnake"]
    },
    {
        name: "Giant Centipede",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Ant", "Scorpion"]
    },
    {
        name: "Bluefin Tuna",
        tier: 5,
        season: null,
        categories: [aquatic, tasty],
        splice: ["Sailfish", "Cow"]
    },
    {
        name: "Sunfish",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Golden Goose", "Sailfish"]
    },
    {
        name: "Skunk",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Humboldt Squid", "Raccoon"]
    },
    {
        name: "Anglerfish",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Carp", "Humboldt Squid"]
    },
    {
        name: "Titanoboa",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Beringian Wolf", "Python"]
    },
    {
        name: "Pizza Rat",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Alligator", "Pigeon"]
    },
    {
        name: "Black Sheep",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Pug", "Pygmy Possum"]
    },
    {
        name: "Kirin",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Bicorn", "Wyvern"]
    },
    {
        name: "Peryton",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Albatross", "Stag"]
    },
    {
        name: "Kelpie",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Hippocamp", "Sphinx"]
    },
    {
        name: "Aqrabuamelu",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Chimpanzee", "Scorpion"]
    },
    {
        name: "Cockatrice",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Bat", "Feng Huang"]
    },
    {
        name: "Tengu",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Buraq", "Chamrosh"]
    },
    {
        name: "Uchchaihshravas",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Buraq", "Hydra"]
    },
    {
        name: "Manticore",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Scorpion", "Sphinx"]
    },
    {
        name: "Ramidreju",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Rattlesnake", "Weasel"]
    },
    {
        name: "Baku",
        tier: 5,
        season: null,
        categories: [],
        splice: ["Elephant", "Taweret"]
    },
    {
        name: "Cipactli",
        tier: 5,
        season: null,
        categories: [mythical],
        splice: ["Toad", "Afanc"]
    },
    {
        name: "Peluda",
        tier: null,
        season: null,
        categories: [],
        splice: ["Mishipeshu", "Rattlesnake"]
    },
    {
        name: "Pelican",
        tier: null,
        season: null,
        categories: [],
        splice: ["Albatross", "Kangaroo"]
    },
    {
        name: "Hammerhead Shark",
        tier: null,
        season: null,
        categories: [],
        splice: ["Snakehead Fish", "Praying Mantis"]
    },
    {
        name: "Great White Shark",
        tier: null,
        season: null,
        categories: [],
        splice: ["Hammerhead Shark", "Polar Bear"]
    },
    {
        name: "Tiger Shark",
        tier: null,
        season: null,
        categories: [],
        splice: ["Hammerhead Shark", "Tiger"]
    },
    {
        name: "Hummingbird",
        tier: null,
        season: null,
        categories: [],
        splice: ["Honey Bee", "Swallow"]
    },
    {
        name: "Scarab",
        tier: null,
        season: null,
        categories: [],
        splice: ["Crab", "Honey Bee"]
    },
    {
        name: "Butterfly",
        tier: null,
        season: null,
        categories: [],
        splice: ["Honey Bee", "Peacock"]
    },
    {
        name: "Megalodon",
        tier: null,
        season: null,
        categories: [],
        splice: ["Great White Shark", "Sabretooth"]
    },
    {
        name: "Ladybird",
        tier: null,
        season: null,
        categories: [],
        splice: ["Lovebird", "Scarab"]
    },
    {
        name: "Stag Beetle",
        tier: null,
        season: null,
        categories: [],
        splice: ["Scarab", "Stag"]
    },
    {
        name: "Field Grasshopper",
        tier: null,
        season: null,
        categories: [],
        splice: ["Kangaroo", "Praying Mantis"]
    },
    {
        name: "Wasp",
        tier: null,
        season: null,
        categories: [],
        splice: ["Honey Bee", "Scorpion"]
    },
    {
        name: "King Cobra",
        tier: 6,
        season: null,
        categories: [reptile],
        splice: ["Rattlesnake", "Humboldt Squid"]
    },
    {
        name: "Basking Shark",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Great White Shark", "Hippopotamus"]
    },
    {
        name: "Whale Shark",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Basking Shark", "Blue Whale"]
    },
    {
        name: "Pygmy Owl",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Hummingbird", "Owl"]
    },
    {
        name: "Policy Hawk",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Tengu", "Wild Boar"]
    },
    {
        name: "Program Bug",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Mouse", "Stag Beetle"]
    },
    {
        name: "One Trick Pony",
        tier: 6,
        season: null,
        categories: [secret, herbivore],
        splice: ["Buraq", "Loch Ness Monster"]
    },
    {
        name: "Social Butterfly",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Butterfly", "Golden Retriever"]
    },
    {
        name: "Top Dawg",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Ushi Oni", "Pug"]
    },
    {
        name: "Bleached Hyena",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Anansi", "Anansi"]
    },
    {
        name: "Cerynitis",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Golden Goose", "Peryton"]
    },
    {
        name: "Tsuchigumo",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Anansi", "Shachihoko"]
    },
    {
        name: "Anansi",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Aqrabuamelu", "Black Spider"]
    },
    {
        name: "Simurgh",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Chamrosh", "Cockatrice"]
    },
    {
        name: "Kutabe",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Ratatoskr", "Ushi Oni"]
    },
    {
        name: "Ushi Oni",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Bicorn", "Tsuchigumo"]
    },
    {
        name: "Adlet",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Bunyip", "Shug Monkey"]
    },
    {
        name: "Kraken",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Lusca", "Shen"]
    },
    {
        name: "Lusca",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Megalodon", "Octopus"]
    },
    {
        name: "Raiju",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Electric Eel", "Ramidreju"]
    },
    {
        name: "Behemoth",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Baku", "Kutabe"]
    },
    {
        name: "Quetzalcoatl",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Cockatrice", "Peacock"]
    },
    {
        name: "Tarasque",
        tier: 6,
        season: null,
        categories: [],
        splice: ["Kirin", "Manticore"]
    }
];

let animalsCategories = [];
let animalsSplice = [];
for (let animal of animals) {
    const { name, categories, splice } = animal;
    for (let i in categories) {
        animalsCategories.push({ animal: name, category: categories[i] });
    }
    if (splice) {
        animalsSplice.push({
            animal: name,
            splice1: splice[0],
            splice2: splice[1]
        });
    }
}

module.exports = { animals, animalsCategories, animalsSplice };
