import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [code, setCode] = useState("ReactJS");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ReactJS Bar Code Generator!</p>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Type here..."
        />
        <br />
        <img
          src={`https://barcode.tec-it.com/barcode.ashx?data=${code}&code=Code128&multiplebarcodes=true&translate-esc=true&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&codepage=Default&qunit=Mm&quiet=0&hidehrt=False&eclevel=M&dmsize=Default`}
          alt={code}
        />
      </header>
    </div>
  );
}

export default App;
