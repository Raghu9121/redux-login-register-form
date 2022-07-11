import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const data = useSelector(state => state?.user)

  const submit = () => {
    if (data !== undefined) {
      const newData = {
        email: email,
        password: password,
      }
      let value = data.find((item) => (newData.email === item.email) && (newData.password === item.password))
      if (value) {
        navigate('/User')
      }
      else {
        alert("Please enter a valid e-mail or password..")
      }
    }
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address : </label>
        <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password : </label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={submit} >Submit</button>
    </div>
  )
}

export default Login
