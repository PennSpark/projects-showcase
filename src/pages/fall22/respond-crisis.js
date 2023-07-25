import React from "react"
import ProjectLayout from "../../components/fa22-project-layout"
import "semantic-ui-css/semantic.min.css"

import RespondCrisisHeader from "../../../static/img/fa21/popplex-header.png"
import RespondCrisisDemoDb from "../../../static/img/fa22/respond-demo.png"

export default function Home() {
  return (
    <ProjectLayout
      title="Respond Crisis Translation"
      projName={[<span style={{ color: "black" }}>Respond Crisis Translation</span>]}
      img={RespondCrisisHeader}
      demoUrl=""
      sourcecodeUrl=""
      demoVisuals={[
        <div>
          <p>{"Due to client privacy, we have refrained from publicly disclosing the database items. Below is the overview of all the data that we worked with:"}</p>
          <img width="50%" src={RespondCrisisDemoDb} />
        </div>,
      ]}
      people={[<span style={{ color: "black" }}>Paul Loh, Sumanth Kadiyala, Marcel Kida, Joyce He</span>]}
      background={[
        "Respond is a non-profit that organizes over 2500 translators to help translate documents for migrants - often working alongside partner organizations. As the organization scaled, Respond was looking for a more streamlined workflow and data management system than their current mishmash of google sheets and forms. We partnered with Respond to re-shape their workflow, and implemented a user-friendly database system in Airtable that minimized workload and automated many calculations, giving the core team more time to focus on more important tasks. ",
        <br />,
        <br />,
        <strong>The major features include</strong>,
        <br />,
        "Automated Finance calculating",
        <br />,
        "Single click input (updating across all tables in the database)",
        <br />,
        "Hooks to external services (e.g. Google Sheets)",
        <br />,
        "This was developed using Airtable API and Zapier.",
      ]}
      blurb={[<span style={{ color: "black" }}>A database re-design to help a small non-profit team do more.</span>]}
      timeline={[
        <strong>Week 1-4</strong>,
        <br />,
        "Understanding the client’s need and current data, proposing a revised workflow and database redesign.",
        <br />,
        <strong>Week 5-8</strong>,
        <br />,
        "Implementing core features for database (linked entries in different tables)",
        <br />,
        <strong>Week 9-12</strong>,
        <br />,
        "Testing and stretch features (automation, calculations and formulas, linking to external tools like forms and google sheets)",
        <br />,
      ]}
      challenges={[
        "Understanding the client’s workflow and specification was difficult because of the specific cases and nuances that Respond handles on a daily basis. For example, we first had to understand how partner organizations, individual translators, and incoming document translation requests were handled on the ground before we could propose a working system. In another case, there was a complex decision process for how different invoicing was handled for different translation tasks and we had to speak closely with the operations director before we could automate such calculations.",
      ]}
      takeaways={[
        "Close communication with our client Response was key, and regular meetings to check in was important to success. We followed an iterative feedback model, where every week we would present the current product and receive feedback, before working on any changes for the next week’s iteration."
      ]}
      lookingForward={[
        "Spark has completed this project and all core features. Our database system is in deployment and we look forward to seeing how it can improve processes at Respond.",
      ]}
      other={
        <>
          <h1>What the client had to say:</h1>
          <br />
          <p style={{ fontWeight: "bold" }}>Meg, Operations Lead:</p>
          <p style={{ fontStyle: "italic" }}> "We are SO GRATEFUL to Paul and the Spark team for all they have done to help us automate our project management and payment system!! We do urgent, emergency response language access work, which grows and changes with each new global crisis that erupts. We were trying for over a year to find a project management platform that would both accommodate and streamline our workflow... and we just couldn't! In 3 short months, the Spark team helped us build and connect exactly this system - we're now able to focus on actually doing our work - translating and interpreting for asylum seekers and migrants - instead of re-entering redundant data and worrying that stuff is falling through the cracks!"</p>
          <br />
          <p style={{ fontWeight: "bold" }}>Tatiana, Spanish Team lead:</p>
          <p style={{ fontStyle: "italic" }}> "Spark team work has empowered our team to work a lot faster and effectively! Paul always paid attention to our needs and responded kindly with his knowledge and expertise. Overall, working with them was a pleasure and we couldn't be more thankful!"</p>
          <br />
        </>
      }
    ></ProjectLayout>
  )
}
