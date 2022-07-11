import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userRegister } from '../actions/Action'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')

    let data = {
        name: name,
        email: email,
        password: password,
        number: number
    }

    const submit = () => {
        dispatch(userRegister(data))
        navigate('/Login')
    }

    return (
        <div className="container">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name : </label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address : </label>
                <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Contact Number : </label>
                <input type="number" className="form-control" id="exampleInputEmail1" onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password : </label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => submit()}>Submit</button>
        </div>
    )
}

export default Register
