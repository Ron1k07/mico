import { Bb } from "./Bb"

export const Aa = () => {
    const name = "A component prop";

    return(
        <div className="Aa">
            {/* <h1>Aa Component</h1> */}
            <Bb propname={name} />
        </div>
    )
}