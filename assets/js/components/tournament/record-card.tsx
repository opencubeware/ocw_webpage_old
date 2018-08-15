import * as React from 'react'
import { Col } from 'react-materialize'

interface RecordCard {
  backgroundColor: string
  recordType: string
  singlePerson: string
  singleTime: string
  avgPerson: string
  avgTime: string
}
const RecordCard: React.SFC<RecordCard> = ({
  backgroundColor,
  recordType,
  singlePerson,
  singleTime,
  avgPerson,
  avgTime
}) => {
  const className: string = `record-card ${backgroundColor} no-padding`
  return (
    <Col s={3} className={className}>
      <Col s={3} className="type no-padding">
        {recordType}
      </Col>
      <Col s={9} className="times no-padding">
        <Col s={12} className="times__single no-padding">
          <Col s={3} className="single-average no-padding">
            <b>SINGLE</b>
          </Col>
          <Col s={5} className="times__single no-padding">
            {singlePerson}
          </Col>
          <Col s={4} className="times__single no-padding">
            {singleTime}
          </Col>
        </Col>
        <Col s={12} className="times__single no-padding">
          <Col s={3} className="single-average no-padding">
            <b>AVG</b>
          </Col>
          <Col s={5} className="times__single no-padding">
            {avgPerson}
          </Col>
          <Col s={4} className="times__single no-padding">
            {avgTime}
          </Col>
        </Col>
      </Col>
    </Col>
  )
}
export default RecordCard
