import { useState } from "react";
import "../App.css";

function Patient() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="patient">
        <h1>Patient's Side</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default Patient;
