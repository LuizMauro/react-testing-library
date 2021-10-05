import React, { useState } from "react";
import "./index.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  function getModifier() {
    if (counter > 0) return "counter__title--increment";
    if (counter < 0) return "counter__title--decrement";
    return "";
  }

  return (
    <div className="counter">
      <h1
        data-testid="titulo-counter"
        className={`counter__title ${getModifier()}`}
      >
        {counter}
      </h1>
      <section className="buttons">
        <button
          data-testid="button-increment"
          onClick={() => setCounter(counter + 1)}
          className="button button--increment"
        >
          incrementar
        </button>
        <button
          data-testid="button-decrement"
          onClick={() => setCounter(counter - 1)}
          className="button button--decrement"
        >
          decrementar
        </button>
      </section>
    </div>
  );
}

export default Counter;
