import './App.css'
import Login from "./Components/Login.jsx"
import Profile from "./Components/Profile.jsx"
import UserContextProvider from "./context/userContextProvider.jsx"

function App() {

  return (
    <UserContextProvider>
         <h1>React with chai  </h1>
         <Login />
         <Profile />
    </UserContextProvider>
  )
}

export default App
