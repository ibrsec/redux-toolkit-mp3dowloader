 

import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import InfoSection from "../components/InfoSection";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/mp3Slice";
import CardDowloaded from "../components/CardDowloaded";
import { Error } from "@mui/icons-material";
import { Alert, Box } from "@mui/material";

const Home = () => {
const loading = useSelector((state)=>state.mp3.loading)
const data = useSelector((state)=> state.mp3.data)
const error = useSelector((state)=> state.mp3.error)
const success = useSelector((state)=> state.mp3.success) 

  return (
    <Container sx={{paddingBottom:"3rem"}}>
      


      <SearchBar />

    { loading &&
    <Box sx={{marginTop:"2rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}  >

    <Skeleton    variant="rounded" width={250} height={60} /> 
    <Skeleton   variant="rounded" width={250} height={60} /> 
    <Skeleton width={250}/>
    <Skeleton width={250} />
    <Skeleton width={250} />
    <Skeleton width={250} />
    </Box>
    
}

{error &&  

<Alert severity="error" sx={{marginTop:"1rem"}}>Couldn't get the mp3!!!</Alert>
} 
 {(success && !loading)   &&  
 
     <CardDowloaded />
 }



      <InfoSection />

       
    </Container>
  );
};

export default Home;
