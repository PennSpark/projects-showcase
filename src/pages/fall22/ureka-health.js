import React from "react"
import ProjectLayout from "../../components/fa22-project-layout"
import "semantic-ui-css/semantic.min.css"

import UrekaHealthHeader from "../../../static/img/sp21/habitat-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Ureka Health"
      projName={[<span style={{ color: "black" }}>Ureka Health</span>]}
      img={UrekaHealthHeader}
      demoUrl="https://ureka2.vercel.app/"
      sourcecodeUrl=""
      demoVisuals={[
        <iframe src="https://drive.google.com/file/d/1mxLN8rlK7gbV1g9YznoRafUpZm-W2wLB/preview" width="100%" height="500vw" />,
      ]}
      people={[<span style={{ color: "black" }}>Na Lee, Arush Mehrotra, Haley Kang, Yuni Kim, Myka Salvacion, Chelsea Cheng</span>]}
      background={[
        "Ureka Health, a social discovery platform focused on health and wellness, is on a mission to make healthy living for the everyday consumer easier. Ureka transforms the current product search experience: navigating generic articles and overwhelming product options into a more personalized, efficient, and trusted experience. The platform will focus on healthier skin first!",
      ]}
      blurb={[<span style={{ color: "black" }}>Giving health and wellness a fresh new look.</span>]}
      timeline={[
        <strong>Week 1-4</strong>,
        <br />,
        "Understanding the client’s needs, proposing branding re-design",
        <br />,
        <strong>Week 5-8</strong>,
        <br />,
        "Completed wireframe, mockups, and prototype",
        <br />,
        <strong>Week 9-12</strong>,
        <br />,
        "Implementation of the prototype and deployment",
        <br />,
      ]}
      challenges={[
        "Making and sticking to a timeline that clearly listed out all of the different components needed for the website and figuring out how to find and present a complete skincare product database.",
      ]}
      takeaways={[
        "Communicate often with the client, make objectives clear, and break work down into smaller chunks!"
      ]}
      lookingForward={[
        "Ureka will be implementing a marketplace to discover and buy products directly from the platform and thinking about expanding to include other wellness products.",
      ]}
    ></ProjectLayout>
  )
}
