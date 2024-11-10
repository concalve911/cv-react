import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./header.style.scss";

export default () => {
  return (
    <AppBar className="header">
      <Toolbar className="header__toolbar">
        <Typography variant="h6" className="header__title">
          My PAge
        </Typography>
        <NavLink to="/" className="header__nav-link">
          <Button className="header__btn">Main Page</Button>
        </NavLink>
        <NavLink to="/todo" className="header__nav-link">
          <Button className="header__btn">Todo List</Button>
        </NavLink>
        <NavLink to="/swapi" className="header__nav-link">
          <Button className="header__btn">SWAPI</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
