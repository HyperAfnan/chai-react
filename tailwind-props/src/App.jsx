import './App.css'
import { Card } from "./components/card.jsx"

function App() {
  return (
    <>
         <div className="flex flex-wrap justify-center items-center justify-items-center gap-4 p-4">
            <Card username="afnan" />
            <Card username="akku" />
         </div>
    </>
  )
}

export default App
