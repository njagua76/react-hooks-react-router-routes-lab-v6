import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Pages render here */}
    </div>
  );
}

export default App;
