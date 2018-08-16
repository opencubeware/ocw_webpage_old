import * as React from 'react'
import { Card, Col, Row } from 'react-materialize'
import MainBoardTop from './main-board-top'
import MainBoardTable from './main-board-table'
import MainBoardRecords from './main-board-records'
import { MainBoardRecordStub, MainBoardTableStub } from '../../stubs/main-board'
import MainSidebarCard from './main-sidebar-card'
import MainSidebarList from './main-sidebar-list'

export class TournamentShowPage extends React.Component {
  public render() {
    const name = 'Cracow Open 2013'
    return (
      <Row className="tournament-show-page">
        <Row className="header">
          OCW &lt; back to website
        </Row>
        <Row className="body">
          <Col s={9} className="board">
            <MainBoardTop
              puzzle="4x4x4"
              round="First Round"
              description="Average of 5, top 32 proceed to the semifinal" />
            <MainBoardRecords data={MainBoardRecordStub} />
            <MainBoardTable data={MainBoardTableStub} />
          </Col>
          <Col s={3} className="sidebar">
            <MainSidebarCard name={name} />
            <MainSidebarList />
          </Col>
        </Row>
      </Row>
    )
  }
}
