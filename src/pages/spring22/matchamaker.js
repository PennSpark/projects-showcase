import React from "react"
import ProjectLayout from "../../components/sp22-project-layout"
import "semantic-ui-css/semantic.min.css"

import matchamakerHeader from "../../../static/img/sp22/matchamaker-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="MatchaMaker"
      img={matchamakerHeader}
      demoUrl=""
      sourcecodeUrl=""
      demoVisuals=""
      people="Alyssa Nie, Rain Yan, Dhatri Medarametla, Claire Zhang"
      background={[
        "Spark is one of the many clubs that requires coffee chats between its members. As a new member, it can be intimidating to see who you want to coffee chat, and as a returning member, you can get caught up in just coffee chatting your friends. We decided to make an easy way to match people with each other to make coffee chatting more involved and fun! Matchmaker features a survey with unique questions that each user can take and an algorithm that takes their answers to create weekly user matches. Each user can also customize their profile and upload their coffee chat photos to a gallery afterwards:)",
        <br />,
        <br />,
        <strong>Technologies Used</strong>,
        ": React, Express, MongoDB, Figma",
      ]}
      blurb="A website that makes coffee chatting easier and more fun"
      timeline={[
        "Our project had the following timeline:",
        <br />,
        <br />,

        <strong>Week 1</strong>, <br/>,
        <ul>
        <li>Brainstormed + finalized project idea - wanted to focus on coffee chat pairings, going off of the Google Form that Spark normally uses to match members. Wanted to have a website that could be used by members in the future.</li>
        <li>Created repo in Spark Github</li>
        <li>Created Figma file and wireframes</li>
        <li>Set weekly project meeting time on Sundays before general meetings</li>
        </ul>,
        <br/>,
        <strong>Week 2</strong>, <br/>,
        <ul>
        <li>Created first animations and drawings to put on website</li>
        <li>Finalized general theme of website</li>
        <li>Began creating frontend with React based on wireframes</li>
        <li>Began developing backend for authentication, user login, and signup</li></ul>,
        <br/>,
        <strong>Week 3</strong>,
        <ul>
        <li>Added more animations to website</li>
        <li>Designed user profile page</li>
        <li>Created home page, gallery, and survey questions</li>
        <li>Found Edmund’s Blossom algorithm and integrated into website</li>
        <li>Fleshed out backend for user, setting user profile, and matching with algorithm</li>
        <li>Integrated frontend and backend</li></ul>,
        <br/>,
        <strong>Week 4</strong>,
        <ul>
        <li>Designed admin pages for matching</li>
        <li>Created user profile display and admin pages on frontend</li>
        <li>Cleaned up frontend design</li>
        <li>Worked on admin backend</li></ul>
      ]}
      challenges={[
        <ul>
          <li>
            :-)
          </li>
          
        </ul>,
      ]}
      takeaways={[
        <ul>
          <li>
            <strong>Claire Z</strong>: Creating custom graphics/animations and integrating them into website
          </li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
          <li>
          We want to have email/text/Slack integration so that users can get a notification about who they’ve been matched with. Also, being able to have multiple customizable surveys with different kinds of questions (non multiple choice).
          </li>
        </ul>,
      ]}
    ></ProjectLayout>
  )
}
