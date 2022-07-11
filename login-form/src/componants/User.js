import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const User = (props) => {
  console.log("props",props);

  const navigate = useNavigate()

 
  // const session = localStorage.getItem("single");
  // const sessionData =  JSON.parse(session)
// console.log("session",sessionData);

  // useEffect(() => {
  //   if (session === undefined || session === null || session === "") {
  //     navigate("/Login ");
  //   }
  // }, [])

  const logOutHandler = (e) => {
    // localStorage.removeItem('token');
    navigate("/");
  }


  return (
    <div>
      {/* <h1>{sessionData?.name}</h1> */}
      {/* <h1>{sessionData?.email}</h1> */}
      {/* <h1>{sessionData?.number}</h1> */}
      <button className="btn btn-primary" onClick={() => logOutHandler()}>Logout</button>

    

    </div>
   
  )
}

export default User
