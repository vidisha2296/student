import React,{useState,useEffect} from 'react';
import Student from './Student';


const Allstudent =() =>{
    useEffect(()=> {
    document.title ="All Student";
    },[]);

    const [student,setStudent]=useState([
        {
            name:"Antara Naik",department:"CSE"
        },
        {
            name:"Smita Naik",department:"CSE"
        },
        {
            name:"Vidisha Naik",department:"CSE"
        },
        {
            name:"Sunil Naik",department:"CSE"
        }
    ]);
    
    return (
       <div>
           <h1>All Student</h1>
           <p>List of departments</p>
           {student.length > 0
           ? student.map((item) => <Student student={item}/>)
         :"No Student"}
       </div>
    );

};
export default Allstudent;