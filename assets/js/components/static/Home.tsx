import * as React from 'react';
import { Col, Row } from 'react-materialize';
import { TableGrid } from '../universal/TableGrid';
import { HomeSmallCard } from '../universal/HomeSmallCard';

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <Row className="home">
          <Col m={3} className='grid'>
            <TableGrid times={5} />
          </Col>
          <Col s={12} m={6} className='grid-6'>
            <div className='promo-photo'>
              <img className='promo-img' src='images/promo.png' />
            </div>
            <div className='cards'>
              <Col s={12} m={8} className='cards__left'>
                test
              </Col>
              <Col s={12} m={4} className='cards__right no-padding'>
                <Col s={6} m={12} className='cards__right--top no-padding'>
                  <HomeSmallCard
                    color='light'
                    icon_path='images/envelope_icon.png'
                    title='test'
                    body='test'
                  />
                </Col>
                <Col s={6} m={12} className='cards__right--bottom no-padding'>
                  <HomeSmallCard
                    color='dark'
                    icon_path='images/calendar_icon.png'
                    title='test'
                    body='test'
                  />
                </Col>
              </Col>
            </div>
          </Col>
          <Col m={3} className='grid'>
            <TableGrid times={5} />
          </Col>
        </Row>
      </div>
    );
  }
}