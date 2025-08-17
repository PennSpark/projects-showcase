import "semantic-ui-css/semantic.min.css"
import "../css/spring22.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid, Label } from "semantic-ui-react"

import headerImg from "../../static/img/sp23/header.png"
import pennpinsImg from "../../static/img/fa24/pennpins.png"
import pennplaceImg from "../../static/img/fa24/pennplace.png"
import strideImg from "../../static/img/fa24/stride.png"

const Fall24 = () => {
  return (
    <Layout>

      <Grid container columns={3} style={{ margin: "auto"}}>
        

        <Grid.Column>
          <Project
            img={pennplaceImg}
            url="/fall24/pennplace"
            title="Penn Place"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="Penn Place is a collaborative 3D digital art experiment, inviting users to build art inside a shared voxel canvas in real-time."
            people="Shaurya Sarma, Joyce Chen, Luka Koll, Term Taepaisitphongse, Lori Brown, Nond Phokasub, Yue Zhao
"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={strideImg}
            url="/fall24/stride"
            title="Stride"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="Get rewarded for traveling sustainably around Philadelphia."
            people="Meiling Mathur, Gabriel Thiessen, David Lee, Andrei Piterbarg, Emmi Wu, Fiona Herzog, Sarah Chan"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={pennpinsImg}
            url="/fall24/pennpins"
            title="Penn Pins"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="A social exploration app designed to help students discover campus and connect with each other in real life."
            people="Estelle Kim, Michael Li, Angie Cao, Eric Lee, Katherine Yue, Mary Liu, Ruth Zhao
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

export default Fall24
