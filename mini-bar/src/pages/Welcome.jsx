

import { useNavigate } from 'react-router-dom'
import rocksGlass from '../assets/rocksGlass.svg'


export default function Welcome() {
    const navigate = useNavigate()
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='shadow bg-light p-5 d-flex flex-column text-center'>
                <h1>MiniBar</h1>
                <img className='sm' src={rocksGlass}></img>
                <p className='mb-5'>A pocket sized webapp to make drinks</p>
                <div className='mx-5 d-flex'>
                    <button onClick={() => {navigate('/login')}} className='btn btn-lg btn-primary mx-2'>Login</button>
                    <button className='btn btn-lg btn-outline-primary mx-2'>Join</button>
                </div>
            </div>
        </div>
    )
}
