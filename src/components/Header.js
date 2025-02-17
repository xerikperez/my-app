import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import "../Styles/index.css";


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Box className="logo-container"
        component="img"
        src={logo}
        alt="Profile"
        
        />
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          My Portfolio
          
        </Typography>
        
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
