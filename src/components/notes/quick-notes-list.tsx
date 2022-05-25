import { List, ThemeIcon } from '@mantine/core';
import { CircleCheck, CircleDashed } from 'tabler-icons-react';

function NoteList() {
  return (
    <List type="ordered"
    icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <CircleCheck size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}

export default NoteList;