import React, { Component } from "react";
import Footer from "../layout/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <main className="main">
            <section>
              <Container>
                <Row>
                  <Col sm={12} md={8} lg={8} xl={8}>
                    <div className="text-style">
                      <h1>Get Smarter about your career</h1>
                      <p>
                        Get the <strong>5-minute newsletter</strong> keeping
                        about smart career
                      </p>
                    </div>
                    <div className="subscription">
                      <Form action="#" method="post">
                        <Form.Control
                          name="_token"
                          type="hidden"
                          value="value"
                        />
                        <Form.Control type="hidden" value="" />
                        <div className="input-area">
                          <span className="mail-icon">
                            <BsEnvelope />
                          </span>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Your E-mail address"
                            required
                            className="custom-input"
                          />
                          <Button type="submit" className="btn btn-danger">
                            Join Free
                          </Button>
                        </div>
                      </Form>

                      <p className="mt-4 p-design">
                        <span>
                          We're committed to your privacy. DashCareer uses the
                          information you provide to contact you about our
                          relevant content and services. You may unsubscribe
                          from these communications at any time. For more
                          information, check out our Privacy Policy.
                        </span>
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}
