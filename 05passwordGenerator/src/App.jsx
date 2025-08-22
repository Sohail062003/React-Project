import { use, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use ref
  const passwordRef = useRef(null);

  const genratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (charAllowed) str += "!@#$%^&*()_+";
    if (numberAllowed) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    genratePassword();
  }, [length, numberAllowed, charAllowed, genratePassword]);

  const copyPasswordToClipBoard = useCallback(()=> {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, length); 
      window.navigator.clipboard.writeText(password);
  }, [password])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-400">
        <h3 className="text-center ">Password Generator</h3>
        <div className="flex gap-1 shadow rounded-lg overflow-hidden m-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full px-2 py-2 mb-4 text-orange-400 rounded-lg "
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipBoard} className="bg-blue-500 outline-none text-white px-1 py-1 rounded-lg mb-4 ">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed((prev) => !prev)}
            />
            <label>Number</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input 
              type="checkbox"
              id="numberInput"
              checked={charAllowed}
              onChange={(e) => setCharAllowed((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
