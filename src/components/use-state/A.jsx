import { usestate } from "react";
import {Button, Checkbox} from "@mui/material"
import { 
    FavoriteBorder, 
    Favorite, 
    BookmarkBorder, 
    Bookmark 
} from "@mui/icons-material";

const label = {
    inputProps: {
        'aria-label': 'Checkbox demo'
    }
}

export const Usestate = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const editbtn1 = () => setName("text");
    const editbtn2 = () => setName("contained");
    const editbtn3 = () => setName("outlined");
    const editbtn4 = () => setName("disabled");
    const coloredit1 = () => setColor("succes")
    const coloredit2 = () => setColor("primary")

    return (
        <div className="usestate">
            <Button variant={name} color={color}>
                Mui button 1
            </Button>
            <button type="button" onClick={editbtn1}>text</button>
            <button type="button" onClick={editbtn2}>contained</button>
            <button type="button" onClick={editbtn3}>outlined</button>
            <button type="button" onClick={editbtn4}>disabled</button>


            {/* <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select> */}

            <div className="checkbox">
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                {...label}
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
                />
            </div>

        </div>
    )
}