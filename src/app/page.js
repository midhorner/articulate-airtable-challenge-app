'use client'

import RecordsTable from "@/components/RecordsTable";
import { Box, Button, Dialog, Field, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

// Set Airtable API info into variables
const apiKey = 'pat9DSbh293oCwas2.d1752f597897fb0c291e1351252b15d4ad253777ade95ffe0536674c334ccbb7';
const base = 'appA2Q8AsRUbmN7jE';
const table = 'Bugs';

export default function Home() {
  // sets/resets the initial form fields to blank
  const initialFormData = {
    bugID: '',
    bugDescription: '',
    affectedComponents: '',
    priority: '',
    status: '',
    stepsToReproduce: '',
    date: '',
  }
  
  // hooks
  const [records, setRecords] = useState([]);
  // for dialog (modal) setting
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // sets form model, clears on close
  const [formData, setFormData] = useState(initialFormData);

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
        <Box mb={"5"} w={"15rem"} borderBottom={"2px solid black"} fontSize={"20px"}>Bug Tracker</Box>
        <RecordsTable records={dataRecords} />
        {/* Dialog is the new Modal in Chakra */}
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {/* asChild handles a hydration error in console */}
          <Dialog.Trigger asChild>
            <Button mt={"5"}>Create +</Button>
          </Dialog.Trigger>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content borderRadius={"xl"} p={"6"} bg={"white"} shadow={"lg"} minW={"md"}>
              <Dialog.CloseTrigger />
              <Dialog.Header>
                <Dialog.Title fontSize={"xl"} fontWeight={"bold"}>
                  Create New Bug Report
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body display={"flex"} flexDir={"column"} gap={"4"} mt={"2"}>
                {Object.entries(formData).map(([field, value]) => {
                  // fields display based off initialform object, used some regex and hardcode to fix
                  const label = field == 'bugID' ? 'Bug ID' : field.replace(/([A-Z])/g, ' $1');
                  return (
                    // used to add help text, and error messages
                    <Field.Root key={field} name={field}>
                      <Field.Label textTransform={"capitalize"}>
                        {label}
                      </Field.Label>
                      <Input
                        value={value}
                        name={field}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [field]: e.target.value }))
                        }
                      />
                    </Field.Root>
                  );
                })}
              </Dialog.Body>
              <Dialog.Footer mt={"4"} display={"flex"} justifyContent={"flex-end"} gap={"2"}>
                <Button variant={"ghost"} onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button>
                  Save
                </Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Root>
        <Button mt="5" ml="10">Delete -</Button>
      </Box>
    </Box>
  );
}
