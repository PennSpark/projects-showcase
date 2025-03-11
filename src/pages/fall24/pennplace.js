import React from "react"
import ProjectLayout from "../../components/fa24-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Penn Place"
      projName={[<span style={{ color: "black" }}>Penn Place</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://youtu.be/MGF-M5Sa_6Q
"
        >
          Github here!
        </a>,
      ]}
      demoUrl="https://github.com/PennSpark/fa24-3dplace
"
      isCodingProject="True"
      people="Shaurya Sarma, Joyce Chen, Luka Koll, Term Taepaisitphongse, Lori Brown, Nond Phokasub, Yue Zhao

"
      background="Penn Place was conceived as a way to explore collaborative digital art, building upon the incredible success of r/place on Reddit. However, we wanted to take the project a step further by asking the question: 'what if we extended it to 3D?' This one question inspired us to redefine the way users could collaboratively create art on the browser. As we took on the challenge of building this project, we were uncertain whether our vision for the 3D canvas would pan out. But this uncertainly made launching Penn Place even more exciting and left us curious about what people would build. We hoped Penn Place could celebrate Penn's creative culture by providing a space for students to collaborate in real-time."
timeline={[
    <div>
    <p>Phase 1: Ideation & Planning (Weeks 1–2)</p>
        <ul>
          <li>Defined project goals, drawing inspiration from r/place and 3D modeling tools.</li>
          <li>Outlined the core features and technical stack (React, Three.js, MongoDB, Redis, WebSockets).</li>
          </ul>
          <p>Phase 2: Core Development (Weeks 3–6)</p>
          <ul>
          <li>Frontend: Built voxel placement, color selection, UI elements, and real-time updates.</li>
          <li>Backend: Set up WebSocket server, MongoDB storage, Redis caching, and rate limiting.</li>
          <li>Design: Designed UI/UX elements with an emphasis on accessibility and ease of use.</li>
        </ul>
        <p>Phase 3: Testing & Refinement (Weeks 7–8)
        </p>
        <ul>
            <li>Implemented a mobile version with responsive UI to address the high chance of people viewing Penn Place on their phone screens </li>
            <li>Deployed a beta version and collected feedback within Spark </li></ul>
            <p>Launch & Event (Week 9: December 1–7, 2024)</p>
                <ul>
                    <li>Opened Penn Place to the public for a one-week collaborative experience.</li>
                    <li>Advertised throughout campus and social media to get Penn Students on the platform</li>
                    <li>Documented and compiled data for building a timelapse for showcase</li></ul></div>,
      ]}
      challenges={[
        <ul>
          <li>Designing an Intuitive 3D Interface: Navigating a 3D space is much more difficult and complex than a traditional 2D interface. We spent a long time designing the user experience (UX) flow where we wanted to simplify every click or gesture. If our interface was clunky, then people wouldn't want to build anything.</li>,
        <li>Ensuring Real-Time Performance at Scale: Since we were striving for real-time updates to the canvas, we had to take advantage of WebSockets. However, as users increased and more blocks were placed, the backend could potentially struggle keeping up. So we pivoted to using a combination of MongoDB and Redis caching (inspired by Reddit's own implementation) to address this concern.</li>
        </ul>
    ]}
      takeaways={[
        <ul>
            <li>Designing 3D on the web introduces unique UX challenges compared to 2D projects. But it allows for new forms of creativity and visual presentation.</li>

<li>Deploying can take a really long time. While we hosted everything using AWS, this was by no means an easy task. It could've just been that we were relatively new to a project of this scale, but making sure the domain was up, accessing the data from AWS's EC2 instance, and making updates to the website were all complicated procedures that took time to learn.</li>
<li>One of the most surprising and valuable moments of this project was when we reached out to a developer from Reddit who had worked on r/place. Initially, we didn’t expect a response, but to our surprise, he replied and shared insights into how Reddit handled real-time updates, data storage, and rate limiting at scale. This directly helped us implement our backend and showed us that asking for help can be an incredibly powerful tool. Not only that, multiple other members of Spark were amazing sources of advice when it came to building our backend as we had a lot of different approaches.</li>
</ul>
      ]}
      lookingForward={[
        <ul>
            <li>Run a second iteration of Penn Place with new features and a longer time window.</li>
            <li>Have better advertising to attract more users with a much bigger canvas</li>
            <li>Explore multi-server hosting to support more concurrent users</li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
