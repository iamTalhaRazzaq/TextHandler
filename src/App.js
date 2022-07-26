import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      showAlert("Dark Mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode has been enabled!", "success");
    }
  };


  return (
    <>
      <Router> 
      <Navbar title="TextHandler" mode={mode} changeMode={changeMode} home="Home" about="About" search="Search"/>
      <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textform Boxheading="TextHandler helps to Analyze the Text in multiple ways as below : " showAlert={showAlert} mode={mode}></Textform>} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
