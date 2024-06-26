import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tabs, Tab, Form, Button, Image } from 'react-bootstrap';
import './App.css';
import imgNY from './building ny.jpg'; 

function App() {
  return (
    <Container fluid>
      <Tabs defaultActiveKey="new-york" id="office-tabs" className="mb-3" justify>
        <Tab eventKey="new-york" title="New York Office">
          <Row className="px-3">
            <Col className="col-4">
              <img src={imgNY} alt="New York Office" className="img-fluid small-img" />
            </Col>
            <Col className="col-4">
              {/* Add any additional content here */}
            </Col>
            <Col className="col-4">
              <div className="p-3 bg-dark text-white">
                <h5>Contact details</h5>
                <p>1010 Avenue of the Moon</p>
                <p>New York, NY 10018 US.</p>
                <p>+1 628 123 4000</p>
                <p>brandon@consulting.com</p>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="washington" title="Washington Office">
          <Row className="px-3">
            <Col className="col-4">
              <img src={imgNY} alt="Washington Office" className="img-fluid small-img" />
            </Col>
            <Col className="col-4">
              {/* Add any additional content here */}
            </Col>
            <Col className="col-4">
              <div className="p-3 bg-dark text-white">
                <h5>Contact details</h5>
                <p>1010 Avenue of the Moon</p>
                <p>New York, NY 10018 US.</p>
                <p>+1 628 123 4000</p>
                <p>brandon@consulting.com</p>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="las-vegas" title="Las Vegas Office">
          <Row className="px-3">
            <Col className="col-4">
              <img src={imgNY} alt="Las Vegas Office" className="img-fluid small-img" />
            </Col>
            <Col className="col-4">
              {/* Add any additional content here */}
            </Col>
            <Col className="col-4">
              <div className="p-3 bg-dark text-white">
                <h5>Contact details</h5>
                <p>1010 Avenue of the Moon</p>
                <p>New York, NY 10018 US.</p>
                <p>+1 628 123 4000</p>
                <p>brandon@consulting.com</p>
              </div>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="california" title="California Office">
          <Row className="px-3">
            <Col className="col-4">
              <img src={imgNY} alt="California Office" className="img-fluid small-img" />
            </Col>
            <Col className="col-4">
              {/* Add any additional content here */}
            </Col>
            <Col className="col-4">
              <div className="p-3 bg-dark text-white">
                <h5>Contact details</h5>
                <p>1010 Avenue of the Moon</p>
                <p>New York, NY 10018 US.</p>
                <p>+1 628 123 4000</p>
                <p>brandon@consulting.com</p>
              </div>
            </Col>
          </Row>
        </Tab>
      </Tabs>

      <Row className="mt-4 px-3">
        <Col className="px-3 col-4">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First name *</label>
              <input type="text" className="form-control" id="firstName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail *</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone *</label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
          </form>
        </Col>
        <Col className="px-3 col-4">
          <form>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message *</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Col>
        <Col className="px-3 col-4">
          <h3>Your contact</h3>
          <Row className="my-3">
            <Col xs={3}>
              <Image src={imgNY} roundedCircle className="img-fluid small-img" alt="img" />
            </Col>
            <Col xs={9}>
              <h5 className="font-weight-bold">name</h5>
              <p className="text-muted">title</p>
              <p>Email: <a href={`mailto:email`}>email</a></p>
              <p>Skype: <a href={`skype:skype`}>skype</a></p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
