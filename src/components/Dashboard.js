import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Dashboard.css'

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

const Stats = () => {
    return (
      <React.Fragment>
        <Container>
            <Row>
                <Col><div className="stat">STUDENTS: 1537</div></Col>
                <Col><div className="stat">COURSES: 24</div></Col>
                <Col><div className="stat">INSTRUCTORS: 36</div></Col>
                <Col><div className="stat">EVENTS: 158</div></Col>
            </Row>
        </Container>
      </React.Fragment>
    );      
}

const Last5 = () => {
    return (
      <React.Fragment>
        <div className="last5">Last 5 Courses</div>
        <Table bordered hover>
            <thead>
                <tr>
                <th></th>
                <th>Title</th>
                <th>Bookable</th>
                <th>Price</th>
                <th>Date</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>&#8505;</td>
                <td>Certified Scrum Master</td>
                <td>&#10004;</td>
                <td>1100</td>
                <td>27/9/2019-28/9/2019</td>
                <td><Button variant="primary">View details</Button>{' '}</td>
                </tr>
            </tbody>
        </Table>
      </React.Fragment>
    );      
}


function Dashboard () {
    return (
        <React.Fragment>
            <Navigation />   
            <Welcome />
            <Stats/>
            <Last5/>
         </React.Fragment>
    )
}

export default Dashboard