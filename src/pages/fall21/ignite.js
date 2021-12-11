import React from "react"
import ProjectLayout from "../../components/fa21-project-layout"
import "semantic-ui-css/semantic.min.css"

import igniteHeader from "../../../static/img/fa21/ignite-header.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Ignite"
      img={igniteHeader}
      demoUrl="https://spark-ignite.herokuapp.com/"
      sourcecodeUrl="https://github.com/PennSpark/fa21-blue-ignite"
      demoVisuals={[
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/sJ0YqRVvr80"></iframe>
      ]}
      people="Anna Baringer, James Ciardullo, Will Liang, Homer Wang, Rain Yan"
      background={["We wanted to create a website where one could go to be inspired instantly. We envision that no matter the project, whether it is an art piece, a skit, a game project, an essay, or a website idea, our randomly generated pictures, quotes, and videos will serve as inspiration for your next great masterpiece.", 
      <br/>, <br/>,
      "We built this project entirely in React and connected to a variety of APIs: YouTube, Unsplash, and Quotable."]}
      blurb="Dynamic website that serves to provide creative inspiration."
      timeline={[
        "Our project had the following timeline:",
        <br />,
        <br />,
        
        <strong>Week 1</strong>,
        ": Set up react folder, index.html and base layouts",
        <br/>,
        <strong>Week 2</strong>,
        ": Search for sources of content for images, videos, and quotes. Get APIs working to get content. Complete frontend functionality",
        <br/>,
        <strong>Week 3</strong>,
        ": Connect backend content to the frontend",
      ]}
      challenges={[
          <ul>
              <li>API request limits</li>
              <li>Integrating different media pieces into the frontend</li>
              <li>Appropriately resizing content in React components (especially for photos)</li>
          </ul>
      ]}
      takeaways={[
        <ul>
          <li><strong>Anna B</strong>: This project was a great way to get more familiar with React and experiment with calling different APIs. In hindsight, I wish that we had worked more incrementally to add each content type to the frontend, since our plan of working on those steps simultaneously meant that we had to rearrange a lot of the logic of the API callers to better fit the frontend.</li>
          <li><strong>James C</strong>: I enjoyed working with others and experimenting with ReactJS to fully realize our project idea. Implementing the APIs, while a bit of a nuisance, taught me how everything comes together through integrating backend with frontend. Overall, it was a fun and interesting experience and, given the chance to continue with the project, I would emphasize planning ahead next time for how we would go about adding new features.</li>
          <li><strong>Rain Y</strong>: Working on Ignite really helped me to tie all the experiences in the frontend from HTML/CSS to ReactJS together. I also got the chance to work on the backend with the Unsplash photo API and integrating it into the frontend. One biggest lesson I learned is that I should not constrain myself to just one spectrum in webdev, as both are crucial towards bringing together a featured, exciting web app. Going forward, I will work towards becoming a fullstack developer!</li>
          <li><strong>Homer W</strong>: Coming up with this idea from the start to building out our frontend demo was simply one of the coolest experiences for me this semester. Being able to learn React while contributing to such a meaningful project was absolutely enriching, and I couldn’t have done it without all the help and support I’ve received from the Ignite team and the rest of Spark. One thing I’ve learned from this project is that, it’s never too late to start on something, and sometimes even the dumbest ideas could turn into things that are actually cool and useful (hopefully it’ll be). Plan early and start today!</li>
          <li><strong>Will L</strong>: I learned a lot about React and web querying through working on Ignite. Though I regrettably didn’t have much time to work on the project, I enjoyed figuring out how to get quotes using a curl request and having it show up on a website. Going forward, my main goal is to manage my workload better and dedicate more time to our future projects so that hopefully we can continue developing more cool and meaningful apps/sites.</li>
        </ul>,
      ]}
      lookingForward={[
        "Looking forward, we could continue to expand our project by:",
        <ul>
            <li>Working on UI/branding more</li>
            <li>Work on graphic design, polish logo</li>
            <li>Allow for dynamic resizing and better fitting for photos</li>
            <li>Add search bar functionality</li>
            <li>Add more content variety</li>
            <li>Add shopping cart features</li>
            <li>Add users + the ability to save content to look at later</li>
            <li>Enable endless scrolling</li>
        </ul>
      ]}
    ></ProjectLayout>
  )
}
