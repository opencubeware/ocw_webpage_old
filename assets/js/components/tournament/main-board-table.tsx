import * as React from 'react'
import { Col, Row } from 'react-materialize'

const MainBoardTable: React.SFC<any> = ({ data }) => {
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
                <tr>
                  {[<td>{competitor.number}</td>,
                   <td>{competitor.country}</td>,
                   <td>{competitor.full_name}</td>,
                   <td>{competitor.first_solve}</td>,
                   <td>{competitor.second_solve}</td>,
                   <td>{competitor.third_solve}</td>,
                   <td>{competitor.fourth_solve}</td>,
                   <td>{competitor.fifth_solve}</td>,
                   <td>{competitor.best_solve}</td>,
                   <td>{competitor.average}</td>]}
                </tr>
            )}
          </tbody>
        </table>
      </Col>
    </Row>
  )
}
export default MainBoardTable
