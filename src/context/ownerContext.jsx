import {useContext, createContext, useState} from 'react';

const OwnerContext = createContext();

export const UseOwnerContext =()=>{
    return useContext(OwnerContext);
}


export const OwnerProvider =({children})=>{
    const [ownerPermissions, setOwnerPermissions] = useState(true);
    return (
        <OwnerContext.Provider value={{ownerPermissions,setOwnerPermissions }}>
            {children}
        </OwnerContext.Provider>
    )
}