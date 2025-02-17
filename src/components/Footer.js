import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ textAlign: "center", p: 2, bgcolor: "primary.main", color: "white" }}>
      <Typography variant="body2">&copy; 2025 My Portfolio. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
