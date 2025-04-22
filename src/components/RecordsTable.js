import React from 'react'

const RecordsTable = (dataRecords) => {
  return (
    <>
    {dataRecords.records.map((record) => (<div key={record.id}>{record.bugID}</div>))}
    </>
  )
}

export default RecordsTable