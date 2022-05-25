import { useState } from 'react';
import PanelAccordion from './info-accordion';

function SidePanel() {
  

  return (
    <div className="w-1/4 h-screen text-center text-white font-bold" style={{background: "#50A3A9"}}>
        <div className="text-xl p-2">STAGE l</div>
        <PanelAccordion />
    </div>
  );
}

export default SidePanel;