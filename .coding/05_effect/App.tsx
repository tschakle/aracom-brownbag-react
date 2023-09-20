import React, { useEffect, useState } from 'react'
import './App.css'
import { foodList } from './mocks/food'
import FoodCard from './components/FoodCard'

function App() {
    const [remainingSeconds, setRemainingSeconds] = useState(3600)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('interval')
            setRemainingSeconds(prevState => prevState - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <main className="flex items-center justify-center h-full min-h-screen bg-gray-700 p-5 flex-col">
            <p className="text-white text-xl mb-5">{`Zeit zum Bestellen: ${remainingSeconds} Sekunden!`}</p>
            <div className="grid gap-10">
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
            </div>
        </main>
    )
}

export default App
