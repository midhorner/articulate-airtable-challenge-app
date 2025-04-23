import { Box } from '@chakra-ui/react'
import { useReactTable } from '@tanstack/react-table';
import React from 'react'

const columns = [
  {
    accessorKey: 'bugID',
    header: "Bug ID",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'bugDescription',
    header: "Bug Description",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'affectedComponents',
    header: "Affected Components",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'priority',
    header: "Priority",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'status',
    header: "Status",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'stepsToReproduce',
    header: "Steps to Reproduce",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'date',
    header: "Reported Date",
    cell: (props) => <p>{props.getValue()}</p>
  }
]

const RecordsTable = (dataRecords) => {
  const table = useReactTable({
    data: dataRecords.records,
    columns,
  });
  return (
    <Box>
    <Box w={table.getTotalSize()} borderRadius={"lg"} borderWidth={"2px"} shadow={"8px 8px 16px lightgray"}>
        {table.getHeaderGroups().map(headerGroup => 
        <Box display={"flex"} flexDir={"row"}  key={headerGroup.id}>
          {headerGroup.headers.map(header => 
            <Box px={"5"} py={"3"} w={header.getSize()} borderBottom={"1px solid black"} key={header.id}>
              {header.column.columnDef.header}
            </Box>
          )}
        </Box>
        )}
      </Box>
    </Box>
  )
}

export default RecordsTable