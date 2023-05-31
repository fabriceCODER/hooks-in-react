//First hook method is useState 
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
//second hook method is useEffect
import React, { useEffect, useState } from 'react';

function DataFetching() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Perform data fetching or any other side effect here
    // Update the state using setData

    return () => {
      // Clean up any resources or subscriptions here
    };
  }, []); // Empty dependency array means the effect runs only once

  return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>;
}
//Third hook method is context
import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {
  const value = useContext(MyContext);

  return <div>Value from context: {value}</div>;
}
