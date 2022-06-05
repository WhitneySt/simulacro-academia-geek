import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomCard = (props = {}) => {
    const { poster, title, sinopsis, id, onClick } = props;

    return (
        <Card sx={{ maxWidth: 345, margin: '1em' }}>
            <CardMedia
                component="img"
                height="140"
                image={poster}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {sinopsis}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
                <Button href={`/movies/${id}`} size="small">Details</Button>
                <Button onClick={onClick} size="small">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default CustomCard;