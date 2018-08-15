import * as React from 'react'
import { Col, Row, Table } from 'react-materialize'

interface MainBoardTableCompetitor {
  number: number
  country: string
  full_name: string
  first_solve: string
  first_solve_record?: string
  second_solve: string
  second_solve_record?: string
  third_solve: string
  third_solve_record?: string
  fourth_solve: string
  fourth_solve_record?: string
  fifth_solve: string
  fifth_solve_record?: string
  best_solve: string
  best_solve_record?: string
  average: string
  average_record?: string
}
interface MainBoardTable {
  data: MainBoardTableCompetitor[]
}

const cellWithRecord = (solve, solveRecord) => {
  return (
    <td key={solve} className="solve">
      {solve}
      {solveRecord &&
        (<img src={require(`../../../static/images/${solveRecord}.png`)} />)}
    </td>
  )
}

const averageWithRecord = (solve, solveRecord) => {
  return (
    <td key={solve} className="solve average-red">
      {solve}
      {solveRecord &&
        (<img src={require(`../../../static/images/${solveRecord}.png`)} />)}
    </td>
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
                      cellWithRecord(competitor.first_solve, competitor.first_solve_record),
                      cellWithRecord(competitor.second_solve, competitor.second_solve_record),
                      cellWithRecord(competitor.third_solve, competitor.third_solve_record),
                      cellWithRecord(competitor.fourth_solve, competitor.fourth_solve_record),
                      cellWithRecord(competitor.fifth_solve, competitor.fifth_solve_record),
                      cellWithRecord(competitor.best_solve, competitor.best_solve_record),
                      averageWithRecord(competitor.average, competitor.average_record),
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
