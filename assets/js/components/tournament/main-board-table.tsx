import * as React from 'react'
import { Col, Row } from 'react-materialize'

interface MainBoardTableCompetitor {
  number: number
  country: string
  full_name: string
  first_solve: string
  second_solve: string
  third_solve: string
  fourth_solve: string
  fifth_solve: string
  best_solve: string
  average: string
}
interface MainBoardTable {
  data: MainBoardTableCompetitor[]
}

const MainBoardTable: React.SFC<MainBoardTable> = ({ data }) => {
  return (
    <Row className="main__board--table">
      <Col s={12} className="board">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Country</th>
              <th>Competitor</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>Best</th>
              <th>Avg</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (competitor) =>
                <tr key={competitor.number}>
                  {[<td key={competitor.number}>{competitor.number}</td>,
                   <td key={competitor.country}>{competitor.country}</td>,
                   <td key={competitor.full_name}><b>{competitor.full_name}</b></td>,
                   <td key={competitor.first_solve}>{competitor.first_solve}</td>,
                   <td key={competitor.second_solve}>{competitor.second_solve}</td>,
                   <td key={competitor.third_solve}>{competitor.third_solve}</td>,
                   <td key={competitor.fourth_solve}>{competitor.fourth_solve}</td>,
                   <td key={competitor.fifth_solve}>{competitor.fifth_solve}</td>,
                   <td key={competitor.best_solve}>{competitor.best_solve}</td>,
                   <td key={competitor.average}>{competitor.average}</td>]}
                </tr>
            )}
          </tbody>
        </table>
      </Col>
    </Row>
  )
}
export default MainBoardTable
