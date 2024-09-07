import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/jeet-mahapatra")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [] )

  return (
    <div className='flex items-center justify-center text-center m-4 p-4 bg-gray-600 text-white text-3xl'>
    <img className="flex  p-5 rounded-full h-50 w-50" src={data.avatar_url} alt="Git picture " width={100}/>
    Github Followers: {data.followers}
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/jeet-mahapatra')

    return response.json()
}
