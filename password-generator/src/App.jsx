import { useState, useCallback, useEffect, useRef } from "react"

function App() {

const [length, setlength] = useState(8)
const [numberAllowed, setNAllowed] = useState(false)
const [charactersAllowed, setCAllowed] = useState(false)
const [password, setPassword] = useState("")

const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) str += "0123456789" ;
      if (charactersAllowed) str += "!@#$%^&*()_+=-|/?.,<>" 

      for (let i = 1; i <= length; i++) {
            let char = Math.floor( Math.random() * str.length + 1 )
            pass += str.charAt(char)
      }

      setPassword(pass)

   }, [length, numberAllowed, charactersAllowed, setPassword])

const passwordRef = useRef(null)

const copytoClipboard = useCallback(() => { 
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
}, [password])

useEffect(() => {
   passwordGenerator()
}, [length, numberAllowed, charactersAllowed, passwordGenerator])

   
return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
         <h1 className="text-white text-center"> Password Generator</h1>
         <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white" placeholder="password" ref={passwordRef} readOnly />
            <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick ={copytoClipboard}>Copy</button>
         </div>
         <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1"></div>
               <input type="range" name="" id="" min={6} value={length} className="cursor-pounter" onChange={(e) => setlength(e.target.value)}  />
               <label htmlFor="">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
               <input type="checkbox" name="" id="numberInput" defaultChecked={numberAllowed} onChange={() => setNAllowed((prev) => !prev)} />
               <label htmlFor="">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
               <input type="checkbox" name="" id="characterInput" defaultChecked={charactersAllowed} onChange={() => setCAllowed((prev) => !prev)} />
               <label htmlFor="">Characters</label>
            </div>
      </div>
    </>
  )
}

export default App
