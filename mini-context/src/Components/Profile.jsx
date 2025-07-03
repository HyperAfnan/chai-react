import { useContext } from "react"
import { UserContext } from "../context/userContext.js"

export default function Profile() {

   const { user } = useContext(UserContext)

   if (!user) { return ( <> Please login </>) }
  return (
    <div>
         Welcome {user.username}
         
      </div>
  )
}

