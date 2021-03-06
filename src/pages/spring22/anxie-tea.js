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
      demoVisuals={[
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/XZyo3OfG80U"></iframe>
      ]}
      people="Christiana Guan, Emily Guo, Na Kyung Lee, Sanya Shetty"
      background={[
        <p>Anxie-tea is a tea-themed mental wellness web application that serves as a mood tracker, anxiety tracker, and journaling app. It allows users to journal about their moods and feelings daily along with tracking sleep and anxiety symptoms. It tracks this over time, providing a calendar overview. Our goal is to help improve mental health and be able to track how you’re feeling and symptoms over time to identify common triggers or patterns. 
            <br/>
            <strong>Technologies Used</strong>: Figma, Django, HTML/CSS
        </p>
      ]}
      blurb="A wellness and journaling app that allows you to track anxiety and mood."
      timeline={["plz finish ur proj specs"
        // <strong>Week 0</strong>,
        // <br />,
        // <ul>
        //   <li>Draft project plan and timeline</li>
        // </ul>,
        // <br />,
        // <strong>Week 1</strong>,
        // <br />,
        // <ul>
        //   <li>Development and design begins</li>
        //   <li>Get feedback on project plan and timeline</li>
        // </ul>,
        // <br />,
        // <strong>Week 2</strong>,
        // <br />,
        // <ul>
        //   <li>Incorporate feedback from users to project plan</li>
        //   <li>Low-fi design mockup</li>
        //   <li>Boilerplate development setup</li>
        // </ul>,
        // <br />,
        // <strong>Week 3</strong>,
        // <br />,
        // <ul>
        //   <li>High-fi design mockup</li>
        //   <li>
        //     Draft of meeting page, Connect with Friends, Home page functionality
        //   </li>
        // </ul>,
        // <br />,
        // <strong>Week 4</strong>,
        // <br />,
        // <ul>
        //   <li>Get translations from ARTZ Philly team</li>
        //   <li>Prototype design due</li>
        //   <li>Draft pages done</li>
        //   <li>
        //     Draft of Announcements page, Social Media page, Contact Us Page
        //     functionality
        //   </li>
        // </ul>,
        // <br />,
        // <strong>Week 5</strong>,
        // <br />,
        // <ul>
        //   <li>Spring break</li>
        // </ul>,
      ]}
      challenges={[
        "plz finizh ur proj specs :((("
      ]}
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
