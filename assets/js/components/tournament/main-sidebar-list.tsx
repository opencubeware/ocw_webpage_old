import * as React from 'react'
import { Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'
import { Link } from 'react-router-dom'

interface Event {
  name: string
  round_names: string[]
}

interface MainSidebarList {
  tournamentName: string
  data: { events: Event[] }
}
const MainSidebarList: React.SFC<MainSidebarList> = ({tournamentName, data }) => {
  return (
    <Col s={12} className="sidebar__list">
      <Collapsible popout={true}>
        {data && data.events && data.events.map(
          (event) =>
            <CollapsibleItem key={event.name} header={event.name} className="sidebar__list--header">
              <Collection>
                {event.round_names && event.round_names.map(
                  (round, i) =>
                    <Link
                        key={i}
                        to={`../../../../../tournaments/${tournamentName}/events/${event.name}/rounds/${round}`}>
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
