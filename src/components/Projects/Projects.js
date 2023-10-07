import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import almondCow from "../../Assets/Projects/almondCow.png";
import fifityHealth from "../../Assets/Projects/fifityHealth.png";
import mks from "../../Assets/Projects/mks.png";
import na from "../../Assets/Projects/na.png";
import pulpo from "../../Assets/Projects/pulpo.png";
import rumah from "../../Assets/Projects/rumah.png";
import sloan from "../../Assets/Projects/sloan.png";
import theseus from "../../Assets/Projects/theseus_.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theseus}
              isBlog={false}
              title="Theseus"
              description="Offices customization for coworking. When you get the amount, you'll receive an email with all details. You can search, save to favorites, share office on social medial and you can see all your budgets. Developed using React, Redux, Firebase."
              ghLink=""
              demoLink="https://theseus-313315.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Chat"
              description="If you open the demo in two window, you can talk throw live chat. Developed using React and socket.io."
              ghLink="https://github.com/haroldognjunior/chat-reactjs"
              demoLink="https://65212ecfac0ed7626650cecc--whimsical-otter-e94a6d.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pulpo}
              isBlog={false}
              title="Pulpo"
              description="Vehicles management. You can get reports, import and export datas about vehicles, manage maintenances, expenses, insights, etc, everything in the cloud. Developed using Angular, Nest.js and AWS."
              ghLink=""
              demoLink="https://www.getpulpo.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={almondCow}
              isBlog={false}
              title="Almond Cow"
              description="E-commerce about milk substitute. You can find recipes and products. Developed using Gatsby, React, Dupal with shopify integration"
              ghLink=""
              demoLink="https://almondcow.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rumah}
              isBlog={false}
              title="Rumah Cumbres"
              description="Company page about housing project. Developed using Gatsby."
              ghLink=""
              demoLink="https://rumahcumbres.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fifityHealth}
              isBlog={false}
              title="Fifity Plus Health"
              description="Health page. Developed using Gatsby and React."
              ghLink=""
              demoLink="https://fiftyplushealthdevelop.gatsbyjs.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sloan}
              isBlog={false}
              title="Sloan"
              description="Employers help employees with theirs student loans. Developed using React and AWS integration."
              ghLink=""
              demoLink="https://deploy-preview-45--sloan-internal.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mks}
              isBlog={false}
              title="MKS"
              description="API integration with frontend, add to cart the product and you can see the amount on the cart. Developed using React, Next and Firebase."
              ghLink="https://github.com/haroldognjunior/mks-frontend-challenge"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Henry Bank"
              description="Wallet virtual like Paypal. You can made transactions between accounts and you see those transacions reflected by month, week or day. Developed using React, Redux, Express, Sequelize."
              ghLink="https://github.com/haroldognjunior/Billetera-Virtual"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="CustomerX"
              description="CRUD to manage the clients. You can see the clients list. Developed using React and PostgreSQL."
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Dolarblue Webscraping"
              description="You can see unofficial dolar price in Argentina through Webscraping. Developed using React and Firebase."
              ghLink="https://github.com/haroldognjunior/dolarblue--webscraping"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Rick and Morty GraphQL"
              description="Page about Rick and Morty. You can search and see the characters details. Developed using Gatsby and React."
              ghLink="https://github.com/haroldognjunior/rickandmortyGraphQL"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Search Github"
              description="You can search and find the Github profiles using Github API. Developed using React, Jquery, Axios."
              ghLink="https://github.com/haroldognjunior/search_github"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Animals Protected"
              description="Animals ONG. Using React, Redux and Firebase."
              ghLink="https://github.com/haroldognjunior/protectora-animales"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Employees Management"
              description="CRUD. Employees management. You can create, edit, delete and change the employees details. Developed using React, Redux and Firebase."
              ghLink="https://github.com/haroldognjunior/Gerenciamento_de_Funcionarios"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="Mini Social Media"
              description="Mini Social Media, you can create the user and when you login, you can post some state and you or other user can comments this state, press like button or, if you are the author, you can delete this state. Developed using React, Redux and Sequelize."
              ghLink="https://github.com/haroldognjunior/mini-rede-social"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={na}
              isBlog={false}
              title="E-commerce"
              description="Admin can create categories and add the products in categories, see all orders, change product stock. Users can see their carts, amount, order status, products stock. Developed using React, Redux and Sequelize."
              ghLink="https://github.com/haroldognjunior/ecommerce"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
