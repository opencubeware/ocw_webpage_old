import * as React from 'react'
import { Col, Row } from 'react-materialize'

interface MainBoardTop {
  puzzle: string
  round: string
  description: string
}
const MainBoardTop: React.SFC<MainBoardTop> = ({ puzzle, round, description }) => {
  return (
    <Row className="main__board--top">
      <Col s={2} className="puzzle">
        {puzzle}
      </Col>
      <Col s={2} className="round">
        {round}
      </Col>
      <Col s={8} className="description">
        {description}
      </Col>
    </Row>
  )
}
export default MainBoardTop
