import { useState, useEffect } from "react"
import axios from "axios";
import { apiURL4 } from "../api/api";
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';


export const Card = () => {
    const [card, setCards] = useState([]);

    useEffect(() => {
        axios.get(`${apiURL4}/users`)
            // .then((response) => console.log(response.data))
            .then((response) => setCards(response.data))
    }, []);

    return (
        <div className="cards">
            {card && card.map((user) => (
                <div key={user.id}>
                    <Card sx={{ minWidth: 275 }}    >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {user.name}
                            </Typography>

                            <Typography variant="h5" component="div">
                                {user.email}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {user.username}
                            </Typography>

                            <Typography variant="body2">
                                {user.address.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                    <br /> <hr />
                </div>
            ))}
        </div>
    )
} 