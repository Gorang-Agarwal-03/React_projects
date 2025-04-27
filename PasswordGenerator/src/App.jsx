import { use } from 'react'
import { useState , useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [character,setCharacter] = useState(false)
  const [Password,setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerate = useCallback( () =>{
      let pass= ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(number) str+="0123456789"
      if(character) str +="`~!@#$%^&*()_-+{}[]"

      for(let i=1;i<=length;i++){
        let char = Math.floor(Math.random()* str.length+1)
        pass += str.charAt(char)
      }
      setPassword(pass)
  } , [length,number,character,setPassword])

  const copyPasstoclipboard=useCallback( ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(() =>{passwordGenerate()},[length,number,character,passwordGenerate])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
          ref = {passwordRef}
          />
           <button
           onClick={copyPasstoclipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:cursor-pointer'>Copy</button>
        </div>
        <div className='flex flex-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => {
                setNumber((prev) =>!prev);
              }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
              type="checkbox"
              defaultChecked={character}
              id='characterInput'
              onChange={() => {
                setCharacter((prev) =>!prev);
              }}
             />
             <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
