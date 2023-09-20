import { useState } from "react";

export const B = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    return (
        <div className="B">
            <button type="button" onClick={increment}>
                +
            </button>
            {count}
            <button type="button" onClick={decrement}>
                -
            </button>
        </div>
    )
}