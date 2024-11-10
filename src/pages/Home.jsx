import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "./home.scss";

export default () => {
  return (
    <Container className="home">
      <Typography variant="h2" gutterBottom className="home__title">
        Hello Im Aleks
      </Typography>
      <Typography variant="body1" paragraph className="home__description">
        Im front-end specialist
      </Typography>
      <Box className="home__skills">
        <Typography
          variant="h5"
          gutterBottom
          className="home__skills-title"
        ></Typography>
        <ul className="home__skills-list">
          <li className="home__skills-item">JavaScript</li>
          <li className="home__skills-item">React</li>
          <li className="home__skills-item">HTML & CSS</li>
        </ul>
      </Box>
    </Container>
  );
};
