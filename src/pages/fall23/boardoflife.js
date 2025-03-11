import React from "react"
import ProjectLayout from "../../components/fa23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Board of Life"
      projName={[<span style={{ color: "black" }}>Board of Life</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://drive.google.com/file/d/1Ct_MiSQgFq6aSCo0qTyFwK7h4hncQZ9x/view?resourcekey
"
        >
          Slides here!
        </a>,
      ]}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec68889e17_46_0
"
      isCodingProject="True"
      people="Tobias Nguyen, Jason Saito, April Zhang, Jasper Zhu, Anna Xia, August Fu, Johnny Jeong, Sanya Shetty, Angie Cao, Sydney Simon
"
      background="Meeting management platform equipped with AI coaching. Target users: leaders, CEOs, decision makers. User selects AIs to converse with and get feedback on meetings. Personalization: use user’s background and experiences in generating personalized feedback


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
