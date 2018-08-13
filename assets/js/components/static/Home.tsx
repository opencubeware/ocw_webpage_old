import * as React from 'react'
import { Link } from 'react-router-dom'
import HomeBigCard from './Home/HomeBigCard'
import { LeftGrid, RigthGrid, BottomGrid } from './News/Grids'
import HomeSmallCard from './Home/HomeSmallCard'

export class Home extends React.Component {
  public render() {
    return (
      <div className="home-page">
        {LeftGrid}
        <div className="promo-photo__text">
          <div className="promo-photo__text--top">
            <b>Real-time</b> management
            </div>
          <div className="promo-photo__text--bottom">
            for speedcubing competition
            </div>
        </div>
        <div className="photo">
          <img src="images/promo.png" />
        </div>
        {HomeBigCard({
          title: 'Rafał eats pasta with his forehead',
          date_note: 'on 14.03.13 by Krzysztof Rusnarczyk',
          body: 'Now that we know who you are, I know who I am. I\' m not a mistake! It all makes sense!' +
          'In a comic, you know how you can tell who the arch-villain\'s going to be?' +
          'He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when...' +
          'You know why, David? Because of the kids. They called me Mr Glass.'
        })}
        {HomeSmallCard({
          position: 'top',
          color: 'light',
          icon_path: 'images/envelope_icon.png',
          title: 'Want to use ocw?',
          body: 'Send us a message'
        })}
        {HomeSmallCard({
          position: 'bottom',
          color: 'dark',
          icon_path: 'images/calendar_icon.png',
          title: 'Events',
          body: 'Where we make it real-time'
        })}
        {RigthGrid}
        {BottomGrid}
        <div className="footer1">
          <ul className="footer__links">
            <li><Link to="/">&bull; <span className="black-font">Home</span></Link></li>
            <li><Link to="/news">&bull; <span className="black-font">News</span></Link></li>
            <li><Link to="/dev">&bull; <span className="black-font">Dev</span></Link></li>
          </ul>
        </div>
        <div className="footer2">
          <ul className="footer__links">
            <li><Link to="/about">&bull; <span className="black-font">About</span></Link></li>
            <li><Link to="/team">&bull; <span className="black-font">Team</span></Link></li>
            <li><Link to="/contact">&bull; <span className="black-font">Contact</span></Link></li>
          </ul>
        </div>
        <div className="footer3">
          <ul className="footer__links">
            <li><Link to="/events">&bull; <span className="black-font">Events</span></Link></li>
            <li><Link to="/competitors">&bull; <span className="black-font">Competitors</span></Link></li>
          </ul>
        </div>
        <div className="fb-image logo logo__grey">
          <img src="images/fb_icon.png" />
        </div>
        <div className="gh-image logo logo__grey">
          <img src="images/gh_icon.png" />
        </div>
        <div className="ocw-image logo">
          <img src="images/ocw_logo.png" />
          ©opencubeware.org
        </div>
      </div>
    )
  }
}
