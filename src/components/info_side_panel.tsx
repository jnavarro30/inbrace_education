import { useState } from 'react';
import PanelAccordion from './info-accordion';

function SidePanel() {
  

  return (
    <div className="w-1/4 h-screen" style={{background: "#50A3A9"}}>
        <PanelAccordion />
    </div>
  );
}

export default SidePanel;