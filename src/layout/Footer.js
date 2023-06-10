import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-light">
      <Container>
        <div className="lnk-dsgn">
          <div className="social-media">
            <a href="https://www.facebook.com">
              <FaFacebook size={20} className="mr-2 text-light" />
            </a>
            <a href="https://www.youtube.com">
              <FaYoutube size={20} className="mr-2 text-light" />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin size={20} className="mr-2 text-light" />
            </a>
          </div>
          <div className="footer-container">
            <Row>
              <Col lg={4} md={4}>
                <div className=" footer-wrp">
                  <img
                    src="https://deshcareer.com/logo/short-logo.png"
                    width="200"
                    height="83"
                    className="d-inline-block align-top"
                    alt="Desh Career logo"
                  />
                  <p>
                    Desh Career is Career based newsletter in Bengali language.
                    This newsletter has published weekly. This is published in
                    every Saturday at 12.00 PM.
                  </p>
                </div>
              </Col>
              <Col lg={4} md={4} className="footer-wrpp">
                <h4>Privacy and Terms</h4>
                <ul className="list-unstyled footer-wrapper">
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms">Terms Condition</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </Col>
              <Col lg={4} md={4} className="ftr-wrp">
                <h4>Support</h4>
                <ul className="list-unstyled footer-wrapper ">
                  <li>
                    <a href="/affiliate">Affiliate Link</a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                  <li>
                    <a href="/advertise">Advertise with us</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <hr className="bg-light" />

          <div className="footer-design">
            <Row>
              <Col md={6} className="footer-left">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
              </Col>
              <Col md={6} className="footer-right">
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="/terms">Terms</a>
                  </li>
                  <li>
                    <a href="/cookie">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="/terms">Terms</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
