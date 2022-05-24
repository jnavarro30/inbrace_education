
import './App.css';
import NavHeader from "./components/nav_header";
import SidePanel from "./components/info_side_panel";

function App() {
  return (
    <div className="h-screen" style={{background: "#1F2248"}}>
      <NavHeader />
      <SidePanel />
    </div>
  );
}

export default App;
