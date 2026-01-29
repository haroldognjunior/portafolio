import Avatar from "avataaars";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Brazil/Argentina-born developer based in{" "}
              <b className="purple">Mexico</b>, working as a{" "}
              <b className="purple">
                Senior Full Stack Developer / Frontend Lead
              </b>
              . I've spent <b className="purple">6+ years</b> designing,
              modernizing, and scaling web platforms for{" "}
              <b className="purple">insurance, fintech, and e-commerce</b>{" "}
              products across Latin America and the US.
              <br />
              <br />
              On the frontend, I build robust experiences with{" "}
              <b className="purple">React, Angular, TypeScript, Redux</b>, and
              frameworks like <b className="purple">Next.js</b> and{" "}
              <b className="purple">Gatsby</b>. On the backend, I deliver secure
              and maintainable services with{" "}
              <b className="purple">Node.js / NestJS</b>, REST APIs, and
              SQL/NoSQL databases.
              <br />
              <br />
              I'm passionate about clean architecture, performance, and security
              (JWT, secure cookies, encryption), and I enjoy leading small
              cross-functional teams, doing code reviews, and improving delivery
              with <b className="purple">CI/CD, Docker, AWS/GCP</b>, and
              AI-assisted workflows.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Avatar
                avatarStyle="Circle"
                topType="ShortHairShortWaved"
                accessoriesType="Blank"
                hairColor="Black"
                facialHairType="BeardLight"
                facialHairColor="Black"
                clotheType="BlazerShirt"
                eyeType="Default"
                eyebrowType="DefaultNatural"
                mouthType="Smile"
                skinColor="Light"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/haroldognjunior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hgnjr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/haroldognjunior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
