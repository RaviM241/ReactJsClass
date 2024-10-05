import { useState } from "react"


function App() {
  const [color, setColor] = useState()
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("Red")}
            style={{ backgroundColor: "red" }}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={() => setColor("white")}
            style={{ backgroundColor: "white" }}>white</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("black")}
            style={{ backgroundColor: "black" }}>Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" onClick={() => setColor("Yellow")}
            style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("Blue")}
            style={{ backgroundColor: "Blue" }}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("Green")}
            style={{ backgroundColor: "Green" }}>Green</button>

        </div>
      </div>
    </div>
  )
}

export default App
