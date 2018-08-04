import * as React from 'react';
import { Row } from 'react-materialize';
import { TableGrid } from '../universal/TableGrid';
import { HomeSmallCard } from '../universal/HomeSmallCard';

export class Home extends React.Component {
  public render() {
    return (
      <div>
        <Row className="home">
          <div className='grid'>
            <TableGrid times={5} />
          </div>
          <div className='grid-6'>
            <div className='promo-photo'>
              <img className='promo-img' src='images/promo.png' />
            </div>
            <div className='cards'>
              <div className='cards__left'>
                test
              </div>
              <div className='cards__right'>
                <HomeSmallCard
                  color='light'
                  icon_path='images/envelope_icon.png'
                  title='test'
                  body='test'
                />
                <HomeSmallCard
                  color='dark'
                  icon_path='images/calendar_icon.png'
                  title='test'
                  body='test'
                />
              </div>
            </div>
          </div>
          <div className='grid'>
            <TableGrid times={5} />
          </div>
        </Row>
      </div>
    );
  }
}