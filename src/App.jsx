import "./App.css";
import Rate from "./components/rate/rate";
import { useState } from "react";
import Result from "./components/result/Result";

function App() {
  const [rate, setRate] = useState();
  const [sumbit, setSubmit] = useState(false);

  return (
    <>
      {sumbit ? (
        <Result rate={rate} />
      ) : (
        <Rate rate={rate} setRate={setRate} setSubmit={setSubmit} />
      )}
    </>
  );
}

export default App;
