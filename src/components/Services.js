import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Services(props) {
  console.log("props",props.img);
  const img = require(`../images/${props.img}`);
  return (
    <Card sx= {{ maxWidth: 300 }} className='item'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={`${img}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}