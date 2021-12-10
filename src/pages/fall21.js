import "semantic-ui-css/semantic.min.css"
import "../css/fall21.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid } from "semantic-ui-react"

import headerImg from "../../static/img/fa21/header.png"
import igniteImg from "../../static/img/fa21/ignite.png"
import penntixImg from "../../static/img/fa21/penntix.png"
import popplexImg from "../../static/img/fa21/popplex.png"
import clarifiImg from "../../static/img/fa21/clarifi.png"
import counselabImg from "../../static/img/fa21/counselab.png"
import bonfireImg from "../../static/img/fa21/bonfire.png"
import commoncentsImg from "../../static/img/fa21/common-cents.png"

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
          <h1 style={{ fontSize: "3rem" }}>Fall 2021 Showcase</h1><br/>
          <p id="fa21-back-button"><a href="/"><strong>&larr; Back Home</strong></a>&nbsp;|&nbsp;<a href="https://www.facebook.com/events/229535855929777" target="_blank">Facebook Event</a></p>
        </FadeIn>
      </div>

      <Grid container columns={3} style={{ margin: "auto", marginTop: "30px" }}>
      <Grid.Column>
          <Project
            img={clarifiImg}
            url="/fall21/"
            title="Clarifi"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            description="Clarifi is a product to help the 4.1 million teen students with ADHD to plan and complete their work."
            people="Anna Xia, Andrew Jiang, Kevin Zhou, Chelsea Cheng"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={counselabImg}
            url="/fall21/"
            title="Counselab"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            description="A Marketplace for 1:1 Advising Sessions"
            people="Marcel Kida, Alexander Zheng, Rachel Pierce"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={bonfireImg}
            url="/fall21/"
            title="Bonfire"
            isCodingProject="False"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            description="Gather around. Hangout offline."
            people="Janice Kim, Isabel An, Joyce He"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={commoncentsImg}
            url="/fall21/"
            title="Common Cents"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            description="Gamified edtech platform for student personal finance."
            people="Acelyn Choi, Subin Kim, Andrew Li, Arush Mehrotra, Jimmy Ren, David Zhang, Ethan Zhao, Julia Deng"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={popplexImg}
            url="/fall21/popplex"
            title="Popplex"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="Let’s pop your class perplexion!"
            people="Elaine Fan, Arushi Srivastava, Michelle Seiyon Lee, Paul Loh"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={penntixImg}
            url="/fall21/penntix"
            title="Penn Tix"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="Penn’s premiere ticket reselling platform."
            people="Matthew Dong, Yuhan Liu, Claire Zhang, Ethan Zhao"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={igniteImg}
            url="/fall21/ignite"
            title="Ignite"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="Dynamic website that serves to provide creative inspiration."
            people="Anna Baringer, James Ciardullo, Will Liang, Homer Wang, Rain Yan"
          />
        </Grid.Column>
      </Grid>
      <div style={{textAlign:"center", color:"#777777" }}>
        <br/><p style={{fontSize:"1rem"}}><em>Built with &#9829; by Grace Jiang, Claire Zhang, &amp; Spark</em></p><br/>
      </div>
    </Layout>
  )
}
