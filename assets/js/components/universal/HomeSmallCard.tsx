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
        <Col className='icon'>
          <img src={icon_path} />
        </Col>
        <Col className='infos'>
          <div className='infos__title'>
            {title}
          </div>
          <div className='infos__body'>
            {body}
          </div>
        </Col>
      </div>
    )
  }
}