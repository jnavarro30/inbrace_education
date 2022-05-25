import { Accordion } from '@mantine/core';
import ItemLabel from './accordion-item-label';

function StagesAccordion() {
  const accordianItems = [
    {
      "label": "Intro",
      "info": "Welcome to inbrace!"
    },
    {
      "label": "Wizard",
      "info": "Custom 3 matic steps"
    }
  ];

  return (
    <Accordion>
      {
        accordianItems.map((item, index) => (
          <Accordion.Item label={<ItemLabel itemLabel={item.label} />} key={index}>
            <p className="text-white">{item.info}</p>
          </Accordion.Item>
        ))
      }
    </Accordion>
  );
}

export default StagesAccordion;