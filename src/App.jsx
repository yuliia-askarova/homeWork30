import React, { useState } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";

const App = () => {
 const [count, setCount] = useState(0);

  const handleMinus = () => {
   setCount(prev => prev -= 1)
  }

 const handlePlus = () => {
  setCount(prev => prev += 1)
  }

  const handleReset = () => {
    setCount(0)
  }

    return (
      <div>
        <Counter
          count={count}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
          handleReset={handleReset}
        />
      </div>
    );
  
}

export default App;






