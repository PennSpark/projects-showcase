import React from "react"
import ProjectLayout from "../../components/sp24-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="SocialCalendar@PENN"
      projName={[<span style={{ color: "black" }}>SocialCalendar@PENN</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://youtu.be/tV9XxxSI2pg
"
        >
          Demo here!
        </a>,
      ]}
      demoUrl="https://youtu.be/tV9XxxSI2pg
"
      isCodingProject="True"
      people="Jasmine Wang, Luke Tong, Joseph Dattilo, Megan Yang, Andre van de Ven, Ani Nguyen Le, Fiona Jiang, Michael Li, Cindy Wei
"
      background="A convenient overview of where to eat, what to buy, and where to have fun around campus. Assist social organizations, stores, restaurants in gaining more visibility. Daily promo news 
& speedy ideas for
weekend fun.

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
