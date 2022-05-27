import { Accordion } from "@mantine/core";
import ItemLabel from "./panel-label-name";
import { labelsAndLinks } from "./stage1/stage-db";

import LabelLinks from "./panel-label-links";

function StagesAccordion() {
  const labels = Object.keys(labelsAndLinks);

  return (
    <Accordion>
      {labels.map((label, index) => (
        <Accordion.Item label={<ItemLabel itemLabel={label} />} key={index}>
          <LabelLinks panelLabel={label} />
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default StagesAccordion;
