import { useState } from "react"

function App() {
  const [color,setColor] = useState("#B9D9EB")

  return (   
    <>
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor :color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>

          <button onClick={() => setColor("blue")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>

          <button onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>

          <button onClick={() => setColor("black")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}}>Black</button>

          <button onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"grey"}}>Grey</button>

          <button onClick={() => setColor("#FF0080")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#FF0080"}}>Pink</button>

          <button onClick={() => setColor("#FFBF00")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#FFBF00"}}>Yellow</button>

          <button onClick={() => setColor("#4B0082")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#4B0082"}}>Purple</button>

          <button onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"violet"}}>Violet</button>

          <button onClick={() => setColor("#CD7F32")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#CD7F32"}}>Bronze</button>

          <button onClick={() => setColor("#36454F")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#36454F"}}>Charcoal</button>

          <button onClick={() => setColor("#F04A00")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#F04A00"}}>Orange</button>
        </div>
      </div>
    </div>
    </>

  )
}

export default App
