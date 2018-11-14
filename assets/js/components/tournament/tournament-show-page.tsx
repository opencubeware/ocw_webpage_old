import * as React from 'react'
import { Col, Row } from 'react-materialize'
import MainBoardTop from './main-board-top'
import MainBoardTable from './main-board-table'
import MainBoardRecords from './main-board-records'
import {
  MainBoardRecordStub,
  MainBoardSidebarCategoriesStub,
  MainBoardTableStub,
  CurrentEventAndRound
} from '../../stubs/main-board'
import MainSidebarCard from './main-sidebar-card'
import MainSidebarList from './main-sidebar-list'

export class TournamentShowPage extends React.Component<any, any> {
  public constructor(props: any) {
    super(props)
    this.state = { currentEventAndRound: CurrentEventAndRound }
  }
  public handleEventChange(this) {
    console.warn(this)
  }

  public render() {
    const name = 'Cracow Open 2013'
    return (
      <Row className="tournament-show-page">
        <Row className="header">
          OCW &lt; back to website
        </Row>
        <Row className="body">
          <Col s={9} className="board">
            <MainBoardTop data={this.state.currentEventAndRound} />
            <MainBoardRecords data={MainBoardRecordStub} />
            <MainBoardTable data={MainBoardTableStub} />
          </Col>
          <Col s={3} className="sidebar">
            <MainSidebarCard name={name} />
            <MainSidebarList data={MainBoardSidebarCategoriesStub} onClick={this.handleEventChange} />
          </Col>
        </Row>
      </Row>
    )
  }
}
