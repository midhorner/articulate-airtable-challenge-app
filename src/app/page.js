'use client'

import axios from "axios";
import { useEffect, useState } from "react";
const apiKey = 'pat9DSbh293oCwas2.d1752f597897fb0c291e1351252b15d4ad253777ade95ffe0536674c334ccbb7';
const base = 'appA2Q8AsRUbmN7jE';
const table = 'Bugs';

export default function Home() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get(`https://api.airtable.com/v0/${base}/${table}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })
    .then((res) => setRecords(res.data.records))
    .catch((err) => console.log(err));
  }, []);
  {console.log(records)}
  return (    
    <>    
      <h1>Hello World!</h1>
    </>
  );
}
