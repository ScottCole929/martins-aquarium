import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { FishList } from './fish.js'


import { getTips } from './database.js'

const allTips = getTips()

for (const tips of allTips) {
    console.log(tips)
}

import { getLocations } from './database.js'

const allLocations = getLocations()

for (const location of allLocations) {
    console.log(location)
}


import { LocationsList } from './locations.js'

const locationsHTMLElement = document.querySelector(".harvesting")

locationsHTMLElement.innerHTML = LocationsList()


import { TipList } from './tips.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?


    
    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */


const tipsHTMLElement = document.querySelector(".tank-tips")

tipsHTMLElement.innerHTML = TipList()


const fishHTMLElement = document.querySelector("#container")

fishHTMLElement.innerHTML = FishList()

import { mostHolyFish } from './fish.js'
import { soldierFish } from './fish.js'
import { regularFish } from './fish.js'

console.log(mostHolyFish())
console.log(soldierFish())
console.log(regularFish())
