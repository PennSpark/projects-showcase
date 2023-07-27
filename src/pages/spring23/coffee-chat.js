import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import demo from "../../../static/img/sp23/coffeechat.svg"

export default function Home() {
  return (
    <ProjectLayout
      title="Coffeechat"
      demoVisuals={[<img src={demo} />]}
      projName={[<span style={{ color: "black" }}>Coffeechat</span>]}
      img={header}
      sourcecodeUrl="https://github.com/PennSpark/sp23-blue-coffeechat"
      isCodingProject="True"
      people="Nick Cirillo, Kai Wang, Isabelle Gu, Maliha Rahman; Mentors: Joyce He, Anna Xia"
      background="Academics and extracurriculars take up so much of a Penn student’s life that meeting new people can be difficult. Coffee Chat is an easy way to meet new people you wouldn’t meet otherwise! Our inspiration for Coffeechat? The Penn Spark “coffee chat” system mixed with a platonic version of the Penn Marriage Pact."
      timeline={[
        <ol>
          <li>Ideation and Requirements Gathering</li>
          <li>Mockups and Design Stage</li>
          <li>Frontend and Backend Development</li>
          <li>Integration</li>
          <li>Showcase</li>
        </ol>,
      ]}
      challenges={[
        <ul>
          <li>
            We need to ask some questions to make sure Coffeechat has an
            audience. For example, how diverse are friend groups on campus in
            terms of years, majors, gender, race, etc.?{" "}
          </li>
          <li>How satisfied are people with their friend groups?</li>
          <li>What do people look for when creating friendships?</li>
          <li>
            How willing are students to branch out of their established groups?
          </li>
          <li>
            How willing would students be to be randomly matched with another
            student and have a coffee chat with them?
          </li>
          <li>
            Once we can find answers to these questions, we can adapt our
            strategy to better target the Penn student body.
          </li>
        </ul>,
      ]}
      goals={
        "Our goal is to create an accessible, easy-to-use platform that brings together and connects Penn students. It will help diversify the perspectives of the student body through new friendships, and make socializing a little easier."
      }
      lookingForward={[
        "We plan to pursue the questions in our challenges/research section and use that to develop our strategy. Next, we’ll come up with a more detailed plan of the layout and visual/technical design of the site. Finally, we’ll build the website using a tech stack of React with Bootstrap or Tailwind on the frontend, and either Node.js or Django on the backend.",
      ]}
    ></ProjectLayout>
  )
}
