import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL1 } from "../api/api";

export const D2 = () => {
    const [randomUser, setRandomUser] = useState([]);

    useEffect(() => {
        axios.get(`${{apiURL1}}/results`)  
        .then((response) => setRandomUser(response));
    }, [])

    return(
        <div>
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