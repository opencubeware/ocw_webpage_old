import * as React from 'react';
import { Row } from 'react-materialize';

export class Home extends React.Component {
  public render() {
    return (
      <Row className="home">
        <div className='grid'>
          <table className='border'>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <div className='grid-6'>
          <img className='promo-img' src='images/promo.png' />
        </div>
        <div className='grid'>
        <table className='border'>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </Row>
    );
  }
}