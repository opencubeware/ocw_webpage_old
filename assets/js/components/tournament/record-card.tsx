import * as React from 'react'
import { Col, Row } from 'react-materialize'

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
  const className: string = `main__board--records ${backgroundColor}`
  return (
    <Col s={3} className={className}>
      <Col s={3} className="type">
        {recordType}
      </Col>
      <Col s={9} className="times">
        <Col s={12} className="times__single">
          {singlePerson} {singleTime}
        </Col>
        <Col s={12} className="times__single">
          {avgPerson} {avgTime}
        </Col>
      </Col>
    </Col>
  )
}
export default RecordCard
