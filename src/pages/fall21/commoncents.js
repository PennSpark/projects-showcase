import React from "react"
import ProjectLayout from "../../components/fa21-project-layout"
import "semantic-ui-css/semantic.min.css"

import commoncentsHeader from "../../../static/img/fa21/commoncents-header.png"
import commoncentsDemo from "../../../static/img/fa21/commoncents-demo.gif"


export default function Home() {
  return (
    <ProjectLayout
      title="Common Cents"
      img={commoncentsHeader}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/fa21-red-commoncents"
      demoVisuals={[
        <img src={commoncentsDemo} style={{ width: "100%" }} />
      ]}
      people="Acelyn Choi, Subin Kim, Andrew Li, Arush Mehrotra, Jimmy Ren, David Zhang, Ethan Zhao, Julia Deng"
      background={["We worked on building a user-facing web application for our client Common Cents, gamifying learning about student personal finance.  On the web application students can watch videos, complete quizzes, and track their attendance at Common Cents events in exchange for CC Coins.  Until this project, the bookkeeping for tracking attendance at events was done manually through Google forms without a unified platform. This resulted in several pain points and limitations on how much students could engage with the activities and track their progress in learning about financial literacy. The web application saves progress for each student automatically, allowing students to finish their tasks and keep track of them more conveniently. Our web application seeks  to improve overall student experience and increase incentive to work through these various activities.",
        <br />, <br />, <strong>Technologies Used</strong>,
        ": MongoDB, React, Node.js, Express.js, JavaScript, HTML, CSS"]}
      blurb="Gamified edtech platform for student personal finance"
      timeline={[
        "Our project had the following timeline:",
        <br />,
        <br />,

        <strong>Week 1</strong>,
        ": Meet with client, figure out MVP",
        <br />,
        <strong>Week 2</strong>,
        ": Research tech stack",
        <br />,
        <strong>Week 3</strong>,
        ": Account creation backend implementation",
        <br />,
        <strong>Week 4</strong>,
        ": Mockup UI for tasks pages",
        <br />,
        <strong>Week 5</strong>,
        ": Homepage + account creation pages frontend implementation",
        <br />,
        <strong>Week 6</strong>,
        ": All mockup UI, Tasks frontend + backend implementation",
        <br />,
        <strong>Week 7</strong>,
        ": Tasks backend +  frontend implementation",
        <br />,
        <strong>Week 8</strong>,
        ": Tasks backend +  frontend implementation, Integration testing",
      ]}
      takeaways={[
        <ul>
          <li><strong>Andrew L</strong>: I found this experience extremely valuable and interesting. I really got to learn more about backend development while working on this project</li>
          <li><strong>David Z</strong>: This was a really fun project where I learned so much more about the software development life cycle,  and specifically, I think I significantly improved my frontend development skills.</li>
          <li><strong>Ethan Z</strong>: This was my first time using React/HTML/CSS in a context that wasn’t just a personal project. Learning to recreate a design from Figma with HTML and CSS was a significant learning experience for me, and I’m extremely grateful for this opportunity as a developer</li>
          <li><strong>Arush M</strong>: This was a great learning experience as I was not only able to learn how to implement React/JS/HTML/CSS but also learn how to use source control through GitHub. I am really excited to build upon this foundation and work on more projects in the future</li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
