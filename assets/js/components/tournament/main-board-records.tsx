import * as React from 'react'
import { Row } from 'react-materialize'
import RecordCard from './record-card'

interface MainBoardRecords {
  data: {
    wr: Record
    cr: Record
    nr: Record
    cb: Record
  }
}

interface Record {
  single: RecordPersonAndTime
  average: RecordPersonAndTime
}
interface RecordPersonAndTime {
  person: string
  time: string
}

const MainBoardRecords: React.SFC<MainBoardRecords> = ({
  data: {
    wr,
    cr,
    nr,
    cb
  }
}) => {
  return (
    <Row className="board__records">
      <RecordCard
        backgroundColor="ocw-red"
        recordType="WR"
        singlePerson={wr.single.person}
        singleTime={wr.single.time}
        avgPerson={wr.average.person}
        avgTime={wr.average.time}
      />
      <RecordCard
        backgroundColor="ocw-blue"
        recordType="CR"
        singlePerson={cr.single.person}
        singleTime={cr.single.time}
        avgPerson={cr.average.person}
        avgTime={cr.average.time}
      />
      <RecordCard
        backgroundColor="ocw-grey"
        recordType="NR"
        singlePerson={nr.single.person}
        singleTime={nr.single.time}
        avgPerson={nr.average.person}
        avgTime={nr.average.time}
      />
      <RecordCard
        backgroundColor="ocw-light-grey"
        recordType="CB"
        singlePerson={cb.single.person}
        singleTime={cb.single.time}
        avgPerson={cb.average.person}
        avgTime={cb.average.time}
      />
    </Row>
  )
}
export default MainBoardRecords
