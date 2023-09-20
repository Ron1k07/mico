import { useState, useEffect } from "react"
import axios from "axios";
import { apiURL3 } from "../api/api";

export const Cats = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get(`${apiURL3}/cats`)
        // .then((response) => console.log(response.data))
        .then((response) => setCats(response.data))
    }, []);

    return(
        <div className="cats">
            {cats && cats.map((data) => (
                <div key={data._id}>
                    <h1>{data.createdAt}</h1>
                    <br /> <hr />
                </div>
            ))}
        </div>
    )
} 