import * as React from 'react';
import { Col, Row } from 'react-materialize';
import { TableGrid } from '../universal/TableGrid';
import { HomeSmallCard } from './Home/HomeSmallCard';
import { HomeBigCard } from './Home/HomeBigCard';

export class Home extends React.Component {
  public render() {
    return (
      <Row className='home'>
        <Col m={3} className='grid'>
          <TableGrid times={5} />
        </Col>
        <Col s={12} m={6} className='grid-6'>
          <Col s={12} className='promo-photo no-padding'>
            <div className='promo-photo__text'>
              <div className='promo-photo__text--top'>
                <b>Real-time</b> management
            </div>
              <div className='promo-photo__text--bottom'>
                for speedcubing competition
            </div>
            </div>
            <img className='promo-img' src='images/promo.png' />
          </Col>
          <Col s={12} className='cards no-padding'>
            <Col s={12} m={8} className='cards__left'>
              <HomeBigCard
                title='Rafał eats pasta with his forehead'
                date_note='on 14.03.13 by Krzysztof Rusnarczyk'
                body="Now that we know who you are, I know who I am. I' m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."
              />
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
          </Col>
        </Col>
        <Col m={3} className='grid'>
          <TableGrid times={5} />
        </Col>
      </Row>
    );
  }
}