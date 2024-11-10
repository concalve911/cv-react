import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "./swapi.scss";

export default () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container className="swapi">
      <Typography variant="h4" gutterBottom className="swapi__title">
        Perssons
      </Typography>
      <List className="swapi__list">
        {people.map((person, index) => (
          <ListItem key={index} className="swapi__list-item">
            <ListItemText
              primary={person.name}
              secondary={`gender: ${person.gender}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
