"use client";

import { useState } from "react";

export default function PropertiesList() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Counter {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      ></button>
    </section>
  );
}
