import { useState } from 'react'
import './App.css'

function App() {
   const [color, setColor] = useState("#ff0000")
   const colors = [
      { id: 1, color : "red", colorCode: "#ff0000" },
      { id: 2, color : "green", colorCode: "#00ff00" },
      { id: 3, color : "blue", colorCode: "#0000ff" },
      { id: 4, color : "black", colorCode: "#000000" },
      { id: 5, color : "white", colorCode: "#ffffff" },
   ]
   const Button = ({color, colorCode}) => ( <button style={ {backgroundColor: colorCode} } onClick={() => setColor(colorCode)} > {color} </button>)
   return (
      <>
         <div style={{backgroundColor:color, height: "100vh" , width: "100vw" }}>
         <div style={{  padding: "10px", color: "white", display: "flex", flexDirection: "row", justifyContent:"center", alignItems: "center" }}>
            {colors.map(({id, color, colorCode}) => {
               return <Button key={id} color={color} colorCode={colorCode} />
            })}</div>
         </div>
      </>
   )
}

export default App
