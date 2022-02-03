import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SingleCard = ({ imageUrl, name }) => {
  return <Card className='card' sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="200"
    image={ imageUrl }
    alt={ name }
  />
  <CardContent>
    <Typography gutterBottom variant="h4" >
      { name }
    </Typography>
  </CardContent>
</Card>
};

export default SingleCard;
