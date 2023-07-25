
import { getLocations } from './database.js'

export const LocationsList = () => {
    // Invoke the function that you imported from the database module
    const locales = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationsList">'

    // Create HTNL representations of each fish here
    for (const place of locales) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location-tips">
        <div class="tips__title"><ul><li>${place.name}</li></ul></div>
        <div class="tips__description"><blockquote>${place.description}</blockquote></div>
    </section>
`
    }
    htmlString += `</article>`

    return htmlString
}