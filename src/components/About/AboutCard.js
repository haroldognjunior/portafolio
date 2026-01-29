import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Júnior Nogueira</span> — a{" "}
            <span className="purple">
              Senior Full Stack Developer and Frontend Lead
            </span>{" "}
            with <span className="purple">6+ years</span> of experience.
            Brazil/Argentina-born, based in{" "}
            <span className="purple">Mexico City</span>.
            <br />
            <br />I design and scale web platforms for{" "}
            <span className="purple">
              insurance, fintech, and e-commerce
            </span>{" "}
            across Latin America and the US. I specialize in{" "}
            <span className="purple">
              React, Angular, TypeScript, Node.js / NestJS
            </span>
            , clean architecture, and leading cross-functional teams with{" "}
            <span className="purple">CI/CD, Docker, and cloud (AWS/GCP)</span>.
            <br />
            <br />
            Beyond coding:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mentoring developers and code reviews
            </li>
            <li className="about-activity">
              <ImPointRight /> Modernizing legacy systems and improving security
            </li>
            <li className="about-activity">
              <ImPointRight /> Music, travelling, and outdoor activities
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
