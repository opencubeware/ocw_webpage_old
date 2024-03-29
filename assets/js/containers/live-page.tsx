import * as React from 'react'
import { Col, Row } from 'react-materialize'
import MainBoardTop from '../components/tournament/main-board-top'
import MainBoardTable from '../components/tournament/main-board-table'
import MainBoardRecords from '../components/tournament/main-board-records'
import {
  MainBoardRecordStub,
  MainBoardSidebarCategoriesStub,
} from '../stubs/main-board'
import MainSidebarCard from '../components/tournament/main-sidebar-card'
import MainSidebarList from '../components/tournament/main-sidebar-list'
import { fetchRound, fetchEventsWithRounds } from '../actions'
import { connect } from 'react-redux'

export class LivePage extends React.Component<any, any> {
  public componentDidMount() {
    this.fetchSpecificRound()
  }

  public componentDidUpdate(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      this.fetchSpecificRound()
    }
  }

  public render() {
    const { currentRound, eventsWithRounds } = this.props
    const results = currentRound && currentRound.results
    const tournamentName = currentRound && currentRound.tournament_name
    const eventsNamesWithRoundNames = eventsWithRounds
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
            {results && (
              <MainBoardTable data={results} />
            )}
          </Col>
          <Col s={3} className="sidebar">
            {tournamentName && (
              <MainSidebarCard name={tournamentName} />
            )}
            {eventsNamesWithRoundNames && (
              <MainSidebarList tournamentName={tournamentName} data={eventsNamesWithRoundNames}/>
            )}
          </Col>
        </Row>
      </Row>

    )
  }
  private fetchSpecificRound() {
    const { tournamentName, eventName, roundName } = this.props.match.params
    this.props.fetchRound(tournamentName, eventName, roundName)
    this.props.fetchEventsWithRounds(tournamentName)
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    ...state.round,
    ...state.eventsWithRounds
  }
}

export default connect(mapStateToProps, { fetchRound, fetchEventsWithRounds })(LivePage)
