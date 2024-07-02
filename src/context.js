import React, { createContext, useContext, useState } from 'react';

const context = createContext();

export const UserContext = () => useContext(context)

export const UserContextProvider = ( {children } ) => {

    // const addDataToProfile=()=>{
    // somelogic
    // }

    return(
        <UserContext.Provider value={{ users: [{ name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 }] }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;