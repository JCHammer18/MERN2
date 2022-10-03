import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import EditExercises from "./components/edit-exercises";
import CreateExercises from "./components/create-exercises";
import CreateUsers from "./components/create-users";

function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
