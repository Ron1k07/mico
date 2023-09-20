import { useFetch } from "./use-fetch";
import {api5} from "../api/api";

export const CustomHook = () => {

    const [data] = useFetch(api5);

    return(
        <div>
            {data && data.map((item) => {
                return(
                    <div key={item}>
                        <p>{item.name.common}</p>
                        <br /> <hr /> <br />
                    </div>
                )
            })}
        </div>
    )
}