import React from "react"
import ProjectLayout from "../../components/fa21-project-layout"
import "semantic-ui-css/semantic.min.css"

import clarifiHeader from "../../../static/img/fa21/clarifi-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Clarifi"
      img={clarifiHeader}
      projectUrl=""
      sourcecodeUrl
      people="Anna Xia, Andrew Jiang, Kevin Zhou, Chelsea Cheng"
      background={["This semester the team worked on developing the parent portal for Clarifi. Before, the parent portal was a spreadsheet which was difficult to comprehend and was not actionable for the parents. The team used Figma to create designs and used React.js to develop the front end of the parent portal. This portal includes a dashboard with statistics on their child’s working sessions and an assignments page where parents can see the students past and current assignments.", 
      <br/>, <br/>,
      "Technologies used: "]}
      blurb="Clarifi is a product to help the 4.1 million teen students with ADHD to plan and complete their work."
      timeline={[
        "Our project had the following timeline:",
        <br />,
        <br />,
        
        <strong>Milestone 1</strong>,
        ": Conduct user interviews with parents and educators, Develop a detailed design of the parent portal based on insights from user interviews, Be familiar with the code base",
        <br/>,
        <strong>Milestone 2</strong>,
        ": Develop the tabs on the parent portal, Brainstorm designs for future features",
      ]}
      challenges={[
          <ul>
              <li>Taking over a project with an already fairly extensive codebase</li>
              <li>Learning React Redux and using it in our implementation</li>
              <li>Altering our implementation to specifically meet the different needs of the client</li>
          </ul>
      ]}
      takeaways={[
        <ul>
          <li><strong>Anna X</strong>: This was my first time leading a team with developers, designers, and communicating with a client. I learned a lot about communicating between the different members of the team and keeping the team organized. I also learned how to use React.js and React Redux.</li>
          <li><strong>Chelsea C</strong>: </li>
          <li><strong>Andrew J</strong>: This was my first time being on a team with a client and designers, so I learned a lot about the workflow of being on a team and how to take client feedback and actualize it into tangible changes. Communication in particular was really important in this project, and I’m leaving it with a much better  understanding of how to communicate to be effective in a team environment.</li>
          <li><strong>Kevin Z</strong>: </li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
            <li>For the parent portal, we would like to develop the dashboard design further so that there are actionable items for the parent on the dashboard page</li>
            <li>Further develop design of third page of the dashboard to display the goals that the child works towards to learn how to use Clarifi and work independently</li>
            <li>For the assignments page we would like the details of the assignment to display when the parent clicks on the name of the assignment. </li>
        </ul>
      ]}
    ></ProjectLayout>
  )
}
