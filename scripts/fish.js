// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div><img  class="fish-img" src="${fish.image}" /></div>
            <div class="fish-name">${fish.name}</div>
            <div class="fish-species">${fish.species}</div>
            <div class="fish-length">Length: ${fish.length} inches</div>
            <div class="harvest-location">${fish.harvest}</div>
            <div class="fish-food">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
const allFish = getFish()

export const mostHolyFish = () => {
    const holyFish = []

    for (const threefish of allFish) {
        if (threefish.length % 3 === 0) {
            holyFish.push(threefish)
        }
    }
    return holyFish
}


export const soldierFish = () => {
    const soldiers = []

    for (const fivefish of allFish) {
        if (fivefish.length % 5 === 0) {
            soldiers.push(fivefish)
        }
    }
    return soldiers
}

export const regularFish = () => {
    const regularFish = []

    for (const remainderfish of allFish) {
        if (remainderfish.length % 3 != 0 && remainderfish.length % 5 != 0) {
            regularFish.push(remainderfish)
        }
    }
    return regularFish
}