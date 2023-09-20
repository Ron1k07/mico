import { useState, useEffect  } from "react";
import axios from "axios";

export const useFetch = (api) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(api)
        .then((res) => setData(res.data));
    }, [api]);

    return [data];
}; 