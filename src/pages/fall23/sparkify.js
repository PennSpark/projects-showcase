import React from "react"
import ProjectLayout from "../../components/fa23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Sparkify"
      projName={[<span style={{ color: "black" }}>Sparkify</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec68889e17_27_82
"
        >
          Slides here!
        </a>,
      ]}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec68889e17_27_82
"
      isCodingProject="True"
      people="Nwai Alfa, Jasmine Wang, Sonia Tam, Paul Loh, Matthew Cho, Luke Tong
"
      background="We wanted to make a moodboard for music by visualizing your music taste and creating shareable experiences. Our designers broke down the process of creating a collage, and our devs built an algorithm based on the process




"
      timeline={[
      ]}
      challenges={[
        
      ]}
      takeaways={[ ]}
      lookingForward={[
      ]}
    ></ProjectLayout>
  )
}
