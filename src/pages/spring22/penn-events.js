import React from "react"
import ProjectLayout from "../../components/sp22-project-layout"
import "semantic-ui-css/semantic.min.css"

import headerImg from "../../../static/img/sp22/penn-events-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Penn Events"
      projName="Penn Events"
      img={headerImg}
      // demoUrl="https://drive.google.com/file/d/1UcRfRkZUCvBqPesaBNXW12dRdkxWUVhh/view?usp=sharing"
      // sourcecodeUrl=""
      demoVisuals={[
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/XZyo3OfG80U"></iframe>
      ]}
      people="Clyve Gassant, Yanjie Zhang, Myka Salvacion, Allison Zhang"
      background={[
        "Penn’s campus is always bustling with activity, every week full of student organization events, sports games, performances, and more. However, it can be difficult to find these events for students–sorting through hundreds of emails, Instagram posts, and Facebook events can be tiresome and inefficient. To address this issue, Penn Events seeks to provide a single location for every on-campus event to make discovery easier and more accessible. Student organizations can readily post their events with as much information as they’d like, and Penn students can explore events in a chronological order, filter by tag, date range, and ticket price, and add events to their personal calendar. Penn Events also features a “surprise me” page that allows the spontaneous student to let the website decide their next move for them. For this website, we used Figma for design, and django for development.",
        ]}
      blurb="Connecting Penn students with on-campus events."
      timeline={[
        <strong>Week 1</strong>,
        <br />,
        <ul>
          <li>Decided on project idea: initially wanted to do a very holistic app/website for Penn students to use in various situations: map of campus, opening and closing times of locations, accessibility, events, etc. Decided to focus on campus events for feasibility</li>
            <li>Created repo in Spark Github</li>
            <li>Created Figma file</li>
            <li>Set weekly project meeting time on Sundays before general meetings</li>
        </ul>,
        <br />,
        <strong>Week 2</strong>,
        <br />,
        <ul>
          <li>Began brainstorming the different pages for the site and how it would function</li>
          <li>Chose typography and colors for branding</li>
          <li>Brainstormed how we wanted develop the backend of the project</li>
          <li>Decided to emulate the backend like a Twitter interface</li>
        </ul>,
        <br />,
        <strong>Week 3</strong>,
        <br />,
        <ul>
          <li>Created logo</li>
          <li>Fleshed out the website’s pages: home, surprise me, upload</li>
          <li>Used django on the backend to create a functioning login page and upload submission page</li>
          <li>Implemented the random function that would return a random upload event</li>
        </ul>,
        <br />,
        <strong>Week 4</strong>,
        <br />,
        <ul>
          <li>Polished website pages and created various pop-ups for the filter and adding to calendar function</li>
          <li>Implemented the search function to search any event that has been uploaded</li>
          <li>Implemented the delete event button</li>
        </ul>,
        <br />,
        <strong>Week 5</strong>,
        <br />,
        <ul>
          <li>Created log-in and sign up page</li>
          <li>Completed the CSS of the website to match the figma design provided by the designers</li>
          <li>Implemented the nav bar and links to different pages on the website</li>
        </ul>,
      ]}
      challenges={[
       "The biggest obstacle that we faced was communicating between the Designers and Developers about what would be feasible for our project and how to implement our designs on Figma to CSS. It was difficult to manage expectations for how long each step of the project would take and plan accordingly. The designers had difficulty with designing branding guidelines, such as typography and color palettes, due to the open-ended nature of the project. The developers had difficulty with getting the design of the site to match the Figma design. We also struggled with our code often breaking when pulling from each other’s commits."
     ]}
      takeaways={[
        <ul>
          <li>
            <strong>Allison Z</strong>: I've never worked with developers until this project, and I never realized how important it is to avoid silo-ing the work. For this project, we created the design and handed it off to the devs, but in the future I believe it would be better to hand off pieces of the design as we go, so that they can develop as we create and stay on the same page.
          </li>
          <li>
            <strong>Clyve G</strong>: This semester was my first time ever coding, so I had to get over the hump of all the technicalities behind it, learning the syntax, understanding the logic, and remembering all the languages we were learning. In the end, I enjoyed working with a team of beginners to my first project and increasing my interest in this field. I look forward to continue developing the skills I learned in the future.
          </li>
          <li>
            <strong>Myka S</strong>: Since it was my first time working in a group with both designers and developers, there was a learning curve in understanding how to collaborate on a design instead of being the solo creative lead. Through the project, I was able to further develop my Figma skills, especially  with logo design, and gain experience in working with developers as a designer.
          </li>
        </ul>,
      ]}
      lookingForward={[
        <ul>
            <li>Regulating who can post events to avoid misuse</li>
            <li>Linking PennEvents to Google and Apple calendar</li>
            <li>Implementing the upload image function properly</li>
            <li>Working on the expanding the events from a small view to a wide view</li>
        </ul>
      ]}
    ></ProjectLayout>
  )
}
