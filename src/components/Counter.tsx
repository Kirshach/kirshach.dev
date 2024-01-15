import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      Counter: {count()}
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
