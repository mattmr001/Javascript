
    // Make data config
    const jsonData = require('./dino.json');
    let dinoData = Object.values(jsonData.Dinos)

    // Create Dino Constructor
    function Dino (data) {
        // class factory
        this.name = data.species,
        this.weight = data.weight,
        this.height = data.height,
        this.diet = data.diet,
        this.where = data.where,
        this.when = data.when,
        this.fact = data.fact
    }

    let dinosaurs = []
    for (const i in dinoData) {
        dinosaurs[i] = new Dino(dinoData[i])
    }
    console.log("dinosaur list:")
    console.log(dinosaurs)

    // Create Human Object
    function Human (weight, height, diet) {
        this.weight = weight,
        this.height = height,
        this.diet = diet
    }

    // Use IIFE to get human data from form
    (function getHumanData(){
        const feet = document.querySelector('#feet')
        const inches = document.querySelector('#inches')
        const weight = document.querySelector('#weight')
        const diet = document.querySelector('#diet')

        const humanFragment = document.createDocumentFragment()

        const cardWrapper = document.createElement('div')
        cardWrapper.classList.add('card_wrapper')

        const feetPara = document.createElement('p')
        feetPara.classList.add('card__data')
        cardWrapper.appendChild(feetPara)
        const inchesPara = document.createElement('p')
        inchesPara.classList.add('card__data')
        cardWrapper.appendChild(inchesPara)
        const weightPara = document.createElement('p')
        weightPara.classList.add('card__data')
        cardWrapper.appendChild(weightPara)
        const dietPara = document.createElement('p')
        dietPara.classList.add('card__data')
        cardWrapper.appendChild(dietPara)

        const grid = document.querySelector('#grid')
        humanFragment.appendChild(cardWrapper)
        grid.appendChild(humanFragment)

      }
    )();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
