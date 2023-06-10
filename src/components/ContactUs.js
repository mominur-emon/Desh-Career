import React, { Component } from "react";
import Footer from "../layout/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container className="main">
          <Row>
            <Col sm={12} md={8} lg={8} xl={8} className="about-wrp">
              <h1>Contact Us</h1>

              <p>
                If you want to contact us, you can send an email to {""}
                <a
                  href="mailto:contact.deshcareer@gmail.com"
                  target="_blank "
                  rel="noopener"
                >
                  contact.deshcareer@gmail.com
                </a>
              </p>
              <p>
                If you want to meet with us, you can come to our office based on
                an appointment.
              </p>
              <p>Our office address:</p>
              <p>House: 13/3,</p>
              <p>Road: 2,</p>
              <p>Shyamoly, Dhaka-1207</p>
              <p>+8801880811047</p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
