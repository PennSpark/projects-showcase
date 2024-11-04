import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Penn Market"
      projName={[<span style={{ color: "black" }}>Penn Market</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://youtu.be/RxUGE6g2Kgs"
        >
          Demo here!
        </a>,
      ]}
      demoUrl="https://youtu.be/RxUGE6g2Kgs"
      isCodingProject="True"
      people="Katherine Yue, David Lee, Nond Phokasub"
      background="Have you ever wanted to give away your MATH1410 textbook that you never touched? Or, have you ever wanted to see all the subletting options in a single place rather than in a GroupMe? If so, then Penn Market is for you!
Penn Market is a place for Penn students to buy and sell almost anything students here need, from educational materials to housing and other lifestyle items. We found that finding these things on resources like Facebook Marketplace is daunting and too generic – thus, we sought to develop a more personalized platform for Penn students, in which, as a student, you can search up products, buy/sell, and compile what you have purchased or put up for sale."
      timeline={[
        <ul>
          <li>Week 1  (1/22-1/28): Set up Github repo and Figma, grant access to Blue VP and mentors, set up group timeline, review resources for mentors and other helpful people</li>
          <li>Week 2 (1/29-2/4): Developers: link frontend/backend, Designers: finalize features + redesigning logo</li>
          <li>Week 3 (2/5 - 2/11) : Developers: setup product database & user information database, Designers: first draft hi-fi mockup for all pages</li>
          <li>Week 4 (2/12 - 2/18): Developers: implement product posting function, Designers: second draft hi-fi mockup for all pages</li>
          <li>Weeks 5 & 6 (2/26 - 3/3): Devs/Designers: Work on deliverables for Week 7 & 8</li>
          <li>Week 7 (3/4 - 3/10): Developers: implement category search with product tags & flush out product posting functionality
can search based on tags and name, Designers: final hi-fi draft / modifications </li>
          <li>Week 9 (3/18 - 3/24): Developers: frontend home page & instruction page, implement user authentication (including required penn email), Designers: hi-fi updates based on midpoint feedback</li>
          <li>Week 10 (3/25 - 3/31): Developers: frontend user pages, implement personalized sessions, Designers: hi-fi updates based on midpoint feedback </li>
          <li>Week 11 (4/1 - 4/7): Developers: frontend product pages, continue implementing personalized sessions, Designers: hi-fi updates based on midpoint feedback </li>
          <li>Week 12 (4/8 - 4/14): Developers: frontend search pages, integration with backend features, Designers: final updates based with current implementation</li>
          <li>Week 13 (4/15 - 4/21): Developers: implementation of final design tweaks, Designers: final updates based with current implementation </li>
          <li>Week 14 (4/22 - 4/29): SHOWCASE! </li>
        </ul>,
      ]}
      challenges={[
        <p>
          There were some initial challenges in connecting the frontend with backend, but we were very grateful to have online resources and mentors who helped us out with this crucial part. Towards the end, we faced some more challenges with user authentication and personalized pages – up to this point, we were purely using Postgres, but we added Supabase to our arsenal as well to utilize its features with sessions. In terms of design, the main challenge was applying the tools we learnt from the bootcamp to a real-life design problem. Designing for users was much more complicated than we initially thought as there were many fine details that needed to be considered (such as user flow, icon size etc) in order to ensure the user experience was easy to use and navigate.
        </p>,
      ]}
      takeaways={[
        <ul>
            <li>Katherine Y. – leading a project & breaking its components, setting up and integrating backend features, and in general, finding joy in creating this marketplace as a solution for students!</li>

<li>David L. – seeing our combined efforts transform from an idea into a functional, user-centered platform was both exciting and motivating, and it has strengthened my enthusiasm for developing impactful solutions through teamwork!</li>

<li>Nond P. – applying design concepts to a real life application, bringing an idea of how to address a user's pain points to life through design, problem solving through design and enjoying the experience of trying out new things and learning more on the way!</li>
          </ul>
      ]}
      lookingForward={[
        <p>
          When we first set about this project, we had also brainstormed some features that had a focus on sustainability to encourage user engagement and provide a more gamified experience, so those are some stretch features that we would work on in the future.
        </p>,
      ]}
    ></ProjectLayout>
  )
}
