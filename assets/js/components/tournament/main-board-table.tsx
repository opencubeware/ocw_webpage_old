import * as React from 'react'
import { Col, Row, Table } from 'react-materialize'

interface Attempt {
  result: string
  record?: string
}

interface MainBoardTableCompetitor {
  number: number
  country: string
  full_name: string
  attempts: Attempt[]
  best_attempt: Attempt
  average: Attempt
}

interface MainBoardTable {
  data: MainBoardTableCompetitor[]
}

const cellWithRecord = (solve, solveRecord, nameOfClass) => {
  const className = `solve ${nameOfClass}`
  return (
    <td key={solve} className={className}>
      {solve}
      {solveRecord &&
        (<img src={require(`../../../static/images/${solveRecord}.png`)} />)}
    </td>
  )
}

const mapAttemptsToTds = (attempts) => {
  return (
    attempts.map(
      (attempt) =>
        cellWithRecord(attempt.result, attempt.record, '')
    )
  )
}

const MainBoardTable: React.SFC<MainBoardTable> = ({ data }) => {
  return (
    <Row className="main__board--table">
      <Col s={12} className="board no-padding">
        <Table striped={true}>
          <thead>
            <tr>
              <th>No.</th>
              <th>| Country</th>
              <th>| Competitor</th>
              <th>| 1</th>
              <th>| 2</th>
              <th>| 3</th>
              <th>| 4</th>
              <th>| 5</th>
              <th>| Best</th>
              <th>| Avg</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (competitor) =>
                <tr key={competitor.number}>
                  {
                    [
                      <td key={competitor.number}>
                        {competitor.number}
                      </td>,
                      <td key={competitor.country}>
                        {competitor.country}
                      </td>,
                      <td key={competitor.full_name}>
                        <b>{competitor.full_name}</b>
                      </td>,
                      mapAttemptsToTds(competitor.attempts),
                      cellWithRecord(competitor.best_attempt.result, competitor.best_attempt.record, ''),
                      cellWithRecord(competitor.average.result, competitor.average.record, 'average-red'),
                    ]
                  }
                </tr>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}
export default MainBoardTable
