import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Tương tự như componentDidMount và componentDidUpdate:
  useEffect(() => {
    // Cập nhập document title sử dụng browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;
