import React from 'react'
import { useParams } from 'react-router-dom'
import { foodList } from '../../mocks/food'
import FoodCard from '../../components/FoodCard'

function FoodDetail() {
    const { id } = useParams()
    return (
        <main className="flex items-center justify-center h-full min-h-screen bg-gray-700 p-5 flex-col">
            <div className="grid gap-10">
                {foodList
                    .filter(f => id && f.id === id)
                    .map(food => {
                        return (
                            <FoodCard
                                key={`${food.name}_${food.description}`}
                                name={food.name}
                                description={food.description}
                                price={food.price}
                            />
                        )
                    })}
            </div>
        </main>
    )
}

export default FoodDetail
