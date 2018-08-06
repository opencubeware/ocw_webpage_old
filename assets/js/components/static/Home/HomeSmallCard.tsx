import * as React from 'react'

interface HomeSmallCard {
  position: string
  color: string
  title: string
  body: string
  icon_path: string
}

const HomeSmallCard: React.SFC<HomeSmallCard> = ({ position, color, title, body, icon_path }) => {
  const className = `homeSmallCard blue--${color} small-note-${position}`

  return (
    <div className={className}>
      <div className="icon no-padding">
        <div className="icon__wrapper">
          <img src={icon_path} />
        </div>
      </div>
      <div className="infos no-padding">
        <div className="infos__title no-padding">
          {title}
        </div>
        <div className="infos__body no-padding">
          {body}
        </div>
      </div>
    </div>
  )
}
export default HomeSmallCard
