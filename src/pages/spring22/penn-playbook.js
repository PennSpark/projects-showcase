import React from "react"
import ProjectLayout from "../../components/sp22-project-layout"
import "semantic-ui-css/semantic.min.css"

import pennPlaybookHeader from "../../../static/img/sp22/penn-playbook-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Penn Playbook"
      projName={[<span style={{ color: "white" }}>Penn Playbook</span>]}
      img={pennPlaybookHeader}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennSpark/sp22-red-penn-playbook"
      demoVisuals=
      {[
        <iframe title="demo" width="100%" height="500" src="https://www.youtube.com/embed/2Km4kdqS57k"></iframe>
      ]}
      people="Marcel Kida, Andrew Jiang, Anna Xia, Ethan Zhao, Claire Zhang, Olivia Zha"
      background={[
        "Spring of 2022 has been a whirlwind of classwork, conversations, and covid exposures for most of us, but as we reach the last few days of this semester we find ourselves wanting to take the time to look back and reflect on the moments that made the last couple months.",
        <br />,
        <br />,
        "Penn Playbook is meant to be exactly what it sounds like - part play and part book. Through this digital exhibit, we hope to present an assemblage of snapshots and stories that paint a picture of life@penn this semester while allowing you to play around and interact with our site.",
        <br />,
        <br />,
        <strong>Penn Wrapped</strong>,
        <br />,
        "Inspired by Spotify Wrapped, Penn Wrapped is a compilation of survey data on the experiences of Penn students this semester.",
        <br />,
        <strong>Penn inTouch</strong>,
        <br />,
        "This is a space for confessions, celebrations, and everything in between.",
        <br />,
        <strong>By the Button</strong>,
        <br />,
        "By the Button is a quiz that tests how ~quirky~  you are in the Penn community.",
        <br />,
        <strong>Class X</strong>,
        <br />,
        "10 seniors, 10 interviews, and 21 days of mood and energy tracking. This one’s for the class of 2022: the seniors who have made it through four years of Penn.",
        <br />,
        <br />,
        "Technologies used: React.js, React Redux, MongoDB, Node.js, Express, Figma",
      ]}
      blurb="Penn Playbook is a digital exhibit with 4 main installations showcasing different aspects of Penn life through the lens of current students."
      timeline={[
        <strong>Feb 27. 2022</strong>,
        ": Initial Figma designs created",
        <br />,
        <br />,
        <strong>Mar 13. 2022</strong>,
        ": Physical space not secured => pivot to website only",
        <br />,
        <br />,
        <strong>Apr 24. 2022</strong>,
        ": Website deployed at pennplaybook.com",
        <br />,
        <br />,
      ]}
      challenges={[
        "One challenge we faced was trying to reserve a physical space for an event. When asking around, all the event spaces were either too expensive or already booked. We learned that if we are to  plan a physical event, we need to look into spaces months in advance.",
        <br />,
        <br />,
        "Another challenge we faced was the technical challenge of creating an infinite canvas for the Penn inTouch section of the website. We decided on a solution that emulates scrolling and selectively renders text that would appear on screen to reduce load on the client.",
        <br />,
        <br />,
      ]}
      takeaways={[
        <ul>
          <li>
            <strong>Marcel K</strong>: Try to book event spaces months in
            advance to have any chance of getting a location.
          </li>
          <li>
            <strong>Andrew J</strong>: Mobile-friendly development and
            horizontal scrolling really suck :(
          </li>
          <li>
            <strong>Ethan Z</strong>: Making screens mobile friendly
          </li>
          <li>
            <strong>Olivia Z</strong>: Thinking creatively about the possible
            directions of each installation and learning videography/video
            editing
          </li>
          <li>
            <strong>Anna X</strong>: I learned how to connect the frontend and
            backend of a website using React and MongoDB.
          </li>
          <li>
            <strong>Claire Z</strong>: Coming up with creative ways to visualize
            and display data on page
          </li>
        </ul>,
      ]}
      lookingForward={[
        "In the future, we are looking to add new pages and exhibits to the website. In addition, we are looking to secure a physical space to host an in-person event next semester.",
      ]}
    ></ProjectLayout>
  )
}
