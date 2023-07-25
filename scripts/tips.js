// Import the function that returns a copy of the tips array
import { getTips } from './database.js'

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tankTips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'

    // Create HTNL representations of each fish here
    for (const tip of tankTips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tank-tips">
            <div class="tips__title"><ul><li>${tip.title}</li></ul></div>
            <div class="tips__description"><blockquote>${tip.description}</blockquote></div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}