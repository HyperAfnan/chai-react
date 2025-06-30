import { useLoaderData } from "react-router-dom"

// import { useEffect, useState} from "react"

const Github = () => {
   // const [data, setData] = useState(null);
   // useEffect(() => {
   //    fetch("https://api.github.com/users/HyperAfnan")
   //    .then(response => response.json())
   //    .then(data => {
   //       console.log(data)
   //       setData(data)
   //    })
   // }, [])
   const data = useLoaderData()
   return (
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
         Github Followers:  { data?.followers }
         <img src={data?.avatar_url} alt="image" />
      </div>
   )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubLoader = async () => {
      const response = await fetch("https://api.github.com/users/HyperAfnan")
      return response.json()
}
