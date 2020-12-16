import React, {useState} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import axios from 'axios';

//import {  Label, Input, FormText } from 'react-bootstrap';



function AddCourse() {

    const [course, setCourse] = useState(
		{
			"id": "",
			"title": "",
			"imagePath": "",
			"price": {
				"normal": 0,
				"early_bird": 0
			},
			"dates": {
				"start_date": "",
				"end_date": ""
			},
			"duration": "",
			"open": false,
			"instructors": [],
			"description": ""
		}
	);

	const handleChange = (event) => {
        setCourse({...course, [event.target.id]: event.target.value})
	};
	
	const handleChangeOpen = (event) => {
        setCourse({...course, [event.target.id]: event.target.checked})
	};

    const handleSubmit = (e) => {
		e.preventDefault();
        axios.post(`http://localhost:3001/courses`, course)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };

    return (
      <React.Fragment>
          <Form onSubmit={handleSubmit} className='p-5 mb-4' style={{backgroundColor: '#f1f1f1'}}>

           <h3>Add Course</h3>
            <Form.Group onChange={handleChange} controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control placeholder="Title"/>
            </Form.Group>    

            <Form.Group onChange={handleChange} controlId="duration">
              <Form.Label>Duration:</Form.Label>
              <Form.Control placeholder="Duration"/>
            </Form.Group>  

            <Form.Group onChange={handleChange} controlId="imagePath">
              <Form.Label>Image path:</Form.Label>
              <Form.Control placeholder="Image path"/>
            </Form.Group>  

            <Form.Group onChange={handleChangeOpen} id="open">
               <Form.Check type="checkbox" label="Bookable" />
            </Form.Group>

            <hr/>

            <h3>Instructors</h3>

            <Form.Group onChange={handleChange} id="instructors">
               <Form.Check type="checkbox" label="John Tsevdos" />
               <Form.Check type="checkbox" label="Yannis Nikolakopoulos" />
            </Form.Group>
           
            <hr/>

            <Form.Group onChange={handleChange} controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control placeholder="" as="textarea" rows="2"/>
            </Form.Group>  

            <hr/>

            <h3>Dates</h3>

            <Form.Group onChange={handleChange} controlId="start_date">
              <Form.Label>Start date:</Form.Label>
              <Form.Control placeholder="Start date"/>
            </Form.Group>  

            <Form.Group onChange={handleChange} controlId="end_date">
              <Form.Label>End date:</Form.Label>
              <Form.Control placeholder="End date"/>
            </Form.Group> 

            <hr/>

            <Form.Group onChange={handleChange} controlId="early_bird">
              <Form.Label>Early Bird:</Form.Label>
              <Form.Control placeholder="0"/>
            </Form.Group>  

            <Form.Group onChange={handleChange} controlId="normal">
              <Form.Label>Normal Price:</Form.Label>
              <Form.Control placeholder="0"/>
            </Form.Group> 

            <hr/>

            <Form.Group>
               <Button type="submit" class="btn btn-primary float-right"> Add Course</Button>
            </Form.Group>
            

          
          </Form>
      </React.Fragment>
    );
     
            
}
  
  export default AddCourse;