import React from "react"
import Layout from "../components/layout"
import "semantic-ui-css/semantic.min.css"
import FadeIn from "react-fade-in"

import headerImg from "../../static/img/header.png"

export default function Fall21() {
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          padding: "100px",
          textAlign: "center",
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FadeIn>
          <h3 style={{ fontSize: "1.6rem" }}>Penn Spark</h3>
          <h1 style={{ fontSize: "3rem" }}>Fall 2021 Showcase</h1>
        </FadeIn>
      </div>
    </Layout>
  )
}
