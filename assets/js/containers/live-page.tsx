import * as React from 'react'
import { Col, Row } from 'react-materialize'
import MainBoardTop from '../components/tournament/main-board-top'
import MainBoardTable from '../components/tournament/main-board-table'
import MainBoardRecords from '../components/tournament/main-board-records'
import {
  MainBoardRecordStub,
  MainBoardSidebarCategoriesStub,
  MainBoardTableStub,
  CurrentEventAndRound
} from '../stubs/main-board'
import MainSidebarCard from '../components/tournament/main-sidebar-card'
import MainSidebarList from '../components/tournament/main-sidebar-list'
import { fetchRound } from '../actions'
import { connect } from 'react-redux'

export class LivePage extends React.Component<any, any> {
  public handleRoundChange(this) {
    console.warn(this)
  }

  public componentDidMount() {
    const { tournamentId } = this.props.match.params
    this.props.fetchRound(tournamentId, 1, 1)
  }

  public render() {

    console.warn(this.props)
    const { event } = this.props
    const name = 'Cracow Open 2013'
    return (
      <Row className="tournament-show-page">
        <Row className="header">
          OCW &lt; back to website
        </Row>
        {event && (
          <div>test</div>
        )}
        <Row className="body">
          <Col s={9} className="board">
            <MainBoardTop data={CurrentEventAndRound} />
            <MainBoardRecords data={MainBoardRecordStub} />
            <MainBoardTable data={MainBoardTableStub} />
          </Col>
          <Col s={3} className="sidebar">
            <MainSidebarCard name={name} />
            <MainSidebarList data={MainBoardSidebarCategoriesStub} onClick={this.handleRoundChange} />
          </Col>
        </Row>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state.round }
}

export default connect(mapStateToProps, { fetchRound })(LivePage)
