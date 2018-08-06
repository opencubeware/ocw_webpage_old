import * as React from 'react';
import { Col, Row } from 'react-materialize';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
  public render() {
    return (
      <Row className='navbar'>
        <Col className='grid' m={3} />
        <Col className='grid-6' s={12} l={6}>
          <Row className='navbar__wrapper'>
            <Col className='ocw-logo' s={2}>
              <Link to='/'>
                <img className='ocw__logo--image' src='images/logo.png' />
              </Link>
            </Col>
            <Col s={10}>
              <ul className='navbar__items'>
                <li><Link className='navbar__item' to='/news'>News</Link></li>
                <div className='slash'>/</div>
                <li><Link className='navbar__item' to='/events'>Events</Link></li>
                <div className='slash'>/</div>
                <li><Link className='navbar__item' to='/about'>About</Link></li>
                <div className='slash'>/</div>
                <li><Link className='navbar__item' to='/team'>Team</Link></li>
                <div className='slash'>/</div>
                <li><Link className='navbar__item' to='/contact'>Contact</Link></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className='grid' m={3} />
      </Row>
    );
  }
}
