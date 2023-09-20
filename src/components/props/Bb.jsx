import { Cc } from "./Cc"

export const Bb = (bb_prop) => {
    return(
        <div className="Bb">
            <h1>Bb Component</h1>

            {bb_prop.propname}
            <Cc propname={bb_prop.propname} />
        </div>
    )
}