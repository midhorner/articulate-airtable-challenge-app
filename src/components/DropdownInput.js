import { Select, Portal, createListCollection } from "@chakra-ui/react"
import { useState } from "react";

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

const DropdownInput = ({ getValue, column }) => {
    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);
    const dropdownItems = column.columnDef.header == 'Priority' ? priorities : statuses;

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
            <Select.Content>
                {dropdownItems.items.map((item) => (
                <Select.Item item={item} key={item.value}>
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