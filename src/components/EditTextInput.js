import React from 'react'
import { Textarea } from "@chakra-ui/react";
import { useState } from 'react';

const EditTextInput = ({ getValue}) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
  
  return (
    <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant={"subtle"}
        autoresize
        backgroundColor={"#F2F0EF"}
        fontSize={"15px"}
    />
  );
};
export default EditTextInput;