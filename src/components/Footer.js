import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright text-center">
          <h3>Designed and Developed by Júnior Nogueira</h3>
        </Col>
      </Row>
      <Row>
        <Col className="footer-copywright text-center">
          <h3>Copyright © {year} Júnior Nogueira</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
