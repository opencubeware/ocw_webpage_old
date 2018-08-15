import * as React from 'react'
import { Col, Row } from 'react-materialize'

const MainBoardTable: React.SFC<any> = () => {
  return (
    <Row className="main__board--table">
      <Col s={12} className="board">
        I am table
      </Col>
    </Row>
  )
}
export default MainBoardTable
