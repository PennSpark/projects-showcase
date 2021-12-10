import React from "react"
import ProjectLayout from "../../components/fa21-project-layout"
import "semantic-ui-css/semantic.min.css"

import penntixHeader from "../../../static/img/fa21/penntix-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Penn Tix"
      img={penntixHeader}
      projectUrl="https://github.com/PennSpark/fa21-blue-penntix"
      isCodingProject="True"
      people="Elaine Fan, Arushi Srivastava, Michelle Seiyon Lee, Paul Loh"
      background={["Our project aims to facilitate communication between professors and students  in large class sizes by allowing for students to channel their confusion with the simple click of a button. On popplex, students inform the instructor that they are confused and how they want the instructor to address it (e.g. “repeat”, “rephrase”, “elaborate”, “provide an example”).  After class, students participate in a short survey that allows them to review what they learned. In turn, the lecturers receive both live and specific aggregate feedback that allows them to continually improve on their lecture.", 
      <br/>, <br/>,
      "Technologies Used: Python, Django, React, HTML, CSS"]}
      blurb="Penn's premiere ticket reselling platform"
      timeline={[
        "Our project had the following timeline:",
        <br />,
        <br />,
        
        <strong>Week 1</strong>,
        ": Ideate features for the web app, make wireframes, create github repository, make ticket listing functionality",
        <br/>,
        <strong>Week 2</strong>,
        ": Finalize features list, set deadlines for individual tasks, create user profiles, create listings page",
        <br/>,
        <strong>Week 3</strong>,
        ": Search/sort events, design logos/animations",
        <br/>,
        <strong>Week 4</strong>,
        ": Test and polish site, final styling, incorporate visuals/animations",
      ]}
      challenges={[
          <ul>
              <li>Organizing tickets and events on website</li>
              <li>Grouping tickets for same event and displaying lowest price</li>
              <li>Creating a custom User class to have phone number field</li>
          </ul>
      ]}
      takeaways={[
        <ul>
          <li><strong>Matthew D</strong>: My biggest takeaway from this project is the importance of planning model schema before beginning development. In planning the schema for the database objects, I saved a lot of effort later down the road as I only had to make minimal changes to the fields. </li>
          <li><strong>Yuhan L</strong>: </li>
          <li><strong>Claire Z</strong>: Some of my takeaways from this project are how important it is to have a framework for how the website is going to look in terms of which views lead to where as the project became a lot easier once we figured this out. This project also taught me a lot about the MVC framework and how each of the components are connected to each other. I am also happy that I finally learned how to use git :D</li>
          <li><strong>Ethan Z</strong>: This was my first time using Django/HTML/CSS in a context that wasn’t just a personal project. My biggest takeaway was just learning full-stack development, as it’s knowledge that I’ve retained and can apply in the future.</li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
            <li>Make site look prettier - add animations and logos </li>
            <li>Adding calendar on main page to make events easier to see</li>
            <li>Filter/search for events</li>
        </ul>
      ]}
    ></ProjectLayout>
  )
}
