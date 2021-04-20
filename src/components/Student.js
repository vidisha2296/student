import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container, 
} from "reactstrap";
 
const Student =({student}) =>{
    return (
        <Card className="text-center">
            <CardBody >
                <CardSubtitle className="font-weight-bold">{student.name}</CardSubtitle>
                <CardText>{student.department}</CardText>
                <Container className="text-center">
                    <Button color="danger">Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}
export default Student;