import React, {useState, useEffect}  from "react";
import {useLocation} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BsCheck, BsX } from 'react-icons/bs';
import Form from 'react-bootstrap/Form'
import Moment from 'moment';
import axios from "axios";


const EditForm = ({ onSubmit, course }) => {

    const [courseName, setCourseName] = useState("");
    const [duration, setDuration] = useState("");
    const [path, setPath] = useState("");

    return (
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
                type="text"
                placeholder= {course.title}
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            />
        </Form.Group>
  
        <Form.Group controlId="duration">
          <Form.Label>Duration:</Form.Label>
          <Form.Control
                type="text"
                placeholder={course.duration}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="imagePath">
            <Form.Label>Image path:</Form.Label>
            <Form.Control
                type="text"
                placeholder={course.imagePath}
                value = {path}
                onChange={(e) => setPath(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="bookable">
          <Form.Check type="checkbox" label="Bookable" />
        </Form.Group>

        <hr/>

        <h3>Instructors</h3>

        <Form.Group  id="instructors">
            <Form.Check type="checkbox" label="John Tsevdos" />
            <Form.Check type="checkbox" label="Yannis Nikolakopoulos" />
         </Form.Group>
           
        <hr/>

        <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control 
                placeholder= {course.description} 
                as="textarea" 
                rows="2"/>
        </Form.Group>  

        <hr/>

        <h3>Dates</h3>

        <Form.Group controlId="start_date">
              <Form.Label>Start date:</Form.Label>
              <Form.Control placeholder={course.dates.start_date}/>
        </Form.Group>  

        <Form.Group controlId="end_date">
              <Form.Label>End date:</Form.Label>
              <Form.Control placeholder={course.dates.end_date}/>
        </Form.Group> 

        <hr/>

        <Form.Group controlId="early_bird">
              <Form.Label>Early Bird:</Form.Label>
              <Form.Control placeholder={course.price.early_bird}/>
        </Form.Group>  

        <Form.Group controlId="normal">
              <Form.Label>Normal Price:</Form.Label>
              <Form.Control placeholder={course.price.normal} />
        </Form.Group> 

        <hr/>

        <Form.Group>
               <Button type="submit" className="btn btn-primary float-right"> Add Course</Button>
        </Form.Group>

      </Form>
    );
  };







function Details () {
    let location = useLocation();
    const isOpen = location.state.open;
    const courseInstructorsID = location.state.instructors;

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/instructors`)
        .then(res => {
            const instructors = res.data;
            setInstructors(instructors);
        });
    }, [])

    // filter the instructors array to pass only those who do the course
    const courseInstructors = instructors.filter(function(item){
        return !(courseInstructorsID.indexOf(item.id) === -1);
    });


    const [edit, setEdit] = useState(false);
    const [deleteCourse, setDeleteCourse] = useState(false);

    const handleEdit = () => setEdit(true);
    const handleDelete = () => setDeleteCourse(true);

    const handleClose = () => setEdit(false);
    const handleCloseDelete = () => setDeleteCourse(false);

    const onEditFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };



    return (
        <Container className="ml-2">
            <Row>
                <Col><h1>{location.state.title} ({location.state.id})</h1></Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col>
                    <Image style={{ width: '30rem' }} src={location.state.imagePath} />
                </Col>
                <Col>   
                        <div style={{fontSize: '20px'}} className="mt-2">
                            <p dangerouslySetInnerHTML={ {__html: location.state.description}} />
                        </div>
                        <br />
                        <p style={{fontSize: '18px'}}>Price: {location.state.price.normal}€</p>
                        <p style={{fontSize: '18px'}}>Bookable: {isOpen ? <BsCheck /> : <BsX />}</p>
                        <p style={{fontSize: '18px'}}>Duration: {location.state.duration}</p>
                        <p style={{fontSize: '18px'}}>Dates: {Moment(location.state.dates.start_date).format('DD/MM/YYYY')} - {Moment(location.state.dates.end_date).format('DD/MM/YYYY')}</p>
                </Col>
            </Row>
            <br />
            <Row >
                <Col>
                     {/* EDIT COURSE BUTTON  */}
                     <Button variant="primary" size="lg" onClick={handleEdit}>Edit</Button>{' '}
                     <Modal show={edit} size="lg" onHide={handleClose}>
                        <Modal.Header closeButton>
                             <Modal.Title>Edit Course: {location.state.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                             <EditForm onSubmit={onEditFormSubmit} course={location.state} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                 Close Modal
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* DELETE COURSE BUTTON */}
                    <Button variant="danger" size="lg" onClick={handleDelete}>Delete</Button>
                    <Modal show={deleteCourse} onHide={handleCloseDelete}>
                        <Modal.Header closeButton>
                          <Modal.Title>Delete Course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete the {location.state.title} course?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseDelete}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleCloseDelete}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                   
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col>
                    <h1>Instructors</h1>
                    <br />
                    {courseInstructors.map(instructor => {
                        return (
                            <div key={instructor.id}>
                                <h3>{instructor.name.first} {instructor.name.last} <span style={{fontWeight: "50"}}>({Moment(instructor.dob).format('DD/MM/YYYY')})</span></h3>
                                <p style={{fontSize: '18px'}}>Email: <a href={instructor.email}>{instructor.email}</a> | <a href={instructor.linkedin}>LinkedIn</a></p>
                                <p style={{fontSize: '18px'}}>{instructor.bio}</p>
                                <br />
                            </div>
                        )
                    })}
                    
                </Col>
            </Row>


            
        </Container>
    )
}



function CourseDetails () {
    return (
        <React.Fragment>
            <br />
            <Details />
        </React.Fragment>
    )
}

export default CourseDetails;