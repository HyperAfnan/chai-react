import { useParams } from "react-router-dom";

const User = () => {
   const { userId } = useParams();
   return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
         User: {userId}
      </div>
   )
}

export default User
