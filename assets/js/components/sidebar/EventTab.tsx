import * as React from 'react';
import { Col } from 'react-materialize';

interface IEventTab {
  icon: string;
  eventName: string;
}
class EventTab extends React.Component<IEventTab, {}> {
  public render() {
    const { eventName, icon } = this.props;
    return (
      <div className="event-tab">
        <Col s={3}>
          <img className='event-logo' src={icon} />
        </Col>
        <Col s={9}>
          {eventName}
        </Col>
      </div>
    );
  }
}

export default EventTab;
