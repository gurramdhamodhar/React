import React from 'react'

function Card() {
  return (
   <div className='w-96 p-4 h-auto bg-orange-400 dark:bg-slate-700 rounded-md'>
    <div className='p-5'>
        <img src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764524_1280.jpg" alt=""  className='bg-cover' />
    </div>
       <p className='text-2xl font-bold px-5 text-white dark:text-orange-400'>Find joy in everything you choose to do</p>
       <button className='ml-5 my-4 px-5 py-2 bg-white dark:text-orange-400 dark:hover:bg-orange-400 dark:hover:text-white  rounded-4xl text-sm font-medium'>Subscribe</button>
   </div>
  )
}

export default Card