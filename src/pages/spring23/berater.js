import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Berater"
      demoVisuals={[<img style={{ width: "100%" }} src={demo}></img>]}
      projName={[<span style={{ color: "black" }}>BeRater</span>]}
      img={header}
      sourcecodeUrl="https://github.com/PennSpark/sp23-blue-berater"
      isCodingProject="True"
      people="Zain Khan, Sanya Shetty, Sydney Simon, Yanjie Zhang, Tobias Nguyen; Mentors: Christiana Guan, Alyssa Nie, Jimmy Ren, Janice Kim"
      background="We thought normal productivity apps were either too boring or do not have enough incentives for people to carry out their tasks. We came up with ways to gamify and add a mean twist to productivity apps. Berater is a productivity app that sends them harmless berating notifications for various tasks that they have to complete and rewards them for completing the tasks."
      timeline={[
        "Our project roadmap:",
        <br />,
        <img style={{ width: "100%" }} src={roadmap}></img>,
      ]}
      challenges={[
        <ul>
          <li>Do insults motivate people?</li>
          <li>If so, what kind of people do they motivate?</li>
          <li>
            What kind of tasks do people need help accomplishing, as in what
            tasks do people tend to procrastinate?
          </li>
          <li>
            Would people download an app if they knew they’d be constantly
            insulted?
          </li>
          <li>
            How much balance is a healthy balance between positive and negative
            reinforcement?
          </li>
        </ul>,
      ]}
      goals={
        "The project aims to increase the productivity, health, and general well being of its users, acknowledging that sometimes people function better under different forms of motivation. Particularly with students who procrastinate on assignments or people who want to be healthier, sometimes intrinsic motivation isn’t enough. We recommend that users use this app only if they believe that negative reinforcement will motivate them. "
      }
      lookingForward={[
        "We look forward to researching the concept of negative reinforcements more, and finding ways to incorporate it into our project to make it a unique way to gamify daily tasks and promote productivity. We also look forward to tackling the technical challenges of implementing this tasks on mobile or website platforms, and marketing the project towards the student community.",
      ]}
    ></ProjectLayout>
  )
}
