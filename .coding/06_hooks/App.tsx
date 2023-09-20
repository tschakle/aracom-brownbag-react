import React, { useEffect, useState } from 'react'
import './App.css'
import { foodList } from './mocks/food'
import FoodCard from './components/FoodCard'
import useToggle from './hooks/useToggle'

function App() {
    const [remainingSeconds, setRemainingSeconds] = useState(3600)
    const { toggle, active } = useToggle()

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingSeconds(prevState => prevState - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <main className="flex items-center justify-center h-full min-h-screen bg-gray-700 p-5 flex-col">
            <button onClick={toggle}>
                <p
                    className={`${!active ? 'text-white' : 'text-red-500'} text-xl mb-5`}
                >{`Zeit zum Bestellen: ${remainingSeconds} Sekunden!`}</p>
            </button>
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
