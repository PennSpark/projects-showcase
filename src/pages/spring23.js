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

const Spring23 = () => {
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
            <h1 style={{ fontSize: "3rem" }}>Spring 2023 Showcase</h1>
            <br />
            <p id="sp22-back-button">
              <a href="/">
                <strong>&larr; Back Home</strong>
              </a>
              &nbsp;
              {/* |&nbsp;<a href="https://docs.google.com/presentation/d/1B0M2ThQLYZZRnzj2Z4Ir9VI_SWkcCNry9RWcjLE0ShY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Demo Slides</a>&nbsp; */}
              |&nbsp;
              <a
                href="https://www.facebook.com/events/888459988926734?active_tab=about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Event
              </a>
            </p>
          </FadeIn>
        </div>
      </div>

      <Grid container columns={3} style={{ margin: "auto", marginTop: "30px" }}>
        <Grid.Column>
          <Project
            img={proceduralCityImg}
            url="/spring23/procedural-city"
            title="Procedural City"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="A medieval fantasy city generated using a combination of procedural techniques, including the Wave Function Collapse algorithm and Houdini's node based tools."
            people="Elyssa Chou, Praneel Chakraborty, Yuhan Liu, Rain Yan, Dineth Meegoda, Thomas Shaw, Ethan Zhao, August Fu, Kashyap Chaturvedula"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={catsImg}
            url="/spring23/catz"
            title="CATZ"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            description="Not another boring project. Cats is a collection of interactable 3D scenes created by Spark's designers."
            people="Marcel Kida, Chelsea Cheng, Joyce He, Matthew Cho, Grace Thanglerdumpsan, Janice Kim, Joyce Yoon, Ryan De Lopez, Michelle Gong"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={sparkPhotosImg}
            url="/spring23/spark-in-photos"
            title="Spark in Photos"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="True"
            isCreativeProject="False"
            description="Spark-in-photos serves as an online photo album- a way of automatically collecting and showcasing all the memories within Spark (and our Slack) in one place."
            people="Paul Loh, Christiana Guan, Jasper Zhu, Cindy Wei, Haley Kang, Dhatri Medarametla, Marcel Kida"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={findMeFoodImg}
            url="/spring23/find-me-food"
            title="FindMeFood"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="FindMeFood is the community-based app for finding local food trucks. Add your favorite spots in University City and find new ones!"
            people="Jason Saito, James Baker, Nicole Zhao, Razaq Aribidesi, Sey Nhyira Agbotey; Mentors: Eric Wang, Chelsea Cheng"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={beraterImg}
            url="/spring23/berater"
            title="BeRater"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            // additionalLabels={[<Label color="teal" style={{marginBottom:"6px"}}>🏆 Best Technical</Label>]}
            description="BeRater is a social platform for motivation- hold your friends accountable throughout the day in fun ways."
            people="Zain Khan, Sanya Shetty, Sydney Simon, Yanjie Zhang, Tobias Nguyen; Mentors: Christiana Guan, Alyssa Nie, Jimmy Ren, Janice Kim"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={coffeechatImg}
            url="/spring23/coffee-chat"
            title="coffeechat"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            // additionalLabels={[<Label color="teal" style={{marginBottom:"6px"}}>🏆 Best Technical</Label>]}
            description="An extension of Spark's internal coffee chat system... meet people with similar interests on campus."
            people="Nick Cirillo, Kai Wang, Isabelle Gu, Maliha Rahman; Mentors: Joyce He, Anna Xia"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={studiousImg}
            url="/spring23/studious"
            title="studioUS"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            // additionalLabels={[<Label color="teal" style={{marginBottom:"6px"}}>🏆 Best Technical</Label>]}
            description="Meet other students on campus to study for classes you have in common."
            people="Andre van de Ven, Emily Kang, April Zhang, Nwai Alfa; Mentors: Sumanth Kadiyala, Janice Kim"
          />
        </Grid.Column>
      </Grid>
      <div style={{ textAlign: "center", color: "#777777" }}>
        <br />
        <p style={{ fontSize: "1rem" }}>
          <em>Built with &#9829; by Grace Jiang, Christina Lu, &amp; Spark</em>
        </p>
        <br />
      </div>
    </Layout>
  )
}

export default Spring23
