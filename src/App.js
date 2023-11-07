import { Component, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  function fetchAdvce() {
    const meet = axios.get("https://api.adviceslip.com/advice");
    console.log(meet);
  }

  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <div>
      <h1>Hello World {fetchAdvce}</h1>
    </div>
  );
}

export default App;
