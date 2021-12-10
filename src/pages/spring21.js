import "semantic-ui-css/semantic.min.css"
import "../css/spring21.css"

import React from "react"
import Layout from "../components/layout"
import Project from "../components/project-cover"
import FadeIn from "react-fade-in"
import { Grid } from "semantic-ui-react"

import headerImg from "../../static/img/sp21/header.png"
import emojifierImg from "../../static/img/sp21/emojifier.png"
import clarifiImg from "../../static/img/sp21/clarifi.png"
import pogaImg from "../../static/img/sp21/poga.png"
import habitatImg from "../../static/img/sp21/habitat.png"
import arthubImg from "../../static/img/sp21/arthub.png"
import mysteryMuseumImg from "../../static/img/sp21/mystery-museum.png"
import mysteryMusicImg from "../../static/img/sp21/mystery-music.png"
import penntitionsImg from "../../static/img/sp21/penntitions.png"


export default function Spring21() {
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
          <h3 style={{ fontSize: "1.6rem" }}>Penn Creative Labs</h3>
          <h1 style={{ fontSize: "3rem" }}>Spring 2021 Showcase</h1><br/>
          <p id="sp21-back-button"><a href="/"><strong>&larr; Back Home</strong></a>&nbsp;|&nbsp;<a href="https://www.facebook.com/events/124758169604630/" target="_blank">Facebook Event</a></p>
        </FadeIn>
      </div>

      <Grid container columns={3} style={{ margin: "auto", marginTop: "30px" }}>
        <Grid.Column>
          <Project
            img={pogaImg}
            url="spring21/poga"
            title="Poga"
            isCodingProject="True"
            isDesignProject="True"
            description="A yoga-practicing app with a plant friend!"
            people="Jimmy Ren, Isabel An, Janice Kim, Wendy Wu, Charles Cheng, Brandon Adiele, Tinatin Kokoshvili, Andrew Zhang"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={clarifiImg}
            url="spring21/clarifi"
            title="Clarifi"
            isCodingProject="False"
            isDesignProject="True"
            description="Designed user interface for Clarifi, an app to help students with ADHD get work done by limiting distractions, rewarding students with points and levels, and providing planning tools."
            people="Elyssa Chou, Vivienne Chen, Kristine Lam"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={habitatImg}
            url="spring21/habitat"
            title="Habitat"
            isCodingProject="True"
            isDesignProject="True"
            description="Habitat is an iOS mobile app and a Penn-themed habit tracker."
            people="Maggie Yu, Logan Cho, Arushi Srivastava, Leon Hertzberg, Julia Deng, Xinyi Zheng"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={mysteryMuseumImg}
            url="spring21/mystery-at-museum"
            title="Mystery at Museum"
            isCodingProject="False"
            isDesignProject="True"
            description="This digital escape room is a design-only project created using Figma."
            people="Connie Lin, Elyssa Chou, Kristine Lam, Vivienne Chen"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={arthubImg}
            url="spring21/arthub"
            title="Arthub"
            isCodingProject="True"
            isDesignProject="True"
            description="A streamlined website where artists can upload their portfolios, order/complete commissions, and where recruiters can find and recruit talent."
            people="Norman Chen, Maggie Yu, Elaine Fan"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={mysteryMusicImg}
            url="spring21/mystery-music"
            title="Mystery Music"
            isCodingProject="True"
            isDesignProject="True"
            description="A four player game that tests how well you know your friends’ music tastes!"
            people="Linda Lu, David Zhang, Egret Jin, Lindsey Smith, Caroline Chin, Christy Qiu"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={penntitionsImg}
            url="spring21/penntitions"
            title="Penntitions"
            isCodingProject="True"
            isDesignProject="True"
            description="A petition website that allows Penn students to make an impact."
            people="Janna Goliff, Ahmed Laban, Helena Zhang, Aryan Nagariya, Janice Kim"
          />
        </Grid.Column>
        <Grid.Column>
          <Project
            img={emojifierImg}
            url="spring21/emojifier"
            title="Emojifier"
            isCodingProject="True"
            isDesignProject="False"
            description="Interactive website that uses machine learning to detect and classify emotions within an image."
            people="Grace Jiang, Jerry Qin, Aarushi Singh, Acelyn Choi, Aditya Gupta, Shelly Wu, Subin Kim"
          />
        </Grid.Column>
      </Grid>
    </Layout>
  )
}
