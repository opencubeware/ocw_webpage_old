import * as React from 'react'
import { Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'

interface Event {
  name: string
  rounds: string[]
}

interface MainSidebarList {
  onClick: () => any
  data: {
    tournament_name: string
    events: Event[]
  }
  props: any
}
const MainSidebarList: React.SFC<MainSidebarList> = ({ data, onClick, props }) => {
  return (
    <Col s={12} className="sidebar__list">
      <Collapsible popout={true}>
        {data && data.events && data.events.map(
          (event) =>
            <CollapsibleItem key={event.name} header={event.name} className="sidebar__list--header">
              <Collection>
                {event.rounds && event.rounds.map(
                  (round) =>
                    <CollectionItem
                      onClick={onClick.bind({
                        round,
                        event: event.name,
                        tournamentName: data.tournament_name,
                        props
                      })}
                      key={round}>
                      {round}
                    </CollectionItem>
                )}
              </Collection>
            </CollapsibleItem>
        )}
      </Collapsible>
    </Col>
  )
}
export default MainSidebarList
