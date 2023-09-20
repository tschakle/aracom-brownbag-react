import { FC, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutlined } from '@heroicons/react/24/outline'

type FoodCardProps = {
    name: string
    description?: string
    price: string
}

const FoodCard: FC<FoodCardProps> = ({ name, description = 'Mit allem!', price }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <div className="w-96 p-4 flex items-center justify-center bg-gray-800 border rounded flex-col relative">
            <button
                className="absolute right-0 top-0 p-2"
                onClick={() => setIsFavorite(!isFavorite)}
            >
                {isFavorite ? (
                    <StarIcon className="h-8 w-8 text-yellow-500" />
                ) : (
                    <StarIconOutlined className="h-8 w-8 text-yellow-500" />
                )}
            </button>
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            <p className="text-white mt-1">{description}</p>
            <p className="text-white mt-3 text-xl font-bold">{`Preis: ${price}`}</p>
        </div>
    )
}

export default FoodCard
