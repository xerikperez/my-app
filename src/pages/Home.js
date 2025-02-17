import React from "react";
import { Container, Typography, Box } from "@mui/material";
import profileImage from "../assets/profile.jpg";
import "../Styles/index.css";

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

      {/* About Me Section */}
      <Box className="about-section">
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Originally from Seville, Spain, I have lived across **Sweden and Portugal**, embracing diverse cultures and experiences. Now settled in **Houston, Texas**, I am actively pursuing my passion for **software development** and **technology**.  
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          With a background in **full-stack development, automation, and IT support**, I bring a unique blend of **problem-solving skills, creativity, and technical expertise**. My experience spans industries such as **fintech, cybersecurity, and customer service**, where I have developed **custom software solutions, automation tools, and interactive web applications**.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          I am fluent in English, Spanish, Swedish, and Portuguese, allowing me to collaborate in diverse global teams. My goal is to **create impactful digital solutions** while continuously learning and growing in the tech industry.
        </Typography>
      </Box>
      <Box className="Sweden-Picture">
        <Typography variant="h5" fontWeight="bold" sx={{ mt: 5 }}>
          Sweden
        </Typography>
        <Box component="img" src="https://i.pinimg.com/736x/a0/2c/4f/a02c4f6974df64b110bce07fb1f34f64.jpg" alt="Profile" className=".home-image img" />
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          I lived in Sweden for 3 years, I learned the language and the culture. I worked as a software developer and I learned a lot about the tech industry.
        </Typography>
        <Box component="img" src="https://i.pinimg.com/736x/a0/2c/4f/a02c4f6974df64b110bce07fb1f34f64.jpg" alt="Profile" className="home-image-left" />
        </Box>
    </Container>
  );
};

export default Home;
