import { useRef } from "react";

export const B4 = () => { 
    const inputElement = useRef();

    const focusInput = () => inputElement.current.focus();

    return(
        <div>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}