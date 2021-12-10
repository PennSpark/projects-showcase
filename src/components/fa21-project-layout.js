import React from "react"
import FadeIn from "react-fade-in"
import { Container } from "semantic-ui-react"

import "./styles/fa21-project-layout.css"

export default class ProjectLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const sourcecodeUrl = this.props.sourcecodeUrl
    let sourcecodeLabel
    let sourcecodeDivider
    if (sourcecodeUrl == "") {
      sourcecodeLabel = ""
      sourcecodeDivider = ""
    } else {
      sourcecodeDivider = " | "
      sourcecodeLabel = "Source Code"
    }

    return (
      <html lang="en">
        <head>
          <title>{this.props.title} | Spark</title>
        </head>
        <body style={{ margin: "0px", padding: "0px" }}>
          <div
            style={{ width: "100%",
                backgroundImage: `url(${this.props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div style={{ maxWidth: "920px", margin: "auto", paddingTop: "30px" }}>
                    <p><strong><a href="/fall21" >&larr; Back to Fall 21 Projects</a></strong></p>
                </div>
            <div style={{ padding: "80px", paddingTop: "60px", textAlign: "center" }}>
            <div style={{ maxWidth: "920px", margin: "auto" }}>
              <FadeIn>
                <h1 style={{ fontSize: "3rem" }}>{this.props.title}</h1>
                <br />
                <h3>{this.props.blurb}</h3>
                <br />
                <p style={{ fontSize: "1.2rem" }}><em>{this.props.people}</em></p>
                <br />

                <p>
                    <a href={this.props.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                    {sourcecodeDivider}
                    <a href={this.props.sourcecodeUrl} target="_blank" rel="noopener noreferrer" >{sourcecodeLabel}</a>
                </p>
              </FadeIn>
            </div>
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
