import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
const Menus =()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-student" action>Add Student</ListGroupItem>
            <ListGroupItem tag="a" href="/view-student" action>View Student</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem>
        </ListGroup>
        
    )
}
export default  Menus;