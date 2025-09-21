import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
export default function About(){
    return (
    <div className="bg-white text-dark py-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold">About Me</h2>
        <Row className="justify-content-center">
          {/* Profile Info */}
          <Col md={8}>
            <Card className="shadow p-4 border-0">
              <Row>
                <Col md={4} className="text-center">
                  <img
                    src="/public/ravi photo.jpg"
                    alt="Profile"
                    className="img-fluid rounded-circle shadow"
                  />
                </Col>
                <Col md={8}>
                  <h3 className="fw-bold">Raveesh Rajput</h3>
                  <p>
                    I'm a passionate <strong>Full Stack Developer</strong> with
                    hands-on experience in building web applications using
                    <strong> React, Angular, Node.js, Express</strong> and
                    <strong> MongoDB</strong>.  
                  </p>
                  <p>
                    I completed my <strong>B.E. in Computer Science</strong> in
                    2023 and also pursued a{" "}
                    <strong>Full Stack Development with AI</strong> course at
                    Apnaguru. Currently, I'm working on projects like E-commerce
                    and Student Management System.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Skills and Hobbies */}
        <Row className="mt-5">
          <Col md={6}>
            <Card className="shadow border-0">
              <Card.Body>
                <Card.Title className="fw-bold">Skills</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>React.js & Angular</ListGroup.Item>
                  <ListGroup.Item>Node.js & Express</ListGroup.Item>
                  <ListGroup.Item>MongoDB & Database Design</ListGroup.Item>
                  <ListGroup.Item>JavaScript, HTML5, CSS, Bootstrap</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow border-0">
              <Card.Body>
                <Card.Title className="fw-bold">Hobbies</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Reading Books</ListGroup.Item>
                  <ListGroup.Item>Playing Cricket</ListGroup.Item>
                  <ListGroup.Item>Listening to Music</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}