import "semantic-ui-css/semantic.min.css"
import "../css/spring22.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid, Label} from "semantic-ui-react"

import headerImg from "../../static/img/sp22/header.png"
import artzPhillyImg from "../../static/img/sp22/artz-philly.png"
import gaiaAiImg from "../../static/img/sp22/gaia-ai.png"
import interviewsLiveImg from "../../static/img/sp22/interviews-live.png"
import pennPlaybookImg from "../../static/img/sp22/penn-playbook.png"
import matchamakerImg from "../../static/img/sp22/matchamaker.png"
import anxieteaImg from "../../static/img/sp22/anxietea.png"
import penneventsImg from "../../static/img/sp22/penn-events.png"

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
          <p id="sp22-back-button"><a href="/"><strong>&larr; Back Home</strong></a>&nbsp;
          {/* |&nbsp;<a href="https://docs.google.com/presentation/d/1B0M2ThQLYZZRnzj2Z4Ir9VI_SWkcCNry9RWcjLE0ShY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Demo Slides</a>&nbsp; */}
          |&nbsp;<a href="https://www.facebook.com/events/1207289143187707" target="_blank" rel="noopener noreferrer">Facebook Event</a></p>
        </FadeIn>
        </div>
      </div>

      <Grid container columns={3} style={{ margin: "auto", marginTop: "30px" }}>

        <Grid.Column>
            <Project
                img={interviewsLiveImg}
                url="/spring22/interviews-live"
                title="interviews.live"
                isCodingProject="True"
                isDesignProject="True"
                isClientProject="True"
                isCreativeProject="False"
                description="A smart interview prep platform to help you prepare for “that interview” and get your dream job."
                people="Subin Kim, Acelyn Choi, Jimmy Ciardullo, Claire Zhang"
            />
        </Grid.Column>

        <Grid.Column>
            <Project
                img={artzPhillyImg}
                url="/spring22/artz-philly"
                title="Artz Philly"
                isCodingProject="True"
                isDesignProject="True"
                isClientProject="True"
                isCreativeProject="False"
                description="A mobile application to help reduce the barriers for ARTZ Philly participants to join online programming."
                people="Anna Baringer, Eric Wang, Matthew Cho, Joyce He"
            />
        </Grid.Column>

        <Grid.Column>
            <Project
                img={gaiaAiImg}
                url="/spring22/gaia-ai"
                title="Gaia AI"
                isCodingProject="True"
                isDesignProject="True"
                isClientProject="True"
                isCreativeProject="False"
                description="Website design for Gaia AI, an MIT and Harvard startup using robotics and perception AI to make trees a viable, economical carbon sequestration solution."
                people="Chelsea Cheng, Yuhan Liu, Paul Loh, Arush Mehrotra, Sumanth Kadiyala, Eric Dai"
            />
        </Grid.Column>

        <Grid.Column>
            <Project
                img={pennPlaybookImg}
                url="/spring22/penn-playbook"
                title="Penn Playbook"
                isCodingProject="True"
                isDesignProject="True"
                isClientProject="False"
                isCreativeProject="True"
                description="Penn Playbook is a digital exhibit with 4 main installations showcasing different aspects of Penn life through the lens of current students."
                people="Marcel Kida, Andrew Jiang, Anna Xia, Ethan Zhao, Olivia Zha, Claire Zhang"
            />
        </Grid.Column>

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

        <Grid.Column>
          <Project
            img={anxieteaImg}
            url="/spring22/anxie-tea"
            title="anxie-tea"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            // additionalLabels={[<Label color="teal" style={{marginBottom:"6px"}}>🏆 Best Technical</Label>]}
            description="Mental health web app with mood, sleep, and anxiety trackers."
            people="Christiana Guan, Emily Guo, Na Kyung Lee, Sanya Shetty"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={penneventsImg}
            url="/spring22/penn-events"
            title="Penn Events"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            // additionalLabels={[<Label color="teal" style={{marginBottom:"6px"}}>🏆 Best Technical</Label>]}
            description="Connecting Penn students with on-campus events."
            people="Clyve Gassant, Yanjie Zhang, Myka Salvacion, Allison Zhang"
          />
        </Grid.Column>

    
      </Grid>
      <div style={{textAlign:"center", color:"#777777" }}>
        <br/><p style={{fontSize:"1rem"}}><em>Built with &#9829; by Grace Jiang, Christina Lu, &amp; Spark</em></p><br/>
      </div>
    </Layout>
  )
}
