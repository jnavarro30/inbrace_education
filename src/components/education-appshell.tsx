import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

import StagesAccordion from "./stages-accordion";
import QuickNotes from "./quick-notes";

export default function EducationAppShell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      className="text-white"  
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : "#1F2248",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          style={{background: "#50A3A9"}}
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>STAGE l</Text>
          <StagesAccordion />
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header className="bg-black text-white flex md:justify-center items-end" height={70} p="md">
            <div className="font-bold text-2xl mr-4">inbrace</div>
            <div className="ml-2 mr-4">education</div>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            
            
            
          </div>
        </Header>
      }
    >
      <QuickNotes />
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
