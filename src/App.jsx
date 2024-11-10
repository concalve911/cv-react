import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Swapi from "./pages/Swapi";

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/swapi" element={<Swapi />} />
      </Routes>
      <Footer />
    </>
  );
};
