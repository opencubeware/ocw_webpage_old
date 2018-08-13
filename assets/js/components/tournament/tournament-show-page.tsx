import * as React from 'react'
import { Col, Row } from 'react-materialize'
import MainBoardTop from './main-board-top'
import RecordCard from './record-card'

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
            <Row className="main__board--records">
              <RecordCard
                backgroundColor="red"
                recordType="WR"
                singlePerson="Rafał Studnicki"
                singleTime="00:05.70"
                avgPerson="Rafał Studnicki"
                avgTime="00:05.70"
              />
              <RecordCard
                backgroundColor="blue"
                recordType="ER"
                singlePerson="Rafał Studnicki"
                singleTime="00:05.70"
                avgPerson="Rafał Studnicki"
                avgTime="00:05.70"
              />
              <RecordCard
                backgroundColor="grey"
                recordType="NR"
                singlePerson="Rafał Studnicki"
                singleTime="00:05.70"
                avgPerson="Rafał Studnicki"
                avgTime="00:05.70"
              />
              <RecordCard
                backgroundColor="light-grey"
                recordType="CB"
                singlePerson="Rafał Studnicki"
                singleTime="00:05.70"
                avgPerson="Rafał Studnicki"
                avgTime="00:05.70"
              />
            </Row>
            <Row className="main__board--table">
              I am table
            </Row>
          </Col>
          <Col s={3} className="main__sidebar">
            I am sidebar
          </Col>
        </Row>
      </Row >
    )
  }
}
