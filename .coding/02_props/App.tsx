import React from 'react'
import './App.css'
import FoodCard from './components/FoodCard'

function App() {
    return (
        <main className="flex items-center justify-center h-screen bg-gray-700 p-5">
            <FoodCard name="Döner" price="6,40 €" />
        </main>
    )
}

export default App
