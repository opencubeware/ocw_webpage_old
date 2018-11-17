import * as React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-materialize'
import MainBoardTop from '../components/tournament/main-board-top'
import MainBoardTable from '../components/tournament/main-board-table'
import MainBoardRecords from '../components/tournament/main-board-records'
import {
  MainBoardRecordStub,
  MainBoardSidebarCategoriesStub,
  MainBoardTableStub,
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
    this.fetchSpecificRound()
  }

  public componentDidUpdate(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      this.fetchSpecificRound()
    }
  }

  public render() {
    const { currentRound } = this.props
    const name = 'Cracow Open 2013'
    return (
      <Row className="tournament-show-page">
        <Row className="header">
          OCW &lt; back to website
        </Row>
        <Row className="body">
          <Col s={9} className="board">
            {currentRound && (
              <MainBoardTop data={currentRound} />
            )}
            <MainBoardRecords data={MainBoardRecordStub} />
            <MainBoardTable data={MainBoardTableStub} />
          </Col>
          <Col s={3} className="sidebar">
            <MainSidebarCard name={name} />
            <MainSidebarList data={MainBoardSidebarCategoriesStub} onClick={this.handleRoundChange} />
          </Col>
        </Row>
        <Link to="/tournaments/1/events/1/rounds/1">button</Link>
        <Link to="/tournaments/1/events/2/rounds/2">button</Link>
      </Row>

    )
  }
  private fetchSpecificRound() {
    const { tournamentId, eventId, roundId } = this.props.match.params
    this.props.fetchRound(tournamentId, eventId, roundId)
  }
}

const mapStateToProps = (state) => {
  return { ...state.round }
}

export default connect(mapStateToProps, { fetchRound })(LivePage)
