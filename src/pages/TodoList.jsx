import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./todoList.scss";

export default () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Container className="todoList">
      <div className="todoList__inner">
        <TextField
          label="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todoList__input"
        />
        <Button className="add__button" variant="contained" onClick={addTask}>
          Add
        </Button>
        <List className="todoList__list">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              className="todoList__list-item"
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTask(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
};
