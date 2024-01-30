import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [drinks, setDrinks] = ["e"]
    const navigate = useNavigate()
    return (
        <div>
        <div className='container d-flex justify-content-center align-items-center vh-100 flex-column'>
        <h1 className='text-center mb-5'>Click the plus button below to add a drink</h1>
            <div onClick={() => {navigate('/drink')}} className='border border-primary rounded p-5'>
                <h1 className='p-5 text-primary'>+</h1>
            </div>
        </div>
        </div>
    )
}

