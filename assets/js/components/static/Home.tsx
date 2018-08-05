import * as React from 'react';
import { Col, Row } from 'react-materialize';
import { TableGrid } from '../universal/TableGrid';
import { HomeSmallCard } from '../universal/HomeSmallCard';

export class Home extends React.Component {
  public render() {
    return (
      <div className='home'>
        <div className='promo-photo'>
          <div className='promo-photo__text'>
            <div className='promo-photo__text--top'>
              <b>Real-time</b> management
            </div>
            <div className='promo-photo__text--bottom'>
              for speedcubing competition
            </div>
          </div>
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
                title='Want to use ocw?'
                body='Send us a message'
              />
            </Col>
            <Col s={6} m={12} className='cards__right--bottom no-padding'>
              <HomeSmallCard
                color='dark'
                icon_path='images/calendar_icon.png'
                title='Events'
                body='Where we make it real-time'
              />
            </Col>
          </Col>
        </div>
      </div>
    );
  }
}