import { useState, useEffect } from "react"
import { apiURL1 } from "../api/api";

export const B2 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${apiURL1}/comments`)
        .then(response => response.json())
        .then(json => console.log(json));
    }, [])

    return(
        <div className="a2">
            
        </div>
    )
} 