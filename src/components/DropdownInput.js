import { createListCollection, Portal, Select } from "@chakra-ui/react"
import { useState } from "react";
// Airtable API key
var Airtable = require('airtable');
var base = new Airtable({apiKey: ''}).base('appA2Q8AsRUbmN7jE');

// use chakra createListCollection for select boxes per documentation
const statuses = createListCollection({
    items: [
      { label: "New", value: "New" },
      { label: "In Progress", value: "In Progress" },
      { label: "Resolved", value: "Resolved" },
      { label: "Closed", value: "Closed" },
    ],
  });
const priorities = createListCollection({
    items: [
        { label: "Low", value: "Low" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Urgent", value: "Urgent" },
    ],
});

// cell context props
const DropdownInput = ({ getValue, row, column }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const dropdownItems = column.columnDef.header == 'Priority' ? priorities : statuses;
    
    // API call on select
    const updateAirtable = (value) => {
        setValue(value);
        const jsonRecord = {
            "id": `${row.original.recordID}`,
            "fields": {}
        }
        jsonRecord.fields[column.columnDef.header] = value;
        base('Bugs').update([jsonRecord]);
    };
    // documentation was pretty straightforward
    return (
        <Select.Root collection={dropdownItems} size="sm">
        <Select.HiddenSelect />
        <Select.Control>
            <Select.Trigger>
                <Select.ValueText placeholder={value} />
            </Select.Trigger>
                <Select.IndicatorGroup>
            <Select.Indicator />
            </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
            <Select.Positioner>
            <Select.Content backgroundColor={"#FAFFFF"}>
                {dropdownItems.items.map((item) => (
                <Select.Item backgroundColor={"#FAFFFF"} color={"black"} item={item} key={item.value} onClick={() => {updateAirtable(item.value)}}>
                    {item.label}
                    <Select.ItemIndicator />
                </Select.Item>
                ))}
            </Select.Content>
            </Select.Positioner>
        </Portal>
        </Select.Root>
    );
};
export default DropdownInput;