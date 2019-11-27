import React, { Component } from 'react';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import {Animated} from "react-animated-css";

function Contact(){
    return(
        <div>
 
  <Row>    
    <Col><h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1}}>Contact:</h1><br></br>
    <p style={{color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}}>
        email: hello@jamesravenscroft3.com</p>
    <br></br>
   <p style={{color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}}> 
   phone: 781-727-3848</p>
    <br></br>
    <a href="https://calendly.com/jamesravenscroft3">  <p style={{color:"white", fontSize:"150%", WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:.5}}> Schedule an appointment. Click Here!
   </p>
    </a>

    
    </Col>
</Row>
            </div>
    )

}
export default Contact