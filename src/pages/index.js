import "semantic-ui-css/semantic.min.css"
import "../css/index.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import { Grid } from "semantic-ui-react"
import { Card, Icon, Image } from "semantic-ui-react"

import headerImg from "../../static/img/header.png"
import logoImg from "../../static/img/logo.png"
import Fall21 from "./fall21"
import Fall22 from "./fall22"
import Fall23 from "./fall23"
import Fall24 from "./fall24"
import Spring21 from "./spring21"
import Spring22 from "./spring22"
import Spring23 from "./spring23"
import Spring24 from "./spring24"

const seasons = [
  { id: "f24", name: "Fall 2024", component: Fall24 },
  { id: "s24", name: "Spring 2024", component: Spring24 },
  { id: "f23", name: "Fall 2023", component: Fall23 },
  { id: "s23", name: "Spring 2023", component: Spring23 },
  { id: "f22", name: "Fall 2022", component : Fall22 },
  { id: "s22", name: "Spring 2022", component: Spring22 },
  { id: "f21", name: "Fall 2021", component: Fall21 },
  { id: "s21", name: "Spring 2021", component: Spring21 },
];

export default function Home() {
  return (
    <Layout>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "136px",
          paddingBottom: "136px",
          textAlign: "center",
              backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, white 100%), url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FadeIn>
          <a href="https://pennspark.org">
            <img src={logoImg} style={{ width: "160px" }} />
          </a>
          <h1 style={{ fontSize: "4rem" }}>Project Showcases</h1>
          <br />
          <br />
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
      {seasons.map(({ name, component: SeasonComp }) => {
        if (!SeasonComp) return null;
        const id = name.toLowerCase().replace(/\s+/g, "-");
        return (
          <section key={name} id={id} style={{ padding: "24px 0", marginTop: "36px" }}>
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>{name}</h2>
            <hr/>
            <SeasonComp />
          </section>
        );
      })}

    </Layout>
  )
}
