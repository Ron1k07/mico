import { useState, useEffect } from "react"

export const A2 = () => {
    const [name, setName] = useState(0);

    const countfunction = () => setName(name + 1);

    useEffect(() => {
        document.title = `You change title ${name}`
    }, [name]);

    return(
        <div className="a2">
            <button onClick={countfunction}>
                increment title
            </button>
        </div>
    )
}