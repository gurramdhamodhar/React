import React, { useState } from 'react'
import UseContext from './useContext'

const UserContextProvider = ({children}) => {
    const [User, SetUser] = useState(null);
    return(
        <UseContext.Provider value={{User, SetUser}}>
            {children}
        </UseContext.Provider>
    )
}

export default UserContextProvider