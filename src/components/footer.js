import React from "react"

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<footer
          style={{
            height: "50px",
            marginTop: "40px",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <a
            href="http://pennspark.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Penn Spark
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.facebook.com/pennspark"
            target="_blank"
            rel="noopener noreferrer"
            className="fa fa-facebook"
          />
          &nbsp;
          <a
            href="https://www.instagram.com/pennspark"
            target="_blank"
            rel="noopener noreferrer"
            className="fa fa-instagram"
          />
          &nbsp;
          <a
            href="https://www.github.com/pennspark"
            target="_blank"
            rel="noopener noreferrer"
            className="fa fa-github"
          />
        </footer>);
  }
}
