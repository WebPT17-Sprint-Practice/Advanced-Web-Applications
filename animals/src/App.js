import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import AnimalDashboard from "./components/AnimalDashboard";
import AddAnimal from "./components/AddAnimal";

import PrivateRoute from "./components/utils/PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Build out a Private Route for both Animal Dashboard + Add Animal*/}
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/creatures" component={AnimalDashboard} />
        <PrivateRoute exact path="/add" component={AddAnimal} />
      </Switch>
    </div>
  );
}
