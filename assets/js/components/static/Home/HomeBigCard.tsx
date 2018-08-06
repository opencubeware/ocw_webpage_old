import * as React from 'react';

interface IHomeBigCard {
  title: string;
  date_note: string;
  body: string;
}

export class HomeBigCard extends React.Component<IHomeBigCard, {}> {
  public render() {
    const {
      title,
      body,
      date_note
    } = this.props;

    return (
      <div className='big-card'>
        <h6 className='news__top'>
          Recent news <span className='slash'>/</span> <span className='ocw-dark-blue'>See all</span>
        </h6>
        <h5 className='news__title ocw-dark-blue'>{title}</h5>
        {date_note}<br />
        <p className='news__body'>{body}</p>
        <span className='read-more'>Read More</span>
      </div>
    )
  }
}