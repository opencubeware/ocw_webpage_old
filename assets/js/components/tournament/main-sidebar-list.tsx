import * as React from 'react'
import { Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'

interface Event {
  puzzle: string
  rounds: string[]
}

interface MainSidebarList {
  onClick: (e) => any,
  data: {
    events: Event[]
  }
}
const MainSidebarList: React.SFC<MainSidebarList> = ({ data, onClick }) => {
  return (
    <Col s={12} className="sidebar__list">
      <Collapsible popout={true}>
        {data && data.events && data.events.map(
          (event) =>
            <CollapsibleItem key={event.puzzle} header={event.puzzle} className="sidebar__list--header">
              <Collection>
                {event.rounds && event.rounds.map(
                  (round) =>
                    <CollectionItem onClick={onClick} key={round}>{round}</CollectionItem>
                )}
              </Collection>
            </CollapsibleItem>
        )}
      </Collapsible>
    </Col>
  )
}
export default MainSidebarList
