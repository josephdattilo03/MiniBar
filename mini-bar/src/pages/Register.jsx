import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"


export default function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    async function submit() {

        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password)
            navigate('/')

        } catch (err) {
            setAlert(err.message)
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='shadow bg-light p-5 d-flex flex-column text-center'>
                <h1>MiniBar</h1>
                <div className='mx-5 d-flex flex-row'>
                    <form className="mt-3 d-flex flex-column gap-3">
                        <div className="form-grou text-start">
                            <label className="mb-2" htmlFor="exampleInputEmail1">Email address</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group text-start">
                            <label className="mb-2" htmlFor="exampleInputPassword1">Password</label>
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group text-start">
                            <label className="mb-2" htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />

                        </div>
                        <p className="text-danger">{alert}</p>
                        <button onClick={(e) => {e.preventDefault(); submit()}} type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
