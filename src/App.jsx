import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react"

function App() {
  const [digit, setDigit] = useState(0);

  const companyInfo = {
    name: "P2PClouds",
    address: "Arfa Tower Lahore",
    contact: "info@p2pclouds.net",
  };

  return (
    <div>
      <Header name={"Hassan Ali"} age={19}
       companyInfo={companyInfo}/>
       
      <Header age={19}
       companyInfo={companyInfo}/>

       <Counter digit={digit} setDigit={setDigit}/>
    </div>
  );
}

export default App;