import * as React from 'react';
import { Col } from 'react-materialize';

interface IHomeSmallCard {
  color: string;
  title: string;
  body: string;
  icon_path: string;
}

export class HomeSmallCard extends React.Component<IHomeSmallCard, {}> {
  public render() {
    const {
      color,
      title,
      body,
      icon_path
    } = this.props;
    const className = `homeSmallCard blue--${color}`

    return (
      <div className={className}>
        <Col s={5} className='icon no-padding'>
          <div className="icon__wrapper">
            <img src={icon_path} />
          </div>
        </Col>
        <Col s={7} className='infos no-padding'>
          <Col s={12} className='infos__title no-padding'>
            {title}
          </Col>
          <Col s={12} className='infos__body no-padding'>
            {body}
          </Col>
        </Col>
      </div>
    )
  }
}