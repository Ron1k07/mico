import { useContext } from "react";
import { NameContext } from './context'

export const E3 = () => {
    const Imya = useContext(NameContext)
    return(
        <div>
            <h1>Component E3</h1>
            {Imya}
        </div>
    )
}