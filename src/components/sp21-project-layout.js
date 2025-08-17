import React from "react"
import FadeIn from "react-fade-in"
import { Container } from "semantic-ui-react"
import Helmet from "react-helmet"

import "./styles/sp21-project-layout.css"

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
          <Helmet>
            <title>{this.props.title} | PCL Showcase</title>
          </Helmet>
        </head>

        <main>
          <body style={{ margin: "0px", padding: "0px" }}>
            <div
              style={{
                width: "100%",
                backgroundImage: `url(${this.props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="sp21-nav-links"
                style={{
                  maxWidth: "720px",
                  margin: "auto",
                  paddingTop: "30px",
                }}
              >
                  <div style={{ float: "left" }}>
                  <p>
                    <em>
                      <a href="/"><div className="sp22-back-btn">
                        &larr; Back to Projects
                      </div></a>
                    </em>
                  </p>
                </div>
              </div>
              <div
                style={{
                  maxWidth: "720px",
                  margin: "auto",
                  padding: "100px",
                  textAlign: "center",
                }}
              >
                <FadeIn>
                  <h1 style={{ fontSize: "3rem" }}>{this.props.title}</h1>
                  <br />
                  <h3>{this.props.blurb}</h3>
                  <br />
                  <p style={{ fontSize: "1.2rem" }}>
                    <em>{this.props.people}</em>
                  </p>
                  <br />

                  <h3>
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
              <div style={{ maxWidth: "720px", margin: "auto" }}>
                <FadeIn>
                  <h1>Background</h1>
                  <br />
                  <p>{this.props.background}</p>
                  <br />
                  <br />
                  <br />

                  <h1>Timeline</h1>
                  <br />
                  <p>{this.props.timeline}</p>
                  <br />
                  <br />
                  <br />

                  <h1>Challenges</h1>
                  <br />
                  <p>{this.props.challenges}</p>
                  <br />
                  <br />
                  <br />

                  <h1>Takeaways</h1>
                  <br />
                  <p>{this.props.takeaways}</p>
                  <br />
                  <br />
                  <br />

                  <h1>Looking Forward</h1>
                  <br />
                  <p>{this.props.lookingForward}</p>
                </FadeIn>
              </div>
            </Container>
          </body>
        </main>

        <footer style={{ height: "50px" }}></footer>
      </html>
    )
  }
}
