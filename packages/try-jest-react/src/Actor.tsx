import { useContext, useState } from "react";
import { TraceContext } from "./TraceContext";

function Actor() {
  const [count, setCount] = useState(0);
  const trace = useContext(TraceContext);

  const onClick = () => {
    trace.push(`before setCount(${count + 1})`);
    setCount(count + 1);
  };

  trace.push(`rendering Actor : ${count}`);

  return (
    <div className="actor">
      <h1 data-testid="clickable" onClick={onClick}>
        actor-name
      </h1>
      <p data-testid="count">{count}</p>
    </div>
  );
}

export default Actor;
