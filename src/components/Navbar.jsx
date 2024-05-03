import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/loginSlice";
import { Container } from "@mui/material";
import { clearData } from "../features/mp3Slice";

const Navbar = () => {
  const user = useSelector((state) => state.login.user);
const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser())
    dispatch(clearData())

  }
  return (
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
        <Toolbar>
          <CardMedia
            component="img"
            image={logo}
            alt="logo"
            sx={{
              height: "50px",
              width: "50px",
            }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yutube Mp3 Dowloader
          </Typography>
          {user.email && user.password ? (
            <Button color="inherit" sx={{color:"#360a6d",fontWeight:"600"}} onClick={handleLogout}>Logout</Button>
          ) : (
            <Button color="inherit" sx={{color:"#360a6d",fontWeight:"600"}}>Login</Button>
          )}
        </Toolbar>
    </Container>
      </AppBar>
    </Box>

  );
};

export default Navbar;
