import * as React from 'react'
import { Col, Row } from 'react-materialize'

interface MainBoardTop {
  data: {
    event: string
    round: string
    description: string
  }
}
const MainBoardTop: React.SFC<MainBoardTop> = ({ data }) => {
  return (
    <Row className="board__top">
      <Col s={2} className="puzzle">
        {data.event}
      </Col>
      <Col s={2} className="round">
        {data.round}
      </Col>
      <Col s={8} className="description">
        {data.description}
      </Col>
    </Row>
  )
}
export default MainBoardTop
