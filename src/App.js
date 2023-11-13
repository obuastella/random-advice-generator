import "./App.css";
import React, { useEffect, useState } from "react";
import divderDesktop from "./images/pattern-divider-desktop.svg";
import divderMobile from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";
function App() {
  const [adivce, setAdvice] = useState("NO advice yet");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="card">
      <p>Adivce #{adivce.id}</p>
      <h2>{adivce.advice}</h2>
      <img src={divderDesktop} className="divider-desktop" alt="divider" />
      <img src={divderMobile} className="divider-mobile" alt="divider" />
      <div className="dice" onClick={getAdvice}>
        <img src={dice} alt="dice" />
      </div>
    </div>
  );
}

export default App;
