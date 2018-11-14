import * as React from 'react'
import { Col, Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize'

interface Category {
  puzzle: string
  rounds: string[]
}

interface MainSidebarList {
  data: {
    categories: Category[]
  }
}
const MainSidebarList: React.SFC<MainSidebarList> = ({ data }) => {
  return (
    <Col s={12} className="sidebar__list">
      <Collapsible popout={true}>
        {data && data.categories && data.categories.map(
          (category) =>
            <CollapsibleItem key={category.puzzle} header={category.puzzle} className="sidebar__list--header">
              <Collection>
                {category.rounds && category.rounds.map(
                  (round) =>
                    <CollectionItem key={round}>{round}</CollectionItem>
                )}
              </Collection>
            </CollapsibleItem>
        )}
      </Collapsible>
    </Col>
  )
}
export default MainSidebarList
