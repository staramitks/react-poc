import React, { useState, useEffect } from 'react';

function UseEffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log( `You clicked ${count} times`);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me -HookEffect
      </button>
    </div>
  );
}

export default UseEffectCounter