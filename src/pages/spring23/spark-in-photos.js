import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="Spark in Photos"
      demoVisuals={[
        <iframe
          width="100%"
          height="500"
          src="https://drive.google.com/file/d/1eHqTPSOEMRTlBbQSY8b0Xdd498HsE-Ib/preview"
        ></iframe>,
      ]}
      projName={[<span style={{ color: "black" }}>Spark in Photos</span>]}
      img={header}
      sourcecodeUrl="https://github.com/PennSpark/spark-in-photos"
      isCodingProject="True"
      people="Paul Loh, Christiana Guan, Jasper Zhu, Cindy Wei, Haley Kang, Dhatri Medarametla, Marcel Kida"
      background="In Spark, we’ve made a lot of good memories over the years, memories that we want to look back on and remember fondly. Photos have been a precious way of keeping these memories, but we wanted a way of looking back at everything Spark, all at once.

      Spark-in-photos serves as our online photo album–a way of automatically collecting and showcasing all the memories within Spark (and our Slack) in one place.
      With our slackbot constantly scraping our social channels for pics, we’re able to upload them to our cloud storage and display them in a beautiful, infinite-scrolling gallery."
      timeline={[
        <ol>
          <li>Tail end of Fall 2022 - Figma Designs Created</li>
          <li>Feb 31 2023 - Backend integration with Cloudinary</li>
          <li>Mar 15 2023 - Slack bot uploads to Cloudinary</li>
          <li>Mar 25 2023 - Frontend integration</li>
          <li>Apr 1 2023 - Infinite Scroll and animations</li>
        </ol>,
      ]}
      challenges={[
        <ul>
          <li>
            One challenge we faced was choosing a decent photo storage cloud
            provider - one that allowed a good upload API while allowing us to
            query efficiently by date. Eventually we chose Cloudinary for its
            ease of use and easy plug-ins.
          </li>
          <li>
            Another challenge we faced was CORS issues trying to directly call
            Cloudinary from our front-end - eventually, we created a proxy
            NodeJS server to make Cloudinary calls!
          </li>
        </ul>,
      ]}
      takeaways={[
        "We learnt that projects can come in many shapes and forms - this project is more of an internal community gallery, and its back-bone is actually the slack bot that powers the uploads. It was a fun time getting the slack bot to work, and it’ll be just as fun programming more of them in the future. ",
      ]}
      lookingForward={[
        "Lots of things - animations, searching by filters, facial recognition, clustering photos using ML vectorings and much more!",
      ]}
    ></ProjectLayout>
  )
}
