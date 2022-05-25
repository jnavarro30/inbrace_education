import { Text, Paper } from '@mantine/core';

import NoteList from './quick-notes-list';

function QuickNotes() {
  return (
    <Paper shadow="xs" p="md">
      <NoteList />
    </Paper>
  );
}

export default QuickNotes;