import React from "react"
import { Label } from "semantic-ui-react"

export default class LabelClient extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Label color="blush">👔 Client Project</Label>
  }
}
