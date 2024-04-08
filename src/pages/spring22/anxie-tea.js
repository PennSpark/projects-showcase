import React from "react"
import ProjectLayout from "../../components/sp22-project-layout"
import "semantic-ui-css/semantic.min.css"

import headerImg from "../../../static/img/sp22/anxietea-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="anxie-tea"
      projName="anxie-tea"
      img={headerImg}

      // demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp22-blue-AnxieTea"
      demoVisuals=""
      people="Christiana Guan, Emily Guo, Na Kyung Lee, Sanya Shetty"
      background={[
        <p>Anxie-tea is a tea-themed mental wellness web application that serves as a mood tracker, anxiety tracker, and journaling app. It allows users to journal about their moods and feelings daily along with tracking sleep and anxiety symptoms. It tracks this over time, providing a calendar overview. Our goal is to help improve mental health and be able to track how you’re feeling and symptoms over time to identify common triggers or patterns.
          <br />
          <strong>Technologies Used</strong>: Figma, Django, HTML/CSS
        </p>
      ]}
      blurb="A wellness and journaling app that allows you to track anxiety and mood."
      timeline=""
      challenges=""
      takeaways={[
        <ul>
          <li>
            <strong>Christiana G</strong>: i need to finish the project specs
          </li>
          <li>
            <strong>Emily G</strong>: i need to finish the project specs
          </li>
          <li>
            <strong>Na Kyung L</strong>: i need to finish the project specs
          </li>
          <li>
            <strong>Sanya S</strong>: i need to finish the project specs
          </li>
        </ul>,
      ]}
      lookingForward={[
        "we should finish our project specs asap!"
      ]}
    ></ProjectLayout>
  )
}
