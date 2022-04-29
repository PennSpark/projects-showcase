import "semantic-ui-css/semantic.min.css"
import "../css/spring22.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid, Label} from "semantic-ui-react"

import headerImg from "../../static/img/sp22/header.png"
import matchamakerImg from "../../static/img/sp22/matchamaker.png"


export default function Spring22() {
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
        <div style={{padding: "100px", textAlign: "center",}}>
        <FadeIn>
          <h3 style={{ fontSize: "1.6rem" }}>Penn Spark</h3>
          <h1 style={{ fontSize: "3rem" }}>Spring 2022 Showcase</h1><br/>
          <p id="fa21-back-button"><a href="/"><strong>&larr; Back Home</strong></a>&nbsp;
          {/* |&nbsp;<a href="https://docs.google.com/presentation/d/1B0M2ThQLYZZRnzj2Z4Ir9VI_SWkcCNry9RWcjLE0ShY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Demo Slides</a>&nbsp; */}
          |&nbsp;<a href="https://www.facebook.com/events/1207289143187707" target="_blank" rel="noopener noreferrer">Facebook Event</a></p>
        </FadeIn>
        </div>
      </div>

      <Grid container columns={3} style={{ margin: "auto", marginTop: "30px" }}>
      <Grid.Column>
          <Project
            img={matchamakerImg}
            url="/spring22/matchamaker"
            title="Matcha Maker"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            // additionalLabels={[<Label color="teal" style={{marginBottom:"6px"}}>🏆 Best Technical</Label>]}
            description="A website that makes coffee chatting easier and more fun!"
            people="Alyssa Nie, Rain Yan, Dhatri Medarametla, Claire Zhang"
          />
        </Grid.Column>

    
      </Grid>
      <div style={{textAlign:"center", color:"#777777" }}>
        <br/><p style={{fontSize:"1rem"}}><em>Built with &#9829; by Grace Jiang, Christina Lu, &amp; Spark</em></p><br/>
      </div>
    </Layout>
  )
}
