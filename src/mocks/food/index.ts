type FoodProps = {
    name: string
    description?: string
    price: string
}

export const foodList: FoodProps[] = [
    {
        name: 'Döner',
        description: 'mit allem, Cocktailsauce und scharf',
        price: '6,40€',
    },
    {
        name: 'Döner',
        description: 'mit allem, Cocktailsauce',
        price: '6,40€',
    },
    {
        name: 'Falafel-Döner',
        description: 'ohne Zwiebeln, Cocktailsauce',
        price: '7,20€',
    },
    {
        name: 'Dürüm',
        description: 'ohne Tomate, scharf',
        price: '7,20€',
    },
    {
        name: 'Dürüm',
        description: 'Gemüsekebab',
        price: '6,40€',
    },
]
