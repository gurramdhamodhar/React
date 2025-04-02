import React, { useContext, useState } from 'react'
import UseContext from '../context/useContext';

function Login() {
    const [UserName, SetUserName] = useState(null)
    const [Password, SetPassword] = useState(null)

    const {SetUser} = useContext(UseContext)

    const handler = (e) =>{
      e.preventDefault();
      SetUser({ UserName, Password });
    };

  return (
    <div>
        <h2>UseContext</h2>
        <input 
          type="text"
          value={UserName}
          onChange={(e) => SetUserName(e.target.value)}
          placeholder='Username'
        />
        {" "}
        <input 
          type="password" 
          value={Password}
          onChange={(e) => SetPassword(e.target.value)}
          placeholder='Password'
        />
        <button onClick={handler}>Submit</button>
    </div>
  )
}

export default Login