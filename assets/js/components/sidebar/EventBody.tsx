import * as React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

class EventBody extends React.Component {
  public render() {
    return (
      <div className="event-body">
        <Collection>
          <CollectionItem href='#'>First Round</CollectionItem>
          <CollectionItem href='#'>Second Round</CollectionItem>
          <CollectionItem href='#'>Third Round</CollectionItem>
          <CollectionItem href='#'>Final</CollectionItem>
        </Collection>
      </div>
    );
  }
}

export default EventBody;
