import { Accordion } from '@mantine/core';

function PanelAccordion() {
  return (
    <Accordion>
      <Accordion.Item label="Customization">
        Colors, fonts, shadows and many other parts are customizable to fit your design needs
      </Accordion.Item>

      <Accordion.Item label="Flexibility">
        Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles
      </Accordion.Item>

      <Accordion.Item label="No annoying focus ring">
        With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
      </Accordion.Item>
    </Accordion>
  );
}

export default PanelAccordion;