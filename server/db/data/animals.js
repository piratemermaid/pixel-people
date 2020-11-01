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
        name: "Belgian Shepard",
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
        categories: [],
        splice: ["Blue Whale", "Panda"]
    },
    {
        name: "Owl",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Chicken", "Bat"]
    },
    {
        name: "Macaw",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Parrot", "Parrot"]
    },
    {
        name: "Toucan",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Parrot", "Rhinoceros"]
    },
    {
        name: "Eagle",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Lion", "Parrot"]
    },
    {
        name: "Raccoon",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Zebra", "Red Panda"]
    },
    {
        name: "Red Panda",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Panda", "Fox"]
    },
    {
        name: "Goat",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Donkey", "Horse"]
    },
    {
        name: "Sheep",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Goat", "Poodle"]
    },
    {
        name: "Mouse",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Squirrel", "Snail"]
    },
    {
        name: "Spider",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Snake", "Mouse"]
    },
    {
        name: "Bat",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Owl", "Mouse"]
    },
    {
        name: "Dodo",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Chicken", "Unicorn"]
    },
    {
        name: "Dragon",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Unicorn", "Snake"]
    },
    {
        name: "Stag",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Moose", "Bull"]
    },
    {
        name: "Trout",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Mouse", "Blue Whale"]
    },
    {
        name: "Turkey",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Chicken", "Pig"]
    },
    {
        name: "Squirrel",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Mouse", "Fox"]
    },
    {
        name: "Flamingo",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Duck", "Fox"]
    },
    {
        name: "Otter",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Trout", "Squirrel"]
    },
    {
        name: "Sea Lion",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Lion", "Otter"]
    },
    {
        name: "Hyena",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Lion", "Wolf"]
    },
    {
        name: "Crocodile",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Snake", "Chameleon"]
    },
    {
        name: "Platypus",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Duck", "Eurasian Beaver"]
    },
    {
        name: "Fearful Owl",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Owl", "Panther"]
    },
    {
        name: "Black Mare",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Horse", "Panther"]
    },
    {
        name: "Raven",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Toucan", "Bat"]
    },
    {
        name: "Black Spider",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Spider", "Bat"]
    },
    {
        name: "Chocolate Rabbit",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Rabbit", "Gummy Bear"]
    },
    {
        name: "Mule Deer",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Donkey", "Mousedeer"]
    },
    {
        name: "Golden Goose",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Donkey", "Duck"]
    },
    {
        name: "White Bass",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Harp Seal", "Trout"]
    },
    {
        name: "Mute Swan",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Lovebird", "Duck"]
    },
    {
        name: "Lovebird",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Parrot", "Flamingo"]
    },
    {
        name: "Eurasian Beaver",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Mouse", "Platypus"]
    },
    {
        name: "French Angelfish",
        tier: 2,
        season: null,
        categories: [],
        splice: ["White Bass", "Mute Swan"]
    },
    {
        name: "Arctic Fox",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Fox", "Polar Bear"]
    },
    {
        name: "Beluga Whale",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Blue Whale", "Polar Bear"]
    },
    {
        name: "Chinstrap Penguin",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Penguin", "Penguin"]
    },
    {
        name: "Reindeer",
        tier: 2,
        season: null,
        categories: [],
        splice: ["Moose", "Moose"]
    },
    {
        name: "Pegasus",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Horse", "Eagle"]
    },
    {
        name: "Gryphon",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Lion", "Eagle"]
    },
    {
        name: "Phoenix",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Dragon", "Flamingo"]
    },
    {
        name: "Hydra",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Snake", "Cerberus"]
    },
    {
        name: "Cerberus",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Wolf", "Direwolf"]
    },
    {
        name: "Oriental Dragon",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Dragon", "Panda"]
    },
    {
        name: "Loch Ness Monster",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Orca", "Snake"]
    },
    {
        name: "Yeti",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Polar Bear", "Gorilla"]
    },
    {
        name: "Drop Bear",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Koala", "Red Panda"]
    },
    {
        name: "Merlion",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Lion", "Trout"]
    },
    {
        name: "Rocket Cat",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Tom Cat", "Oriental Dragon"]
    },
    {
        name: "Cthulu",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Octopus", "Dragon"]
    },
    {
        name: "Sabertooth",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Tiger", "Elephant"]
    },
    {
        name: "Direwolf",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Wolf", "Tiger"]
    },
    {
        name: "Sphinx",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Lion", "Chimpanzee"]
    },
    {
        name: "Wooly Mammoth",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Elephant", "Sheep"]
    },
    {
        name: "Chimera",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Lion", "Goat"]
    },
    {
        name: "Chupacabra",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Panther", "Crocodile"]
    },
    {
        name: "Hippogryph",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Goat", "Eagle"]
    },
    {
        name: "Peacock",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Macaw", "Flamingo"]
    },
    {
        name: "Gecko",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Crocodile", "Chameleon"]
    },
    {
        name: "Porcupine",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Raccoon", "Tortoise"]
    },
    {
        name: "Carp",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Trout", "Macaw"]
    },
    {
        name: "Pangolin",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Tortoise", "	Squirrel"]
    },
    {
        name: "Buffalo",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Bull", "	Brown Bear"]
    },
    {
        name: "Snakehead Fish",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Trout", "Snake"]
    },
    {
        name: "Weasel",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Snake", "Squirrel"]
    },
    {
        name: "Ant",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Spider", "Stag"]
    },
    {
        name: "Mole",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Ant", "Squirrel"]
    },
    {
        name: "Rattlesnake",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Snake", "Spider"]
    },
    {
        name: "Spider Monkey",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Spider", "Chimpanzee"]
    },
    {
        name: "Ostrich",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Turkey", "Cheetah"]
    },
    {
        name: "Tasmanian Devil",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Hyena", "Koala"]
    },
    {
        name: "Lar Gibbon",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Gorilla", "Red Panda"]
    },
    {
        name: "Three Toed Sloth",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Snail", "Koala"]
    },
    {
        name: "Pigeon",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Mouse", "Parrot"]
    },
    {
        name: "Black Rhinoceros",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Rhinoceros", "Black Mare"]
    },
    {
        name: "Flying Fox",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Squirrel", "Bat"]
    },
    {
        name: "Sperm Whale",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Orca", "Bull"]
    },
    {
        name: "Humpback Whale",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Dolphin", "Blue Whale"]
    },
    {
        name: "Puffin",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Penguin", "Toucan"]
    },
    {
        name: "Wild Boar",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Pig", "Bull"]
    },
    {
        name: "Tarantula",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Spider", "Gorilla"]
    },
    {
        name: "Mongoose",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Squirrel", "Tiger"]
    },
    {
        name: "Opossum",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Koala", "Squirrel"]
    },
    {
        name: "Pygmy Hippo",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Hippo", "Pig"]
    },
    {
        name: "Python",
        tier: 3,
        season: null,
        categories: [],
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
        categories: [],
        splice: ["Donkey", "Elephant"]
    },
    {
        name: "Cold Turkey",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Turkey", "Arctic Fox"]
    },
    {
        name: "Sausage Dog",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Corgi", "Giraffe"]
    },
    {
        name: "Chamrosh",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Belgian Sheperd", "Eagle"]
    },
    {
        name: "Bicorn",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Cow", "Panther"]
    },
    {
        name: "Sha",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Wolf", "Crocodile"]
    },
    {
        name: "Capricornus",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Goat", "French Angelfish"]
    },
    {
        name: "Ratatoskr",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Narwhal", "Squirrel"]
    },
    {
        name: "Afanc",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Crocodile", "Eurasian Beaver"]
    },
    {
        name: "Dolphin",
        tier: 3,
        season: null,
        categories: [],
        splice: ["Orca", "Sea Lion"]
    },
    {
        name: "Electric Eel",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Snake", "Stingray"]
    },
    {
        name: "Stingray",
        tier: 4,
        season: null,
        categories: [],
        splice: ["Scorpion", "Trout"]
    }
    // { name: "", tier: 4, season: null, categories: [], splice: ["", ""] },
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
