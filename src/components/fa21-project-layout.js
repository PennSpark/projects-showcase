import React from "react"
import FadeIn from "react-fade-in"
import { Container } from "semantic-ui-react"

import "./styles/fa21-project-layout.css"

export default class ProjectLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isCodingProject = this.props.isCodingProject
    let codingLabel
    if (isCodingProject == "True") {
      codingLabel = "Source Code"
    } else {
      codingLabel = "Figma"
    }

    return (
      <html lang="en">
        <head>
          <title>{this.props.title} | Spark</title>
        </head>
        <body style={{ margin: "0px", padding: "0px" }}>
          <div
            style={{
              width: "100%",
              padding: "100px",
              textAlign: "center",
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
          >
            <div style={{ maxWidth: "920px", margin: "auto" }}>
              <FadeIn>
                <h1 style={{ fontSize: "3rem" }}>{this.props.title}</h1>
                <br />

                <p style={{ fontSize: "1.2rem" }}>{this.props.people}</p>
                <br />

                <h3>
                  <a href="/fall21" style={{ color: "black" }}>
                    &larr; Back to Fall 21 Projects
                  </a>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                  <a
                    href={this.props.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {codingLabel}
                  </a>
                </h3>
              </FadeIn>
            </div>
          </div>
          <Container style={{ paddingTop: "60px" }}>
            <div style={{ maxWidth: "920px", margin: "auto" }}>
              <FadeIn>
                <h1>Background</h1>
                <br />
                <p>{this.props.background}</p>
                <br />
                <br />

                <h1>Timeline</h1>
                <br />
                <p>{this.props.timeline}</p>
                <br />
                <br />

                <h1>Challenges</h1>
                <br />
                <p>{this.props.challenges}</p>
                <br />
                <br />

                <h1>Takeaways</h1>
                <br />
                <p>{this.props.takeaways}</p>
                <br />
                <br />

                <h1>Looking Forward</h1>
                <br />
                <p>{this.props.lookingForward}</p>
              </FadeIn>
            </div>
          </Container>
        </body>
        <footer style={{ height: "50px" }}></footer>
      </html>
    )
  }
}
