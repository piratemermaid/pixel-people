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

module.exports = [
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
    }
    // ,{ name: "", tier: 2, season: null, categories: [], splice: [] }
];
