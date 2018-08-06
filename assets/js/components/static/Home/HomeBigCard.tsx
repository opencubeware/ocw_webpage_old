import * as React from 'react'

interface HomeBigCard {
  title: string
  body: string
  date_note: string
}
const HomeBigCard: React.SFC<HomeBigCard> = ({title, body, date_note}) => {
  return (
    <div className="big-card">
      <h6 className="news__top">
        Recent news <span className="slash">/</span> <span className="ocw-dark-blue">See all</span>
      </h6>
      <h5 className="news__title ocw-dark-blue">{title}</h5>
      {date_note}<br />
      <p className="news__body">{body}</p>
      <span className="read-more">Read More</span>
    </div>
  )
}
export default HomeBigCard
