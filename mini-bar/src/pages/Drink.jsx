import React, { useState } from 'react'

export default function Drink() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


    async function sendDrink() {
        
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='shadow bg-light p-5 d-flex flex-column text-center'>
                <h1>MiniBar</h1>
                <p>Fill in the basic information below.</p>
                <div className='mx-5 d-flex flex-column'>
                    <div className="form-grou text-start mb-2">
                        <label className="mb-2" htmlFor="exampleInputEmail1">Name</label>
                        <input onChange={(e) => {setName(e.target.value)}} value={name} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Margarita...?" />
                        <small id="emailHelp" className="form-text text-muted">Enter the name of your drink.</small>
                    </div>
                    <div className="form-group text-start">
                        <label className="mb-2" htmlFor="exampleInputPassword1">Recipe</label>
                        <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder="Add 1 lime..." />
                    </div>
                    <div className=' mt-5 px-5 border border-primary'>
                        <h1 className='text-primary'>+</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
