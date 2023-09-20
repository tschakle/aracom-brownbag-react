import React, { FC, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutlined } from '@heroicons/react/24/outline'

type FavoriteButtonProps = {}

const FavoriteButton: FC<FavoriteButtonProps> = ({}) => {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <button className="absolute right-0 top-0 p-2" onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
                <StarIcon className="h-8 w-8 text-yellow-500" />
            ) : (
                <StarIconOutlined className="h-8 w-8 text-yellow-500" />
            )}
        </button>
    )
}

export default FavoriteButton
