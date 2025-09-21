import { Container, Row, Col, Button } from "react-bootstrap";
export default function Home(){
    return (
        <div className="bg-light text-dark vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col md={6}>
            <h1 className="fw-bold">Hi, I'm <span className="text-primary">Raveesh Rajput</span></h1>
            <h4 className="text-muted">Full Stack Developer | React & Node.js Enthusiast</h4>
            <p className="mt-3">
              I build modern, responsive, and user-friendly web applications.
              Welcome to my portfolio website.
            </p>
            <div className="mt-4">
              <Button variant="primary" href="/projects" className="me-2">
                View My Work
              </Button>
              <Button variant="outline-dark" href="/contact">
                Contact Me
              </Button>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col md={6} className="text-center">
            <img
              src="/public/ravi photo.jpg"
              alt="Profile"
              className="img-fluid rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}