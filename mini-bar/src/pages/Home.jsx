import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DrinkService from '../services/drink.service'

export default function Home(props) {
    const [drinks, setDrinks] = useState(null)
    const navigate = useNavigate()

    async function fetch() {
        try {
            const output = await DrinkService.fetchRecipes(props.userId)
            setDrinks(output)
            console.log(drinks)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
        <div className='d-flex justify-content-center align-items-center vh-100 flex-column'>
        <div className='bg-light p-3 shadow'>
        <h1 className='text-center mb-5'>Click the plus button below to add a drink</h1>
            <div onClick={() => {navigate('/drink')}} className='border border-primary rounded p-5'>
                <h1 className='p-5 text-primary text-center'>+</h1>
            </div>
            <div className='d-flex flex-row mt-5 flex-wrap'>
            { drinks ? drinks.map((drink, idx) => {
                return (
                    <div className='m-3 border border-primary p-3 rounded' key={idx}>
                        <h1>{drink.name}</h1>
                        <p>{drink.description}</p>
                    </div>
                )
            }) : <></>}
            </div>
            </div>
        </div>
        </div>
    )
}

