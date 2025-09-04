import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import type { FlightDetails } from '../utils/Types';
import { Rating } from '@mui/material';


export default function FlightCards(details: FlightDetails) {

    return <>

        <Card sx={{ maxWidth: 345 }}>

            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={details.Image}
                    alt={details.ImageAlt}
                />

                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">

                        {details.Destination}

                    </Typography>



                    <Typography sx={{ fontWeight: 'bold' }}>

                        {`${details.Price} DH`}

                    </Typography>

                    <Rating value={details.ratings} readOnly />

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                        {details.Description}

                    </Typography>

                </CardContent>

            </CardActionArea>
        </Card>


    </>
}