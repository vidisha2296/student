import logo from './logo.svg';
import './App.css';
import {Button,Container,Row,Col} from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify'; 
import Home from './components/Home';
import Student from './components/Student';
import Allstudent from './components/Allstudent';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import Menus from './components/Menus';
import {BrowserRouter as Router,Route,Link } from "react-router-dom";

function App() {
  const btnHandle=() =>{
   toast.success("Done",{
     position:"top-center",
   });
  };
  return (
    <div>
      <Router>
      <ToastContainer />
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col d={8}>
            <Route path="/" component={Home} exact/>
            <Route path="/add-student" component={AddStudent} exact/>
            <Route path="/view-student" component={Allstudent} exact/>
          </Col>
        </Row>
      </Container>
      </Router>
     
     
    
      
      </div>
  );
}

export default App;
