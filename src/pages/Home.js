import React from "react";
import { Container, Typography, Box, Grid2, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../Styles/index.css";
import "../Styles/Home.css";
import profilepic from "../assets/profile.jpg";
import sweden from "../assets/stockholm.jpg";
import houston from "../assets/houston.jpg";
import lisbon from "../assets/lisbon.jpg";
import coding from "../assets/coding.jpg";

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
      
        
        <Grid2 container direction="row" spacing={1} maxWidth={1200}>
          <Grid2 sx={{ mt: 1 }} size={{xs: 12, md: 8}}>
            <Typography variant="h3" fontWeight="bold">
              Hi, I'm Erik Caceres Perez!
            </Typography>
            <Typography variant="h6" color="white">
              A software developer and IT specialist passionate about building innovative solutions and solving technical challenges.
            </Typography>
            
            
          </Grid2>
          <Grid2 container item size={{xs: 2, md: 4}} justifyContent="flex-end">
            
          <Box component="img" src={profilepic} alt="Erik" className="profile-image" />
          </Grid2>
          
          <Grid2 sx={{ mt: 5 }} size={{xs: 12, md: 8}}>
            <Typography variant="h4" fontWeight="bold">
              About Me
            </Typography>
            <Typography variant="body1" color="white">
              I am a full-stack developer with a background in IT support and automation. 
              I have experience working with various technologies, including JavaScript, React, Node.js, and Python. 
              I am passionate about creating impactful digital solutions and collaborating with diverse teams to drive innovation and growth.
            </Typography>
          </Grid2>
          
        </Grid2>

        

        {/* About Me Section */}

        <Box className="about-section">
          
        
          <Grid2 container spacing={20} maxWidth={1200} justifyContent="center" padding={4}>
          
            {/* First Section: Left - Text, Right - Image */}
            <Grid2 container spacing={5} alignItems="center" direction="row" justifyContent="flex-end">
              <Grid2 item size={{xs: 12, md: 9}}>
                <Paper className="about-text-box">
                  <Typography variant="body1" color="text.secondary">
                  Originally from Seville, Spain, I have lived across Sweden and Portugal,
                  embracing diverse cultures and experiences.
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 item size={{xs: 12, md: 3}}>
                <Box component="img" 
                  src={sweden} 
                  alt="Tech Industry" 
                  className="about-image" />
              </Grid2>
            </Grid2>

  
            {/* Second Section: Left - Image, Right - Text */}
            <Grid2 container spacing={5} alignItems="center" direction="row-reverse" justifyContent="flex-end">
              <Grid2 item size={{xs: 12, md: 9}}>
                <Paper className="about-text-box">
                  <Typography variant="body1" color="text.secondary">
                    Now settled in 🇺🇸 Houston, Texas,
                    I am actively pursuing my passion for software development and technology.
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 item size={{xs: 12, md: 3}} justifyContent="flex-end">
                <Box component="img" 
                  src={houston}
                  alt="Tech Industry" 
                  className="about-image" />
              </Grid2>
            </Grid2>
             {/* Third Section: Right - Image, Left - Text */}
            <Grid2 container spacing={5} alignItems="center" direction="row" justifyContent="flex-end">
              <Grid2 item size={{xs: 12, md: 9}}>
                <Paper className="about-text-box">
                  <Typography variant="body1" color="text.secondary">
                    With a background in full-stack development, automation, and IT support,
                    I bring a unique blend of problem-solving skills, creativity, and technical expertise.
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 item size={{xs: 12, md: 3}}>
                <Box component="img" 
                  src={coding} 
                  alt="Tech Industry" 
                  className="about-image" />
              </Grid2>
            </Grid2>

            {/* Fourth Section: Tight - Text, Left - Image */}
            <Grid2 container spacing={5} alignItems="center" direction="row-reverse" justifyContent="flex-end">
              <Grid2 item size={{xs: 12, md: 9}}>
                <Paper className="about-text-box">
                  <Typography variant="body1" color="text.secondary">
                    I am fluent in English, Spanish, Swedish, and Portuguese,
                    allowing me to collaborate in diverse global teams.
                    My goal is to create impactful digital solutions while continuously learning and growing in the tech industry.
                  </Typography>
                </Paper>
              </Grid2>
              <Grid2 item size={{xs: 12, md: 3}}>
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

