import React from 'react'
import { Textarea } from "@chakra-ui/react";
import { useState } from 'react';
// Airtable API call
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pat9DSbh293oCwas2.d1752f597897fb0c291e1351252b15d4ad253777ade95ffe0536674c334ccbb7'}).base('appA2Q8AsRUbmN7jE');

// cell context props
const EditTextInput = ({ getValue, row, column  }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    // use third variable so API call only fires when value is different from initial value
    let compareValue = initialValue;
// API call onblur
const updateAirtable = () => {
    if(compareValue != value) {
      compareValue = value;
      const jsonRecord = {
          "id": `${row.original.recordID}`,
          "fields": {}
      }
      jsonRecord.fields[column.columnDef.header] = value;
      base('Bugs').update([jsonRecord]);
    }
  };
  
  return (
    <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={updateAirtable}
        variant={"subtle"}
        autoresize
        backgroundColor={"#F2F0EF"}
        fontSize={"15px"}
    />
  );
};
export default EditTextInput;