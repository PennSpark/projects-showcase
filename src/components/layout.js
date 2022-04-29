import React from "react"
import { Helmet } from "react-helmet"

// styling
// import "../styles/bootstrap.css" // from react-bootstrap
// import "../styles/global.css"

class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <Helmet>
            <title>Spark Projects</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          </Helmet>
        </head>
        <main>
          <body style={{ margin: "0px", padding: "0px" }}>
            {this.props.children}
          </body>
        </main>
      </html>
    )
  }
}

export default Layout
