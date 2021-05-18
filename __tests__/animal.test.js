import { Animal } from '../app.js'

let humanData = {
  'species': 'human',
  'weight': 150,
  'height': 164,
  'diet': 'omnivore',
}

const dinoData1 = {
  "species": "Tyrannosaurus Rex",
  "weight": 11905,
  "height": 144,
  "diet": "carnivor",
  "where": "North America",
  "when": "Late Cretaceous",
  "fact": "The largest known skull measures in at 5 feet long."
}

const dinoData2 = {
  "species": "Tyrannosaurus Rex",
  "weight": 146,
  "height": 146,
  "diet": "omnivore",
  "where": "North America",
  "when": "Late Cretaceous",
  "fact": "The largest known skull measures in at 5 feet long."
}

const dinoData3 = {
  "species": "Tyrannosaurus Rex",
  "weight": 146,
  "height": 146,
  "diet": "omnivore",
  "where": "North America",
  "when": "Late Cretaceous",
  "fact": "The largest known skull measures in at 5 feet long."
}

const human = new Animal(humanData)
const dinosaur1 = new Animal(dinoData1)
const dinosaur2 = new Animal(dinoData2)
const dinosaur3 = new Animal(dinoData3)


describe('Testing that the human objects property species returns the value human' , () => {
  test('Testing the human.species', () => {
    expect(human.species).toBe('human')
    console.log(human.species)
  })
})

describe('Testing that the human.compareWeight less than condition is working', () => {
  test('Testing the human.compareWeight method', () => {
    expect(human.compareWeight(dinosaur1)).toBe("human weighs 11755 lbs less than Tyrannosaurus Rex")
  })
})

describe('Testing that the human.compareWeight greater than condition is working', () => {
  test('Testing the human.compareWeight method', () => {
    expect(human.compareWeight(dinosaur2)).toBe("human weighs 4 lbs more than Tyrannosaurus Rex")
  })
})

describe('Testing that the human.compareHeight less than condition is working', () => {
  test('Testing the human.compareHeight method', () => {
    expect(human.compareHeight(dinosaur1)).toBe("human is 20 inches larger than Tyrannosaurus Rex")
  })
})


describe('Testing that the human.compareHeight greater than condition is working', () => {
  test('Testing the human.compareHeight method', () => {
    expect(human.compareHeight(dinosaur2)).toBe("human is 18 inches larger than Tyrannosaurus Rex")
  })
})

describe('Testing that the human.compareDiet method evaluates to different diet types', () => {
  test('Testing the human.compareDiet method', () => {
    expect(human.compareDiet(dinosaur1)).toBe("human is an omnivore where as Tyrannosaurus Rex is a carnivor")
  })
})

describe('Testing that the human.compareDiet method check evaluates to the same', () => {
  test('Testing the human.compareDiet method', () => {
    expect(human.compareDiet(dinosaur2)).toBe("Both Animals are omnivore")
  })
})
