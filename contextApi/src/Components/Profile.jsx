import React, { useContext } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import UseContext from '../context/useContext'
function Profile() {
 const {User} = useContext(UseContext)
 if(!User) return <p>Not logged in</p>
  return (
    <div>
      <div style={{padding : "20px"}}>
        <p>Profile : {User.UserName}</p>
        <p>Password: {User.Password}</p>
      </div>
    </div>
  )
}

export default Profile