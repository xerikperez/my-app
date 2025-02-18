import React from "react";
import { Container, Typography, Box, Grid2, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../Styles/index.css";
import "../Styles/Home.css";

const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React and Material UI.",
      image: "https://via.placeholder.com/300", // Replace with your image
    },
    {
      title: "E-Commerce App",
      description: "An online store with full shopping cart functionality.",
      image: "https://via.placeholder.com/300", // Replace with your image
      
    },
    {
      title: "Task Manager",
      description: "A productivity app for tracking daily tasks efficiently.",
      image: "https://via.placeholder.com/300", // Replace with your image
    },
  ];


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
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5, textAlign: "left"  }}>
            About Me
          </Typography>
        {/* About Me Section */}
        <Box className="about-section">
          
          
          <Grid2 container spacing={1} alignItems="center" sx={{ mt: 2 }}>
          
            {/* First Section: Left - Text, Right - Image */}
            <Grid2 container spacing={1}  alignItems="center" sx={{ mt: 0, ml: 0 }}>
              <Grid2 item size={{xs: 12, md: 9}}>
                <Paper className="about-text-box">
                  <Typography variant="body1" color="text.secondary">
                    Originally from Seville, Spain, I have lived across Sweden and Portugal,
                    embracing diverse cultures and experiences. Now settled in 🇺🇸 Houston, Texas,
                    I am actively pursuing my passion for software development and technology.
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 item size={{xs: 2, md: 2}} alignItems={{xs: "right", md: "flex-end"}}>
                <Box component="img" 
                  src="https://i.pinimg.com/736x/a0/2c/4f/a02c4f6974df64b110bce07fb1f34f64.jpg" 
                  alt="Sweden" 
                  className="about-image" />
              </Grid2>
            </Grid2>
  
            {/* Second Section: Left - Image, Right - Text */}
            <Grid2 container spacing={1} alignItems="center" sx={{ mt: 2, ml: 0 }}>
              <Grid2 item size={{xs: 2, md: 2}}>
                <Box component="img" 
                  src="https://i.pinimg.com/736x/a0/2c/4f/a02c4f6974df64b110bce07fb1f34f64.jpg" 
                  alt="Tech Industry" 
                  className="about-image" />
              </Grid2>
              <Grid2 item size={{xs: 12, md: 9}} alignItems={{xs: "right", md: "right"}}>
                <Paper className="about-text-box">
                  <Typography variant="body1" color="text.secondary">
                    With a background in full-stack development, automation, and IT support,
                    I bring a unique blend of problem-solving skills, creativity, and technical expertise.
                  </Typography>
                </Paper>
              </Grid2>
            </Grid2>
  
            {/* Third Section: Left - Text, Right - Image */}
            <Grid2 container spacing={1} alignItems="center" sx={{ mt: 0, ml: 0 }}>
              <Grid2 item size={{xs: 12, md: 9}}>
                <Paper className="about-text-box">
                  <Typography variant="body1" color="text.secondary">
                    I am fluent in English, Spanish, Swedish, and Portuguese,
                    allowing me to collaborate in diverse global teams.
                    My goal is to create impactful digital solutions while continuously learning and growing in the tech industry.
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 item size={{xs: 2, md: 2}} alignItems={{xs: "right", md: "flex-end"}}>
                <Box component="img" 
                  src="https://i.pinimg.com/736x/a0/2c/4f/a02c4f6974df64b110bce07fb1f34f64.jpg" 
                  alt="Sweden" 
                  className="about-image" />
              </Grid2>
            </Grid2>
            
            
          </Grid2>
        </Box>
        
        {/* Projects Section */}
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5, textAlign: "center" }}>
          Featured Projects
        </Typography>
        <Grid2 container spacing={4} sx={{ mt: 2 }}>
            {projects.map((project, index) => (
                <Grid2 item xs={12} md={4} key={index}>
                  
                    <Paper className="project-card" elevation={3} sx={{ padding: 2 }}>
                    <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
                            <Box component="img" src={project.image} alt={project.title} className="project-image"/>
                            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.description}
                            </Typography>
                        </Link>
                    </Paper>
                    
                </Grid2>
                
                ))}
        </Grid2>
        
        {/* Show More Projects Button */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" color="primary" component={Link} to="/Projects">
            Show More Projects
          </Button>
        </Box>
      </Container>
      
    );
  };
  
  export default Home;

