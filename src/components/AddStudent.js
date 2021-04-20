import React, { Fragment } from 'react';
import {Form,FormGroup,Input,label,Button,Container} from "reactstrap"
const AddStudent =  ()  => {
    return <Fragment>
        <h1 className="text-center my-3">Fill Student Details</h1>
       <Form>
           <FormGroup>
               <label for ="userid">Student Id</label>
               <Input type="text" placeholder="Enter here" name="userid" id="userid"/>

           </FormGroup>
           <FormGroup>
               <label for ="title">Student Name</label>
               <Input type="text" placeholder="Enter here"  id="title"/>

           </FormGroup>
           <FormGroup>
               <label for ="title">Department</label>
               <Input type="text" placeholder="Enter here"  id="title"/>

           </FormGroup>
           <Container className="text-center">
               <Button color="success">Add Student</Button>
               <Button color="warning ml-2">Clear</Button>
           </Container>
           
       </Form>
    </Fragment>;
};
export default AddStudent;