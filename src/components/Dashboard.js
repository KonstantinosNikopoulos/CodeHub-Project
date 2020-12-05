import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";


const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Code.Hub Dashboard</Navbar.Brand>
        <Nav className="ml-auto" >
            <Nav.Link href="">Courses</Nav.Link>
            <Nav.Link href="">Add new course</Nav.Link>
        </Nav>
     </Navbar>
    )
}

const Welcome = () => {
    return (
        <Jumbotron className='mt-4'>
            <h1>Welcome to CodeHub Dashboard!</h1>
            <p style={{fontSize: "20px"}}>Manage everything and have fun!</p>
            
        </Jumbotron>
    )
}




function Dashboard () {
    return (
        <React.Fragment>
            <Navigation />   
            <Welcome />
         </React.Fragment>
    )
}

export default Dashboard