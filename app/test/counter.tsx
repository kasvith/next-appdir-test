"use client";

import { useState } from "react";
import SC from "./sc";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-50 p-10 text-black">
        <h1 className="text-2xl font-mono">Client Component:</h1>
        <p>Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="p-5 bg-gray-600 hover:bg-gray-400"
        >
          Increment
        </button>
        <SC />
        (server component with data fetching is directly imported into client
        component)
      </div>
    </>
  );
}
