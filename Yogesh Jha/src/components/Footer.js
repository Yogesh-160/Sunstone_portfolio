import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"/>

        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} Yogesh Jha</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://github.com/Yogesh-160"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.linkedin.com/in/yogesh-jha-fsd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="bca22.yogesh.jha@sunstone.edu.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="Yug_160"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-body"/>
        
      </Row>
    </Container>
  );
}

export default Footer;