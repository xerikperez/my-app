import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import profileImage from "../assets/profile.jpg";
import "../Styles/index.css";
import "../Styles/Home.css";

const Home = () => {
  return (
    <Container className="home-container">
      {/* Introduction */}
      <Typography variant="h3" fontWeight="bold">
        Hi, I'm Erik Caceres Perez!
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
        A software developer and IT specialist passionate about building innovative solutions and solving technical challenges.
      </Typography>

      {/* Profile Image */}
      <Box component="img" src={profileImage} alt="Profile" className="home-image" />

      {/* About Me Section Title */}
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 5, textAlign: "center" }}>
        About Me
      </Typography>

      {/* About Me Content */}
      <Box className="about-section">
        <Grid container spacing={4} alignItems="center">
          {/* First Section: Left - Text, Right - Image */}
          <Grid item xs={12} md={6}>
            <Paper className="about-text-box">
              <Typography variant="body1" color="text.secondary">
                Originally from Seville, Spain, I have lived across Sweden and Portugal, 
                embracing diverse cultures and experiences. Now settled in Houston, Texas, 
                I am actively pursuing my passion for software development and technology.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" 
              src="https://i.pinimg.com/736x/a0/2c/4f/a02c4f6974df64b110bce07fb1f34f64.jpg" 
              alt="Sweden" 
              className="about-image" />
          </Grid>

          {/* Second Section: Left - Image, Right - Text (Middle Image Fixed) */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box component="img" 
              src="https://i.pinimg.com/736x/2b/2e/3a/2b2e3ad8e1526c7cb8b713f4d7ac2ffd.jpg" 
              alt="Tech Industry" 
              className="about-image" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="about-text-box">
              <Typography variant="body1" color="text.secondary">
                With a background in full-stack development, automation, and IT support, 
                I bring a unique blend of problem-solving skills, creativity, and technical expertise.
              </Typography>
            </Paper>
          </Grid>

          {/* Third Section: Left - Text, Right - Image */}
          <Grid item xs={12} md={6}>
            <Paper className="about-text-box">
              <Typography variant="body1" color="text.secondary">
                I am fluent in English, Spanish, Swedish, and Portuguese,
                allowing me to collaborate in diverse global teams. 
                My goal is to create impactful digital solutions while continuously learning and growing in the tech industry.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" 
              src="https://i.pinimg.com/736x/a0/2c/4f/a02c4f6974df64b110bce07fb1f34f64.jpg" 
              alt="Multilingual Collaboration" 
              className="about-image" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
