import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function Contact(){
    return(
       <Container>
  <Row>    
  <Col md={{ span: 6, offset: 3 }}>
      <h1 style={{WebkitTextStrokeColor:"black", WebkitTextStrokeWidth:1,  whiteSpace: 'normal'}}>Contact:</h1><br></br>
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
           </Container>
 
    )

}
export default Contact