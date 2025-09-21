import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projectData = [
    {
      title: "E-commerce Website",
      description:
        "An online shopping platform built using React, Node.js, Express, and MongoDB. Features include product listing, cart, and user authentication. (No payment integration).",
      tech: "React, Node.js, Express, MongoDB",
      link: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Student Management System",
      description:
        "A web app for managing student records, courses, and performance. Teachers can add, edit, and view student details.",
      tech: "Angular, Node.js, Express, MongoDB",
      link: "https://github.com/yourusername/student-management"
    },
    {
      title: "Bulk WhatsApp Messaging Tool",
      description:
        "An application to send bulk WhatsApp messages using uploaded CSV contacts and customized message templates.",
      tech: "Angular (Frontend), Node.js (Backend)",
      link: "https://github.com/yourusername/bulk-whatsapp-tool"
    }
  ];

  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow h-100 border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <p>
                    <strong>Tech Stack:</strong> {project.tech}
                  </p>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
