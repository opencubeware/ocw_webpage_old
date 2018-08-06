import * as React from 'react';
import { HomeBigCard } from './Home/HomeBigCard';
import { LeftGrid, RigthGrid, BottomGrid } from './News/Grids';
import { HomeSmallCard } from './Home/HomeSmallCard';

export class News extends React.Component {
  public render() {
    return (
      <div className='news-page'>
        {LeftGrid}
        <div className="photo">
          <img src="images/promo.png"/>
        </div>
        <HomeBigCard
          title='Rafał eats pasta with his forehead'
          date_note='on 14.03.13 by Krzysztof Rusnarczyk'
          body="Now that we know who you are, I know who I am. I' m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."
        />
        <HomeSmallCard
          position='top'
          color='light'
          icon_path='images/envelope_icon.png'
          title='Want to use ocw?'
          body='Send us a message'
        />
        <HomeSmallCard
          position='bottom'
          color='dark'
          icon_path='images/calendar_icon.png'
          title='Events'
          body='Where we make it real-time'
        />
        {RigthGrid}
        {BottomGrid}
        <div className='fb-image'>
          <img src="images/fb_icon.png"/>
        </div>
        <div className='gh-image'>
          <img src="images/gh_icon.png"/>
        </div>
      </div>
    );
  }
}