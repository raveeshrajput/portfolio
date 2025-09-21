import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container className="text-center">
        <p className="mb-1">© {new Date().getFullYear()} Raveesh Rajput. All Rights Reserved.</p>
        <p className="small">
          Made with ❤️ using React & Bootstrap
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
