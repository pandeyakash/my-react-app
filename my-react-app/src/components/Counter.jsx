import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>Dec</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Inc</button>
      </div>
    </>
  );
};
