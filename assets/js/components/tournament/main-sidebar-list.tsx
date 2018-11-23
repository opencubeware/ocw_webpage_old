import * as React from 'react'
import { Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'
import { Link } from 'react-router-dom'

interface Event {
  name: string
  rounds: string[]
}

interface MainSidebarList {
  data: {
    tournament_name: string
    events: Event[]
  }
}
const MainSidebarList: React.SFC<MainSidebarList> = ({ data }) => {
  return (
    <Col s={12} className="sidebar__list">
      <Collapsible popout={true}>
        {data && data.events && data.events.map(
          (event) =>
            <CollapsibleItem key={event.name} header={event.name} className="sidebar__list--header">
              <Collection>
                {event.rounds && event.rounds.map(
                  (round, i) =>
                    <Link
                        key={i}
                        to={`../../../../../tournaments/${data.tournament_name}/events/${event.name}/rounds/${round}`}>
                      <CollectionItem key={round}>
                        {round}
                      </CollectionItem>
                    </Link>
                )}
              </Collection>
            </CollapsibleItem>
        )}
      </Collapsible>
    </Col>
  )
}
export default MainSidebarList
