import "semantic-ui-css/semantic.min.css"
import "../css/spring22.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid, Label } from "semantic-ui-react"

import headerImg from "../../static/img/sp23/header.png"
import boardoflifeImg from "../../static/img/fa23/boardoflife.png"
import sparkmakesthingsImg from "../../static/img/fa23/sparkmakesthings.png"
import sparkoflifeImg from "../../static/img/fa23/sparkoflife.png"
import sparkifyImg from "../../static/img/fa23/sparkify.png"

const Fall23 = () => {
  return (
    <Layout>
      <Grid container columns={3} style={{ margin: "auto"}}>
        

        <Grid.Column>
          <Project
            img={boardoflifeImg}
            url="/fall23/boardoflife"
            title="Board of Life"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            description="Meeting management platform equipped with AI coaching."
            people="Tobias Nguyen, Jason Saito, April Zhang, Jasper Zhu, Anna Xia, August Fu, Johnny Jeong, Sanya Shetty, Angie Cao, Sydney Simon
"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={sparkmakesthingsImg}
            url="/fall23/sparkmakesthings"
            title="Spark Makes Things"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="Where our creativity meets the physical world."
            people="Kashyap Chaturvedula, Emily Kang, Sey Nhyira Agbotey, Grace Thanglerdsumpan"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={sparkoflifeImg}
            url="/fall23/sparkoflife"
            title="The Spark of Life"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="An Exhibit on the Stages of Life"
            people="Andrew Chang, Marcel Kida, Ryan De Lopez, Nick Cirillo, Cindy Wei, Joyce Yoon, Joyce Chen, Grace Thanglerdsumpan, Claire Zhang, Isabelle Gu
"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={sparkifyImg}
            url="/fall23/sparkify"
            title="Sparkify"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="Music Moodboard Generator."
            people="Nwai Alfa, Jasmine Wang, Sonia Tam, Paul Loh, Matthew Cho, Luke Tong
"
          />
        </Grid.Column>

      </Grid>
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
