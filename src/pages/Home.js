import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      <Typography variant="h3" fontWeight="bold">
        Hi, I'm Erik!
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
        A passionate developer building awesome web experiences.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} component={Link} to="/projects">
        View My Work
      </Button>
    </Container>
  );
};

export default Home;
