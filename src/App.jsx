import "./App.css";
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";
import { useState } from "react";
import Child1 from "./components/Child1.jsx"

function App() {
  const [digit, setDigit] = useState(0);

  const companyInfo = {
    name: "P2PClouds",
    address: "Arfa Tower Lahore",
    contact: "info@p2pclouds.net",
  };

  return (
    <div className="app">
      <div className="app-content">
        <Child1 UserName={"Hassan Ali"}/>
        <Header
          name={"Hassan Ali"}
          age={19}
          companyInfo={companyInfo}
        />

        <Counter
          digit={digit}
          setDigit={setDigit}
        />

      </div>
    </div>
  );
}

export default App;
