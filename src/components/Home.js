import React from 'react';
import {Jumbotron,Container,Button} from 'reactstrap';

const Home=()=>{
    return (
        <div>
         <Jumbotron className="text-center">
             <h1 >Student Database</h1>
             <p>Student</p>
             <Container>
                 <Button color="primary">
                     Start Using
                 </Button>
             </Container>
         </Jumbotron>
        </div>
    )
}
export default Home;