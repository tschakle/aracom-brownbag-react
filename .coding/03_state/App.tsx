import React from 'react'
import './App.css'
import { foodList } from './mocks/food'
import FoodCard from './components/FoodCard'

function App() {
    return (
        <main className="grid items-center justify-center h-screen bg-gray-700 p-5">
            {foodList.map(food => {
                return (
                    <FoodCard
                        key={`${food.name}_${food.description}`}
                        name={food.name}
                        description={food.description}
                        price={food.price}
                    />
                )
            })}
        </main>
    )
}

export default App
