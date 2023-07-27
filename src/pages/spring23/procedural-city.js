import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Procedural City"
      projName={[<span style={{ color: "black" }}>Procedural City</span>]}
      img={header}
      sourcecodeUrl="https://github.com/PennSpark/sp23-procedural-city"
      demoVisuals={[
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/1XRC1sz3-N8"
        ></iframe>,
      ]}
      isCodingProject="True"
      people="Elyssa Chou, Praneel Chakraborty, Yuhan Liu, Rain Yan, Dineth Meegoda, Thomas Shaw, Ethan Zhao, August Fu, Kashyap Chaturvedula"
      background="Procedural City is a departure from many of the web focused projects of our past, involving mainly algorithm implementation and procedural graphics work. The dev team worked on an efficient 3D implementation of the Wave Function Collapse algorithm, while the design team produced 3D assets and used a variety of procedural techniques in Houdini, Substance Painter, and Gaia to turn the raw output into a vibrant medieval town."
      timeline={[
        "Our project had three major milestones, detailed below:",
        <br />,
        <br />,
        <strong>Milestone 1</strong>,
        ": Ideation and Requirements Gathering.",
        <br />,
        <strong>Milestone 2</strong>,
        ": Developer work to produce the underlying path system.",
        <br />,
        <strong>Final Milestone</strong>,
        ": Design work to post-process algorithm output and build the city",
      ]}
      challenges={[
        <ul>
          <li>
            Debugging the WFC implementation (and working with python's heapq)
          </li>
          <li>
            The turnaround between WFC implementation and showcase put designers
            in a time crunch
          </li>
          <li>Working with MEL/Python for Maya for the first time</li>
        </ul>,
      ]}
      takeaways={[
        <ul>
          <li>
            Pair programming can be extremely helpful for solving bugs, and can
            also be great for brainstorming new approaches.
          </li>
          <li>
            Working on 3D projects is fun, and an avenue we hope to continue
            pursuing with future projects.
          </li>
          <li>
            More time should be spent on software design at the beginning to
            ensure the correct tools are being used for the job.
          </li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
          <li>Porting the output to 3JS to create a webview</li>
          <li>
            Iterating on the WFC implementation (special tiles, rivers, bridges)
          </li>
          <li>Adapting to different themes</li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
