import React from "react"
import ProjectLayout from "../../components/sp22-project-layout"
import "semantic-ui-css/semantic.min.css"

import artzPhillyHeader from "../../../static/img/sp22/artz-philly-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="ARTZ Philadelphia"
      projName={[<span style={{ color: "white" }}>ARTZ Philadelphia</span>]}
      img={artzPhillyHeader}
      demoUrl=""
      sourcecodeUrl=""
      demoVisuals={[
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/evQsy4vfxoM"></iframe>
      ]}
      people={[<span style={{ color: "white" }}>Anna Baringer, Eric Wang, Matthew Cho, Joyce He</span>]}
      background={[
        "ARTZ Philadelphia is a non-profit that enhances the quality of life for people living with dementia through joyful interactions around arts and culture. The specific initiative we worked with is  ARTZ in the Neighborhood, which provides programming for the Hunting Park and Northwest Philly neighborhoods, which are communities that are under-served and under-resourced.",
        <br />,
        <br />,
        "To allow for participants to more easily interact with ARTZ Philly virtually, Spark designed and developed a mobile app that simplifies the process of connecting to online programming and collects all ARTZ in the Neighborhood information in one place. We hope that this app will help reduce the barriers the ARTZ Philly community faces with connecting to online programming.",
        <br />,
        <br />,
        <strong>"The app’s major features include"</strong>,
        <br />,
        "ARTZ event announcements",
        <br />,
        "Contact info for friends in your neighborhood",
        <br />,
        "Easy access to zoom meeting links",
        <br />,
        "English and Spanish translations",
        <br />,
        <br />,
        "This app is a React Native mobile application, compatible with both iOS and Android, with a Django/postgres backend, allowing ARTZ Philly admin to update information for events and participants.",
      ]}
      blurb={[<span style={{ color: "white" }}>A mobile application to help reduce the barriers for ARTZ Philly participants to join online programming.</span>]}
      timeline={[
        <strong>Week 0</strong>,
        <br />,
        <ul>
          <li>Draft project plan and timeline</li>
        </ul>,
        <br />,
        <strong>Week 1</strong>,
        <br />,
        <ul>
          <li>Development and design begins</li>
          <li>Get feedback on project plan and timeline</li>
        </ul>,
        <br />,
        <strong>Week 2</strong>,
        <br />,
        <ul>
          <li>Incorporate feedback from users to project plan</li>
          <li>Low-fi design mockup</li>
          <li>Boilerplate development setup</li>
        </ul>,
        <br />,
        <strong>Week 3</strong>,
        <br />,
        <ul>
          <li>High-fi design mockup</li>
          <li>
            Draft of meeting page, Connect with Friends, Home page functionality
          </li>
        </ul>,
        <br />,
        <strong>Week 4</strong>,
        <br />,
        <ul>
          <li>Get translations from ARTZ Philly team</li>
          <li>Prototype design due</li>
          <li>Draft pages done</li>
          <li>
            Draft of Announcements page, Social Media page, Contact Us Page
            functionality
          </li>
        </ul>,
        <br />,
        <strong>Week 5</strong>,
        <br />,
        <ul>
          <li>Spring break</li>
        </ul>,
        <br />,
        <strong>Week 6</strong>,
        <br />,
        <ul>
          <li>Incorporate design prototype into the draft pages</li>
          <li>Add Spanish translation feature to the app</li>
        </ul>,
        <br />,
        <strong>Week 7</strong>,
        <br />,
        <ul>
          <li>
            Deliver first iteration of app (with MVP features) to ARTZ Philly
            team for feedback
          </li>
        </ul>,
        <br />,
        <strong>Week 8</strong>,
        <br />,
        <ul>
          <li>
            Plan deploying, debugging, incorporating feedback, and stretch
            features to prioritize
          </li>
        </ul>,
        <br />,
        <strong>Week 9 - 10</strong>,
        <br />,
        <ul>
          <li>Debugging and stretch features</li>
        </ul>,
        <br />,
        <strong>Week 11</strong>,
        <br />,
        <ul>
          <li>Documentation</li>
          <li>Deliver!</li>
        </ul>,
        <br />,
      ]}
      challenges={[
        "React Native is different in many ways from React, which our team was more familiar with, so it was a challenge to figure out the quirks of React Native and using it and CSS to style our frontend. Using websockets to ensure real time updates of page data was also a hurdle we had to overcome. Furthermore, making sure that things didn’t break when deploying to Heroku was also a hassle.",
      ]}
      takeaways={[
        <ul>
          <li>
            <strong>Anna B</strong>: This was my first time leading a project
            with Spark, so I learned a lot about supporting a team and
            communicating with clients. It was honestly a really great
            experience, and I have the amazing people on my team and at ARTZ
            Philly to thank for that!
          </li>
          <li>
            <strong>Eric W</strong>: I learned so much about mobile development.
          </li>
          <li>
            <strong>Joyce H</strong>: This was my first time being the solo
            designer on a project, so I learned a lot about taking charge of the
            design of a product.
          </li>
          <li>
            <strong>Matthew C</strong>: Learned a lot about backend and mobile
            development. Was great to work with a great org and a great team!
          </li>
        </ul>,
      ]}
      lookingForward={[
        "Deploying the app on both iOS and Android and supporting ARTZ Philly as they bring the app to their participants!",
      ]}
    ></ProjectLayout>
  )
}
