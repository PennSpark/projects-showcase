import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import review from "../../../static/img/sp23/findmefood-review.png"
import ranking from "../../../static/img/sp23/findmefood-reviewers.png"
import post from "../../../static/img/sp23/findmefood-post.png"

export default function Home() {
  return (
    <ProjectLayout
      title="FindMeFood"
      demoVisuals={[
        <img style={{ width: "33%" }} src={review}></img>,
        <img style={{ width: "33%" }} src={ranking}></img>,
        <img style={{ width: "33%" }} src={post}></img>,
      ]}
      projName={[<span style={{ color: "black" }}>FindMeFood</span>]}
      img={header}
      sourcecodeUrl="https://github.com/PennSpark/sp23-blue-FindMeFood"
      isCodingProject="True"
      people="Jason Saito, James Baker, Nicole Zhao, Razaq Aribidesi, Sey Nhyira Agbotey; Mentors: Eric Wang, Chelsea Cheng"
      background="The motivation behind our project was the lack of a reliable, go-to resource for food trucks on campus. Google and Yelp were places where you can discover old and new food trucks, but they are not always super updated and/or easy to use."
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
          <li>What features matter in a food truck app?</li>
          <li>
            How can we collect data from students and enable them to provide
            feedback to improve the app?{" "}
          </li>
          <li>
            What factors contribute to the quality of a food truck? (price, wait
            times, etc.)
          </li>
          <li>
            What makes a user review of dining credible? How to maintain and
            enforce credibility?
          </li>
          <li>
            What are the best ways the app can support local businesses and food
            truck owners?
          </li>
          <li>
            How can food truck owners best promote their businesses using
            location tracking features?
          </li>
        </ul>,
      ]}
      goals={
        "The goal of our project is to create an updated, community-involved application where students can review, search, and even represent our local food trucks. We also wanted to create an easy-to-use app that allows students to support local businesses and find food trucks that they will love! "
      }
      lookingForward={[
        "To working with the community to create the best app possible!",
      ]}
    ></ProjectLayout>
  )
}
