import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const [length, SetLength] = useState(8);
  const [numbersAllowed, setNumbersallowed] = useState(false);
  const [charAllowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllowed) str += 123456789;
    if (charAllowed) str += "@#!%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);      
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numbersAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className="max-w-md mx-auto mt-5 bg-white px-8 py-10 rounded-xl shadow-lg">
      <div className="flex gap-2">
        <input
          type="text"
          className="w-full rounded-l-md py-2 ring-1 pl-2 focus:outline-2 focus:border-0 focus:outline-sky-400"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="border border-black px-8 py-2 bg-gradient-to-r from-sky-400 to-pink-400 text-white font-semibold rounded-r-md shadow-gray-800"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="mt-5 flex justify-around gap-5">
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => SetLength(Number(e.target.value))}
            className="cursor-pointer accent-pink-500"
          />
          <label>{length}</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numbersAllowed}
            className="cursor-pointer accent-sky-500 w-4 h-4"
            onChange={(e) => setNumbersallowed(e.target.checked)}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={charAllowed}
            className="cursor-pointer accent-sky-500 w-4 h-4"
            onChange={(e) => setCharallowed(e.target.checked)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
