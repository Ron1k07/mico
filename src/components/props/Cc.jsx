import { Dd } from "./Dd"

export const Cc = (cc_prop) => {
    return(
        <div className="Cc">
            <h1>Cc Component</h1>

            {cc_prop.propname}
            <Dd propname={cc_prop.propname}/>
        </div>
    )
}