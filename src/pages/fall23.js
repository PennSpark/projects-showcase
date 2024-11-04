import "semantic-ui-css/semantic.min.css"
import "../css/spring22.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid, Label } from "semantic-ui-react"

import headerImg from "../../static/img/sp23/header.png"
import beraterImg from "../../static/img/sp23/berater.png"
import coffeechatImg from "../../static/img/sp23/coffee-chat.png"
import findMeFoodImg from "../../static/img/sp23/find-me-food.png"
import studiousImg from "../../static/img/sp23/studious.png"
import catsImg from "../../static/img/sp23/cats.png"
import proceduralCityImg from "../../static/img/sp23/procedural-city.png"
import sparkPhotosImg from "../../static/img/sp23/spark-in-photos.png"

const Fall23 = () => {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ padding: "100px", textAlign: "center" }}>
          <FadeIn>
            <h3 style={{ fontSize: "1.6rem" }}>Penn Spark</h3>
            <h1 style={{ fontSize: "3rem" }}>Fall 2023 Showcase</h1>
            <br />
            <p id="sp22-back-button">
              <a href="/">
                <strong>&larr; Back Home</strong>
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
      <h1 style={{ fontSize: "3rem" }}>Coming soon!</h1>
      <div style={{ textAlign: "center", color: "#777777" }}>
        <br />
        <p style={{ fontSize: "1rem" }}>
          <em>Built with &#9829; by Meiling Mathur &amp; Spark</em>
        </p>
        <br />
      </div>
    </Layout>
  )
}

export default Fall23
