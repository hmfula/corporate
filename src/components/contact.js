import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
      <iframe title="map"  
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d30770.820083099803!2d28.284594904688472!3d-15.411513999999988!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfi!4v1755291748624!5m2!1sen!2sfi" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">        
       </iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
        <Row>
            <Col sm={4}>
            <i className="fas fa-envelope"></i>
            <p>enquiries@pareto-ventures.com  </p>
            </Col>
            <Col sm={4}>
            <i className="fas fa-phone"></i>
            +260-000-0000
            </Col>
            <Col sm={4}>
            <i className="fas fa-map-marker-alt"></i>
            Pareto Business Park, Cairo Rd, Lusaka, Zambia
            </Col>
          </Row>
       
        </div>
      </Container>
    </section>
  );
}

export default AppContact;