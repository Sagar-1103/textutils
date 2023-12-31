import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [darkColor, setDarkColor] = useState("#27323A");

  const colorChanger = (colorSelected) => {
    setDarkColor(colorSelected);
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = darkColor;
      showAlert("Dark mode has been enabled", "success");
      // document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.body.style.color = "black";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          colorChanger={colorChanger}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />

            <Route exact path="/"
             element={<TextForm
              showAlert={showAlert}
              heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
              mode={mode}
              darkColor={darkColor}
            />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
