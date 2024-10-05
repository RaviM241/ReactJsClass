import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useref hook
  const passwordRef = useRef(null);
  const copyPasswordClicBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwxyz"
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += "@#$%^&*(){}/+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4  py-3 my-4 shadow-md text-orange-500 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password Generator!</h1>
        <div className="flex shadow md-4 rounded-lg overflow-hidden">
          <input type="text" value={password} className='outline-none w-full px-3 py-1' placeholder='password' readOnly
            ref={passwordRef} />
          <button className="outline-none copy bg-blue-600 text-white px-3 py-0.5  shrink-0" onClick={copyPasswordClicBoard} > Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mt-3'>
          <div className='flex items-center gap-x-1'>
            <input type="range" className="cursor-pointer " min={6} max={100} value={length} id='range' onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="range">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='NumberInput'
              onClick={() => { setNumAllowed((prev) => !prev) }} />
            <label htmlFor="NumberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='NumberInput'
              onClick={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor="NumberInput">Characters!</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
