import { Ee } from "./Ee"

export const Dd = (dd_prop) => {
    return(
        <div className="Dd">
            <h1>Dd Component</h1>

            {dd_prop.propname}
            <Ee propname={dd_prop.propname}/>
        </div>
    )
}