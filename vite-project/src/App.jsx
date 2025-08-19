import { useState } from 'react';

function App() {
  
  let [count, setCount] = useState(0);

  const addValue = ()=> {
    if (count < 20) {
      count ++;
      setCount(count);
      console.log(count);
    } else{
      alert("You can't increment beyond 20");
    }
  }

  const removeValue = () => {
    if (count > 0) {
      count --;
      setCount(count);
      console.log(count);
    } else {
      alert("You can't decrement below 0");
    }
  }

  return (
    <>
        <h1>hello world !!!</h1>
        <p>This is a simple React application.</p>
        <h2>the  Counter : {count}</h2>

        <button onClick={addValue}>Increment</button>
        <br />
        <br />
        <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
