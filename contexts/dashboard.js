import React, { createContext, useContext, useState } from 'react';
const DashContext = createContext();
// context which will keep state of user whether it is logged in or not and if user has edit access.
function DashProvider({ children }) {
    const [name, SetName] = useState("None");
    const [email, SetEmail] = useState("None");
    const [validity, SetValidity] = useState(-1);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [batch, SetBatch] = useState(0)
    // const [EditAccess, setEditAccess] = useState(false);
    // const [name, SetName] = useState("none");

    return (
        <DashContext.Provider
            value={{
                name,SetName,email,SetEmail,setIsAuthenticated,isAuthenticated,SetValidity,validity,batch, SetBatch
            }}
        >
            {children}
        </DashContext.Provider>
    );
}

const useDash = () => useContext(DashContext);

export { DashProvider, useDash };