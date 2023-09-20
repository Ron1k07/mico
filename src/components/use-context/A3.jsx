import React from "react";
import { useState } from "react";
import { NameContext } from './context';
// import { B3 } from "./B3";
import { E3 } from "./E3";

export const A3 = () => {
    const [name, setName] = useState('React');
    
    return(
        <NameContext.Provider value={name}>
            <h1>Component A3</h1>
            Hello {name}
            {/* <B3/> */}
            <E3/>
        </NameContext.Provider>
    )
}