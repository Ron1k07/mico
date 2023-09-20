import { useState, useEffect } from "react"
import { apiURL1 } from "../api/api";

export const C2 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${apiURL1}/comments`)
        .then(response => response.json())
        .then(json => setUsers(json));
    }, []);

    return(
        <div className="a2">
            {users && users.map((data) => (
                <div key={data.id}>
                    <h1>{data.name}</h1>
                    <h2>{data.email}</h2>
                    <p>{data.body}</p>
                    <br /> <hr />
                </div>
            ))}
        </div>
    )
} 