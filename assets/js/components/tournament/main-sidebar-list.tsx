import * as React from 'react'
import { Col, Collapsible, CollapsibleItem } from 'react-materialize'

interface MainSidebarList {
  puzzle: string
  round: string
  description: string
}
const MainSidebarList: React.SFC<{}> = () => {
  return (
    <Col s={12} className="main__sidebar--list">
      <Collapsible popout={true}>
        <CollapsibleItem header="First" icon="filter_drama">
          Lorem ipsum dolor sit amet.
              </CollapsibleItem>
        <CollapsibleItem header="Second" icon="place">
          Lorem ipsum dolor sit amet.
              </CollapsibleItem>
        <CollapsibleItem header="Third" icon="whatshot">
          Lorem ipsum dolor sit amet.
              </CollapsibleItem>
      </Collapsible>
    </Col>
  )
}
export default MainSidebarList
