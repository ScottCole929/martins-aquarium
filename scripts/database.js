
const database = {
    fish: [
        {
            image: "https://picturefishai.com/wiki-image/1080/153427944230879256.jpeg",
            species: "Species: Southern Saratoga",
            length: 10,
            name: "Name: Bruce Almighty",
            harvest: "Harvested in Brisbane, Australia",
            food: "They feed on crayfish, fish, frogs, and aquatic and terrestrial insects",
        },
        {
            image: "https://robbreport.com/wp-content/uploads/2019/01/shutterstock_755489131.jpg",
            species: "Species: Asian Arowana",
            length: 9,
            name: "Name: Marlon Brando",
            harvest: "Harvested in Pattaya City, Thailand",
            food: "They feed on crickets, locusts, giant mealworms, and wax moth larvae",
        },
        {
            image: "https://scx2.b-cdn.net/gfx/news/2021/turnsoutaltr.jpg",
            species: "Species: Convict Cichild",
            length: 6,
            name: "Name: Jailbird",
            harvest: "Harvested in San Miguel, El Salvador",
            food: "They feed on small insects, worms, plant matter, and algae",
        },
        {
            image: "https://aquahuna.com/cdn/shop/files/ZebraPleco_grande.jpg?v=1687996301",
            species: "Species: Zebra Pieco",
            length: 4,
            name: "Name: Stripey McStriperton",
            harvest: "Harvested in the Brazilian Xingu River",
            food: "They feed on algae, detritus (organic matter), seeds, and other small morsels",
        },
        {
            image: "https://azgardens.com/wp-content/uploads/2017/06/Black-Ghost-Knifefish.jpg",
            species: "Species: Black Ghost Knifefish",
            length: 7,
            name: "Name: King Arthur",
            harvest: "Harvested in Asunción, Paraguay",
            food: "They feed on insects, small crustaceans and fish in the wild",
        },
        {
            image: "https://aquaticarts.com/cdn/shop/products/Indian-Pea-Puffer-Small-1.jpg?v=1633021224",
            species: "Species: Dwarf Puffer Fish",
            length: 5,
            name: "Name: John Cena",
            harvest: "Harvested in Gujarat, India",
            food: "They feed on newly hatched brine shrimp, grindal worms, and occasionally larger worms like blackworms and whiteworms",
        },
    ],
    tips: [
        {
            title: "Use a proper filter",
            description: "Make sure the filter is correct",
        },
        {
            title: "Change the water regularly",
            description: "Make sure you're changing the water",
        },
        {
            title: "Feed fish correctly",
            description: "Make sure to feed the fish the right way",
        },
        {
            title: "Take time to clean the tank",
            description: "Make sure to maintain the cleanliness of the tank",
        },
        {
            title: "Clean the outside of the tank",
            description: "Make sure to also clean the outside of your fish tank",
        },
    ],
    locations: [
        {
            name: "Doha, Qatar",
            description: "Exciting",
        },
        {
            name: "Marrakesh, Morocco",
            description: "Awesome",
        },
        {
            name: "Dubrovnik, Croatia",
            description: "Terrific",
        },
        {
            name: "Istanbul, Turkey",
            description: "Fantastic",
        },
        {
            name: "Fuerteventura, Canary Islands",
            description: "Amazing",
        },
    ],
    quotes: [
        {
            advice: "'Get to the airport early!' -Helen E.",
            description: "Don't be late",
        },
        {
            advice: "'Don't fall in the water catching the fish.' -Kevin Q.",
            description: "Stay dry",
        },
        {
            advice: "'Make sure you actually have caught the fish you came for.' -Justin M.",
            description: "Don't be wrong",
        },
        {
            advice: "'The early bird catches the... fish!' -Tristan P.",
            description: "Be early",
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
        return database.locations.map(locations => ({...locations}))
}
