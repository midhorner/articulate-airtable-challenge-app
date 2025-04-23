import React from 'react'
import { Box } from '@chakra-ui/react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import EditTextInput from './EditTextInput';

// Tanstack makes use of a column array to set table attributes/Cells take functions and props
const columns = [
  {
    accessorKey: 'bugID',
    header: "Bug ID",
    size: 220,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'bugDescription',
    header: "Bug Description",
    size: 300,
    cell: EditTextInput
  },
  {
    accessorKey: 'affectedComponents',
    header: "Affected Components",
    size: 300,
    cell: EditTextInput
  },
  {
    accessorKey: 'priority',
    header: "Priority",
    size: 150,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'status',
    header: "Status",
    size: 150,
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'stepsToReproduce',
    header: "Steps to Reproduce",
    size: 300,
    cell: EditTextInput
  },
  {
    accessorKey: 'date',
    header: "Reported Date",
    size: 150,
    cell: (props) => <p>{props.getValue()}</p>
  }
]

const RecordsTable = (dataRecords) => {
  const table = useReactTable({
    data: dataRecords.records,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // required for row model below
  });
  return (
    <Box>
      <Box w={table.getTotalSize()} borderRadius={"lg"} borderWidth={"2px"} shadow={"8px 8px 16px lightgray"}>
        {table.getHeaderGroups().map(headerGroup => 
        <Box display={"flex"} flexDir={"row"} key={headerGroup.id}>
          {headerGroup.headers.map(header => 
            <Box px={"5"} py={"3"} w={header.getSize()} borderBottom={"1px solid black"} key={header.id}>
              {header.column.columnDef.header}
            </Box>
          )}
        </Box>
        )}
        {/* row model uses the objects; flexRender for complex props (cell context) & data display */}
        {table.getRowModel().rows.map((row) => (
          <Box display={"flex"} flexDir={"row"} alignItems={"center"} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              cell.column.id == 'date' ? 
              <Box pl={"5"}  key={cell.id}>
                <Box>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Box>
              </Box> 
              :
              <Box px={cell.column.id != 'bugID' ? "2" : "5"} py={"3"} w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default RecordsTable