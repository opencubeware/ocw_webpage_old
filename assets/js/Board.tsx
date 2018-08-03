import * as React from 'react';
import { Card, CardTitle, Col, Row, Table } from 'react-materialize';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

export class Board extends React.Component {
  public render() {
    return (
      <div className="Main">
        <Row>
          <Card
            header={<CardTitle className='ocw-logo' reveal={true} image={'logo.jpg'} waves='light' />}
            title='First Official OCW Competition'
            reveal={
              <p>
                Here is some more information about this product that is only revealed once clicked on.
              </p>
            } />
        </Row>
        <Row>
          <Col s={3} className='grid-example'>
            <Sidebar />
          </Col>
          <Col s={9} className='grid-example'>
            <Table className='table striped'>
              <thead>
                <tr>
                  <th data-field="place">Place</th>
                  <th data-field="name">Competitor</th>
                  <th data-field="country">Country</th>
                  <th data-field="first_solve">First solve</th>
                  <th data-field="second_solve">Second solve</th>
                  <th data-field="third_solve">Third solve</th>
                  <th data-field="fourth_solve">Fourth solve</th>
                  <th data-field="fifth_solve">Fifth solve</th>
                  <th data-field="average">Average</th>
                  <th data-field="best">Best</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jonek Kłosko</td>
                  <td>Poland</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kamil Zieliński</td>
                  <td>Poland</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Rafał Studnicki</td>
                  <td>Poland</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                  <td>9.97</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div >
    );
  }
}
