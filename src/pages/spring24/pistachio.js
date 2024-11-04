import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Pistachio"
      projName={[<span style={{ color: "black" }}>Pistachio</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://github.com/PennSpark/sp24-vote-on-life
"
        >
          Github here!
        </a>,
      ]}
      demoUrl="https://github.com/PennSpark/sp24-vote-on-life
"
      isCodingProject="True"
      people="Eric Lee, August Fu, Grace Thanglerdsumpan, Angie Cao, Lori Brown, Charles Jin, Namita Sajai
"
      background="Pistachio is a mobile app you can foster greater interaction between students at campuses by enabling anyone to post any niche polls about the school and respond to other students polls in a fun, competitive structure."
      timeline={[
        <p>
            January 2024 to April 2024
        </p>,
      ]}
      challenges={[
        <p>
          Optimizing database queries using pagination, making design choices that enhance user experience and improving responsiveness. Deploying.
        </p>,
      ]}
      lookingForward={[
        <p>
          Possibility of continuing Fall 2025
        </p>,
      ]}
    ></ProjectLayout>
  )
}
