import "semantic-ui-css/semantic.min.css"
import "../css/index.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import { Grid } from "semantic-ui-react"
import { Card, Icon, Image } from "semantic-ui-react"

import headerImg from "../../static/img/header.png"
import logoImg from "../../static/img/logo.png"
import fa21Img from "../../static/img/fa21-splash.png"
import sp21Img from "../../static/img/sp21-splash.png"

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          paddingTop: "140px",
          paddingBottom: "140px",
          textAlign: "center",
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FadeIn>
          <a href="https://pennspark.org" target="_blank" rel="noopener noreferrer" >
            <img src={logoImg} style={{ width: "160px" }} />
          </a>
          <h1 style={{ fontSize: "4rem" }}>Project Showcases</h1>
          <br /><br />
          <div className="homeSocialLinks" style={{ fontSize: "2rem" }}>
            <a
              href="https://www.facebook.com/pennspark"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-facebook"
            />
            &nbsp;&nbsp;
            <a
              href="https://www.instagram.com/pennspark"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-instagram"
            />
            &nbsp;&nbsp;
            <a
              href="https://www.github.com/pennspark"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-github"
            />
            &nbsp;&nbsp;
            <a
              href="https://medium.com/@pennspark"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-medium"
            />
          </div>
        </FadeIn>
      </div>

      <Grid container columns={3} style={{ margin: "auto", marginTop: "30px", paddingBottom: "60px"}}>
        <Grid.Column>
          <a href="fall21">
            <Card>
              <Image src={fa21Img} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Fall 2021 Projects</Card.Header>
              </Card.Content>
            </Card>
          </a>
        </Grid.Column>
        <Grid.Column>
          <a href="spring21">
            <Card>
              <Image src={sp21Img} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Spring 2021 Projects</Card.Header>
              </Card.Content>
            </Card>
          </a>
        </Grid.Column>
      </Grid>
    </Layout>
  )
}
