import { useState } from "react";
import {A5Todo} from './A5-Todo';

export const A5 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => setCount(c => c + 1);

    const addTodo = () => setTodos(t => [...t, 'New Todo']);

    return(
        <>
            <A5Todo todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}