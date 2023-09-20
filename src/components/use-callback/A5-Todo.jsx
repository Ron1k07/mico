import {memo} from "react";

export const A5Todo = ({ todos, addTodo }) => {
    console.log('child render');

    return(
        <>
            <h2>My Todos</h2>
            {todos.map((todo, keys) => {
                return <p key={keys}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button> 
        </>
    );
};