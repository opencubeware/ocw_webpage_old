import * as React from 'react'
import { Col, Row, Table } from 'react-materialize'
import { Person } from 'js/models/person'

interface MainBoardTableResult {
  competitor: Person
  attempts: string[]
  best_solve: string
  average: string
}

interface MainBoardTable {
  data: MainBoardTableResult[]
}

const cellWithRecord = (solve, solveRecord, key, nameOfClass) => {
  const className = `solve ${nameOfClass}`
  return (
    <td key={key} className={className}>
      {solve}
      {solveRecord && (
        <img src={require(`../../../static/images/${solveRecord}.png`)} />
      )}
    </td>
  )
}

const mapAttemptsToTds = (attempts: string[]) => {
  return (
    attempts.map(
      (attempt: string, id: number) =>
        cellWithRecord(attempt, null, id, '')
    )
  )
}

const MainBoardTable: React.SFC<MainBoardTable> = ({ data }: MainBoardTable) => {
  return (
    <Row className="board__table">
      <Col s={12} className="table no-padding">
        <Table striped={true}>
          <thead>
            <tr>
              <th>No.</th>
              <th>| Competitor</th>
              <th>| Country</th>
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
              (result, i) =>
                <tr key={i}>
                  {
                    [
                      <td key={i}>
                        {i + 1}
                      </td>,
                      <td key={`${result.competitor.first_name} ${result.competitor.last_name}`}>
                        <b>{`${result.competitor.first_name} ${result.competitor.last_name}`}</b>
                      </td>,
                      <td key={result.competitor.country.name}>
                        {result.competitor.country.name}
                      </td>,
                      mapAttemptsToTds(result.attempts),
                      cellWithRecord(result.best_solve, null, 'best', ''),
                      cellWithRecord(result.average, null, 'average', 'average-red'),
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
