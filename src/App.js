import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dashboard from "./components/Dashboard";
import AddCourse from "./components/AddCourse";




function App() {
  return (
    <React.Fragment>
      <Dashboard />
      <AddCourse />
    </React.Fragment>
  );
}

export default App;
