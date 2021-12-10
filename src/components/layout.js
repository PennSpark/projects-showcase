import React from "react"

// styling
// import "../styles/bootstrap.css" // from react-bootstrap
// import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Spark Projects</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body style={{ margin: "0px", padding: "0px" }}>
        {children}
      </body>
    </html>
  )
}
