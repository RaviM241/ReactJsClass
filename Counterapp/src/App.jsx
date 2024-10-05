import { useState } from "react"

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }
  }
  const removeValue = () => {
    if (counter > 1) {

      setCounter(counter - 1);
    } else {
      useState(counter);
    }
  }


  return (
    <>
      <div style={{ margin: "200px" }}>
        <h1>React Simple</h1>
        <h3>Counter Value:{counter}</h3>
        <button onClick={addValue}>add Value</button>
        <button onClick={removeValue}>remove Value</button>
      </div>
    </>
  )
}

export default App
