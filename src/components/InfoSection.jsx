
import   List  from '@mui/material/List';
import   ListItem  from '@mui/material/ListItem';
import   ListItemText  from '@mui/material/ListItemText';
import   Typography  from '@mui/material/Typography'; 
import React from 'react'

const InfoSection = () => {
  return (
    <>
    <Typography sx={{ mt: 4, mb: 2,fontWeight:"600",color:"#360a6d" }} align='center' variant="h6" component="div">
    How to download YouTube videos?
        </Typography>
    <List  >
             
              <ListItem>
                <ListItemText
                  primary="1. Go to YouTube.com and search for a video you would like to download. Then copy the video URL from the browser address bar (youtube.com/watch?v=id)." 
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. Paste the video URL in our YouTube Converter, and Enter or click on the button." 
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3. Please note that it is only possible to download YouTube videos with a maximum length of 49 minutes." 
                />
              </ListItem>
            
          </List>
    </>

  )
}

export default InfoSection