import { useState } from "react";
import "../App.css";

function Doctor() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Doctor's Side</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default Doctor;
