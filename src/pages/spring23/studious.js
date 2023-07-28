import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import study0 from "../../../static/img/sp23/study0.png"
import study1 from "../../../static/img/sp23/study1.png"
import study2 from "../../../static/img/sp23/study2.png"
import study3 from "../../../static/img/sp23/study3.png"

export default function Home() {
  return (
    <ProjectLayout
      title="StudioUs"
      demoVisuals={[
        <img style={{ width: "25%" }} src={study0} />,
        <img style={{ width: "25%" }} src={study1} />,
        <img style={{ width: "25%" }} src={study2} />,
        <img style={{ width: "25%" }} src={study3} />,
      ]}
      projName={[<span style={{ color: "black" }}>StudyBuddies</span>]}
      img={header}
      sourcecodeUrl="https://github.com/PennSpark/sp23-blue-studybuddies"
      isCodingProject="True"
      people="Andre van de Ven, Emily Kang, April Zhang, Nwai Alfa; Mentors: Sumanth Kadiyala, Janice Kim"
      background="People in the Spark slack are always asking people to study with them. The messages are hard to keep track of, and some sessions inevitably get missed. If multiple groups are also trying to coordinate study sessions things get confusing as well. And sometimes it’s just hard to find people who are studying the same thing. "
      timeline={[
        <ol>
          <li>Ideation and Requirements Gathering</li>
          <li>Mockups and Design Stage</li>
          <li>Frontend and Backend Development</li>
          <li>Integration</li>
          <li>Showcase</li>
        </ol>,
      ]}
      challenges={[
        <ul>
          <li>What do students look for in a study session environment?</li>
          <li>Are students open to studying with people they don’t know?</li>
          <li>What kinds of study groups are most helpful for students?</li>
          <li>Are students in need of study groups or people to study with?</li>
        </ul>,
      ]}
      goals={
        "Our goal is to create an accessible, easy-to-use platform that brings together and connects Penn students. It will help diversify the perspectives of the student body through new friendships, and make socializing a little easier."
      }
      lookingForward={[
        "We plan to connect the frontend to the backend, then begin marketing the project on campus to build a userbase. ",
      ]}
    ></ProjectLayout>
  )
}
