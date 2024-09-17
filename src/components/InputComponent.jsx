import React, { useState } from 'react'

function InputComponent({allTodo,setAllTodo}) {
    const[currentState, setCurrentState] = useState('')

    function handleInput(e){
        setCurrentState(e.target.value);
        
    }
    function addTodo(){
        if(currentState){
            setAllTodo([...allTodo,
                {title:currentState,id:new Date().getTime()}
            ])
            setCurrentState('')
        }
    }

  return (
    <div>
        <input type="text" placeholder='Insert TODO' onChange={handleInput} value={currentState} name="" id="" />
        <button 
        className='bg-white text-black'
        onClick={addTodo}
        >Add TODO</button>
    </div>
  )
}

export default InputComponent