import { Paper } from "@mantine/core";

import NoteList from "./stage1/quick-notes-list";

function QuickNotes() {
  return (
    <Paper shadow="xs" p="md">
      <NoteList />
    </Paper>
  );
}

export default QuickNotes;
