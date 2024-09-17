import "./App.css";
import { useEffect, useState } from "react";
import InputComponent from "./components/InputComponent";
import OutputComponent from "./components/OutputComponent";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [allTodo, setAllTodo] = useState([])

  useEffect(()=>{
    console.log(allTodo);
    
  },[allTodo])

  return (
    <div className='flex flex-col items-center justify-center my-[100px] bg-blue-500 p-10'>
        {/* TODO ONPUT */}
        <InputComponent allTodo={allTodo} setAllTodo  ={setAllTodo}/>
        {/* TODO OUTPUT */}
        <OutputComponent allTodo={allTodo} setAllTodo={setAllTodo}/>
    </div>
  );
}

export default App;
