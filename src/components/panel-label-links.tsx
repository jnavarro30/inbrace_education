import { labelsAndLinks } from "./stage1/stage-db";

interface LabelProps {
  panelLabel: string;
}

function LabelLinks({ panelLabel }: LabelProps) {
    // typescript key value pairs not working hint: keyof
    
//   const links = labelsAndLinks[panelLabel];
const links = ["one", "two", "three"];

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}><a href="https://www.google.com" target="_blank">{link}</a></li>
      ))}
    </ul>
  );
}

export default LabelLinks;
