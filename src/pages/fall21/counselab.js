import React from "react"
import ProjectLayout from "../../components/fa21-project-layout"
import "semantic-ui-css/semantic.min.css"

import counselabHeader from "../../../static/img/fa21/counselab-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Counselab"
      img={counselabHeader}
      demoUrl="https://counselab.com/"
      sourcecodeUrl=""
      demoVisuals=""
      people="Marcel Kida, Alexander Zheng, Rachel Pierce"
      background={["We worked on building a user-facing web application for our client Counselab which is a platform that allows users to offer and seek 1:1 advising sessions on any topic they want. On the website, we created a few static pages as well as a user profile page. The static pages include landing page, about page, team page, and contact form. The user profile page has a component that displays all the user information such as education and social media links as well as a component that displays a calendar that shows when the user is available. Rachel designed the website and its components using Figma. Marcel and Alex coded the front end application based on the UI mockups.", 
      <br/>, <br/>,
      "Technologies used: React, JavaScript, HTML, CSS"]}
      blurb="A Marketplace for 1:1 Advising Sessions"
      timeline={[
        "Our project had the following timeline:",
        <br />,
        <br />,
        
        <strong>Week 1</strong>,
        ": Meet with client, figure out MVP",
        <br/>,
        <strong>Week 2</strong>,
        ": Created Mockup UI",
        <br/>,
        <strong>Week 3</strong>,
        ": Completed landing page",
        <br/>,
        <strong>Week 4</strong>,
        ": Completed about us",
        <br/>,
        <strong>Week 5</strong>,
        ": Completed team page and contact form",
        <br/>,
        <strong>Week 6</strong>,
        ": Created Mockup for individual user profiles",
        <br/>,
        <strong>Week 7</strong>,
        ": Completed user information page",
        <br/>,
        <strong>Week 8</strong>,
        ": Completed Calendar integration to allow for users to book times with other users",
      ]}
      challenges={[
          <ul>
              <li>One technical challenge we encountered was making the website responsive. We had to follow the mockups which often did not have the same information as the desktop view.</li>
              <li>Another technical challenge we faced was implementing the calendar functionality. It was complex since we had to work with an api and minimize the number of api calls as possible.</li>
          </ul>
      ]}
      takeaways={[
        <ul>
          <li><strong>Marcel K</strong>: I think I significantly improved my frontend development skills. I also learned how to communicate with a designer and articulate the feasibility of features.</li>
          <li><strong>Alex Z</strong>: This was my first time working on a team to create a product that hundred of others would use. I learned a lot about communication as well as how to talk to clients.</li>
          <li><strong>Rachel P</strong>: This was a great opportunity to work with multiple stakeholders, the co-founders and the customers, so my communication skills have definitely evolved. This was also a great way to feel the energy, demand, and strategy of a startup.</li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
            <li>Being able to set up accounts directly on the website</li>
            <li>Conduct user research into the onboarding process of the mobile app to make it more efficient and user-friendly</li>
            <li>Adjust some design elements of the website</li>
        </ul>
      ]}
    ></ProjectLayout>
  )
}
