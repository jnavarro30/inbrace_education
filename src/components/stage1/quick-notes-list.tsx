import { List, ThemeIcon } from "@mantine/core";
import { CircleCheck } from "tabler-icons-react";

function NoteList() {
  const noteItems = [
    "Review case details in portal",
    "Import study to 3-Matic Wizard",
    "Ignore missing U/L parts",
    "Import Gen ll brackets",
    "Indicate base points",
    "Note BFL's",
    "Check for collision",
    "Export measurements",
    "Close/Open 3-matic",
    "Organize files",
    "Run 3-Matic Script",
    "Uploaded files to portal",
    "Upload to Dropbox",
    "Submit",
  ];

  return (
    <List
      className="grid grid-cols-2"
      type="ordered"
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <CircleCheck size={16} />
        </ThemeIcon>
      }
    >
      {noteItems.map((note, index) => (
        <List.Item key={index}>{note}</List.Item>
      ))}
    </List>
  );
}

export default NoteList;
