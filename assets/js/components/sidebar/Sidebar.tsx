import * as React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import EventBody from './EventBody';
import EventTab from './EventTab';

class Sidebar extends React.Component {
  public render() {
    return (
      <div className="Sidebar">
        <Collapsible popout={true}>
          <CollapsibleItem header={<EventTab icon='333.svg' eventName='3x3x3'/>}>
            <EventBody />
          </CollapsibleItem>
          <CollapsibleItem header={<EventTab icon='444.svg' eventName='4x4x4'/>}>
            <EventBody />
          </CollapsibleItem>
          <CollapsibleItem header={<EventTab icon='555.svg' eventName='5x5x5'/>}>
            <EventBody />
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default Sidebar;
