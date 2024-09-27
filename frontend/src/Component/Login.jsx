import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import img1 from "../images/vm-logo.png"
const Login=()=>{
 const [input, setInput] = useState({});
 const [email, setEmail]= useState("");
 const [password, setPassword]=useState("");
 const navigate= useNavigate();


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';


   const handleInput=(e)=>{ 
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}))
   }


   const handleSubmit=()=>{
    let api="http://localhost:8000/customer/customersave";

    axios.post(api, input).then((res)=>{
      console.log(res);

      setShow(false);
      
      messageApi.open({
        key,
        type: 'loading',
        content: 'You are Succesfully Registered...',
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: 'success',
          content: 'You are Succesfully Registered...',
          duration: 2,
        });
      }, 1000);
    })
   }

   const checkUser=(e)=>{
     e.preventDefault();
     let api="http://localhost:8000/customer/customercheck";
     axios.post(api, {email:email, password:password}).then((res)=>{
      console.log(res.data.name);
      window.localStorage.setItem("userName", res.data.name);
      window.localStorage.setItem("userEmail", res.data.email);
      window.localStorage.setItem("userid", res.data._id);
      navigate("/home");
     }).catch((err)=>{

       message.error(err.response.data);

     })
   }

    return(
        <>
         {contextHolder}
          <div id="header">
              <div id="headerlft">

              </div>
              <div>
                <img id="logo" src={img1}></img>
              </div>
              <div id="headermdl">
              Welcome To the new Flatform 
              </div>
              <div id="headerrgt">
              <Button variant="primary" onClick={handleShow}>User Registration</Button>
              </div>
          </div> 
       
        <div id="loginform">  
        <h3> User Login Form</h3>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} 
        onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={checkUser}>
        Login
      </Button>
    </Form>
    Dont have an Account? Please Sign up
    </div>
 


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter name</Form.Label>
              <Form.Control  type="text" name="name" onChange={handleInput}   autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter city</Form.Label>
              <Form.Control  type="text" name="city" onChange={handleInput}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter email</Form.Label>
              <Form.Control  type="email" name="email" onChange={handleInput} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter password</Form.Label>
              <Form.Control  type="password" name="password" onChange={handleInput}  />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>

       


 <div id='footer'>

 </div>
 <div style={{textAlign:"center"}}>
    www.VM.com all right reserved. 2024 &copy;
 </div>

        </>
    )
}

export default Login;