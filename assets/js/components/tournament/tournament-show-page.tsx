import * as React from 'react'
import { Col, Row } from 'react-materialize'
import MainBoardTop from './main-board-top'
import MainBoardTable from './main-board-table'
import MainBoardRecords from './main-board-records'
import { MainBoardRecordStub } from '../../stubs/main-board-records-stub'

export class TournamentShowPage extends React.Component {
  public render() {
    return (
      <Row className="tournament-show-page">
        <Row className="header">
          OCW &lt; back to website
        </Row>
        <Row className="main">
          <Col s={9} className="main__board">
            <MainBoardTop
              puzzle="4x4x4"
              round="First Round"
              description="Average of 5, top 32 proceed to the semifinal" />
            <MainBoardRecords data={MainBoardRecordStub} />
            <MainBoardTable />
          </Col>
          <Col s={3} className="main__sidebar">
            I am sidebar
          </Col>
        </Row>
      </Row >
    )
  }
}
