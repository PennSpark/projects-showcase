import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Catz"
      projName={[<span style={{ color: "black" }}>CATZ</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://marcelkida.github.io/cats/"
        >
          Demo here!
        </a>,
      ]}
      demoUrl="https://marcelkida.github.io/cats/"
      isCodingProject="False"
      people="Marcel Kida, Chelsea Cheng, Joyce He, Matthew Cho, Grace Thanglerdumpsan, Janice Kim, Joyce Yoon, Ryan De Lopez, Michelle Gong"
      background="We were tired of boring website projects. So we decided to make an all-form no function project showcasing 3D interactive scenes from the designers of Spark."
      timeline={[
        <ul>
          <li>Week 1: Find inspiration</li>
          <li>Week 2: Learn Spline</li>
          <li>Week 3: Work on 3D Model</li>
          <li>Week 4: Work on 3D Model</li>
          <li>Week 5: Work on 3D Model</li>
          <li>Week 6: Work on 3D Model</li>
          <li>Week 7: Work on 3D Model</li>
          <li>Week 8: Done</li>
        </ul>,
      ]}
      challenges={[
        <p>
          One of the biggest challenges was just learning the new software
          (Spline). Many of us are beginners when it comes to 3D, so it was an
          ordeal to learn a completely new software in less than a semester.
        </p>,
      ]}
      takeaways={[
        <p>
          We learned a lot about the challenges of 3D and it was eye-opening to
          see how 3D on the web has progressed.
        </p>,
      ]}
      lookingForward={[
        <p>
          We are still not fully satisfied with the website’s performance, so as
          a future step, we want to further optimize the site.
        </p>,
      ]}
    ></ProjectLayout>
  )
}
