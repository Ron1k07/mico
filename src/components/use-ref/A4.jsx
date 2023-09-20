import { useState, useEffect, useRef } from "react";

export const A4 = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <div className="A4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Reander Count: {count.current}</h1>
        </div>
    );
};