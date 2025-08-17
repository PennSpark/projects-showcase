import "semantic-ui-css/semantic.min.css"
import "../css/spring22.css"

import React from "react"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Project from "../components/project-cover"
import { Grid, Label } from "semantic-ui-react"

import headerImg from "../../static/img/sp23/header.png"
import socialcalendarImg from "../../static/img/sp24/social-calendar.png"
import pennmarketImg from "../../static/img/sp24/penn-market.png"
import pistachioImg from "../../static/img/sp24/pistachio.png"
import quickflicksImg from "../../static/img/sp24/quick-flicks.png"
import squishmodelImg from "../../static/img/sp24/squishmodel.jpg"
import roomiesImg from "../../static/img/sp24/roomies.png"

const Spring24 = () => {
  return (
    <Layout>

      <Grid container columns={3} style={{ margin: "auto"}}>
        
        <Grid.Column>
          <Project
            img={pistachioImg}
            url="/spring24/pistachio"
            title="Pistachio"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="Pistachio is a mobile app you can foster greater interaction between students at campuses by enabling anyone to post any niche polls about the school and respond to other students polls in a fun, competitive structure."
            people="Eric Lee, August Fu, Grace Thanglerdsumpan, Angie Cao, Lori Brown, Charles Jin, Namita Sajai"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={squishmodelImg}
            url="/spring24/squishmodel"
            title="SquishModel: Images to 3D"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="True"
            description="Mobile application to turn pictures of your stuffed animals into 3D models for memory preservation and virtual play!"
            people="James Baker, Joyce Chen, Meiling Mathur, Yue Zhao, Emily Kang, Sumanth Kadiyala, Johnny Jeong"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={quickflicksImg}
            url="/spring24/quickflicks"
            title="QuickFlicks"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="The movie glimpse minigame that tests a cinephile's knowledge!"
            people="Raphael Renzo Martinez, Xue Jiang, Fiona Herzog
"
          />
        </Grid.Column>

        

        <Grid.Column>
          <Project
            img={pennmarketImg}
            url="/spring24/pennmarket"
            title="Penn Market"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="An online marketplace for all your campus needs – from Penn students, for Penn students."
            people="Katherine Yue, David Lee, Nond Phokasub"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={socialcalendarImg}
            url="/spring24/socialcalendar"
            title="SocialCalendar@PENN"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="A one-stop shop for Penn students to find out about social events."
            people="Jasmine Wang, Luke Tong, Joseph Dattilo, Megan Yang, Andre van de Ven, Ani Nguyen Le, Fiona Jiang, Michael Li, Cindy Wei"
          />
        </Grid.Column>

        <Grid.Column>
          <Project
            img={roomiesImg}
            url="/spring24/roomies"
            title="Roomies"
            isCodingProject="True"
            isDesignProject="True"
            isClientProject="False"
            isCreativeProject="False"
            description="Roomies is an app designed to coordinate life with roommates."
            people="Gabriel Thiessen, Luna Chen, Raelynn Cui, Mary Liu"
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

export default Spring24
