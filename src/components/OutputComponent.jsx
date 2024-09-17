import React from 'react'

function OutputComponent({allTodo,setAllTodo}) {
    console.log(allTodo);

    function handleRemoveTodo(id){
        let removeTodo = allTodo.filter((todo)=>todo.id !== id)
        setAllTodo(removeTodo)
        
    }
    
  return (
    <div className='flex flex-col gap-5 mt-5'>
       {(allTodo.length > 0)? allTodo.map((el,index)=>{
            return <div className='flex items-center gap-2' key={el.id}>
                <h2 className='bg-white p-2' >{el.title}</h2>
                <button onClick={()=>handleRemoveTodo(el.id)} className=' bg-white p-2 text-red-500'>Remove</button>
            </div>
        }):<h2>Nemate todo za danas,unesite novi ako zelite.</h2>}
    </div>
  )
}

export default OutputComponent