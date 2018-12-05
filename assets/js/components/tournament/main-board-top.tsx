import * as React from 'react'
import { Col, Row } from 'react-materialize'

interface EventRound {
  data: {
    tournament: {
      id: string
    }
    event_name: string
    name: string
  }
}
const MainBoardTop: React.SFC<EventRound> = ({ data }) => {
  return (
    <Row className="board__top">
      <Col s={2} className="puzzle">
        {data.event_name}
      </Col>
      <Col s={2} className="round">
        {data.name}
      </Col>
      <Col s={8} className="description">
        Description
      </Col>
    </Row>
  )
}
export default MainBoardTop
