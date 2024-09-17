import React from 'react'

function SingleCard({el}) {
  return (
    <div className='bg-white dark:bg-slate-800 w-[250px] h-[350px] p-3 flex flex-col justify-center items-center'>
      
        <img src={el.thumbnail} alt="" className='w-[250px] h-[200px] object-cover' />
        <h3 className='dark:text-white'>{el.title.substring(0,15)}</h3>
        <p className='dark:text-white'>{el.description.substring(0,60)+'...'}</p>
        <p className='dark:text-white'>{el.price}$</p>
       
    </div>
  )
}

export default SingleCard