
const jsonData = {
    "Dinos": [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
]
}

// const jsonData = require('./dino.json');

// 1. Create Animal Constructor
class Animal {
    constructor (data) {
        this.species = data.species,
          this.weight = data.weight,
          this.height = data.height,
          this.diet = data.diet
    }

    getImage() {
        return (
          "./images/" + this.species.toLowerCase().split(" ").join(" ") + ".png"
        );
    }
}

class Human extends Animal{
    constructor (data) {
        super(data);
        this.name = data.name;
    }
}

class Dinosaur extends Animal{
    constructor (data) {
        super(data);
        this.facts = [data.fact];
    }

    compareWeight (comparisonAnimal) {
        if (this.weight >= comparisonAnimal.weight){
            const difference = this.weight - comparisonAnimal.weight
            this.facts.push(`The ${this.species} weighs ${difference} lbs more than ${comparisonAnimal.name}`)
        }
        else if (this.weight === comparisonAnimal.weight) {
            this.facts.push(`The ${this.species} weighs ${this.height} lbs and is the same weight as ${comparisonAnimal.name}`)
        }
        else {
            const difference = comparisonAnimal.weight - this.weight
            this.facts.push(`The ${this.species} weighs ${difference} lbs less than ${comparisonAnimal.name}`)
        }
    }

    compareHeight (comparisonAnimal) {
        if (this.height > comparisonAnimal.height){
            const difference = this.height - comparisonAnimal.height
            this.facts.push(`The ${this.species} is ${difference} inches larger than ${comparisonAnimal.name}`)
        }
        else if (this.height === comparisonAnimal.height) {
            this.facts.push(`The ${this.species} is ${this.height} inches tall and is the same height as ${comparisonAnimal.name}`)
        }
        else {
            const difference = comparisonAnimal.height - this.height
            this.facts.push(`The ${this.species} is ${difference} inches smaller than ${comparisonAnimal.name}`)
        }
    }

    compareDiet (comparisonAnimal) {
        if (this.diet != comparisonAnimal.diet){
            this.facts.push(`The ${this.species} is an ${this.diet} where as ${comparisonAnimal.name} is a ${comparisonAnimal.diet}`)
        } else {
            this.facts.push(`Both Animals are ${this.diet}`)
        }
    }

}

// 2. Create Dino Objects
// function will instantiate a dinosaur animal
// for every child object in our dinoData.dinos Array
// and append it to the global animals array
function createDinosaurAnimals (dinoData) {
    for (const i in dinoData) {
        const Dino = new Dinosaur(dinoData[i])
        Dino.name = 'Dinosaur'
        // Dino.facts.push(`The ${dinoData[i].species} was located in ${dinoData[i].where}.`)
        // Dino.facts.push(`The ${dinoData[i].species} existed during ${dinoData[i].when} period.`)
        dinosaurs.push(Dino)
    }
}


// 3. Create Human Object
function buildHumanData () {
    const name = document.querySelector('#name').value
    const weight = document.querySelector('#weight').value
    const feet = document.querySelector('#feet').value
    const inches = document.querySelector('#inches').value
    const diet = document.querySelector('#diet').value

    let humanData = {}
    humanData['species'] = `Human`
    humanData['weight'] = weight
    humanData['height'] = feet * 12 + inches
    humanData['diet'] = diet
    humanData['name'] = name
    return humanData
}

function setDinosaurFacts (dinosaurs, comparisonAnimal) {
    dinosaurs.forEach(dinosaur => dinosaur.compareHeight(comparisonAnimal))
    dinosaurs.forEach(dinosaur => dinosaur.compareWeight(comparisonAnimal))
    dinosaurs.forEach(dinosaur => dinosaur.compareDiet(comparisonAnimal))
    dinosaurs.forEach(dinosaur => shuffleArray(dinosaur.facts))
}

function generateDOMTiles (animals) {
    const gridFragment = document.createDocumentFragment()

    for (const animal of animals) {

        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')

        switch (animal.species) {
            case 'Human':
                const humanParagraph = document.createElement('p')
                humanParagraph.classList.add('card__data')
                humanParagraph.innerHTML = `${animal.species} name: ${animal.name}`
                gridItem.appendChild(humanParagraph)
                const humanImg = document.createElement('img')
                humanImg.src = `${animal.getImage()}`
                gridItem.appendChild(humanImg)
                break;
            case 'Pigeon':
                const pigeonParagraph = document.createElement('p')
                pigeonParagraph.classList.add('card__data')
                pigeonParagraph.innerHTML = `${animal.species}: All birds are dinosaurs.`
                const pigeonImg = document.createElement('img')
                pigeonImg.src = `${animal.getImage()}`
                gridItem.appendChild(pigeonParagraph)
                gridItem.appendChild(pigeonImg)
                break;
            default:
                let dinoParagraph = document.createElement('p')
                dinoParagraph.classList.add('card__data')
                dinoParagraph.innerHTML = `${animal.species}: ${animal.facts[0]}.`

                let dinoImg = document.createElement('img')
                dinoImg.src = `${animal.getImage()}`
                gridItem.appendChild(dinoParagraph)
                gridItem.appendChild(dinoImg)
        }
        gridFragment.appendChild(gridItem)
    }
    const grid = document.querySelector('#grid')
    grid.appendChild(gridFragment)

}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// First, we instantiate a new animal named Dinosaur for each entry in our dinosaur data.
// we then append each dinosaur to our list named 'dinosaurs'
let dinosaurs = []
let dinoData = Object.values(jsonData.Dinos)
createDinosaurAnimals(dinoData)

// Use IIFE to get human data from form
const btn = document.querySelector('#btn')
btn.addEventListener('click', (function () {
    return function () {

        // instantiate a new Animal named Human and pass in data to configure its properties.
        const humanData = buildHumanData()
        const HumanObj = new Human(humanData)

        // Then for every dinosaur in our dinosaur list, we extend it's
        // Animal prototype by composing three new methods for it.
        // Each of these methods will compare the properties of a dinosaur
        // to that of a human in some way.
        setDinosaurFacts(dinosaurs, HumanObj)

        // Shuffle the order of the dinosaurs in the array so the view is different each time user loads the page.
        shuffleArray(dinosaurs)

        // We then Create new array named Animals from our dinosaurs array. After this we
        //  add our human object to the center of this new animal array.  We are doing this
        //  as we are preparing to pass the items in our animal list into a 3x3 tiled grid in our view.
        //  At index position 4 the human will be centered in our grid.
        const animals = [...dinosaurs]
        animals.splice( 4,   // At index 4,
          0,   // delete zero elements,
          HumanObj,  // and insert the object Human,
        );

        // Add tiles to DOM
        generateDOMTiles(animals)

        // Remove form from screen
        const form = document.querySelector('#dino-compare')
        form.style.display = "none";
    };

})());
