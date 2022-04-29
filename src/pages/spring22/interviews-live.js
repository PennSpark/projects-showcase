import React from "react"
import ProjectLayout from "../../components/sp22-project-layout"
import "semantic-ui-css/semantic.min.css"

import interviewsLiveHeader from "../../../static/img/sp22/interviews-live-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="interviews.live"
      img={interviewsLiveHeader}
      demoUrl=""
      sourcecodeUrl=""
      demoVisuals={[
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/GpVwSIa7Wpw"></iframe>
      ]}
      people="Subin Kim, Jimmy Ciardullo, Acelyn Choi, Claire Zhang"
      background={[
        "Recruiting is difficult - the process could be extremely stressful and ambiguous to navigate and often end up being resource and time-consuming - and the global pandemic has made it even more so…",
        <br />,
        <br />,
        "Interviews.live is a smart interview prep platform designed to help students and professionals prepare for “that interview” to get their dream job. Built on a powerful web application with 460K+ real interview questions across 91K+ organizations and 100+ professions, Interviews.live provides diversified, intelligent, and automated support to users while creating a safe, accessible, and exploratory environment for preparing for their job applications and their next big interviews.",
        <br />,
        <br />,
        "Throughout the development period,  our team  rebranded the web application from MockingJ to interviews.live, delivering design assets (logo, color palette, typography) and mockups for existing pages consistent with the redefined website UI/UX.  We implemented an interactive, animated landing page and a Manage Applications feature for the users to organize and manage upcoming interviews.",
      ]}
      blurb="A smart interview prep platform to help you prepare for “that interview” and get your dream job."
      timeline={[
        <strong>Week 0</strong>,
        <br />,
        <ul>
          <li>Solidify project timeline with deadlines</li>
          <li>Set up GitHub</li>
          <li>Set up recurring meeting times with client and team</li>
        </ul>,
        <br />,
        <strong>Week 1</strong>,
        <br />,
        <ul>
          <li>Developers: user database setup</li>
          <li>
            Designer: themes (color, design, font styles) and logo, begin
            revamping UI/UX for the overall website, as well as restructure
            components.
          </li>
        </ul>,
        <br />,
        <strong>Week 2</strong>,
        <br />,
        <ul>
          <li>
            Developers: user authentication, storing questions asked upon sign
            up
          </li>
          <li>Designer: lo-fi mockup for landing page</li>
        </ul>,
        <br />,
        <strong>Week 3</strong>,
        <br />,
        <ul>
          <li>Developers: backend development manage applications page</li>
          <li>Designer: hi-fi mockup for landing page</li>
        </ul>,
        <br />,
        <strong>Week 4</strong>,
        <br />,
        <ul>
          <li>Developers: front-end development of landing page</li>
          <li>Designer: manage applications tab lo-fi mockup</li>
        </ul>,
        <br />,
        <strong>Week 5</strong>,
        <br />,
        <ul>
          <li>Spring Break — no meeting!</li>
        </ul>,
        <br />,
        <strong>Week 6</strong>,
        <br />,
        <ul>
          <li>Developers: front-end development manage applications page</li>
        </ul>,
        <br />,
        <strong>Week 7</strong>,
        <br />,
        <ul>
          <li>
            Deadline: first iteration of app with MVP features delivered to
            client
          </li>
        </ul>,
        <br />,
        <strong>Week 8</strong>,
        <br />,
        <ul>
          <li>Designer: creating Figma mock-ups of existing pages</li>
        </ul>,
        <br />,
        <strong>Week 9</strong>,
        <br />,
        <ul>
          <li>Developers: landing page animation</li>
          <li>Designer: continue creating Figma mock-ups of existing pages</li>
        </ul>,
        <br />,
        <strong>Week 10</strong>,
        <br />,
        <ul>
          <li>
            Developers: implementing manage applications page intermediate view
            only pop-up page
          </li>
          <li>
            Designer: tuning Figma mock-ups of existing pages given client
            feedback
          </li>
        </ul>,
        <strong>Week 11</strong>,
        <br />,
        <ul>
          <li>Deadline: Deliver!</li>
        </ul>,
        <br />,
      ]}
      challenges={[]}
      takeaways={[
        <ul>
          <li>
            <strong>Subin K</strong>: Building upon my experiences as a PM from
            last semester, I gained more insight into how to manage a project in
            a way that is optimal to both the client and the team. Keeping track
            of deliverables, timeline, etc.
          </li>
          <li>
            <strong>Jimmy C</strong>: I gained more experience with implementing
            a Figma mock-up on the frontend as well as setting up a user
            database and authentication for the backend.
          </li>
          <li>
            <strong>Acelyn C</strong>: I got to work with different React UI
            packages for landing page design, as well as the process of
            integrating the backend and frontend.
          </li>
          <li>
            <strong>Claire Z</strong>: This was my first time designing for a
            client, and I learned how to translate their ideas into mockups.
          </li>
        </ul>,
      ]}
      lookingForward={[
        "The next big step  for interviews.live would be to integrate the revamped design, UI/UX, landing page, and Manage Applications feature from this project into the existing web application (MockingJ is currently under closed beta testing). Given more time, an email reminder feature for the Manage Applications page would be our priority in building on the feature we implemented.",
      ]}
    ></ProjectLayout>
  )
}
