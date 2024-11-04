import React from "react"
import ProjectLayout from "../../components/sp23-project-layout"
import "semantic-ui-css/semantic.min.css"

import header from "../../../static/img/sp23/header.png"
import roadmap from "../../../static/img/sp23/berater-roadmap.png"
import demo from "../../../static/img/sp23/berater-demo.jpg"

export default function Home() {
  return (
    <ProjectLayout
      title="SquishModel"
      projName={[<span style={{ color: "black" }}>SquishModel: Images to 3D</span>]}
      img={header}
      demoVisuals={[
        <a
          style={{ fontSize: "24px" }}
          href="https://drive.google.com/file/d/10Raus5zzs8pmcGV1uEhQ_nr8jeeZyoZs/view?usp=sharing
"
        >
          Demo here!
        </a>,
      ]}
      demoUrl="https://drive.google.com/file/d/10Raus5zzs8pmcGV1uEhQ_nr8jeeZyoZs/view?usp=sharing
"
      isCodingProject="True"
      people="James Baker, Joyce Chen, Meiling Mathur, Yue Zhao, Emily Kang, Sumanth Kadiyala, Johnny Jeong
"
      background="Stuffed animals are nostalgic and dear to many. When I was younger I always used to talk to my stuffed animals thinking they also had feelings and thoughts. What if you could take pictures of a stuffed animal, upload them digitally, and interact with them in digital form in an app? The project's applications are for memory preservation and virtual play. What better way to preserve your stuffed animal than scanning it into a 3D digital animal you can play games with? This started as a cute concept that fits Spark’s values and blossomed into an opportunity for technical rigor and design/creative outlets."
      timeline={[
        <ul>
          <li>Week 0: Feb 12 - Feb 18 (Pre-Onboarding): Initial Expectations          </li>
          <li>Week 1: Feb 18 - Feb 24: Designers: Create a joint document (link in masters google slides). Find examples, identify key user experience interactions, and interview a few people about what they are looking for. Start thinking about possible design features. Finish ideation and interviewing by Saturday meeting so we can begin wireframes.
          Frontend and Backend: Think about what architecture would be best. Decide on 3D Digitization Tech (MeshRoom, other options), Go through the Meshroom Flow using example images. Decide Backend framework (Flask/Django). Ideate at Tuesday meeting and have an architecture diagram by Saturday meeting. Research UX components and libraries we could use. Work with designers to ideate best features</li>
          <li>Week 2: Feb 24 - Mar 2: Designer: Complete lofi wireframes v1 (NO COLOR)  based on user research and ideation. Landing page to upload images, loading page, 3D object viewing page. Identify user interactions on wireframe. Frontend: Create web application in chosen framework. Create file structure: boilerplate components for each page. Create basic navigation. Backend: Learn Meshroom Command Line. Run Meshroom from the command line using demo images. Finalize choice of serverless GPU and get sign-off from Spark exec. Start setting up infrastructure for API and backend calls.</li>
          <li>Week 3: Mar 2 - Mar 9 (Spring Break): Designer: start on week 4 tasks. Frontend: start on week 4 tasks. Backend: Set up Meshroom backend (will probs require calls over break)
</li>
          <li>Week 4: Mar 9 - Mar 16: Designer: Determine color palette, typography, improve on layout. Lofi wireframes v2 with basic color and typography due in form of figma interactive. Frontend: Implement structural parts of components as designated by wireframes from designers. Backend: Set up Meshroom backend</li>
          <li>Week 5: Mar 16 - Mar 23: Designer: User testing / validation 1, find 3 people each to test your wireframes on for UX by writing questions/actions testing different parts. Synthesize user testing into a doc. Frontend: Update structural components as per lofi wireframes v2. Work on Photo upload and 3D object viewer components. Backend: Start API calls between frontend and backend </li>
          <li>Week 6: Mar 23-30: Designer: Hifi design v1 on Figma. Frontend: Work on functionality of pages. Continue iterating on design and webpage functionality. Backend: Finish API calls between frontend and backend. At this point we should have a functioning application</li>
          <li>Week 7: Mar 30 - Apr 6: Designer: User validation, test designs on diff people and gather results. Write up key user actions and get ppls advice etc. If we finish the core functionality by Week 6 we can start thinking of our Stretch components. Frontend: Make adjustments from hifi design v1. Backend: Storage to view previous creations </li>
          <li>Week 8: Apr 6 - April 13: Designer: Hifi design v2 on Figma. Frontend and Backend: Overflow time +  stretch features</li>
          <li>Week 9: April 13 - April 20: Designer: Work with devs to align on a great final design, Prepare design for project presentation. Frontend: Make updates from hifi design v2. Backend: Clean up architecture and make any last minute tweaks. Everyone: Record and plan out  a great showcase video + presentation</li>
          <li>Week 10: April 27: SHOWCASE!!</li>
        </ul>,
      ]}
      challenges={[
        <ul>
          <li>Photogrammetry Architecture Change: 3-4 weeks into the project, we realized that our initial architecture choice of a serverless GPU to host a photogrammetry process was too costly and too difficult to maintain. We had to shift gears to a new photogrammetry architecture called Apple Object Capture. This new architecture was free to use, but it needed to be ran on a Mac computer. We had to switch to hosting our photogrammetry process on a Macbook, and making API calls to and from the Macbook which interacted with the API, database, and frontend.</li>
<li> File Handling (images and .obj model files): We dealt with difficult files such as 50+ image files and 3D model .obj files. These files were large and took time to transfer. We worked on the efficiency of displaying, uploading, and transferring these large files by optimizing time and space complexity. We also worked with a lot of parallelism in the various calls of the photogrammetry process. </li>

<li> Network Architecture and Deployment: Because of our architecture shift, we faced challenges deploying the application to multiple users. As such, we transformed our software into an synchronous model, where one user could make a request at a time, but all users could see the current photogrammetry process running.</li>
        </ul>,
      ]}
      takeaways={[
        <ul>
            <li>Stay flexible: Our biggest takeaway is iteration. With a large architecture shift, we learned the importance of staying strong and resilient in the face of changes of plans. The perfect solution does not come on the first try, even with the best planning. It takes a few setbacks and pitfalls to overcome.</li>

<li>Distribute bottlenecks:We learned the need to distribute in two ways. One, you need to distribute workload equally amongst the team. Two, you need to distribute your processes in an application. The biggest bottleneck was hosting the backend photogrammetry process on a single Macbook. This limited the number of people that could work on the backend process. This also limited the number of processes we could distribute.</li>

</ul>
      ]}
      lookingForward={[
        <p>
          Scaling the app to many user accounts!
        </p>,
      ]}
    ></ProjectLayout>
  )
}
