import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

 const  CardDowloaded = () => {
    const data = useSelector((state)=> state.mp3.data)[0]

  return (
      
    <>
    <Card sx={{ maxWidth: 345, margin:" 3rem auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={data?.thumb}
          alt=""
          />
        <CardContent sx={{backgroundColor:'#6dd8fe'}}>
          <Typography gutterBottom variant="p" component="div">
            {data?.title}.mp3
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {data?.author}
          </Typography>
          <Button component="a" variant="contained" color="secondary" sx={{marginTop:".5rem"}} href={data?.link} target='true'>Dowload</Button>
        </CardContent>
      </CardActionArea>
    </Card>
          </>
  );
}
export default CardDowloaded;