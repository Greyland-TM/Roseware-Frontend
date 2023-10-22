import { useState } from "react";

export default function Test() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <span>{counter}</span>
      <button onClick={() => increment} className="p-6">
        Increment
      </button>
    </>
  );
}
