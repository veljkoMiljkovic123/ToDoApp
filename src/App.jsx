import "./App.css";
import { useEffect, useState } from "react";
import ToggleMode from "./components/ToggleMode";
import Products from "./components/Products";
function App() {
  const [darkMode, setDarkMode] = useState(true);



  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <ToggleMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <Products />
    </div>
  );
}

export default App;
