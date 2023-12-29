import { useState } from "react";
import Count from "./Count";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [visibility, setVisibility] = useState(true);
  function handleCountChange(type = "") {
    if (type === "increment") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div>
        <button onClick={() => setVisibility(!visibility)}>
          Show / Hide Count
        </button>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={() => handleCountChange("decrement")}>-</button>
        </div>
        <div className="col">{visibility && <Count count={count} />}</div>
        <div className="col">
          <button onClick={() => handleCountChange("increment")}>+</button>
        </div>
      </div>
    </div>
  );
}
