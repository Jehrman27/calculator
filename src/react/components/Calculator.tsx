import { useState } from "react";

export const Calculator = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ backgroundColor: "#61DBFB" }}
    >
      clicks: {count}
    </button>
  );
};

export default Calculator;
