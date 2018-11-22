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
    const tournamentName = currentRound && currentRound.tournament && currentRound.tournament.name
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
            {tournamentName && (
              <MainSidebarCard name={tournamentName} />
            )}
            <MainSidebarList data={MainBoardSidebarCategoriesStub} onClick={this.handleRoundChange} />
          </Col>
        </Row>
        <Link to="/tournaments/Cracow%20Open%202013/events/3x3x3/rounds/First%20Round">button</Link>
        <Link to="/tournaments/Cracow%20Open%202013/events/3x3x3/rounds/Second%20Round">button</Link>
      </Row>

    )
  }
  private fetchSpecificRound() {
    const { tournamentName, eventName, roundName } = this.props.match.params
    this.props.fetchRound(tournamentName, eventName, roundName)
  }
}

const mapStateToProps = (state) => {
  return { ...state.round }
}

export default connect(mapStateToProps, { fetchRound })(LivePage)
