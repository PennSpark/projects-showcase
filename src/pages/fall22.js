import "semantic-ui-css/semantic.min.css"
import "../css/fall21.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid, Label } from "semantic-ui-react"

import headerImg from "../../static/img/fa22/header.png"
import respondImg from "../../static/img/fa22/respond.png"
import urekaImg from "../../static/img/fa22/ureka.png"


export default function Fall22() {
  return (
    <Layout>
      <Grid container columns={3} style={{ margin: "auto"}}>
        <Grid.Column>
          <Project
            img={respondImg}
            url="/fall22/respond-crisis"
            title="Respond Crisis Translation"
            isCodingProject="True"
            isDesignProject="False"
            isClientProject="True"
            isCreativeProject="False"
            // additionalLabels={[<Label color="teal" style={{ marginBottom: "6px" }}>🏆 Best Technical</Label>]}
            description="A database re-design for a non-profit team handling more than 2500 translators through automation and ease of use. "
            people="Paul Loh, Sumanth Kadiyala, Marcel Kida, Joyce He, Kristine Lam"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={urekaImg}
            url="/fall22/ureka-health"
            title="Ureka Health"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            additionalLabels={[<Label color="teal" style={{ marginBottom: "6px" }}>🏆 Best Red</Label>]}
            description="Giving health and wellness a fresh new look."
            people="Na Lee, Arush Mehrotra, Haley Kang, Yuni Kim, Myka Salvacion, Chelsea Cheng"
          />
        </Grid.Column>

        {/* <Grid.Column>
          <Project
            img={bonfireImg}
            url="/fall21/bonfire"
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
            url="/fall21/commoncents"
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
            additionalLabels={[<Label color="teal" style={{ marginBottom: "6px" }}>🏆 Best Design</Label>]}
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
            additionalLabels={[<Label color="teal" style={{ marginBottom: "6px" }}>🏆 Best Blue</Label>, <Label color="teal" style={{ marginBottom: "6px" }}>🏆 Coolest Idea</Label>]}
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
        </Grid.Column> */}
      </Grid>
      <div style={{ textAlign: "center", color: "#777777" }}>
        <br /><p style={{ fontSize: "1rem" }}><em>Built with &#9829; by Jimmy Ren &amp; Spark</em></p><br />
      </div>
    </Layout>
  )
}
