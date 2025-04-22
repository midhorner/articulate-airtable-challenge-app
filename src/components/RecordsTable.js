import { Box } from '@chakra-ui/react'
import React from 'react'

const RecordsTable = (dataRecords) => {
  return (
    <Box>
    {dataRecords.records.map((record) => (<div key={record.recordID}>{record.bugID}{console.log(record)}</div>))}
    </Box>
  )
}

export default RecordsTable