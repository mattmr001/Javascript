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


class Animal {
  constructor (data) {
    this.species = data.species,
    this.weight = data.weight,
    this.height = data.height,
    this.diet = data.diet
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

function createDinosaurAnimals (dinoData) {
  for (const i in dinoData) {
    const Dino = new Dinosaur(dinoData[i])
    Dino.facts.push(`location: ${dinoData[i].where}.`)
    Dino.facts.push(`Time period: ${dinoData[i].when}.`)
    dinosaurs.push(Dino)
  }
}

function addNewDinosaurFacts (dinosaurs, comparisonAnimal) {
  dinosaurs.forEach(dinosaur => dinosaur.compareHeight(comparisonAnimal))
  dinosaurs.forEach(dinosaur => dinosaur.compareWeight(comparisonAnimal))
  dinosaurs.forEach(dinosaur => dinosaur.compareDiet(comparisonAnimal))
}


// 3. Create Human Object
// function buildHumanData () {
//   const name = document.querySelector('#name').value
//   const weight = document.querySelector('#weight').value
//   const feet = document.querySelector('#feet').value
//   const inches = document.querySelector('#inches').value
//   const diet = document.querySelector('#diet').value
//
//   let humanData = {}
//   humanData['name'] = `Human`
//   humanData['species'] = name
//   humanData['weight'] = weight
//   humanData['height'] = feet * 12 + inches
//   humanData['diet'] = diet
//   humanData['fact'] = [`This human is called ${name} by other humans.`]
//
//   return humanData
// }


let dinosaurs = []
let dinoData = Object.values(jsonData.Dinos)
createDinosaurAnimals(dinoData)

// const humanData = buildHumanData()

let humanData = {
  'species': 'human',
  'weight': 150,
  'height': 164,
  'diet': 'omnivore',
  'name': 'matt',
}

const HumanObj = new Human(humanData)
addNewDinosaurFacts(dinosaurs, HumanObj)

const animals = [...dinosaurs]
animals.splice( 4,   // At index 4,
  0,   // delete zero elements,
  HumanObj,  // and insert the object Human,
);


for (const animal of animals) {
  switch (animal.species) {
    case 'human':
      console.log(`${animal.species} name: ${animal.name}`);
      break;
    case 'Pigeon':
      console.log(`${animal.species}: All birds are dinosaurs.\n\n`);
      break;
    default:
      console.log(`${animal.species}: ${animal.facts[0]}`);
  }
}
