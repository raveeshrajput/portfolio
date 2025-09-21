import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Envelope, Telephone, Linkedin, Github } from "react-bootstrap-icons";

function Contact() {
  return (
    <div className="bg-white py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          {/* Contact Info */}
          <Col md={5} className="mb-4">
            <Card className="shadow border-0 p-4">
              <h4 className="fw-bold mb-3">Get in Touch</h4>
              <p>
                <Envelope className="me-2 text-primary" />
                <strong>Email:</strong> raveeshrajput255@gmail.com
              </p>
              <p>
                <Telephone className="me-2 text-primary" />
                <strong>Phone:</strong> +91 9140921738
              </p>
              <p>
                <Linkedin className="me-2 text-primary" />
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p>
                <Github className="me-2 text-primary" />
                <a
                  href="https://github.com/raveeshrajput"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile
                </a>
              </p>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <Card className="shadow border-0 p-4">
              <h4 className="fw-bold mb-3">Send a Message</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
