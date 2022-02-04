import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const { data } = useGlobalContext();

  const { imageUrl, name } = data.find((c) => c._id === Number(id));

  return (
    <Link to="/">
    <Card className='card-details' sx={{ maxWidth: 500, height: 300 }}>
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
  </Link>
  )
};

export default CardDetails;
