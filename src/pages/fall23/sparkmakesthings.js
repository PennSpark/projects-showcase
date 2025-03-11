import React from "react"
import ProjectLayout from "../../components/fa23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Spark Makes Things"
      projName={[<span style={{ color: "black" }}>Spark Makes Things</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec680f5ed9_3_5
"
        >
          Slides here!
        </a>,
      ]}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec680f5ed9_3_5
"
      isCodingProject="True"
      people="Kashyap Chaturvedula, Emily Kang, Sey Nhyira Agbotey, Grace Thanglerdsumpan
"
      background="In order to explore new opportunities to design, create, and build; we decided to create a creator’s project this semester. Our project members were given the freedom of tackling different problems in life and reimagining how these products could be produced. All of these projects were possible by exploring skillsets outside of programming and web development. These ranges from CAD, laser cutting, building circuits, and casting! From small home decors to electric-circuit cars, let’s hear about the design processes from each project team and feel free to come check out the products after the presentation!



"
      timeline={[
        <div>
        <p>Ideate:</p>
            <ul>
              <li>Didn’t want to make web project</li>
              <li>Got more into racing – wanted to make a mini mario kart/rally car</li>
              </ul>
              <p>Design:</p>
              <ul>
              <li>Preliminary design made using OnShape</li>
              <li>Electrical setup was more prototyping based              </li>
            </ul>
            <p>Manufacture:
            </p>
            <ul>
                <li>Plate-like components are laser cut at Tangen</li>
                <li>Everything else is 3d printed</li></ul></div>
      ]}
      challenges={[
        
      ]}
      takeaways={[ ]}
      lookingForward={[
      ]}
    ></ProjectLayout>
  )
}
