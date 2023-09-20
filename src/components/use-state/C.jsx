import {useState} from 'react';
import CStyle from './C.module.scss';

export const C = () => {
    const [color, setColor] = useState(true);

    const colorFunc = () => setColor((show) => !show);
    

    return(
        <div className={CStyle.kvadrat}>
            <h1 className={color ? CStyle.text1 : CStyle.text2}>
                Hello World
            </h1> <br />
            <button onClick={colorFunc}>Text</button>
        </div>      
    )
}