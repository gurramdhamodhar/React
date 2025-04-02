import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    console.log(data);
    
  return (
    <div className='flex flex-col justify-center items-center py-6'>
      <img src={data.avatar_url} alt="" className='w-20 h-20 rounded-full' />
      <p>{data.name}</p>
      <p>{data.bio}</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch(`https://api.github.com/users/gurramdhamodhar`);
    return response.json() 
}