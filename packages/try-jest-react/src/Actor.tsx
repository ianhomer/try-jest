import { useState } from "react";

function Actor() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

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
