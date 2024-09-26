import React, {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count+1);
    console.log(count);
  }
  function decrement() {
    setCount(count-1);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
}

export default App;
