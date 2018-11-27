import * as React from 'react'
import { Col } from 'react-materialize'

interface MainSidebarCard {
  name: string
}
const MainSidebarCard: React.SFC<MainSidebarCard> = ({name}) => {
  return (
    <Col s={12}>
      <div className="card sidebar__card">
        <div className="card-content">
          <img className="sidebar__card--logo" src="https://picsum.photos/200/200/?random" alt="" />
          <div className="text">
            {name}
          </div>
        </div>
      </div>
    </Col>
  )
}
export default MainSidebarCard
