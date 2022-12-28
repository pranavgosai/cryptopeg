import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

  const [inputvalu,setIputvalue] = useState({
    fname:"",
    lname:"",
    Email:"",
    Mobile:"",
    Message:""

  })

  console.log(inputvalu);

const getvalue =(e)=>{
  const {name,value} =e.target;
  setIputvalue(()=>{
    return {
      ...inputvalu,
      [name]:value
    }
  })
}

const sentUserdata = async(e)=>{
  e.preventDfault();

  const {fname,lname,Email,Mobile,Message} = inputvalu;
  if(fname ==""){
    toast.error("fname is requier")
  }else if(lname ==""){
    toast.error("lname is requier")
  }else if(Email ==""){
    toast.error("Email is requier")
  }else if(!Email.includes("@")){
    toast.error("invalid email")
  }else if(Mobile ==""){
    toast.error("Mobile is requier")
  }else{
    const res =  await fetch("http://localhost:6002/register",{
    method:"POST",
    headers:{
      "Content-Tyoe":"application/json"
    },
    body:JSON.stringify({
      fname,lname,Email,Mobile,Message
    })
    });
    const data = res.json();
    console.log(data); 
  }

}

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className="text-center">ContactUS</h2>
        <div className="container mt-2 ">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
              <Form.Label>fname</Form.Label>
              <Form.Control type="text" name="fname"  onChange={getvalue}/>
            </Form.Group>
            
            <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
              <Form.Label>lname</Form.Label>
              <Form.Control type="text" name="lname"  onChange={getvalue}/>
            </Form.Group>
            
            <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" name="Email" onChange={getvalue} />
            </Form.Group>
            
            <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="Mobile" onChange={getvalue} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} name="Message"  onChange={getvalue} />
      </Form.Group>
            
            <div className="d-flex justify-content-center" >
              <Button variant="primary" className="col-lg-6"  type="submit" onClick={sentUserdata} >
                Submit
              </Button>
            </div>
          </Form>
         <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Contact;
