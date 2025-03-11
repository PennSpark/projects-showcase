import React from "react"
import ProjectLayout from "../../components/fa23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="The Spark of Life"
      projName={[<span style={{ color: "black" }}>The Spark of Life</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://www.youtube.com/watch?v=jmo1LZdjwf0&embeds_referring_euri=https%3A%2F%2Fdocs.google.com%2F&embeds_referring_origin=https%3A%2F%2Fdocs.google.com&source_ve_path=Mjg2NjY&themeRefresh=1
"
        >
          Slides here!
        </a>,
      ]}
      demoUrl="https://docs.google.com/presentation/d/1jJsiyqqH1yEOyvhShWdY2nrE6nWcAVf0gSod4fk9SYc/edit?usp=sharing#slide=id.g1ec680f5ed9_0_0
"
      isCodingProject="True"
      people="Andrew Chang, Marcel Kida, Ryan De Lopez, Nick Cirillo, Cindy Wei, Joyce Yoon, Joyce Chen, Grace Thanglerdsumpan, Claire Zhang, Isabelle Gu
"
      background="Our team wanted to put together an exhibit capturing the different stages of life through interesting digital exhibits. We’ve created four different digital artifacts, each meant to capture a different stage of life, starting from infancy and going to adulthood. All of these will be in display in the side room after the presentation, so please go check them out!




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
