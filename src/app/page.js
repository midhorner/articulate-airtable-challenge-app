'use client'

import RecordsTable from "@/components/RecordsTable";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

// Set Airtable API info into variables
const apiKey = 'pat9DSbh293oCwas2.d1752f597897fb0c291e1351252b15d4ad253777ade95ffe0536674c334ccbb7';
const base = 'appA2Q8AsRUbmN7jE';
const table = 'Bugs';

export default function Home() {
  // hooks
  const [records, setRecords] = useState([]);

  // API call to get records
  useEffect(() => {
    axios.get(`https://api.airtable.com/v0/${base}/${table}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })
    .then((res) => setRecords(res.data.records))
    .catch((err) => console.log(err));
  }, []);

  // data object to pass to records table component
  const dataRecords = records.map(record => ({
    recordID: record.id,
    bugID: record.fields['Bug ID'],
    bugDescription: record.fields['Bug Description'],
    affectedComponents: record.fields['Affected Components'],
    priority: record.fields['Priority'],
    status: record.fields['Status'],
    stepsToReproduce: record.fields['Steps to Reproduce'],
    date: record.fields['Reported Date'],
  }));

  return (    
     
    <Box m={"5"} display={"flex"} alignItems={"center"} flexDir={"column"}>
      <Box w={"fit-content"}>
        <RecordsTable records={dataRecords} />
      </Box>
    </Box>
  );
}
