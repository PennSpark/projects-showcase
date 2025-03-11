import React from "react"
import ProjectLayout from "../../components/fa24-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Stride"
      projName={[<span style={{ color: "black" }}>Stride</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://drive.google.com/file/d/1kXokGZT3RoNulTmXKC_fSRpETctT5EmQ/view?resourcekey

"
        >
          Demo here!
        </a>,
      ]}
      demoUrl="https://drive.google.com/file/d/1kXokGZT3RoNulTmXKC_fSRpETctT5EmQ/view?resourcekey

"
      isCodingProject="True"
      people="Meiling Mathur, Gabriel Thiessen, David Lee, Andrei Piterbarg, Emmi Wu, Fiona Herzog, Sarah Chan
"
      background="Stride is an app that encourages users to travel sustainably around Philadelphia by finding the fastest walking, cycling, and SEPTA (the Philly transit system) routes between waypoints. Users can log the trips they make with our app to calculate how much CO2 emissions they’ve saved by traveling sustainably, as well as view how much CO2 their friends have saved."
timeline={[
    <ul>
        <li>Reach out to Delaware Valley Regional Planning Commission (DVRPC) and Clean Air Council (CAC) to conduct stakeholder interviews</li>
        <li>Formalize MVP requirements and tech stack</li>
        <li>Create lo-fi designs and backend routes</li>
        <li>Progress lo-fi designs to hi-fis and build out the backend and database</li>
        <li>Start building the frontend</li>
        <li>Finalize hi-fi designs and implement them on the frontend; have working API calls for the backend</li>
        <li>Frontend-backend integration</li>
        <li>Showcase and present our work to stakeholders for advice on future work</li>
    </ul>

      ]}
      challenges={[
        <ul>
          <li> </li>
        </ul>
    ]}
      takeaways={[
        <ul>
            <li>When planning a project with a lot of ideated features, it's important to know which features to prioritize for your MVP first.</li>
            <li>User research and stakeholder interviews are key for developing useful products</li>
            <li>Leave lots of time for frontend-backend integration</li>
</ul>
      ]}
      lookingForward={[
        <p>Deploy a stable build and start getting user feedback</p>,
      ]}
    ></ProjectLayout>
  )
}
