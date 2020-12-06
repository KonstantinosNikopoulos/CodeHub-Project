import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';


//import {  Label, Input, FormText } from 'react-bootstrap';


function AddCourse() {
    return (
      <React.Fragment>
          <Form className='p-5 mb-4' style={{backgroundColor: '#f1f1f1'}}>

           <h3>Add Course</h3>
            <Form.Group controlId="formGridTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control placeholder="Title"/>
            </Form.Group>    

            <Form.Group controlId="formGridDuration">
              <Form.Label>Duration:</Form.Label>
              <Form.Control placeholder="Duration"/>
            </Form.Group>  

            <Form.Group controlId="formGridImagePath">
              <Form.Label>Image path:</Form.Label>
              <Form.Control placeholder="Image path"/>
            </Form.Group>  

            <Form.Group id="formGridBookable">
               <Form.Check type="checkbox" label="Bookable" />
            </Form.Group>

            <hr/>

            <h3>Instructors</h3>

            <Form.Group id="formGridTsevdos">
               <Form.Check type="checkbox" label="John Tsevdos" />
               <Form.Check type="checkbox" label="Yannis Nikolakopoulos" />
            </Form.Group>
           
            <hr/>

            <Form.Group controlId="formGridImagePath">
              <Form.Label>Description:</Form.Label>
              <Form.Control placeholder="" as="textarea" rows="2"/>
            </Form.Group>  

            <hr/>

            <h3>Dates</h3>

            <Form.Group controlId="formGridStartDate">
              <Form.Label>Start date:</Form.Label>
              <Form.Control placeholder="Start date"/>
            </Form.Group>  

            <Form.Group controlId="formGridEndDate">
              <Form.Label>End date:</Form.Label>
              <Form.Control placeholder="End date"/>
            </Form.Group> 

            <hr/>

            <Form.Group controlId="formGridEarlyBird">
              <Form.Label>Early Bird:</Form.Label>
              <Form.Control placeholder="0"/>
            </Form.Group>  

            <Form.Group controlId="formGridNormalPrice">
              <Form.Label>Normal Price:</Form.Label>
              <Form.Control placeholder="0"/>
            </Form.Group> 

            <hr/>

            <Form.Group>
               <Button class="btn btn-primary float-right"> Add Course</Button>
            </Form.Group>
            

          
          </Form>
      </React.Fragment>
    );
     
            
}
  
  export default AddCourse;