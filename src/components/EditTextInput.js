import React from 'react'
import { Textarea } from "@chakra-ui/react";
import { useState } from 'react';
// Airtable API key
var Airtable = require('airtable');
var base = new Airtable({apiKey: ''}).base('appA2Q8AsRUbmN7jE');

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
            backgroundColor={"#FAFFFF"}
            fontSize={"15px"}
        />
    );
};
export default EditTextInput;