import * as React from 'react'
import { Row } from 'react-materialize'
import RecordCard from './record-card'

interface MainBoardRecords {
  data: {
    wrSinglePerson: string
    wrSingleTime: string
    wrAvgPerson: string
    wrAvgTime: string
    erSinglePerson: string
    erSingleTime: string
    erAvgPerson: string
    erAvgTime: string
    nrSinglePerson: string
    nrSingleTime: string
    nrAvgPerson: string
    nrAvgTime: string
    cbSinglePerson: string
    cbSingleTime: string
    cbAvgPerson: string
    cbAvgTime: string
  }
}

const MainBoardRecords: React.SFC<MainBoardRecords> = ({
  data: {
    wrSinglePerson,
    wrSingleTime,
    wrAvgPerson,
    wrAvgTime,
    erSinglePerson,
    erSingleTime,
    erAvgPerson,
    erAvgTime,
    nrSinglePerson,
    nrSingleTime,
    nrAvgPerson,
    nrAvgTime,
    cbSinglePerson,
    cbSingleTime,
    cbAvgPerson,
    cbAvgTime,
  }
}) => {
  return (
    <Row className="main__board--records">
      <RecordCard
        backgroundColor="ocw-red"
        recordType="WR"
        singlePerson={wrSinglePerson}
        singleTime={wrSingleTime}
        avgPerson={wrAvgPerson}
        avgTime={wrAvgTime}
      />
      <RecordCard
        backgroundColor="ocw-blue"
        recordType="ER"
        singlePerson={erSinglePerson}
        singleTime={erSingleTime}
        avgPerson={erAvgPerson}
        avgTime={erAvgTime}
      />
      <RecordCard
        backgroundColor="ocw-grey"
        recordType="NR"
        singlePerson={nrSinglePerson}
        singleTime={nrSingleTime}
        avgPerson={nrAvgPerson}
        avgTime={nrAvgTime}
      />
      <RecordCard
        backgroundColor="ocw-light-grey"
        recordType="CB"
        singlePerson={cbSinglePerson}
        singleTime={cbSingleTime}
        avgPerson={cbAvgPerson}
        avgTime={cbAvgTime}
      />
    </Row>
  )
}
export default MainBoardRecords
